import { describe, expect, it } from "vitest"

import { GAP_REGULAR, gapForTile, radiusForTile } from "../layout/constants"

describe("gap and radius follow the tile", () => {
  it("gives a small tile a small gutter and a small radius", () => {
    // The bug this fixes: keyed off the container, a 90px tile in a wide window
    // got the same 16px gutter and 12px radius as a 600px one.
    expect(gapForTile(90)).toBeLessThan(gapForTile(600))
    expect(radiusForTile(90)).toBeLessThan(radiusForTile(600))
  })

  it("grows with the tile, monotonically", () => {
    const widths = [80, 120, 200, 320, 480, 640]
    const gaps = widths.map(gapForTile)
    const radii = widths.map(radiusForTile)

    gaps.forEach((gap, index) => {
      if (index === 0) return
      expect(gap).toBeGreaterThanOrEqual(gaps[index - 1] as number)
    })
    radii.forEach((radius, index) => {
      if (index === 0) return
      expect(radius).toBeGreaterThanOrEqual(radii[index - 1] as number)
    })
  })

  it("never eats the corners of a tiny tile", () => {
    // At 60px wide, a 12px radius takes a fifth of the tile.
    expect(radiusForTile(60)).toBeLessThanOrEqual(6)
    expect(gapForTile(60)).toBeLessThanOrEqual(4)
  })

  it("stops growing, so a huge tile is not a lozenge", () => {
    expect(gapForTile(4000)).toBe(GAP_REGULAR)
    expect(radiusForTile(4000)).toBe(16)
  })

  it("keeps the same proportions at every size", () => {
    // Which is the whole point: a room of four and a room of thirty should read
    // as the same design at different scales.
    const ratio = (width: number) => gapForTile(width) / width
    expect(ratio(240)).toBeCloseTo(ratio(360), 2)
  })
})
