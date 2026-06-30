import { render } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { EmojiPicker } from "./EmojiPicker"

const realCreateElement = document.createElement.bind(document)

type UpdatableElement = HTMLElement & { update?: (props: object) => void }

afterEach(() => {
  vi.restoreAllMocks()
})

describe("EmojiPicker", () => {
  it("mounts the <em-emoji-picker> element via createElement, never `new`", () => {
    const createElementSpy = vi.spyOn(document, "createElement")

    const { container } = render(<EmojiPicker data={{}} />)

    expect(createElementSpy).toHaveBeenCalledWith("em-emoji-picker")
    expect(container.querySelector("em-emoji-picker")).not.toBeNull()
  })

  it("forwards props to the element through update()", () => {
    const update = vi.fn()
    const onEmojiSelect = vi.fn()
    vi.spyOn(document, "createElement").mockImplementation((tag: string) => {
      const el = realCreateElement(tag)
      if (tag === "em-emoji-picker") {
        const updatable = el as UpdatableElement
        updatable.update = update
      }
      return el
    })

    render(
      <EmojiPicker
        data={{ a: 1 }}
        onEmojiSelect={onEmojiSelect}
        set="twitter"
      />
    )

    expect(update).toHaveBeenCalled()
    const lastArgs = update.mock.calls.at(-1)?.[0]
    expect(lastArgs).toMatchObject({ set: "twitter", onEmojiSelect })
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
