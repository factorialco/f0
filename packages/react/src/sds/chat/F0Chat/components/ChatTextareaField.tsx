import { type RefObject } from "react"

import { cn } from "@/lib/utils"

import { type HighlightSegment } from "../hooks/highlight-utils"
import { renderTextWithEmojis } from "../utils/render-body"

type ChatTextareaFieldProps = {
  textareaRef: RefObject<HTMLTextAreaElement>
  highlightRef: RefObject<HTMLDivElement>
  value: string
  placeholder: string
  onChange: (value: string, cursorPos: number) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onCursorUpdate: () => void
  onScroll: () => void
  highlightSegments: HighlightSegment[]
  /** When true, a typed `@mention` / ghost completion is shown via the overlay
   * and the textarea text is hidden (caret stays visible). */
  hasOverlay: boolean
}

// Shared text-box metrics — applied identically to the invisible sizer, the
// highlight overlay and the textarea so caret and highlight align to the pixel.
const BOX = "whitespace-pre-wrap break-words p-3 text-md leading-5"
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
  onChange,
  onKeyDown,
  onCursorUpdate,
  onScroll,
  highlightSegments,
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
          {highlightSegments.map((seg, i) =>
            seg.type === "mention" ? (
              // Same colour pattern as the bubble: you / @here amber, others
              // info. No padding or weight change so the overlay stays aligned
              // to the (transparent) textarea text character-for-character.
              <span
                key={i}
                className={cn(
                  "rounded-xs font-medium",
                  seg.tone === "self" || seg.tone === "everyone"
                    ? "bg-f1-background-warning text-f1-foreground-warning"
                    : "bg-f1-background-info text-f1-foreground-info"
                )}
              >
                {renderTextWithEmojis(seg.text)}
              </span>
            ) : seg.type === "ghost" ? (
              <span key={i} className="text-f1-foreground-secondary opacity-50">
                {renderTextWithEmojis(seg.text)}
              </span>
            ) : (
              <span key={i}>{renderTextWithEmojis(seg.text)}</span>
            )
          )}
        </div>
      )}

      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value, e.target.selectionStart ?? 0)}
        onKeyDown={onKeyDown}
        onKeyUp={onCursorUpdate}
        onClick={onCursorUpdate}
        onSelect={onCursorUpdate}
        onScroll={onScroll}
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
