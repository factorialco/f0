/**
 * Merges global (source-level) filters with lane-specific filters by
 * intersecting array filters. On disjoint arrays the lane's own values win,
 * since downstream adapters collapse `[]` to "no filter" rather than "match
 * nothing". For non-array filters the lane wins.
 */
export function mergeFiltersWithIntersection<T extends Record<string, unknown>>(
  globalFilters: T,
  laneFilters: T
): T {
  const result: Record<string, unknown> = { ...globalFilters }

  for (const [key, laneValue] of Object.entries(laneFilters)) {
    const globalValue = globalFilters[key]

    if (
      Array.isArray(globalValue) &&
      Array.isArray(laneValue) &&
      globalValue.length > 0 &&
      laneValue.length > 0
    ) {
      const intersection = globalValue.filter((item) =>
        laneValue.includes(item)
      )
      result[key] = intersection.length > 0 ? intersection : laneValue
    } else {
      result[key] = laneValue
    }
  }

  return result as T
}
