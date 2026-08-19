import { createElement, StrictMode, type ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useMicrotaskBatch } from "../useMicrotaskBatch"

describe("useMicrotaskBatch", () => {
  const strictWrapper = ({ children }: { children: ReactNode }) =>
    createElement(StrictMode, null, children)

  it("uses the latest value and callback in one microtask", async () => {
    const firstWrite = vi.fn()
    const secondWrite = vi.fn()
    const { result, rerender } = renderHook(
      ({ write }) => useMicrotaskBatch<number | undefined>(write),
      { initialProps: { write: firstWrite } }
    )

    act(() => {
      result.current(1)
      result.current(undefined)
    })
    rerender({ write: secondWrite })
    await act(async () => Promise.resolve())

    expect(firstWrite).not.toHaveBeenCalled()
    expect(secondWrite).toHaveBeenCalledOnce()
    expect(secondWrite).toHaveBeenCalledWith(undefined)
  })

  it("drops a pending write after unmount", async () => {
    const write = vi.fn()
    const { result, unmount } = renderHook(() => useMicrotaskBatch(write))

    act(() => result.current(42))
    unmount()
    await act(async () => Promise.resolve())

    expect(write).not.toHaveBeenCalled()
  })

  it("keeps accepting writes after StrictMode effect replay", async () => {
    const write = vi.fn()
    const { result } = renderHook(() => useMicrotaskBatch(write), {
      wrapper: strictWrapper,
    })

    act(() => result.current(42))
    await act(async () => Promise.resolve())

    expect(write).toHaveBeenCalledWith(42)
  })
})
