/**
 * Lightweight, dependency-free fuzzy matcher used by sidebar search inputs.
 *
 * Matching is a case- and accent-insensitive *subsequence* test: every
 * character of the query must appear in `text`, in order, but not necessarily
 * contiguously (so "nrh" matches "Noor Rahimi"). An empty/whitespace query
 * matches everything.
 */

// Lowercase + strip diacritics so "Sofía" matches "sofia".
const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")

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
