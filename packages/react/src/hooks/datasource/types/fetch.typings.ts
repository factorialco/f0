import { Observable } from "zen-observable-ts"

import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { SortingsStateMultiple } from "@/hooks/datasource/types/sortings.typings"
import { PromiseState } from "@/lib/promise-to-observable"

import { RecordType } from "./records.typings"

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export type BaseFetchOptions<Filters extends FiltersDefinition> = {
  /** Currently applied filters */
  filters: FiltersState<Filters>
  sortings: SortingsStateMultiple
  search?: string
}

// Update PaginatedFetchOptions to handle both pagination types
export type PaginatedFetchOptions<Filters extends FiltersDefinition> =
  BaseFetchOptions<Filters> & {
    pagination: {
      perPage?: number // Common to both
    } & (
      | { currentPage: number; cursor?: never }
      | { cursor?: string | null; currentPage?: never }
    )
  }

/**
 * Base response type for collection data
 * @template R - The type of records in the collection
 *
 * @property {R[]} records The list of records for the current page.
 * @property {TRecord} [summaries] Optional summaries data for the collection.
 */
export type BaseResponse<R> = {
  records: R[]
  summaries?: R // Optional summaries data
}

/**
 * Defines the available pagination types used throughout the application.
 * - "pages": Represents traditional page-based navigation with numbered pages.
 * - "infinite-scroll": Represents continuous loading of content as the user scrolls.
 * - "no-pagination": Represents a collection that does not use pagination.
 */
export type PaginationType = "pages" | "infinite-scroll" | "no-pagination"

/**
 * Represents a base structure for paginated API responses, providing
 * details about the records on the current page and pagination metadata.
 *
 * @template R The type of each record in the paginated response.
 *
 * @property {number} total The total number of records available.
 * @property {number} perPage The number of records displayed per page.
 */
export type BasePaginatedResponse<R> = BaseResponse<R> & {
  /** Total number of records available */
  total: number
  /** Number of records per page */
  perPage: number
}

/**
 * Represents a paginated response with page-based navigation.
 *
 * Combines the base pagination response with additional properties specific to
 * page-based pagination, allowing clients to navigate the dataset using page numbers.
 *
 * This type is useful for APIs returning data in discrete pages, where both the
 * current page index and the total number of pages are provided.
 *
 * @template TRecord - The type of the individual records in the dataset.
 *
 * @property {"pages"} type - Indicates the pagination type is page-based.
 * @property {number} currentPage - The index of the current page being viewed.
 * @property {number} pagesCount - The total number of pages available.
 */
export type PageBasedPaginatedResponse<TRecord> =
  BasePaginatedResponse<TRecord> & {
    type: Extract<PaginationType, "pages">
    /** Current page number (1-indexed) */
    currentPage: number
    /** Total number of pages available */
    pagesCount: number
  }

/**
 * Represents a paginated response structure tailored for infinite scroll implementations.
 *
 * @template TRecord The type of the individual record contained in the paginated response.
 *
 * @extends BasePaginatedResponse
 *
 * @property {"infinite-scroll"} type Identifies the pagination type as "infinite-scroll".
 * @property {string | null} cursor The current position cursor used to fetch the next set of records.
 * @property {boolean} hasMore Indicates whether there are additional records available for loading.
 */
export type InfiniteScrollPaginatedResponse<TRecord> =
  BasePaginatedResponse<TRecord> & {
    type: Extract<PaginationType, "infinite-scroll">
    /**
     * Represents the current position cursor for pagination.
     * This is typically a string (often Base64-encoded) that represents
     * the position of the last item in the current result set.
     * Used to fetch the next page of results.
     */
    cursor: string | null
    /**
     * A boolean flag indicating whether there are more items available for fetching.
     * Used to determine if additional requests should be made for pagination.
     */
    hasMore: boolean
  }

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export type PaginatedResponse<TRecord> =
  | PageBasedPaginatedResponse<TRecord>
  | InfiniteScrollPaginatedResponse<TRecord>

/**
 * Pagination state and controls
 */
export type PaginationInfo =
  | Omit<PageBasedPaginatedResponse<unknown>, "records">
  | Omit<InfiniteScrollPaginatedResponse<unknown>, "records">

/**
 * Identifier used to reference an item in id-relative fetches.
 * Symbols are excluded on purpose: the id must be serializable so it can
 * cross a network boundary to a backend.
 */
export type ItemNeighborsId = string | number

/**
 * Options for an id-relative neighbours fetch. Derived from the adapter's own
 * fetch options, so extended adapters (e.g. OneDataCollection's, which add
 * `navigationFilters`) carry their extra context automatically. Pagination is
 * stripped: the request is relative to an item id, not to a page.
 */
export type ItemNeighborsFetchOptions<
  Filters extends FiltersDefinition,
  Options extends BaseFetchOptions<Filters> = BaseFetchOptions<Filters>,
> = Omit<Options, "pagination"> & {
  /** Id of the reference item (as produced by the source's idProvider) */
  id: ItemNeighborsId
}

/**
 * Result of an id-relative neighbours fetch.
 *
 * `previous`/`next` are the immediate neighbours of the reference item under
 * the given filters/sortings/search, or null at the collection edges. If the
 * reference item itself does not match the current filters, return
 * `{ previous: null, next: null }` (optionally with `total`) — consumers
 * disable navigation in that case.
 */
export type ItemNeighborsResponse<R> = {
  previous: R | null
  next: R | null
  /** 1-indexed position of the reference item in the filtered+sorted collection */
  position?: number
  /** Total number of records matching the current filters/search */
  total?: number
}

/**
 * Base data adapter configuration for non-paginated collections
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type BaseDataAdapter<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Options extends BaseFetchOptions<Filters>,
  FetchReturn = BaseResponse<R>,
> = {
  /** Indicates this adapter doesn't use pagination */
  paginationType?: never | undefined
  /**
   * Function to fetch data based on filter options
   * @param options - The filter options to apply when fetching data
   * @returns Array of records, promise of records, or observable of records
   */
  fetchData: (
    options: Options
  ) =>
    | FetchReturn
    | Promise<FetchReturn>
    | Observable<PromiseState<FetchReturn>>
  /**
   * Optional standalone fetch for CSV export that does NOT affect UI state.
   * When provided, the export action uses this instead of fetchData to avoid
   * side-effects on reactive adapters (e.g. Apollo watchQuery).
   */
  exportFetchData?: (options: Options) => FetchReturn | Promise<FetchReturn>
  /**
   * Optional id-relative capability: fetch the immediate neighbours of an
   * item under the current filters/sortings/search, without loading pages.
   * Enables detail-page prev/next on direct links / hard refresh, where the
   * item may not be in any loaded page window. One-shot semantics: when an
   * Observable is returned, only the first settled emission is consumed.
   */
  fetchItemNeighbors?: (
    options: ItemNeighborsFetchOptions<Filters, Options>
  ) =>
    | ItemNeighborsResponse<R>
    | Promise<ItemNeighborsResponse<R>>
    | Observable<PromiseState<ItemNeighborsResponse<R>>>
}

/**
 * Paginated data adapter configuration
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type PaginatedDataAdapter<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Options extends PaginatedFetchOptions<Filters> =
    PaginatedFetchOptions<Filters>,
  FetchReturn = PaginatedResponse<R>,
> = {
  /** Indicates this adapter uses page-based pagination */
  paginationType: PaginationType
  /** Default number of records per page */
  perPage?: number
  /**
   * Function to fetch paginated data based on filter and pagination options
   * @param options - The filter and pagination options to apply when fetching data
   * @returns Paginated response with records and pagination info
   */
  fetchData: (
    options: Options
  ) =>
    | FetchReturn
    | Promise<FetchReturn>
    | Observable<PromiseState<FetchReturn>>
  /**
   * Optional standalone fetch for CSV export that does NOT affect UI state.
   * When provided, the export action uses this instead of fetchData to avoid
   * side-effects on reactive adapters (e.g. Apollo watchQuery).
   */
  exportFetchData?: (options: Options) => FetchReturn | Promise<FetchReturn>
  /**
   * Optional id-relative capability: fetch the immediate neighbours of an
   * item under the current filters/sortings/search, without loading pages.
   * Enables detail-page prev/next on direct links / hard refresh, where the
   * item may not be in any loaded page window. One-shot semantics: when an
   * Observable is returned, only the first settled emission is consumed.
   */
  fetchItemNeighbors?: (
    options: ItemNeighborsFetchOptions<Filters, Options>
  ) =>
    | ItemNeighborsResponse<R>
    | Promise<ItemNeighborsResponse<R>>
    | Observable<PromiseState<ItemNeighborsResponse<R>>>
}

/**
 * Combined type for all possible data adapter configurations
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type DataAdapter<
  R extends RecordType,
  Filters extends FiltersDefinition,
> =
  | BaseDataAdapter<R, Filters, BaseFetchOptions<Filters>, BaseResponse<R>>
  | PaginatedDataAdapter<
      R,
      Filters,
      PaginatedFetchOptions<Filters>,
      PaginatedResponse<R>
    >

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export type SelectedItems<T> = ReadonlyArray<T>
