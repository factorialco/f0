import { anchorEnd } from "./mention-anchors"
import type { AnchoredMention } from "./useMentions"

/**
 * Escape a string for safe embedding inside XML/HTML attributes and text
 * content. Prevents tag injection when building `<entity-ref>` markup.
 */
export function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export type HighlightSegment = {
  type: "text" | "mention" | "ghost"
  text: string
}

/**
 * Split text into plain-text, mention, and ghost (inline-completion) segments
 * so the highlight overlay can render each with distinct styling.
 *
 * When `inlineCompletion` is provided together with `cursorPosition`, a
 * "ghost" segment is inserted at the cursor. This renders the remaining
 * portion of the autocompleted name as semi-transparent placeholder text.
 */
export function buildHighlightSegments(
  text: string,
  mentions: AnchoredMention[],
  options?: {
    cursorPosition?: number
    inlineCompletion?: string | null
  }
): HighlightSegment[] {
  const cursorPos = options?.cursorPosition ?? text.length
  const ghost = options?.inlineCompletion ?? null

  // Paint the anchors the textarea owns, but only where one still sits on its
  // own `@name` — the same test the sent payload applies. The anchors are
  // reconciled in an effect, so they trail the text by a commit whenever an
  // edit moves them; without this the overlay would paint a pill over glyphs
  // that will not be tagged, which is worse than painting none for a frame.
  const ranges = mentions
    .filter((mention) => text.startsWith(`@${mention.name}`, mention.start))
    .map((mention) => ({ start: mention.start, end: anchorEnd(mention) }))
    .sort((a, b) => a.start - b.start)

  // Collect all "split points": mention ranges + the ghost insertion point
  // Then walk through the text emitting segments in order.
  const segments: HighlightSegment[] = []
  let pos = 0
  let ghostInserted = false

  /**
   * Emit a plain-text segment from `pos` up to `end`, inserting the ghost
   * segment at `cursorPos` if it falls within this range.
   */
  const emitTextWithGhost = (end: number) => {
    if (!ghost || ghostInserted || cursorPos < pos || cursorPos > end) {
      // No ghost needed in this range — emit plain text
      if (end > pos) {
        segments.push({ type: "text", text: text.slice(pos, end) })
      }
      pos = end
      return
    }

    // Ghost falls within [pos, end]: split around cursorPos
    if (cursorPos > pos) {
      segments.push({ type: "text", text: text.slice(pos, cursorPos) })
    }
    segments.push({ type: "ghost", text: ghost })
    ghostInserted = true
    if (cursorPos < end) {
      segments.push({ type: "text", text: text.slice(cursorPos, end) })
    }
    pos = end
  }

  for (const range of ranges) {
    // Emit text (with possible ghost) before this mention
    emitTextWithGhost(range.start)
    // Emit the mention itself
    segments.push({ type: "mention", text: text.slice(range.start, range.end) })
    pos = range.end
  }

  // Emit remaining text after the last mention (with possible ghost)
  emitTextWithGhost(text.length)

  // Ghost at the very end of text (cursor is at or past the end)
  if (!ghostInserted && ghost && cursorPos >= pos) {
    segments.push({ type: "ghost", text: ghost })
  }

  // If nothing was emitted (empty text, no ghost), return plain text
  if (segments.length === 0) {
    return [{ type: "text", text }]
  }

  return segments
}
