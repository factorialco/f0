import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { type MentionEntry, useMentions } from "../useMentions"

// A matcher that reports a spelling the located text does not have. That is
// what a normalization-insensitive `locateMentions` does: both spellings of a
// name canonicalize to one pattern, so every occurrence matches every
// spelling, and the overlap it keeps is whichever entry was handed to it
// first — the reported name stops being evidence of how the body is written.
vi.mock("../../utils/mention-ranges", () => ({
  locateMentions: <T extends { name: string }>(
    text: string,
    entries: readonly T[]
  ) => {
    const found: { entry: T; start: number; end: number }[] = []
    const reported = entries[0]
    if (!reported) return found
    for (
      let at = text.indexOf("@");
      at !== -1;
      at = text.indexOf("@", at + 1)
    ) {
      // The extent is the spelling the body actually carries, which is what a
      // canonical matcher returns; the entry it comes back under is not.
      const spelling = entries.find((entry) =>
        text.startsWith(entry.name, at + 1)
      )
      if (!spelling) continue
      found.push({
        entry: reported,
        start: at,
        end: at + 1 + spelling.name.length,
      })
    }
    return found
  },
}))

const COMPOSED = "García"
const DECOMPOSED = "García"
const NFC_PERSON: MentionEntry = { id: "u-nfc", name: COMPOSED }
const NFD_PERSON: MentionEntry = { id: "u-nfd", name: DECOMPOSED }

type Props = Parameters<typeof useMentions>[0]

/**
 * Who a lone occurrence belongs to is decided by how the body spells it. The
 * matcher reports which entry it matched, and once matching folds the two
 * normal forms together that is a tie-break, not evidence — so ownership has
 * to read the text the range covers rather than the name that came back with
 * it. On this base the two are always the same string, which is exactly why
 * the distinction has to be pinned before #5430 makes them differ.
 */
describe("useMentions — ownership follows the text, not the reported entry", () => {
  let textarea: HTMLTextAreaElement
  let textareaRef: { current: HTMLTextAreaElement | null }
  let value: string

  beforeEach(() => {
    textarea = document.createElement("textarea")
    document.body.appendChild(textarea)
    textareaRef = { current: textarea }
  })
  afterEach(() => textarea.remove())

  const makeProps = (): Props => ({
    inputValue: value,
    setInputValue: () => {},
    cursorPosition: value.length,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef,
    enabled: true,
    searchMembers: (): Promise<F0ChatUser[]> => Promise.resolve([]),
    everyoneLabel: "here",
  })

  const seed = (body: string, entries: MentionEntry[]) => {
    value = body
    const rendered = renderHook((props: Props) => useMentions(props), {
      initialProps: makeProps(),
    })
    act(() => rendered.result.current.seedMentions(entries, body))
    rendered.rerender(makeProps())
    return rendered
  }

  it("gives a decomposed occurrence to the person who spells it that way", async () => {
    // The body is written the way the *second* person writes their name, and
    // the matcher reports the *first* person's spelling for it.
    const { result } = seed(`@${DECOMPOSED}`, [NFC_PERSON, NFD_PERSON])

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    expect(result.current.mentions).toMatchObject([
      { id: "u-nfd", start: 0, end: 8 },
    ])
  })

  it("gives a composed occurrence to the person who spells it that way", async () => {
    const { result } = seed(`@${COMPOSED}`, [NFD_PERSON, NFC_PERSON])

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    expect(result.current.mentions).toMatchObject([
      { id: "u-nfc", start: 0, end: 7 },
    ])
  })

  it("still gives two occurrences of one spelling to one person each", async () => {
    const body = `@${COMPOSED} and @${COMPOSED}`
    const { result } = seed(body, [NFC_PERSON, NFD_PERSON])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    expect(result.current.getMentions().mentions).toHaveLength(2)
  })
})
