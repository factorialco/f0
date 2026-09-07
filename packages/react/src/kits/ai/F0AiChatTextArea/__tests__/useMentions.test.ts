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

/** Drives the hook the way the composer does: one controlled value plus caret. */
const mountComposer = (people: PersonProfile[]) => {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)

  const setInputValue = vi.fn<(next: string) => void>()
  const setCursorPosition = vi.fn<(next: number) => void>()
  const searchPersons = vi.fn((query: string) =>
    Promise.resolve(
      people.filter((person) =>
        fullName(person).toLowerCase().includes(query.toLowerCase())
      )
    )
  )

  const props = (value: string, caret = value.length): Props => ({
    inputValue: value,
    setInputValue,
    cursorPosition: caret,
    setCursorPosition,
    searchPersons,
    textareaRef: { current: textarea },
  })

  const harness = renderHook((next: Props) => useMentions(next), {
    initialProps: props(""),
  })

  return {
    ...harness,
    setInputValue,
    setCursorPosition,
    /** Hand the hook a new composer value, as the textarea's onChange would. */
    type: (value: string, caret?: number) =>
      harness.rerender(props(value, caret)),
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
