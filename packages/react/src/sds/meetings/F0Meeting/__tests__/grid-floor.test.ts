import { describe, expect, it } from "vitest"

import {
  DEFAULT_ASPECT_RATIO,
  TILE_ASPECT_MAX,
  TILE_ASPECT_MIN,
  minTileHeightFor,
  minTileWidthFor,
} from "../layout/constants"
import { solveGrid } from "../layout/grid-solver"

const solve = (
  count: number,
  box: { width: number; height: number },
  overrides: { minTileWidth?: number; minTileHeight?: number } = {}
) =>
  solveGrid({
    count,
    width: box.width,
    height: box.height,
    gap: 16,
    minAspect: TILE_ASPECT_MIN,
    maxAspect: TILE_ASPECT_MAX,
    preferredAspect: DEFAULT_ASPECT_RATIO,
    minTileWidth: minTileWidthFor(box.width),
    minTileHeight: minTileHeightFor(box.height),
    ...overrides,
  })

/** The shape the One switch resizes a call to on a wide display. */
const WIDE = { width: 1912, height: 852 }
const FULLSCREEN = { width: 1440, height: 780 }
/** Tall and narrow: the shape that exposed a width-only floor. */
const PANEL = { width: 440, height: 700 }

describe("the minimum lives inside the search", () => {
  it("seats sixteen in a 4x4 instead of dropping two", () => {
    // The bug: 6+5+5 wins on area at 305px wide, fails the 320px floor, and the
    // solver took the whole count down with it — so the room showed fourteen
    // people and a "+2" while a clean 4x4 at 358px was available all along.
    const solution = solve(16, WIDE)

    expect(solution.visibleCount).toBe(16)
    expect(solution.tileWidth).toBeGreaterThanOrEqual(
      minTileWidthFor(WIDE.width)
    )
  })

  it("never seats fewer people as the room grows", () => {
    // Capacity used to be non-monotonic: twenty people all fitted in a room
    // that could not seat sixteen. Whatever else is arguable, that cannot be
    // right — and it is the kind of thing nobody reports as a layout bug
    // because it reads as the room being haunted.
    for (const box of [WIDE, FULLSCREEN, PANEL]) {
      let previous = 0
      for (let count = 1; count <= 40; count++) {
        const { visibleCount } = solve(count, box)
        expect(visibleCount).toBeGreaterThanOrEqual(previous)
        previous = visibleCount
      }
    }
  })

  it("still overflows when no split of that many clears the floor", () => {
    const { visibleCount } = solve(40, FULLSCREEN)
    expect(visibleCount).toBeLessThan(40)
    expect(visibleCount).toBeGreaterThan(1)
  })
})

describe("the floor has a height too", () => {
  it("stops a tall panel stacking rows of slivers", () => {
    // 45 people in a 440x700 panel used to be 45 tiles of 97x55: the floor was
    // only ever a WIDTH, and a 16:9 tile 97 across IS 55 tall, so every one of
    // them passed.
    const solution = solve(45, PANEL)

    expect(solution.tileHeight).toBeGreaterThanOrEqual(
      minTileHeightFor(PANEL.height)
    )
    expect(solution.visibleCount).toBeLessThan(45)
  })

  it("leaves the documented landscape capacities alone", () => {
    // The height floor is a fix for tall containers; it must not quietly
    // re-tune the rooms `grid-capacity` pins down.
    for (const [box, expected] of [
      [{ width: 1440, height: 760 }, 16],
      [{ width: 900, height: 600 }, 16],
      [{ width: 560, height: 360 }, 16],
      [{ width: 360, height: 224 }, 9],
    ] as const) {
      expect(solve(expected, box).visibleCount).toBe(expected)
    }
  })

  it("does nothing when the caller passes no height floor", () => {
    const withFloor = solve(45, PANEL)
    const without = solve(45, PANEL, { minTileHeight: 0 })
    expect(without.visibleCount).toBeGreaterThan(withFloor.visibleCount)
  })

  it("scales with the container, like the width floor", () => {
    expect(minTileHeightFor(780)).toBeGreaterThan(minTileHeightFor(224))
    expect(minTileHeightFor(224)).toBeGreaterThanOrEqual(48)
    expect(minTileHeightFor(4000)).toBeLessThanOrEqual(180)
  })
})
