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

  const restoredData = nestedFetchedData?.[rowId]
  const restoredChildren = getChildren(restoredData)

  const [children, setChildren] = useState<R[]>(restoredChildren)
  const [paginationInfo, setPaginationInfo] = useState<
    ChildrenPaginationInfo | undefined
  >(restoredData?.paginationInfo)
  const [isLoading, setIsLoading] = useState(false)
  const [childrenType, setChildrenType] = useState<NestedVariant>(
    getChildrenType(restoredData)
  )

  // Children kept per requested page, so a page that re-emits REPLACES its own
  // slice: one flat list made a re-emission append to whatever it held when that
  // page subscribed, freezing earlier rows and duplicating reordered ones.
  // Page 0 is the cache restored on remount — nothing live can re-emit it.
  const pagesRef = useRef<Map<number, R[]>>(
    new Map(restoredChildren.length > 0 ? [[0, restoredChildren]] : [])
  )
  // Only the highest page loaded owns `hasMore`/`currentPage`, so an earlier page
  // re-emitting cannot rewind the cursor.
  const frontierRef = useRef<{
    page: number
    type: NestedVariant
    paginationInfo?: ChildrenPaginationInfo
  }>({
    page: restoredData?.paginationInfo?.currentPage ?? 0,
    type: getChildrenType(restoredData),
    paginationInfo: restoredData?.paginationInfo,
  })

  // One subscription per page: loading the next page must not silence the earlier
  // ones, which are how the consumer pushes updates for rows still on screen.
  const subscriptionsRef = useRef<Map<number, ZenObservable.Subscription>>(
    new Map()
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

    // Drop every live page: their subscriptions belong to the previous query and
    // must not re-emit into the reset tree (see the per-page notes above).
    subscriptionsRef.current.forEach((subscription) =>
      subscription.unsubscribe()
    )
    subscriptionsRef.current.clear()
    pagesRef.current.clear()
    frontierRef.current = {
      page: 0,
      type: "basic",
      paginationInfo: undefined,
    }

    setChildren([])
    setPaginationInfo(undefined)
    setChildrenType("basic")
  }, [resetGeneration])

  const processChildrenData = useCallback(
    (page: number, data: ChildrenResponse<R> | undefined) => {
      const loadedChildren = getChildren(data)
      pagesRef.current.set(page, loadedChildren)

      const updatedChildren = [...pagesRef.current.entries()]
        .sort(([a], [b]) => a - b)
        .flatMap(([, records]) => records)
      setChildren(updatedChildren)

      if (page >= frontierRef.current.page) {
        frontierRef.current = {
          page,
          type: getChildrenType(data),
          paginationInfo: data?.paginationInfo,
        }
        setChildrenType(frontierRef.current.type)
        setPaginationInfo(frontierRef.current.paginationInfo)
      }

      const updatedData: ChildrenResponse<R> = {
        records: updatedChildren,
        type: frontierRef.current.type,
        paginationInfo: frontierRef.current.paginationInfo,
      }

      updateFetchedData(rowId, updatedData)

      return loadedChildren
    },
    [rowId, updateFetchedData]
  )

  const loadChildren = useCallback(() => {
    if (children.length > 0 && !paginationInfo?.hasMore) return children

    // The page about to be requested — the same cursor handed to the consumer.
    const page = (paginationInfo?.currentPage ?? 0) + 1

    // Replace only THIS page's subscription, so earlier pages keep listening.
    subscriptionsRef.current.get(page)?.unsubscribe()
    subscriptionsRef.current.delete(page)

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
      const loadedChildren = processChildrenData(page, result)
      setIsLoading(false)
      return loadedChildren
    }

    // Convert Promise to Observable or use existing Observable
    const observable: Observable<PromiseState<ChildrenResponse<R>>> =
      "subscribe" in result ? result : promiseToObservable(result)

    subscriptionsRef.current.set(
      page,
      observable.subscribe({
        next: (state) => {
          if (state.loading) {
            setIsLoading(true)
          } else if (state.error) {
            setIsLoading(false)
          } else if (state.data) {
            processChildrenData(page, state.data)
            setIsLoading(false)
          }
        },
        error: (error) => {
          setIsLoading(false)
          console.error("Error loading children:", error)
        },
        complete: () => {
          subscriptionsRef.current.delete(page)
        },
      })
    )

    return []
  }, [children, item, source, paginationInfo, processChildrenData])

  // Cleanup subscriptions on unmount
  useEffect(() => {
    const subscriptions = subscriptionsRef.current
    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe())
      subscriptions.clear()
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
