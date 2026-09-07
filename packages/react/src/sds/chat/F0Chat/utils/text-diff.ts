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
