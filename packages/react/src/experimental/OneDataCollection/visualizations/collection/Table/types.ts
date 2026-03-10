import { ComponentProps, ComponentType, ReactNode } from "react"

import { TableHead } from "@/experimental/OneTable"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingKey,
  SortingsDefinition,
} from "@/hooks/datasource"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { PropertyDefinition } from "../../../property-render"
import { SummariesDefinition, SummaryKey } from "../../../summary"
import { CollectionProps } from "../../../types"

export type TableVisualizationSettings = {
  order?: ColId[]
  hidden?: ColId[]
}

export type WithOptionalSorting<
  R extends RecordType,
  Sortings extends SortingsDefinition,
> = Omit<PropertyDefinition<R>, "hide"> & {
  sorting?: SortingKey<Sortings>

  /**
   * The alignment of the column. If not provided, the alignment will be "left"
   */
  align?: "left" | "right"

  /**
   * The width of the column. If not provided, the width will be "auto"
   */
  width?: number
}

export type ColId = string

export type TableColumnDefinition<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = WithOptionalSorting<R, Sortings> &
  Pick<
    ComponentProps<typeof TableHead>,
    "hidden" | "info" | "infoIcon" | "sticky" | "width"
  > & {
    /**
     * Optional summary configuration for this column
     * References a key in the Summaries definition, similar to how sorting works
     */
    summary?: SummaryKey<Summaries>

    /**
     * The id of the column (if not provided, the id will be the label of the column)
     */
    id?: ColId

    /**
     * The initial order of the column
     */
    order?: number
    /**
     * The initial state of the hidden (only applies if allowColumnHiding is true)
     */
    hidden?: boolean

    /**
     * Avoid hiding the column by the user
     */
    noHiding?: boolean

    /**
     * Assigns this column to a header group. Columns with the same
     * headerGroupId are visually grouped under a shared spanning header.
     * The label for each group is provided via `headerGroupLabels` in
     * the visualization options.
     */
    headerGroupId?: string
  }

export type ReferenceType = "none" | "striped"

export type TableVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  /**
   * The columns to display
   */
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  /**
   * The number of columns to freeze on the left
   */
  frozenColumns?: 0 | 1 | 2
  /**
   * Allow users to reorder columns (you can only reorder columns that are not frozen) (check cols props to define the order)
   */
  allowColumnReordering?: boolean
  /**
   * Allow users to hide columns (you can define especifcally non hiddable columns in col props, also frozen columns are not hiddable)
   */
  allowColumnHiding?: boolean

  /**
   * Marks one or more rows as reference rows.
   * Reference rows are rendered with a slanted background pattern across the full row.
   */
  referenceRowType?: (item: R) => ReferenceType
  /**
   * Labels for header groups. Keys are headerGroupId values used in column
   * definitions, values are the display labels rendered in the spanning header row.
   */
  headerGroupLabels?: Record<string, string>
}

export type TableCollectionProps<
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
  TableVisualizationOptions<R, Filters, Sortings, Summaries>
>

/**
 * Props passed to a custom row wrapper component.
 * The wrapper receives the row's item and index, and renders children (the Row component).
 * Typically used as a context provider to inject editing state around each row.
 */
export type RowWrapperProps<R extends RecordType> = {
  item: R
  index: number
  children: ReactNode
}

/**
 * Props passed to a custom cell renderer component.
 * Receives the item, column definition, cell index, and the default cell content as children.
 * Return children to keep default rendering, or render a custom component (e.g. editable input).
 */
export type CellRendererProps<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  item: R
  column: TableColumnDefinition<R, Sortings, Summaries>
  cellIndex: number
  children: ReactNode
}

/**
 * Internal customization props for TableCollection.
 * Used by wrapper visualizations (e.g. EditableTable) to inject custom behavior
 * without duplicating the table implementation.
 */
export type TableCustomizationProps<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  /** Component that wraps each row, typically a context provider for editing state */
  rowWrapper?: ComponentType<RowWrapperProps<R>>
  /** Component that renders each cell's content, with default content as children */
  cellRenderer?: ComponentType<CellRendererProps<R, Sortings, Summaries>>
  /** Whether to show the item actions column. Defaults to true. */
  showItemActions?: boolean
  /** Override the visualization settings key (column order/visibility). If not provided, uses the "table" key. */
  visualizationSettings?: TableVisualizationSettings
}
