import { describe, expect, it } from "vitest"

import {
  CHAT_MEDIA_WIDE_WIDTH_CLASS,
  CHAT_MEDIA_WIDTH_CLASS,
} from "../media-layout"

describe("chat media widths", () => {
  // Every ancestor between a media card and the transcript row is content-sized,
  // so a percentage width has no definite basis: the card's intrinsic
  // contribution falls back to the photo's own size and the whole message column
  // stretches to the full width of the transcript — which parks the hover
  // actions at the far right edge instead of beside the photo.
  it.each([
    ["standard", CHAT_MEDIA_WIDTH_CLASS],
    ["wide", CHAT_MEDIA_WIDE_WIDTH_CLASS],
  ])("sizes the %s surface without a percentage", (_name, widthClass) => {
    const width = widthClass
      .split(" ")
      .find((token) => token.startsWith("w-") && !token.startsWith("w-full"))

    expect(width).toBeDefined()
    expect(width).not.toContain("%")
  })

  // The cap is what the percentage was really there for: media still shrinks
  // with a narrow panel, it just no longer decides how wide the message is.
  it.each([
    ["standard", CHAT_MEDIA_WIDTH_CLASS],
    ["wide", CHAT_MEDIA_WIDE_WIDTH_CLASS],
  ])("keeps the %s surface inside the column", (_name, widthClass) => {
    expect(widthClass.split(" ")).toContain("max-w-full")
  })
})
