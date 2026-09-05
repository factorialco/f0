import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useThinkingClock } from "../useThinkingClock"

const START = new Date("2026-01-01T10:00:00Z").getTime()

describe("useThinkingClock", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(START)
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it("is null while nothing is thinking", () => {
    const { result } = renderHook(() => useThinkingClock(false))
    expect(result.current).toBeNull()
  })

  it("seals the instant on the rising edge", () => {
    const { result } = renderHook(({ on }) => useThinkingClock(on), {
      initialProps: { on: false },
    })
    expect(result.current).toBeNull()
  })

  it("keeps the same instant across re-renders while thinking", () => {
    // The indicator moves from the standalone "Thinking…" item to each
    // reasoning step in turn, re-rendering as it goes. The number must not
    // restart on any of those hand-offs.
    const { result, rerender } = renderHook(({ on }) => useThinkingClock(on), {
      initialProps: { on: true },
    })
    const sealed = result.current
    expect(sealed).not.toBeNull()

    act(() => {
      vi.advanceTimersByTime(9_000)
    })
    rerender({ on: true })
    rerender({ on: true })

    expect(result.current).toBe(sealed)
  })

  it("ignores a late anchor rather than jumping the count", () => {
    // The guard that earns its keep: `anchor` is in the effect's deps, so a
    // host that starts supplying one mid-turn re-runs the effect. Re-sealing
    // there would make the number jump backwards on screen.
    const { result, rerender } = renderHook(
      ({ anchor }: { anchor?: number }) => useThinkingClock(true, anchor),
      { initialProps: {} as { anchor?: number } }
    )
    const sealed = result.current
    expect(sealed).toBe(START)

    rerender({ anchor: START - 60_000 })
    expect(result.current).toBe(sealed)
  })

  it("clears when thinking stops, and re-seals later at the new time", () => {
    const { result, rerender } = renderHook(({ on }) => useThinkingClock(on), {
      initialProps: { on: true },
    })
    const first = result.current

    rerender({ on: false })
    expect(result.current).toBeNull()

    act(() => {
      vi.advanceTimersByTime(30_000)
    })
    rerender({ on: true })

    expect(result.current).not.toBeNull()
    expect(result.current).not.toBe(first)
  })

  it("prefers the host's anchor over the local reading", () => {
    const anchor = Date.now() - 42_000
    const { result } = renderHook(() => useThinkingClock(true, anchor))
    expect(result.current).toBe(anchor)
  })
})
