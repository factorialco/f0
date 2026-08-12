import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

import { act, zeroRenderHook } from "@/testing/test-utils"

import {
  arrivalWindowMs,
  ENTRANCE_MS,
  ENTRANCE_STAGGER_CAP_MS,
  ENTRANCE_STAGGER_MS,
  entranceDelay,
  useDelayedTrue,
  useElapsed,
} from "./home-motion"

describe("entranceDelay", () => {
  test("gives each block one more beat than the one above it", () => {
    expect(entranceDelay(0)).toBe(0)
    expect(entranceDelay(1)).toBeCloseTo(ENTRANCE_STAGGER_MS / 1000)
    expect(entranceDelay(2)).toBeCloseTo((2 * ENTRANCE_STAGGER_MS) / 1000)
  })

  test("caps the stagger, so the tail of a long column lands together", () => {
    const capped = ENTRANCE_STAGGER_CAP_MS / 1000

    expect(entranceDelay(50)).toBe(capped)
    expect(entranceDelay(500)).toBe(capped)
  })

  test("the cap applies to the stagger, not to the base delay", () => {
    // Otherwise a column held back (the side rail) would have its own rhythm
    // clipped by a ceiling meant for the number of blocks above it.
    expect(entranceDelay(50, 200)).toBeCloseTo(
      0.2 + ENTRANCE_STAGGER_CAP_MS / 1000
    )
  })
})

describe("useElapsed", () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  test("starts closed and opens once the window has passed", () => {
    const { result } = zeroRenderHook(() => useElapsed(300))

    // The arrival is still running, so a card mounting now IS arriving.
    expect(result.current).toBe(false)

    act(() => vi.advanceTimersByTime(300))

    // From here a card that mounts — edit mode re-parents them all — is not
    // arriving, it is simply there.
    expect(result.current).toBe(true)
  })

  test("no window at all is already over", () => {
    const { result } = zeroRenderHook(() => useElapsed(0))

    expect(result.current).toBe(true)
  })
})

describe("arrivalWindowMs", () => {
  test("covers the last block's delay plus the time it takes to land", () => {
    expect(arrivalWindowMs()).toBe(ENTRANCE_STAGGER_CAP_MS + ENTRANCE_MS)
    expect(arrivalWindowMs(220)).toBe(
      220 + ENTRANCE_STAGGER_CAP_MS + ENTRANCE_MS
    )
  })
})

describe("useDelayedTrue", () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  test("already true at mount is not a change, so it is not delayed", () => {
    const { result } = zeroRenderHook(() => useDelayedTrue(true, 200))

    expect(result.current).toBe(true)
  })

  test("waits out the delay before turning true", () => {
    const { result, rerender } = zeroRenderHook(
      ({ value }) => useDelayedTrue(value, 200),
      { initialProps: { value: false } }
    )

    rerender({ value: true })
    expect(result.current).toBe(false)

    act(() => vi.advanceTimersByTime(199))
    expect(result.current).toBe(false)

    act(() => vi.advanceTimersByTime(1))
    expect(result.current).toBe(true)
  })

  test("turns false at once — the flag that starts an animation never waits", () => {
    const { result, rerender } = zeroRenderHook(
      ({ value }) => useDelayedTrue(value, 200),
      { initialProps: { value: true } }
    )

    rerender({ value: false })

    expect(result.current).toBe(false)
  })

  test("a value that goes false again mid-delay never turns true", () => {
    const { result, rerender } = zeroRenderHook(
      ({ value }) => useDelayedTrue(value, 200),
      { initialProps: { value: false } }
    )

    rerender({ value: true })
    act(() => vi.advanceTimersByTime(100))
    rerender({ value: false })
    act(() => vi.advanceTimersByTime(500))

    expect(result.current).toBe(false)
  })

  test("no delay resolves without a timer at all", () => {
    const { result, rerender } = zeroRenderHook(
      ({ value }) => useDelayedTrue(value, 0),
      { initialProps: { value: false } }
    )

    // Reduced motion passes 0 here, and it must not need a tick to take effect.
    rerender({ value: true })

    expect(result.current).toBe(true)
  })
})
