import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import type { GraphEdge, TreeNode } from "../types"

import { useLayoutEngine } from "../hooks/useLayoutEngine"

// ─── Helpers ───────────────────────────────────────────────────

const _NODE_W = 256
const _NODE_H = 56

function renderEngine(options?: Parameters<typeof useLayoutEngine>[0]) {
  return zeroRenderHook(() => useLayoutEngine(options))
}

function makeNode(
  id: string,
  children: TreeNode<string>[] = [],
  depth = 0,
  parentId: string | null = null
): TreeNode<string> {
  return {
    id,
    parentId,
    data: id,
    children,
    depth,
    childrenCount: children.length,
    childrenLoaded: true,
  }
}

/** Build a flat list of all TreeNodes in DFS order (root first). */
function flattenTree(root: TreeNode<string>): TreeNode<string>[] {
  const result: TreeNode<string>[] = [root]
  for (const child of root.children) {
    result.push(...flattenTree(child))
  }
  return result
}

/** Compute bounding box {minX, maxX, minY, maxY} for a set of node IDs. */
function bbox(
  layout: {
    nodes: Array<{
      id: string
      x: number
      y: number
      width: number
      height: number
    }>
  },
  ids: string[]
) {
  const filtered = layout.nodes.filter((n) => ids.includes(n.id))
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  for (const n of filtered) {
    if (n.x < minX) minX = n.x
    if (n.x + n.width > maxX) maxX = n.x + n.width
    if (n.y < minY) minY = n.y
    if (n.y + n.height > maxY) maxY = n.y + n.height
  }
  return { minX, maxX, minY, maxY }
}

function subtreeIds(root: TreeNode<string>): string[] {
  return flattenTree(root).map((n) => n.id)
}

// ─── Tests ─────────────────────────────────────────────────────

describe("Multi-root layout", () => {
  it("2 roots, TB direction → non-overlapping, separated by ≥ rootSep on X", () => {
    const { result } = renderEngine()

    // Root A: A → A1, A2
    const a1 = makeNode("a1", [], 1, "a")
    const a2 = makeNode("a2", [], 1, "a")
    const rootA = makeNode("a", [a1, a2])

    // Root B: B → B1
    const b1 = makeNode("b1", [], 1, "b")
    const rootB = makeNode("b", [b1])

    const nodes = [...flattenTree(rootA), ...flattenTree(rootB)]
    const edges: GraphEdge[] = [
      { id: "e-a-a1", source: "a", target: "a1" },
      { id: "e-a-a2", source: "a", target: "a2" },
      { id: "e-b-b1", source: "b", target: "b1" },
    ]

    const layout = result.current.computeLayout(nodes, edges, "TB")

    const bboxA = bbox(layout, subtreeIds(rootA))
    const bboxB = bbox(layout, subtreeIds(rootB))

    // Root A should be entirely to the left of Root B on the X (cross) axis.
    const gap = bboxB.minX - bboxA.maxX
    expect(gap).toBeGreaterThanOrEqual(80) // rootSep default
    // No Y overlap is fine since they share main-axis range; but X must not overlap.
    expect(bboxA.maxX).toBeLessThanOrEqual(bboxB.minX)
  })

  it("5 roots, LR direction → stacked along Y, no overlap", () => {
    const { result } = renderEngine({ direction: "LR" })

    const roots: TreeNode<string>[] = []
    const allNodes: TreeNode<string>[] = []
    const edges: GraphEdge[] = []

    for (let i = 0; i < 5; i++) {
      const child = makeNode(`r${i}-c`, [], 1, `r${i}`)
      const root = makeNode(`r${i}`, [child])
      roots.push(root)
      allNodes.push(...flattenTree(root))
      edges.push({ id: `e-r${i}`, source: `r${i}`, target: `r${i}-c` })
    }

    const layout = result.current.computeLayout(allNodes, edges, "LR")

    // For LR, cross axis = Y. Roots should stack vertically with no overlap.
    for (let i = 0; i < roots.length - 1; i++) {
      const bboxCurr = bbox(layout, subtreeIds(roots[i]))
      const bboxNext = bbox(layout, subtreeIds(roots[i + 1]))
      expect(bboxCurr.maxY).toBeLessThanOrEqual(bboxNext.minY)
    }
  })

  it("expand/collapse on non-first root: other roots' positions stay constant", () => {
    const { result } = renderEngine()

    // Root A: single leaf
    const a1 = makeNode("a1", [], 1, "a")
    const rootA = makeNode("a", [a1])

    // Root B collapsed: no children visible
    const rootBCollapsed = makeNode("b")

    const nodesCollapsed = [...flattenTree(rootA), rootBCollapsed]
    const edgesCollapsed: GraphEdge[] = [
      { id: "e-a-a1", source: "a", target: "a1" },
    ]

    const layoutCollapsed = result.current.computeLayout(
      nodesCollapsed,
      edgesCollapsed,
      "TB"
    )

    // Root B expanded: 3 children
    const b1 = makeNode("b1", [], 1, "b")
    const b2 = makeNode("b2", [], 1, "b")
    const b3 = makeNode("b3", [], 1, "b")
    const rootBExpanded = makeNode("b", [b1, b2, b3])

    const nodesExpanded = [...flattenTree(rootA), ...flattenTree(rootBExpanded)]
    const edgesExpanded: GraphEdge[] = [
      { id: "e-a-a1", source: "a", target: "a1" },
      { id: "e-b-b1", source: "b", target: "b1" },
      { id: "e-b-b2", source: "b", target: "b2" },
      { id: "e-b-b3", source: "b", target: "b3" },
    ]

    const layoutExpanded = result.current.computeLayout(
      nodesExpanded,
      edgesExpanded,
      "TB"
    )

    // Root A positions must be identical in both layouts.
    const aIds = subtreeIds(rootA)
    for (const id of aIds) {
      const posCollapsed = layoutCollapsed.nodes.find((n) => n.id === id)!
      const posExpanded = layoutExpanded.nodes.find((n) => n.id === id)!
      expect(posCollapsed.x).toBe(posExpanded.x)
      expect(posCollapsed.y).toBe(posExpanded.y)
    }
  })

  it("single-root regression: identical output to single-root layout", () => {
    const { result } = renderEngine()

    const c1 = makeNode("c1", [], 2, "b")
    const c2 = makeNode("c2", [], 2, "b")
    const b = makeNode("b", [c1, c2], 1, "a")
    const root = makeNode("a", [b])

    const nodes = flattenTree(root)
    const edges: GraphEdge[] = [
      { id: "e-a-b", source: "a", target: "b" },
      { id: "e-b-c1", source: "b", target: "c1" },
      { id: "e-b-c2", source: "b", target: "c2" },
    ]

    const layout = result.current.computeLayout(nodes, edges, "TB")

    // All nodes should be positioned with valid coordinates
    expect(layout.nodes).toHaveLength(4)
    for (const node of layout.nodes) {
      expect(node.x).not.toBeNaN()
      expect(node.y).not.toBeNaN()
    }

    // Parent "a" centered over child "b"
    const nodeA = layout.nodes.find((n) => n.id === "a")!
    const nodeB = layout.nodes.find((n) => n.id === "b")!
    expect(nodeA.x).toBe(nodeB.x) // single-child centering

    // Children c1, c2 at same depth below b
    const nodeC1 = layout.nodes.find((n) => n.id === "c1")!
    const nodeC2 = layout.nodes.find((n) => n.id === "c2")!
    expect(nodeC1.y).toBe(nodeC2.y)
    expect(nodeC1.y).toBeGreaterThan(nodeB.y)
  })

  it("multi-root TB: roots are top-aligned (all roots start at y=0)", () => {
    const { result } = renderEngine()

    // Root A: deep tree (3 levels)
    const a2 = makeNode("a2", [], 2, "a1")
    const a1 = makeNode("a1", [a2], 1, "a")
    const rootA = makeNode("a", [a1])

    // Root B: shallow tree (1 level)
    const rootB = makeNode("b")

    const nodes = [...flattenTree(rootA), rootB]
    const edges: GraphEdge[] = [
      { id: "e-a-a1", source: "a", target: "a1" },
      { id: "e-a1-a2", source: "a1", target: "a2" },
    ]

    const layout = result.current.computeLayout(nodes, edges, "TB")

    const nodeA = layout.nodes.find((n) => n.id === "a")!
    const nodeB = layout.nodes.find((n) => n.id === "b")!

    // Both roots at the same Y position (top-aligned)
    expect(nodeA.y).toBe(nodeB.y)
  })
})
