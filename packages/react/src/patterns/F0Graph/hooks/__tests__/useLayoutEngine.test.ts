import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import type { GraphEdge, TreeNode } from "../../types"

import { useLayoutEngine } from "../useLayoutEngine"

function renderLayoutEngine(options?: Parameters<typeof useLayoutEngine>[0]) {
  return zeroRenderHook(() => useLayoutEngine(options))
}

function makeTree(
  id: string,
  children: TreeNode<string>[] = [],
  depth = 0
): TreeNode<string> {
  return {
    id,
    parentId: null,
    data: id,
    children,
    depth,
    childrenCount: children.length,
    childrenLoaded: true,
  }
}

describe("useLayoutEngine", () => {
  it("computes layout for a simple tree (3 nodes)", () => {
    const { result } = renderLayoutEngine()

    const child1 = makeTree("2", [], 1)
    const child2 = makeTree("3", [], 1)
    const root = makeTree("1", [child1, child2])

    const edges: GraphEdge[] = [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
    ]

    const layout = result.current.computeLayout(
      [root, child1, child2],
      edges,
      "TB"
    )
    expect(layout.nodes).toHaveLength(3)
    expect(layout.edges).toHaveLength(2)
  })

  it("all nodes get x,y positions", () => {
    const { result } = renderLayoutEngine()

    const child = makeTree("2", [], 1)
    const root = makeTree("1", [child])

    const edges: GraphEdge[] = [{ id: "e1-2", source: "1", target: "2" }]

    const layout = result.current.computeLayout([root, child], edges, "TB")

    for (const node of layout.nodes) {
      expect(typeof node.x).toBe("number")
      expect(typeof node.y).toBe("number")
      expect(node.x).not.toBeNaN()
      expect(node.y).not.toBeNaN()
    }
  })

  it("TB direction: children below parents", () => {
    const { result } = renderLayoutEngine()

    const child = makeTree("2", [], 1)
    const root = makeTree("1", [child])

    const edges: GraphEdge[] = [{ id: "e1-2", source: "1", target: "2" }]

    const layout = result.current.computeLayout([root, child], edges, "TB")

    const parentNode = layout.nodes.find((n) => n.id === "1")!
    const childNode = layout.nodes.find((n) => n.id === "2")!

    expect(childNode.y).toBeGreaterThan(parentNode.y)
  })

  it("LR direction: children right of parents", () => {
    const { result } = renderLayoutEngine({ direction: "LR" })

    const child = makeTree("2", [], 1)
    const root = makeTree("1", [child])

    const edges: GraphEdge[] = [{ id: "e1-2", source: "1", target: "2" }]

    const layout = result.current.computeLayout([root, child], edges, "LR")

    const parentNode = layout.nodes.find((n) => n.id === "1")!
    const childNode = layout.nodes.find((n) => n.id === "2")!

    expect(childNode.x).toBeGreaterThan(parentNode.x)
  })

  it("width and height of result reflect the layout bounds", () => {
    const { result } = renderLayoutEngine()

    const child = makeTree("2", [], 1)
    const root = makeTree("1", [child])

    const edges: GraphEdge[] = [{ id: "e1-2", source: "1", target: "2" }]

    const layout = result.current.computeLayout([root, child], edges, "TB")

    expect(layout.width).toBeGreaterThan(0)
    expect(layout.height).toBeGreaterThan(0)
  })

  it("empty input returns empty result", () => {
    const { result } = renderLayoutEngine()

    const layout = result.current.computeLayout([], [], "TB")

    expect(layout.nodes).toHaveLength(0)
    expect(layout.edges).toHaveLength(0)
    expect(layout.width).toBe(0)
    expect(layout.height).toBe(0)
  })

  it("single node centered", () => {
    const { result } = renderLayoutEngine()

    const root = makeTree("1")
    const layout = result.current.computeLayout([root], [], "TB")

    expect(layout.nodes).toHaveLength(1)
    expect(typeof layout.nodes[0].x).toBe("number")
    expect(typeof layout.nodes[0].y).toBe("number")
  })

  it("snaps the cross axis to the grid (TB: x) and keeps positions integral", () => {
    const grid = 32
    const { result } = renderLayoutEngine({ snapGrid: grid })

    const child1 = makeTree("2", [], 1)
    const child2 = makeTree("3", [], 1)
    const root = makeTree("1", [child1, child2])

    const edges: GraphEdge[] = [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
    ]

    const layout = result.current.computeLayout(
      [root, child1, child2],
      edges,
      "TB"
    )

    // In TB the cross axis is X (default node width 256, so center = x + 128).
    for (const node of layout.nodes) {
      expect(Number.isInteger(node.x)).toBe(true)
      expect(Number.isInteger(node.y)).toBe(true)
      const centerX = node.x + node.width / 2
      expect(centerX % grid).toBe(0)
    }
  })

  it("rounds to whole pixels when no grid is given", () => {
    const { result } = renderLayoutEngine({ snapGrid: 0 })

    const child1 = makeTree("2", [], 1)
    const child2 = makeTree("3", [], 1)
    const child3 = makeTree("4", [], 1)
    const root = makeTree("1", [child1, child2, child3])

    const edges: GraphEdge[] = [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e1-3", source: "1", target: "3" },
      { id: "e1-4", source: "1", target: "4" },
    ]

    const layout = result.current.computeLayout(
      [root, child1, child2, child3],
      edges,
      "TB"
    )

    for (const node of layout.nodes) {
      expect(Number.isInteger(node.x)).toBe(true)
      expect(Number.isInteger(node.y)).toBe(true)
    }
  })
})
