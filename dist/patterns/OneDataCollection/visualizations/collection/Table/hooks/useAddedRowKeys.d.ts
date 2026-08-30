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
export declare function useAddedRowKeys(keys: string[], resetKey?: unknown): ReadonlySet<string>;
