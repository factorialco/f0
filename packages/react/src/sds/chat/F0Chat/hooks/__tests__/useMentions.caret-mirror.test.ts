import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { useMentions } from "../useMentions"

const MEMBERS: F0ChatUser[] = [
  { id: "ana-g", name: "Ana García" },
  { id: "bruno", name: "Bruno Martínez" },
]

type Props = Parameters<typeof useMentions>[0]

/** The jsdom stub the suite installs; restored by name, never unstubbed. */
const setupGetComputedStyle = globalThis.getComputedStyle

const isMirror = (node: Node): node is HTMLDivElement =>
  node instanceof HTMLElement &&
  node.tagName === "DIV" &&
  node.style.visibility === "hidden" &&
  node.style.whiteSpace === "pre-wrap"

const mirrorsInBody = (): HTMLDivElement[] =>
  [...document.body.children].filter(isMirror)

describe("useMentions — caret mirror cost", () => {
  let textarea: HTMLTextAreaElement
  let textareaRef: { current: HTMLTextAreaElement | null }
  let computedStyleCalls: number
  let appendedToBody: Node[]
  let spanReads: number

  const makeProps = (over: Partial<Props> = {}): Props => ({
    inputValue: "",
    setInputValue: () => {},
    cursorPosition: 0,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef,
    enabled: true,
    searchMembers: (query: string) =>
      Promise.resolve(
        MEMBERS.filter((member) =>
          member.name.toLowerCase().includes(query.toLowerCase())
        )
      ),
    everyoneLabel: "here",
    ...over,
  })

  beforeEach(() => {
    vi.useFakeTimers()
    textarea = document.createElement("textarea")
    document.body.appendChild(textarea)
    textareaRef = { current: textarea }

    computedStyleCalls = 0
    vi.stubGlobal("getComputedStyle", (element: Element) => {
      computedStyleCalls++
      return setupGetComputedStyle(element)
    })

    appendedToBody = []
    vi.spyOn(document.body, "appendChild").mockImplementation(function (
      this: HTMLElement,
      node: Node
    ) {
      appendedToBody.push(node)
      return HTMLElement.prototype.appendChild.call(this, node) as Node
    } as typeof document.body.appendChild)

    spanReads = 0
    vi.spyOn(HTMLElement.prototype, "offsetLeft", "get").mockImplementation(
      function (this: HTMLElement) {
        if (this.tagName !== "SPAN") return 0
        spanReads++
        return this.parentElement?.firstChild?.textContent?.length ?? 0
      }
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.stubGlobal("getComputedStyle", setupGetComputedStyle)
    vi.useRealTimers()
    textarea.remove()
    for (const mirror of mirrorsInBody()) mirror.remove()
  })

  /** Type `text`, keeping the real textarea in step — the mirror reads it. */
  const type = (rerender: (props: Props) => void, text: string) => {
    textarea.value = text
    rerender(makeProps({ inputValue: text, cursorPosition: text.length }))
  }

  const mount = () =>
    renderHook((props: Props) => useMentions(props), {
      initialProps: makeProps(),
    })

  it("copies the textarea's computed styles once per popover open", () => {
    const { rerender } = mount()

    type(rerender, "Hola @")
    expect(computedStyleCalls).toBeGreaterThan(0)

    // The `@` cannot move while its own trigger is live: everything typed from
    // here lands after it, so the mirror measured at the open still answers.
    computedStyleCalls = 0
    appendedToBody = []
    for (const text of ["Hola @A", "Hola @An", "Hola @Ana", "Hola @Anas"]) {
      type(rerender, text)
    }

    expect(computedStyleCalls).toBe(0)
    expect(appendedToBody.filter(isMirror)).toHaveLength(0)
  })

  it("keeps exactly one measuring node in the document while open", () => {
    const { rerender } = mount()

    type(rerender, "@")
    type(rerender, "@A")
    type(rerender, "@An")

    expect(mirrorsInBody()).toHaveLength(1)
  })

  it("still measures the caret on every keystroke", () => {
    const { result, rerender } = mount()

    type(rerender, "Hola @")
    const [mirror] = mirrorsInBody()
    expect(mirror).toBeDefined()

    spanReads = 0
    type(rerender, "Hola @An")

    // The mirror carries the current text, split at the `@` it measures.
    expect(mirror?.firstChild?.textContent).toBe("Hola ")
    expect(mirror?.lastChild?.textContent).toBe("@An")
    expect(spanReads).toBeGreaterThan(0)
    expect(result.current.popoverPosition).toEqual({ left: 5, bottom: 0 })
  })

  it("measures the new `@` when the popover reopens somewhere else", () => {
    const { result, rerender } = mount()

    type(rerender, "Hola @An")
    expect(result.current.popoverPosition).toEqual({ left: 5, bottom: 0 })

    act(() => result.current.close())
    type(rerender, "Hey @Ana")

    expect(result.current.popoverPosition).toEqual({ left: 4, bottom: 0 })
  })

  it("re-measures when the textarea's width changes under it", () => {
    let width = 320
    Object.defineProperty(textarea, "clientWidth", {
      configurable: true,
      get: () => width,
    })
    const { rerender } = mount()

    type(rerender, "Hola @")
    computedStyleCalls = 0

    // A narrower composer wraps the text differently, so the copy of it is no
    // longer a copy — width is the one property the mirror really carries.
    width = 180
    type(rerender, "Hola @A")

    expect(computedStyleCalls).toBeGreaterThan(0)
    expect(mirrorsInBody()).toHaveLength(1)
  })

  it("takes the measuring node out of the document when the popover closes", () => {
    const { result, rerender } = mount()

    type(rerender, "@An")
    expect(mirrorsInBody()).toHaveLength(1)

    act(() => result.current.close())

    expect(mirrorsInBody()).toHaveLength(0)
  })

  it("takes the measuring node out of the document on unmount", () => {
    const { rerender, unmount } = mount()

    type(rerender, "@An")
    expect(mirrorsInBody()).toHaveLength(1)

    unmount()

    expect(mirrorsInBody()).toHaveLength(0)
  })
})
