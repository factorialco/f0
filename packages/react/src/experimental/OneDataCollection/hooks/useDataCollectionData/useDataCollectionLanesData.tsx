import { useCallback, useEffect, useMemo, useState } from "react"

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

  useEffect(() => {
    onHookUpdate?.(hook)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hook])

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
      setLanesHooks((prev) => ({ ...prev, [laneId]: value }))
    },
    []
  )

  const lanesSignature = useMemo(() => JSON.stringify(lanes), [lanes])
  const currentFiltersSignature = useMemo(
    () => JSON.stringify(source.currentFilters),
    [source.currentFilters]
  )
  const currentNavigationFiltersSignature = useMemo(
    () => JSON.stringify(source.currentNavigationFilters),
    [source.currentNavigationFilters]
  )
  const currentSortingsSignature = useMemo(
    () => JSON.stringify(source.currentSortings),
    [source.currentSortings]
  )
  const currentGroupingSignature = useMemo(
    () => JSON.stringify(source.currentGrouping),
    [source.currentGrouping]
  )
  const currentSearchSignature = useMemo(
    () => JSON.stringify(source.currentSearch),
    [source.currentSearch]
  )
  const groupingSignature = useMemo(
    () => JSON.stringify(source.grouping),
    [source.grouping]
  )

  // Track dataAdapter changes to force refetch when cache updates
  const dataAdapterSignature = useMemo(
    () => JSON.stringify(source.dataAdapter),
    [source.dataAdapter]
  )

  const lanesProvider = useMemo(
    () => {
      return (lanes || []).map((lane) => (
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
          source={source}
          onHookUpdate={(value) => handleHookUpdate(lane.id, value)}
        ></LaneProvider>
      ))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // TODO check why source ref is updated always
      lanesSignature,
      handleHookUpdate,
      currentFiltersSignature,
      currentNavigationFiltersSignature,
      currentSortingsSignature,
      currentGroupingSignature,
      currentSearchSignature,
      groupingSignature,
      dataAdapterSignature, // Include dataAdapter to detect cache updates
    ]
  )

  return {
    lanesProvider,
    lanesHooks,
  }
}
