import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { type PersonProfile } from "../../F0AiChat/types"
import { useMentions } from "../useMentions"

const ANA: PersonProfile = { id: "ana-g", firstName: "Ana", lastName: "García" }
// Same display name, different person — the case a name-based match cannot tell
// apart.
const ANA_TWIN: PersonProfile = {
  id: "ana-p",
  firstName: "Ana",
  lastName: "García",
}
const BRUNO: PersonProfile = {
  id: "bruno",
  firstName: "Bruno",
  lastName: "Martínez",
}

type Props = Parameters<typeof useMentions>[0]

const fullName = (person: PersonProfile): string =>
  `${person.firstName} ${person.lastName}`.trim()

const refFor = (person: PersonProfile): string =>
  `<entity-ref type="person" id="${person.id}">${fullName(person)}</entity-ref>`

/**
 * Drives the hook the way the composer does: one controlled value plus caret,
 * with the hook's own writes fed back through `flush` so a rewrite it makes can
 * be observed settling instead of only being recorded.
 */
const mountComposer = (people: PersonProfile[]) => {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)

  let value = ""
  let caret = 0
  const setInputValue = vi.fn<(next: string) => void>((next) => {
    value = next
  })
  const setCursorPosition = vi.fn<(next: number) => void>((next) => {
    caret = next
  })
  const searchPersons = vi.fn((query: string) =>
    Promise.resolve(
      people.filter((person) =>
        fullName(person).toLowerCase().includes(query.trim().toLowerCase())
      )
    )
  )

  const props = (): Props => ({
    inputValue: value,
    setInputValue,
    cursorPosition: caret,
    setCursorPosition,
    searchPersons,
    textareaRef: { current: textarea },
  })

  const harness = renderHook((next: Props) => useMentions(next), {
    initialProps: props(),
  })

  return {
    ...harness,
    setInputValue,
    setCursorPosition,
    textarea,
    /** Hand the hook a new composer value, as the textarea's onChange would. */
    type: (next: string, at?: number) => {
      value = next
      caret = at ?? next.length
      textarea.value = value
      harness.rerender(props())
    },
    /** Re-render with whatever the hook wrote back, as the composer would. */
    flush: () => {
      textarea.value = value
      harness.rerender(props())
    },
  }
}

type Composer = ReturnType<typeof mountComposer>

/** Wait for the popover, take the row at `index`, and apply the text it writes. */
const pick = async (composer: Composer, index: number, expected: string) => {
  await waitFor(() =>
    expect(composer.result.current.results.length).toBeGreaterThan(index)
  )
  const person = composer.result.current.results[index]!
  act(() => composer.result.current.selectPerson(person))
  expect(composer.setInputValue).toHaveBeenLastCalledWith(expected)
  composer.type(expected)
}

// A tracked mention used to be re-derived from the text on every change and
// kept only while `@Name` was followed by a space, a newline or a tab. What came
// after the name therefore decided whether the mention existed at all.
describe("useMentions — a mention is a token, not a substring", () => {
  it("keeps a mention that is followed by a comma", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")

    // The user replaces the inserted trailing space with a comma.
    composer.type("Hola @Ana García,")

    expect(composer.result.current.mentions).toHaveLength(1)
    expect(composer.result.current.transformMentions()).toBe(
      `Hola ${refFor(ANA)},`
    )
  })

  it("keeps a mention that ends the message", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")

    // The user deletes the inserted trailing space: nothing follows the name.
    composer.type("Hola @Ana García")

    expect(composer.result.current.mentions).toHaveLength(1)
    expect(composer.result.current.transformMentions()).toBe(
      `Hola ${refFor(ANA)}`
    )
  })

  it("survives an edit made elsewhere in the text", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")
    composer.type("Hola @Ana García, ¿vienes?")
    composer.setInputValue.mockClear()

    // Typing at the very front shifts the mention seven characters right.
    composer.type("Buenas Hola @Ana García, ¿vienes?", 7)

    expect(composer.result.current.mentions).toHaveLength(1)
    expect(composer.setInputValue).not.toHaveBeenCalled()
    expect(composer.result.current.transformMentions()).toBe(
      `Buenas Hola ${refFor(ANA)}, ¿vienes?`
    )
  })

  it("removes the whole mention when an edit lands inside it", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")
    composer.type("Hola @Ana García, gracias")

    // Backspace the "c" of "García": the caret lands at 13.
    composer.type("Hola @Ana Garía, gracias", 13)

    await waitFor(() =>
      expect(composer.setInputValue).toHaveBeenLastCalledWith("Hola , gracias")
    )
    expect(composer.setCursorPosition).toHaveBeenLastCalledWith(5)
    expect(composer.result.current.mentions).toHaveLength(0)

    // Applying the hook's own rewrite settles: no second erase, and no
    // half-typed name left for the popover to reopen on.
    composer.setInputValue.mockClear()
    composer.flush()
    expect(composer.setInputValue).not.toHaveBeenCalled()
    expect(composer.result.current.isOpen).toBe(false)
    // The caret is where the mention was, in the textarea and not only in the
    // component's state.
    expect(composer.textarea.selectionStart).toBe(5)
  })

  it("keeps the tag on the name when the message starts with whitespace", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("  @Ana")
    await pick(composer, 0, "  @Ana García ")
    composer.type("  @Ana García,")

    // The anchors index the raw value: whoever trims has to trim afterwards.
    expect(composer.result.current.transformMentions()).toBe(
      `  ${refFor(ANA)},`
    )
  })

  it("slides the anchor when the user types immediately before a mention", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("@Ana")
    await pick(composer, 0, "@Ana García ")
    composer.setInputValue.mockClear()

    // Caret at 0, type "H". The insertion point and the anchor are the same
    // index: the mention moves, it is not edited.
    composer.type("H@Ana García ", 1)

    expect(composer.setInputValue).not.toHaveBeenCalled()
    expect(composer.result.current.mentions).toEqual([
      { id: "ana-g", name: "Ana García", start: 1 },
    ])
    expect(composer.result.current.transformMentions()).toBe(`H${refFor(ANA)} `)
    // The trigger sits on a resolved mention, so the popover stays shut.
    expect(composer.result.current.isOpen).toBe(false)
  })

  it("keeps the mention when the user types @ in front of it", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")
    composer.setInputValue.mockClear()

    // Caret at 5, type "@" to start a second mention in front of the first.
    // The keystroke repeats the character it lands on, which is the one shape
    // of insertion that can also be read as landing inside the token.
    composer.type("Hola @@Ana García ", 6)

    expect(composer.setInputValue).not.toHaveBeenCalled()
    expect(composer.result.current.mentions).toEqual([
      { id: "ana-g", name: "Ana García", start: 6 },
    ])
    expect(composer.result.current.transformMentions()).toBe(
      `Hola @${refFor(ANA)} `
    )
    // The new trigger is a trigger: the popover opens on it, not on the
    // resolved mention behind it.
    expect(composer.result.current.isOpen).toBe(true)
  })

  it("keeps the mention when that @ is deleted again", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")
    composer.type("Hola @@Ana García ", 6)
    composer.setInputValue.mockClear()

    composer.type("Hola @Ana García ", 5)

    expect(composer.setInputValue).not.toHaveBeenCalled()
    expect(composer.result.current.mentions).toEqual([
      { id: "ana-g", name: "Ana García", start: 5 },
    ])
    expect(composer.result.current.transformMentions()).toBe(
      `Hola ${refFor(ANA)} `
    )
  })

  it("escapes a name and an id on the way into the tag", async () => {
    const AWKWARD: PersonProfile = {
      id: 'a&b"c',
      firstName: "<Ana>",
      lastName: "García",
    }
    const composer = mountComposer([AWKWARD])
    composer.type("@<Ana")
    await pick(composer, 0, "@<Ana> García ")

    expect(composer.result.current.transformMentions()).toBe(
      '<entity-ref type="person" id="a&amp;b&quot;c">&lt;Ana&gt; García</entity-ref> '
    )
  })

  it("returns focus to the textarea when the pick rewrites nothing", async () => {
    // Typing the name out in full and then picking it writes the same string
    // back, so nothing about the value changes — but the row may have been
    // clicked, and the caret and focus still have to come home.
    const composer = mountComposer([ANA])
    composer.type("@Ana García ")
    await waitFor(() => expect(composer.result.current.results).toHaveLength(1))
    composer.textarea.blur()

    act(() => composer.result.current.selectPerson(ANA))

    expect(composer.setInputValue).toHaveBeenLastCalledWith("@Ana García ")
    expect(document.activeElement).toBe(composer.textarea)
    expect(composer.textarea.selectionStart).toBe(12)
  })

  it("keeps what the user types when a selection replaces the whole mention", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")
    composer.setInputValue.mockClear()

    // Select all, then type. The mention's own text is already gone, so there
    // is nothing left to erase — and erasing anyway eats the keystroke.
    composer.type("x", 1)

    expect(composer.setInputValue).not.toHaveBeenCalled()
    expect(composer.result.current.mentions).toHaveLength(0)
  })

  it("does not reopen the popover on a resolved mention", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("Hola @Ana")
    await pick(composer, 0, "Hola @Ana García ")

    // Caret at the end of the name. The `@` behind it starts a resolved token,
    // so it is not a trigger — the whole reason the anchor, not the character
    // after the name, decides what is a mention.
    composer.type("Hola @Ana García ", 16)

    expect(composer.result.current.isOpen).toBe(false)
  })

  it("anchors a pick where the token lands, not where the trigger was", async () => {
    const composer = mountComposer([ANA])

    // A query that matched nobody is remembered as dismissed, and the effect
    // that remembers it returns without closing the popover or clearing the
    // trigger it recorded.
    composer.type("@zzz")
    await waitFor(() => expect(composer.result.current.isOpen).toBe(true))
    await waitFor(() => expect(composer.result.current.isOpen).toBe(false))

    composer.type("@zzz @Ana")
    await waitFor(() => expect(composer.result.current.results).toHaveLength(1))

    // Back to the dismissed query: the popover stays open on a trigger index
    // the text no longer has.
    composer.type("@zzz", 4)
    act(() => composer.result.current.selectPerson(ANA))
    composer.flush()

    // The `@` lands at 4, so the anchor has to say 4. Saying 5 is the failure
    // this composer anchors mentions to prevent: the tag never reaches the
    // agent, and nothing reports it.
    expect(composer.result.current.mentions).toEqual([
      { id: "ana-g", name: "Ana García", start: 4 },
    ])
    expect(composer.result.current.transformMentions()).toBe(
      `@zzz${refFor(ANA)} `
    )
  })

  it("slides an existing mention when a pick lands in front of it", async () => {
    const composer = mountComposer([ANA, BRUNO])
    composer.type("@Ana")
    await pick(composer, 0, "@Ana García ")

    // A second trigger typed in front of the first mention. Picking there grows
    // the text before it, so its anchor has to move with it — the pick rewrites
    // the value itself, so the reconciler never sees this change.
    composer.type("@Bru@Ana García ", 4)
    await pick(composer, 0, "@Bruno Martínez @Ana García ")

    expect(composer.result.current.mentions).toEqual([
      { id: "bruno", name: "Bruno Martínez", start: 0 },
      { id: "ana-g", name: "Ana García", start: 16 },
    ])
    expect(composer.result.current.transformMentions()).toBe(
      `${refFor(BRUNO)} ${refFor(ANA)} `
    )
  })

  it("anchors two people who share a display name independently", async () => {
    const composer = mountComposer([ANA, ANA_TWIN])
    composer.type("@Ana")
    await pick(composer, 0, "@Ana García ")

    composer.type("@Ana García y @Ana")
    await pick(composer, 1, "@Ana García y @Ana García ")

    expect(composer.result.current.mentions).toHaveLength(2)
    expect(composer.result.current.transformMentions()).toBe(
      `${refFor(ANA)} y ${refFor(ANA_TWIN)} `
    )
  })
})
