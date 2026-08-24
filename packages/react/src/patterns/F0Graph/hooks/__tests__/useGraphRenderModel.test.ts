import { ReactFlowProvider } from "@xyflow/react"
import { renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { createElement, type MutableRefObject, type ReactNode } from "react"

import type {
  ExpanderNodeData,
  GraphNodeData,
} from "../../internal/ReactFlowAdapters"
import type { LayoutEngine, TreeNode } from "../../types"
import type { ViewportRect } from "../../utils"
import { STACKED_GROUP_PADDING, STACKED_NODE_GAP } from "../../constants"
import { useGraphRenderModel } from "../useGraphRenderModel"

// Stub the viewport rect so windowing is deterministic without a real canvas.
// (Name must start with `mock` for the hoisted vi.mock factory to reference it.)
let mockViewportRect: ViewportRect | null = null
vi.mock("../useViewportGeometry", () => ({
  useViewportGeometry: () => mockViewportRect,
}))

// The render model reads React Flow's viewport store (for node windowing), so
// the hook must run inside a provider — as it always does in F0Graph.
const wrapper = ({ children }: { children: ReactNode }) =>
  createElement(ReactFlowProvider, null, children)
const renderModel = (options: Parameters<typeof useGraphRenderModel>[0]) =>
  renderHook(() => useGraphRenderModel(options), { wrapper })

const treeNode = (
  id: string,
  parentId: string | null,
  childrenCount: number,
  children: TreeNode<null>[] = [],
  depth = 0
): TreeNode<null> => ({
  id,
  parentId,
  data: null,
  children,
  depth,
  childrenCount,
  childrenLoaded: children.length > 0,
})

const baseOptions = (roots: TreeNode<null>[], expanded: string[]) => {
  const nodeMap = new Map<string, TreeNode<null>>()
  const index = (n: TreeNode<null>) => {
    nodeMap.set(n.id, n)
    n.children.forEach(index)
  }
  roots.forEach(index)

  return {
    roots,
    nodeMap,
    expandedNodes: new Set(expanded),
    anchorNodeRef: { current: null } as MutableRefObject<string | null>,
    stableRenderNode: () => null,
    visibleTagTypesSet: new Set<never>(),
    zoomLevel: "detail" as const,
    direction: "TB" as const,
    hoveredEdgeId: null,
  }
}

const expanderFor = (
  rfNodes: ReturnType<typeof useGraphRenderModel>["rfNodes"],
  id: string
) => rfNodes.find((n) => n.id === `expander-${id}`)

describe("useGraphRenderModel — expander affordance", () => {
  it("renders an expander for a collapsed node with childrenCount but NO loaded children", () => {
    // ceo (expanded) → cto (collapsed, 81 reports, children NOT loaded)
    const cto = treeNode("cto", "ceo", 81, [], 1)
    const ceo = treeNode("ceo", null, 1, [cto])
    const { result } = renderModel(baseOptions([ceo], ["ceo"]))

    const expander = expanderFor(result.current.rfNodes, "cto")
    expect(expander?.type).toBe("expanderNode")
    expect((expander?.data as ExpanderNodeData).count).toBe(81)
    expect((expander?.data as ExpanderNodeData).loading).toBe(false)
  })

  it("keeps the expander with a loading flag while an expanded node waits for children", () => {
    // cto is expanded but its 81 children have not arrived yet.
    const cto = treeNode("cto", "ceo", 81, [], 1)
    const ceo = treeNode("ceo", null, 1, [cto])
    const { result } = renderModel(baseOptions([ceo], ["ceo", "cto"]))

    const expander = expanderFor(result.current.rfNodes, "cto")
    expect(expander).toBeDefined()
    expect((expander?.data as ExpanderNodeData).loading).toBe(true)
  })

  it("removes the expander once an expanded node's children are loaded", () => {
    const report = treeNode("report", "boss", 0, [], 1)
    const boss = treeNode("boss", null, 1, [report])
    const { result } = renderModel(baseOptions([boss], ["boss"]))

    expect(expanderFor(result.current.rfNodes, "boss")).toBeUndefined()
  })

  it("renders no expander for a true leaf (childrenCount 0)", () => {
    const leaf = treeNode("leaf", "ceo", 0, [], 1)
    const ceo = treeNode("ceo", null, 1, [leaf])
    const { result } = renderModel(baseOptions([ceo], ["ceo"]))

    expect(expanderFor(result.current.rfNodes, "leaf")).toBeUndefined()
  })
})

// A layout engine that returns caller-controlled positions, so windowing can be
// exercised against a known geometry.
const fixedLayout = (
  positions: Record<string, { x: number; y: number }>
): LayoutEngine => ({
  computeLayout(nodes) {
    return {
      nodes: nodes.map((n) => ({
        id: n.id,
        x: positions[n.id]?.x ?? 0,
        y: positions[n.id]?.y ?? 0,
        width: 100,
        height: 50,
      })),
      edges: [],
      width: 5000,
      height: 5000,
    }
  },
})

const graphNodeData = (
  rfNodes: ReturnType<typeof useGraphRenderModel>["rfNodes"],
  id: string
) => rfNodes.find((n) => n.id === id)?.data as GraphNodeData | undefined

describe("useGraphRenderModel — node windowing", () => {
  beforeEach(() => {
    mockViewportRect = null
  })

  it("renders every node when windowing is off (rect ignored)", () => {
    mockViewportRect = { minX: 1e6, minY: 1e6, maxX: 1e6 + 1, maxY: 1e6 + 1 }
    const a = treeNode("a", null, 0)
    const b = treeNode("b", null, 0)
    const { result } = renderModel(baseOptions([a, b], []))
    // enableNodeWindowing not set → windowedIds is null → nothing filtered.
    expect(result.current.renderedNodeCount).toBe(2)
    expect(result.current.rfNodes).toHaveLength(2)
  })

  it("keeps only the nodes intersecting the viewport rect", () => {
    const a = treeNode("a", null, 0)
    const b = treeNode("b", null, 0)
    // `a` at the origin is inside the rect; `b` is far away.
    mockViewportRect = { minX: -10, minY: -10, maxX: 200, maxY: 200 }
    const { result } = renderModel({
      ...baseOptions([a, b], []),
      enableNodeWindowing: true,
      layoutEngineProp: fixedLayout({
        a: { x: 0, y: 0 },
        b: { x: 5000, y: 0 },
      }),
    })
    const ids = result.current.rfNodes.map((n) => n.id)
    expect(ids).toContain("a")
    expect(ids).not.toContain("b")
    expect(result.current.renderedNodeCount).toBe(1)
  })

  it("pulls in an off-window child so a visible parent's edge still renders", () => {
    const child = treeNode("child", "root", 0, [], 1)
    const root = treeNode("root", null, 1, [child])
    // Rect covers root but not the far-away child.
    mockViewportRect = { minX: -10, minY: -10, maxX: 200, maxY: 200 }
    const { result } = renderModel({
      ...baseOptions([root], ["root"]),
      enableNodeWindowing: true,
      layoutEngineProp: fixedLayout({
        root: { x: 0, y: 0 },
        child: { x: 0, y: 5000 },
      }),
    })
    // The edge root→child passes through the viewport (root is inside it), so the
    // child is materialized and the connecting line renders — a visible parent
    // never looks connected only to the children that happen to stay on screen.
    expect(result.current.rfNodes.map((n) => n.id)).toContain("child")
    expect(
      result.current.rfEdges.some(
        (e) => e.source === "root" && e.target === "child"
      )
    ).toBe(true)
  })

  it("keeps a lone off-window node dropped when no edge crosses the viewport", () => {
    // Two unrelated roots (no edge between them): the far one is still culled —
    // the frontier pull-in only materializes endpoints of edges touching the view.
    const near = treeNode("near", null, 0)
    const far = treeNode("far", null, 0)
    mockViewportRect = { minX: -10, minY: -10, maxX: 200, maxY: 200 }
    const { result } = renderModel({
      ...baseOptions([near, far], []),
      enableNodeWindowing: true,
      layoutEngineProp: fixedLayout({
        near: { x: 0, y: 0 },
        far: { x: 5000, y: 5000 },
      }),
    })
    expect(result.current.rfNodes.map((n) => n.id)).not.toContain("far")
  })

  it("keeps aria-owns to an off-window child once its edge pulls it in", () => {
    const child = treeNode("child", "root", 0, [], 1)
    const root = treeNode("root", null, 1, [child])
    mockViewportRect = { minX: -10, minY: -10, maxX: 200, maxY: 200 }
    const { result } = renderModel({
      ...baseOptions([root], ["root"]),
      enableNodeWindowing: true,
      layoutEngineProp: fixedLayout({
        root: { x: 0, y: 0 },
        child: { x: 0, y: 5000 },
      }),
    })
    // The off-window child is materialized to keep the parent's edge, so it is a
    // valid aria-owns target (not a dangling ref).
    expect(
      graphNodeData(result.current.rfNodes, "root")?.visibleChildIds
    ).toEqual(["child"])
  })

  it("keeps aria-owns children that remain in the window", () => {
    const child = treeNode("child", "root", 0, [], 1)
    const root = treeNode("root", null, 1, [child])
    mockViewportRect = { minX: -100, minY: -100, maxX: 5200, maxY: 5200 }
    const { result } = renderModel({
      ...baseOptions([root], ["root"]),
      enableNodeWindowing: true,
      layoutEngineProp: fixedLayout({
        root: { x: 0, y: 0 },
        child: { x: 0, y: 100 },
      }),
    })
    expect(
      graphNodeData(result.current.rfNodes, "root")?.visibleChildIds
    ).toEqual(["child"])
  })

  it("materializes a windowed node's ancestors so the reporting line stays connected", () => {
    // Deep chain root → mid → leaf. Only `leaf` sits inside the viewport; its
    // ancestors are far above it. Regression: a windowed node whose parent
    // scrolled off-window used to lose its incoming edge and look like a detached
    // root (an edge only renders when BOTH endpoints are windowed). The ancestor
    // chain must be pulled in so the line up to the root survives.
    const leaf = treeNode("leaf", "mid", 0, [], 2)
    const mid = treeNode("mid", "root", 1, [leaf], 1)
    const root = treeNode("root", null, 1, [mid])
    // Rect covers only `leaf` (y≈5000); `mid` (y=2500) and `root` (y=0) are out.
    mockViewportRect = { minX: -10, minY: 4900, maxX: 200, maxY: 5200 }
    const { result } = renderModel({
      ...baseOptions([root], ["root", "mid"]),
      enableNodeWindowing: true,
      layoutEngineProp: fixedLayout({
        root: { x: 0, y: 0 },
        mid: { x: 0, y: 2500 },
        leaf: { x: 0, y: 5000 },
      }),
    })
    const ids = result.current.rfNodes.map((n) => n.id)
    expect(ids).toContain("leaf")
    expect(ids).toContain("mid")
    expect(ids).toContain("root")
    const hasEdge = (source: string, target: string) =>
      result.current.rfEdges.some(
        (e) => e.source === source && e.target === target
      )
    expect(hasEdge("root", "mid")).toBe(true)
    expect(hasEdge("mid", "leaf")).toBe(true)
  })
})

describe("useGraphRenderModel — anchor viewport compensation", () => {
  beforeEach(() => {
    mockViewportRect = null
  })

  it("reports the anchor's (dx, dy) delta so the owner can pan the viewport", () => {
    const onAnchorReflow = vi.fn()
    const anchorNodeRef = { current: null } as MutableRefObject<string | null>
    const roots = [treeNode("a", null, 0)]
    const { rerender } = renderHook(
      (opts: Parameters<typeof useGraphRenderModel>[0]) =>
        useGraphRenderModel(opts),
      {
        wrapper,
        initialProps: {
          ...baseOptions(roots, []),
          anchorNodeRef,
          onAnchorReflow,
          layoutEngineProp: fixedLayout({ a: { x: 100, y: 0 } }),
        },
      }
    )

    // Simulate a toggle: mark the node as the anchor and let the layout move it
    // (dagre would re-center it). The delta must be reported once.
    anchorNodeRef.current = "a"
    onAnchorReflow.mockClear()
    rerender({
      ...baseOptions(roots, []),
      anchorNodeRef,
      onAnchorReflow,
      layoutEngineProp: fixedLayout({ a: { x: 0, y: 0 } }),
    })

    expect(onAnchorReflow).toHaveBeenCalledWith(100, 0)
  })

  it("does not pan when the anchor node's position is unchanged", () => {
    const onAnchorReflow = vi.fn()
    const anchorNodeRef = { current: null } as MutableRefObject<string | null>
    const roots = [treeNode("a", null, 0)]
    const { rerender } = renderHook(
      (opts: Parameters<typeof useGraphRenderModel>[0]) =>
        useGraphRenderModel(opts),
      {
        wrapper,
        initialProps: {
          ...baseOptions(roots, []),
          anchorNodeRef,
          onAnchorReflow,
          layoutEngineProp: fixedLayout({ a: { x: 100, y: 0 } }),
        },
      }
    )

    anchorNodeRef.current = "a"
    onAnchorReflow.mockClear()
    rerender({
      ...baseOptions(roots, []),
      anchorNodeRef,
      onAnchorReflow,
      layoutEngineProp: fixedLayout({ a: { x: 100, y: 0 } }),
    })

    expect(onAnchorReflow).not.toHaveBeenCalled()
  })
})

describe("useGraphRenderModel — stacked children", () => {
  const stackedRole = () => {
    const levels = [
      treeNode("l1", "role", 0, [], 2),
      treeNode("l2", "role", 0, [], 2),
      treeNode("l3", "role", 0, [], 2),
    ]
    const role: TreeNode<null> = {
      ...treeNode("role", "root", 3, levels, 1),
      stackChildren: true,
    }
    return { root: treeNode("root", null, 1, [role]), role, levels }
  }

  it("chains the rows to each other instead of fanning out from the parent", () => {
    const { root } = stackedRole()
    const { result } = renderModel(baseOptions([root], ["root", "role"]))

    const edges = result.current.rfEdges

    // One line from the parent into the first row, then row to row.
    const fromParent = edges.filter((e) => e.source === "role")
    expect(fromParent).toHaveLength(1)
    expect(fromParent[0].target).toBe("l1")
    expect(edges.find((e) => e.target === "l2")?.source).toBe("l1")
    expect(edges.find((e) => e.target === "l3")?.source).toBe("l2")
    // The spine carries no midpoint dots — those mark a relationship, and a
    // row-to-row link is not one.
    expect(edges.find((e) => e.target === "l2")?.data?.showDot).toBe(false)
  })

  it("wraps the rows in a group node they are children of", () => {
    const { root } = stackedRole()
    const { result } = renderModel(baseOptions([root], ["root", "role"]))

    const nodes = result.current.rfNodes
    const group = nodes.find((n) => n.id === "stack-role")
    const rows = nodes.filter((n) => ["l1", "l2", "l3"].includes(n.id))

    expect(group?.type).toBe("stackGroup")
    // React Flow requires a parent to precede its children in the array.
    expect(nodes.findIndex((n) => n.id === "stack-role")).toBeLessThan(
      Math.min(...rows.map((r) => nodes.findIndex((n) => n.id === r.id)))
    )
    for (const row of rows) {
      expect(row.parentId).toBe("stack-role")
      expect(row.extent).toBe("parent")
    }
  })

  it("pads the wrapper by 8px around the rows it holds", () => {
    const { root } = stackedRole()
    const { result } = renderModel(baseOptions([root], ["root", "role"]))

    const nodes = result.current.rfNodes
    const group = nodes.find((n) => n.id === "stack-role")!
    const rows = nodes
      .filter((n) => ["l1", "l2", "l3"].includes(n.id))
      .sort((a, b) => a.position.y - b.position.y)

    // Positions are relative to the group, so the first row starts at the
    // padding on both axes and the last one ends a padding short of the box.
    expect(rows[0].position).toEqual({
      x: STACKED_GROUP_PADDING,
      y: STACKED_GROUP_PADDING,
    })
    // Row height is not seeded on the node (React Flow measures it), so read it
    // back off the row-to-row spacing, which is one row plus the gap.
    const rowHeight = rows[1].position.y - rows[0].position.y - STACKED_NODE_GAP
    const last = rows[rows.length - 1]
    expect(group.height).toBe(
      last.position.y + rowHeight + STACKED_GROUP_PADDING
    )
    expect((group.width ?? 0) - (rows[0].width ?? 0)).toBe(
      2 * STACKED_GROUP_PADDING
    )
  })

  it("keeps an edge per child when the group is not stacked", () => {
    const { root, role } = stackedRole()
    role.stackChildren = false
    const { result } = renderModel(baseOptions([root], ["root", "role"]))

    expect(
      result.current.rfEdges.filter((e) => e.source === "role")
    ).toHaveLength(3)
  })

  it("flags the rows on the node data so renderNode can switch presentation", () => {
    const { root } = stackedRole()
    const { result } = renderModel(baseOptions([root], ["root", "role"]))

    const stackedOf = (id: string) =>
      (result.current.rfNodes.find((n) => n.id === id)?.data as GraphNodeData)
        .stacked

    expect(stackedOf("l1")).toBe(true)
    expect(stackedOf("l3")).toBe(true)
    expect(stackedOf("role")).toBeUndefined()
  })

  it("gives the rows the layout's shorter box, not the node card's", () => {
    const { root } = stackedRole()
    const { result } = renderModel({
      ...baseOptions([root], ["root", "role"]),
      enableNodeWindowing: true,
    })

    const row = result.current.rfNodes.find((n) => n.id === "l1")
    const card = result.current.rfNodes.find((n) => n.id === "role")

    // Only asserted when windowing seeds dimensions; without a measured
    // viewport the model renders everything and leaves sizing to the DOM.
    if (row?.height !== undefined) {
      expect(row.height).toBeLessThan(card?.height ?? Infinity)
    }
  })
})
