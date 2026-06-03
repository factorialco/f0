import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { getDataCollectionStorageKey } from "./dataCollectionStorageKey"
import { DataCollectionStorage } from "./types"

/**
 * Synchronously reads a OneDataCollection's persisted state from localStorage.
 *
 * @param id - The same `id` passed to OneDataCollection (e.g.
 *             `organization/employees/v1`), WITHOUT the `datacollection-`
 *             prefix — this function applies it.
 * @returns The parsed storage, or `null` on missing key / parse error.
 */
export const readDataCollectionStorage = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  id: string
): DataCollectionStorage<CurrentFiltersState> | null => {
  try {
    const raw = localStorage.getItem(getDataCollectionStorageKey(id))
    if (raw === null) return null
    // JSON.parse returns `any`, which flows into the typed return — no `as`.
    const parsed: DataCollectionStorage<CurrentFiltersState> = JSON.parse(raw)
    return parsed
  } catch {
    return null
  }
}

/**
 * Resolves the effective filters for the persisted visualization:
 * `visualizationFilters[String(visualization ?? 0)] ?? filters`.
 *
 * Pure equivalent of the runtime keying in usePerVisualizationFilters.ts; the
 * hook's refs/transitions/preset-hydration are irrelevant when reading
 * already-persisted state.
 *
 * NOTE on sortings: F0 persists `sortings` as `SortingsState` — a single
 * `{ field; order } | null`, NOT an array. Read it via `storage?.sortings`.
 */
export const resolveDataCollectionFilters = <
  CurrentFiltersState extends FiltersState<FiltersDefinition> =
    FiltersState<FiltersDefinition>,
>(
  storage: Pick<
    DataCollectionStorage<CurrentFiltersState>,
    "visualization" | "visualizationFilters" | "filters"
  > | null
): CurrentFiltersState | undefined => {
  if (!storage) return undefined
  return (
    storage.visualizationFilters?.[String(storage.visualization ?? 0)] ??
    storage.filters
  )
}
