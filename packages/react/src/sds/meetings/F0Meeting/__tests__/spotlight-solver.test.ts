import { describe, expect, it } from "vitest"

import {
  STRIP_MAX_TILES,
  TILE_ASPECT_MAX,
  TILE_ASPECT_MIN,
} from "../layout/constants"
import { solveSpotlight } from "../layout/spotlight-solver"

const RANGE = { min: TILE_ASPECT_MIN, max: TILE_ASPECT_MAX }

/** A side panel: the shape that made the fixed ratio look worst. */
const PANEL = { width: 344, height: 900 }

const solve = (input: Partial<Parameters<typeof solveSpotlight>[0]> = {}) =>
  solveSpotlight({
    stripCount: 3,
    width: PANEL.width,
    height: PANEL.height,
    gap: 8,
    stripRange: RANGE,
    ...input,
  })

describe("solveSpotlight aspect", () => {
  it("hands a screen share the whole box, to letterbox inside its own tile", () => {
    // The black then sits exactly where the picture is missing, instead of the
    // room going dark around a correctly-sized rect.
    const { spotlight, strip } = solve()
    const stripHeight = strip[0]?.height ?? 0
    expect(spotlight.x).toBe(0)
    expect(spotlight.y).toBe(0)
    expect(spotlight.width).toBe(PANEL.width)
    expect(spotlight.height).toBeCloseTo(PANEL.height - stripHeight - 8, 5)
  })

  it("takes the shape of the box with a range, going portrait in a panel", () => {
    const { spotlight } = solve({ spotlightRange: RANGE })
    expect(spotlight.width / spotlight.height).toBeLessThan(1)
    expect(spotlight.width / spotlight.height).toBeGreaterThanOrEqual(
      TILE_ASPECT_MIN - 0.001
    )
  })

  it("still respects the range in a very wide container", () => {
    // Filling a 4:1 box would crop the top of everyone's head off.
    const { spotlight } = solve({
      width: 1600,
      height: 400,
      spotlightRange: RANGE,
    })
    expect(spotlight.width / spotlight.height).toBeLessThanOrEqual(
      TILE_ASPECT_MAX + 0.001
    )
  })

  it("never leaves the spotlight outside its box", () => {
    for (const box of [PANEL, { width: 1440, height: 760 }]) {
      for (const spotlightRange of [RANGE, undefined]) {
        const { spotlight } = solve({ ...box, spotlightRange })
        expect(spotlight.x).toBeGreaterThanOrEqual(-0.001)
        expect(spotlight.y).toBeGreaterThanOrEqual(-0.001)
        expect(spotlight.x + spotlight.width).toBeLessThanOrEqual(
          box.width + 0.001
        )
        expect(spotlight.y + spotlight.height).toBeLessThanOrEqual(
          box.height + 0.001
        )
      }
    }
  })

  it("fills as much of the box as the range allows", () => {
    // 344x900 is 0.38 — past the portrait limit, so the spotlight stops at 0.6
    // rather than stretching into a letterbox slot.
    const { spotlight } = solve({ stripCount: 0, spotlightRange: RANGE })
    expect(spotlight.width / spotlight.height).toBeCloseTo(TILE_ASPECT_MIN, 5)
    expect(spotlight.height).toBeCloseTo(PANEL.width / TILE_ASPECT_MIN, 5)
  })

  it("fills a box that is inside the range completely", () => {
    const { spotlight } = solve({
      stripCount: 0,
      width: 400,
      height: 500,
      spotlightRange: RANGE,
    })
    expect(spotlight.width).toBeCloseTo(400, 5)
    expect(spotlight.height).toBeCloseTo(500, 5)
  })
})

describe("solveSpotlight strip", () => {
  it("keeps a strip in a small floating window rather than a chip", () => {
    // The regression this locks: at 300px the strip used to be dropped whole,
    // which turned a 1:1 call into one huge tile and a "+1" standing for the
    // only other person in it.
    const { strip, stripOverflow } = solve({
      stripCount: 1,
      width: 300,
      height: 210,
      spotlightRange: RANGE,
    })
    expect(strip.length).toBe(1)
    expect(stripOverflow).toBe(0)
  })

  it("fits several thumbnails when the width allows", () => {
    const { strip } = solve({ stripCount: 4, width: 640, height: 400 })
    expect(strip.length).toBeGreaterThan(1)
  })

  it("stops at a handful however much room there is", () => {
    // A fullscreen room seated sixteen thumbnails at 76px across. The width
    // floor is not a limit at that size, and a mosaic of smudges is not what a
    // strip is for: past the cap the honest answer is the chip, which at least
    // says how many.
    const { strip, stripOverflow } = solve({
      stripCount: 44,
      width: 1440,
      height: 780,
      spotlightRange: RANGE,
    })

    expect(strip.length).toBe(STRIP_MAX_TILES)
    expect(stripOverflow).toBe(44 - STRIP_MAX_TILES)
    expect(strip[0]?.width).toBeGreaterThan(160)
  })

  it("keeps the spotlight from going vertical once the strip fits", () => {
    // A strip that gives up is what forced the spotlight to take the whole
    // height and turn into a column.
    const { spotlight } = solve({
      stripCount: 1,
      width: 300,
      height: 210,
      spotlightRange: RANGE,
    })
    expect(spotlight.width / spotlight.height).toBeGreaterThan(1)
  })
})

/**
 * A container past `STRIP_SIDE_ASPECT`, which is where the strip becomes a
 * column — and the shape the One switch resizes a call to on a wide display, so
 * this is not an exotic case.
 */
const WIDE = { width: 1912, height: 852 }

const solveSide = (stripCount: number) =>
  solveSpotlight({
    stripCount,
    width: WIDE.width,
    height: WIDE.height,
    gap: 16,
    stripRange: RANGE,
    spotlightRange: RANGE,
  })

describe("solveSpotlight side strip", () => {
  it("goes to the right edge in a wide container", () => {
    expect(solveSide(4).stripSide).toBe("right")
  })

  it("drops thumbnails rather than stacking slivers", () => {
    // The bug. The loop asked whether a thumbnail COULD be 72px wide, which a
    // 299px column can always satisfy, so twenty people got twenty slots 42px
    // tall. A thumbnail now has to fill the column to earn a slot.
    const { strip, stripOverflow } = solveSide(20)

    expect(strip.length).toBeLessThanOrEqual(STRIP_MAX_TILES)
    expect(stripOverflow).toBe(20 - strip.length)
    for (const thumb of strip) {
      expect(thumb.height).toBeGreaterThan(120)
      expect(thumb.width).toBeGreaterThan(160)
    }
  })

  it("leaves no void between the spotlight and the thumbnails", () => {
    // It reserved a 299px column, centred 74px thumbnails inside it, and left
    // 170–450px of nothing in between: space the spotlight could not have and
    // nobody was using. Tiles floating in the middle of a room is exactly what
    // that looks like.
    const { spotlight, strip } = solveSide(4)
    const thumb = strip[0]

    expect(thumb).toBeDefined()
    // Flush to the right edge…
    expect(thumb!.x + thumb!.width).toBeCloseTo(WIDE.width, 5)
    // …and the only gap in the room is the seam.
    expect(thumb!.x - (spotlight.x + spotlight.width)).toBeLessThanOrEqual(
      16 + spotlight.x + 0.001
    )
  })

  it("hands the column's leftovers to the spotlight", () => {
    const { spotlight, strip } = solveSide(4)
    const thumb = strip[0]
    expect(spotlight.width).toBeLessThanOrEqual(
      WIDE.width - (thumb?.width ?? 0) - 16 + 0.001
    )
  })

  it("keeps the column inside the container", () => {
    for (const count of [1, 2, 5, 20, 200]) {
      const { strip } = solveSide(count)
      for (const thumb of strip) {
        expect(thumb.y).toBeGreaterThanOrEqual(-0.001)
        expect(thumb.y + thumb.height).toBeLessThanOrEqual(WIDE.height + 0.001)
        expect(thumb.x + thumb.width).toBeLessThanOrEqual(WIDE.width + 0.001)
      }
    }
  })
})
