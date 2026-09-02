import { type RefObject } from "react"

import { cn } from "@/lib/utils"

import { type HighlightSegment } from "../hooks/highlight-utils"

type ChatTextareaFieldProps = {
  textareaRef: RefObject<HTMLTextAreaElement>
  highlightRef: RefObject<HTMLDivElement>
  value: string
  placeholder: string
  accessibleLabel: string
  onChange: (value: string, cursorPos: number) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onPaste: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onCursorUpdate: () => void
  onScroll: () => void
  highlightSegments: HighlightSegment[]
  isAutocompleteOpen: boolean
  autocompleteListboxId?: string
  activeAutocompleteOptionId?: string
  /** When true, a typed `@mention` / ghost completion is shown via the overlay
   * and the textarea text is hidden (caret stays visible). */
  hasOverlay: boolean
}

// Shared text-box metrics — applied identically to the invisible sizer, the
// highlight overlay and the textarea so caret and highlight align to the pixel.
//
// `text-base` is load-bearing, not decoration: it pins letter-spacing on all
// three layers. `body` sets -0.005em (packages/core/base.css), which the two
// divs inherit but a `<textarea>` never does — the UA stylesheet declares
// `letter-spacing: normal` directly on form controls, and a declaration on the
// element beats an inherited value. Leave it unpinned and the overlay runs
// ~0.07px/char tighter than the textarea: the caret drifts away from the
// painted glyphs and the two layers wrap at different characters. (This read
// `text-md` before, which is not in F0's font scale and emitted no CSS at all.)
const BOX = "whitespace-pre-wrap break-words p-3 text-base leading-5"
const HEIGHT = "min-h-[44px] max-h-[140px]"

/**
 * Auto-growing textarea with a mention highlight overlay — the comms twin of
 * the AI chat composer's TextareaField. An invisible sizer drives the height; a
 * pinned overlay paints `@mention` (bold) and ghost-completion (faded) segments.
 */
export const ChatTextareaField = ({
  textareaRef,
  highlightRef,
  value,
  placeholder,
  accessibleLabel,
  onChange,
  onKeyDown,
  onPaste,
  onFocus,
  onBlur,
  onCursorUpdate,
  onScroll,
  highlightSegments,
  isAutocompleteOpen,
  autocompleteListboxId,
  activeAutocompleteOptionId,
  hasOverlay,
}: ChatTextareaFieldProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      {/* Invisible sizer: drives the row height from the content. */}
      <div
        aria-hidden
        className={cn(
          "col-start-1 row-start-1",
          "pointer-events-none invisible",
          BOX,
          HEIGHT
        )}
      >
        {value.endsWith("\n") ? value + "_" : value || " "}
      </div>

      {hasOverlay && (
        <div
          ref={highlightRef}
          aria-hidden
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none text-f1-foreground",
            BOX,
            HEIGHT,
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          )}
        >
          {/* Plain text. The overlay and the textarea beneath it now lay out
              the same glyphs with the same font, so emoji line up on their own
              — the invisible-twin trick that used to reserve each twemoji
              image's width is gone with it. */}
          {highlightSegments.map((seg, i) =>
            seg.type === "mention" ? (
              // Same colour pattern as the bubble: you / @here amber, others
              // info. Tone and background carry the whole distinction: no
              // padding, and — load-bearing — no weight change. A `<textarea>`
              // lays its entire run out at one weight, so a heavier mention
              // here paints wider than the transparent glyphs the caret is
              // positioned from, and every character from the mention onward
              // sits off its boundary. Measured at 14px Inter, `font-medium`
              // cost ~0.1px per mention character, plateauing at 1.25px (8.9%
              // of an em) across the rest of the line — enough to park the
              // caret inside a glyph instead of between two.
              <span
                key={i}
                className={cn(
                  "rounded-xs",
                  seg.tone === "self" || seg.tone === "everyone"
                    ? "bg-f1-background-warning text-f1-foreground-warning"
                    : "bg-f1-background-info text-f1-foreground-info"
                )}
              >
                {seg.text}
              </span>
            ) : seg.type === "ghost" ? (
              <span key={i} className="text-f1-foreground-secondary opacity-50">
                {seg.text}
              </span>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </div>
      )}

      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        placeholder={placeholder}
        aria-label={accessibleLabel}
        onChange={(e) => onChange(e.target.value, e.target.selectionStart ?? 0)}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onCursorUpdate}
        onClick={onCursorUpdate}
        onSelect={onCursorUpdate}
        onScroll={onScroll}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isAutocompleteOpen}
        aria-controls={autocompleteListboxId}
        aria-activedescendant={activeAutocompleteOptionId}
        className={cn(
          "col-start-1 row-start-1",
          "w-full resize-none bg-transparent outline-none",
          "placeholder:text-f1-foreground-secondary",
          BOX,
          HEIGHT,
          "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          hasOverlay
            ? "text-transparent caret-f1-foreground"
            : "text-f1-foreground"
        )}
      />
    </div>
  )
}
