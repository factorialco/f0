import { sanitizeDisplayText } from "./sanitize-text"

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
 * jamo compose with each other, and {@link sanitizedMatchEnd} is what keeps a
 * syllable from being cut in half.
 */
const BASE_WITH_MARKS = /[\s\S]\p{M}*/uy

/**
 * A code point that composes with whatever precedes it, so no match may end
 * just before one. Combining marks are the general case; Hangul jungseong and
 * jongseong are the rest of it, because they compose with a preceding jamo
 * rather than as marks — a name held as `\uAE30` in jamo sits inside a
 * jamo-spelled `\uAE40` exactly the way `@Ana` sits inside a decomposed
 * `@Aná`, and ending there chips two thirds of somebody's syllable.
 *
 * Sticky rather than a single-character test: a mark outside the BMP is two
 * code units and a lone surrogate is not `\p{M}`, so reading one unit would
 * wave an astral mark straight past.
 */
const CONTINUES_PREVIOUS = /[\p{M}\u1161-\u1175\u11A8-\u11C2]/uy

const continuesPrevious = (text: string, at: number): boolean => {
  CONTINUES_PREVIOUS.lastIndex = at
  return CONTINUES_PREVIOUS.test(text)
}

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
 * Index just past the run starting at `from` whose displayed form is `pattern`,
 * or `-1` when no run there has it.
 *
 * Comparing canonical forms instead of raw code units is what lets a name held
 * as `i` + combining acute match a body the renderer already composed to `í`.
 * Giving up the moment the run stops being a canonical prefix keeps a wrong
 * `@` cheap, and is also what leaves decomposed Hangul alone: the boundary
 * above would cut a syllable between its jamo, and the prefix test rejects
 * that rather than chipping two thirds of it.
 */
const sanitizedMatchEnd = (
  text: string,
  from: number,
  pattern: string
): number => {
  let cursor = from
  while (true) {
    const seen = sanitizeDisplayText(text.slice(from, cursor))
    if (seen === pattern) {
      return continuesPrevious(text, cursor) ? -1 : cursor
    }
    if (
      cursor === text.length ||
      (!pattern.startsWith(seen) && !continuesPrevious(text, cursor))
    ) {
      return -1
    }
    cursor = nextBoundary(text, cursor)
  }
}

/**
 * Index just past `needle` sitting literally at `from`, or `-1`. The
 * continuation test is what keeps the shortcut honest: `@Ana` sits inside a
 * decomposed `@Aná`, and matching it there chips somebody else's name and
 * strands the accent outside the chip.
 */
const literalMatchEnd = (
  text: string,
  from: number,
  needle: string
): number => {
  const end = from + needle.length
  return text.startsWith(needle, from) && !continuesPrevious(text, end)
    ? end
    : -1
}

/**
 * Both sides spelled the same way is the overwhelming majority and needs no
 * normalization or sanitization at all.
 *
 * The name as it is actually held is tried too, and is not redundant with the
 * fold: {@link sanitizedMatchEnd} walks base+mark groups, while Hangul jamo
 * compose with each other rather than as marks, so a run of jamo is never a
 * canonical prefix of the syllable it composes to. Without this a name kept as
 * jamo would stop being found in a body carrying those very same jamo.
 */
type MatchOptions = {
  pattern: string
  asWritten: string
  foldable: boolean
}

const matchEnd = (
  text: string,
  from: number,
  { pattern, asWritten, foldable }: MatchOptions
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
  return foldable ? sanitizedMatchEnd(text, from, pattern) : -1
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
  type Candidate = {
    entry: T
    asWritten: string
    pattern: string
  }
  type CanonicalGroup = {
    pattern: string
    candidates: Candidate[]
  }
  type LocatedGroup = {
    group: CanonicalGroup
    start: number
    end: number
  }

  /** Entries sharing a canonical spelling become one group, longest first. */
  const groupByPattern = (): CanonicalGroup[] => {
    const groupsByPattern = new Map<string, CanonicalGroup>()
    for (const entry of entries) {
      const candidate = (() => {
        const asWritten = `@${entry.name}`
        return { entry, asWritten, pattern: sanitizeDisplayText(asWritten) }
      })()
      const group = groupsByPattern.get(candidate.pattern)
      if (group) {
        group.candidates.push(candidate)
      } else {
        groupsByPattern.set(candidate.pattern, {
          pattern: candidate.pattern,
          candidates: [candidate],
        })
      }
    }

    return [...groupsByPattern.values()].sort(
      (a, b) => b.pattern.length - a.pattern.length
    )
  }

  /** Every place a group's text occurs, in reading order, longest group first. */
  const findOccurrences = (groups: CanonicalGroup[]): LocatedGroup[] => {
    const found: LocatedGroup[] = []
    const foldable = NON_ASCII.test(text)
    for (const group of groups) {
      let from = 0
      while (true) {
        const at = text.indexOf("@", from)
        if (at === -1) {
          break
        }
        const end = group.candidates.reduce(
          (matchedEnd, { asWritten }) =>
            Math.max(
              matchedEnd,
              matchEnd(text, at, {
                pattern: group.pattern,
                asWritten,
                foldable,
              })
            ),
          -1
        )
        if (end === -1) {
          from = at + 1
          continue
        }
        found.push({ group, start: at, end })
        from = end
      }
    }

    found.sort(
      (a, b) =>
        a.start - b.start || b.group.pattern.length - a.group.pattern.length
    )
    return found
  }

  const found = findOccurrences(groupByPattern())

  const clean: LocatedGroup[] = []
  let lastEnd = 0
  for (const range of found) {
    if (range.start < lastEnd) {
      continue
    }
    clean.push(range)
    lastEnd = range.end
  }

  const usedByGroup = new Map<CanonicalGroup, Set<number>>()
  return clean.map(({ group, start, end }) => {
    const used = usedByGroup.get(group) ?? new Set<number>()
    usedByGroup.set(group, used)
    const exact = group.candidates
      .map((candidate, index) => ({ candidate, index }))
      .filter(
        ({ candidate }) =>
          literalMatchEnd(text, start, candidate.asWritten) === end
      )
    const picked = exact.find(({ index }) => !used.has(index)) ??
      exact.at(-1) ??
      group.candidates
        .map((candidate, index) => ({ candidate, index }))
        .find(({ index }) => !used.has(index)) ?? {
        candidate: group.candidates[group.candidates.length - 1]!,
        index: group.candidates.length - 1,
      }
    used.add(picked.index)
    return { entry: picked.candidate.entry, start, end }
  })
}
