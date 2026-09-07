/** A tracked mention plus where its `@name` starts in the composer text. */
export type Anchored = { name: string; start: number }

/** A half-open `[start, end)` range of the composer text. */
export type Span = { start: number; end: number }

/** Index just past the last character of an anchored mention's name. */
export const anchorEnd = (anchored: Anchored): number =>
  anchored.start + anchored.name.length + 1

/** The single contiguous span in which two strings differ. */
export type TextEdit = {
  /** First index that differs. */
  start: number
  /** End of the changed span in the old string. */
  prevEnd: number
  /** End of the changed span in the new string. */
  nextEnd: number
}

/**
 * Read a text change as one contiguous span, by peeling the common prefix and
 * suffix. Enough for typing, deletion, paste and a programmatic token swap
 * alike — which is all the composer ever does to its own value in one step.
 *
 * Ambiguous when the same characters repeat around the edit (deleting one of
 * two adjacent spaces could be either); the span it picks is still the right
 * length, so callers that only care about extent or overlap are unaffected.
 */
export const diffSpan = (prev: string, next: string): TextEdit => {
  const max = Math.min(prev.length, next.length)
  let start = 0
  while (start < max && prev[start] === next[start]) {
    start++
  }
  let suffix = 0
  while (
    suffix < max - start &&
    prev[prev.length - 1 - suffix] === next[next.length - 1 - suffix]
  ) {
    suffix++
  }
  return {
    start,
    prevEnd: prev.length - suffix,
    nextEnd: next.length - suffix,
  }
}

/**
 * Re-anchor `anchored` after the composer text went from `prev` to `next`, and
 * report which mentions the edit landed inside.
 *
 * A mention the change partly overlaps is *touched*: its remaining text is
 * reported so the caller can erase it whole. Adjacency is not overlap, so
 * typing a comma right after a mention — or deleting the space that followed
 * it — leaves the mention alone. A mention the change swallowed entirely is
 * simply dropped: its text is already gone, and the span that replaced it is
 * whatever the user just typed or pasted.
 */
export const reanchor = <T extends Anchored>(
  prev: string,
  next: string,
  anchored: readonly T[]
): { kept: T[]; touched: Span[] } => {
  const { start: prefix, prevEnd, nextEnd } = diffSpan(prev, next)
  const delta = next.length - prev.length

  // Positions inside the changed span have no image in `next`; clamp a start
  // down and an end up so an erased range covers the whole disturbed region.
  const mapStart = (pos: number): number =>
    pos <= prefix ? pos : pos >= prevEnd ? pos + delta : prefix
  const mapEnd = (pos: number): number =>
    pos <= prefix ? pos : pos >= prevEnd ? pos + delta : nextEnd

  const kept: T[] = []
  const touched: Span[] = []
  for (const mention of anchored) {
    const start = mention.start
    const end = anchorEnd(mention)
    if (prefix >= end || prevEnd <= start) {
      kept.push({ ...mention, start: mapStart(start) })
      continue
    }
    if (start >= prefix && end <= prevEnd) {
      continue
    }
    touched.push({ start: mapStart(start), end: mapEnd(end) })
  }
  return { kept, touched }
}

/** Cut `spans` out of `text`, sliding the anchors and the caret left to match. */
export const eraseSpans = <T extends Anchored>(
  text: string,
  spans: readonly Span[],
  anchored: readonly T[],
  caret: number
): { text: string; mentions: T[]; caret: number } => {
  const merged: Span[] = []
  for (const span of [...spans].sort((a, b) => a.start - b.start)) {
    const last = merged[merged.length - 1]
    if (last && span.start <= last.end) {
      last.end = Math.max(last.end, span.end)
    } else {
      merged.push({ ...span })
    }
  }

  const removedBefore = (pos: number): number => {
    let removed = 0
    for (const span of merged) {
      if (span.end <= pos) {
        removed += span.end - span.start
      } else if (span.start < pos) {
        removed += pos - span.start
      }
    }
    return removed
  }

  let out = ""
  let cursor = 0
  for (const span of merged) {
    out += text.slice(cursor, span.start)
    cursor = span.end
  }
  out += text.slice(cursor)

  return {
    text: out,
    mentions: anchored.map((mention) => ({
      ...mention,
      start: mention.start - removedBefore(mention.start),
    })),
    caret: caret - removedBefore(caret),
  }
}
