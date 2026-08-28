import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { DataCollectionStatusComplete } from "./types"

/**
 * The declared shape a stored payload is validated against.
 *
 * Every definition is deliberately typed as a bare `object`: the only thing
 * validation needs from it is its set of declared keys, and the real
 * definitions (`FiltersDefinition`, `SortingsDefinition`,
 * `GroupingDefinition<R>`…) are mapped types whose generics would otherwise
 * have to be threaded through this module for no gain.
 *
 * An absent definition means the collection declares no such feature, so any
 * stored value for it is stale by construction and gets dropped.
 */
export type StoredStatusDefinition = {
  filters?: object
  sortings?: object
  grouping?: { groupBy?: object }
  navigationFilters?: object
  search?: { enabled?: boolean }
  /** Number of declared visualizations; a stored index outside it is stale. */
  visualizationCount?: number
}

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

const declaredKeys = (definition: object | undefined): Set<string> =>
  new Set(definition ? Object.keys(definition) : [])

const isDeclaredVisualization = (
  index: unknown,
  visualizationCount: number | undefined
): index is number =>
  typeof index === "number" &&
  Number.isInteger(index) &&
  index >= 0 &&
  (visualizationCount === undefined || index < visualizationCount)

/**
 * Drops the entries of a stored key/value state that the definition no longer
 * declares. Returns `undefined` when the whole value should be discarded.
 *
 * An explicitly stored empty state is the user having cleared everything and is
 * honored as-is. Empty *by pruning* — every stored key unknown — is schema
 * drift rather than intent, so the collection keeps its declared defaults.
 */
const pruneToDeclared = <T extends object>(
  stored: unknown,
  declared: Set<string>
): T | undefined => {
  if (!isPlainObject(stored)) return undefined
  const kept = Object.fromEntries(
    Object.entries(stored).filter(([key]) => declared.has(key))
  )
  if (Object.keys(kept).length === 0 && Object.keys(stored).length > 0) {
    return undefined
  }
  return kept as T
}

/**
 * Validates a stored data collection status against the collection's declared
 * definition, dropping everything that no longer applies.
 *
 * Stored state is untrusted input: it can predate a schema change (renamed or
 * removed filters, a dropped visualization) or — when two collections end up
 * sharing a storage key — belong to an entirely different collection. Applying
 * it verbatim pushes undeclared filter keys straight into the data adapter, so
 * every piece is checked against the definition first.
 *
 * Mirrors the validation `seedFromStorage` already performs for the item
 * navigation seeding path, which reads the same persisted payload.
 *
 * Two features pass through untouched:
 * - `settings` carries per-column preferences keyed by ids this module cannot
 *   resolve; stale entries match no column and are inert.
 * - `customPresets` is user-authored data. Pruning the filters captured inside
 *   a saved view is a separate, more invasive change — a stale preset only
 *   reaches the adapter when the user explicitly selects it, not on hydration.
 */
export const pruneStoredStatus = <
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
>(
  stored: DataCollectionStatusComplete<CurrentFiltersState>,
  definition: StoredStatusDefinition
): DataCollectionStatusComplete<CurrentFiltersState> => {
  // A handler is free to resolve with anything; a non-object payload carries no
  // recoverable state.
  if (!isPlainObject(stored)) return {}

  const filterKeys = declaredKeys(definition.filters)
  const pruned: DataCollectionStatusComplete<CurrentFiltersState> = {}

  if (stored.settings !== undefined) {
    pruned.settings = stored.settings
  }

  if (stored.customPresets !== undefined) {
    pruned.customPresets = stored.customPresets
  }

  if (stored.filters !== undefined) {
    const filters = pruneToDeclared<CurrentFiltersState>(
      stored.filters,
      filterKeys
    )
    if (filters !== undefined) pruned.filters = filters
  }

  if (stored.navigationFilters !== undefined) {
    const navigationFilters = pruneToDeclared<
      NonNullable<typeof stored.navigationFilters>
    >(stored.navigationFilters, declaredKeys(definition.navigationFilters))
    if (navigationFilters !== undefined) {
      pruned.navigationFilters = navigationFilters
    }
  }

  if (isPlainObject(stored.visualizationFilters)) {
    // Validated against the collection-level filter keys rather than the
    // narrower per-visualization override: the superset never deletes state
    // that is valid for another visualization, and narrowing per view is
    // already usePerVisualizationFilters' job.
    const perVisualization = Object.entries(stored.visualizationFilters)
      .filter(([index]) =>
        isDeclaredVisualization(Number(index), definition.visualizationCount)
      )
      .map(
        ([index, filters]) =>
          [
            index,
            pruneToDeclared<CurrentFiltersState>(filters, filterKeys),
          ] as const
      )
      .filter(
        (entry): entry is readonly [string, CurrentFiltersState] =>
          entry[1] !== undefined
      )
    if (perVisualization.length > 0) {
      pruned.visualizationFilters = Object.fromEntries(perVisualization)
    }
  }

  // `null` is the user having explicitly cleared the sorting and is applied;
  // `undefined` leaves the declared defaults in place.
  if (stored.sortings === null) {
    pruned.sortings = null
  } else if (
    stored.sortings &&
    declaredKeys(definition.sortings).has(String(stored.sortings.field))
  ) {
    pruned.sortings = stored.sortings
  }

  if (
    stored.grouping?.field !== undefined &&
    declaredKeys(definition.grouping?.groupBy).has(
      String(stored.grouping.field)
    )
  ) {
    pruned.grouping = stored.grouping
  }

  if (typeof stored.search === "string" && definition.search?.enabled) {
    pruned.search = stored.search
  }

  if (
    isDeclaredVisualization(stored.visualization, definition.visualizationCount)
  ) {
    pruned.visualization = stored.visualization
  }

  return pruned
}
