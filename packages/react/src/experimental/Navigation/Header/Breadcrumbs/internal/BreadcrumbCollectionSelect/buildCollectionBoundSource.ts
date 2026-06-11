import {
  adaptDataAdapterToInfiniteScroll,
  DataSourceDefinition,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { DataCollectionStorage } from "@/lib/providers/datacollection"
import { resolveDataCollectionFilters } from "@/lib/providers/datacollection/readDataCollectionStorage"

type AnyDataSourceDefinition = DataSourceDefinition<
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  GroupingDefinition<RecordType>
>

export interface CollectionBoundSeedOptions {
  /** Seed `currentFilters` from the persisted filters. @default true */
  filters?: boolean
  /** Seed `currentSortings` from the persisted sorting. @default true */
  sortings?: boolean
}

export interface BuildCollectionBoundSourceOptions {
  /** Which persisted state to seed. */
  seed?: CollectionBoundSeedOptions
  /**
   * Keep the filter definitions in the built source so the select renders
   * its in-dropdown filter picker (pre-applied with the seeded filters).
   * @default false
   */
  showFilters?: boolean
}

/**
 * Builds the data source a collection-bound jump-to select fetches from:
 * the declared definition with the persisted OneDataCollection state seeded
 * in, adapted for select consumption.
 *
 * - **Filters**: resolved per-visualization (`visualizationFilters` wins over
 *   `filters`), pruned to the keys declared in `source.filters` so stale
 *   persisted keys never reach the adapter, and applied as `currentFilters`.
 *   By default the filter/preset *definitions* are stripped from the result:
 *   the select applies the list's filters, it does not let users edit them —
 *   and F0Select would otherwise render its in-dropdown filter picker. Pass
 *   `showFilters: true` to keep the filter definitions so users can refine
 *   the jump-to list in the dropdown, starting from the seeded filters.
 *   Presets are always stripped — they are list-page UI.
 * - **Sortings**: the persisted single `{ field, order } | null` is applied
 *   as `currentSortings` when the field is declared (`null` = the user
 *   explicitly cleared the sorting on the list).
 * - **Search is never seeded**: the list's search is a transient query and
 *   the select has its own searchbox.
 * - **Adapter**: wrapped with `adaptDataAdapterToInfiniteScroll` so the
 *   typical `pages` list adapter can be consumed by the select.
 *
 * Pure: returns a new definition, never mutates the input. `null`/empty
 * storage → unfiltered fallback (the declared definition as-is).
 */
export function buildCollectionBoundSource(
  source: AnyDataSourceDefinition,
  storage: DataCollectionStorage | null,
  options?: BuildCollectionBoundSourceOptions
): AnyDataSourceDefinition {
  const seedFilters = options?.seed?.filters ?? true
  const seedSortings = options?.seed?.sortings ?? true
  const showFilters = options?.showFilters ?? false

  let currentFilters = source.currentFilters
  if (seedFilters && storage) {
    const resolved = resolveDataCollectionFilters(storage)
    if (resolved) {
      const declaredFilters = source.filters
      const pruned: FiltersState<FiltersDefinition> = declaredFilters
        ? Object.fromEntries(
            Object.entries(resolved).filter(([key]) => key in declaredFilters)
          )
        : resolved
      if (Object.keys(pruned).length > 0) {
        currentFilters = pruned
      }
    }
  }

  let currentSortings = source.currentSortings
  if (seedSortings && storage && storage.sortings !== undefined) {
    if (storage.sortings === null) {
      currentSortings = null
    } else if (source.sortings && storage.sortings.field in source.sortings) {
      currentSortings = {
        field: storage.sortings.field,
        order: storage.sortings.order,
      }
    }
  }

  const {
    filters: sourceFilters,
    presets: _presets,
    presetsLoading: _presetsLoading,
    ...rest
  } = source

  return {
    ...rest,
    ...(showFilters && sourceFilters ? { filters: sourceFilters } : {}),
    currentFilters,
    currentSortings,
    dataAdapter: adaptDataAdapterToInfiniteScroll(source.dataAdapter),
  }
}
