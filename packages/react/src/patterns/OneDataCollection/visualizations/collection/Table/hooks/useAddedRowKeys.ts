import { useEffect, useRef } from "react"

const sameKeys = (seen: ReadonlySet<string>, keys: string[]) =>
  keys.length === seen.size && keys.every((key) => seen.has(key))

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
 * answer to a *different question* — navigation, not an insert — so the
 * baseline is reseeded and nothing flashes for that query change.
 *
 * The subtlety is *when* to reseed. Query state updates on the render the user
 * acts, but the matching rows arrive later, so there is always at least one
 * render carrying the new query and the previous query's rows. Reseeding there
 * would memorise the wrong rows and flash the real results when they land.
 *
 * So a query change marks the baseline *pending*: nothing flashes, and the
 * baseline is adopted on the first render whose rows actually differ from it —
 * the only reliable evidence that the new query's data has arrived. Don't
 * reach for the datasource's `isLoading` here: it flickers back to false
 * between a query change and its debounced fetch, so ending the wait on it
 * resolves against the *previous* query's rows and flashes the whole table.
 */
export function useAddedRowKeys(
  keys: string[],
  resetKey?: unknown
): ReadonlySet<string> {
  const seenRef = useRef<Set<string>>(new Set())
  const initializedRef = useRef(false)
  const resetKeyRef = useRef(resetKey)
  const pendingRef = useRef(false)

  const didReset = resetKeyRef.current !== resetKey
  // Between a query change and its data landing, nothing on screen can be an
  // insert: the rows shown still answer the previous query.
  const awaitingQueryData = pendingRef.current || didReset

  const added = new Set<string>()
  if (initializedRef.current && !awaitingQueryData) {
    for (const key of keys) {
      if (!seenRef.current.has(key)) {
        added.add(key)
      }
    }
  }

  useEffect(() => {
    if (didReset) {
      resetKeyRef.current = resetKey
      pendingRef.current = true
    }

    if (pendingRef.current) {
      // Rows identical to the baseline can't be distinguished from the
      // previous query's, so keep waiting. A query that genuinely returns the
      // same rows stays pending until something changes — nothing to flash
      // either way.
      if (sameKeys(seenRef.current, keys)) return

      seenRef.current = new Set(keys)
      pendingRef.current = false
      if (keys.length > 0) {
        initializedRef.current = true
      }
      return
    }

    // The first settled, non-empty render seeds the baseline (initial load
    // never flashes); after that every key seen under this query is remembered
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
