import { describe, expect, it } from "vitest"

import type { ValueAxisBounds } from "../utils/alignedAxes"

import { computeAlignedValueAxes } from "../utils/alignedAxes"

/** Tick intervals implied by a bounds triple. */
const intervals = (bounds: ValueAxisBounds) =>
  Math.round((bounds.max - bounds.min) / bounds.interval)

/** Where zero sits as a fraction of the axis height, 0 = bottom. */
const zeroFraction = (bounds: ValueAxisBounds) =>
  (0 - bounds.min) / (bounds.max - bounds.min)

/**
 * Asserts the guarantee the combo chart depends on: both axes divide into the
 * same number of intervals, so every secondary label lands on a grid line the
 * primary axis drew — and neither axis clips its own data.
 */
function expectSameIntervals(
  primaryValues: number[],
  secondaryValues: number[],
  splitNumber = 2
) {
  const { primary, secondary } = computeAlignedValueAxes(
    primaryValues,
    secondaryValues,
    splitNumber
  )

  expect(intervals(primary)).toBe(intervals(secondary))
  expect(intervals(primary)).toBe(splitNumber)

  expect(primary.min).toBeLessThanOrEqual(Math.min(0, ...primaryValues))
  expect(primary.max).toBeGreaterThanOrEqual(Math.max(0, ...primaryValues))
  expect(secondary.min).toBeLessThanOrEqual(Math.min(0, ...secondaryValues))
  expect(secondary.max).toBeGreaterThanOrEqual(Math.max(0, ...secondaryValues))

  return { primary, secondary }
}

describe("computeAlignedValueAxes — the cases ECharts got wrong", () => {
  // Each of these was measured in a real browser render before this helper
  // existed and came back with mismatched interval counts, because splitNumber
  // is only a hint ECharts overrides for nicer rounding.

  it("negative net change against a positive rate (was 4 vs 3 intervals)", () => {
    expectSameIntervals([12, -8, 5, -14], [4.1, 5.2, 3.8, 6.1])
  })

  it("awkward small ranges (was 2 vs 3 intervals)", () => {
    expectSameIntervals([7, 3, 9, 4], [0.17, 0.63, 0.29, 0.44])
  })

  it("a line far from zero (was 3 vs 2 intervals)", () => {
    expectSameIntervals([120, 124, 129, 131], [95.2, 96.1, 95.8, 97.0])
  })

  it("headcount against a percentage", () => {
    const { primary, secondary } = expectSameIntervals(
      [118, 124, 129, 131, 136, 142],
      [4.1, 3.8, 5.2, 4.6, 3.9, 3.4]
    )
    // Round bounds, not raw data extents.
    expect(primary.max % primary.interval).toBe(0)
    expect(secondary.max % secondary.interval).toBeCloseTo(0, 10)
  })
})

describe("computeAlignedValueAxes — zero handling", () => {
  it("anchors both axes at zero when every value is positive", () => {
    const { primary, secondary } = expectSameIntervals([10, 20], [1, 2])
    expect(primary.min).toBe(0)
    expect(secondary.min).toBe(0)
    // No "-0" labels.
    expect(Object.is(primary.min, -0)).toBe(false)
    expect(Object.is(secondary.min, -0)).toBe(false)
  })

  it("aligns the zero lines when BOTH axes carry negatives", () => {
    const { primary, secondary } = expectSameIntervals([-30, 10], [-2, 5], 4)
    expect(zeroFraction(primary)).toBeCloseTo(zeroFraction(secondary), 10)
  })

  it("does NOT invent negative range on an all-positive axis", () => {
    // A turnover rate cannot be −5%. Sharing the split with a bar axis that has
    // negatives would print impossible ticks and waste half the axis height, so
    // the two zero lines are allowed to differ instead.
    const { secondary } = expectSameIntervals([12, -8, 5, -14], [4.1, 6.1], 4)
    expect(secondary.min).toBe(0)
  })

  it("keeps each axis tight to its own data when the splits differ", () => {
    const { primary, secondary } = expectSameIntervals(
      [12, -8, 5, -14],
      [4.1, 6.1],
      4
    )
    // Primary spans 26 of data; the axis should not be wildly larger.
    expect(primary.max - primary.min).toBeLessThanOrEqual(26 * 2)
    // Secondary spans 6.1; likewise.
    expect(secondary.max - secondary.min).toBeLessThanOrEqual(6.1 * 2)
  })
})

describe("computeAlignedValueAxes — scale choices", () => {
  it("honours a higher split number", () => {
    const result = computeAlignedValueAxes([118, 142], [3.4, 5.2], 4)
    expect(intervals(result.primary)).toBe(4)
    expect(intervals(result.secondary)).toBe(4)
  })

  it("rounds steps to 1 / 2 / 2.5 / 5 / 10 decades", () => {
    const { primary, secondary } = expectSameIntervals([0, 137], [0, 0.043])
    for (const bounds of [primary, secondary]) {
      const mantissa =
        bounds.interval / 10 ** Math.floor(Math.log10(bounds.interval))
      expect([1, 2, 2.5, 5, 10]).toContain(Number(mantissa.toFixed(10)))
    }
  })
})

describe("computeAlignedValueAxes — degenerate input", () => {
  it("survives an all-zero series", () => {
    const result = computeAlignedValueAxes([0, 0], [0, 0], 2)
    expect(result.primary.interval).toBeGreaterThan(0)
    expect(result.secondary.interval).toBeGreaterThan(0)
    expect(intervals(result.primary)).toBe(intervals(result.secondary))
  })

  it("survives one axis having no data at all", () => {
    const result = computeAlignedValueAxes([5, 10], [], 2)
    expect(intervals(result.primary)).toBe(intervals(result.secondary))
  })

  it("ignores non-finite values rather than producing NaN bounds", () => {
    const result = computeAlignedValueAxes(
      [5, Number.NaN, 10],
      [1, Number.POSITIVE_INFINITY],
      2
    )
    for (const bounds of [result.primary, result.secondary]) {
      expect(Number.isFinite(bounds.min)).toBe(true)
      expect(Number.isFinite(bounds.max)).toBe(true)
      expect(Number.isFinite(bounds.interval)).toBe(true)
    }
  })
})
