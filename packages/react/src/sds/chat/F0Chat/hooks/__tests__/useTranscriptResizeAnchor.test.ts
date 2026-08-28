import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  RESIZE_SETTLE_MS,
  useTranscriptResizeAnchor,
} from "../useTranscriptResizeAnchor"

let observed: { element: Element; fire: () => void }[] = []

class MockResizeObserver {
  constructor(private readonly callback: () => void) {}
  observe(element: Element) {
    observed.push({ element, fire: () => this.callback() })
  }
  disconnect() {
    observed = observed.filter(
      (entry) => entry.fire !== (() => this.callback())
    )
  }
}

const scrollerWithWidth = (width: number) => {
  const element = document.createElement("div")
  let current = width
  Object.defineProperty(element, "clientWidth", {
    configurable: true,
    get: () => current,
  })
  return { element, setWidth: (next: number) => (current = next) }
}

const fireResize = () => observed.forEach((entry) => entry.fire())

describe("useTranscriptResizeAnchor", () => {
  beforeEach(() => {
    observed = []
    vi.useFakeTimers()
    vi.stubGlobal("ResizeObserver", MockResizeObserver)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it("flags a width change and settles once the width holds", () => {
    const onSettled = vi.fn()
    const { result } = renderHook(() =>
      useTranscriptResizeAnchor({ onSettled })
    )
    const scroller = scrollerWithWidth(400)

    act(() => result.current.observeResize(scroller.element))
    expect(result.current.resizingRef.current).toBe(false)

    act(() => {
      scroller.setWidth(500)
      fireResize()
    })
    expect(result.current.resizingRef.current).toBe(true)
    expect(onSettled).not.toHaveBeenCalled()

    act(() => vi.advanceTimersByTime(RESIZE_SETTLE_MS))
    expect(result.current.resizingRef.current).toBe(false)
    expect(onSettled).toHaveBeenCalledTimes(1)
  })

  it("settles once for a whole drag, not once per frame", () => {
    const onSettled = vi.fn()
    const { result } = renderHook(() =>
      useTranscriptResizeAnchor({ onSettled })
    )
    const scroller = scrollerWithWidth(300)

    act(() => result.current.observeResize(scroller.element))

    for (let width = 310; width <= 400; width += 10) {
      act(() => {
        scroller.setWidth(width)
        fireResize()
        vi.advanceTimersByTime(RESIZE_SETTLE_MS / 2)
      })
    }
    expect(onSettled).not.toHaveBeenCalled()
    expect(result.current.resizingRef.current).toBe(true)

    act(() => vi.advanceTimersByTime(RESIZE_SETTLE_MS))
    expect(onSettled).toHaveBeenCalledTimes(1)
  })

  // Height-only changes are the composer growing and the keyboard opening,
  // which followOutput already owns — re-anchoring there would fight it.
  it("ignores a height-only change", () => {
    const onSettled = vi.fn()
    const { result } = renderHook(() =>
      useTranscriptResizeAnchor({ onSettled })
    )
    const scroller = scrollerWithWidth(400)

    act(() => result.current.observeResize(scroller.element))
    act(() => fireResize())

    expect(result.current.resizingRef.current).toBe(false)
    act(() => vi.advanceTimersByTime(RESIZE_SETTLE_MS))
    expect(onSettled).not.toHaveBeenCalled()
  })

  it("drops a pending settle when the scroller is detached", () => {
    const onSettled = vi.fn()
    const { result } = renderHook(() =>
      useTranscriptResizeAnchor({ onSettled })
    )
    const scroller = scrollerWithWidth(400)

    act(() => result.current.observeResize(scroller.element))
    act(() => {
      scroller.setWidth(500)
      fireResize()
    })

    act(() => result.current.observeResize(null))
    act(() => vi.advanceTimersByTime(RESIZE_SETTLE_MS * 2))
    expect(onSettled).not.toHaveBeenCalled()
    expect(result.current.resizingRef.current).toBe(false)
  })
})
