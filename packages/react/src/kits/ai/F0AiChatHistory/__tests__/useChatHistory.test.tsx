import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type ChatThread, useChatHistory } from "../useChatHistory"

const makeThreads = (): ChatThread[] => [
  { id: "a", title: "Alpha", createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "b", title: "Beta", createdAt: "2026-01-02", updatedAt: "2026-01-02" },
]

/** A promise whose resolution we control, to hold an action "in flight". */
function deferred<T = void>() {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

beforeEach(() => {
  localStorage.clear()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe("useChatHistory pin/unpin", () => {
  it("pins locally (no persister) without ever going pending", () => {
    const { result } = renderHook(() =>
      useChatHistory({
        fetchThreads: async () => makeThreads(),
        deleteThread: async () => {},
      })
    )

    act(() => result.current.pinThread("a"))

    expect(result.current.pinnedIds.has("a")).toBe(true)
    expect(result.current.pendingIds.size).toBe(0)
    // Persisted to localStorage in local mode.
    expect(
      JSON.parse(localStorage.getItem("f0-ai-pinned-threads") ?? "[]")
    ).toEqual(["a"])
  })

  it("host-backed pin is optimistic and pending until the persister resolves", async () => {
    const gate = deferred()
    const pinThread = vi.fn(() => gate.promise)

    const { result } = renderHook(() =>
      useChatHistory({
        fetchThreads: async () => makeThreads(),
        deleteThread: async () => {},
        pinThread,
        unpinThread: async () => {},
      })
    )

    act(() => result.current.pinThread("a"))

    // Optimistic: row already moved, and marked pending while in flight.
    expect(result.current.pinnedIds.has("a")).toBe(true)
    expect(result.current.pendingIds.has("a")).toBe(true)
    expect(pinThread).toHaveBeenCalledWith("a")

    await act(async () => {
      gate.resolve()
      await gate.promise
    })

    expect(result.current.pinnedIds.has("a")).toBe(true)
    expect(result.current.pendingIds.has("a")).toBe(false)
  })

  it("rolls back the optimistic pin when the persister rejects", async () => {
    const gate = deferred()
    const pinThread = vi.fn(() => gate.promise)

    const { result } = renderHook(() =>
      useChatHistory({
        fetchThreads: async () => makeThreads(),
        deleteThread: async () => {},
        pinThread,
        unpinThread: async () => {},
      })
    )

    act(() => result.current.pinThread("a"))
    expect(result.current.pinnedIds.has("a")).toBe(true)

    await act(async () => {
      gate.reject(new Error("network"))
      await gate.promise.catch(() => {})
    })

    await waitFor(() => {
      expect(result.current.pinnedIds.has("a")).toBe(false)
      expect(result.current.pendingIds.has("a")).toBe(false)
    })
  })
})

describe("useChatHistory delete", () => {
  it("marks the thread pending while deleting, then removes it on success", async () => {
    const gate = deferred()
    const deleteThread = vi.fn(() => gate.promise)
    // Stable identity: an inline arrow would change each render and, with
    // `enabled`, retrigger the fetch effect in a loop.
    const fetchThreads = vi.fn(async () => makeThreads())

    const { result } = renderHook(() =>
      useChatHistory({ enabled: true, fetchThreads, deleteThread })
    )

    await waitFor(() => expect(result.current.threads).toHaveLength(2))

    // Kick the delete off without awaiting it: it suspends at the still-open
    // `gate`, leaving the row pending.
    act(() => {
      void result.current.deleteThread("a")
    })

    // Still present, but pending while the backend confirms.
    await waitFor(() => expect(result.current.pendingIds.has("a")).toBe(true))
    expect(result.current.threads.map((t) => t.id)).toContain("a")

    await act(async () => {
      gate.resolve()
    })

    await waitFor(() => {
      expect(result.current.threads.map((t) => t.id)).toEqual(["b"])
      expect(result.current.pendingIds.has("a")).toBe(false)
    })
  })

  it("keeps the thread and re-fetches when the delete fails", async () => {
    const gate = deferred()
    const deleteThread = vi.fn(() => gate.promise)
    const fetchThreads = vi.fn(async () => makeThreads())

    const { result } = renderHook(() =>
      useChatHistory({ enabled: true, fetchThreads, deleteThread })
    )

    await waitFor(() => expect(result.current.threads).toHaveLength(2))
    fetchThreads.mockClear()

    let pending!: Promise<void>
    await act(async () => {
      pending = result.current.deleteThread("a")
    })

    await act(async () => {
      gate.reject(new Error("nope"))
      await pending
    })

    expect(fetchThreads).toHaveBeenCalledTimes(1) // re-fetch to restore state
    expect(result.current.pendingIds.has("a")).toBe(false)
  })
})
