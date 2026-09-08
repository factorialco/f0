import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { type MentionEntry, useMentions } from "../useMentions"

// Written as escapes on purpose: the whole point of the pair is that they look
// identical, and a literal accented character is composed somewhere on its way
// into the file, so both fixtures would land byte-identical and the test would
// pass against unfixed code.
/** "García" with a precomposed í — 6 characters. */
const COMPOSED = "Garc\u00EDa"
/** "García" with a combining acute accent — 7 characters. */
const DECOMPOSED = "Garci\u0301a"

const ONE: MentionEntry = { id: "u1", name: COMPOSED }
const TWO: MentionEntry = { id: "u2", name: DECOMPOSED }

/** "@García and @García!" — both occurrences precomposed, as typed. */
const BODY = `@${COMPOSED} and @${COMPOSED}!`

type Props = Parameters<typeof useMentions>[0]

/**
 * A saved message carries a set of people and a body; where they sit is
 * resolved by matching `@name` in that body. Two people whose display names are
 * the same string in different Unicode normal forms are one name to a reader
 * and two keys to a `Map` — so the occurrences were handed out from the first
 * one's queue twice, and the second person's mention was silently dropped.
 */
describe("useMentions — seeding a saved message's mentions", () => {
  let textarea: HTMLTextAreaElement
  let textareaRef: { current: HTMLTextAreaElement | null }
  let value: string
  let setInputValue: ReturnType<typeof vi.fn>

  beforeEach(() => {
    textarea = document.createElement("textarea")
    document.body.appendChild(textarea)
    textareaRef = { current: textarea }
    setInputValue = vi.fn((next: string) => {
      value = next
    })
  })

  afterEach(() => textarea.remove())

  const makeProps = (over: Partial<Props> = {}): Props => ({
    inputValue: value,
    setInputValue,
    cursorPosition: value.length,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef,
    enabled: true,
    searchMembers: (): Promise<F0ChatUser[]> => Promise.resolve([]),
    everyoneLabel: "here",
    ...over,
  })

  const openForEditing = (body: string, seeded: MentionEntry[]) => {
    value = body
    const harness = renderHook((props: Props) => useMentions(props), {
      initialProps: makeProps(),
    })
    act(() => harness.result.current.seedMentions(seeded, body))
    harness.rerender(makeProps())
    return harness
  }

  it("proves the two spellings really are different strings", () => {
    expect(COMPOSED).not.toBe(DECOMPOSED)
    expect(COMPOSED.length).toBe(6)
    expect(DECOMPOSED.length).toBe(7)
    expect(DECOMPOSED.normalize("NFC")).toBe(COMPOSED)
  })

  it("gives each of two canonically equal names its own occurrence", async () => {
    const { result } = openForEditing(BODY, [ONE, TWO])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    expect(result.current.mentions).toMatchObject([
      { id: "u1", start: 0 },
      { id: "u2", start: 12 },
    ])
    expect(result.current.getMentions()).toEqual({
      mentions: [ONE, TWO],
      mentionedEveryone: false,
    })
  })

  it("takes each anchor's extent from the text, not from the name", async () => {
    const { result } = openForEditing(BODY, [ONE, TWO])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    // The second anchor holds the *decomposed* name, one character longer than
    // the precomposed `@García` it actually sits on. Derived from the name it
    // would end at 20 — past the end of a 20-character body.
    expect(result.current.mentions).toMatchObject([
      { start: 0, end: 7 },
      { start: 12, end: 19 },
    ])
  })

  it("keeps a mention whose name is spelled differently from the text", async () => {
    const { result, rerender } = openForEditing(BODY, [ONE, TWO])
    await waitFor(() => expect(result.current.mentions).toHaveLength(2))

    // Delete the trailing "!" — adjacent to the second mention, outside it. An
    // extent derived from the longer name overlaps it and erases the mention.
    value = BODY.slice(0, -1)
    rerender(makeProps({ inputValue: value, cursorPosition: value.length }))

    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([ONE, TWO])
    )
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("gives an occurrence to the person whose name is spelled that way", async () => {
    // The body is written the way the *second* person's name is written. One
    // canonical queue is right for handing out repeats; it must not decide who
    // a single occurrence belongs to when the text already says.
    const { result } = openForEditing(`@${DECOMPOSED}`, [ONE, TWO])

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    expect(result.current.mentions).toMatchObject([
      { id: "u2", start: 0, end: 8 },
    ])
    expect(result.current.getMentions().mentions).toEqual([TWO])
  })

  it("still gives one person named twice both occurrences", async () => {
    const { result } = openForEditing(BODY, [ONE])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    expect(result.current.mentions).toMatchObject([
      { id: "u1", start: 0 },
      { id: "u1", start: 12 },
    ])
    expect(result.current.getMentions().mentions).toEqual([ONE])
  })
})
