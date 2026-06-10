import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { SearchOptions } from "@/hooks/datasource/types/search.typings"
import { DataCollectionStorage } from "@/lib/providers/datacollection"
import { resolveDataCollectionFilters } from "@/lib/providers/datacollection/readDataCollectionStorage"

import { AppliedCollectionState } from "./types"

const isKeyOf = <T extends object>(
  obj: T,
  key: PropertyKey
): key is keyof T & string => typeof key === "string" && key in obj

export interface SeedableDefinition<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
> {
  filters?: Filters
  sortings?: Sortings
  search?: SearchOptions
  grouping?: Grouping
}

export interface SeedTarget<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
> {
  setCurrentFilters: (filters: FiltersState<Filters>) => void
  setCurrentSortings: (
    sortings: { field: keyof Sortings; order: "asc" | "desc" } | null
  ) => void
  setCurrentSearch: (search: string | undefined) => void
  setCurrentGrouping: (
    grouping:
      | { field: keyof Grouping["groupBy"]; order?: "asc" | "desc" }
      | undefined
  ) => void
}

/**
 * Applies a OneDataCollection's persisted state onto a data source's runtime
 * setters, validating every piece against the declared definition first so
 * stale persisted keys (schema drift, renamed filters) never reach the
 * adapter.
 *
 * - Filters: resolved per-visualization (`visualizationFilters` wins over
 *   `filters`), then pruned to the keys declared in `definition.filters`.
 * - Sortings: a single `{ field, order } | null` — `null` is an explicit
 *   user "clear sorting" and is applied; `undefined` keeps the defaults.
 * - Search: applied only when the definition enables search.
 * - Grouping: applied only when the persisted field is a declared groupBy —
 *   grouping changes record order, and prev/next must match the list.
 *
 * Pure besides invoking the given setters. Returns what was applied, or null
 * when the storage contributed nothing.
 */
export function seedFromStorage<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  storage: DataCollectionStorage<FiltersState<Filters>>,
  definition: SeedableDefinition<R, Filters, Sortings, Grouping>,
  target: SeedTarget<R, Filters, Sortings, Grouping>
): AppliedCollectionState<R, Filters, Sortings, Grouping> | null {
  const applied: AppliedCollectionState<R, Filters, Sortings, Grouping> = {}
  let anyApplied = false

  // Filters — per-visualization resolution + pruning against the definition
  const resolvedFilters = resolveDataCollectionFilters(storage)
  if (resolvedFilters && definition.filters) {
    const declaredFilters = definition.filters
    const pruned = Object.fromEntries(
      Object.entries(resolvedFilters).filter(([key]) =>
        isKeyOf(declaredFilters, key)
      )
    ) as FiltersState<Filters>
    if (Object.keys(pruned).length > 0) {
      target.setCurrentFilters(pruned)
      applied.filters = pruned
      anyApplied = true
    }
  }

  // Sortings — null means the user explicitly cleared the sorting
  const storedSortings = storage.sortings
  if (storedSortings === null) {
    target.setCurrentSortings(null)
    applied.sortings = null
    anyApplied = true
  } else if (
    storedSortings &&
    definition.sortings &&
    isKeyOf(definition.sortings, storedSortings.field)
  ) {
    const sortings = {
      field: storedSortings.field,
      order: storedSortings.order,
    }
    target.setCurrentSortings(sortings)
    applied.sortings = sortings
    anyApplied = true
  }

  // Search — only when the definition enables it
  if (typeof storage.search === "string" && definition.search?.enabled) {
    target.setCurrentSearch(storage.search)
    applied.search = storage.search
    anyApplied = true
  }

  // Grouping — only when the persisted field is a declared groupBy
  const storedGrouping = storage.grouping
  if (
    storedGrouping?.field !== undefined &&
    definition.grouping &&
    isKeyOf(definition.grouping.groupBy, storedGrouping.field)
  ) {
    const grouping = {
      field: storedGrouping.field,
      order: storedGrouping.order,
    }
    target.setCurrentGrouping(grouping)
    applied.grouping = grouping
    anyApplied = true
  }

  return anyApplied ? applied : null
}
