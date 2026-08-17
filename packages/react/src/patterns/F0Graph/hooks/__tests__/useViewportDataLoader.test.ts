import { renderHook } from "@testing-library/react"
import { StrictMode, act, createElement, type ReactNode } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useViewportDataLoader } from "../useViewportDataLoader"

const strictWrapper = ({ children }: { children: ReactNode }) =>
  createElement(StrictMode, null, children)

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

  it("drops fly-over ids that left the viewport before the flush", () => {
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
    // Camera sweeps across the tree during an automatic navigation: "a" then
    // "b" enter and leave within the debounce window; "c" is where it settles.
    act(() => vi.advanceTimersByTime(100))
    rerender({ ids: ["b"] })
    act(() => vi.advanceTimersByTime(100))
    rerender({ ids: ["c"] })
    act(() => vi.advanceTimersByTime(200))
    // Only the final resting node is hydrated — "a"/"b" were flown over.
    expect(load).toHaveBeenCalledTimes(1)
    expect(load).toHaveBeenCalledWith(["c"])

    // Dropped fly-over ids are not marked requested, so navigating to "a" later
    // still hydrates it.
    rerender({ ids: ["a"] })
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(2)
    expect(load).toHaveBeenLastCalledWith(["a"])
  })

  it("still flushes the initial batch under StrictMode (mount→unmount→mount)", () => {
    const load = vi.fn()
    renderHook(
      () =>
        useViewportDataLoader({
          nodeIds: ["a", "b"],
          loadVisibleNodeData: load,
          debounceMs: 200,
        }),
      { wrapper: strictWrapper }
    )
    // StrictMode cancels the first timer; the re-mounted effect must re-arm it.
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(1)
    expect(load).toHaveBeenCalledWith(["a", "b"])
  })

  it("does not flush while disabled", () => {
    const load = vi.fn()
    renderHook(() =>
      useViewportDataLoader({
        nodeIds: ["a", "b", "c"],
        loadVisibleNodeData: load,
        debounceMs: 200,
        enabled: false,
      })
    )
    act(() => vi.advanceTimersByTime(1000))
    expect(load).not.toHaveBeenCalled()
  })

  it("flushes only the ids present once enabled — not the pre-enable set (windowing mount bug)", () => {
    const load = vi.fn()
    // Repro: on mount, windowing isn't active yet so nodeIds is the WHOLE tree
    // and the loader is disabled; once the viewport settles, windowing kicks in
    // and nodeIds shrinks to what's on screen.
    const { rerender } = renderHook(
      ({ ids, enabled }) =>
        useViewportDataLoader({
          nodeIds: ids,
          loadVisibleNodeData: load,
          debounceMs: 200,
          enabled,
        }),
      { initialProps: { ids: ["a", "b", "c", "d", "e"], enabled: false } }
    )
    act(() => vi.advanceTimersByTime(200))
    expect(load).not.toHaveBeenCalled()

    // Viewport settles → windowing active → only ~2 on screen, loader enabled.
    rerender({ ids: ["c", "d"], enabled: true })
    act(() => vi.advanceTimersByTime(200))
    expect(load).toHaveBeenCalledTimes(1)
    expect(load).toHaveBeenCalledWith(["c", "d"])
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
