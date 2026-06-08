/**
 * Extract column names from an array of records, filtering out internal keys.
 * Keys starting with `_` or that are Symbols are excluded.
 */
export function extractColumns(records: Record<string, unknown>[]): string[] {
  if (records.length === 0) return []
  const first = records[0]
  return Object.keys(first).filter(
    (k) => typeof k === "string" && !k.startsWith("_")
  )
}
