import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import {
  type AnchoredMention,
  type MentionEntry,
  reanchorMentions,
  useMentions,
} from "../useMentions"

type Props = Parameters<typeof useMentions>[0]

const GIL = "Ana Gil"
const ONE_GIL: MentionEntry = { id: "gil-one", name: GIL }
const TWO_GIL: MentionEntry = { id: "gil-two", name: GIL }

// Escapes on purpose: the pair is meant to look identical, and a literal
// accented character is composed on its way into the file, which would make
// both constants the same string and every test below vacuous.
/** "Garcia" with a precomposed i-acute — 6 characters. */
const COMPOSED = "Garc\u00EDa"
/** "Garcia" with a combining acute accent — 7 characters. */
const DECOMPOSED = "Garci\u0301a"
const NFC_PERSON: MentionEntry = { id: "u-nfc", name: COMPOSED }
const NFD_PERSON: MentionEntry = { id: "u-nfd", name: DECOMPOSED }
/** One occurrence in each spelling, the decomposed one first. */
const MIXED_BODY = `@${DECOMPOSED} and @${COMPOSED}!`

const harness = () => {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)
  const textareaRef = { current: textarea as HTMLTextAreaElement | null }
  const inserted: string[] = []
  let value = ""

  const makeProps = (over: Partial<Props> = {}): Props => ({
    inputValue: value,
    setInputValue: (next: string) => {
      inserted.push(next)
      value = next
    },
    cursorPosition: value.length,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef,
    enabled: true,
    searchMembers: (): Promise<F0ChatUser[]> => Promise.resolve([]),
    everyoneLabel: "here",
    ...over,
  })

  return {
    textarea,
    inserted,
    makeProps,
    setValue: (next: string) => {
      value = next
    },
  }
}

/**
 * The anchors are per occurrence and the payload is per person, so an anchor
 * that survives an edit it should not have survived is not a display bug: it
 * is a notification sent to somebody the user took out of the message. These
 * drive `getMentions()` rather than the anchor list, because that is the value
 * that leaves the composer.
 */
describe("useMentions — who the payload names after an edit", () => {
  let bench: ReturnType<typeof harness>

  beforeEach(() => {
    bench = harness()
  })
  afterEach(() => bench.textarea.remove())

  const openForEditing = (body: string, seeded: MentionEntry[]) => {
    bench.setValue(body)
    const rendered = renderHook((props: Props) => useMentions(props), {
      initialProps: bench.makeProps(),
    })
    act(() => rendered.result.current.seedMentions(seeded, body))
    rendered.rerender(bench.makeProps())
    return rendered
  }

  it("names one person after one of two identical mentions is deleted", async () => {
    // Two different people share a display name, both mentioned. Deleting one
    // occurrence reads equally as deleting the other, so the reading that
    // saves the survivor is available to the anchor that actually went.
    const body = `Hi @${GIL} @${GIL} ok`
    const { result, rerender } = openForEditing(body, [ONE_GIL, TWO_GIL])
    await waitFor(() => expect(result.current.mentions).toHaveLength(2))

    const edited = `Hi @${GIL} ok`
    bench.setValue(edited)
    rerender(bench.makeProps({ inputValue: edited, cursorPosition: 11 }))

    await waitFor(() =>
      expect(result.current.getMentions()).toEqual({
        mentions: [ONE_GIL],
        mentionedEveryone: false,
      })
    )
    // The composer's own text was not rewritten: the edit was the user's.
    expect(bench.inserted).toEqual([])
  })

  it("does not notify a person whose `@name` is no longer in the message", async () => {
    const body = `Hi @${GIL} @${GIL} ok`
    const { result, rerender } = openForEditing(body, [ONE_GIL, TWO_GIL])
    await waitFor(() => expect(result.current.mentions).toHaveLength(2))

    const edited = `Hi @${GIL} ok`
    bench.setValue(edited)
    rerender(bench.makeProps({ inputValue: edited, cursorPosition: 11 }))

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    const named = result.current.getMentions().mentions
    const occurrences = edited.split(`@${GIL}`).length - 1
    expect(named.length).toBeLessThanOrEqual(occurrences)
  })
})

/**
 * Two people whose display names differ only in Unicode normal form read as
 * one name and are two strings. Grouping them decides how *repeats* are handed
 * out; it must never decide who a lone occurrence belongs to, because the body
 * already says — it is spelled one way and not the other.
 */
describe("useMentions — seeding a body that uses both spellings", () => {
  let bench: ReturnType<typeof harness>

  beforeEach(() => {
    bench = harness()
  })
  afterEach(() => bench.textarea.remove())

  const seed = (body: string, entries: MentionEntry[]) => {
    bench.setValue(body)
    const rendered = renderHook((props: Props) => useMentions(props), {
      initialProps: bench.makeProps(),
    })
    act(() => rendered.result.current.seedMentions(entries, body))
    rendered.rerender(bench.makeProps())
    return rendered
  }

  it("keeps the two fixtures distinct", () => {
    expect(COMPOSED).not.toBe(DECOMPOSED)
    expect(COMPOSED.length).toBe(6)
    expect(DECOMPOSED.length).toBe(7)
    expect(DECOMPOSED.normalize("NFC")).toBe(COMPOSED)
  })

  it("gives each occurrence to the person who spells it that way", async () => {
    const { result } = seed(MIXED_BODY, [NFC_PERSON, NFD_PERSON])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    expect(result.current.mentions).toMatchObject([
      { id: "u-nfd", start: 0, end: 8 },
      { id: "u-nfc", start: 13, end: 20 },
    ])
  })

  it("gives the same answer whichever order the entries arrive in", async () => {
    const { result } = seed(MIXED_BODY, [NFD_PERSON, NFC_PERSON])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    expect(result.current.mentions).toMatchObject([
      { id: "u-nfd", start: 0, end: 8 },
      { id: "u-nfc", start: 13, end: 20 },
    ])
  })

  it("anchors every occurrence on the text it actually covers", async () => {
    // Both occurrences decomposed, and only one person spells it that way, so
    // the second goes to someone whose name is a character shorter than the
    // text it lands on. An extent derived from that name stops one short.
    const body = `@${DECOMPOSED} and @${DECOMPOSED}!`
    const { result } = seed(body, [NFC_PERSON, NFD_PERSON])

    await waitFor(() => expect(result.current.mentions).toHaveLength(2))
    expect(result.current.mentions).toMatchObject([
      { id: "u-nfd", start: 0, end: 8 },
      { id: "u-nfc", start: 13, end: 21 },
    ])
    for (const mention of result.current.mentions) {
      expect(body.slice(mention.start, mention.end)).toBe(`@${DECOMPOSED}`)
    }
  })
})

/**
 * The reading that saves an anchor is chosen per anchor, so the invariants
 * that catch a second-order defect are properties of the whole set. Three
 * mentions rather than two: with two, the guard that refuses a reading already
 * claimed only ever has one earlier anchor to check against, so a rule that
 * looks backwards and a rule that looks both ways are indistinguishable.
 */
describe("useMentions — three anchors under an arbitrary edit", () => {
  const NAME = "Ana"
  const TOKEN = `@${NAME}`
  const ALPHABET = "@aAn ,"

  /** mulberry32 — deterministic, so a failure is reproducible from the seed. */
  const random = (seed: number) => () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = seed
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  it("keeps the kept anchors disjoint, on their names, and clear of what is erased", () => {
    const next = random(20260910)
    const pick = (limit: number) => Math.floor(next() * limit)
    const noise = (length: number) =>
      Array.from(
        { length },
        () => ALPHABET[pick(ALPHABET.length)] as string
      ).join("")

    for (let i = 0; i < 20000; i++) {
      const gaps = [noise(pick(4)), noise(pick(4)), noise(pick(4))]
      const tail = noise(pick(4))
      const text = gaps[0] + TOKEN + gaps[1] + TOKEN + gaps[2] + TOKEN + tail
      const anchors: AnchoredMention[] = []
      let at = 0
      for (const [index, gap] of gaps.entries()) {
        at += (gap as string).length
        anchors.push({
          id: `m${index}`,
          name: NAME,
          start: at,
          end: at + TOKEN.length,
        })
        at += TOKEN.length
      }

      const from = pick(text.length + 1)
      const removed = pick(text.length - from + 1)
      const edited =
        text.slice(0, from) + noise(pick(4)) + text.slice(from + removed)

      const { kept, touched } = reanchorMentions(text, edited, anchors)

      const overlapping = kept.filter((mention, index) =>
        kept.some(
          (other, otherIndex) =>
            otherIndex !== index &&
            other.start < mention.end &&
            other.end > mention.start
        )
      )
      const offItsName = kept.filter(
        (mention) => !edited.startsWith(TOKEN, mention.start)
      )
      // A kept anchor sitting on text the caller is about to cut out comes
      // back pointing at whatever slid into its place.
      const insideAnErasure = kept.filter((mention) =>
        touched.some(
          (span) => span.start < mention.end && span.end > mention.start
        )
      )
      const duplicateIds = kept.length !== new Set(kept.map((m) => m.id)).size

      expect({
        i,
        text,
        edited,
        overlapping,
        offItsName,
        insideAnErasure,
        duplicateIds,
      }).toEqual({
        i,
        text,
        edited,
        overlapping: [],
        offItsName: [],
        insideAnErasure: [],
        duplicateIds: false,
      })
    }
  })
})

/**
 * Refusing a row that answers an older query is the point of the keyboard
 * guard, and it costs at most one debounce window — unless the search it is
 * waiting for never comes back, in which case Enter stays refused. The user is
 * not stuck: Escape closes the popover and hands Enter back to the composer.
 */
describe("useMentions — Enter while the search that would settle it hangs", () => {
  let bench: ReturnType<typeof harness>

  beforeEach(() => {
    vi.useFakeTimers()
    bench = harness()
  })
  afterEach(() => {
    vi.useRealTimers()
    bench.textarea.remove()
  })

  const MEMBERS: F0ChatUser[] = [{ id: "ana-g", name: "Ana Garcia" }]

  const settle = async () => {
    await act(async () => {
      await vi.advanceTimersByTimeAsync(500)
    })
  }

  const press = (
    result: { current: ReturnType<typeof useMentions> },
    key: string
  ): boolean => {
    let consumed = false
    act(() => {
      consumed = result.current.handleKeyDown({
        key,
        preventDefault: () => {},
      } as React.KeyboardEvent<HTMLTextAreaElement>)
    })
    return consumed
  }

  it("refuses the stale row but gives Enter back after Escape", async () => {
    let answered = 0
    // A host that matches anywhere in the name, and answers only once.
    const props = (over: Partial<Props> = {}): Props =>
      bench.makeProps({
        searchMembers: (query: string) =>
          answered++ === 0
            ? Promise.resolve(
                MEMBERS.filter((member) =>
                  member.name.toLowerCase().includes(query.toLowerCase())
                )
              )
            : new Promise<F0ChatUser[]>(() => {}),
        ...over,
      })

    const { result, rerender } = renderHook(
      (next: Props) => useMentions(next),
      { initialProps: props() }
    )

    rerender(props({ inputValue: "@gar", cursorPosition: 4 }))
    await settle()
    expect(result.current.results).toMatchObject([
      { kind: "user", user: { id: "ana-g" } },
    ])

    // The row is still on screen and still correct, but it answers "gar" and
    // the search for "garc" never lands.
    rerender(props({ inputValue: "@garc", cursorPosition: 5 }))
    await settle()
    expect(result.current.isLoading).toBe(true)
    expect(press(result, "Enter")).toBe(true)
    expect(bench.inserted).toEqual([])

    press(result, "Escape")

    expect(result.current.isOpen).toBe(false)
    // Not consumed any more, so the composer behind it sends the message.
    expect(press(result, "Enter")).toBe(false)
  })
})
