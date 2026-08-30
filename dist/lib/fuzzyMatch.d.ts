/**
 * Lightweight, dependency-free fuzzy matcher used by sidebar search inputs.
 *
 * Matching is a case- and accent-insensitive *subsequence* test: every
 * character of the query must appear in `text`, in order, but not necessarily
 * contiguously (so "rcm" matches "Roger Campos"). An empty/whitespace query
 * matches everything.
 */
export declare const fuzzyMatch: (query: string, text: string) => boolean;
