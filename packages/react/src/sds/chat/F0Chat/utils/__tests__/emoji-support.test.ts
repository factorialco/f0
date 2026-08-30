import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  detectMaxEmojiVersion,
  MAX_EMOJI_VERSION,
  resetEmojiSupportCache,
} from "../emoji-support"

/**
 * The probe reads pixels back from a canvas, which jsdom has none of. Each test
 * installs a fake 2D context that answers as a chosen platform would.
 */

const CANVAS_SIZE = 36
const PIXELS = CANVAS_SIZE * CANVAS_SIZE * 4

const filled = (value: number) => {
  const data = new Uint8ClampedArray(PIXELS)
  data.fill(value)
  return data
}

const BLANK = new Uint8ClampedArray(PIXELS)
const NOTDEF_PIXELS = filled(7)
const GLYPH_PIXELS = filled(200)

type FakeContext = {
  drawn: string
  font: string
  textBaseline: string
  clearRect: () => void
  fillText: (text: string) => void
  getImageData: () => { data: Uint8ClampedArray }
  measureText: (text: string) => { width: number }
}

/**
 * @param supports  Emoji the fake platform can draw. Anything else comes back
 *                  as the notdef box.
 * @param decompose Emoji that render but as two glyphs — the failure mode a
 *                  pixel check alone can't see.
 */
const installCanvas = ({
  supports,
  decompose = [],
  unavailable = false,
}: {
  supports: string[]
  decompose?: string[]
  unavailable?: boolean
}) => {
  const context: FakeContext = {
    drawn: "",
    font: "",
    textBaseline: "",
    clearRect: () => {},
    fillText(text: string) {
      this.drawn = text
    },
    getImageData() {
      if (this.drawn === "￿") return { data: NOTDEF_PIXELS }
      if (supports.includes(this.drawn) || decompose.includes(this.drawn)) {
        return { data: GLYPH_PIXELS }
      }
      return { data: BLANK }
    },
    measureText: (text: string) => ({
      width: decompose.includes(text) ? 64 : 32,
    }),
  }

  vi.spyOn(document, "createElement").mockImplementation(((tagName: string) => {
    if (tagName !== "canvas") {
      return Object.getPrototypeOf(document).createElement.call(
        document,
        tagName
      )
    }
    return {
      width: 0,
      height: 0,
      getContext: () => (unavailable ? null : context),
    }
  }) as typeof document.createElement)
}

/** Every probe representative, oldest release first. */
const ALL = [
  "😀",
  "🗨️",
  "🤣",
  "👱‍♀️",
  "🤩",
  "🥰",
  "🥱",
  "🧑‍🦰",
  "🥲",
  "😵‍💫",
  "🫠",
  "🫨",
]

describe("detectMaxEmojiVersion", () => {
  beforeEach(() => resetEmojiSupportCache())
  afterEach(() => vi.restoreAllMocks())

  it("reports the newest release when the platform draws everything", () => {
    installCanvas({ supports: ALL })
    expect(detectMaxEmojiVersion()).toBe(MAX_EMOJI_VERSION)
  })

  it("stops at the last release the platform can draw", () => {
    // A machine stuck on Emoji 13: 13.1's spiral-eyes and everything after are
    // blank.
    installCanvas({ supports: ALL.slice(0, 9) })
    expect(detectMaxEmojiVersion()).toBe(13)
  })

  it("treats a sequence that renders as two glyphs as unsupported", () => {
    // The exact 13.1 failure: it paints, but as "dizzy face" + "shooting star".
    installCanvas({ supports: ALL, decompose: ["😵‍💫"] })
    expect(detectMaxEmojiVersion()).toBe(13)
  })

  it("shows everything rather than nothing when there is no canvas", () => {
    installCanvas({ supports: [], unavailable: true })
    expect(detectMaxEmojiVersion()).toBe(MAX_EMOJI_VERSION)
  })

  it("shows everything when the canvas can't even draw Emoji 1.0", () => {
    // Not a font answer — a canvas we can't trust. Hiding the whole picker on
    // the strength of it would be the worse mistake.
    installCanvas({ supports: [] })
    expect(detectMaxEmojiVersion()).toBe(MAX_EMOJI_VERSION)
  })

  it("probes once and reuses the answer", () => {
    installCanvas({ supports: ALL })
    const createElement = vi.mocked(document.createElement)
    detectMaxEmojiVersion()
    detectMaxEmojiVersion()
    detectMaxEmojiVersion()
    expect(
      createElement.mock.calls.filter(([tag]) => tag === "canvas")
    ).toHaveLength(1)
  })
})
