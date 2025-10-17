import {
  DataResponse,
  InfiniteScrollPaginatedResponse,
  NotPaginatedResponse,
  PageBasedPaginatedResponse,
  PaginatedResponse,
  PaginationInfo,
  PaginationType,
  RecordType,
} from "./types"

/**
 * Get the pagination type of a data adapter
 * @param dataAdapter - The data adapter to get the pagination type of
 * @returns The pagination type of the data adapter
 */

export const getDataSourcePaginationType = <
  D extends { paginationType?: PaginationType | undefined | never },
>(
  dataAdapter: D
): PaginationType => {
  return dataAdapter.paginationType ?? "no-pagination"
}

export function getPaginationType(
  paginationType: PaginationType | undefined
): PaginationType {
  return paginationType ?? "no-pagination"
}

/**
 * Is the data paginated?
 */
export function isNotPaginatedResponse<R>(
  response: DataResponse<R>
): response is NotPaginatedResponse<R> {
  return !("records" in response)
}

// Type guard functions to check pagination types
export function isPagesPagination(paginationType?: PaginationType): boolean
export function isPagesPagination<R extends RecordType>(
  pagination: PaginationInfo | null
): pagination is PageBasedPaginatedResponse<R>
export function isPagesPagination<_R extends RecordType>(
  paginationTypeOrInfo?: PaginationType | PaginationInfo | null
): boolean {
  const paginationTypeKey =
    typeof paginationTypeOrInfo === "string"
      ? paginationTypeOrInfo
      : paginationTypeOrInfo?.type

  return paginationTypeKey === "pages"
}

// Type guard function to check if the pagination is infinite scroll
export function isInfiniteScrollPagination(
  paginationType?: PaginationType
): boolean
export function isInfiniteScrollPagination<R extends RecordType>(
  pagination?: PaginationInfo | null
): pagination is InfiniteScrollPaginatedResponse<R>
export function isInfiniteScrollPagination<_R extends RecordType>(
  paginationTypeOrInfo?: PaginationType | PaginationInfo | null
): boolean {
  const paginationTypeKey =
    typeof paginationTypeOrInfo === "string"
      ? paginationTypeOrInfo
      : paginationTypeOrInfo?.type

  return paginationTypeKey === "infinite-scroll"
}

export function isAccumulativePagination(
  paginationType?: PaginationType
): boolean
export function isAccumulativePagination(
  paginationInfo?: PaginationInfo | null
): boolean
export function isAccumulativePagination(
  paginationTypeOrInfo?: PaginationType | PaginationInfo | null
): boolean {
  const paginationTypeKey =
    typeof paginationTypeOrInfo === "string"
      ? paginationTypeOrInfo
      : paginationTypeOrInfo?.type

  return paginationTypeKey === "infinite-scroll"
}

/**
 * Is the data paginated?
 */
export function isPaginatedPagination(paginationType?: PaginationType): boolean
export function isPaginatedPagination<R extends RecordType>(
  pagination?: PaginationInfo | null
): pagination is PaginatedResponse<R>
export function isPaginatedPagination<_R extends RecordType>(
  paginationTypeOrInfo?: PaginationType | PaginationInfo | null
): boolean {
  const paginationTypeKey =
    typeof paginationTypeOrInfo === "string"
      ? paginationTypeOrInfo
      : paginationTypeOrInfo?.type

  return (
    paginationTypeKey === "pages" || paginationTypeKey === "infinite-scroll"
  )
}
