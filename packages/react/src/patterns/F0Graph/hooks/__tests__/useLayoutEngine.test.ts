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

  it("places a parent over its FIRST child, not the midpoint (parent-anchored)", () => {
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
    const cx = (id: string) => {
      const n = layout.nodes.find((node) => node.id === id)!
      return n.x + n.width / 2
    }

    // Parent sits over its first child, not over the (2,3) midpoint.
    expect(cx("1")).toBe(cx("2"))
    expect(cx("1")).not.toBe((cx("2") + cx("3")) / 2)
  })

  it("keeps a node and its ancestors fixed when it expands; right-siblings shift", () => {
    const { result } = renderLayoutEngine()
    const compute = (expandTwo: boolean) => {
      const grandchildren = expandTwo
        ? [makeTree("2a", [], 2), makeTree("2b", [], 2), makeTree("2c", [], 2)]
        : []
      const two = makeTree("2", grandchildren, 1)
      const three = makeTree("3", [], 1)
      const five = makeTree("5", [], 1)
      const root = makeTree("1", [two, three, five])
      const nodes = [root, two, ...grandchildren, three, five]
      const edges: GraphEdge[] = [
        { id: "e1-2", source: "1", target: "2" },
        { id: "e1-3", source: "1", target: "3" },
        { id: "e1-5", source: "1", target: "5" },
        ...grandchildren.map((g) => ({
          id: `e2-${g.id}`,
          source: "2",
          target: g.id,
        })),
      ]
      return result.current.computeLayout(nodes, edges, "TB")
    }
    const x = (layout: ReturnType<typeof compute>, id: string) =>
      layout.nodes.find((n) => n.id === id)!.x

    const before = compute(false)
    const after = compute(true)

    // The expanded node and its ancestor stay put; the right-siblings move over.
    expect(x(after, "1")).toBe(x(before, "1"))
    expect(x(after, "2")).toBe(x(before, "2"))
    expect(x(after, "3")).toBeGreaterThan(x(before, "3"))
    expect(x(after, "5")).toBeGreaterThan(x(before, "5"))
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
