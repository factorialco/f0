import { panelWidths } from "@factorialco/f0-core"
import { describe, expect, it } from "vitest"

import {
  clampPanelWidth,
  panelBoundsFor,
  resolvePanelWidth,
  SPLIT_MIN_FRAME,
} from "../panelWidth"

const {
  min: MIN,
  max: MAX,
  default: DEFAULT,
  mainMin: MAIN_MIN,
  mainHardMin: MAIN_HARD_MIN,
  splitMinFrame: SPLIT_MIN,
} = panelWidths

describe("panelBoundsFor", () => {
  it("leaves a roomy frame alone", () => {
    // On the screens most people work on, the panel keeps the range it always
    // had.
    expect(panelBoundsFor(1920).autoMax).toBe(MAX)
    expect(panelBoundsFor(1440).autoMax).toBe(MAX)
    expect(panelBoundsFor(MAX + MAIN_MIN).autoMax).toBe(MAX)
  })

  it("serves the content first when nobody has said otherwise", () => {
    // A table with filters degrades far worse in a narrow column than a chat
    // does, so the content is the one that gets its room reserved.
    expect(panelBoundsFor(1280).autoMax).toBe(1280 - MAIN_MIN)
    expect(panelBoundsFor(1024).autoMax).toBe(1024 - MAIN_MIN)
    for (const frame of [1352, 1280, 1100, 1024, 940]) {
      expect(frame - panelBoundsFor(frame).autoMax).toBeGreaterThanOrEqual(
        MAIN_MIN
      )
    }
  })

  it("drops the panel to its minimum rather than squeeze the content", () => {
    expect(panelBoundsFor(900).autoMax).toBe(MIN)
    expect(panelBoundsFor(800).autoMax).toBe(MIN)
    expect(panelBoundsFor(SPLIT_MIN_FRAME).autoMax).toBe(MIN)
  })

  it("still leaves a drag some room to go past the default", () => {
    // The content's floor is what the layout picks, not a cage. Someone who
    // wants a wider chat on a narrow window can have one.
    for (const frame of [756, 800, 900, 1000]) {
      expect(panelBoundsFor(frame).max).toBeGreaterThan(
        panelBoundsFor(frame).autoMax
      )
    }
    expect(panelBoundsFor(756).max).toBe(756 - MAIN_HARD_MIN)
  })

  it("never lets a drag cross the content's hard floor", () => {
    for (let frame = SPLIT_MIN_FRAME; frame <= 2000; frame += 4) {
      const { max } = panelBoundsFor(frame)
      expect(frame - max).toBeGreaterThanOrEqual(
        Math.min(MAIN_HARD_MIN, frame - MIN)
      )
    }
  })

  it("meets its own tiers without a step", () => {
    // Where the pinned tier hands over to the content floor, and where the
    // content floor hands over to the cap.
    expect(panelBoundsFor(MAIN_MIN + MIN).autoMax).toBe(MIN)
    expect(panelBoundsFor(MAX + MAIN_MIN).autoMax).toBe(MAX)
  })

  it("stops splitting below its own floor", () => {
    expect(SPLIT_MIN_FRAME).toBe(SPLIT_MIN)
    expect(panelBoundsFor(SPLIT_MIN_FRAME - 1).shouldOverlay).toBe(true)
    expect(panelBoundsFor(SPLIT_MIN_FRAME).shouldOverlay).toBe(false)
    expect(panelBoundsFor(500).shouldOverlay).toBe(true)
  })

  it("keeps that floor independent of the content's floor", () => {
    // These answer different questions. While the floor was derived as
    // `mainMin + min`, giving the content more room on a laptop also stopped a
    // half-screen window from splitting at all.
    expect(SPLIT_MIN_FRAME).toBeLessThan(MAIN_MIN + MIN)
  })

  it("never renders the panel below its minimum", () => {
    // The floor the composer's non-portalled popovers depend on.
    for (let frame = SPLIT_MIN_FRAME; frame <= 2400; frame += 4) {
      expect(panelBoundsFor(frame).max).toBeGreaterThanOrEqual(MIN)
      expect(panelBoundsFor(frame).autoMax).toBeGreaterThanOrEqual(MIN)
    }
  })

  it("widens monotonically as the frame grows", () => {
    let previous = 0
    for (let frame = SPLIT_MIN_FRAME; frame <= 2400; frame += 4) {
      const { autoMax } = panelBoundsFor(frame)
      expect(autoMax).toBeGreaterThanOrEqual(previous)
      previous = autoMax
    }
  })

  it("falls back to the absolute range when nothing is measured yet", () => {
    // A zero reading is "no measurement", not "no room".
    expect(panelBoundsFor(0)).toEqual({
      min: MIN,
      max: MAX,
      autoMax: MAX,
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

describe("resolvePanelWidth", () => {
  it("puts the panel at its minimum on a laptop window at half the screen", () => {
    // 1512 is the default logical width of a 14" MacBook Pro. Nobody has
    // dragged anything, so the content is served first: 456, not the 378 an
    // even split would have left it.
    const half = 1512 / 2
    expect(resolvePanelWidth(DEFAULT, half)).toBe(MIN)
    expect(half - resolvePanelWidth(DEFAULT, half)).toBe(456)
  })

  it("honours a width the user actually chose", () => {
    // Same frame, but this preference was dragged into place.
    const half = 1512 / 2
    expect(resolvePanelWidth(420, half)).toBe(356)
    expect(resolvePanelWidth(340, half)).toBe(340)
  })

  it("holds a chosen width to the content's hard floor", () => {
    // The 712 someone set on a big monitor, opened on a narrow window.
    expect(resolvePanelWidth(MAX, 900)).toBe(900 - MAIN_HARD_MIN)
    expect(resolvePanelWidth(MAX, 1200)).toBe(MAX)
  })

  it("leaves an untouched preference alone when the frame has room", () => {
    expect(resolvePanelWidth(DEFAULT, 1440)).toBe(DEFAULT)
    expect(resolvePanelWidth(DEFAULT, 1920)).toBe(DEFAULT)
  })

  it("never returns less than the minimum", () => {
    for (const frame of [700, 756, 900, 1200]) {
      expect(resolvePanelWidth(100, frame)).toBe(MIN)
    }
  })
})

describe("clampPanelWidth", () => {
  it("bounds a drag by what the frame can give", () => {
    expect(clampPanelWidth(MAX, 900)).toBe(900 - MAIN_HARD_MIN)
    expect(clampPanelWidth(MAX, 1440)).toBe(MAX)
  })

  it("does not push a narrow drag wider", () => {
    expect(clampPanelWidth(MIN, 1920)).toBe(MIN)
  })
})
