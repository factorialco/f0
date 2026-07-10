import { render } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { EmojiPicker } from "./EmojiPicker"

const realCreateElement = document.createElement.bind(document)

type PickerElement = HTMLElement & {
  props?: { onEmojiSelect?: unknown; set?: unknown }
  update?: (props: object) => void
}

// Stand-in for the real <em-emoji-picker>. emoji-mart's real element kicks off
// an async, network-bound init on append that can't complete in jsdom; these
// tests only assert how the wrapper wires props onto the element, so a plain
// element avoids that noise.
function stubPickerElement(): PickerElement {
  const el = realCreateElement("div") as PickerElement
  el.update = vi.fn()
  return el
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe("EmojiPicker", () => {
  it("mounts the element via createElement, never `new`", () => {
    const stub = stubPickerElement()
    const createElementSpy = vi
      .spyOn(document, "createElement")
      .mockImplementation((tag: string) =>
        tag === "em-emoji-picker" ? stub : realCreateElement(tag)
      )

    const { container } = render(<EmojiPicker data={{}} />)

    expect(createElementSpy).toHaveBeenCalledWith("em-emoji-picker")
    expect(container.contains(stub)).toBe(true)
  })

  it("seeds props onto the element before appending so callbacks are wired", () => {
    // emoji-mart reads `this.props` in connectedCallback (fired on append) to
    // build the picker; a post-append update() is dropped while its internal
    // component ref doesn't exist yet. So props — crucially onEmojiSelect — must
    // be present on the element *before* it is appended, otherwise selecting an
    // emoji does nothing.
    const onEmojiSelect = vi.fn()
    const stub = stubPickerElement()
    let propsAtAppendTime: PickerElement["props"]

    const originalAppend = HTMLElement.prototype.appendChild
    vi.spyOn(HTMLElement.prototype, "appendChild").mockImplementation(function (
      this: HTMLElement,
      node: Node
    ) {
      if (node === stub) propsAtAppendTime = stub.props
      return originalAppend.call(this, node) as Node
    })
    vi.spyOn(document, "createElement").mockImplementation((tag: string) =>
      tag === "em-emoji-picker" ? stub : realCreateElement(tag)
    )

    render(
      <EmojiPicker
        data={{ a: 1 }}
        onEmojiSelect={onEmojiSelect}
        set="twitter"
      />
    )

    expect(stub.props).toMatchObject({ set: "twitter", onEmojiSelect })
    // The seed must happen before the append, not after.
    expect(propsAtAppendTime).toMatchObject({ set: "twitter", onEmojiSelect })
  })

  it("degrades to nothing instead of crashing when the element fails to construct", () => {
    // Constructing the element throws "Illegal constructor" (the duplicated-class
    // failure mode). The render error boundary must contain it so the
    // surrounding UI keeps rendering.
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      if (tag === "em-emoji-picker") {
        throw new TypeError(
          "Failed to construct 'HTMLElement': Illegal constructor"
        )
      }
      return realCreateElement(tag)
    })
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})

    expect(() => render(<EmojiPicker data={{}} />)).not.toThrow()
    expect(consoleError).toHaveBeenCalled()
  })
})
