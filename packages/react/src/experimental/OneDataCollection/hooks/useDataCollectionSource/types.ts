import {
  BaseDataAdapter,
  BaseFetchOptions,
  BaseResponse,
  DataSource,
  DataSourceDefinition,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  PaginatedDataAdapter,
  PaginatedFetchOptions,
  PaginatedResponse,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource/types"
import {
  PrimaryActionsDefinitionFn,
  SecondaryActionsDefinition,
} from "../../actions"
import { ItemActionsDefinition } from "../../item-actions"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { BulkActionDefinition, OnBulkActionCallback } from "../../types"

export type BulkActionsDefinition<
  R extends RecordType,
  Filters extends FiltersDefinition,
> = (selectedItems: Parameters<OnBulkActionCallback<R, Filters>>[1]) =>
  | {
      primary?: (BulkActionDefinition | { type: "separator" })[]
      secondary?: (BulkActionDefinition | { type: "separator" })[]
    }
  | {
      warningMessage: string
    }

/**
 * Extended base fetch options for data collection
 */
type DataCollectionExtendFetchOptions<
  NavigationFilters extends NavigationFiltersDefinition,
> = {
  navigationFilters: NavigationFiltersState<NavigationFilters>
}

export type DataCollectionBaseFetchOptions<
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = BaseFetchOptions<Filters> &
  DataCollectionExtendFetchOptions<NavigationFilters>

/**
 * Extended base fetch options for data collection
 */
export type DataCollectionPaginatedFetchOptions<
  Filters extends FiltersDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
> = PaginatedFetchOptions<Filters> &
  DataCollectionExtendFetchOptions<NavigationFilters>

/**
 * Data collection data adapter
 */
export type DataCollectionDataAdapter<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
> =
  | BaseDataAdapter<
      R,
      Filters,
      DataCollectionBaseFetchOptions<Filters, NavigationFilters>,
      BaseResponse<R>
    >
  | PaginatedDataAdapter<
      R,
      Filters,
      DataCollectionPaginatedFetchOptions<Filters, NavigationFilters>,
      PaginatedResponse<R>
    >

/**
 * Represents a single lane configuration with its own filters
 * @template Filters - The available filter configurations for this lane
 */
export type Lane<Filters extends FiltersDefinition> = {
  id: string
  filters: FiltersState<Filters>
}

/**
 * Data collection source definition
 * Extends the base data source definition with data collection specific elements / features
 */
export type DataCollectionSourceDefinition<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> = Omit<
  DataSourceDefinition<R, Filters, Sortings, Grouping>,
  "dataAdapter"
> & {
  /**
   * Data Collection specific datasource elements / features
   */

  /** Navigation filters */
  navigationFilters?: NavigationFilters
  /** URL for a single item in the collection */
  itemUrl?: (item: R) => string | undefined
  /** Click handler for a single item in the collection */
  itemOnClick?: (item: R) => () => void
  /** Available actions that can be performed on records */
  itemActions?: ItemActions
  /** Available primary actions that can be performed on the collection */
  primaryActions?: PrimaryActionsDefinitionFn
  /** Available secondary actions that can be performed on the collection */
  secondaryActions?: SecondaryActionsDefinition
  /** Available summaries fields. If not provided, summaries is not allowed. */
  summaries?: Summaries & {
    label?: string // Optional label for the summaries row
  }
  // /** Datacolllction data adapter */
  dataAdapter: DataCollectionDataAdapter<R, Filters, NavigationFilters>
  /** Bulk actions that can be performed on the collection */
  bulkActions?: BulkActionsDefinition<R, Filters>
  /** Total items summary that can be displayed on the collection
   * If true, the total items summary will be displayed on the collection
   * If a function is provided, the total items summary will be displayed on the collection
   */
  totalItemSummary?: boolean | ((totalItems: number) => string | null)

  /** Item filter that can be used to filter the items before they are displayed */
  itemPreFilter?: (item: R) => boolean

  /** Lanes configuration */
  lanes?: ReadonlyArray<Lane<Filters>>
}

/**
 * Data collection source
 * Extends the base data source with data collection specific elements / features
 */
export type DataCollectionSource<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> = DataSource<R, Filters, Sortings, Grouping> &
  DataCollectionSourceDefinition<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & {
    currentNavigationFilters: NavigationFiltersState<NavigationFilters>
    setCurrentNavigationFilters: React.Dispatch<
      React.SetStateAction<NavigationFiltersState<NavigationFilters>>
    >
    /** Current summaries data */
    currentSummaries?: R
    /** Function to update the current summaries data */
    setCurrentSummaries?: React.Dispatch<React.SetStateAction<R | undefined>>
  }
