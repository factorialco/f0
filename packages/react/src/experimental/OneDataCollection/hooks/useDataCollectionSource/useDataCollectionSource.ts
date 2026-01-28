/**
 * This hooks extends the useDataSource hook to provide features only releated to data collection like: Bulk actions, summary, navigation filters, etc.
 * NOTE: If a feature needs to be used outside of the data collection, extract it and move it to the useDataSource hook. DON'T USE THIS HOOK FOR ELEMENTS NOT RELATED TO DATA COLLECTION.
 */

import { useDeepCompareEffect } from "@reactuses/core"
import { useMemo, useState } from "react"

import {
  DataAdapter,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  useDataSource,
} from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"

import { ItemActionsDefinition } from "../../item-actions"
import { navigationFilterTypes } from "../../navigationFilters"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { DataCollectionSource, DataCollectionSourceDefinition } from "./types"

export const useDataCollectionSource = <
  R extends RecordType = RecordType,
  FiltersSchema extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  source: DataCollectionSourceDefinition<
    R,
    FiltersSchema,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  deps: ReadonlyArray<unknown> = []
): DataCollectionSource<
  R,
  FiltersSchema,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> => {
  const i18n = useI18n()
  const {
    navigationFilters,
    summaries,
    currentNavigationFilters: externalCurrentNavigationFilters,
  } = source

  const datasource = useDataSource<R, FiltersSchema, Sortings, Grouping>(
    {
      ...source,
      dataAdapter: source.dataAdapter as DataAdapter<R, FiltersSchema>,
    },
    deps
  )

  const [currentNavigationFilters, setCurrentNavigationFilters] = useState<
    NavigationFiltersState<NavigationFilters>
  >(() => {
    if (!navigationFilters) {
      return {} as NavigationFiltersState<NavigationFilters>
    }

    return Object.fromEntries(
      Object.entries(navigationFilters).map(([key, filter]) => {
        const filterType = navigationFilterTypes[filter.type]
        return [
          key,
          filterType.valueConverter
            ? filterType.valueConverter(filter.defaultValue, filter, i18n)
            : filter.defaultValue,
        ]
      })
    ) as NavigationFiltersState<NavigationFilters>
  })

  useDeepCompareEffect(() => {
    if (!externalCurrentNavigationFilters) return
    setCurrentNavigationFilters(externalCurrentNavigationFilters)
  }, [externalCurrentNavigationFilters])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedSummaries = useMemo(() => summaries, deps)

  return {
    ...datasource,
    summaries: memoizedSummaries,
    navigationFilters,
    currentNavigationFilters,
    setCurrentNavigationFilters,
  } as DataCollectionSource<
    R,
    FiltersSchema,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
}
