/**
 * Merges global filters with lane-specific filters using intersection logic.
 * For array-based filters (like InFilter), it finds the intersection of values.
 * For other filter types, lane filters override global filters.
 *
 * @param globalFilters - The global filters applied to all lanes
 * @param laneFilters - The lane-specific filters
 * @returns The merged filters with proper intersection logic
 */
export function mergeFiltersWithIntersection<T extends Record<string, unknown>>(
  globalFilters: T,
  laneFilters: T
): T {
  const result: Record<string, unknown> = { ...globalFilters }

  for (const [key, laneValue] of Object.entries(laneFilters)) {
    const globalValue = globalFilters[key]

    // If both values exist and are arrays (InFilter case), find intersection
    if (
      Array.isArray(globalValue) &&
      Array.isArray(laneValue) &&
      globalValue.length > 0 &&
      laneValue.length > 0
    ) {
      // Find intersection of the two arrays
      const intersection = globalValue.filter((item) => laneValue.includes(item))
      result[key] = intersection
    } else {
      // For non-array filters or when one is empty, lane filter takes precedence
      result[key] = laneValue
    }
  }

  return result as T
}
