import { Data, UseDataReturn } from "../useData"
import { RecordType } from "../types/records.typings"
import { PaginationInfo } from "../types/fetch.typings"

export interface UseDataSourceItemNavigationProps<R extends RecordType> {
  /** The data source returned by `useDataSource`. Used to extract `idProvider` */
  dataSource: {
    idProvider?: <Item extends R>(
      item: Item,
      index?: number
    ) => string | number | symbol
  }
  /** The data returned by `useData` */
  data: Data<R>
  /** Pagination info returned by `useData` */
  paginationInfo: PaginationInfo | null
  /** Navigate to a specific page (from `useData`) */
  setPage: UseDataReturn<R>["setPage"]
  /** Load more items for infinite-scroll (from `useData`) */
  loadMore: UseDataReturn<R>["loadMore"]
  /** Whether `useData` is currently loading data */
  isLoading: boolean
  /** Overrides `dataSource.idProvider`. Extracts a unique ID from a record. Falls back to `item.id` */
  idProvider?: (item: R, index?: number) => string | number
  /** Controlled active item ID */
  activeItemId?: string | number | null
  /** Default active item ID (uncontrolled) */
  defaultActiveItemId?: string | number | null
  /** Callback when active item changes */
  onActiveItemChange?: (id: string | number | null) => void
}

export interface UseDataSourceItemNavigationReturn<R extends RecordType> {
  /** The currently active item ID */
  activeItemId: string | number | null
  /** The currently active item record, or null if not found in loaded data */
  activeItem: R | null
  /** Navigate to the next item. Fetches next page if at boundary */
  goToNext: () => void
  /** Navigate to the previous item. Fetches previous page if at boundary */
  goToPrevious: () => void
  /** Whether there is a next item (or more pages to load) */
  hasNext: boolean
  /** Whether there is a previous item (or previous pages to load) */
  hasPrevious: boolean
  /** Directly set the active item ID */
  setActiveItemId: (id: string | number | null) => void
  /** True while waiting for a page transition to resolve the pending navigation */
  isNavigating: boolean
}
