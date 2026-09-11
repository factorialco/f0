import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { knownImageSize, measureImageSize } from "../image-size"

type FakeImage = {
  src: string
  naturalWidth: number
  naturalHeight: number
  onload: (() => void) | null
  onerror: (() => void) | null
}

describe("measureImageSize", () => {
  let created: FakeImage[]

  beforeEach(() => {
    created = []
    vi.stubGlobal(
      "Image",
      class {
        naturalWidth = 0
        naturalHeight = 0
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        _src = ""
        set src(value: string) {
          this._src = value
          created.push(this as unknown as FakeImage)
        }
        get src(): string {
          return this._src
        }
      }
    )
  })

  afterEach(() => vi.unstubAllGlobals())

  const resolveWith = (image: FakeImage, width: number, height: number) => {
    image.naturalWidth = width
    image.naturalHeight = height
    image.onload?.()
  }

  it("decodes the file and remembers what it found", async () => {
    const pending = measureImageSize("photo-a.webp")
    resolveWith(created[0], 1200, 800)
    await expect(pending).resolves.toEqual({ width: 1200, height: 800 })

    expect(knownImageSize("photo-a.webp")).toEqual({ width: 1200, height: 800 })
    // Rows come and go; the measurement does not happen again.
    await expect(measureImageSize("photo-a.webp")).resolves.toEqual({
      width: 1200,
      height: 800,
    })
    expect(created).toHaveLength(1)
  })

  it("decodes once for callers that ask at the same time", async () => {
    const first = measureImageSize("photo-b.webp")
    const second = measureImageSize("photo-b.webp")
    expect(created).toHaveLength(1)

    resolveWith(created[0], 400, 400)
    expect(await first).toEqual(await second)
  })

  it("reports nothing for a file that fails to decode", async () => {
    const pending = measureImageSize("broken.webp")
    created[0].onerror?.()
    await expect(pending).resolves.toBeNull()
    expect(knownImageSize("broken.webp")).toBeUndefined()
  })

  it("reports nothing when the decode yields no dimensions", async () => {
    // A dimensionless SVG decodes fine and measures 0×0; laying a box out from
    // that would be worse than the square fallback.
    const pending = measureImageSize("sizeless.svg")
    resolveWith(created[0], 0, 0)
    await expect(pending).resolves.toBeNull()
    expect(knownImageSize("sizeless.svg")).toBeUndefined()
  })
})
