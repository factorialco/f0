import { describe, expect, it } from "vitest"
import { locateMentions } from "../mention-ranges"
import { sanitizeDisplayText } from "../sanitize-text"

// Written as escapes on purpose: the two spellings are the point of these
// tests and are indistinguishable when pasted as literal characters.
/** `Garcia` with a precomposed i-acute (U+00ED) — the NFC spelling. */
const NFC_NAME = "Garc\u00EDa"
/** The same name as `i` + U+0301 COMBINING ACUTE ACCENT — the NFD spelling. */
const NFD_NAME = "Garci\u0301a"

describe("locateMentions", () => {
  it("locates a plain ASCII name", () => {
    expect(locateMentions("hi @Ana!", [{ name: "Ana" }])).toEqual([
      { entry: { name: "Ana" }, start: 3, end: 7 },
    ])
  })

  it("prefers the longest name and drops the overlap", () => {
    const entries = [{ name: "Ana" }, { name: "Ana Maria" }]
    expect(locateMentions("hi @Ana Maria!", entries)).toEqual([
      { entry: { name: "Ana Maria" }, start: 3, end: 13 },
    ])
  })

  it("locates a decomposed name in a body the renderer already composed", () => {
    const body = sanitizeDisplayText(`hi @${NFD_NAME}!`)
    const located = locateMentions(body, [{ name: NFD_NAME }])

    expect(located).toHaveLength(1)
    expect(body.slice(located[0]!.start, located[0]!.end)).toBe(`@${NFC_NAME}`)
  })

  it("locates a composed name in a body that is still decomposed", () => {
    const body = `hi @${NFD_NAME}!`
    const located = locateMentions(body, [{ name: NFC_NAME }])

    expect(located).toHaveLength(1)
    expect(body.slice(located[0]!.start, located[0]!.end)).toBe(`@${NFD_NAME}`)
  })

  it("locates both occurrences when the two spellings are mixed in one body", () => {
    const body = `@${NFC_NAME} and @${NFD_NAME}`
    const located = locateMentions(body, [{ name: NFC_NAME }])

    expect(located).toHaveLength(2)
    expect(body.slice(located[0]!.start, located[0]!.end)).toBe(`@${NFC_NAME}`)
    expect(body.slice(located[1]!.start, located[1]!.end)).toBe(`@${NFD_NAME}`)
  })

  it("marks only the `@` occurrence when the name also appears as plain text", () => {
    const body = `${NFC_NAME} wrote: hi @${NFD_NAME}`
    const located = locateMentions(body, [{ name: NFD_NAME }])

    expect(located).toHaveLength(1)
    expect(located[0]!.start).toBe(body.indexOf("@"))
    expect(body.slice(located[0]!.start, located[0]!.end)).toBe(`@${NFD_NAME}`)
    // Text and name spelled alike: the span an existing caller derives from
    // the name length is still the span this returns.
    expect(located[0]!.end).toBe(located[0]!.start + NFD_NAME.length + 1)
  })

  // `end` is the only authority on where an occurrence stops. A caller that
  // measures the name instead lands one index short here, which is why the
  // field says so and why this case is pinned.
  it("reports an end no caller can derive from the name length", () => {
    const body = `hi @${NFD_NAME}!`
    const [located] = locateMentions(body, [{ name: NFC_NAME }])

    expect(located!.end).toBe(body.indexOf("!"))
    expect(located!.end).not.toBe(located!.start + NFC_NAME.length + 1)
  })

  it("folds a singleton so a legacy code point still matches", () => {
    const angstrom = "\u212Bngel"
    const letterA = "\u00C5ngel"
    const located = locateMentions(`hi @${angstrom}`, [{ name: letterA }])

    expect(located).toHaveLength(1)
  })

  it("keeps a surrogate pair whole", () => {
    const name = "Ana\u{1F916}"
    const body = `hi @${name} there`
    expect(locateMentions(body, [{ name }])).toEqual([
      { entry: { name }, start: 3, end: body.indexOf(" there") },
    ])
  })

  it("leaves a Hangul syllable written as jamo alone", () => {
    // The boundary walk groups marks, not jamo, so a syllable could be cut in
    // half here. It is not: the run stops being a canonical prefix first.
    expect(
      locateMentions("@\u1100\u1161\u11A8 hi", [{ name: "\uAC00" }])
    ).toEqual([])
  })

  // The same walk is why a name *held* as jamo needs the spelling it was given
  // as well as the composed one: jamo compose with each other rather than as
  // marks, so the walk can never reach them and the name would stop being
  // found in the very spelling it is stored in.
  it("locates a name held as jamo in a body spelled the same way", () => {
    const jamo = "\u1100\u1161\u11A8"
    const body = `hi @${jamo}!`

    expect(locateMentions(body, [{ name: jamo }])).toEqual([
      { entry: { name: jamo }, start: 3, end: body.indexOf("!") },
    ])
  })

  it("locates a name held as jamo in a body that composed it", () => {
    const jamo = "\u1100\u1161\u11A8"
    const body = "hi @\uAC01!"

    expect(locateMentions(body, [{ name: jamo }])).toEqual([
      { entry: { name: jamo }, start: 3, end: body.indexOf("!") },
    ])
  })

  it("does not swallow the accent that follows a name held as jamo", () => {
    expect(
      locateMentions("hi @\u1100\u1161\u11A8\u0301", [
        { name: "\u1100\u1161\u11A8" },
      ])
    ).toEqual([])
  })

  it("gives up on a trailing `@`", () => {
    expect(locateMentions("hi @", [{ name: "Ana" }])).toEqual([])
  })

  it("keeps scanning past an `@` that is not a mention", () => {
    const body = "write a@b.example or ping @Ana"
    expect(locateMentions(body, [{ name: "Ana" }])).toEqual([
      { entry: { name: "Ana" }, start: body.indexOf("@Ana"), end: body.length },
    ])
  })

  it("does not swallow the accent of the character that ends the name", () => {
    expect(locateMentions("hi @Ana\u0301!", [{ name: "Ana" }])).toEqual([])
  })

  // `hooks/useMentions.ts` (`seedMentions`) calls this with bare `{ name }`
  // objects and reads back `{ entry: { name }, start }` to anchor a saved
  // message's mentions on its text. That shape has to keep resolving.
  it("keeps the `seedMentions` call shape resolving", () => {
    const text = `hi @${NFD_NAME}, ping @Ana`
    const byName = new Map([
      [NFC_NAME, [{ id: "1", name: NFC_NAME }]],
      ["Ana", [{ id: "2", name: "Ana" }]],
    ])

    const anchored = locateMentions(
      text,
      [...byName.keys()].map((name) => ({ name }))
    ).flatMap(({ entry: { name }, start }) => {
      const picked = byName.get(name)?.[0]
      return picked ? [{ ...picked, start }] : []
    })

    expect(anchored).toEqual([
      { id: "1", name: NFC_NAME, start: 3 },
      { id: "2", name: "Ana", start: text.indexOf("@Ana") },
    ])
  })
})
