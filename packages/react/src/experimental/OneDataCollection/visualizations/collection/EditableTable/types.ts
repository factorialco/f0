import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"

import type {
  TableColumnDefinition,
  TableVisualizationOptions,
  TableVisualizationSettings,
} from "../Table/types"

export type EditableTableVisualizationSettings = TableVisualizationSettings

export type EditableTableVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = TableVisualizationOptions<R, _Filters, Sortings, Summaries>

export type EditableTableCollectionProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = CollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  EditableTableVisualizationOptions<R, Filters, Sortings, Summaries>
>

export type { TableColumnDefinition }
