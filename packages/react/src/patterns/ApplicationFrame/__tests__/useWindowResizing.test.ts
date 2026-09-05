import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useWindowResizing } from "../useWindowResizing"

const SETTLE_MS = 120

describe("useWindowResizing", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("starts settled", () => {
    const { result } = renderHook(() => useWindowResizing(SETTLE_MS))
    expect(result.current).toBe(false)
  })

  it("tracks while the window is being dragged", () => {
    const { result } = renderHook(() => useWindowResizing(SETTLE_MS))

    act(() => {
      window.dispatchEvent(new Event("resize"))
    })
    expect(result.current).toBe(true)
  })

  it("only settles once the window has held still", () => {
    const { result } = renderHook(() => useWindowResizing(SETTLE_MS))

    act(() => {
      window.dispatchEvent(new Event("resize"))
    })
    act(() => {
      vi.advanceTimersByTime(SETTLE_MS - 20)
      window.dispatchEvent(new Event("resize"))
    })
    // A second event inside the window restarts the countdown: one gesture,
    // not two.
    act(() => {
      vi.advanceTimersByTime(SETTLE_MS - 20)
    })
    expect(result.current).toBe(true)

    act(() => {
      vi.advanceTimersByTime(SETTLE_MS)
    })
    expect(result.current).toBe(false)
  })

  it("ignores a frame that changed width without the window moving", () => {
    // THE regression this hook exists for. The frame's own width changes when
    // the sidebar collapses — an animation we are playing on purpose — and a
    // ResizeObserver reports that just as loudly as a window drag. When this
    // flag was fed from the observer, that animation switched every layout
    // reading it to `{ duration: 0 }`, which is how opening a right-docked
    // panel (the nav floats, the frame grows) lost its easing.
    const { result } = renderHook(() => useWindowResizing(SETTLE_MS))

    act(() => {
      // Whatever a ResizeObserver would do here, it is not a `resize` event.
      document.body.style.width = "640px"
      vi.advanceTimersByTime(SETTLE_MS * 2)
    })

    expect(result.current).toBe(false)
  })

  it("stops listening when it goes away", () => {
    const remove = vi.spyOn(window, "removeEventListener")
    const { unmount } = renderHook(() => useWindowResizing(SETTLE_MS))
    unmount()
    expect(remove).toHaveBeenCalledWith("resize", expect.any(Function))
  })
})
