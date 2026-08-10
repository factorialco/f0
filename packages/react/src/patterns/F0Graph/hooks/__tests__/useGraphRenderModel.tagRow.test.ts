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

/** Gap between the pill and the tag block, added to every measured height. */
const PILL_GAP = 6
/** Clearance kept below the fully-open block. */
const MARGIN = 32

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

const columns = ["workplace", "reports"]

describe("useGraphRenderModel — tag row reservation", () => {
  it("reserves nothing when no tag columns are declared", () => {
    expect(reserved()).toBe(0)
  })

  it("reserves the fully-open block plus its clearance", () => {
    expect(
      reserved({
        nodeTagTypes: columns,
        visibleTagTypesSet: new Set(columns),
        measuredTagRowHeight: 56,
      })
    ).toBe(56 + PILL_GAP + MARGIN)
  })

  it("reserves the same whatever is toggled on", () => {
    // The point of the whole change: the box is sized for "all columns open",
    // so the rank pitch is constant and toggling metadata cannot move a node.
    // The hidden rows turn into connector length instead.
    const all = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set(columns),
      measuredTagRowHeight: 56,
    })
    const one = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set(["workplace"]),
      measuredTagRowHeight: 56,
    })
    const none = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set<string>(),
      measuredTagRowHeight: 56,
    })

    expect(one).toBe(all)
    expect(none).toBe(all)
  })

  it("tracks the fully-open measurement, not the tag count", () => {
    // Two columns estimate a single 36px row; a node whose labels wrap to two
    // reports 56, and only the measurement can know that.
    const estimated = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set(columns),
    })
    const measured = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set(columns),
      measuredTagRowHeight: 56,
    })

    expect(estimated).toBe(36 + PILL_GAP + MARGIN)
    expect(measured).toBeGreaterThan(estimated)
  })

  it("still honours reserveTagRow when no columns are declared", () => {
    // Tags rendered straight from `renderNode`, with no popover to toggle.
    expect(reserved({ reserveTagRow: true })).toBeGreaterThan(0)
    expect(reserved({ reserveTagRow: false })).toBe(0)
  })

  it("follows the measurement back down when it shrinks", () => {
    const tall = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set(columns),
      measuredTagRowHeight: 86,
    })
    const short = reserved({
      nodeTagTypes: columns,
      visibleTagTypesSet: new Set(columns),
      measuredTagRowHeight: 26,
    })

    expect(short).toBeLessThan(tall)
    expect(short).toBe(26 + PILL_GAP + MARGIN)
  })
})
