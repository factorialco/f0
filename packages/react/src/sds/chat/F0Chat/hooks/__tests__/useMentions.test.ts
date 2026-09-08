import { act, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRenderHook as renderHook } from "@/testing/test-utils"
import { type F0ChatUser } from "../../types"
import { mentionEnd, type MentionEntry, useMentions } from "../useMentions"

const MEMBERS: F0ChatUser[] = [
  { id: "ana-g", name: "Ana García" },
  { id: "bruno", name: "Bruno Martínez" },
]

// rAF runs synchronously so selectCandidate's focus/caret restore resolves.
beforeEach(() => {
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0)
    return 0
  })
})
afterEach(() => vi.unstubAllGlobals())

type Props = Parameters<typeof useMentions>[0]

const makeProps = (over: Partial<Props> = {}): Props => {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)
  return {
    inputValue: "",
    setInputValue: () => {},
    cursorPosition: 0,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef: { current: textarea },
    enabled: true,
    searchMembers: (q: string) =>
      Promise.resolve(
        MEMBERS.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()))
      ),
    everyoneLabel: "here",
    ...over,
  }
}

describe("useMentions", () => {
  it("stays inert in DMs (disabled) — typing @ never opens the popover", () => {
    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps({ enabled: false }),
    })
    rerender(makeProps({ enabled: false, inputValue: "@", cursorPosition: 1 }))
    expect(result.current.isOpen).toBe(false)
  })

  it("pins the @here (everyone) option at the top when triggered", () => {
    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps(),
    })
    rerender(makeProps({ inputValue: "@", cursorPosition: 1 }))
    expect(result.current.isOpen).toBe(true)
    expect(result.current.results[0]).toEqual({
      kind: "everyone",
      label: "here",
    })
  })

  it("searches members and drops @here when the query doesn't match it", async () => {
    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps(),
    })
    rerender(makeProps({ inputValue: "@Ana", cursorPosition: 4 }))
    await waitFor(() =>
      expect(
        result.current.results.filter((r) => r.kind === "user")
      ).toHaveLength(1)
    )
    expect(result.current.results.some((r) => r.kind === "everyone")).toBe(
      false
    )
    expect(result.current.results[0]).toMatchObject({
      kind: "user",
      user: { id: "ana-g" },
    })
  })

  it("keeps an empty DM trigger searchable after no initial results", async () => {
    const searchMembers = vi.fn((query: string) =>
      Promise.resolve(query === "Ana" ? [MEMBERS[0]!] : [])
    )
    const props = makeProps({
      everyoneLabel: undefined,
      searchMembers,
    })
    const { result, rerender } = renderHook(
      (nextProps: Props) => useMentions(nextProps),
      {
        initialProps: props,
      }
    )

    rerender({ ...props, inputValue: "@", cursorPosition: 1 })
    await waitFor(() => expect(searchMembers).toHaveBeenCalledWith(""))
    expect(result.current.isOpen).toBe(true)

    rerender({ ...props, inputValue: "@Ana", cursorPosition: 4 })
    await waitFor(() => expect(searchMembers).toHaveBeenCalledWith("Ana"))
    await waitFor(() =>
      expect(result.current.results[0]).toMatchObject({
        kind: "user",
        user: { id: "ana-g" },
      })
    )
  })

  it("reports everyone + selected members in getMentions()", async () => {
    let value = ""
    let cursor = 0
    const setInputValue = (v: string) => {
      value = v
    }
    const props = () =>
      makeProps({ inputValue: value, cursorPosition: cursor, setInputValue })

    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: props(),
    })

    // Trigger, then pick "everyone".
    value = "@"
    cursor = 1
    rerender(props())
    act(() =>
      result.current.selectCandidate({ kind: "everyone", label: "here" })
    )
    expect(value).toBe("@here ")
    cursor = value.length
    rerender(props())

    // Type a second mention and pick a member.
    value = "@here @Ana"
    cursor = value.length
    rerender(props())
    await waitFor(() =>
      expect(result.current.results.some((r) => r.kind === "user")).toBe(true)
    )
    const member = result.current.results.find((r) => r.kind === "user")!
    act(() => result.current.selectCandidate(member))
    expect(value).toBe("@here @Ana García ")
    cursor = value.length
    rerender(props())

    const payload = result.current.getMentions()
    expect(payload.mentionedEveryone).toBe(true)
    expect(payload.mentions).toEqual([{ id: "ana-g", name: "Ana García" }])
  })

  it("seedMentions rehydrates tracked mentions when editing a message", async () => {
    const { result } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps({
        inputValue: "Hey @Ana García ",
        cursorPosition: 16,
      }),
    })
    act(() =>
      result.current.seedMentions([{ id: "ana-g", name: "Ana García" }])
    )
    // The seeded mention survives (its `@name ` token is present in the body)
    // and resolves through getMentions, ready to re-send on save.
    await waitFor(() =>
      expect(result.current.getMentions()).toEqual({
        mentions: [{ id: "ana-g", name: "Ana García" }],
        mentionedEveryone: false,
      })
    )
  })
})

// Raúl's report: editing a message that has a mention loses it. A mention is
// re-derived from the text by name on every change and survives only while
// `@Name` is followed by whitespace — which a saved body often isn't.
describe("useMentions — a mention survives an edit", () => {
  const ANA: MentionEntry = { id: "ana-g", name: "Ana García" }
  const NFD_ANA: MentionEntry = { id: "ana-nfd", name: "Ana Garci\u0301a" }

  const withValue = (body: string, over: Partial<Props> = {}) =>
    makeProps({ inputValue: body, cursorPosition: body.length, ...over })

  /**
   * Reproduces `loadEditDraft`: seed the message's mentions, then hand the
   * composer its body. The body arriving is what re-validates the seeded
   * entries, so the order matters.
   */
  const openForEditing = (
    body: string,
    seeded: MentionEntry[],
    over: Partial<Props> = {}
  ) => {
    const harness = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps(over),
    })
    act(() => harness.result.current.seedMentions(seeded, body))
    harness.rerender(withValue(body, over))
    return harness
  }

  it("keeps a mention that ends the message", async () => {
    const { result } = openForEditing("Ping @Ana García", [ANA])
    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([ANA])
    )
  })

  it("keeps a mention followed by punctuation", async () => {
    const { result } = openForEditing("Thanks @Ana García, all set", [ANA])
    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([ANA])
    )
  })

  it("keeps a mention while the user edits the text around it", async () => {
    let value = "Hola @Ana García, ¿vienes?"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const { result, rerender } = openForEditing(value, [ANA], { setInputValue })

    value = "Hola @Ana García, ¿vienes hoy?"
    rerender(withValue(value, { setInputValue }))

    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([ANA])
    )
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("keeps text inserted immediately before a mention outside its highlight", async () => {
    let value = "Hola @Ana García, ¿vienes?"
    const { result, rerender } = openForEditing(value, [ANA])

    value = "Hola x@Ana García, ¿vienes?"
    rerender(withValue(value))

    await waitFor(() => expect(result.current.mentions[0]?.start).toBe(6))
    const mention = result.current.mentions[0]!
    expect(value.slice(mention.start, mentionEnd(mention))).toBe("@Ana García")
  })

  it("highlights the full body spelling when its canonical length differs", async () => {
    const body = "Hola @Ana Garci\u0301a, ¿vienes?"
    const { result } = openForEditing(body, [ANA])

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    const mention = result.current.mentions[0]!
    expect(body.slice(mention.start, mentionEnd(mention))).toBe(
      `@${NFD_ANA.name}`
    )
  })

  it("uses the composed body span for a decomposed metadata name", async () => {
    const body = "Hola @Ana García, ¿vienes?"
    const { result } = openForEditing(body, [NFD_ANA])

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    const mention = result.current.mentions[0]!
    expect(body.slice(mention.start, mentionEnd(mention))).toBe("@Ana García")
  })

  it("updates an existing anchor when reseeding changes only its body length", () => {
    const { result } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps(),
    })
    const decomposedBody = "Hola @Ana Garci\u0301a"
    const composedBody = "Hola @Ana García"

    act(() => result.current.seedMentions([ANA], decomposedBody))
    expect(result.current.mentions[0]?.length).toBe("@Ana Garci\u0301a".length)

    act(() => result.current.seedMentions([ANA], composedBody))
    expect(result.current.mentions[0]?.length).toBe("@Ana García".length)
  })

  it("preserves distinct canonical identities in the outgoing payload", async () => {
    const nfc: MentionEntry = { id: "nfc", name: "Garc\u00EDa" }
    const nfd: MentionEntry = { id: "nfd", name: "Garci\u0301a" }
    const { result } = openForEditing(`@${nfd.name} and @${nfc.name}`, [
      nfc,
      nfd,
    ])

    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([nfd, nfc])
    )
  })

  it("keeps a cross-spelling mention when punctuation immediately after it changes", async () => {
    let value = "Hola @Ana García, ¿vienes?"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const { result, rerender } = openForEditing(value, [NFD_ANA], {
      setInputValue,
    })

    value = "Hola @Ana García! ¿vienes?"
    rerender(withValue(value, { setInputValue }))

    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([NFD_ANA])
    )
    expect(setInputValue).not.toHaveBeenCalled()
  })

  it("removes a cross-spelling mention when its final character changes", async () => {
    let value = "Hola @Ana Garci\u0301a, ¿vienes?"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const { result, rerender } = openForEditing(value, [ANA], { setInputValue })

    value = "Hola @Ana Garci\u0301o, ¿vienes?"
    rerender(
      makeProps({ inputValue: value, cursorPosition: 16, setInputValue })
    )

    await waitFor(() =>
      expect(setInputValue).toHaveBeenCalledWith("Hola , ¿vienes?")
    )
    expect(result.current.getMentions().mentions).toEqual([])
  })

  it("anchors and removes a composed Hangul name in a jamo body", async () => {
    const hangul: MentionEntry = { id: "hangul", name: "\uAC01" }
    let value = "Ping @\u1100\u1161\u11A8, now"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const { result, rerender } = openForEditing(value, [hangul], {
      setInputValue,
    })

    await waitFor(() => expect(result.current.mentions).toHaveLength(1))
    const mention = result.current.mentions[0]!
    expect(value.slice(mention.start, mentionEnd(mention))).toBe(
      "@\u1100\u1161\u11A8"
    )

    value = "Ping @\u1100\u1165\u11A8, now"
    rerender(makeProps({ inputValue: value, cursorPosition: 7, setInputValue }))

    await waitFor(() =>
      expect(setInputValue).toHaveBeenCalledWith("Ping , now")
    )
    expect(result.current.getMentions().mentions).toEqual([])
  })

  it("removes the whole mention when the user edits inside it", async () => {
    let value = "Hola @Ana García, ¿vienes?"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const { result, rerender } = openForEditing(value, [ANA], { setInputValue })

    // Backspace the "c" of "García" — the caret lands at 13.
    value = "Hola @Ana Garía, ¿vienes?"
    rerender(
      makeProps({ inputValue: value, cursorPosition: 13, setInputValue })
    )

    await waitFor(() =>
      expect(setInputValue).toHaveBeenCalledWith("Hola , ¿vienes?")
    )
    expect(result.current.getMentions().mentions).toEqual([])
  })

  it("leaves the caret where the mention was, not at the end", async () => {
    // A multi-line draft is where this shows: dropping the caret at the end
    // moves it to another line entirely.
    let value = "Hola @Ana García, ¿vienes?\nY mañana también\nGracias"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const setCursorPosition = vi.fn()
    const { rerender } = openForEditing(value, [ANA], {
      setInputValue,
      setCursorPosition,
    })

    // Backspace the "c" of "García" — the caret lands at 13.
    value = "Hola @Ana Garía, ¿vienes?\nY mañana también\nGracias"
    rerender(
      makeProps({
        inputValue: value,
        cursorPosition: 13,
        setInputValue,
        setCursorPosition,
      })
    )

    await waitFor(() =>
      expect(setInputValue).toHaveBeenCalledWith(
        "Hola , ¿vienes?\nY mañana también\nGracias"
      )
    )
    // 5 is where the "@" was; the end of that text is 40.
    expect(setCursorPosition).toHaveBeenCalledWith(5)
  })

  it("tracks two people who share a display name independently", async () => {
    const ANA_TWO: MentionEntry = { id: "ana-p", name: "Ana García" }
    let value = "@Ana García and @Ana García, both please"
    const setInputValue = vi.fn((next: string) => {
      value = next
    })
    const { result, rerender } = openForEditing(value, [ANA, ANA_TWO], {
      setInputValue,
    })
    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([ANA, ANA_TWO])
    )

    // Delete the second occurrence: only the second id may go.
    value = "@Ana García and , both please"
    rerender(
      makeProps({ inputValue: value, cursorPosition: 16, setInputValue })
    )

    await waitFor(() =>
      expect(result.current.getMentions().mentions).toEqual([ANA])
    )
  })
})
