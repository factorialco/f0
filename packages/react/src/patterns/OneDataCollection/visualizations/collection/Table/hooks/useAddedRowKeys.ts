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
 */
export function useAddedRowKeys(keys: string[]): ReadonlySet<string> {
  const seenRef = useRef<Set<string>>(new Set())
  const initializedRef = useRef(false)

  const added = new Set<string>()
  if (initializedRef.current) {
    for (const key of keys) {
      if (!seenRef.current.has(key)) {
        added.add(key)
      }
    }
  }

  useEffect(() => {
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
