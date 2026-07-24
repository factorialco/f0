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

import type { AvatarVariant } from "@/components/avatars/F0Avatar"

import {
  PrimaryActionsDefinitionFn,
  SecondaryActionsDefinition,
  UpsellActionDefinitionFn,
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
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
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

/** Data shown for a single row of the search preview dropdown. */
export type SearchPreviewResultData = {
  avatar?: AvatarVariant
  title: string
  subtitle?: string
}

/**
 * One page of search-preview results. `hasMore` tells the dropdown whether to
 * keep pulling further pages as the user scrolls (infinite scroll).
 */
export type SearchPreviewPage<R extends RecordType> = {
  records: R[]
  hasMore: boolean
}

/**
 * Optional rich search preview shown in the shared Data Collection search.
 * When provided, typing in the header search renders a results dropdown with
 * avatar + title + subtitle, consistent across every visualization. Selecting a
 * result calls `onSelect` (e.g. the graph view reveals/centers the node).
 */
export type SearchPreview<R extends RecordType> = {
  /**
   * Fetch one page of matches for `query`. `page` starts at 0 and increments as
   * the user scrolls the dropdown to the bottom. Return a bare array for a
   * single, non-paginated page (treated as `hasMore: false`), or a
   * `SearchPreviewPage` to drive infinite scroll across pages.
   */
  search: (query: string, page: number) => Promise<R[] | SearchPreviewPage<R>>
  getId: (record: R) => string
  render: (record: R) => SearchPreviewResultData
  onSelect: (record: R) => void
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
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
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

  currentNavigationFilters?: NavigationFiltersState<NavigationFilters>

  /** URL for a single item in the collection */
  itemUrl?: (item: R) => string | undefined
  /** Click handler for a single item in the collection */
  itemOnClick?: (item: R) => () => void
  /** Available actions that can be performed on records */
  itemActions?: ItemActions
  /** Available primary actions that can be performed on the collection */
  primaryActions?: PrimaryActionsDefinitionFn
  /** Label for the primary actions dropdown trigger button */
  primaryActionsLabel?: string
  /** Available secondary actions that can be performed on the collection */
  secondaryActions?: SecondaryActionsDefinition
  /** Optional upsell button rendered in the collection toolbar. Opt-in per
   * collection: return a definition to show it, or undefined to hide it. */
  upsellAction?: UpsellActionDefinitionFn
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

  /** Rich search preview shown in the shared header search (all visualizations). */
  searchPreview?: SearchPreview<R>
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
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
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
