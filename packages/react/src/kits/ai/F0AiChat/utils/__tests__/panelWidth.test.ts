import { panelWidths } from "@factorialco/f0-core"
import { describe, expect, it } from "vitest"

import { clampPanelWidth, panelBoundsFor, SPLIT_MIN_FRAME } from "../panelWidth"

const { min: MIN, max: MAX, mainMin: MAIN_MIN } = panelWidths

describe("panelBoundsFor", () => {
  it("leaves a roomy frame alone", () => {
    // The whole point of the change: on the screens most people work on, the
    // panel keeps the range it has always had.
    expect(panelBoundsFor(1920).max).toBe(MAX)
    expect(panelBoundsFor(1440).max).toBe(MAX)
    expect(panelBoundsFor(1280).max).toBe(MAX)
  })

  it("gives way to the main content's floor before touching its own", () => {
    // 1200 - 560: the panel yields the 72px rather than let the content dip
    // under its minimum.
    expect(panelBoundsFor(1200).max).toBe(640)
    expect(panelBoundsFor(1150).max).toBe(590)
  })

  it("splits the frame evenly once neither minimum fits", () => {
    expect(panelBoundsFor(1000).max).toBe(500)
    expect(panelBoundsFor(900).max).toBe(450)
    expect(panelBoundsFor(SPLIT_MIN_FRAME).max).toBe(SPLIT_MIN_FRAME / 2)
  })

  it("stops splitting below the frame that seats both minimums", () => {
    expect(SPLIT_MIN_FRAME).toBe(MAIN_MIN + MIN)
    expect(panelBoundsFor(SPLIT_MIN_FRAME - 1).shouldOverlay).toBe(true)
    expect(panelBoundsFor(SPLIT_MIN_FRAME).shouldOverlay).toBe(false)
    expect(panelBoundsFor(640).shouldOverlay).toBe(true)
  })

  it("meets its own tiers without a step", () => {
    // Where the even split hands over to the content floor, and where the
    // content floor hands over to the cap. A discontinuity here would make the
    // seam jump as the window crosses the boundary.
    expect(panelBoundsFor(2 * MAIN_MIN).max).toBe(MAIN_MIN)
    expect(panelBoundsFor(MAX + MAIN_MIN).max).toBe(MAX)
  })

  it("never renders the panel below its minimum", () => {
    // The floor the composer's non-portalled popovers depend on. Every frame
    // that still splits must respect it.
    for (let frame = SPLIT_MIN_FRAME; frame <= 2400; frame += 4) {
      expect(panelBoundsFor(frame).max).toBeGreaterThanOrEqual(MIN)
    }
  })

  it("widens monotonically as the frame grows", () => {
    let previous = 0
    for (let frame = SPLIT_MIN_FRAME; frame <= 2400; frame += 4) {
      const { max } = panelBoundsFor(frame)
      expect(max).toBeGreaterThanOrEqual(previous)
      previous = max
    }
  })

  it("falls back to the absolute range when nothing is measured yet", () => {
    // A zero reading is "no measurement", not "no room" — collapsing on it
    // would flash a squashed panel on first paint and inside hidden containers.
    expect(panelBoundsFor(0)).toEqual({
      min: MIN,
      max: MAX,
      shouldOverlay: false,
    })
  })

  it("survives degenerate measurements", () => {
    for (const frame of [-100, Number.NaN, Number.POSITIVE_INFINITY]) {
      const { min, max } = panelBoundsFor(frame)
      expect(max).toBeGreaterThanOrEqual(min)
      expect(Number.isFinite(max)).toBe(true)
    }
  })
})

describe("clampPanelWidth", () => {
  it("holds a stored preference inside what the frame can give", () => {
    // The 712 someone chose on a big monitor, opened on a narrower window.
    expect(clampPanelWidth(MAX, 1000)).toBe(500)
    expect(clampPanelWidth(MAX, 1200)).toBe(640)
  })

  it("returns the preference untouched when it fits", () => {
    expect(clampPanelWidth(MAX, 1440)).toBe(MAX)
    expect(clampPanelWidth(420, 1440)).toBe(420)
  })

  it("does not push a narrow preference wider", () => {
    expect(clampPanelWidth(MIN, 1920)).toBe(MIN)
  })
})
