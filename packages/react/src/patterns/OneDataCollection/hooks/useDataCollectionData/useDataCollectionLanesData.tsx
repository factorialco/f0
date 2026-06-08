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
  const [laneIsLoading, setLaneIsLoading] = useState(false)
  const laneSource = useMemo(
    () => ({
      ...source,
      isLoading: laneIsLoading,
      setIsLoading: setLaneIsLoading,
    }),
    [source, laneIsLoading]
  )

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
  >(laneSource, {
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
  // Initialized to false; the mount effect sets it to true. This prevents
  // StrictMode's mount → cleanup → remount cycle from leaving the ref in a
  // permanently-false state and silently dropping queued updates.
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  // Stable wrapper around `options.onError` so passing it down to LaneProvider
  // does not invalidate the lanesProvider memo when the caller's callback
  // identity changes.
  const onErrorRef = useRef(options.onError)
  useEffect(() => {
    onErrorRef.current = options.onError
  })
  const stableOnError = useCallback((error: DataError) => {
    onErrorRef.current?.(error)
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

  // Plain-data fields are deep-compared so the memo only rebuilds when
  // content actually changes. Function/adapter fields fall back to reference
  // equality — callers must stabilize them (useDataSource already does this
  // for dataAdapter).
  const lanesProviderDeps = {
    lanes,
    currentFilters: source.currentFilters,
    currentNavigationFilters: source.currentNavigationFilters,
    currentSortings: source.currentSortings,
    currentGrouping: source.currentGrouping,
    currentSearch: source.currentSearch,
    grouping: source.grouping,
    summaries: source.summaries,
    dataAdapter: source.dataAdapter,
    itemPreFilter: source.itemPreFilter,
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
          onError={stableOnError}
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
