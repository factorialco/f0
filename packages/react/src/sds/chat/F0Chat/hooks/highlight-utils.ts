import { MENTION_EVERYONE_ID, type MentionEntry } from "./useMentions"

/** Same tone classification the bubble uses, so the in-composer highlight
 * matches: a mention of you / `@here` is amber, anyone else is info. */
export type MentionTone = "self" | "everyone" | "other"

export type HighlightSegment = {
  type: "text" | "mention" | "ghost"
  text: string
  /** Only set on `mention` segments — drives the chip colour. */
  tone?: MentionTone
}

const toneOf = (id: string, currentUserId?: string): MentionTone =>
  id === MENTION_EVERYONE_ID
    ? "everyone"
    : currentUserId != null && id === currentUserId
      ? "self"
      : "other"

/**
 * Split composer text into plain-text, mention, and ghost (inline-completion)
 * segments so the highlight overlay can render each with distinct styling.
 * Cloned from the AI chat composer so the two behave identically.
 *
 * When `inlineCompletion` is provided together with `cursorPosition`, a "ghost"
 * segment is inserted at the cursor — the remaining portion of the
 * autocompleted name, rendered as semi-transparent placeholder text.
 */
export function buildHighlightSegments(
  text: string,
  mentions: MentionEntry[],
  options?: {
    cursorPosition?: number
    inlineCompletion?: string | null
    /** Viewer id — a mention of it is toned `self` (amber), like the bubble. */
    currentUserId?: string
  }
): HighlightSegment[] {
  const cursorPos = options?.cursorPosition ?? text.length
  const ghost = options?.inlineCompletion ?? null
  const currentUserId = options?.currentUserId

  // Build a list of { start, end, tone } ranges for each @Name occurrence.
  const ranges: { start: number; end: number; tone: MentionTone }[] = []

  for (const mention of mentions) {
    const pattern = `@${mention.name}`
    const tone = toneOf(mention.id, currentUserId)
    let searchFrom = 0
    while (true) {
      const idx = text.indexOf(pattern, searchFrom)
      if (idx === -1) break
      ranges.push({ start: idx, end: idx + pattern.length, tone })
      searchFrom = idx + pattern.length
    }
  }

  ranges.sort((a, b) => a.start - b.start)

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
    segments.push({
      type: "mention",
      text: text.slice(range.start, range.end),
      tone: range.tone,
    })
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
