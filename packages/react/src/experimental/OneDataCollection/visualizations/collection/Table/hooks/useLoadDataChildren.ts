import { useCallback, useEffect, useRef, useState } from "react"

import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { PaginationInfo } from "@/hooks/datasource/types/fetch.typings"
import {
  ChildrenPaginationInfo,
  ChildrenResponse,
  NestedVariant,
} from "@/hooks/datasource/types/nested.typings"

import { useNestedDataContext } from "../providers/NestedProvider"
import { useChildrenDataSource } from "./useChildrenDataSource"

export interface Props<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> {
  rowId: string
  item: R
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  onClearFetchedData: () => void
}

const getChildrenType = <R extends RecordType>(
  data?: ChildrenResponse<R>
): NestedVariant => (data?.type === "detailed" ? "detailed" : "basic")

const toChildrenPaginationInfo = (
  info: PaginationInfo | null
): ChildrenPaginationInfo | undefined =>
  info
    ? {
        total: info.total,
        perPage: info.perPage,
        currentPage: "currentPage" in info ? info.currentPage : 1,
        pagesCount:
          "pagesCount" in info
            ? info.pagesCount
            : Math.ceil(info.total / info.perPage),
        hasMore: "hasMore" in info ? info.hasMore : false,
      }
    : undefined

/**
 * Hook that loads children data lazily for a row using useData internally.
 * - First call to loadChildren triggers the initial fetch
 * - Subsequent calls load more data (infinite scroll)
 */
export const useLoadDataChildren = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  rowId,
  item,
  source,
  onClearFetchedData,
}: Props<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const { fetchedData, updateFetchedData, clearFetchedData } =
    useNestedDataContext<R>()
  const [childrenType, setChildrenType] = useState<NestedVariant>(
    getChildrenType(fetchedData?.[rowId])
  )
  const [enabled, setEnabled] = useState(false)
  const prevState = useRef({
    filters: source.currentFilters,
    sortings: source.currentSortings,
    navFilters: source.currentNavigationFilters,
  })

  const { data, isLoading, paginationInfo, loadMore, totalItems } =
    useChildrenDataSource<R, Filters, Sortings, Grouping>(
      item,
      source,
      setChildrenType,
      enabled
    )
  const children = data.records as R[]
  const childrenPaginationInfo = toChildrenPaginationInfo(paginationInfo)

  const loadChildren = useCallback(() => {
    if (!enabled) setEnabled(true)
    else if (childrenPaginationInfo?.hasMore) loadMore()
  }, [enabled, childrenPaginationInfo?.hasMore, loadMore])

  useEffect(() => {
    if (children.length > 0) {
      updateFetchedData(rowId, {
        records: children,
        type: childrenType,
        paginationInfo: childrenPaginationInfo,
      })
    }
  }, [children, childrenType, childrenPaginationInfo, rowId, updateFetchedData])

  useEffect(() => {
    const { filters, sortings, navFilters } = prevState.current
    const hasChanged =
      filters !== source.currentFilters ||
      sortings !== source.currentSortings ||
      navFilters !== source.currentNavigationFilters

    if (hasChanged) {
      setEnabled(false)
      setChildrenType("basic")
      clearFetchedData()
      onClearFetchedData()
      prevState.current = {
        filters: source.currentFilters,
        sortings: source.currentSortings,
        navFilters: source.currentNavigationFilters,
      }
    }
  }, [
    source.currentFilters,
    source.currentSortings,
    source.currentNavigationFilters,
    clearFetchedData,
    onClearFetchedData,
  ])

  return {
    children,
    childrenType,
    isLoading,
    paginationInfo: childrenPaginationInfo,
    loadChildren,
    totalItems,
  }
}
