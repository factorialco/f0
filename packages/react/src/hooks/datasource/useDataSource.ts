import type { Dispatch, SetStateAction } from "react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import {
  DataSource,
  DataSourceDefinition,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  PaginationType,
  RecordType,
  SortingsDefinition,
  SortingsState,
} from "./types"
import { SearchOptions } from "./types/search.typings"

/**
 * Get the pagination type of a data adapter
 * @param dataAdapter - The data adapter to get the pagination type of
 * @returns The pagination type of the data adapter
 */

export const getDataSourcePaginationType = <
  D extends { paginationType?: PaginationType | undefined | never },
>(
  dataAdapter: D
): PaginationType => {
  return dataAdapter.paginationType ?? "no-pagination"
}

/**
 * Create a data source definition from a data source definition
 * This function is a helper to allow to infer the type of the data source definition
 * from the data source definition.
 *
 * @param definition - The data source definition to create from
 * @returns The created data source definition
 */
export const createDataSourceDefinition = <
  R extends RecordType = RecordType,
  FiltersSchema extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  definition: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>
): DataSourceDefinition<R, FiltersSchema, Sortings, Grouping> => {
  return definition
}

/**
 * A hook that manages data source state and filtering capabilities for a collection.
 * It creates and returns a reusable data source that can be shared across different
 * visualizations and components.
 *
 * This hook is intentionally separated from the rendering components to:
 * 1. Enable sharing the same data source across multiple components
 * 2. Allow for state management outside the rendering layer
 * 3. Support more complex data filtering, querying, and pagination logic
 * 4. Provide a clean separation between data management and visualization
 *
 * @template R - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 * @template Actions - The definition of available actions for the collection
 *
 * @param options - Configuration object containing:
 *   - filters: Optional filter configurations for the collection
 *   - currentFilters: Initial state of the filters
 *   - dataAdapter: Adapter for data fetching and manipulation
 *   - itemActions: Optional item actions available
 *   - actions: Optional DataCollection actions
 *   - presets: Optional filter presets
 * @param deps - Dependency array for memoization, similar to useEffect dependencies
 *
 * @returns A DataSource object containing:
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - dataAdapter: The data adapter for fetching/manipulating data
 * - itemActions: Available actions for records (items)
 * - actions: Available actions for the collection
 * - presets: Available filter presets
 */

export function useDataSource<
  R extends RecordType = RecordType,
  FiltersSchema extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  {
    currentFilters: initialCurrentFilters = {},
    currentGrouping: initialCurrentGrouping,
    filters,
    search,
    defaultSorting,
    dataAdapter,
    grouping,
    ...rest
  }: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>,
  deps: ReadonlyArray<unknown> = []
): DataSource<R, FiltersSchema, Sortings, Grouping> {
  const [currentFilters, _setCurrentFilters] = useState<
    FiltersState<FiltersSchema>
  >(initialCurrentFilters)

  const setCurrentFilters: Dispatch<
    SetStateAction<FiltersState<FiltersSchema>>
  > = useCallback(
    (value) => {
      if (typeof value === "function") {
        _setCurrentFilters((prev) => {
          const next = (
            value as (
              prevState: FiltersState<FiltersSchema>
            ) => FiltersState<FiltersSchema>
          )(prev)
          return JSON.stringify(next) === JSON.stringify(prev) ? prev : next
        })
      } else {
        _setCurrentFilters((prev) =>
          JSON.stringify(prev) === JSON.stringify(value) ? prev : value
        )
      }
    },
    [_setCurrentFilters]
  )

  const [currentSortings, setCurrentSortings] =
    useState<SortingsState<Sortings> | null>(defaultSorting || null)

  const searchOptions = {
    enabled: false,
    sync: false,
    ...search,
  } satisfies SearchOptions

  const [currentSearch, setCurrentSearch] = useState<string | undefined>()

  const [debouncedCurrentSearch, setDebouncedCurrentSearch] = useDebounceValue<
    string | undefined
  >(currentSearch, 200)

  useEffect(() => {
    if (searchOptions.sync) return
    setDebouncedCurrentSearch(currentSearch)
  }, [currentSearch, searchOptions.sync, setDebouncedCurrentSearch])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedFilters = useMemo(() => filters, deps)

  const [isLoading, setIsLoading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedDataAdapter = useMemo(() => dataAdapter, deps)

  const defaultGrouping = grouping?.mandatory
    ? {
        field: Object.keys(
          grouping.groupBy
        )[0] as keyof typeof grouping.groupBy,
        order: "asc" as const,
      }
    : undefined

  const [currentGrouping, setCurrentGrouping] = useState<
    GroupingState<R, Grouping>
  >(initialCurrentGrouping ?? defaultGrouping)

  // For mandatory grouping, ensure we have a valid grouping state
  if (grouping?.mandatory && !currentGrouping?.field) {
    throw new Error("Grouping is mandatory but no grouping state is set")
  }

  const {
    sortings,
    presets,
    presetsLoading,
    selectable,
    defaultSelectedItems,
  } = rest

  const stableDataSource = useMemo(
    () => ({
      // Unknown passthrough (e.g., extensions from higher-level sources)
      ...rest,
      // Definition passthrough
      sortings,
      presets,
      presetsLoading,
      selectable,
      defaultSelectedItems,
      defaultSorting,

      // Filters
      filters: memoizedFilters,
      currentFilters,
      setCurrentFilters,

      // Sortings
      currentSortings,
      setCurrentSortings,

      // Search
      search,
      currentSearch,
      setCurrentSearch,
      debouncedCurrentSearch,

      // Loading
      isLoading,
      setIsLoading,

      // Data adapter
      dataAdapter: memoizedDataAdapter,

      // Grouping
      setCurrentGrouping,
      currentGrouping,
      grouping,
    }),
    [
      // Definition
      sortings,
      presets,
      presetsLoading,
      selectable,
      defaultSelectedItems,
      defaultSorting,

      // Filters
      memoizedFilters,
      currentFilters,
      setCurrentFilters,

      // Sortings
      currentSortings,
      setCurrentSortings,

      // Search
      search,
      currentSearch,
      setCurrentSearch,
      debouncedCurrentSearch,

      // Loading
      isLoading,
      setIsLoading,

      // Data adapter
      memoizedDataAdapter,

      // Grouping
      setCurrentGrouping,
      currentGrouping,
      grouping,
    ]
  )

  return stableDataSource
}
