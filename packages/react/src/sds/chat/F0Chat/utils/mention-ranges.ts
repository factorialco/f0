import { CANONICAL_FORM } from "./sanitize-text"

/** A `@name` occurrence located in a body of text. */
export type LocatedMention<T> = {
  entry: T
  /** Index of the `@`. */
  start: number
  /** Index just past the last character of the name. */
  end: number
}

/**
 * One code point plus the combining marks that belong to it. Canonical
 * composition joins a base with its marks, so a candidate may only start or
 * end here — cut between the two and a bare `a` gets compared against an `á`.
 */
const BASE_WITH_MARKS = /[\s\S]\p{M}*/uy

const nextBoundary = (text: string, at: number): number => {
  BASE_WITH_MARKS.lastIndex = at
  return BASE_WITH_MARKS.exec(text) ? BASE_WITH_MARKS.lastIndex : text.length
}

/**
 * Index just past the run starting at `from` whose canonical form is
 * `pattern`, or `-1` when no run there has it.
 *
 * Comparing canonical forms instead of raw code units is what lets a name held
 * as `i` + combining acute match a body the renderer already composed to `í`,
 * and the reverse. The index counts characters of `text` exactly as the caller
 * passed it, so a caller can still slice or anchor on its own string.
 */
const canonicalMatchEnd = (
  text: string,
  from: number,
  pattern: string
): number => {
  let cursor = from
  while (true) {
    const seen = text.slice(from, cursor).normalize(CANONICAL_FORM)
    if (seen === pattern) {
      return cursor
    }
    if (cursor === text.length || seen.length > pattern.length) {
      return -1
    }
    cursor = nextBoundary(text, cursor)
  }
}

/**
 * Locate every `@name` occurrence of the given entries in `text`.
 *
 * Longest names first so `@Ana María` wins over `@Ana`, then overlaps are
 * dropped left to right. Entry order breaks ties, which is what makes two
 * different people who share a display name land on one occurrence each.
 *
 * Names and body are matched by canonical form, so which of the two spellings
 * of `í` each side happens to carry never decides whether a mention is found.
 *
 * The single place `@name` text is matched: the bubble, the composer overlay
 * and the composer's own anchoring all resolve through here, so they cannot
 * disagree about which text belongs to which mention.
 */
export const locateMentions = <T extends { name: string }>(
  text: string,
  entries: readonly T[]
): LocatedMention<T>[] => {
  const found: LocatedMention<T>[] = []
  const byLength = entries
    .map((entry) => ({
      entry,
      pattern: `@${entry.name}`.normalize(CANONICAL_FORM),
    }))
    .sort((a, b) => b.pattern.length - a.pattern.length)
  for (const { entry, pattern } of byLength) {
    let from = 0
    while (true) {
      const at = text.indexOf("@", from)
      if (at === -1) {
        break
      }
      const end = canonicalMatchEnd(text, at, pattern)
      if (end === -1) {
        from = at + 1
        continue
      }
      found.push({ entry, start: at, end })
      from = end
    }
  }
  found.sort((a, b) => a.start - b.start)

  const clean: LocatedMention<T>[] = []
  let lastEnd = 0
  for (const range of found) {
    if (range.start < lastEnd) {
      continue
    }
    clean.push(range)
    lastEnd = range.end
  }
  return clean
}
