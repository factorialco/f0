import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import {
  ChildrenPaginationInfo,
  ChildrenResponse,
  NestedResponseWithType,
  NestedVariant,
} from "@/hooks/datasource/types/nested.typings"
import { useCallback, useState } from "react"
import { useNestedDataContext } from "../providers/NestedProvider"

interface UseLoadChildrenProps<
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
}

const isDetailed = <R extends RecordType>(
  data?: ChildrenResponse<R>
): data is NestedResponseWithType<R> => {
  if (!data) return false

  return typeof data === "object" && "type" in data && data.type === "detailed"
}

const getChildren = <R extends RecordType>(
  fetchedData?: ChildrenResponse<R>
): R[] => {
  if (!fetchedData) return []

  return Array.isArray(fetchedData) ? fetchedData : fetchedData.records
}

const getChildrenType = <R extends RecordType>(
  fetchedData?: ChildrenResponse<R>
): NestedVariant => {
  if (!fetchedData) return "basic"

  return isDetailed(fetchedData) ? (fetchedData?.type ?? "basic") : "basic"
}

export const useLoadChildren = <
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
}: UseLoadChildrenProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const { fetchedData: nestedFetchedData, updateFetchedData } =
    useNestedDataContext<R>()
  const [children, setChildren] = useState<R[]>(
    getChildren(nestedFetchedData?.[rowId])
  )
  const [paginationInfo, setPaginationInfo] = useState<
    ChildrenPaginationInfo<R> | undefined
  >(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [childrenType, setChildrenType] = useState<NestedVariant>(
    getChildrenType(nestedFetchedData?.[rowId])
  )

  const loadChildren = useCallback(async () => {
    if (children.length > 0 && !paginationInfo?.hasMore) return children

    setIsLoading(true)

    const data = await source.fetchChildren?.(
      item,
      source.currentFilters,
      paginationInfo
    )
    const loadedChildren = getChildren(data)

    setChildren((prev) => [...prev, ...loadedChildren])
    updateFetchedData(rowId, data ?? { records: [] })
    setChildrenType(getChildrenType(data))
    setPaginationInfo(data?.paginationInfo)
    setIsLoading(false)

    return loadedChildren
  }, [children, item, source, rowId, updateFetchedData, paginationInfo])

  return {
    children,
    loadChildren,
    isLoading,
    childrenType,
    paginationInfo,
  }
}
