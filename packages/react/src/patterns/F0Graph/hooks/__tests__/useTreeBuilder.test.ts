import { describe, expect, it } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import type { GraphNode } from "../../types"

import { useTreeBuilder } from "../useTreeBuilder"

function renderTreeBuilder<T>(nodes: GraphNode<T>[]) {
  return zeroRenderHook(() => useTreeBuilder(nodes))
}

describe("useTreeBuilder", () => {
  it("builds tree from flat nodes", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "1", data: "child-a" },
      { id: "3", parentId: "1", data: "child-b" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.roots).toHaveLength(1)
    expect(result.current.roots[0].children).toHaveLength(2)
  })

  it("root nodes have null parentId", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.roots[0].parentId).toBeNull()
  })

  it("children are correctly nested", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "1", data: "child" },
      { id: "3", parentId: "2", data: "grandchild" },
    ]

    const { result } = renderTreeBuilder(nodes)
    const root = result.current.roots[0]
    expect(root.children[0].id).toBe("2")
    expect(root.children[0].children[0].id).toBe("3")
  })

  it("depth is correctly computed", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "1", data: "child" },
      { id: "3", parentId: "2", data: "grandchild" },
    ]

    const { result } = renderTreeBuilder(nodes)
    const root = result.current.roots[0]
    expect(root.depth).toBe(0)
    expect(root.children[0].depth).toBe(1)
    expect(root.children[0].children[0].depth).toBe(2)
  })

  it("orphan nodes (bad parentId) become roots, returned in orphans", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "999", data: "orphan" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.roots).toHaveLength(2)
    expect(result.current.orphans).toContain("2")
  })

  it("cycle detection works — cycles broken, reported in cycles", () => {
    // Real cycle: 2 -> 3 -> 2 (each points to the other as parent), plus a
    // valid root "1" so we can verify roots are preserved alongside the
    // broken cycle.
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "3", data: "a" },
      { id: "3", parentId: "2", data: "b" },
    ]

    const { result } = renderTreeBuilder(nodes)

    // At least one cycle participant must be reported.
    expect(result.current.cycles.length).toBeGreaterThan(0)
    // Reported cycle IDs should all belong to the cycle participants.
    for (const id of result.current.cycles) {
      expect(["2", "3"]).toContain(id)
    }
    // Real root must still appear.
    expect(result.current.roots.map((r) => r.id)).toContain("1")
    // Every node still appears in the map.
    expect(result.current.nodeMap.size).toBe(3)
  })

  it("longer cycle (3-node loop) detected and broken", () => {
    // Cycle: 2 -> 3 -> 4 -> 2
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "4", data: "a" },
      { id: "3", parentId: "2", data: "b" },
      { id: "4", parentId: "3", data: "c" },
    ]

    const { result } = renderTreeBuilder(nodes)

    expect(result.current.cycles.length).toBeGreaterThan(0)
    for (const id of result.current.cycles) {
      expect(["2", "3", "4"]).toContain(id)
    }
    expect(result.current.roots.map((r) => r.id)).toContain("1")
  })

  it("self-referencing node handled", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "2", data: "self-ref" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.cycles).toContain("2")
    expect(result.current.roots).toHaveLength(2)
  })

  it("empty input returns empty roots", () => {
    const { result } = renderTreeBuilder([])
    expect(result.current.roots).toHaveLength(0)
    expect(result.current.nodeMap.size).toBe(0)
    expect(result.current.orphans).toHaveLength(0)
    expect(result.current.cycles).toHaveLength(0)
  })

  it("single node (root only) works", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "solo" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.roots).toHaveLength(1)
    expect(result.current.roots[0].children).toHaveLength(0)
    expect(result.current.roots[0].depth).toBe(0)
  })

  it("multiple roots produce parallel trees", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root-a" },
      { id: "2", parentId: null, data: "root-b" },
      { id: "3", parentId: "1", data: "child-of-a" },
      { id: "4", parentId: "2", data: "child-of-b" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.roots).toHaveLength(2)
    expect(result.current.roots[0].children).toHaveLength(1)
    expect(result.current.roots[1].children).toHaveLength(1)
  })

  it("preserves childrenCount and childrenLoaded from input", () => {
    const nodes: GraphNode<string>[] = [
      {
        id: "1",
        parentId: null,
        data: "root",
        childrenCount: 5,
        childrenLoaded: false,
      },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.roots[0].childrenCount).toBe(5)
    expect(result.current.roots[0].childrenLoaded).toBe(false)
  })

  it("nodeMap contains all nodes", () => {
    const nodes: GraphNode<string>[] = [
      { id: "1", parentId: null, data: "root" },
      { id: "2", parentId: "1", data: "child" },
      { id: "3", parentId: "1", data: "child-2" },
    ]

    const { result } = renderTreeBuilder(nodes)
    expect(result.current.nodeMap.size).toBe(3)
    expect(result.current.nodeMap.get("1")).toBeDefined()
    expect(result.current.nodeMap.get("2")).toBeDefined()
    expect(result.current.nodeMap.get("3")).toBeDefined()
  })

  // ── DAG support ───────────────────────────────────────────────────────

  describe("DAG: parentIds support", () => {
    it("node with parentIds resolves canonical parent to first entry", () => {
      const nodes: GraphNode<string>[] = [
        { id: "a", parentId: null, data: "root-a" },
        { id: "b", parentId: null, data: "root-b" },
        { id: "c", parentId: null, parentIds: ["a", "b"], data: "dag-child" },
      ]

      const { result } = renderTreeBuilder(nodes)
      const dagNode = result.current.nodeMap.get("c")!
      expect(dagNode.parentId).toBe("a")
      expect(dagNode.dagParentIds).toEqual(["a", "b"])
    })

    it("parentIds wins over parentId when both provided", () => {
      const nodes: GraphNode<string>[] = [
        { id: "a", parentId: null, data: "root-a" },
        { id: "b", parentId: null, data: "root-b" },
        {
          id: "c",
          parentId: "x",
          parentIds: ["a", "b"],
          data: "dag-child",
        },
      ]

      const { result } = renderTreeBuilder(nodes)
      const dagNode = result.current.nodeMap.get("c")!
      // parentIds wins — canonical parent is "a", not "x"
      expect(dagNode.parentId).toBe("a")
      expect(dagNode.dagParentIds).toEqual(["a", "b"])
      // "c" should be a child of "a"
      const rootA = result.current.nodeMap.get("a")!
      expect(rootA.children.some((ch) => ch.id === "c")).toBe(true)
    })

    it("diamond DAG: D has two parents, positioned under canonical one", () => {
      // A → B, A → C, B → D, C → D
      const nodes: GraphNode<string>[] = [
        { id: "A", parentId: null, data: "top" },
        { id: "B", parentId: "A", data: "left" },
        { id: "C", parentId: "A", data: "right" },
        {
          id: "D",
          parentId: null,
          parentIds: ["B", "C"],
          data: "diamond-bottom",
        },
      ]

      const { result } = renderTreeBuilder(nodes)
      const dagNode = result.current.nodeMap.get("D")!
      expect(dagNode.parentId).toBe("B")
      expect(dagNode.dagParentIds).toEqual(["B", "C"])
      // D appears as child of B (canonical), not C
      const nodeB = result.current.nodeMap.get("B")!
      const nodeC = result.current.nodeMap.get("C")!
      expect(nodeB.children.some((ch) => ch.id === "D")).toBe(true)
      expect(nodeC.children.some((ch) => ch.id === "D")).toBe(false)
      // No cycles or orphans
      expect(result.current.cycles).toHaveLength(0)
      expect(result.current.orphans).toHaveLength(0)
    })

    it("empty parentIds falls back to parentId", () => {
      const nodes: GraphNode<string>[] = [
        { id: "a", parentId: null, data: "root" },
        { id: "b", parentId: "a", parentIds: [], data: "child" },
      ]

      const { result } = renderTreeBuilder(nodes)
      const node = result.current.nodeMap.get("b")!
      expect(node.parentId).toBe("a")
      expect(node.dagParentIds).toBeUndefined()
    })

    it("single-entry parentIds behaves like parentId", () => {
      const nodes: GraphNode<string>[] = [
        { id: "a", parentId: null, data: "root" },
        { id: "b", parentId: null, parentIds: ["a"], data: "child" },
      ]

      const { result } = renderTreeBuilder(nodes)
      const node = result.current.nodeMap.get("b")!
      expect(node.parentId).toBe("a")
      expect(node.dagParentIds).toEqual(["a"])
    })

    it("dagParentIds not set when only parentId is used", () => {
      const nodes: GraphNode<string>[] = [
        { id: "a", parentId: null, data: "root" },
        { id: "b", parentId: "a", data: "child" },
      ]

      const { result } = renderTreeBuilder(nodes)
      const node = result.current.nodeMap.get("b")!
      expect(node.dagParentIds).toBeUndefined()
    })

    it("cycle detection still works with parentIds", () => {
      // Self-referencing via parentIds
      const nodes: GraphNode<string>[] = [
        { id: "a", parentId: null, parentIds: ["a"], data: "self-ref" },
      ]

      const { result } = renderTreeBuilder(nodes)
      expect(result.current.cycles).toContain("a")
      expect(result.current.roots).toHaveLength(1)
    })
  })
})
