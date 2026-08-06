import { useEffect, useRef } from "react"

/**
 * Returns the row keys that should play the "flash on add" effect on the
 * current render: keys that were inserted into the current result set.
 *
 * Seen keys are *accumulated* while the query stays the same (never pruned), so
 * a given row flashes at most once. Transient changes to the row set — a
 * refetch, a reorder, or a brief empty render while loading — can't make
 * already-seen rows flash again. The rows present on the initial load are
 * seeded without flashing, mirroring the `initial={false}` behaviour of the row
 * enter animation.
 *
 * `resetKey` identifies the current query (pagination position, search,
 * filters, sortings, grouping). Changing it swaps the whole row set for the
 * answer to a *different question* — navigation, not an insert — so a change to
 * `resetKey` reseeds the baseline and skips flashing for that render, just like
 * the initial load.
 *
 * `isLoading` suppresses both flashing and reseeding while a fetch is in
 * flight: between a query change and its results landing, the rows on screen
 * still answer the *previous* query, and taking them as the new baseline would
 * make the real results flash when they arrive.
 */
export function useAddedRowKeys(
  keys: string[],
  resetKey?: unknown,
  isLoading: boolean = false
): ReadonlySet<string> {
  const seenRef = useRef<Set<string>>(new Set())
  const initializedRef = useRef(false)
  const resetKeyRef = useRef(resetKey)

  // A change to the query means the incoming rows arrived by navigation, not by
  // insertion: reseed the baseline and don't flash them.
  const didReset = resetKeyRef.current !== resetKey

  const added = new Set<string>()
  if (initializedRef.current && !didReset && !isLoading) {
    for (const key of keys) {
      if (!seenRef.current.has(key)) {
        added.add(key)
      }
    }
  }

  useEffect(() => {
    // Wait for the data to match the query before touching the baseline.
    if (isLoading) return

    if (didReset) {
      // Forget the previous query's keys entirely so the new result set is
      // treated as a fresh baseline.
      seenRef.current = new Set()
      resetKeyRef.current = resetKey
    }

    // The first settled, non-empty render seeds the baseline (initial load never
    // flashes); after that every key we've seen under this query is remembered
    // so it can only flash the first time it appears.
    if (!initializedRef.current && keys.length > 0) {
      initializedRef.current = true
    }

    for (const key of keys) {
      seenRef.current.add(key)
    }
  })

  return added
}
