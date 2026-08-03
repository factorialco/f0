import { useEffect, useRef } from "react"

/**
 * Returns the row keys that should play the "flash on add" effect on the
 * current render: keys that are appearing for the first time since the table
 * mounted.
 *
 * Seen keys are *accumulated* across the component's lifetime (never replaced),
 * so a given row flashes at most once. Transient changes to the row set — a
 * refetch, a reorder, or a brief empty render while loading — can't make
 * already-seen rows flash again. The rows present on the initial load are
 * seeded without flashing, mirroring the `initial={false}` behaviour of the
 * row enter animation.
 *
 * `resetKey` identifies the current pagination position (page number or
 * cursor). Changing pages swaps the whole row set for keys we've never seen,
 * which is navigation — not an insert — so a change to `resetKey` reseeds the
 * baseline and skips flashing for that render, just like the initial load.
 */
export function useAddedRowKeys(
  keys: string[],
  resetKey?: unknown
): ReadonlySet<string> {
  const seenRef = useRef<Set<string>>(new Set())
  const initializedRef = useRef(false)
  const resetKeyRef = useRef(resetKey)

  // A change to the pagination position means the incoming rows arrived by
  // navigation, not by insertion: reseed the baseline and don't flash them.
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
      // Forget the previous page's keys entirely so the new page is treated as
      // a fresh baseline (and a genuinely re-added row can still flash later).
      seenRef.current = new Set()
      resetKeyRef.current = resetKey
    }

    // The first non-empty render seeds the baseline (initial load never
    // flashes); after that every key we've ever seen is remembered so it can
    // only flash the first time it appears.
    if (!initializedRef.current && keys.length > 0) {
      initializedRef.current = true
    }

    const currentKeysSet = new Set(keys)

    // Remove keys that are no longer in the data
    for (const key of seenRef.current) {
      if (!currentKeysSet.has(key)) {
        seenRef.current.delete(key)
      }
    }

    // Add new keys
    for (const key of keys) {
      seenRef.current.add(key)
    }
  })

  return added
}
