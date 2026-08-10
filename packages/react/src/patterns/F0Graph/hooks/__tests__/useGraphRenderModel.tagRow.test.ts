import { ReactFlowProvider } from "@xyflow/react"
import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { createElement, type MutableRefObject, type ReactNode } from "react"

import type { TreeNode } from "../../types"
import { useGraphRenderModel } from "../useGraphRenderModel"

vi.mock("../useViewportGeometry", () => ({ useViewportGeometry: () => null }))

const wrapper = ({ children }: { children: ReactNode }) =>
  createElement(ReactFlowProvider, null, children)

const treeNode = (
  id: string,
  parentId: string | null,
  children: TreeNode<null>[] = []
): TreeNode<null> => ({
  id,
  parentId,
  data: null,
  children,
  depth: parentId === null ? 0 : 1,
  childrenCount: children.length,
  childrenLoaded: true,
})

/**
 * The reserved tag block is not returned directly in a comparable form, so it
 * is read off the layout: the child rank sits `nodeHeight + reservedTagHeight +
 * rankSep` below the parent, and the parent's own box carries the reservation.
 */
const parentBoxHeight = (
  options: Partial<Parameters<typeof useGraphRenderModel>[0]> = {}
) => {
  const child = treeNode("child", "root")
  const root = treeNode("root", null, [child])
  const nodeMap = new Map<string, TreeNode<null>>([
    ["root", root],
    ["child", child],
  ])

  const { result } = renderHook(
    () =>
      useGraphRenderModel({
        roots: [root],
        nodeMap,
        expandedNodes: new Set(["root"]),
        anchorNodeRef: { current: null } as MutableRefObject<string | null>,
        stableRenderNode: () => null,
        visibleTagTypesSet: new Set<string>(),
        zoomLevel: "detail" as const,
        direction: "TB" as const,
        hoveredEdgeId: null,
        ...options,
      } as Parameters<typeof useGraphRenderModel>[0]),
    { wrapper }
  )
  return result.current.reservedTagHeight
}

describe("useGraphRenderModel — tag row reservation", () => {
  it("reserves nothing when no tag columns are declared", () => {
    expect(parentBoxHeight()).toBe(0)
  })

  it("collapses when every declared column is toggled off", () => {
    // The regression: the Data Collection graph hard-codes `reserveTagRow`
    // whenever a `tags` mapper exists, so "hide all" used to leave the block of
    // empty canvas the tags had occupied. The visible-count gate has to win.
    expect(
      parentBoxHeight({
        nodeTagTypes: ["workplace", "reports"],
        visibleTagTypesSet: new Set<string>(),
        reserveTagRow: true,
      })
    ).toBe(0)
  })

  it("falls back to the count estimate before any node has measured", () => {
    expect(
      parentBoxHeight({
        nodeTagTypes: ["workplace", "reports"],
        visibleTagTypesSet: new Set(["workplace", "reports"]),
      })
    ).toBeGreaterThan(0)
  })

  it("prefers a measured height over the count estimate", () => {
    // Two columns estimate one 36px row. A node whose labels wrap to two rows
    // reports 56, and that — plus the pill/tags gap — is what gets reserved,
    // instead of the estimate that would put the next rank inside the node.
    const measured = parentBoxHeight({
      nodeTagTypes: ["workplace", "reports"],
      visibleTagTypesSet: new Set(["workplace", "reports"]),
      measuredTagRowHeight: 56,
    })
    const estimated = parentBoxHeight({
      nodeTagTypes: ["workplace", "reports"],
      visibleTagTypesSet: new Set(["workplace", "reports"]),
    })

    expect(measured).toBeGreaterThan(estimated)
    expect(measured).toBe(56 + 6)
  })

  it("shrinks the reservation when the measurement shrinks", () => {
    const tall = parentBoxHeight({
      nodeTagTypes: ["workplace"],
      visibleTagTypesSet: new Set(["workplace"]),
      measuredTagRowHeight: 56,
    })
    const short = parentBoxHeight({
      nodeTagTypes: ["workplace"],
      visibleTagTypesSet: new Set(["workplace"]),
      measuredTagRowHeight: 26,
    })

    expect(short).toBeLessThan(tall)
  })

  it("ignores a measurement once the columns are all hidden", () => {
    expect(
      parentBoxHeight({
        nodeTagTypes: ["workplace"],
        visibleTagTypesSet: new Set<string>(),
        measuredTagRowHeight: 56,
      })
    ).toBe(0)
  })
})
