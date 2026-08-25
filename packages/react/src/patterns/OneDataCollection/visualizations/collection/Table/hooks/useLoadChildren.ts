import { useCallback, useEffect, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"

import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
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
import { promiseToObservable, PromiseState } from "@/lib/promise-to-observable"

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
  const {
    fetchedData: nestedFetchedData,
    updateFetchedData,
    resetGeneration,
  } = useNestedDataContext<R>()
  const [children, setChildren] = useState<R[]>(
    getChildren(nestedFetchedData?.[rowId])
  )
  const [paginationInfo, setPaginationInfo] = useState<
    ChildrenPaginationInfo | undefined
  >(nestedFetchedData?.[rowId]?.paginationInfo)
  const [isLoading, setIsLoading] = useState(false)
  const [childrenType, setChildrenType] = useState<NestedVariant>(
    getChildrenType(nestedFetchedData?.[rowId])
  )

  // The tree reset (filter/sorting/navigation change) is detected once, in the
  // NestedDataProvider — which survives rows unmounting and remounting as the
  // list re-renders, unlike a per-row comparison that re-seeds on remount and
  // would leave a fresh row showing the previous filter's cached children. Here
  // we only drop this row's local state when the generation moves, so the still
  // open row re-fetches (NestedRow re-arms its default-children request on the
  // same generation) instead of keeping the stale children.
  const previousResetGenerationRef = useRef(resetGeneration)
  useEffect(() => {
    if (previousResetGenerationRef.current === resetGeneration) return
    previousResetGenerationRef.current = resetGeneration
    setChildren([])
    setPaginationInfo(undefined)
    setChildrenType("basic")
  }, [resetGeneration])

  const subscriptionRef = useRef<ZenObservable.Subscription | undefined>()

  const processChildrenData = useCallback(
    (data: ChildrenResponse<R> | undefined) => {
      const loadedChildren = getChildren(data)
      const updatedChildren = [...children, ...loadedChildren]
      setChildren(updatedChildren)

      const updatedData: ChildrenResponse<R> = {
        records: updatedChildren,
        type: data?.type,
        paginationInfo: data?.paginationInfo,
      }

      updateFetchedData(rowId, updatedData)
      setChildrenType(getChildrenType(data))
      setPaginationInfo(data?.paginationInfo)

      return loadedChildren
    },
    [children, rowId, updateFetchedData]
  )

  const loadChildren = useCallback(() => {
    if (children.length > 0 && !paginationInfo?.hasMore) return children

    // Cancel any existing subscription
    subscriptionRef.current?.unsubscribe()

    setIsLoading(true)

    const result = source.fetchChildren?.({
      item,
      filters: source.currentFilters,
      pagination: paginationInfo,
      sortings: source.currentSortings,
    })

    // Handle undefined result
    if (!result) {
      setIsLoading(false)
      return []
    }

    // Handle synchronous data (not a Promise or Observable)
    if (!("then" in result) && !("subscribe" in result)) {
      const loadedChildren = processChildrenData(result)
      setIsLoading(false)
      return loadedChildren
    }

    // Convert Promise to Observable or use existing Observable
    const observable: Observable<PromiseState<ChildrenResponse<R>>> =
      "subscribe" in result ? result : promiseToObservable(result)

    subscriptionRef.current = observable.subscribe({
      next: (state) => {
        if (state.loading) {
          setIsLoading(true)
        } else if (state.error) {
          setIsLoading(false)
        } else if (state.data) {
          processChildrenData(state.data)
          setIsLoading(false)
        }
      },
      error: (error) => {
        setIsLoading(false)
        console.error("Error loading children:", error)
      },
      complete: () => {
        subscriptionRef.current = undefined
      },
    })

    return []
  }, [children, item, source, paginationInfo, processChildrenData])

  // Cleanup subscription on unmount
  useEffect(() => {
    return () => {
      subscriptionRef.current?.unsubscribe()
    }
  }, [])

  return {
    children,
    loadChildren,
    isLoading,
    childrenType,
    paginationInfo,
  }
}
