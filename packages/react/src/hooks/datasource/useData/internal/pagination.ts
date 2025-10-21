import { DataAdapter, FiltersDefinition, RecordType } from "../../types"
import { isInfiniteScrollPagination, isPagesPagination } from "../../utils"

const defaultPerPage = 20

export const getPaginationRequestParams = <
  R extends RecordType,
  Filters extends FiltersDefinition,
>(
  dataAdapter: DataAdapter<R, Filters>,
  currentPage: number,
  cursor: string | null
) => {
  // Safely access perPage, default to 20 if not available
  const perPageValue =
    "perPage" in dataAdapter && dataAdapter.perPage !== undefined
      ? dataAdapter.perPage
      : defaultPerPage

  if (isPagesPagination(dataAdapter.paginationType)) {
    return {
      currentPage,
      perPage: perPageValue,
    }
  }
  if (isInfiniteScrollPagination(dataAdapter.paginationType)) {
    return {
      cursor,
      perPage: perPageValue,
    }
  }
  return {}
}
