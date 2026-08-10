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
 * Room the tags add to the node's layout box. Tags normally hang into the lane
 * that already sits between a node and its children, so this is `0` for any
 * block that fits — the rank pitch must not move when metadata is toggled.
 */
const reserved = (
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

const withTags = (over: Record<string, unknown> = {}) => ({
  nodeTagTypes: ["workplace", "reports"],
  visibleTagTypesSet: new Set(["workplace", "reports"]),
  ...over,
})

describe("useGraphRenderModel — tag row reservation", () => {
  it("reserves nothing when no tag columns are declared", () => {
    expect(reserved()).toBe(0)
  })

  it("keeps the rank pitch fixed for a tag block that fits the lane", () => {
    // The whole point: tags hang into the 130px lane that already exists
    // between a node and its children, so the node box does not grow and
    // nothing moves. What shrinks is the connecting line.
    expect(reserved(withTags({ measuredTagRowHeight: 26 }))).toBe(0)
    expect(reserved(withTags({ measuredTagRowHeight: 56 }))).toBe(0)
  })

  it("collapses when every declared column is toggled off", () => {
    // The Data Collection graph hard-codes `reserveTagRow` whenever a `tags`
    // mapper exists, so "hide all" used to leave the empty block the tags had
    // occupied. The visible-count gate has to win over that flag.
    expect(
      reserved({
        nodeTagTypes: ["workplace", "reports"],
        visibleTagTypesSet: new Set<string>(),
        reserveTagRow: true,
        measuredTagRowHeight: 56,
      })
    ).toBe(0)
  })

  it("grows the box only for a block that would eat the whole lane", () => {
    // 130 lane, 24px of line kept visible: a block over ~100px has to push the
    // next rank down, or the tags would run into it.
    expect(reserved(withTags({ measuredTagRowHeight: 120 }))).toBe(20)
    expect(reserved(withTags({ measuredTagRowHeight: 200 }))).toBe(100)
  })

  it("uses the measured height, not the tag count, to decide the overflow", () => {
    // Two columns estimate a single 36px row. A node whose labels wrap far
    // enough reports the real height, and only that can tell whether the block
    // still fits the lane.
    expect(reserved(withTags())).toBe(0)
    expect(reserved(withTags({ measuredTagRowHeight: 160 }))).toBe(60)
  })

  it("releases the extra room when the measurement shrinks again", () => {
    expect(reserved(withTags({ measuredTagRowHeight: 160 }))).toBeGreaterThan(0)
    expect(reserved(withTags({ measuredTagRowHeight: 40 }))).toBe(0)
  })
})
