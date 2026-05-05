/**
 * Generic multi-key sort helper for OneDataCollection `fetchData`.
 *
 * The `sortings` argument that f0 hands you is a `SortingsStateMultiple`:
 * `{ field: string; order: "asc" | "desc" }[]` (see
 * `packages/react/src/hooks/datasource/types/sortings.typings.ts:24-27`).
 *
 * Each source provides a `getValue(item, field)` that maps a sortable field
 * id to a comparable primitive — `e.amount` for "amount" (number),
 * `Date.parse(e.createdAt)` for "createdAt" (ISO → epoch), or
 * `e.provider.toLowerCase()` for "provider" (case-insensitive string).
 *
 * Nulls are pushed to the bottom regardless of order direction — that's the
 * canonical "missing data goes last" convention.
 */

type SortingsStateMultiple = { field: string; order: "asc" | "desc" }[]

export function applySort<T>(
  records: T[],
  sortings: SortingsStateMultiple,
  getValue: (item: T, field: string) => string | number | null | undefined
): T[] {
  if (sortings.length === 0) return records
  const sorted = [...records]
  sorted.sort((a, b) => {
    for (const { field, order } of sortings) {
      const va = getValue(a, field)
      const vb = getValue(b, field)
      if (va == null && vb == null) continue
      if (va == null) return 1
      if (vb == null) return -1
      if (va < vb) return order === "asc" ? -1 : 1
      if (va > vb) return order === "asc" ? 1 : -1
    }
    return 0
  })
  return sorted
}
