import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const GUTTER = ["px-4", "pb-3", "pt-2"]

/** The composer's root — the rendered element that owns the gutter. */
const renderComposer = (padding?: "default" | "none") => {
  const { container } = render(
    <F0AiChatTextArea onSubmit={vi.fn()} padding={padding} />
  )
  return container.firstElementChild as HTMLElement
}

describe("F0AiChatTextArea padding", () => {
  it("applies the chat gutter by default", () => {
    expect(renderComposer()).toHaveClass(...GUTTER)
  })

  it('drops the gutter with padding="none"', () => {
    const root = renderComposer("none")

    GUTTER.forEach((cls) => expect(root).not.toHaveClass(cls))
    // The stack itself is untouched — only the outer inset goes away.
    expect(root).toHaveClass("flex", "flex-col", "items-center", "gap-2")
  })
})
