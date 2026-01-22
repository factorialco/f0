import { useMemo } from "react"
import { Observable } from "zen-observable-ts"

import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  RecordType,
  SortingsDefinition,
  GroupingDefinition,
} from "@/hooks/datasource"
import { DataSource } from "@/hooks/datasource/types/datasource.typings"
import {
  PaginatedFetchOptions,
  InfiniteScrollPaginatedResponse,
} from "@/hooks/datasource/types/fetch.typings"
import {
  NestedVariant,
  ChildrenResponse,
} from "@/hooks/datasource/types/nested.typings"
import { useData } from "@/hooks/datasource/useData"
import { PromiseState, promiseToObservable } from "@/lib/promise-to-observable"

export type FetchResult<R> =
  | InfiniteScrollPaginatedResponse<R>
  | Promise<InfiniteScrollPaginatedResponse<R>>
  | Observable<PromiseState<InfiniteScrollPaginatedResponse<R>>>

export type ChildrenSourceProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
> = Pick<
  DataSource<R, Filters, Sortings, Grouping>,
  | "currentFilters"
  | "setCurrentFilters"
  | "currentSortings"
  | "setCurrentSortings"
  | "fetchChildren"
> & {
  currentNavigationFilters?: Record<string, unknown>
}

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

const toInfiniteScrollResponse = <R extends RecordType>(
  response: ChildrenResponse<R>
): InfiniteScrollPaginatedResponse<R> => {
  const { records, paginationInfo } = response
  return {
    records,
    total: paginationInfo?.total ?? records.length,
    perPage: paginationInfo?.perPage ?? DEFAULT_PER_PAGE,
    type: "infinite-scroll",
    cursor: String(paginationInfo?.currentPage ?? 1),
    hasMore: paginationInfo?.hasMore ?? false,
  }
}

export const useChildrenDataSource = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  item: R,
  source: ChildrenSourceProps<R, Filters, Sortings, Grouping>,
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

      const cursor =
        "cursor" in options.pagination ? options.pagination.cursor : null
      const lastLoadedPage = cursor ? parseInt(cursor, 10) : 0
      const currentPage = isNaN(lastLoadedPage) ? 1 : lastLoadedPage + 1

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

      const observable =
        "subscribe" in result ? result : promiseToObservable(result)

      return new Observable((observer) => {
        const subscription = observable.subscribe({
          next: (state) =>
            observer.next({
              loading: state.loading,
              error: state.error,
              data: state.data ? process(state.data) : undefined,
            }),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        })
        return () => subscription.unsubscribe()
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
