import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useMountOnVisible } from "../useMountOnVisible"

let observers: {
  fire: (isIntersecting: boolean) => void
  observe: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
}[] = []

class MockIntersectionObserver {
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
  takeRecords = () => []
  constructor(private readonly callback: IntersectionObserverCallback) {
    observers.push({
      fire: (isIntersecting) =>
        this.callback(
          [{ isIntersecting } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        ),
      observe: this.observe,
      disconnect: this.disconnect,
    })
  }
}

describe("useMountOnVisible", () => {
  beforeEach(() => {
    observers = []
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver)
  })

  afterEach(() => vi.unstubAllGlobals())

  it("holds the subtree unmounted until the element is seen", () => {
    const { result } = renderHook(() => useMountOnVisible())
    expect(result.current.shouldMount).toBe(false)

    act(() => result.current.ref(document.createElement("div")))
    expect(observers[0]?.observe).toHaveBeenCalledOnce()
    expect(result.current.shouldMount).toBe(false)

    act(() => observers[0]?.fire(false))
    expect(result.current.shouldMount).toBe(false)

    act(() => observers[0]?.fire(true))
    expect(result.current.shouldMount).toBe(true)
  })

  // One-shot: a map that has taken its WebGL context should not give it up and
  // reclaim it every time the row drifts past the viewport edge.
  it("stops observing once mounted and never re-gates", () => {
    const { result } = renderHook(() => useMountOnVisible())
    act(() => result.current.ref(document.createElement("div")))
    act(() => observers[0]?.fire(true))

    expect(observers[0]?.disconnect).toHaveBeenCalled()
    act(() => result.current.ref(document.createElement("div")))
    expect(observers).toHaveLength(1)
    expect(result.current.shouldMount).toBe(true)
  })

  it("mounts immediately where there is no observer at all", () => {
    vi.unstubAllGlobals()
    vi.stubGlobal("IntersectionObserver", undefined)
    const { result } = renderHook(() => useMountOnVisible())
    expect(result.current.shouldMount).toBe(true)
  })
})
