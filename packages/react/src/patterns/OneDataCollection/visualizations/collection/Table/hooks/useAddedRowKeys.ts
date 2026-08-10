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
 * `resetKey` must identify the query that *the rows being passed in* answer —
 * the datasource's `committedQuery`, not the live filter/search state. The two
 * differ for at least one render: query state updates when the user acts, while
 * the matching rows arrive later. Keyed on the live query, the reseed lands on a
 * render still showing the previous query's rows, memorises those, and then
 * flashes the real results when they arrive.
 *
 * Keyed on the committed query there is nothing to wait for: it changes exactly
 * when rows answering a different question are rendered, so the baseline is
 * reseeded against the right rows and nothing flashes for that change. Rows
 * arriving under an unchanged committed query are inserts, and flash — which
 * holds even when the new query happens to return the same rows as the old one.
 */
export function useAddedRowKeys(
  keys: string[],
  resetKey?: unknown
): ReadonlySet<string> {
  const seenRef = useRef<Set<string>>(new Set())
  const initializedRef = useRef(false)
  const resetKeyRef = useRef(resetKey)

  // A different committed query means these rows arrived by navigation, not by
  // insertion: reseed the baseline and don't flash them.
  const didReset = resetKeyRef.current !== resetKey

  const added = new Set<string>()
  if (initializedRef.current && !didReset) {
    for (const key of keys) {
      if (!seenRef.current.has(key)) {
        added.add(key)
      }
    }
  }

  useEffect(() => {
    if (didReset) {
      resetKeyRef.current = resetKey
      seenRef.current = new Set(keys)
      if (keys.length > 0) {
        initializedRef.current = true
      }
      return
    }

    // The first non-empty render seeds the baseline (initial load never
    // flashes); after that every key seen under this query is remembered so it
    // can only flash the first time it appears.
    if (!initializedRef.current && keys.length > 0) {
      initializedRef.current = true
    }

    for (const key of keys) {
      seenRef.current.add(key)
    }
  })

  return added
}
