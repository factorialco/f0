import { IconType } from "@/components/F0Icon"
import type { FiltersDefinition, FiltersState } from "@/components/OneFilterPicker/types"
import {
  DataError,
  GroupingDefinition,
  OnSelectItemsCallback,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { DataCollectionSource } from "./hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "./item-actions"
import { NavigationFiltersDefinition } from "./navigationFilters/types"
import { SummariesDefinition } from "./summary"
export * from "@/hooks/datasource/types/grouping.typings"
export * from "@/hooks/datasource/types/sortings.typings"
export * from "./summary"

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
  critical?: boolean
  description?: string
  disabled?: boolean
}

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export type ExtractPropertyKeys<RecordType> = keyof RecordType

export type OnBulkActionCallback<Record extends RecordType, Filters extends FiltersDefinition> = (
  ...args: [action: BulkAction, ...Parameters<OnSelectItemsCallback<Record, Filters>>]
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
  source: DataCollectionSource<
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

  /**
   * @deprecated This will be removed in the next major version
   * Temporary prop to force the full width of the data collection (removes the X padding)
   */
  tmpFullWidth?: boolean
} & VisualizationOptions
