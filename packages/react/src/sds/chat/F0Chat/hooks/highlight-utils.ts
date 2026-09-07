import { type AnchoredMention, mentionEnd } from "./useMentions"

export type HighlightSegment = {
  type: "text" | "mention" | "ghost"
  text: string
}

/**
 * Split composer text into plain-text, mention, and ghost (inline-completion)
 * segments so the highlight overlay can render each with distinct styling.
 *
 * When `inlineCompletion` is provided together with `cursorPosition`, a "ghost"
 * segment is inserted at the cursor — the remaining portion of the
 * autocompleted name, rendered as semi-transparent placeholder text.
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

  // The composer owns the anchors, so the overlay paints exactly the spans the
  // composer considers mentions — no second, independently-drifting match.
  const ranges = mentions
    .map((mention) => ({ start: mention.start, end: mentionEnd(mention) }))
    .filter((range) => range.start >= 0 && range.end <= text.length)
    .sort((a, b) => a.start - b.start)

  const segments: HighlightSegment[] = []
  let pos = 0
  let ghostInserted = false

  const emitTextWithGhost = (end: number) => {
    if (!ghost || ghostInserted || cursorPos < pos || cursorPos > end) {
      if (end > pos) {
        segments.push({ type: "text", text: text.slice(pos, end) })
      }
      pos = end
      return
    }

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
    emitTextWithGhost(range.start)
    segments.push({ type: "mention", text: text.slice(range.start, range.end) })
    pos = range.end
  }

  emitTextWithGhost(text.length)

  if (!ghostInserted && ghost && cursorPos >= pos) {
    segments.push({ type: "ghost", text: ghost })
  }

  if (segments.length === 0) {
    return [{ type: "text", text }]
  }

  return segments
}
