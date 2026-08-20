import type { FiltersDefinition, FiltersState } from "./types"

/**
 * Serializes filters state into a base64 string for URL sharing.
 *
 * @example
 * ```ts
 * const filters = { search: "test", status: ["active"] };
 * const serialized = serializeFilters(filters);
 * // -> "eyJzZWFyY2giOiJ0ZXN0Iiwic3RhdHVzIjpbImFjdGl2ZSJdfQ=="
 * ```
 */
export function serializeFilters<Definition extends FiltersDefinition>(
  filters: FiltersState<Definition>
): string {
  const jsonString = JSON.stringify(filters)
  return btoa(jsonString)
}

/**
 * Deserializes a base64 string back into a filters state object.
 * @throws {Error} If the string is not valid base64 or JSON
 *
 * @example
 * ```ts
 * const filters = deserializeFilters(serializedString);
 * // -> { search: "test", status: ["active"] }
 * ```
 */
export function deserializeFilters<Definition extends FiltersDefinition>(
  serialized: string
): FiltersState<Definition> {
  try {
    const jsonString = atob(serialized)
    return JSON.parse(jsonString)
  } catch {
    throw new Error("Invalid filter string format")
  }
}

/**
 * Updates URL search params with serialized filters for bookmarkable/shareable state.
 * Uses replaceState to avoid creating new history entries.
 */
export function updateUrlWithFilters<Definition extends FiltersDefinition>(
  filters: FiltersState<Definition>,
  paramName = "filters"
): void {
  const url = new URL(window.location.href)
  const serialized = serializeFilters(filters)
  url.searchParams.set(paramName, serialized)
  window.history.replaceState({}, "", url.toString())
}

/**
 * Reads and deserializes filters from URL search params.
 * Returns null if no filters found or if deserialization fails.
 */
export function getFiltersFromUrl<Definition extends FiltersDefinition>(
  paramName = "filters"
): FiltersState<Definition> | null {
  const url = new URL(window.location.href)
  const serialized = url.searchParams.get(paramName)

  if (!serialized) return null

  try {
    return deserializeFilters(serialized)
  } catch {
    return null
  }
}
