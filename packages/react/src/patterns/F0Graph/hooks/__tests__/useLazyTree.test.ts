import { renderHook, act, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import type { GraphNode } from "../../types"

import { useLazyTree } from "../useLazyTree"

// ─── Helpers ───────────────────────────────────────────────────

type TestNode = GraphNode<{ name: string }>

function makeNode(
  id: string,
  parentId: string | null = null,
  extra?: Partial<TestNode>
): TestNode {
  return { id, parentId, data: { name: `Node ${id}` }, ...extra }
}

// ─── Tests ─────────────────────────────────────────────────────

describe("useLazyTree", () => {
  it("returns root nodes on initial render", () => {
    const roots = [makeNode("1"), makeNode("2")]
    const loadChildren = vi.fn()

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    expect(result.current.nodes).toHaveLength(2)
    expect(result.current.loadingNodes.size).toBe(0)
    expect(result.current.errorNodes.size).toBe(0)
  })

  it("expandNode fetches and merges children", async () => {
    const roots = [makeNode("1")]
    const children = [makeNode("c1", "1"), makeNode("c2", "1")]
    const loadChildren = vi.fn().mockResolvedValue(children)

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    expect(loadChildren).toHaveBeenCalledWith("1")
    expect(result.current.nodes).toHaveLength(3)
    expect(result.current.nodes.find((n) => n.id === "c1")).toBeDefined()
    expect(result.current.nodes.find((n) => n.id === "c2")).toBeDefined()
  })

  it("sets loadingNodes while fetching", async () => {
    const roots = [makeNode("1")]
    let resolveLoad: (value: TestNode[]) => void
    const loadChildren = vi.fn(
      () =>
        new Promise<TestNode[]>((resolve) => {
          resolveLoad = resolve
        })
    )

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    let expandPromise: Promise<void>
    act(() => {
      expandPromise = result.current.expandNode("1")
    })

    await waitFor(() => {
      expect(result.current.loadingNodes.has("1")).toBe(true)
    })

    await act(async () => {
      resolveLoad!([makeNode("c1", "1")])
      await expandPromise!
    })

    expect(result.current.loadingNodes.has("1")).toBe(false)
  })

  it("sets errorNodes on fetch failure", async () => {
    const roots = [makeNode("1")]
    const loadChildren = vi.fn().mockRejectedValue(new Error("Network error"))

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    expect(result.current.errorNodes.has("1")).toBe(true)
    expect(result.current.errorNodes.get("1")?.message).toBe("Network error")
    expect(result.current.loadingNodes.has("1")).toBe(false)
  })

  it("retryNode clears error and re-fetches", async () => {
    const roots = [makeNode("1")]
    const children = [makeNode("c1", "1")]
    const loadChildren = vi
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValueOnce(children)

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    // First attempt fails
    await act(async () => {
      await result.current.expandNode("1")
    })
    expect(result.current.errorNodes.has("1")).toBe(true)

    // Retry succeeds
    await act(async () => {
      await result.current.retryNode("1")
    })

    expect(result.current.errorNodes.has("1")).toBe(false)
    expect(result.current.nodes).toHaveLength(2)
    expect(result.current.nodes.find((n) => n.id === "c1")).toBeDefined()
  })

  it("deduplicates fetches for already-loaded parents", async () => {
    const roots = [makeNode("1")]
    const children = [makeNode("c1", "1")]
    const loadChildren = vi.fn().mockResolvedValue(children)

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    await act(async () => {
      await result.current.expandNode("1")
    })

    // Should only have been called once
    expect(loadChildren).toHaveBeenCalledTimes(1)
  })

  it("assigns correct parentId to children when not provided", async () => {
    const roots = [makeNode("1")]
    // Children without parentId — hook should assign it
    const children: TestNode[] = [
      { id: "c1", parentId: null, data: { name: "Child 1" } },
    ]
    const loadChildren = vi.fn().mockResolvedValue(children)

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    const child = result.current.nodes.find((n) => n.id === "c1")
    // parentId should be set to the expanding node's id
    expect(child?.parentId).toBe("1")
  })

  it("marks parent as childrenLoaded after successful fetch", async () => {
    const roots = [makeNode("1")]
    const children = [makeNode("c1", "1")]
    const loadChildren = vi.fn().mockResolvedValue(children)

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    const parent = result.current.nodes.find((n) => n.id === "1")
    expect(
      (parent as TestNode & { childrenLoaded?: boolean }).childrenLoaded
    ).toBe(true)
  })

  it("syncs root nodes when rootNodes prop changes", () => {
    const initialRoots = [makeNode("1"), makeNode("2")]
    const loadChildren = vi.fn()

    const { result, rerender } = renderHook(
      ({ roots }) => useLazyTree({ rootNodes: roots, loadChildren }),
      { initialProps: { roots: initialRoots } }
    )

    expect(result.current.nodes).toHaveLength(2)

    const newRoots = [makeNode("1"), makeNode("2"), makeNode("3")]
    rerender({ roots: newRoots })

    expect(result.current.nodes).toHaveLength(3)
    expect(result.current.nodes.find((n) => n.id === "3")).toBeDefined()
  })

  it("collapseNode is a no-op (data is preserved)", async () => {
    const roots = [makeNode("1")]
    const children = [makeNode("c1", "1")]
    const loadChildren = vi.fn().mockResolvedValue(children)

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    expect(result.current.nodes).toHaveLength(2)

    act(() => {
      result.current.collapseNode("1")
    })

    // Data should NOT be evicted
    expect(result.current.nodes).toHaveLength(2)
  })

  it("handles non-Error rejection gracefully", async () => {
    const roots = [makeNode("1")]
    const loadChildren = vi.fn().mockRejectedValue("string error")

    const { result } = renderHook(() =>
      useLazyTree({ rootNodes: roots, loadChildren })
    )

    await act(async () => {
      await result.current.expandNode("1")
    })

    expect(result.current.errorNodes.has("1")).toBe(true)
    expect(result.current.errorNodes.get("1")?.message).toBe("string error")
  })
})
