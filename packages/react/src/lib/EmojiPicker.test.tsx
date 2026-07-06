import { render } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { EmojiPicker } from "./EmojiPicker"

type PickerProps = {
  ref?: { current: HTMLElement | null }
  [key: string]: unknown
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe("EmojiPicker", () => {
  it("constructs the registered em-emoji-picker class and renders into the ref", () => {
    const constructed: PickerProps[] = []
    class StubPicker {
      constructor(props: PickerProps) {
        constructed.push(props)
        // Mirror emoji-mart: render into the provided ref (light DOM).
        props.ref?.current?.append(document.createElement("span"))
      }
      update() {}
    }
    vi.spyOn(customElements, "get").mockReturnValue(
      StubPicker as unknown as CustomElementConstructor
    )
    const onEmojiSelect = vi.fn()

    const { container } = render(
      <EmojiPicker data={{}} onEmojiSelect={onEmojiSelect} set="twitter" />
    )

    expect(constructed).toHaveLength(1)
    // The picker is built from the registry, with the caller's props + a ref.
    expect(constructed[0]).toMatchObject({ set: "twitter", onEmojiSelect })
    expect(constructed[0].ref?.current).toBe(container.querySelector("div"))
  })

  it("degrades to nothing instead of crashing when construction throws", () => {
    // The FCT-55700 failure mode: constructing the element throws "Illegal
    // constructor". The render error boundary must contain it so the
    // surrounding UI keeps rendering.
    class ThrowingPicker {
      constructor() {
        throw new TypeError(
          "Failed to construct 'HTMLElement': Illegal constructor"
        )
      }
    }
    vi.spyOn(customElements, "get").mockReturnValue(
      ThrowingPicker as unknown as CustomElementConstructor
    )
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})

    expect(() => render(<EmojiPicker data={{}} />)).not.toThrow()
    expect(consoleError).toHaveBeenCalled()
  })
})
