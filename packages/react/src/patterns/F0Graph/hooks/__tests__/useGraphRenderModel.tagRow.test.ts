import { ReactFlowProvider } from "@xyflow/react"
import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { createElement, type MutableRefObject, type ReactNode } from "react"

import type { TreeNode } from "../../types"
import { useGraphRenderModel } from "../useGraphRenderModel"

// A viewport big enough to contain the whole fixture. React Flow is only handed
// an explicit node height while windowing drives the render, so the painted-box
// assertions below need geometry to exist.
vi.mock("../useViewportGeometry", () => ({
  useViewportGeometry: ({ enabled }: { enabled?: boolean }) =>
    enabled ? { minX: -1e4, minY: -1e4, maxX: 1e4, maxY: 1e4 } : null,
}))

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

/** Height of one row of tag pills. */
const ROW = 36
/** Gap between the pill and the tag block. */
const PILL_GAP = 6
/** Clearance kept below the fully-open block. */
const MARGIN = 32

const render = (
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
        zoomLevel: "detail" as const,
        direction: "TB" as const,
        hoveredEdgeId: null,
        ...options,
      } as Parameters<typeof useGraphRenderModel>[0]),
    { wrapper }
  )
  return result.current
}

const reserved = (
  options: Partial<Parameters<typeof useGraphRenderModel>[0]> = {}
) => render(options).reservedTagHeight

const heightOf = (
  id: string,
  options: Partial<Parameters<typeof useGraphRenderModel>[0]> = {}
) => render(options).rfNodes.find((n) => n.id === id)?.height

const columns = ["workplace", "reports"]

describe("useGraphRenderModel — tag row reservation", () => {
  it("reserves nothing when no tag columns are declared", () => {
    expect(reserved()).toBe(0)
  })

  it("counts the declared columns, never the DOM", () => {
    // The reservation sets the rank pitch, so it has to be knowable before a
    // single node renders. Measuring instead would tie it to whichever nodes
    // are currently windowed and hydrated.
    expect(reserved({ nodeTagTypes: columns })).toBe(ROW + PILL_GAP + MARGIN)
    expect(
      reserved({ nodeTagTypes: [...columns, "hireDate", "company"] })
    ).toBe(2 * ROW + PILL_GAP + MARGIN)
  })

  it("reserves the same whatever the rendered nodes report", () => {
    // The pitch must not move as the user pans: with windowing, panning swaps
    // the measured set, and any cross-node maximum taken from it would climb
    // and slide every rank off its line.
    const none = reserved({ nodeTagTypes: columns })
    const someReported = reserved({
      nodeTagTypes: columns,
      visibleTagHeights: new Map([["root", 86]]),
    })

    expect(someReported).toBe(none)
  })

  it("reserves the same whatever is toggled on", () => {
    // The box is sized for "all columns open", so toggling metadata cannot move
    // a node. The hidden rows turn into connector length instead.
    const all = reserved({
      nodeTagTypes: columns,
      visibleTagHeights: new Map([["root", 56]]),
    })
    const none = reserved({
      nodeTagTypes: columns,
      visibleTagHeights: new Map(),
    })

    expect(none).toBe(all)
  })

  it("still honours reserveTagRow when no columns are declared", () => {
    // Tags rendered straight from `renderNode`, with no popover to toggle.
    expect(reserved({ reserveTagRow: true })).toBeGreaterThan(0)
    expect(reserved({ reserveTagRow: false })).toBe(0)
  })
})

describe("useGraphRenderModel — painted node height", () => {
  const base = 56

  it("shrinks to the pill when a node shows no tags", () => {
    // The freed room becomes connector length rather than a blank band.
    expect(
      heightOf("root", {
        nodeTagTypes: columns,
        nodeHeightProp: base,
        enableNodeWindowing: true,
        visibleTagHeights: new Map(),
      })
    ).toBe(base)
  })

  it("grows with what that node currently shows", () => {
    expect(
      heightOf("root", {
        nodeTagTypes: columns,
        nodeHeightProp: base,
        enableNodeWindowing: true,
        visibleTagHeights: new Map([["root", 20]]),
      })
    ).toBe(base + 20 + PILL_GAP + MARGIN)
  })

  it("never grows past its reserved lane", () => {
    // The reservation estimates how the chips wrap, so an outlier whose labels
    // wrap onto an extra row must be clipped rather than allowed to anchor its
    // connector into the next rank.
    const reservation = reserved({ nodeTagTypes: columns })
    expect(
      heightOf("root", {
        nodeTagTypes: columns,
        nodeHeightProp: base,
        enableNodeWindowing: true,
        visibleTagHeights: new Map([["root", 500]]),
      })
    ).toBe(base + reservation)
  })

  it("sizes each node independently", () => {
    const model = render({
      nodeTagTypes: columns,
      nodeHeightProp: base,
      enableNodeWindowing: true,
      visibleTagHeights: new Map([["root", 20]]),
    })

    expect(model.rfNodes.find((n) => n.id === "root")?.height).toBe(
      base + 20 + PILL_GAP + MARGIN
    )
    expect(model.rfNodes.find((n) => n.id === "child")?.height).toBe(base)
  })
})

describe("useGraphRenderModel — rank pitch", () => {
  it("puts every generation on a line the reservation fixes", () => {
    const model = render({
      nodeTagTypes: columns,
      nodeHeightProp: 56,
      visibleTagHeights: new Map([["root", 20]]),
    })

    const root = model.rfNodes.find((n) => n.id === "root")
    const child = model.rfNodes.find((n) => n.id === "child")
    const pitch = (child?.position.y ?? 0) - (root?.position.y ?? 0)

    // Whatever the nodes report, the gap between ranks is the reserved box plus
    // the engine's rank separation — the same for every generation.
    expect(pitch).toBe(56 + model.reservedTagHeight + 130)
  })

  it("holds that pitch when the reported heights change", () => {
    const pitchWith = (heights: ReadonlyMap<string, number>) => {
      const model = render({
        nodeTagTypes: columns,
        nodeHeightProp: 56,
        visibleTagHeights: heights,
      })
      const root = model.rfNodes.find((n) => n.id === "root")
      const child = model.rfNodes.find((n) => n.id === "child")
      return (child?.position.y ?? 0) - (root?.position.y ?? 0)
    }

    expect(pitchWith(new Map([["root", 86]]))).toBe(pitchWith(new Map()))
  })
})
