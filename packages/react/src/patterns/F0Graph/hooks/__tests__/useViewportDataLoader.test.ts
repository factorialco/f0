import { renderHook } from "@testing-library/react"
import { act } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useViewportDataLoader } from "../useViewportDataLoader"

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

describe("useViewportDataLoader", () => {
  it("does nothing when loadVisibleNodeData is undefined", () => {
    renderHook(() => useViewportDataLoader({ nodeIds: ["a", "b"] }))
    // No callback → nothing to assert beyond "no throw"; advancing timers is safe.
    act(() => vi.advanceTimersByTime(1000))
  })

  it("flushes newly-visible ids as one batch after the debounce", () => {
    const load = vi.fn()
    renderHook(() =>
      useViewportDataLoader({
        nodeIds: ["a", "b"],
        loadVisibleNodeData: load,
        debounceMs: 200,
      })
    )
    expect(load).not.toHaveBeenCalled() // still debouncing
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(1)
    expect(load).toHaveBeenCalledWith(["a", "b"])
  })

  it("requests each id at most once", () => {
    const load = vi.fn()
    const { rerender } = renderHook(
      ({ ids }) =>
        useViewportDataLoader({
          nodeIds: ids,
          loadVisibleNodeData: load,
          debounceMs: 200,
        }),
      { initialProps: { ids: ["a", "b"] } }
    )
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenLastCalledWith(["a", "b"])

    // "b" stays visible, "c" is new → only "c" should be requested.
    rerender({ ids: ["b", "c"] })
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(2)
    expect(load).toHaveBeenLastCalledWith(["c"])

    // Nothing new → no further calls.
    rerender({ ids: ["b", "c"] })
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(2)
  })

  it("coalesces a burst of id changes into a single settled batch", () => {
    const load = vi.fn()
    const { rerender } = renderHook(
      ({ ids }) =>
        useViewportDataLoader({
          nodeIds: ids,
          loadVisibleNodeData: load,
          debounceMs: 200,
        }),
      { initialProps: { ids: ["a"] } }
    )
    // Rapid changes, each within the debounce window → reschedules, never fires.
    act(() => vi.advanceTimersByTime(100))
    rerender({ ids: ["a", "b"] })
    act(() => vi.advanceTimersByTime(100))
    rerender({ ids: ["a", "b", "c"] })
    expect(load).not.toHaveBeenCalled()
    // Camera settles.
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(1)
    expect(load).toHaveBeenCalledWith(["a", "b", "c"])
  })

  it("cancels the pending flush on unmount", () => {
    const load = vi.fn()
    const { unmount } = renderHook(() =>
      useViewportDataLoader({
        nodeIds: ["a"],
        loadVisibleNodeData: load,
        debounceMs: 200,
      })
    )
    unmount()
    act(() => vi.advanceTimersByTime(500))
    expect(load).not.toHaveBeenCalled()
  })
})
