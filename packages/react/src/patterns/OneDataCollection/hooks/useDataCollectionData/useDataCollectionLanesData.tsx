import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useDeepCompareMemoize } from "use-deep-compare-effect"

import {
  DataError,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  UseDataOptions,
} from "@/hooks/datasource"

import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { DataCollectionSource, Lane } from "../useDataCollectionSource"
import {
  UseDataCollectionData,
  useDataCollectionData,
} from "./useDataCollectionData"
import { mergeFiltersWithIntersection } from "./utils"

type LaneProviderProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: Omit<
    DataCollectionSource<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActionsDefinition<R>,
      NavigationFilters,
      Grouping
    >,
    "lanes"
  >
  lane: Lane<Filters>
  onError?: (error: DataError) => void
  onHookUpdate?: (
    laneId: string | symbol,
    value: UseDataCollectionData<R>
  ) => void
}

const LaneProvider = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  lane,
  onError,
  onHookUpdate,
}: LaneProviderProps<
  R,
  Filters,
  Sortings,
  Summaries,
  NavigationFilters,
  Grouping
>) => {
  const mergedFilters = useMemo(
    () => mergeFiltersWithIntersection(source.currentFilters, lane.filters),
    [source.currentFilters, lane.filters]
  )

  const hook = useDataCollectionData<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    filters: mergedFilters,
    onError,
  })

  const {
    data,
    search,
    setSearch,
    isInitialLoading,
    isLoading,
    isLoadingMore,
    error,
    paginationInfo,
    setPage,
    loadMore,
    totalItems,
    mergedFilters: hookMergedFilters,
    summaries,
  } = hook

  useEffect(() => {
    onHookUpdate?.(lane.id, {
      data,
      search,
      setSearch,
      isInitialLoading,
      isLoading,
      isLoadingMore,
      error,
      paginationInfo,
      setPage,
      loadMore,
      totalItems,
      mergedFilters: hookMergedFilters,
      summaries,
    })
  }, [
    data,
    search,
    setSearch,
    isInitialLoading,
    isLoading,
    isLoadingMore,
    error,
    paginationInfo,
    setPage,
    loadMore,
    totalItems,
    hookMergedFilters,
    summaries,
    onHookUpdate,
    lane.id,
  ])

  return null
}

export function useDataCollectionLanesData<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActionsDefinition<R>,
    NavigationFilters,
    Grouping
  >,
  options: UseDataOptions<R, Filters> = {}
) {
  const { lanes } = source

  const hasLanes = useMemo(() => lanes && lanes.length > 0, [lanes])

  if (!hasLanes) {
    throw new Error("Lanes has not been configured on data source")
  }

  const [lanesHooks, setLanesHooks] = useState<
    Record<string | symbol, UseDataCollectionData<R>>
  >({})

  const pendingLaneUpdatesRef = useRef<
    Record<string | symbol, UseDataCollectionData<R>>
  >({})
  const flushScheduledRef = useRef(false)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const handleHookUpdate = useCallback(
    (laneId: string | symbol, value: UseDataCollectionData<R>) => {
      pendingLaneUpdatesRef.current[laneId] = value
      if (flushScheduledRef.current) return
      flushScheduledRef.current = true
      queueMicrotask(() => {
        const pending = pendingLaneUpdatesRef.current
        pendingLaneUpdatesRef.current = {}
        flushScheduledRef.current = false
        if (!isMountedRef.current) return
        setLanesHooks((prev) => ({ ...prev, ...pending }))
      })
    },
    []
  )

  // The deep-compare descriptor below tracks the *content* of `source` (and
  // `options.onError`) so the `lanesProvider` useMemo re-runs whenever any
  // captured value changes, even though `source`'s reference is unstable.
  // Passing `source` directly to LaneProvider is safe: the memo re-runs on
  // every content change, so children always receive the latest `source`.
  const lanesProviderDeps = {
    lanes,
    currentFilters: source.currentFilters,
    currentNavigationFilters: source.currentNavigationFilters,
    currentSortings: source.currentSortings,
    currentGrouping: source.currentGrouping,
    currentSearch: source.currentSearch,
    grouping: source.grouping,
    dataAdapter: source.dataAdapter,
    onError: options.onError,
  }

  const lanesProviderDepsMemoized = useDeepCompareMemoize(lanesProviderDeps)

  const lanesProvider = useMemo(
    () =>
      (lanes || []).map((lane) => (
        <LaneProvider<
          R,
          Filters,
          Sortings,
          Summaries,
          NavigationFilters,
          Grouping
        >
          key={String(lane.id)}
          lane={lane}
          onError={options.onError}
          source={source}
          onHookUpdate={handleHookUpdate}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lanesProviderDepsMemoized]
  )

  return {
    lanesProvider,
    lanesHooks,
  }
}
