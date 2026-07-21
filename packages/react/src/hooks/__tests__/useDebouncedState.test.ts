import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { useDebouncedState } from "../useDebouncedState"

describe("useDebouncedState", () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it("applies only the last value after the delay", () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useDebouncedState("initial", 200))

    act(() => {
      result.current[1]("first")
      result.current[1]("second")
    })
    expect(result.current[0]).toBe("initial")

    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(result.current[0]).toBe("second")
  })

  it("updates even when Date.now is frozen (MockDate in stories)", async () => {
    // Regression: lodash.debounce (usehooks-ts useDebounceValue) decides its
    // trailing edge by reading Date.now(), so a frozen clock starved the
    // update forever. A setTimeout-based debounce must not care.
    const nowSpy = vi
      .spyOn(Date, "now")
      .mockReturnValue(new Date(2025, 6, 30).getTime())
    const { result } = renderHook(() => useDebouncedState("initial", 50))

    act(() => {
      result.current[1]("updated")
    })

    await waitFor(() => expect(result.current[0]).toBe("updated"))
    nowSpy.mockRestore()
  })

  it("cancels the pending update on unmount", () => {
    // Regression: usehooks-ts' unmount cleanup cancels the wrong lodash
    // instance, letting trailing timers fire after the component (and in
    // tests, the jsdom window) is gone.
    vi.useFakeTimers()
    const clearSpy = vi.spyOn(global, "clearTimeout")
    const { result, unmount } = renderHook(() =>
      useDebouncedState("initial", 200)
    )

    act(() => {
      result.current[1]("pending")
    })
    unmount()

    expect(clearSpy).toHaveBeenCalled()
    // Advancing past the delay must not throw or dispatch a state update.
    expect(() => vi.advanceTimersByTime(500)).not.toThrow()
  })
})
