import { describe, expect, it } from "vitest"

import {
  SLIDE_OMEGA,
  clampNoOvershootVelocity,
  createRowHeightEstimator,
} from "../utils/scroll-tuning"

describe("clampNoOvershootVelocity", () => {
  it("passes velocities within the no-overshoot bound through", () => {
    // offset 100px → bound ≈ 1789 px/s
    expect(clampNoOvershootVelocity(500, 100)).toBe(500)
    expect(clampNoOvershootVelocity(-500, 100)).toBe(-500)
  })

  it("clamps a velocity that would overshoot a small remaining offset", () => {
    // The send/receive correction case: offset shrank to 12px mid-flight while
    // the spring still carries ~400px/s — unclamped it sails past the bottom.
    const clamped = clampNoOvershootVelocity(400, 12)
    expect(clamped).toBe(12 * SLIDE_OMEGA)
    expect(clamped).toBeLessThan(400)
  })

  it("clamps symmetrically for negative velocities", () => {
    expect(clampNoOvershootVelocity(-400, 12)).toBe(-12 * SLIDE_OMEGA)
  })

  it("forces zero velocity when the offset is zero", () => {
    expect(clampNoOvershootVelocity(300, 0)).toBe(0)
  })
})

describe("createRowHeightEstimator", () => {
  it("returns the fallback until enough samples exist", () => {
    const estimator = createRowHeightEstimator(48, { minSamples: 4 })
    estimator.record(40)
    estimator.record(44)
    estimator.record(41)
    expect(estimator.estimate()).toBe(48)
  })

  it("returns the median of the recorded measurements", () => {
    const estimator = createRowHeightEstimator(48, { minSamples: 4 })
    ;[40, 44, 41, 300, 43].forEach((h) => estimator.record(h))
    // Median of [40, 41, 43, 44, 300] — the outlier (an image row) doesn't
    // drag the estimate like a mean would.
    expect(estimator.estimate()).toBe(43)
  })

  it("slides its window so old heights age out", () => {
    const estimator = createRowHeightEstimator(48, {
      minSamples: 2,
      windowSize: 4,
    })
    ;[100, 100, 100, 100].forEach((h) => estimator.record(h))
    expect(estimator.estimate()).toBe(100)
    ;[40, 40, 40, 40].forEach((h) => estimator.record(h))
    expect(estimator.estimate()).toBe(40)
  })

  it("ignores junk measurements", () => {
    const estimator = createRowHeightEstimator(48, { minSamples: 1 })
    estimator.record(0)
    estimator.record(-5)
    estimator.record(Number.NaN)
    expect(estimator.estimate()).toBe(48)
    estimator.record(42)
    expect(estimator.estimate()).toBe(42)
  })
})
