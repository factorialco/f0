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
 * Can the change from `prev` to `next` be read as replacing `[at, at + removed)`
 * with the `inserted` characters that start there?
 *
 * {@link diffSpan} names the rightmost reading of an ambiguous change, which is
 * the right bias at a mention's tail and the wrong one at its head: typing `@`
 * in front of `@Ana García` — the way a second mention gets started there —
 * repeats the character it lands on, so the rightmost reading puts it inside
 * the token and takes the whole name with it. The readings of one change form
 * a contiguous interval, so testing the anchor's own index settles whether a
 * reading that leaves the mention whole exists at all.
 */
const readsAs = (
  prev: string,
  next: string,
  at: number,
  removed: number,
  inserted: number
): boolean =>
  at >= 0 &&
  next.slice(0, at) === prev.slice(0, at) &&
  next.slice(at + inserted) === prev.slice(at + removed)

/**
 * Re-anchor `anchored` after the composer text went from `prev` to `next`, and
 * report what is left of the mentions the change ran into.
 *
 * A mention the change missed is kept, shifted. One the change ran into is
 * *touched*: the spans it still occupies in `next` are reported so the caller
 * can erase them and take the token out whole. Three rules make that safe:
 *
 * - Adjacency is not overlap, on either side. Typing a comma right after a
 *   mention, deleting the space that followed it, or typing immediately in
 *   front of the `@` all leave the mention alone — the last of those is a pure
 *   insertion at the anchor's own index, which moves the mention rather than
 *   editing it. That holds even when the change is ambiguous and `diffSpan`
 *   named a reading inside the token; see {@link readsAs}.
 * - A change strictly inside a mention takes the whole token, including what
 *   was typed in its place: a half-typed name was never a state the user meant.
 * - A change that swallowed a mention outright erases nothing. Its text is
 *   already gone, and what replaced it is the user's own keystroke or paste.
 */
export const reanchor = <T extends Anchored>(
  prev: string,
  next: string,
  anchored: readonly T[]
): { kept: T[]; touched: Span[] } => {
  const { start: prefix, prevEnd, nextEnd } = diffSpan(prev, next)
  const delta = next.length - prev.length
  const removed = prevEnd - prefix
  const inserted = nextEnd - prefix

  const kept: T[] = []
  const touched: Span[] = []
  for (const mention of anchored) {
    const start = mention.start
    const end = anchorEnd(mention)

    if (prefix >= end || prevEnd <= start) {
      kept.push({ ...mention, start: start < prefix ? start : start + delta })
      continue
    }

    if (readsAs(prev, next, start - removed, removed, inserted)) {
      kept.push({ ...mention, start: start + delta })
      continue
    }

    const headSurvives = start < prefix
    const tailSurvives = end > prevEnd
    if (headSurvives && tailSurvives) {
      touched.push({ start, end: end + delta })
      continue
    }
    if (headSurvives) {
      touched.push({ start, end: prefix })
    }
    if (tailSurvives) {
      touched.push({ start: nextEnd, end: end + delta })
    }
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
