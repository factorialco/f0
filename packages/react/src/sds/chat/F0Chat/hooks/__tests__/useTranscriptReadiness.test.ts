import { createElement, StrictMode, type ReactNode } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useTranscriptReadiness } from "../useTranscriptReadiness"

describe("useTranscriptReadiness", () => {
  let frames: { id: number; callback: FrameRequestCallback }[]
  let nextFrameId: number

  beforeEach(() => {
    vi.useFakeTimers()
    frames = []
    nextFrameId = 1
    vi.spyOn(globalThis, "requestAnimationFrame").mockImplementation(
      (callback: FrameRequestCallback) => {
        const id = nextFrameId++
        frames.push({ id, callback })
        return id
      }
    )
    vi.spyOn(globalThis, "cancelAnimationFrame").mockImplementation((id) => {
      frames = frames.filter((frame) => frame.id !== id)
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  const paint = () => {
    const pending = frames
    frames = []
    pending.forEach(({ callback }) => callback(0))
  }

  const strictWrapper = ({ children }: { children: ReactNode }) =>
    createElement(StrictMode, null, children)

  it("waits for Virtuoso visibility and two stable paint frames", () => {
    const { result } = renderHook(() => useTranscriptReadiness("list-1"))
    const viewport = document.createElement("div")

    act(() => result.current.setViewport(viewport))
    act(paint)
    act(paint)
    expect(result.current.ready).toBe(false)

    act(() => result.current.setListVisible(true))
    act(paint)
    expect(result.current.ready).toBe(false)
    act(paint)
    expect(result.current.ready).toBe(true)
  })

  it("restarts the two-frame gate after a resize and disconnects when ready", () => {
    let resizeCallback: ResizeObserverCallback = () => {}
    const disconnect = vi.fn()
    vi.stubGlobal(
      "ResizeObserver",
      class {
        constructor(callback: ResizeObserverCallback) {
          resizeCallback = callback
        }
        observe() {}
        disconnect() {
          disconnect()
        }
        unobserve() {}
      }
    )
    let height = 480
    const viewport = document.createElement("div")
    Object.defineProperties(viewport, {
      clientWidth: { configurable: true, get: () => 320 },
      clientHeight: { configurable: true, get: () => height },
    })
    const { result } = renderHook(() => useTranscriptReadiness("list-1"))

    act(() => {
      result.current.setViewport(viewport)
      result.current.setListVisible(true)
    })
    act(paint)

    height = 520
    act(() => resizeCallback([], {} as unknown as ResizeObserver))
    act(paint)
    expect(result.current.ready).toBe(false)
    act(paint)

    expect(result.current.ready).toBe(true)
    expect(disconnect).toHaveBeenCalledOnce()
  })

  it("uses the defensive fallback when Virtuoso never reports visibility", () => {
    const originalResizeObserver = globalThis.ResizeObserver
    vi.stubGlobal("ResizeObserver", undefined)
    const { result } = renderHook(() => useTranscriptReadiness("list-1"))

    act(() => result.current.setViewport(document.createElement("div")))
    expect(result.current.ready).toBe(false)
    act(() => vi.advanceTimersByTime(1_000))
    expect(result.current.ready).toBe(true)

    vi.stubGlobal("ResizeObserver", originalResizeObserver)
  })

  it("rebuilds its scheduling after StrictMode effect replay", () => {
    const { result } = renderHook(() => useTranscriptReadiness("list-1"), {
      wrapper: strictWrapper,
    })

    act(() => {
      result.current.setViewport(document.createElement("div"))
      result.current.setListVisible(true)
    })
    act(paint)
    act(paint)

    expect(result.current.ready).toBe(true)
  })

  it("becomes provisional again immediately when the Virtuoso list key changes", () => {
    const { result, rerender } = renderHook(
      ({ listKey }) => useTranscriptReadiness(listKey),
      { initialProps: { listKey: "list-1" } }
    )
    act(() => {
      result.current.setViewport(document.createElement("div"))
      result.current.setListVisible(true)
    })
    act(paint)
    act(paint)
    expect(result.current.ready).toBe(true)

    rerender({ listKey: "list-2" })
    expect(result.current.ready).toBe(false)
  })
})
