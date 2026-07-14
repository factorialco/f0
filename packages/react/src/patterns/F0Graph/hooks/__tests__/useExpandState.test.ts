import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import type { GraphNode, TreeNode } from "../../types"
import { useExpandState } from "../useExpandState"

// Topology:  a → b → d ,  a → c ,  e (leaf root)
const node = (
  id: string,
  parentId: string | null,
  children: TreeNode<null>[]
): TreeNode<null> => ({
  id,
  parentId,
  data: null,
  children,
  depth: 0,
  childrenCount: children.length,
  childrenLoaded: true,
})

function buildTree() {
  const d = node("d", "b", [])
  const b = node("b", "a", [d])
  const c = node("c", "a", [])
  const a = node("a", null, [b, c])
  const e = node("e", null, [])
  const roots = [a, e]
  const nodeMap = new Map<string, TreeNode<null>>([
    ["a", a],
    ["b", b],
    ["c", c],
    ["d", d],
    ["e", e],
  ])
  return { roots, nodeMap }
}

const lazyStub = {
  nodes: [] as GraphNode<null>[],
  expandNode: async () => [] as GraphNode<null>[],
}

function setup(defaultExpandedNodes?: Set<string>) {
  const onExpandedNodesChange = vi.fn()
  const { roots, nodeMap } = buildTree()
  const hook = renderHook(() =>
    useExpandState<null>({
      roots,
      nodeMap,
      isLazyMode: false,
      lazyTree: lazyStub,
      defaultExpandedNodes,
      onExpandedNodesChange,
    })
  )
  return { hook, onExpandedNodesChange }
}

describe("useExpandState", () => {
  it("collapsing a node also collapses its descendants", () => {
    const { hook } = setup(new Set(["a", "b"]))
    act(() => hook.result.current.toggleExpand("a"))
    // a removed AND its descendant b removed, so re-expanding shows one level.
    expect(hook.result.current.expandedNodes).toEqual(new Set())
  })

  it("re-expanding a collapsed node reveals only the immediate level", () => {
    const { hook } = setup(new Set(["a", "b"]))
    act(() => hook.result.current.toggleExpand("a")) // collapse a (+ b)
    act(() => hook.result.current.toggleExpand("a")) // expand a only
    expect(hook.result.current.expandedNodes).toEqual(new Set(["a"]))
  })

  it("expandAll (eager) expands every node with children", async () => {
    const { hook, onExpandedNodesChange } = setup(new Set())
    await act(async () => {
      await hook.result.current.expandAll()
    })
    expect(hook.result.current.expandedNodes).toEqual(new Set(["a", "b"]))
    expect(onExpandedNodesChange).toHaveBeenLastCalledWith(new Set(["a", "b"]))
  })

  it("collapseAll clears the expanded set", () => {
    const { hook } = setup(new Set(["a", "b"]))
    act(() => hook.result.current.collapseAll())
    expect(hook.result.current.expandedNodes).toEqual(new Set())
  })

  it("toggle sets the anchor to the toggled node", () => {
    const { hook } = setup(new Set())
    act(() => hook.result.current.toggleExpand("a"))
    expect(hook.result.current.anchorNodeRef.current).toBe("a")
  })
})
