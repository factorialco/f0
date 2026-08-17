import { afterEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useTransientError } from "../useTransientError"

describe("useTransientError", () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it("clears transient errors after the timeout", () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useTransientError())

    act(() => result.current.show("Upload failed"))
    expect(result.current.error).toBe("Upload failed")

    act(() => vi.advanceTimersByTime(4_000))
    expect(result.current.error).toBeNull()
  })

  it("keeps persistent errors until they are explicitly cleared", () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useTransientError())

    act(() => result.current.show("File too large", { persistent: true }))
    act(() => vi.advanceTimersByTime(4_000))
    expect(result.current.error).toBe("File too large")

    act(() => result.current.clear())
    expect(result.current.error).toBeNull()
  })
})
