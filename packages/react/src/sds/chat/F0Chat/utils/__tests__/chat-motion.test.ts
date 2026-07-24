import { describe, expect, it } from "vitest"

import {
  EASE_OUT_SWIFT,
  entryStaggerDelay,
  layoutTransition,
  microEnterTransition,
  microExitTransition,
  rowEntryTransition,
} from "../chat-motion"

describe("entryStaggerDelay", () => {
  it("staggers the first items of a batch by 35ms each", () => {
    expect(entryStaggerDelay(0)).toBe(0)
    expect(entryStaggerDelay(1)).toBeCloseTo(0.035)
    expect(entryStaggerDelay(3)).toBeCloseTo(0.105)
  })

  it("caps the delay so big bursts never leave blank rows waiting", () => {
    expect(entryStaggerDelay(6)).toBeCloseTo(0.21)
    expect(entryStaggerDelay(30)).toBeCloseTo(0.21)
    expect(entryStaggerDelay(500)).toBeCloseTo(0.21)
  })
})

describe("chat-motion vocabulary", () => {
  it("uses a decelerate curve with no overshoot (all control points in [0,1])", () => {
    for (const value of EASE_OUT_SWIFT) {
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThanOrEqual(1)
    }
  })

  it("row entries are fast tweens carrying the capped batch stagger", () => {
    expect(rowEntryTransition(0)).toMatchObject({ duration: 0.14, delay: 0 })
    expect(rowEntryTransition(3).delay).toBeCloseTo(0.105)
    // Cap: a 30-message burst never waits past ~a fifth of a second.
    expect(rowEntryTransition(30).delay).toBeCloseTo(0.21)
  })

  it("micro presences stay in the discreet 120-160ms band", () => {
    expect(microEnterTransition.duration).toBe(0.16)
    expect(microExitTransition.duration).toBe(0.12)
  })

  it("layout shifts carry an explicit tween (framer's default bounces)", () => {
    expect(layoutTransition).toMatchObject({
      duration: 0.15,
      ease: EASE_OUT_SWIFT,
    })
  })
})
