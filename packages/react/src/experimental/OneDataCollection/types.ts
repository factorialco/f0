import { IconType } from "@/components/F0Icon"
import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker/types"
import { Observable } from "zen-observable-ts"
import { PromiseState } from "../../lib/promise-to-observable"
import { PrimaryActionsDefinition, SecondaryActionsDefinition } from "./actions"
import { GroupingDefinition, GroupingState } from "./grouping"
import { ItemActionsDefinition } from "./item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "./navigationFilters/types"
import {
  SortingsDefinition,
  SortingsState,
  SortingsStateMultiple,
} from "./sortings"
import { SummariesDefinition } from "./summary"
import { DataError } from "./useData"
export * from "./grouping"
export * from "./sortings"
export * from "./summary"

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template NavigationFilters - The available navigation filters for the collection
 * @template Sortings - The available sortings for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template PrimaryActions - The available primary actions that can be performed on the collection
 * @template SecondaryActions - The available actions that can be performed on the collection
 * @template OtherActions - The available actions that can be performed on the collection
 * @template Summaries - The available summaries for the collection
 */
export type DataSourceDefinition<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Available filter configurations */
  filters?: Filters
  /** Navigation filters */
  navigationFilters?: NavigationFilters
  /** Predefined filter configurations that can be applied */
  presets?: PresetsDefinition<Filters>
  /** URL for a single item in the collection */
  itemUrl?: (item: Record) => string | undefined
  /** Click handler for a single item in the collection */
  itemOnClick?: (item: Record) => () => void
  /** Available actions that can be performed on records */
  itemActions?: ItemActions
  /** Available primary actions that can be performed on the collection */
  primaryActions?: PrimaryActionsDefinition
  /** Available secondary actions that can be performed on the collection */
  secondaryActions?: SecondaryActionsDefinition
  /** Search configuration */
  search?: CollectionSearchOptions
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  /** Current state of applied navigation filter */
  // currentNavigationFilter?: NavigationFilterValue<NavigationFilter>
  /** Available sorting fields. If not provided, sorting is not allowed. */
  sortings?: Sortings
  defaultSorting?: SortingsState<Sortings>
  /** Available summaries fields. If not provided, summaries is not allowed. */
  summaries?: Summaries & {
    label?: string // Optional label for the summaries row
  }
  /** Data adapter responsible for fetching and managing data */
  dataAdapter: DataAdapter<Record, Filters, NavigationFilters>
  /** Selectable items value under the checkbox column (undefined if not selectable) */
  selectable?: (item: Record) => string | number | undefined
  /** Default selected items */
  defaultSelectedItems?: SelectedItemsState
  /** Bulk actions that can be performed on the collection */
  bulkActions?: (
    selectedItems: Parameters<OnBulkActionCallback<Record, Filters>>[1]
  ) =>
    | {
        primary?: BulkActionDefinition[]
        secondary?: BulkActionDefinition[]
      }
    | { warningMessage: string }
  totalItemSummary?: (totalItems: number) => string
  /** Grouping configuration */
  grouping?: Grouping
  currentGrouping?: GroupingState<Record, Grouping>
  /** Lanes configuration */
  lanes?: ReadonlyArray<LaneDataSource<Filters>>
}

export type CollectionSearchOptions = {
  /** Whether search is enabled */
  enabled: boolean
  /** Whether search is synchronous */
  sync?: boolean
  /** Debounce time for search */
  debounceTime?: number
}

/**
 * Base response type for collection data
 * @template Record - The type of records in the collection
 */
export type BaseResponse<Record> = {
  records: Record[]
  summaries?: Record // Optional summaries data
}

/**
 * Defines the available pagination types used throughout the application.
 * - "pages": Represents traditional page-based navigation with numbered pages.
 * - "infinite-scroll": Represents continuous loading of content as the user scrolls.
 */
export type PaginationType = "pages" | "infinite-scroll"

/**
 * Represents a base structure for paginated API responses, providing
 * details about the records on the current page and pagination metadata.
 *
 * @template TRecord The type of each record in the paginated response.
 *
 * @property {TRecord[]} records The list of records for the current page.
 * @property {number} total The total number of records available.
 * @property {number} perPage The number of records displayed per page.
 * @property {TRecord} [summaries] Optional summaries data for the collection.
 */
export type BasePaginatedResponse<TRecord> = {
  /** The records for the current page */
  records: TRecord[]
  /** Total number of records available */
  total: number
  /** Number of records per page */
  perPage: number
  /** Optional summaries data */
  summaries?: TRecord
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
export type PaginationInfo = Omit<
  | PageBasedPaginatedResponse<unknown>
  | InfiniteScrollPaginatedResponse<unknown>,
  "records"
>

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export type BaseFetchOptions<
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = {
  /** Currently applied filters */
  filters: FiltersState<Filters>
  sortings: SortingsStateMultiple
  search?: string
  navigationFilters?: NavigationFiltersState<NavigationFilters>
}

// Update PaginatedFetchOptions to handle both pagination types
export type PaginatedFetchOptions<
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = BaseFetchOptions<Filters, NavigationFilters> & {
  pagination: {
    perPage?: number // Common to both
  } & (
    | { currentPage: number; cursor?: never }
    | { cursor?: string | null; currentPage?: never }
  )
}

/**
 * Base data adapter configuration for non-paginated collections
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type BaseDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = {
  /** Indicates this adapter doesn't use pagination */
  paginationType?: never | undefined
  /**
   * Function to fetch data based on filter options
   * @param options - The filter options to apply when fetching data
   * @returns Array of records, promise of records, or observable of records
   */
  fetchData: (
    options: BaseFetchOptions<Filters, NavigationFilters>
  ) =>
    | BaseResponse<Record>
    | Promise<BaseResponse<Record>>
    | Observable<PromiseState<BaseResponse<Record>>>
}

/**
 * Paginated data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type PaginatedDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
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
    options: PaginatedFetchOptions<Filters, NavigationFilters>
  ) =>
    | PaginatedResponse<Record>
    | Promise<PaginatedResponse<Record>>
    | Observable<PromiseState<PaginatedResponse<Record>>>
}

/**
 * Combined type for all possible data adapter configurations
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type DataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> =
  | BaseDataAdapter<Record, Filters, NavigationFilters>
  | PaginatedDataAdapter<Record, Filters, NavigationFilters>

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export type SelectedItems<T> = ReadonlyArray<T>

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export type RecordType = Record<string, unknown>

/**
 * Represents a bulk action that can be performed on a collection.
 */
export type BulkAction = string

/**
 * Represents a bulk action definition.
 */
export type BulkActionDefinition = {
  label: string
  icon?: IconType
  id: string
  keepSelection?: boolean // If true, the selection will not be cleared after the action is performed (false by default)
}

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export type ExtractPropertyKeys<RecordType> = keyof RecordType

/**
 * Represents the selected items by id
 */
export type SelectedItemsState = {
  allSelected?: boolean | "indeterminate"
  items?: ReadonlyArray<{ id: string; checked: boolean }>
  groups?: ReadonlyArray<{ groupId: string; checked: boolean }>
}

export type OnSelectItemsCallback<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = (
  selectedItems: {
    allSelected: boolean | "indeterminate"
    itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
    groupsStatus: Record<string, boolean>
    filters: FiltersState<Filters>
    selectedCount: number
  },
  clearSelectedItems: () => void
) => void

export type OnBulkActionCallback<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = (
  ...args: [
    action: BulkAction,
    ...Parameters<OnSelectItemsCallback<Record, Filters>>,
  ]
) => void

export type OnLoadDataCallback<
  Record extends RecordType,
  Filters extends FiltersDefinition,
> = (data: {
  totalItems: number | undefined
  filters: FiltersState<Filters>
  search: string | undefined
  isInitialLoading: boolean
  data: Record[]
}) => void

export type OnLoadErrorCallback = (error: DataError) => void
/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export type CollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
  VisualizationOptions extends object,
> = {
  /** The data source configuration and state */
  source: DataSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  /** Function to handle item selection */
  onSelectItems: OnSelectItemsCallback<Record, Filters>
  /** Function to handle data load */
  onLoadData: OnLoadDataCallback<Record, Filters>
  onLoadError: OnLoadErrorCallback
} & VisualizationOptions

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 */
export type DataSource<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = DataSourceDefinition<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> & {
  /** Current state of applied filters */
  currentFilters: FiltersState<Filters>
  /** Function to update the current filters state */
  setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
  /** Current state of applied sortings */
  currentSortings: SortingsState<Sortings>
  /** Function to update the current sortings state */
  setCurrentSortings: React.Dispatch<
    React.SetStateAction<SortingsState<Sortings>>
  >
  currentSearch: undefined | string
  debouncedCurrentSearch: undefined | string
  setCurrentSearch: (search: string | undefined) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  currentNavigationFilters: NavigationFiltersState<NavigationFilters>
  setCurrentNavigationFilters: React.Dispatch<
    React.SetStateAction<NavigationFiltersState<NavigationFilters>>
  >
  /** Current state of applied grouping */
  currentGrouping?: Grouping["mandatory"] extends true
    ? Exclude<GroupingState<R, Grouping>, undefined>
    : GroupingState<R, Grouping>
  /** Function to update the current grouping state */
  setCurrentGrouping: React.Dispatch<
    React.SetStateAction<GroupingState<R, Grouping>>
  >
  /** Current summaries data */
  currentSummaries?: R
  /** Function to update the current summaries data */
  setCurrentSummaries?: React.Dispatch<React.SetStateAction<R | undefined>>
  /** Function to provide an id for a record, necessary for append mode */
  idProvider?: (item: R, index?: number) => string | number | symbol
  /** Lanes data sources */
  lanes?: ReadonlyArray<LaneDataSource<Filters>>
}

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export type PromiseOrObservable<T> =
  | T
  | Promise<T>
  | Observable<PromiseState<T>>

/**
 * Represents a single lane configuration with its own filters
 * @template Filters - The available filter configurations for this lane
 */
export type LaneDataSource<Filters extends FiltersDefinition> = {
  /** Unique identifier for the lane */
  id: string
  /** Current state of applied filters for this lane */
  filters: FiltersState<Filters>
}

/**
 * Data adapter configuration that supports lanes (must use infinite-scroll)
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export type LanesSupportedDataAdapter<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = PaginatedDataAdapter<Record, Filters, NavigationFilters> & {
  /** Lanes require infinite-scroll pagination */
  paginationType: Extract<PaginationType, "infinite-scroll">
}
