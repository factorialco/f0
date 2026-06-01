import { PaginationInfo } from "../types/fetch.typings"
import { RecordType } from "../types/records.typings"
import { Data, UseDataReturn } from "../useData"

export type DataSourceItemId = string | number | symbol

export interface UseDataSourceItemNavigationProps<R extends RecordType> {
  /** The data source returned by `useDataSource`. Used to extract `idProvider` */
  dataSource: {
    idProvider?: <Item extends R>(
      item: Item,
      index?: number
    ) => DataSourceItemId
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
  idProvider?: (item: R, index?: number) => DataSourceItemId
  /** Returns the URL for a given item. Used to derive `nextItemUrl` / `previousItemUrl` */
  itemUrl?: (item: R) => string | undefined
  /** Controlled active item ID */
  activeItemId?: DataSourceItemId | null
  /** Default active item ID (uncontrolled) */
  defaultActiveItemId?: DataSourceItemId | null
  /** Callback when active item changes */
  onActiveItemChange?: (id: DataSourceItemId | null) => void
}

export interface UseDataSourceItemNavigationReturn<R extends RecordType> {
  /** The currently active item ID */
  activeItemId: DataSourceItemId | null
  /** The currently active item record, or null if not found in loaded data */
  activeItem: R | null
  /** The active item index within the currently loaded records */
  activeIndex: number
  /** The active item index within the full collection when it can be inferred */
  absoluteIndex: number | null
  /** Number of records currently loaded into the datasource */
  loadedItemsCount: number
  /** Total number of matching records when pagination exposes it */
  totalItems: number | undefined
  /** The previous loaded item record, or null if unavailable */
  previousItem: R | null
  /** The next loaded item record, or null if unavailable */
  nextItem: R | null
  /** URL of the active item (derived via `itemUrl`), or null if unavailable */
  activeItemUrl: string | null
  /** Navigate to the next item. Fetches next page if at boundary */
  goToNext: () => void
  /** Navigate to the previous item. Fetches previous page if at boundary */
  goToPrevious: () => void
  /** Whether there is a next item (or more pages to load) */
  hasNext: boolean
  /** Whether there is a previous item (or previous pages to load) */
  hasPrevious: boolean
  /** Directly set the active item ID */
  setActiveItemId: (id: DataSourceItemId | null) => void
  /** True while waiting for a page transition to resolve the pending navigation */
  isNavigating: boolean
  /** URL of the next loaded item (derived via `itemUrl`), or null if unavailable */
  nextItemUrl: string | null
  /** URL of the previous loaded item (derived via `itemUrl`), or null if unavailable */
  previousItemUrl: string | null
}
