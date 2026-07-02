import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useContainerAnchor } from "../useContainerAnchor"

// Regression coverage for the f0 #4568 side-drawer OOM: the anchor effect must
// not re-render on every scroll tick when the anchored box has not moved.
describe("useContainerAnchor", () => {
  let rafCbs: FrameRequestCallback[] = []

  beforeEach(() => {
    rafCbs = []
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      rafCbs.push(cb)
      return rafCbs.length
    })
    vi.stubGlobal("cancelAnimationFrame", () => {})
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      }
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const flushRaf = () =>
    act(() => {
      const cbs = rafCbs
      rafCbs = []
      cbs.forEach((cb) => cb(0))
    })

  const makeEl = (rect: Partial<DOMRect>) => {
    const el = document.createElement("div")
    el.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 0, height: 0, ...rect }) as DOMRect
    return el
  }

  it("returns the empty (viewport-fallback) style when there is no anchor", () => {
    const { result } = renderHook(() => useContainerAnchor(null))
    expect(result.current).toEqual({})
  })

  it("anchors once, then does NOT re-render while the box is unchanged", () => {
    const el = makeEl({ left: 10, top: 20, width: 300, height: 400 })
    const { result } = renderHook(() => useContainerAnchor(el))
    flushRaf()

    const anchored = result.current
    expect(anchored).toMatchObject({
      left: 10,
      top: 20,
      width: 300,
      height: 400,
    })

    for (let i = 0; i < 50; i++) {
      act(() => {
        window.dispatchEvent(new Event("scroll"))
      })
      flushRaf()
    }

    // unchanged box => same object identity => no re-render
    expect(result.current).toBe(anchored)
  })

  it("re-anchors when the box actually changes (resize)", () => {
    let rect: Partial<DOMRect> = { left: 0, top: 0, width: 100, height: 100 }
    const el = document.createElement("div")
    el.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 0, height: 0, ...rect }) as DOMRect

    const { result } = renderHook(() => useContainerAnchor(el))
    flushRaf()
    const first = result.current

    rect = { left: 5, top: 5, width: 200, height: 200 }
    act(() => {
      window.dispatchEvent(new Event("resize"))
    })
    flushRaf()

    expect(result.current).not.toBe(first)
    expect(result.current).toMatchObject({ width: 200, height: 200 })
  })
})
