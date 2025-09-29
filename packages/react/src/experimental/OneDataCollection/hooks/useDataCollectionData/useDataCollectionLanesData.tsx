import {
  DataError,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  UseDataOptions,
} from "@/hooks/datasource"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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
  onHookUpdate?: (value: UseDataCollectionData<R>) => void
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

  const signature = useMemo(() => {
    return JSON.stringify({
      dataRef: hook.data,
      isInitialLoading: hook.isInitialLoading,
      isLoading: hook.isLoading,
      isLoadingMore: hook.isLoadingMore,
      pagination: hook.paginationInfo,
      error: hook.error?.message ?? null,
    })
  }, [
    hook.data,
    hook.isInitialLoading,
    hook.isLoading,
    hook.isLoadingMore,
    hook.paginationInfo,
    hook.error?.message,
  ])

  useEffect(() => {
    onHookUpdate?.(hook)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature])

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

  const handleHookUpdate = useCallback(
    (laneId: string | symbol, value: UseDataCollectionData<R>) => {
      setLanesHooks((prev) => {
        const curr = prev[laneId]
        if (
          curr &&
          curr.data === value.data &&
          curr.paginationInfo === value.paginationInfo &&
          curr.isInitialLoading === value.isInitialLoading &&
          curr.isLoading === value.isLoading &&
          curr.isLoadingMore === value.isLoadingMore &&
          curr.error?.message === value.error?.message
        ) {
          return prev
        }
        if (curr === value) return prev
        return { ...prev, [laneId]: value }
      })
    },
    []
  )

  const lanesSignature = useMemo(() => JSON.stringify(lanes), [lanes])
  const sourceDepsSignature = useMemo(
    () =>
      JSON.stringify({
        f: source.currentFilters,
        nf: source.currentNavigationFilters,
        s: source.currentSortings,
        g: source.currentGrouping,
        q: source.currentSearch,
        grp: source.grouping,
      }),
    [
      source.currentFilters,
      source.currentNavigationFilters,
      source.currentSortings,
      source.currentGrouping,
      source.currentSearch,
      source.grouping,
    ]
  )

  const stableSourceRef = useRef(source)
  useEffect(() => {
    stableSourceRef.current = source
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceDepsSignature])

  const stableLanesRef = useRef(lanes)
  useEffect(() => {
    stableLanesRef.current = lanes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lanesSignature])

  const lanesProvider = useMemo(() => {
    const currentLanes = stableLanesRef.current || []
    const currentSource = stableSourceRef.current
    return currentLanes.map((lane) => (
      <LaneProvider<
        R,
        Filters,
        Sortings,
        Summaries,
        NavigationFilters,
        Grouping
      >
        key={lane.id}
        lane={lane}
        onError={options.onError}
        source={currentSource}
        onHookUpdate={(value) => handleHookUpdate(lane.id, value)}
      ></LaneProvider>
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lanesSignature, sourceDepsSignature, handleHookUpdate, options.onError])

  return {
    lanesProvider,
    lanesHooks,
  }
}
