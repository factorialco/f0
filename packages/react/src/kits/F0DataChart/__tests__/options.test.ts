import { describe, expect, it } from "vitest"

import { computeLabelInterval } from "../utils/options"

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
