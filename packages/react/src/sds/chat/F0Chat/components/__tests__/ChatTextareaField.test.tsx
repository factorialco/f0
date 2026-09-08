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

  it("paints emoji as plain text in the overlay when active", () => {
    const segments: HighlightSegment[] = [{ type: "text", text: "hi 😀" }]
    const { container } = zeroRender(
      <ChatTextareaField
        {...baseProps()}
        value="hi 😀"
        highlightSegments={segments}
        hasOverlay
      />
    )
    // No image, and therefore none of the invisible-twin scaffolding that used
    // to reserve its width: overlay and textarea lay out the same glyph.
    expect(container.querySelector("img")).toBeNull()
    expect(
      container.querySelector('[aria-hidden="true"]')?.textContent
    ).toContain("hi 😀")
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

// Anything heavier or lighter than the inherited 400. `font-normal` is allowed:
// it matches what the textarea already lays out.
const OFF_WEIGHT =
  /\bfont-(thin|extralight|light|medium|semibold|bold|extrabold|black)\b/

describe("ChatTextareaField overlay/textarea metric parity", () => {
  // The textarea supplies the caret, the overlay supplies the glyphs, and a
  // `<textarea>` lays its ENTIRE run out at a single weight — there is no way
  // to make it match a per-range weight. So any weight the overlay applies to
  // part of the text paints wider than the transparent glyphs the caret is
  // positioned from, and every character from there on sits off its boundary.
  // Measured at 14px Inter: `font-medium` on the chip cost ~0.1px per mention
  // character, plateauing at 1.25px (8.9% of an em) across the rest of the line.
  const withMention = (tone: "other" | "self") => {
    const segments: HighlightSegment[] = [
      { type: "text", text: "Hi " },
      { type: "mention", text: "@Nora Vidal", tone },
      { type: "text", text: " and then a tail" },
    ]
    return zeroRender(
      <ChatTextareaField
        {...baseProps()}
        value="Hi @Nora Vidal and then a tail"
        highlightSegments={segments}
        hasOverlay
      />
    )
  }

  // Both tones render the same way now — colour, no tint. What the test is
  // for is the WEIGHT: emphasis here has to come from colour, because a
  // heavier overlay lays its glyphs out wider than the letters underneath.
  it.each(["other", "self"] as const)(
    "gives a %s mention no weight of its own",
    (tone) => {
      const { container } = withMention(tone)
      const mention = container.querySelector(
        '[class*="text-f1-foreground-secondary"]'
      )
      expect(mention).not.toBeNull()
      expect(mention?.className).not.toMatch(OFF_WEIGHT)
    }
  )

  it("leaves the textarea itself on the inherited weight", () => {
    const { container } = withMention("other")
    expect(container.querySelector("textarea")?.className).not.toMatch(
      OFF_WEIGHT
    )
  })
})
