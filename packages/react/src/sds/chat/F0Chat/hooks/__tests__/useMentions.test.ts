import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { type MentionEntry, useMentions } from "../useMentions"

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
