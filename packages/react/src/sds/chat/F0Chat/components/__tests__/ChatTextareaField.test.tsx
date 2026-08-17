import { createRef } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { type HighlightSegment } from "../../hooks/highlight-utils"
import { ChatTextareaField } from "../ChatTextareaField"

const baseProps = () => ({
  textareaRef: createRef<HTMLTextAreaElement>(),
  highlightRef: createRef<HTMLDivElement>(),
  placeholder: "Message",
  accessibleLabel: "Write a message",
  onChange: vi.fn(),
  onKeyDown: vi.fn(),
  onPaste: vi.fn(),
  onCursorUpdate: vi.fn(),
  onScroll: vi.fn(),
  isAutocompleteOpen: false,
})

describe("ChatTextareaField emoji overlay", () => {
  it("exposes the emoji list as an accessible combobox", () => {
    zeroRender(
      <ChatTextareaField
        {...baseProps()}
        value=":sm"
        highlightSegments={[{ type: "text", text: ":sm" }]}
        hasOverlay={false}
        isAutocompleteOpen
        autocompleteListboxId="emoji-list"
        activeAutocompleteOptionId="emoji-smile"
      />
    )

    const composer = document.querySelector('[role="combobox"]')
    expect(composer).toHaveAccessibleName("Write a message")
    expect(composer).toHaveAttribute("aria-expanded", "true")
    expect(composer).toHaveAttribute("aria-controls", "emoji-list")
    expect(composer).toHaveAttribute("aria-activedescendant", "emoji-smile")
  })

  it("paints emoji as twemoji in the overlay when active", () => {
    const segments: HighlightSegment[] = [{ type: "text", text: "hi 😀" }]
    const { container } = zeroRender(
      <ChatTextareaField
        {...baseProps()}
        value="hi 😀"
        highlightSegments={segments}
        hasOverlay
      />
    )
    const img = container.querySelector("img")
    expect(img?.getAttribute("src")).toContain("twemoji")
    // The textarea text is transparent while the overlay paints it.
    const textarea = container.querySelector("textarea")
    expect(textarea?.className).toContain("text-transparent")
  })

  it("keeps the native textarea (no overlay) for plain text", () => {
    const segments: HighlightSegment[] = [{ type: "text", text: "hello" }]
    const { container } = zeroRender(
      <ChatTextareaField
        {...baseProps()}
        value="hello"
        highlightSegments={segments}
        hasOverlay={false}
      />
    )
    // No overlay image, and the textarea shows its own (native) text.
    expect(container.querySelector("img")).toBeNull()
    const textarea = container.querySelector("textarea")
    expect(textarea?.className).toContain("text-f1-foreground")
    expect(textarea?.className).not.toContain("text-transparent")
  })
})
