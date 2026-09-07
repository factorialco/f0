import { CANONICAL_FORM } from "./sanitize-text"

/** A `@name` occurrence located in a body of text. */
export type LocatedMention<T> = {
  entry: T
  /** Index of the `@`. */
  start: number
  /**
   * Index just past the occurrence **as it is spelled in `text`**, which is
   * not always `start + 1 + name.length`: an accent held decomposed on one
   * side and composed on the other takes one more index there than here.
   * Slice and anchor on this, never on the length of the name.
   */
  end: number
}

/**
 * One code point plus the combining marks that belong to it. A candidate may
 * only start or end here — cut between a letter and its accent and a bare `a`
 * gets compared against an `á`. Marks are the only thing this covers: Hangul
 * jamo compose with each other, and {@link canonicalMatchEnd} is what keeps a
 * syllable from being cut in half.
 */
const BASE_WITH_MARKS = /[\s\S]\p{M}*/uy

/** Marks never open a name, so one sitting after a match extends the letter. */
const COMBINING_MARK = /\p{M}/u

/**
 * No ASCII character carries an accent or composes with a neighbour, so in a
 * body without one there is nothing for a canonical fold to find that an exact
 * comparison has not already found — whatever the names are spelled like.
 */
const NON_ASCII = /\P{ASCII}/u

const nextBoundary = (text: string, at: number): number => {
  BASE_WITH_MARKS.lastIndex = at
  BASE_WITH_MARKS.exec(text)
  // The walk ends by reaching the end of the text, so the cursor may never
  // stand still, whatever the regex leaves behind.
  return Math.max(BASE_WITH_MARKS.lastIndex, at + 1)
}

/**
 * Index just past the run starting at `from` whose canonical form is
 * `pattern`, or `-1` when no run there has it.
 *
 * Comparing canonical forms instead of raw code units is what lets a name held
 * as `i` + combining acute match a body the renderer already composed to `í`.
 * Giving up the moment the run stops being a canonical prefix keeps a wrong
 * `@` cheap, and is also what leaves decomposed Hangul alone: the boundary
 * above would cut a syllable between its jamo, and the prefix test rejects
 * that rather than chipping two thirds of it.
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
    if (cursor === text.length || !pattern.startsWith(seen)) {
      return -1
    }
    cursor = nextBoundary(text, cursor)
  }
}

/**
 * Index just past `needle` sitting literally at `from`, or `-1`. The mark test
 * is what keeps the shortcut honest: `@Ana` sits inside a decomposed `@Aná`,
 * and matching it there chips somebody else's name and strands the accent
 * outside the chip.
 */
const literalMatchEnd = (
  text: string,
  from: number,
  needle: string
): number => {
  const end = from + needle.length
  return text.startsWith(needle, from) && !COMBINING_MARK.test(text.charAt(end))
    ? end
    : -1
}

/**
 * Both sides spelled the same way is the overwhelming majority — the renderer
 * composes the body one line before it asks — and needs no normalizing at all.
 *
 * The name as it is actually held is tried too, and is not redundant with the
 * fold: {@link canonicalMatchEnd} walks base+mark groups, while Hangul jamo
 * compose with each other rather than as marks, so a run of jamo is never a
 * canonical prefix of the syllable it composes to. Without this a name kept as
 * jamo would stop being found in a body carrying those very same jamo.
 */
const matchEnd = (
  text: string,
  from: number,
  pattern: string,
  asWritten: string,
  foldable: boolean
): number => {
  const composed = literalMatchEnd(text, from, pattern)
  if (composed !== -1) {
    return composed
  }
  if (asWritten !== pattern) {
    const literal = literalMatchEnd(text, from, asWritten)
    if (literal !== -1) {
      return literal
    }
  }
  return foldable ? canonicalMatchEnd(text, from, pattern) : -1
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
    .map((entry) => {
      const asWritten = `@${entry.name}`
      return { entry, asWritten, pattern: asWritten.normalize(CANONICAL_FORM) }
    })
    .sort((a, b) => b.pattern.length - a.pattern.length)
  const foldable = NON_ASCII.test(text)
  for (const { entry, asWritten, pattern } of byLength) {
    let from = 0
    while (true) {
      const at = text.indexOf("@", from)
      if (at === -1) {
        break
      }
      const end = matchEnd(text, at, pattern, asWritten, foldable)
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
