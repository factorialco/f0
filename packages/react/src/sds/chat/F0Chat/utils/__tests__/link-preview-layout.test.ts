import { describe, expect, it } from "vitest"
import {
  BANNER_MIN_RATIO,
  linkPreviewImageLayout,
  OG_DEFAULT_RATIO,
} from "../link-preview-layout"

const layout = (
  size: { width: number; height: number } | null | undefined,
  compact = false
) => linkPreviewImageLayout("https://cdn.example.com/og.png", size, compact)

describe("linkPreviewImageLayout", () => {
  it("has nothing to draw without an image", () => {
    expect(linkPreviewImageLayout(undefined, undefined, false)).toEqual({
      kind: "none",
    })
  })

  // A dead og:image used to leave a 160px grey box behind.
  it("drops an image that cannot be decoded", () => {
    expect(layout(null)).toEqual({ kind: "none" })
  })

  it("reserves the Open Graph ratio while measuring", () => {
    expect(layout(undefined)).toEqual({
      kind: "banner",
      aspectRatio: OG_DEFAULT_RATIO,
    })
  })

  it("gives a landscape image the banner, at its own ratio", () => {
    expect(layout({ width: 1200, height: 630 })).toEqual({
      kind: "banner",
      aspectRatio: 1200 / 630,
    })
    expect(layout({ width: 1280, height: 720 })).toMatchObject({
      kind: "banner",
    })
    // A very wide strip is still honest as a banner — it just gets short.
    expect(layout({ width: 2000, height: 400 })).toMatchObject({
      kind: "banner",
    })
  })

  it("sends everything a banner would ruin to the thumbnail", () => {
    expect(layout({ width: 600, height: 1400 })).toEqual({ kind: "thumb" })
    expect(layout({ width: 512, height: 512 })).toEqual({ kind: "thumb" })
    // 4:3 is below the threshold: as a banner it would be 288px of picture.
    expect(layout({ width: 1024, height: 768 })).toEqual({ kind: "thumb" })
  })

  it("never stretches a small image across the card", () => {
    // Landscape, but 200px wide: a banner would be a 2x upscale.
    expect(layout({ width: 200, height: 100 })).toEqual({ kind: "thumb" })
    expect(layout({ width: 50, height: 50 })).toEqual({ kind: "thumb" })
  })

  it("keeps a stack of previews compact, whatever the images are", () => {
    expect(layout({ width: 1200, height: 630 }, true)).toEqual({
      kind: "thumb",
    })
    expect(layout(undefined, true)).toEqual({ kind: "thumb" })
    expect(linkPreviewImageLayout(undefined, undefined, true)).toEqual({
      kind: "none",
    })
  })

  it("puts the banner threshold between 4:3 and 3:2", () => {
    expect(BANNER_MIN_RATIO).toBeGreaterThan(4 / 3)
    expect(BANNER_MIN_RATIO).toBeLessThanOrEqual(3 / 2)
  })
})
