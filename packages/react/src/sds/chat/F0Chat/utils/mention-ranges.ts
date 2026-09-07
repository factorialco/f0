/** A `@name` occurrence located in a body of text. */
export type LocatedMention<T> = {
  entry: T
  /** Index of the `@`. */
  start: number
  /** Index just past the last character of the name. */
  end: number
}

/**
 * Locate every `@name` occurrence of the given entries in `text`.
 *
 * Longest names first so `@Ana María` wins over `@Ana`, then overlaps are
 * dropped left to right. Entry order breaks ties, which is what makes two
 * different people who share a display name land on one occurrence each.
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
  const byLength = [...entries].sort((a, b) => b.name.length - a.name.length)
  for (const entry of byLength) {
    const pattern = `@${entry.name}`
    let from = 0
    while (true) {
      const idx = text.indexOf(pattern, from)
      if (idx === -1) {
        break
      }
      found.push({ entry, start: idx, end: idx + pattern.length })
      from = idx + pattern.length
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
