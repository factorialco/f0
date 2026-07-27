import { describe, expect, it } from "vitest"

import { sanitizeDisplayText } from "../utils/sanitize-text"

// A pool of combining marks (strikethrough overlay, cyrillic millions sign,
// and stacked diacritics) — the classic zalgo ingredients.
const MARKS = "̶҉̖͓͚ͅ"

/** Each char of `base` buried under `marks` combining marks. */
const zalgo = (base: string, marks: number): string =>
  base
    .split("")
    .map((char) => char + MARKS.repeat(marks).slice(0, marks))
    .join("")

describe("sanitizeDisplayText", () => {
  it("strips zalgo stacks down to a readable glyph", () => {
    const dirty = zalgo("hello", 6)
    const clean = sanitizeDisplayText(dirty)
    // At most 3 combining marks survive per character.
    expect(/\p{M}{4,}/u.test(clean)).toBe(false)
    expect(clean.replace(/\p{M}/gu, "")).toBe("hello")
  })

  it("keeps real accents and composed characters", () => {
    expect(sanitizeDisplayText("café mañana über")).toBe("café mañana über")
    // Decomposed input (e + combining acute) normalizes to the precomposed form.
    expect(sanitizeDisplayText("café")).toBe("café")
  })

  it("keeps emojis intact (ZWJ sequences, variation selectors, skin tones)", () => {
    const emojis = "👨‍👩‍👧 ❤️ 👍🏽"
    expect(sanitizeDisplayText(emojis)).toBe(emojis.normalize("NFC"))
  })

  it("drops bidi override characters", () => {
    expect(sanitizeDisplayText("abc‮def⁦ghi")).toBe("abcdefghi")
  })

  it("leaves plain text untouched", () => {
    expect(sanitizeDisplayText("who is this?")).toBe("who is this?")
  })
})
