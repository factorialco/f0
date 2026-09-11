import { describe, expect, it } from "vitest"
import {
  albumCells,
  SINGLE_MAX_HEIGHT,
  SINGLE_MAX_WIDTH,
  SINGLE_MIN_HEIGHT,
  SINGLE_MIN_WIDTH,
  singlePhotoBox,
} from "../album-layout"
import { CHAT_MEDIA_WIDTH_CLASS } from "../media-layout"

const photo = (width?: number, height?: number) => ({ width, height })

describe("singlePhotoBox", () => {
  it("never grows a photo past the shared media width", () => {
    expect(CHAT_MEDIA_WIDTH_CLASS).toContain(`w-[${SINGLE_MAX_WIDTH / 16}rem]`)
  })

  it("keeps a photo's own proportions, whole", () => {
    expect(singlePhotoBox(1200, 800)).toEqual({
      width: 384,
      height: 256,
      scaleX: 1,
      scaleY: 1,
    })
    expect(singlePhotoBox(900, 1200)).toEqual({
      width: 384,
      height: 512,
      scaleX: 1,
      scaleY: 1,
    })
  })

  it("narrows a tall photo instead of cropping it once it hits the height cap", () => {
    const box = singlePhotoBox(800, 1200)
    expect(box).toMatchObject({ width: 341, height: SINGLE_MAX_HEIGHT })
    expect(box?.scaleX).toBe(1)
    expect(box?.scaleY).toBe(1)
  })

  it("letterboxes a tower rather than showing a slice of it", () => {
    const box = singlePhotoBox(200, 2000)
    expect(box).toMatchObject({
      width: SINGLE_MIN_WIDTH,
      height: SINGLE_MAX_HEIGHT,
      scaleY: 1,
    })
    // 512 tall at 1:10 is 51.2 wide — 40% of the floored box, the rest bands.
    expect(box?.scaleX).toBeCloseTo(0.4, 4)
  })

  it("letterboxes a panorama the same way", () => {
    const box = singlePhotoBox(2000, 400)
    expect(box).toMatchObject({
      width: SINGLE_MAX_WIDTH,
      height: SINGLE_MIN_HEIGHT,
      scaleX: 1,
    })
    expect(box?.scaleY).toBeCloseTo(0.6, 4)
  })

  it("does not enlarge a photo smaller than the media width", () => {
    expect(singlePhotoBox(250, 180)).toEqual({
      width: 250,
      height: 180,
      scaleX: 1,
      scaleY: 1,
    })
  })

  it("centres a tiny photo in the floor box at its own size", () => {
    expect(singlePhotoBox(64, 64)).toEqual({
      width: SINGLE_MIN_WIDTH,
      height: SINGLE_MIN_HEIGHT,
      scaleX: 0.5,
      scaleY: 0.5,
    })
  })

  it("has nothing to measure without intrinsic dimensions", () => {
    expect(singlePhotoBox()).toBeNull()
    expect(singlePhotoBox(800, undefined)).toBeNull()
  })
})

describe("albumCells", () => {
  it("gives a lone photo a cell at its own ratio, with no inset", () => {
    const [cell] = albumCells([photo(800, 600)])
    expect(cell).toEqual({
      index: 0,
      span: 2,
      aspectRatio: 1 / 0.75,
      hiddenCount: 0,
    })
  })

  it("insets a lone photo only when a bound letterboxes it", () => {
    const [tower] = albumCells([photo(200, 2000)])
    expect(tower?.aspectRatio).toBeCloseTo(128 / 512, 6)
    expect(tower?.inset?.scaleX).toBeCloseTo(0.4, 4)
    expect(tower?.inset?.scaleY).toBe(1)

    const [dimensionless] = albumCells([photo()])
    expect(dimensionless?.aspectRatio).toBe(1)
    expect(dimensionless?.inset).toBeUndefined()
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
