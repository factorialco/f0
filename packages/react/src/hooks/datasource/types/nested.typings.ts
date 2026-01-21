import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { BaseFetchOptions, PageBasedPaginatedResponse } from "./fetch.typings"
import { RecordType } from "./records.typings"
import { Observable } from "zen-observable-ts"
import { PromiseState } from "@/lib/promise-to-observable"

export type NestedVariant = "basic" | "detailed"
export type NestedResponseWithType<R extends RecordType> = {
  records: R[]
  type?: NestedVariant
  paginationInfo?: ChildrenPaginationInfo
}

export type ChildrenPaginationInfo = {
  total: number
  perPage: number
  currentPage: number
  pagesCount: number
  hasMore: boolean
}

export type ChildrenResponse<R extends RecordType> = NestedResponseWithType<R>

/**
 * Options for fetching children records.
 * Extends BaseFetchOptions with item and pagination specific to nested records.
 */
export type FetchChildrenOptions<
  R extends RecordType,
  Filters extends FiltersDefinition,
  NavigationFilters = Record<string, unknown>,
> = BaseFetchOptions<Filters> & {
  /** The parent item whose children are being fetched */
  item: R
  /** Pagination info for loading more children */
  pagination?: ChildrenPaginationInfo
  /** Navigation filters state */
  navigationFilters?: NavigationFilters
}

export type ChildrenResult<R extends RecordType> =
  | PageBasedPaginatedResponse<R>
  | Promise<PageBasedPaginatedResponse<R>>
  | Observable<PromiseState<PageBasedPaginatedResponse<R>>>
