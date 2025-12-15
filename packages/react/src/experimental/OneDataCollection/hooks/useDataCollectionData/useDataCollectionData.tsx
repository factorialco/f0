import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  useData,
  UseDataOptions,
} from "@/hooks/datasource"
import { useState } from "react"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { DataCollectionSource } from "../useDataCollectionSource"
import { UseDataCollectionDataReturn } from "./types"

function useDCDataWithoutLanes<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
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
  >,
  { filters, onError }: UseDataOptions<R, Filters> = {}
) {
  const [summariesData, setSummariesData] = useState<R | undefined>(undefined)

  const data = useData<R, Filters, Sortings, Grouping>(
    source,
    {
      filters,
      onError,
      fetchParamsProvider: (options) => {
        return {
          ...options,
          navigationFilters: source.currentNavigationFilters,
        }
      },
      onResponse: (result) => {
        // Extract summaries data if available
        const extractedSummaries = "summaries" in result ? result.summaries : undefined

        setSummariesData(extractedSummaries)
      },
    },
    [JSON.stringify(source.currentNavigationFilters)]
  )

  return {
    ...data,
    summaries: summariesData,
  }
}

export type UseDataCollectionData<R extends RecordType> = UseDataCollectionDataReturn<R> & {
  summaries?: R
}

export function useDataCollectionData<
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
): UseDataCollectionData<R> {
  const noLanesData = useDCDataWithoutLanes(source, options)

  return {
    ...noLanesData,
  }
}
