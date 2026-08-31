import { describe, expect, it } from "vitest"

import { albumCells, singlePhotoRatio } from "../album-layout"

const photo = (width?: number, height?: number) => ({ width, height })

describe("singlePhotoRatio", () => {
  it("keeps a photo's own proportions when they're reasonable", () => {
    expect(singlePhotoRatio(800, 600)).toBe(0.75)
    expect(singlePhotoRatio(900, 1200)).toBeCloseTo(1.3333, 4)
  })

  it("clamps a tower so it can't push the conversation off screen", () => {
    expect(singlePhotoRatio(100, 1000)).toBe(1.4)
  })

  it("clamps a panorama so it doesn't collapse to a strip", () => {
    expect(singlePhotoRatio(1000, 100)).toBe(0.6)
  })

  it("falls back to a square without intrinsic dimensions", () => {
    expect(singlePhotoRatio()).toBe(1)
    expect(singlePhotoRatio(800, undefined)).toBe(1)
  })
})

describe("albumCells", () => {
  it("gives a lone photo the full width at its own ratio", () => {
    const [cell] = albumCells([photo(800, 600)])
    expect(cell).toEqual({
      index: 0,
      span: 2,
      aspectRatio: 1 / 0.75,
      hiddenCount: 0,
    })
  })

  it("lays a pair out as tall halves, not squares", () => {
    const cells = albumCells([photo(1400, 900), photo(900, 1400)])
    expect(cells).toHaveLength(2)
    for (const cell of cells) {
      expect(cell.span).toBe(1)
      expect(cell.aspectRatio).toBeCloseTo(1 / 1.3, 6)
    }
  })

  it("puts a hero above two squares for three", () => {
    const cells = albumCells([photo(), photo(), photo()])
    expect(cells.map((cell) => cell.span)).toEqual([2, 1, 1])
    expect(cells[0]?.aspectRatio).toBeCloseTo(1 / 0.6, 6)
    expect(cells[1]?.aspectRatio).toBe(1)
    expect(cells[2]?.aspectRatio).toBe(1)
  })

  it("fills a 2x2 of squares for exactly four, with no overflow badge", () => {
    const cells = albumCells([photo(), photo(), photo(), photo()])
    expect(cells).toHaveLength(4)
    expect(
      cells.every((cell) => cell.span === 1 && cell.aspectRatio === 1)
    ).toBe(true)
    expect(cells.every((cell) => cell.hiddenCount === 0)).toBe(true)
  })

  it("folds everything past the fourth into a +N on the last cell", () => {
    const cells = albumCells(Array.from({ length: 7 }, () => photo()))
    expect(cells).toHaveLength(4)
    expect(cells.map((cell) => cell.hiddenCount)).toEqual([0, 0, 0, 3])
    // The badge cell still opens the lightbox at its own index, not the hidden
    // ones — the viewer pages from there.
    expect(cells[3]?.index).toBe(3)
  })

  it("ignores the source ratio in multi-photo mosaics", () => {
    const cells = albumCells([photo(100, 2000), photo(2000, 100), photo()])
    expect(cells[1]?.aspectRatio).toBe(1)
    expect(cells[2]?.aspectRatio).toBe(1)
  })

  it("renders nothing for an empty album", () => {
    expect(albumCells([])).toEqual([])
  })
})
