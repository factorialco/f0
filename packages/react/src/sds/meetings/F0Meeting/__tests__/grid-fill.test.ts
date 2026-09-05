import { describe, expect, it } from "vitest"

import {
  DEFAULT_ASPECT_RATIO,
  TILE_ASPECT_MAX,
  TILE_ASPECT_MIN,
} from "../layout/constants"
import { layoutGrid, solveGrid } from "../layout/grid-solver"

const GAP = 16

const solve = (
  count: number,
  box: { width: number; height: number },
  minTileWidth = 80
) =>
  solveGrid({
    count,
    width: box.width,
    height: box.height,
    gap: GAP,
    minAspect: TILE_ASPECT_MIN,
    maxAspect: TILE_ASPECT_MAX,
    preferredAspect: DEFAULT_ASPECT_RATIO,
    minTileWidth,
  })

/** How much of the container the tiles actually cover. */
const coverage = (count: number, box: { width: number; height: number }) => {
  const solution = solve(count, box)
  const area = layoutGrid(solution, box, GAP).reduce(
    (total, rect) => total + rect.width * rect.height,
    0
  )
  // Gaps are not dead space — they are the design. Compare against the area the
  // tiles could possibly occupy once the gaps are removed.
  const gapWidth = GAP * (solution.cols - 1)
  const gapHeight = GAP * (solution.rows - 1)
  const usable = (box.width - gapWidth) * (box.height - gapHeight)
  return area / usable
}

describe("the grid leaves no hole", () => {
  const WIDE = { width: 960, height: 720 }

  // The counts whose last row is short — where the old solver centred the
  // orphans at the full tile size and left an empty cell beside them.
  it.each([5, 7, 11])("covers the container with %i people", (count) => {
    expect(coverage(count, WIDE)).toBeGreaterThan(0.98)
  })

  it("widens the short row instead of leaving a gap beside it", () => {
    const solution = solve(3, WIDE)
    expect(solution.rowSpecs.map((row) => row.count)).toEqual([2, 1])
    const [pair, single] = solution.rowSpecs
    expect(single?.tileWidth).toBeGreaterThan(pair?.tileWidth ?? 0)
  })

  it("stops widening at the aspect limit rather than cropping a face", () => {
    // Three people is the case where filling completely would need a 2.7:1
    // tile. The lone tile widens as far as the clamp allows and the remainder
    // is centred — the one place the grid deliberately leaves space, because
    // the alternative is `object-cover` taking the sides off someone's head.
    const [, single] = solve(3, WIDE).rowSpecs
    expect(single).toBeDefined()
    if (!single) return
    expect(single.tileWidth / single.tileHeight).toBeCloseTo(TILE_ASPECT_MAX, 5)
    expect(single.tileWidth).toBeLessThan(WIDE.width)
  })

  it("spreads people evenly rather than filling early rows first", () => {
    // 5 over two rows is 3 + 2, never 3 + 3 with a hole.
    expect(solve(5, WIDE).rowSpecs.map((row) => row.count)).toEqual([3, 2])
  })

  it("keeps every row inside the container", () => {
    for (let count = 1; count <= 24; count++) {
      const solution = solve(count, WIDE)
      for (const rect of layoutGrid(solution, WIDE, GAP)) {
        expect(rect.x).toBeGreaterThanOrEqual(-0.001)
        expect(rect.y).toBeGreaterThanOrEqual(-0.001)
        expect(rect.x + rect.width).toBeLessThanOrEqual(WIDE.width + 0.001)
        expect(rect.y + rect.height).toBeLessThanOrEqual(WIDE.height + 0.001)
      }
    }
  })

  it("never lets a tile leave the permitted aspect range", () => {
    // The clamp is the one thing allowed to leave space: without it a lone tile
    // on a wide row becomes a slit and `object-cover` takes the face with it.
    for (const box of [WIDE, { width: 420, height: 900 }]) {
      for (let count = 1; count <= 12; count++) {
        for (const row of solve(count, box).rowSpecs) {
          const aspect = row.tileWidth / row.tileHeight
          expect(aspect).toBeGreaterThanOrEqual(TILE_ASPECT_MIN - 0.001)
          expect(aspect).toBeLessThanOrEqual(TILE_ASPECT_MAX + 0.001)
        }
      }
    }
  })
})

describe("two people", () => {
  it("sits them side by side in a wide room, each filling its half", () => {
    const solution = solve(2, { width: 960, height: 720 })
    expect(solution.rows).toBe(1)
    expect(solution.cols).toBe(2)
    expect(solution.tileHeight).toBeCloseTo(720, 5)
  })

  it("stacks them in a side panel instead of shrinking them", () => {
    // The case the old `SPOTLIGHT_ASPECT` constant forced into a spotlight: a
    // 450px panel stacks two people perfectly well.
    const panel = { width: 426, height: 686 }
    const solution = solve(2, panel)
    expect(solution.rows).toBe(2)
    expect(solution.cols).toBe(1)
    expect(coverage(2, panel)).toBeGreaterThan(0.98)
  })
})
