import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  useData,
} from "@/hooks/datasource"
import { DataSource } from "@/hooks/datasource/types/datasource.typings"
import {
  InfiniteScrollPaginatedResponse,
  PaginatedFetchOptions,
  PaginationInfo,
} from "@/hooks/datasource/types/fetch.typings"
import {
  ChildrenPaginationInfo,
  ChildrenResponse,
  NestedVariant,
} from "@/hooks/datasource/types/nested.typings"
import { PromiseState, promiseToObservable } from "@/lib/promise-to-observable"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Observable } from "zen-observable-ts"
import { useNestedDataContext } from "../providers/NestedProvider"

const DEFAULT_PER_PAGE = 10

const EMPTY_RESPONSE: InfiniteScrollPaginatedResponse<never> = {
  records: [],
  total: 0,
  perPage: DEFAULT_PER_PAGE,
  type: "infinite-scroll",
  cursor: "0",
  hasMore: false,
}

const DATA_SOURCE_DEFAULT_PROPS = {
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: () => {},
  isLoading: false,
  setIsLoading: () => {},
  setCurrentGrouping: () => {},
} as const

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

const toInfiniteScrollResponse = <R extends RecordType>(
  response: ChildrenResponse<R>
): InfiniteScrollPaginatedResponse<R> => {
  const { records, paginationInfo } = response
  const total = paginationInfo?.total ?? records.length
  const perPage = paginationInfo?.perPage ?? DEFAULT_PER_PAGE
  const currentPage = paginationInfo?.currentPage ?? 1
  const hasMore = paginationInfo?.hasMore ?? false

  return {
    records,
    total,
    perPage,
    type: "infinite-scroll",
    cursor: String(currentPage * perPage),
    hasMore,
  }
}

interface Props<
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

type FetchResult<R> =
  | InfiniteScrollPaginatedResponse<R>
  | Promise<InfiniteScrollPaginatedResponse<R>>
  | Observable<PromiseState<InfiniteScrollPaginatedResponse<R>>>

/** Internal: creates adapted DataSource for infinite-scroll pagination */
const useChildrenDataSource = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  item: R,
  source: {
    currentFilters: DataSource<R, Filters, Sortings, Grouping>["currentFilters"]
    setCurrentFilters: DataSource<
      R,
      Filters,
      Sortings,
      Grouping
    >["setCurrentFilters"]
    currentSortings: DataSource<
      R,
      Filters,
      Sortings,
      Grouping
    >["currentSortings"]
    setCurrentSortings: DataSource<
      R,
      Filters,
      Sortings,
      Grouping
    >["setCurrentSortings"]
    fetchChildren?: DataSource<R, Filters, Sortings, Grouping>["fetchChildren"]
    currentNavigationFilters?: Record<string, unknown>
  },
  onTypeChange: (type: NestedVariant) => void,
  enabled: boolean
) => {
  const dataSource = useMemo(() => {
    const sortings = source.currentSortings
      ? [
          {
            field: String(source.currentSortings.field),
            order: source.currentSortings.order,
          },
        ]
      : []

    const process = (data: ChildrenResponse<R>) => {
      onTypeChange(getChildrenType(data))
      return toInfiniteScrollResponse(data)
    }

    const fetchData = (
      options: PaginatedFetchOptions<Filters>
    ): FetchResult<R> => {
      if (!enabled) return EMPTY_RESPONSE as InfiniteScrollPaginatedResponse<R>

      // Convert cursor to page number for fetchChildren
      const cursor =
        "cursor" in options.pagination ? options.pagination.cursor : null
      const currentPage = cursor
        ? Math.floor(
            parseInt(cursor, 10) /
              (options.pagination.perPage ?? DEFAULT_PER_PAGE)
          ) + 1
        : 1

      const result = source.fetchChildren?.({
        item,
        filters: options.filters,
        pagination: {
          currentPage,
          perPage: options.pagination.perPage ?? DEFAULT_PER_PAGE,
          total: 0,
          pagesCount: 1,
          hasMore: true,
        },
        navigationFilters: source.currentNavigationFilters,
        sortings,
      })

      if (!result) return EMPTY_RESPONSE as InfiniteScrollPaginatedResponse<R>
      if (!("then" in result) && !("subscribe" in result))
        return process(result)

      const obs = "subscribe" in result ? result : promiseToObservable(result)
      return new Observable((observer) => {
        const sub = obs.subscribe({
          next: (state) =>
            observer.next({
              loading: state.loading,
              error: state.error,
              data: state.data ? process(state.data) : undefined,
            }),
          error: (err) => observer.error(err),
          complete: () => observer.complete(),
        })
        return () => sub.unsubscribe()
      })
    }

    return {
      ...DATA_SOURCE_DEFAULT_PROPS,
      dataAdapter: {
        paginationType: "infinite-scroll" as const,
        perPage: DEFAULT_PER_PAGE,
        fetchData,
      },
      currentFilters: source.currentFilters,
      setCurrentFilters: source.setCurrentFilters,
      currentSortings: source.currentSortings,
      setCurrentSortings: source.setCurrentSortings,
    } as DataSource<R, Filters, Sortings, Grouping>
  }, [item, source, onTypeChange, enabled])

  return useData<R, Filters, Sortings, Grouping>(
    dataSource,
    { filters: source.currentFilters },
    [enabled]
  )
}

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

  // loadChildren: first call enables fetch, subsequent calls load more
  const loadChildren = useCallback(() => {
    if (!enabled) {
      setEnabled(true)
    } else if (childrenPaginationInfo?.hasMore) {
      loadMore()
    }
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
