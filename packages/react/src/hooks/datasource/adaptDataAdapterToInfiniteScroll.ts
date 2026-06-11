import { Observable } from "zen-observable-ts"

import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { PromiseState } from "@/lib/promise-to-observable"

import {
  DataAdapter,
  InfiniteScrollPaginatedResponse,
  PaginatedDataAdapter,
  PaginatedFetchOptions,
  PaginatedResponse,
  RecordType,
} from "./types"
import { getDataSourcePaginationType } from "./useDataSource"

const pagesResponseToInfiniteScroll = <R>(
  response: PaginatedResponse<R>
): InfiniteScrollPaginatedResponse<R> => {
  if (response.type === "infinite-scroll") return response
  return {
    type: "infinite-scroll",
    records: response.records,
    total: response.total,
    perPage: response.perPage,
    // The cursor encodes the NEXT page to fetch; private to this wrapper
    cursor: String(response.currentPage + 1),
    hasMore: response.currentPage < response.pagesCount,
    summaries: response.summaries,
  }
}

const mapFetchResult = <T, U>(
  result: T | Promise<T> | Observable<PromiseState<T>>,
  map: (value: T) => U
): U | Promise<U> | Observable<PromiseState<U>> => {
  if (result instanceof Observable) {
    return result.map((state): PromiseState<U> => {
      const data = state.data
      if (data === undefined || data === null) {
        return { loading: state.loading, error: state.error, data: null }
      }
      return { loading: state.loading, error: state.error, data: map(data) }
    })
  }
  if (result instanceof Promise) {
    return result.then(map)
  }
  return map(result)
}

/**
 * Wraps a `pages`-paginated data adapter so it presents itself as
 * `infinite-scroll`, letting page-based sources (the typical list adapter) be
 * consumed by components that only support cursor pagination — e.g.
 * `F0Select` and the breadcrumb jump-to select.
 *
 * The cursor is the stringified next page: `cursor: null` fetches page 1,
 * `cursor: "3"` fetches page 3, and `hasMore` is derived from
 * `currentPage < pagesCount`. All three `fetchData` return channels (sync,
 * Promise, Observable of PromiseState) are mapped; loading/error emissions
 * pass through untouched. Adapters that already are `infinite-scroll` /
 * `no-pagination` are returned as-is (same reference).
 */
export const adaptDataAdapterToInfiniteScroll = <
  R extends RecordType,
  Filters extends FiltersDefinition,
>(
  dataAdapter: DataAdapter<R, Filters>
): DataAdapter<R, Filters> => {
  if (getDataSourcePaginationType(dataAdapter) !== "pages") return dataAdapter

  const paginated = dataAdapter as PaginatedDataAdapter<R, Filters>

  return {
    ...paginated,
    paginationType: "infinite-scroll",
    fetchData: (options: PaginatedFetchOptions<Filters>) => {
      const cursor =
        "cursor" in options.pagination ? options.pagination.cursor : null
      // "0"/null/invalid cursors all mean the first page (useData seeds
      // infinite-scroll fetches with cursor "0")
      const currentPage = Math.max(1, Number(cursor) || 1)
      return mapFetchResult(
        paginated.fetchData({
          ...options,
          pagination: {
            currentPage,
            perPage: options.pagination.perPage,
          },
        }),
        pagesResponseToInfiniteScroll
      )
    },
  }
}
