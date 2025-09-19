import { TableHead } from "@/experimental/OneTable"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingKey,
  SortingsDefinition,
} from "@/hooks/datasource"
import { ComponentProps } from "react"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { PropertyDefinition } from "../../../property-render"
import { SummariesDefinition, SummaryKey } from "../../../summary"
import { CollectionProps } from "../../../types"
export * from "./settings"

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
  } & (
    | {
        id: ColId
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
      }
    // If id is not provided, the column is not editable
    | {
        id: never
        order?: never
        hidden?: never
        noHiding?: never
      }
  )

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
