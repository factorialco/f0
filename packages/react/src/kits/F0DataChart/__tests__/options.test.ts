import { describe, expect, it } from "vitest"

import {
  computeCategoryAxisLayout,
  computeLabelInterval,
} from "../utils/options"

describe("computeLabelInterval", () => {
  it("returns undefined when labels fit comfortably", () => {
    // 5 categories in 600px = 120px each, well above MIN_LABEL_WIDTH (60)
    expect(computeLabelInterval(5, 600)).toBeUndefined()
  })

  it("returns an interval > 0 when labels don't fit", () => {
    // 30 categories in 300px = 10px each, way below MIN_LABEL_WIDTH
    const interval = computeLabelInterval(30, 300)
    expect(interval).toBeDefined()
    expect(interval).toBeGreaterThan(0)
  })

  it("returns undefined when width is 0", () => {
    expect(computeLabelInterval(10, 0)).toBeUndefined()
  })

  it("returns undefined when width is undefined", () => {
    expect(computeLabelInterval(10, undefined)).toBeUndefined()
  })

  it("returns undefined for a single category", () => {
    expect(computeLabelInterval(1, 100)).toBeUndefined()
  })

  it("returns undefined when exactly at the threshold", () => {
    // 10 categories in 600px = 60px each, exactly MIN_LABEL_WIDTH
    expect(computeLabelInterval(10, 600)).toBeUndefined()
  })

  it("returns interval when just below the threshold", () => {
    // 11 categories in 600px ≈ 54.5px each, below MIN_LABEL_WIDTH
    const interval = computeLabelInterval(11, 600)
    expect(interval).toBeDefined()
    expect(interval).toBeGreaterThan(0)
  })
})

describe("computeCategoryAxisLayout", () => {
  it("returns undefined when there's no width", () => {
    expect(computeCategoryAxisLayout(10, undefined, false)).toBeUndefined()
    expect(computeCategoryAxisLayout(10, 0, false)).toBeUndefined()
  })

  it("returns undefined for a single category", () => {
    expect(computeCategoryAxisLayout(1, 600, false)).toBeUndefined()
  })

  it("shows every label with truncation when there is enough room (centered)", () => {
    // 10 cats in 600px → ~60px slot - 8 gap = 52px label width
    const layout = computeCategoryAxisLayout(10, 600, false)
    expect(layout).toBeDefined()
    expect(layout!.interval).toBe(0)
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })

  it("caps the label width below the step when edge-aligned (line chart)", () => {
    // 10 cats in 600px, edgeAligned: step = 600/9 ≈ 66.67px
    // labelWidth ≈ 66.67 * 0.65 ≈ 43px (Math.floor → 43)
    const layout = computeCategoryAxisLayout(10, 600, true)
    expect(layout).toBeDefined()
    expect(layout!.interval).toBe(0)
    expect(layout!.labelWidth).toBeLessThan(600 / 9)
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })

  it("falls back to skipping labels when even truncated labels don't fit", () => {
    // 100 categories in 200px → way too crowded
    const layout = computeCategoryAxisLayout(100, 200, false)
    expect(layout).toBeDefined()
    expect(layout!.interval).toBeGreaterThan(0)
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })

  it("never returns a label width below the readable minimum", () => {
    const layout = computeCategoryAxisLayout(50, 100, true)
    expect(layout).toBeDefined()
    expect(layout!.labelWidth).toBeGreaterThanOrEqual(24)
  })
})
