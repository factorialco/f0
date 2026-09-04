/**
 * Lightweight, dependency-free fuzzy matcher used by sidebar search inputs.
 *
 * Matching is a case- and accent-insensitive *subsequence* test: every
 * character of the query must appear in `text`, in order, but not necessarily
 * contiguously (so "rcm" matches "Roger Campos"). An empty/whitespace query
 * matches everything.
 */

// Lowercase + strip diacritics so "Raúl" matches "raul".
const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")

// What counts as the start of a word for scoring purposes.
const WORD_BOUNDARY = /[\s/·\-_,.]/

export const fuzzyMatch = (query: string, text: string): boolean => {
  const q = normalize(query.trim())
  if (!q) return true

  const haystack = normalize(text)
  let i = 0
  for (const char of haystack) {
    if (char === q[i]) i++
    if (i === q.length) return true
  }
  return i === q.length
}

/**
 * The ranking half of the same matcher: how *well* the query hits the text,
 * rather than only whether it does. `null` means no match, so a caller can use
 * one call to both filter and sort.
 *
 * Weighting, in the order it matters: a character landing at the start of a word
 * counts triple, a run of consecutive hits compounds, and an early hit gets a
 * small nudge. That is what makes "cr" rank "Create a task" above "Microphone"
 * — both contain the subsequence, but only one starts two words with it.
 *
 * Shared with `fuzzyMatch` so a consumer ranking its own records the way a
 * search surface ranks commands gets identical behaviour, accents included.
 */
export const fuzzyScore = (query: string, text: string): number | null => {
  const q = normalize(query.trim())
  if (!q) return 0

  const haystack = normalize(text)
  let cursor = 0
  let score = 0
  let streak = 0

  for (const char of q) {
    const found = haystack.indexOf(char, cursor)
    if (found === -1) return null

    const atWordStart =
      found === 0 || WORD_BOUNDARY.test(haystack[found - 1] ?? "")
    streak = found === cursor ? streak + 1 : 0
    score += 1 + (atWordStart ? 3 : 0) + streak + Math.max(0, 3 - found) * 0.1
    cursor = found + 1
  }

  return score
}

/** Rank items by their searchable text, best first, capped at `limit`. */
export const rankBy = <T>(
  items: T[],
  query: string,
  text: (item: T) => string,
  limit?: number
): T[] => {
  const ranked = items
    .map((item) => ({ item, score: fuzzyScore(query, text(item)) }))
    .filter(
      (entry): entry is { item: T; score: number } => entry.score !== null
    )
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item)

  return limit === undefined ? ranked : ranked.slice(0, limit)
}
