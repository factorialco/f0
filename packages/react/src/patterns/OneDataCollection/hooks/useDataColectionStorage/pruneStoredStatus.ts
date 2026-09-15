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

type Status<CurrentFiltersState extends FiltersState<FiltersDefinition>> =
  DataCollectionStatusComplete<CurrentFiltersState>

type AnyStatus = Status<FiltersState<FiltersDefinition>>

/**
 * Every field of the stored status, split by how this module treats it.
 *
 * `pruneStoredStatus` builds its result key by key, so a field missing from
 * both lists would be dropped from every hydration without a type error. The
 * assertion below turns that into a compile error instead: adding a field to
 * `DataCollectionStatusComplete` forces a decision here. (Exported only so it
 * counts as used — it has no runtime form and nothing imports it.)
 */
type ValidatedStatusKey =
  | "filters"
  | "visualizationFilters"
  | "navigationFilters"
  | "sortings"
  | "grouping"
  | "search"
  | "visualization"
type PassThroughStatusKey = "settings" | "customPresets" | "selectedPresetId"

type AssertNever<T extends never> = T
export type AllStatusKeysHandled = AssertNever<
  Exclude<keyof AnyStatus, ValidatedStatusKey | PassThroughStatusKey>
>

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
  if (!isPlainObject(stored)) {
    return undefined
  }
  const kept = Object.fromEntries(
    Object.entries(stored).filter(([key]) => declared.has(key))
  )
  if (Object.keys(kept).length === 0 && Object.keys(stored).length > 0) {
    return undefined
  }
  return kept as T
}

/**
 * Per-visualization filters, validated against the collection-level filter keys
 * rather than the narrower per-visualization override: the superset never
 * deletes state that is valid for another visualization, and narrowing per view
 * is already usePerVisualizationFilters' job.
 */
const pruneVisualizationFilters = <
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
>(
  stored: unknown,
  filterKeys: Set<string>,
  visualizationCount: number | undefined
): Record<string, CurrentFiltersState> | undefined => {
  if (!isPlainObject(stored)) {
    return undefined
  }
  const entries = Object.entries(stored)
    .filter(([index]) =>
      isDeclaredVisualization(Number(index), visualizationCount)
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
  return entries.length > 0 ? Object.fromEntries(entries) : undefined
}

/**
 * `null` is the user having explicitly cleared the sorting and is applied;
 * `undefined` leaves the declared defaults in place.
 */
const pruneSortings = (
  stored: AnyStatus["sortings"],
  definition: StoredStatusDefinition
): AnyStatus["sortings"] | undefined => {
  if (stored === null) {
    return null
  }
  if (stored && declaredKeys(definition.sortings).has(String(stored.field))) {
    return stored
  }
  return undefined
}

const pruneGrouping = (
  stored: AnyStatus["grouping"],
  definition: StoredStatusDefinition
): AnyStatus["grouping"] | undefined => {
  if (stored?.field === undefined) {
    return undefined
  }
  return declaredKeys(definition.grouping?.groupBy).has(String(stored.field))
    ? stored
    : undefined
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
 * Three features pass through untouched:
 * - `settings` carries per-column preferences keyed by ids this module cannot
 *   resolve; stale entries match no column and are inert.
 * - `customPresets` is user-authored data. Pruning the filters captured inside
 *   a saved view is a separate, more invasive change — a stale preset only
 *   reaches the adapter when the user explicitly selects it, not on hydration.
 * - `selectedPresetId` only has meaning against those presets, so validating it
 *   while they pass through unchecked would be incoherent. A dangling id
 *   selects nothing: every consumer looks it up in the merged preset list.
 */
export const pruneStoredStatus = <
  CurrentFiltersState extends FiltersState<FiltersDefinition>,
>(
  stored: Status<CurrentFiltersState>,
  definition: StoredStatusDefinition
): Status<CurrentFiltersState> => {
  // A handler is free to resolve with anything; a non-object payload carries no
  // recoverable state.
  if (!isPlainObject(stored)) {
    return {}
  }

  const filterKeys = declaredKeys(definition.filters)
  const pruned: Status<CurrentFiltersState> = {}

  const assign = <K extends keyof Status<CurrentFiltersState>>(
    key: K,
    value: Status<CurrentFiltersState>[K] | undefined
  ) => {
    if (value !== undefined) {
      pruned[key] = value
    }
  }

  assign("settings", stored.settings)
  assign("customPresets", stored.customPresets)
  assign("selectedPresetId", stored.selectedPresetId)

  assign(
    "filters",
    pruneToDeclared<CurrentFiltersState>(stored.filters, filterKeys)
  )
  assign(
    "navigationFilters",
    pruneToDeclared<NonNullable<AnyStatus["navigationFilters"]>>(
      stored.navigationFilters,
      declaredKeys(definition.navigationFilters)
    )
  )
  assign(
    "visualizationFilters",
    pruneVisualizationFilters<CurrentFiltersState>(
      stored.visualizationFilters,
      filterKeys,
      definition.visualizationCount
    )
  )
  assign("sortings", pruneSortings(stored.sortings, definition))
  assign("grouping", pruneGrouping(stored.grouping, definition))

  if (typeof stored.search === "string" && definition.search?.enabled) {
    assign("search", stored.search)
  }
  if (
    isDeclaredVisualization(stored.visualization, definition.visualizationCount)
  ) {
    assign("visualization", stored.visualization)
  }

  return pruned
}
