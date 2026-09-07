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
