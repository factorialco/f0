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
  // Measured at 14px Inter, `font-medium` on the chip costs 1.02px for `@Ana`,
  // 1.48px for `@Ana García` and 1.91px for `@Bruno Martínez` — it grows with
  // the name and accumulates per mention, rather than plateauing.
  //
  // The chip carries that weight anyway, by decision: matching the bubble
  // exactly beat sub-pixel caret accuracy. Everything else in the overlay must
  // still stay on the inherited weight, which is what these tests hold.
  const withMention = () => {
    const segments: HighlightSegment[] = [
      { type: "text", text: "Hi " },
      { type: "mention", text: "@Nora Vidal" },
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

  // Deliberate, and the one place the overlay is allowed a weight of its own:
  // the bubble paints a mention `font-medium`, so the composer does too. Read
  // the note above before removing it — the cost is caret drift, not nothing.
  it("gives the mention chip the bubble's colour and weight, no background", () => {
    const { container } = withMention()
    const chip = container.querySelector(
      '[class*="text-f1-foreground-secondary"]'
    )
    expect(chip?.textContent).toBe("@Nora Vidal")
    expect(chip?.className).toMatch(/\bfont-medium\b/)
    expect(chip?.className).not.toMatch(/\bbg-/)
  })

  it("leaves the ghost completion on the inherited weight", () => {
    const segments: HighlightSegment[] = [
      { type: "text", text: "Hi @Nor" },
      { type: "ghost", text: "a Vidal" },
    ]
    const { container } = zeroRender(
      <ChatTextareaField
        {...baseProps()}
        value="Hi @Nor"
        highlightSegments={segments}
        hasOverlay
      />
    )
    const ghost = container.querySelector('[class*="opacity-50"]')
    expect(ghost).not.toBeNull()
    expect(ghost?.className).not.toMatch(OFF_WEIGHT)
  })

  it("leaves the textarea itself on the inherited weight", () => {
    const { container } = withMention()
    expect(container.querySelector("textarea")?.className).not.toMatch(
      OFF_WEIGHT
    )
  })
})
