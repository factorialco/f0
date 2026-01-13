import { renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { useAutoClear } from "../useAutoClear"

describe("useAutoClear", () => {
  const mockReset = vi.fn()

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.clearAllMocks()
    vi.useRealTimers()
  })

  const FIFTEEN_MINUTES = 15 * 60 * 1000
  const TEN_MINUTES = 10 * 60 * 1000
  const FIVE_MINUTES = 5 * 60 * 1000

  describe("when chat is open", () => {
    it("should not set any timer when chat is open", () => {
      renderHook(() =>
        useAutoClear({
          reset: mockReset,
          isOpen: true,
          autoClearMinutes: 15,
        })
      )

      vi.advanceTimersByTime(FIFTEEN_MINUTES)
      expect(mockReset).not.toHaveBeenCalled()
    })

    it("should clear existing timer when chat opens", () => {
      const { rerender } = renderHook(
        ({ isOpen }) =>
          useAutoClear({
            reset: mockReset,
            isOpen,
            autoClearMinutes: 15,
          }),
        {
          initialProps: { isOpen: false },
        }
      )

      expect(vi.getTimerCount()).toBe(1)
      rerender({ isOpen: true })
      expect(vi.getTimerCount()).toBe(0)

      vi.advanceTimersByTime(FIFTEEN_MINUTES)

      expect(mockReset).not.toHaveBeenCalled()
    })
  })

  describe("when chat is closed", () => {
    it("should set a 15-minute timer when chat is closed", () => {
      renderHook(() =>
        useAutoClear({
          reset: mockReset,
          isOpen: false,
          autoClearMinutes: 15,
        })
      )

      expect(vi.getTimerCount()).toBe(1)
      expect(mockReset).not.toHaveBeenCalled()

      vi.advanceTimersByTime(FIFTEEN_MINUTES - 1)
      expect(mockReset).not.toHaveBeenCalled()

      vi.advanceTimersByTime(2)
      expect(mockReset).toHaveBeenCalledTimes(1)
    })

    it("should set a new timer each time chat closes", () => {
      const { rerender } = renderHook(
        ({ isOpen }) =>
          useAutoClear({
            reset: mockReset,
            isOpen,
            autoClearMinutes: 15,
          }),
        {
          initialProps: { isOpen: true },
        }
      )

      expect(vi.getTimerCount()).toBe(0)
      rerender({ isOpen: false })
      expect(vi.getTimerCount()).toBe(1)

      vi.advanceTimersByTime(FIVE_MINUTES)

      rerender({ isOpen: true })
      expect(vi.getTimerCount()).toBe(0)
      rerender({ isOpen: false })
      expect(vi.getTimerCount()).toBe(1)

      // The first timer should have been cleared, so reset should not be called after original 15 minutes
      vi.advanceTimersByTime(TEN_MINUTES + 1) // Total 15 minutes from first close
      expect(mockReset).not.toHaveBeenCalled()

      // But should be called after 15 minutes from second close
      vi.advanceTimersByTime(FIVE_MINUTES)
      expect(mockReset).toHaveBeenCalledTimes(1)
    })
  })

  describe("cleanup", () => {
    it("should clear timer on unmount", () => {
      const { unmount } = renderHook(() =>
        useAutoClear({
          reset: mockReset,
          isOpen: false,
          autoClearMinutes: 15,
        })
      )

      expect(vi.getTimerCount()).toBe(1)
      unmount()
      expect(vi.getTimerCount()).toBe(0)

      vi.advanceTimersByTime(FIFTEEN_MINUTES)
      expect(mockReset).not.toHaveBeenCalled()
    })
  })
})
