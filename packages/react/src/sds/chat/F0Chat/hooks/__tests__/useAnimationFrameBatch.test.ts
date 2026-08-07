import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useAnimationFrameBatch } from "../useAnimationFrameBatch"

let frameCallbacks: FrameRequestCallback[]

beforeEach(() => {
  frameCallbacks = []
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frameCallbacks.push(callback)
    return frameCallbacks.length
  })
  vi.stubGlobal("cancelAnimationFrame", vi.fn())
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("useAnimationFrameBatch", () => {
  it("applies only the latest value from a frame", () => {
    const apply = vi.fn()
    const { result } = renderHook(() => useAnimationFrameBatch(apply))

    act(() => {
      result.current(100)
      result.current(200)
      result.current(300)
    })

    expect(frameCallbacks).toHaveLength(1)
    expect(apply).not.toHaveBeenCalled()

    act(() => frameCallbacks.shift()?.(0))

    expect(apply).toHaveBeenCalledTimes(1)
    expect(apply).toHaveBeenCalledWith(300)
  })

  it("cancels a pending frame on unmount", () => {
    const { result, unmount } = renderHook(() =>
      useAnimationFrameBatch(vi.fn())
    )

    act(() => result.current(100))
    unmount()

    expect(cancelAnimationFrame).toHaveBeenCalledWith(1)
  })
})
