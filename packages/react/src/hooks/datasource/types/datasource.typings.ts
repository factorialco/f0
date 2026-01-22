import {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker/types"

import { DataAdapter } from "./fetch.typings"
import { GroupingDefinition, GroupingState } from "./grouping.typings"
import { ChildrenPaginationInfo, ChildrenResponse } from "./nested.typings"
import { RecordType } from "./records.typings"
import { SearchOptions } from "./search.typings"
import { SelectedItemsState } from "./selection.typings"
import { SortingsDefinition, SortingsState } from "./sortings.typings"

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template R - The type of records in the collection
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
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> = {
  /***** FILTERS ***************************************************/
  /** Available filter configurations */
  filters?: Filters
  /** Default filters state (this is the state that the source will back on reset)*/
  defaultFilters?: FiltersState<Filters>
  /** Current state of applied filters */
  currentFilters?: FiltersState<Filters>
  /** Predefined filter configurations that can be applied */
  presets?: PresetsDefinition<Filters>
  /** Whether presets are currently loading */
  presetsLoading?: boolean
  /*******************************************************/

  /***** SEARCH ***************************************************/
  /** Search configuration */
  search?: SearchOptions
  /*******************************************************/

  /***** SORTINGS ***************************************************/
  /** Available sorting fields. If not provided, sorting is not allowed. */
  sortings?: Sortings
  /** Default sorting state (this is the state that the source will back on reset)*/
  defaultSortings?: SortingsState<Sortings>
  /** Current state of applied sortings */
  currentSortings?: SortingsState<Sortings>
  /*******************************************************/

  /** Data adapter responsible for fetching and managing data */
  dataAdapter: DataAdapter<R, Filters>

  /** Selectable items value under the checkbox column (undefined if not selectable) */
  selectable?: (item: R) => string | number | undefined
  /** Default selected items */
  defaultSelectedItems?: SelectedItemsState<R>

  /***** GROUPING ***************************************************/
  /** Grouping configuration */
  grouping?: Grouping
  /** Default grouping state (this is the state that the source will back on reset)*/
  defaultGrouping?: GroupingState<R, Grouping>
  /** Current state of applied grouping */
  currentGrouping?: GroupingState<R, Grouping>
  /*******************************************************/

  /***** NESTED RECORDS ***************************************************/
  fetchChildren?: ({
    item,
    filters,
    pagination,
    sortings,
  }: {
    item: R
    filters?: FiltersState<Filters>
    pagination?: ChildrenPaginationInfo
    sortings?: SortingsState<Sortings>
  }) => Promise<ChildrenResponse<R>>
  /** Function to determine if an item has children */
  itemsWithChildren?: (item: R) => boolean
  /** Function to get the number of children for an item */
  childrenCount?: ({
    item,
    pagination,
  }: {
    item: R
    pagination?: ChildrenPaginationInfo
  }) => number | undefined
}

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
  Grouping extends GroupingDefinition<R>,
> = DataSourceDefinition<R, Filters, Sortings, Grouping> & {
  /** Current state of applied filters */
  currentFilters: FiltersState<Filters>
  /** Function to update the current filters state */
  setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
  /** Whether presets are currently loading */
  presetsLoading?: boolean

  /***** SORTINGS ***************************************************/
  /** Current state of applied sortings */
  currentSortings: SortingsState<Sortings>
  /** Function to update the current sortings state */
  setCurrentSortings: React.Dispatch<
    React.SetStateAction<SortingsState<Sortings>>
  >
  /*******************************************************/

  /***** SEARCH ***************************************************/
  currentSearch: undefined | string
  debouncedCurrentSearch: undefined | string
  setCurrentSearch: (search: string | undefined) => void
  /*******************************************************/

  /***** LOADING ***************************************************/
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  /*******************************************************/

  /***** GROUPING ***************************************************/
  /** Current state of applied grouping */
  currentGrouping?: Grouping["mandatory"] extends true
    ? Exclude<GroupingState<R, Grouping>, undefined>
    : GroupingState<R, Grouping>
  /** Function to update the current grouping state */
  setCurrentGrouping: React.Dispatch<
    React.SetStateAction<GroupingState<R, Grouping>>
  >
  /*******************************************************/

  /** Function to provide an id for a record, necessary for append mode */
  idProvider?: <Item extends R>(
    item: Item,
    index?: number
  ) => string | number | symbol

  /** Item filter that can be used to filter the items before they are displayed */
  itemPreFilter?: (item: R) => boolean
}
