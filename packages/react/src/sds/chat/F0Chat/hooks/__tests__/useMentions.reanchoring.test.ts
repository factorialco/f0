import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import {
  type AnchoredMention,
  type MentionEntry,
  reanchorMentions,
  useMentions,
} from "../useMentions"

const ANA: MentionEntry = { id: "ana-g", name: "Ana García" }

type Props = Parameters<typeof useMentions>[0]

/**
 * Reading a text change means diffing two strings, and that has no unique
 * answer: peeling the common prefix first names the *rightmost* reading, which
 * is the right bias at a mention's tail and the wrong one at its head. Typing
 * `@` in front of `@Ana García` — the way a second mention gets started there —
 * repeats the character it lands on, so the rightmost reading put the
 * keystroke inside the token and took the whole name with it.
 */
describe("useMentions — an edit around a mention", () => {
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

  /** Seed a saved body's mentions, then hand the composer that body. */
  const openForEditing = (body: string, seeded: MentionEntry[] = [ANA]) => {
    value = body
    const harness = renderHook((props: Props) => useMentions(props), {
      initialProps: makeProps(),
    })
    act(() => harness.result.current.seedMentions(seeded, body))
    harness.rerender(makeProps())
    return harness
  }

  const edit = (
    rerender: (props: Props) => void,
    next: string,
    caret: number
  ) => {
    value = next
    rerender(makeProps({ inputValue: next, cursorPosition: caret }))
  }

  it("keeps the mention when a second `@` is typed right in front of it", async () => {
    const { result, rerender } = openForEditing("Hola @Ana García")
    await waitFor(() => expect(result.current.mentions).toHaveLength(1))

    edit(rerender, "Hola @@Ana García", 6)

    await waitFor(() =>
      expect(result.current.mentions).toMatchObject([{ id: "ana-g", start: 6 }])
    )
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("slides the anchor when a character is typed right in front of it", async () => {
    const { result, rerender } = openForEditing("Hola @Ana García")
    await waitFor(() => expect(result.current.mentions).toHaveLength(1))

    edit(rerender, "Hola x@Ana García", 6)

    await waitFor(() =>
      expect(result.current.mentions).toMatchObject([{ id: "ana-g", start: 6 }])
    )
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("erases nothing when the edit swallowed the mention outright", async () => {
    const { result, rerender } = openForEditing("Hola @Ana García bye")
    await waitFor(() => expect(result.current.mentions).toHaveLength(1))

    // Select "a @Ana García " and type over it. The mention's text is already
    // gone; what stands in its place is the user's own keystroke.
    edit(rerender, "Holxbye", 4)

    await waitFor(() => expect(result.current.mentions).toEqual([]))
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("never leaves two anchors on one `@name`", async () => {
    // Deleting either of two identical mentions produces the same text, so the
    // reading that moves the second one onto the first is available to both.
    const { result, rerender } = openForEditing(
      "Hi @Ana García @Ana García ok",
      [ANA, { id: "ana-p", name: "Ana García" }]
    )
    await waitFor(() => expect(result.current.mentions).toHaveLength(2))

    edit(rerender, "Hi @Ana García ok", 15)

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    expect(result.current.mentions).toMatchObject([{ start: 3, end: 14 }])
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("takes the mention but not the text typed past its end", async () => {
    const { result, rerender } = openForEditing("Hola @Ana García")
    await waitFor(() => expect(result.current.mentions).toHaveLength(1))

    // Select "García" and type "xyz": the change starts inside the token and
    // runs off its end, so only what is left of the token goes.
    edit(rerender, "Hola @Ana xyz", 13)

    await waitFor(() => expect(setInputValue).toHaveBeenCalledWith("Hola xyz"))
    expect(result.current.mentions).toEqual([])
  })
})

/**
 * Examples only test the cases someone thought of, and the reading a diff picks
 * is exactly what nobody thinks of. So: apply an edit that provably lands
 * outside a mention's span, and require the mention to come back whole and
 * still sitting on its own `@name`. The alphabet repeats the characters the
 * token is made of, which is what makes the readings ambiguous at all.
 */
describe("useMentions — an edit outside a mention never touches it", () => {
  const NAME = "Ana"
  const ALPHABET = "@aAn ,"

  /** mulberry32 — deterministic, so a failure is reproducible from the seed. */
  const random = (seed: number) => () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = seed
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  it("keeps every anchor, over 20000 random edits", () => {
    const next = random(20260908)
    const pick = (limit: number) => Math.floor(next() * limit)
    const noise = (length: number) =>
      Array.from(
        { length },
        () => ALPHABET[pick(ALPHABET.length)] as string
      ).join("")

    let checked = 0
    for (let i = 0; i < 20000; i++) {
      const before = noise(pick(6))
      const after = noise(pick(6))
      const text = `${before}@${NAME}${after}`
      const start = before.length
      const end = start + NAME.length + 1
      const anchor: AnchoredMention = { id: "ana-g", name: NAME, start, end }

      // Half the edits in front of the `@`, half past the end of the name.
      const inFront = next() < 0.5
      const at = inFront ? pick(start + 1) : end + pick(after.length + 1)
      const removed = inFront
        ? pick(start - at + 1)
        : pick(text.length - at + 1)
      const insertion = noise(pick(4))
      const edited = text.slice(0, at) + insertion + text.slice(at + removed)

      const { kept, touched } = reanchorMentions(text, edited, [anchor])
      const expected = inFront ? start + insertion.length - removed : start

      expect({
        i,
        text,
        edited,
        touched: touched.length,
        start: kept[0]?.start,
        span: (kept[0]?.end ?? 0) - (kept[0]?.start ?? 0),
        onItsName: edited.startsWith(`@${NAME}`, kept[0]?.start ?? -1),
      }).toEqual({
        i,
        text,
        edited,
        touched: 0,
        start: expected,
        span: NAME.length + 1,
        onItsName: true,
      })
      checked++
    }

    expect(checked).toBe(20000)
  })
})

/**
 * The reading that saves an anchor is chosen per anchor, which is exactly how
 * two of them end up on one token: deleting either of two identical mentions
 * produces the same text, so the reading that moves the survivor is available
 * to the deleted one as well. Nothing in an example test says "and the anchors
 * still describe disjoint pieces of the message", so this does.
 */
describe("useMentions — anchors never collide, whatever the edit", () => {
  const NAME = "Ana"
  const ALPHABET = "@aAn ,"

  const random = (seed: number) => () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = seed
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  it("keeps disjoint spans, over 20000 random edits to two mentions", () => {
    const next = random(20260909)
    const pick = (limit: number) => Math.floor(next() * limit)
    const noise = (length: number) =>
      Array.from(
        { length },
        () => ALPHABET[pick(ALPHABET.length)] as string
      ).join("")

    for (let i = 0; i < 20000; i++) {
      const token = `@${NAME}`
      const head = noise(pick(4))
      const middle = noise(pick(4))
      const tail = noise(pick(4))
      const text = head + token + middle + token + tail
      const first = head.length
      const second = first + token.length + middle.length
      const anchors: AnchoredMention[] = [
        { id: "one", name: NAME, start: first, end: first + token.length },
        { id: "two", name: NAME, start: second, end: second + token.length },
      ]

      // Anywhere at all, including straight through a mention.
      const at = pick(text.length + 1)
      const removed = pick(text.length - at + 1)
      const edited =
        text.slice(0, at) + noise(pick(4)) + text.slice(at + removed)

      const { kept } = reanchorMentions(text, edited, anchors)
      const overlapping = kept.filter((mention, index) =>
        kept.some(
          (other, otherIndex) =>
            otherIndex !== index &&
            other.start < mention.end &&
            other.end > mention.start
        )
      )
      const offItsName = kept.filter(
        (mention) => !edited.startsWith(token, mention.start)
      )

      expect({ i, text, edited, overlapping, offItsName }).toEqual({
        i,
        text,
        edited,
        overlapping: [],
        offItsName: [],
      })
    }
  })
})
