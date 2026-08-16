import { describe, expect, it } from "vitest"

import {
  DEFAULT_ASPECT_RATIO,
  TILE_ASPECT_MAX,
  TILE_ASPECT_MIN,
  gapFor,
  minTileWidthFor,
} from "../layout/constants"
import { layoutGrid, solveGrid } from "../layout/grid-solver"
import { solveSpotlight } from "../layout/spotlight-solver"

/** Mirrors what `MeetingGrid` does: one solve, the chip takes the last cell. */
const plan = (count: number, width: number, height: number) => {
  const gap = gapFor(width)
  const box = { width: width - gap * 2, height: height - gap * 2 }
  const solution = solveGrid({
    count,
    width: box.width,
    height: box.height,
    gap,
    minAspect: TILE_ASPECT_MIN,
    maxAspect: TILE_ASPECT_MAX,
    preferredAspect: DEFAULT_ASPECT_RATIO,
    minTileWidth: minTileWidthFor(width),
  })
  const capacity = solution.visibleCount
  const hasOverflow = capacity < count
  return {
    capacity,
    hasOverflow,
    visible: hasOverflow ? capacity - 1 : capacity,
    cells: layoutGrid(solution, box, gap).length,
    tileWidth: solution.tileWidth,
    minTileWidth: minTileWidthFor(width),
  }
}

/**
 * A container-relative minimum lands on the same comfortable page size across
 * every desktop-ish window, and steps down only where there genuinely is no
 * room. That consistency is the point: the room should not feel like a
 * different product depending on how wide the window happens to be.
 */
const CONTAINERS = [
  { name: "fullscreen", width: 1440, height: 760, expected: 16 },
  { name: "window 900", width: 900, height: 600, expected: 16 },
  { name: "window 560", width: 560, height: 360, expected: 16 },
  { name: "floating 360", width: 360, height: 224, expected: 9 },
]

describe("grid capacity", () => {
  it.each(CONTAINERS)(
    "$name shows $expected people before overflowing",
    ({ width, height, expected }) => {
      expect(plan(expected, width, height).hasOverflow).toBe(false)
      expect(plan(expected + 1, width, height).hasOverflow).toBe(true)
    }
  )

  it.each(CONTAINERS)(
    "$name never shows fewer than capacity minus the chip",
    ({ width, height }) => {
      // The regression this locks down: the old two-pass solve re-solved to
      // "make room" for the chip and often came back with the same cell count,
      // silently dropping a person who did fit.
      for (const count of [8, 12, 16, 20, 25, 30, 40]) {
        const { capacity, visible, hasOverflow } = plan(count, width, height)
        expect(visible).toBe(hasOverflow ? capacity - 1 : capacity)
        expect(visible).toBeGreaterThan(0)
      }
    }
  )

  it.each(CONTAINERS)(
    "$name always has exactly one cell for the chip",
    ({ width, height }) => {
      const { visible, cells, hasOverflow } = plan(40, width, height)
      expect(hasOverflow).toBe(true)
      expect(cells).toBe(visible + 1)
    }
  )

  it("keeps every tile at or above the usable minimum", () => {
    for (const { width, height } of CONTAINERS) {
      for (const count of [2, 6, 12, 30]) {
        const { tileWidth, minTileWidth } = plan(count, width, height)
        expect(tileWidth).toBeGreaterThanOrEqual(minTileWidth)
      }
    }
  })

  it("keeps the spotlight's chip inside the container", () => {
    for (const { width, height } of CONTAINERS) {
      const gap = gapFor(width)
      const box = { width: width - gap * 2, height: height - gap * 2 }
      const solution = solveSpotlight({
        stripCount: 30,
        width: box.width,
        height: box.height,
        gap,
        stripAspect: DEFAULT_ASPECT_RATIO,
      })
      // The chip takes the last thumbnail's slot rather than being appended
      // past the edge, which is where it used to land.
      const slot = solution.strip[Math.max(0, solution.strip.length - 1)]
      if (!slot) continue
      expect(slot.x + slot.width).toBeLessThanOrEqual(box.width + 0.001)
      expect(slot.y + slot.height).toBeLessThanOrEqual(box.height + 0.001)
    }
  })

  /**
   * Mirrors how `MeetingGrid` splits the strip: the chip takes a thumbnail's
   * slot, so it only ever stands for two people or more.
   */
  const spotlightPlan = (restCount: number, width: number, height: number) => {
    const gap = gapFor(width)
    const box = { width: width - gap * 2, height: height - gap * 2 }
    const solution = solveSpotlight({
      stripCount: restCount,
      width: box.width,
      height: box.height,
      gap,
      stripAspect: DEFAULT_ASPECT_RATIO,
    })
    const hasOverflow = solution.stripOverflow > 0
    const stripSlots = hasOverflow
      ? Math.max(0, solution.strip.length - 1)
      : solution.strip.length
    return {
      chipStandsFor: hasOverflow ? restCount - stripSlots : 0,
      // With no strip at all there is no slot to give back, so the room falls
      // out of spotlight entirely rather than showing a "+1".
      fallsBackToGrid: solution.strip.length === 0 && restCount === 1,
    }
  }

  it("never shows a chip that stands for a single person", () => {
    for (const { width, height } of CONTAINERS) {
      for (let rest = 1; rest <= 30; rest++) {
        const { chipStandsFor, fallsBackToGrid } = spotlightPlan(
          rest,
          width,
          height
        )
        if (fallsBackToGrid) continue
        // A "+1" costs the same slot as the tile it hides and says less.
        expect(chipStandsFor).not.toBe(1)
      }
    }
  })

  it("gives a floating window a strip instead of hiding the only other person", () => {
    const { chipStandsFor, fallsBackToGrid } = spotlightPlan(1, 360, 224)
    expect(fallsBackToGrid).toBe(false)
    expect(chipStandsFor).toBe(0)
  })

  it("scales the minimum with the container instead of a fixed floor", () => {
    // A fixed floor either fills a fullscreen room with thumbnails or leaves a
    // small window able to show two people; neither is acceptable.
    expect(minTileWidthFor(1440)).toBeGreaterThan(minTileWidthFor(560))
    expect(minTileWidthFor(360)).toBeGreaterThanOrEqual(88)
    expect(minTileWidthFor(4000)).toBeLessThanOrEqual(320)
  })
})
