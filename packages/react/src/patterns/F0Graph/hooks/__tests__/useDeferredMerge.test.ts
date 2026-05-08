import { renderHook, act } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import type { DeferredNodesPayload, GraphEdge, GraphNode } from "../../types"
import { useDeferredMerge } from "../useDeferredMerge"

// ─── Helpers ───────────────────────────────────────────────────

type TestNode = GraphNode<{ name: string }>

function makeNode(id: string, parentId: string | null = null): TestNode {
  return { id, parentId, data: { name: `Node ${id}` } }
}

function makeEdge(source: string, target: string): GraphEdge {
  return { id: `${source}->${target}`, source, target }
}

/** Flush microtask queue so Promise callbacks run inside act(). */
async function flush(ms = 50): Promise<void> {
  await act(async () => {
    await new Promise((r) => setTimeout(r, ms))
  })
}

// ─── Tests ─────────────────────────────────────────────────────

describe("useDeferredMerge", () => {
  it("returns initial nodes/edges when deferredNodes is undefined", () => {
    const initial = [makeNode("a"), makeNode("b", "a")]
    const edges = [makeEdge("a", "b")]

    const { result } = renderHook(() =>
      useDeferredMerge({ initialNodes: initial, initialEdges: edges })
    )

    expect(result.current.mergedNodes).toEqual(initial)
    expect(result.current.mergedEdges).toEqual(edges)
    expect(result.current.deferredStatus).toBe("idle")
    expect(result.current.error).toBeNull()
  })

  it("merges deferred nodes after Promise resolves", async () => {
    const initial = [makeNode("a")]
    const deferredPayload: DeferredNodesPayload<{ name: string }> = {
      nodes: [makeNode("b", "a"), makeNode("c", "a")],
      edges: [makeEdge("a", "b"), makeEdge("a", "c")],
    }
    const promise = Promise.resolve(deferredPayload)

    const { result } = renderHook(() =>
      useDeferredMerge({
        initialNodes: initial,
        initialEdges: [],
        deferredNodes: promise,
      })
    )

    // Before resolve
    expect(result.current.deferredStatus).toBe("loading")
    expect(result.current.mergedNodes).toHaveLength(1)

    // After resolve
    await flush()
    expect(result.current.deferredStatus).toBe("resolved")
    expect(result.current.mergedNodes).toHaveLength(3)
    expect(result.current.mergedEdges).toHaveLength(2)
    expect(result.current.error).toBeNull()
  })

  it("deduplicates by id — deferred wins on conflict", async () => {
    const initial = [{ id: "a", parentId: null, data: { name: "Original A" } }]
    const deferredPayload: DeferredNodesPayload<{ name: string }> = {
      nodes: [{ id: "a", parentId: null, data: { name: "Updated A" } }],
    }
    const promise = Promise.resolve(deferredPayload)

    const { result } = renderHook(() =>
      useDeferredMerge({
        initialNodes: initial,
        initialEdges: [],
        deferredNodes: promise,
      })
    )

    await flush()
    expect(result.current.deferredStatus).toBe("resolved")
    expect(result.current.mergedNodes).toHaveLength(1)
    expect(result.current.mergedNodes[0].data.name).toBe("Updated A")
  })

  it("handles thunk (invoked post-mount)", async () => {
    const thunk = vi.fn(() =>
      Promise.resolve<DeferredNodesPayload<{ name: string }>>({
        nodes: [makeNode("x")],
      })
    )

    const { result } = renderHook(() =>
      useDeferredMerge({
        initialNodes: [],
        initialEdges: [],
        deferredNodes: thunk,
      })
    )

    expect(thunk).toHaveBeenCalledTimes(1)
    await flush()
    expect(result.current.deferredStatus).toBe("resolved")
    expect(result.current.mergedNodes).toHaveLength(1)
  })

  it("sets error status when Promise rejects", async () => {
    const failing = Promise.reject(new Error("Network error"))
    failing.catch(() => {}) // prevent unhandled rejection

    const { result } = renderHook(() =>
      useDeferredMerge({
        initialNodes: [makeNode("a")],
        initialEdges: [],
        deferredNodes: failing,
      })
    )

    await flush()
    expect(result.current.deferredStatus).toBe("error")
    expect(result.current.error?.message).toBe("Network error")
    // Initial nodes still available
    expect(result.current.mergedNodes).toHaveLength(1)
  })

  it("discards stale results when deferredNodes changes", async () => {
    let resolveFirst: (v: DeferredNodesPayload<{ name: string }>) => void
    const firstPromise = new Promise<DeferredNodesPayload<{ name: string }>>(
      (r) => {
        resolveFirst = r
      }
    )
    firstPromise.catch(() => {})

    const secondPayload: DeferredNodesPayload<{ name: string }> = {
      nodes: [makeNode("second")],
    }
    const secondPromise = Promise.resolve(secondPayload)

    const { result, rerender } = renderHook(
      ({ def }) =>
        useDeferredMerge({
          initialNodes: [],
          initialEdges: [],
          deferredNodes: def,
        }),
      { initialProps: { def: firstPromise as typeof firstPromise | undefined } }
    )

    expect(result.current.deferredStatus).toBe("loading")

    // Switch to a second (immediately resolving) promise
    rerender({ def: secondPromise })

    // Resolve the first promise — should be discarded
    await act(async () => {
      resolveFirst!({ nodes: [makeNode("first")] })
    })
    await flush()

    // Second payload should win
    expect(result.current.deferredStatus).toBe("resolved")
    expect(result.current.mergedNodes).toHaveLength(1)
    expect(result.current.mergedNodes[0].id).toBe("second")
  })

  it("handles edges-only deferred payload (no new nodes)", async () => {
    const initial = [makeNode("a"), makeNode("b")]
    const deferredPayload: DeferredNodesPayload<{ name: string }> = {
      nodes: [],
      edges: [makeEdge("a", "b")],
    }
    const promise = Promise.resolve(deferredPayload)

    const { result } = renderHook(() =>
      useDeferredMerge({
        initialNodes: initial,
        initialEdges: [],
        deferredNodes: promise,
      })
    )

    await flush()
    expect(result.current.deferredStatus).toBe("resolved")
    expect(result.current.mergedNodes).toHaveLength(2)
    expect(result.current.mergedEdges).toHaveLength(1)
  })

  it("resets to idle when deferredNodes becomes undefined", async () => {
    const payload: DeferredNodesPayload<{ name: string }> = {
      nodes: [makeNode("x")],
    }
    const promise = Promise.resolve(payload)

    const { result, rerender } = renderHook(
      ({ def }) =>
        useDeferredMerge({
          initialNodes: [],
          initialEdges: [],
          deferredNodes: def,
        }),
      {
        initialProps: {
          def: promise as
            | Promise<DeferredNodesPayload<{ name: string }>>
            | undefined,
        },
      }
    )

    await flush()
    expect(result.current.deferredStatus).toBe("resolved")

    rerender({ def: undefined })
    expect(result.current.deferredStatus).toBe("idle")
    expect(result.current.mergedNodes).toHaveLength(0)
  })
})
