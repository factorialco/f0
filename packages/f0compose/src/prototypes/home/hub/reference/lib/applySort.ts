/**
 * Functional sort helper for OneDataCollection sources. The data adapter's
 * `sortings` is `{ field, order } | null`; `getValue` lets each source decide
 * how to read a field (lowercased string, number, parsed date, …). Records
 * whose value is `null` sort to the end.
 */
type SortOne = { field: PropertyKey; order: "asc" | "desc" }
type Sortings = SortOne | SortOne[] | null | undefined

export function applySort<T>(
  items: T[],
  sortings: Sortings,
  getValue: (item: T, field: string) => string | number | null
): T[] {
  const active = Array.isArray(sortings) ? sortings[0] : sortings
  if (!active) return items
  const field = String(active.field)
  const dir = active.order === "desc" ? -1 : 1
  return [...items].sort((a, b) => {
    const va = getValue(a, field)
    const vb = getValue(b, field)
    if (va == null && vb == null) return 0
    if (va == null) return 1
    if (vb == null) return -1
    if (va < vb) return -1 * dir
    if (va > vb) return 1 * dir
    return 0
  })
}
