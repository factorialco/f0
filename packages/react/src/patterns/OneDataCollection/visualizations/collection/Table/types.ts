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

  /**
   * Optional minimum width for the column in pixels. When provided, overrides
   * the minWidth derived from `width`. Useful for columns with no fixed
   * `width` that should not shrink below a given size.
   */
  minWidth?: number
}

export type ColId = string

export type TableColumnDefinition<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = WithOptionalSorting<R, Sortings> &
  Pick<
    ComponentProps<typeof TableHead>,
    "hidden" | "info" | "infoIcon" | "sticky" | "width" | "minWidth"
  > & {
    /**
     * Optional summary configuration for this column
     * References a key in the Summaries definition, similar to how sorting works
     */
    summary?: SummaryKey<Summaries>

    /**
     * Placeholder to display in this column's summary-row cell when no summary
     * value is rendered. This also applies to columns without a `summary`
     * definition. Takes precedence over the row-level `summaryPlaceholder`.
     */
    summaryPlaceholder?: string

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
     * Avoid removing the column by the user. Only relevant when the
     * visualization sets `onRemoveColumn`; the per-row trash affordance in the
     * settings popover is hidden for this column. Mirrors `noHiding`.
     */
    noRemoving?: boolean

    /**
     * Assigns this column to a header group. Columns with the same
     * headerGroupId are visually grouped under a shared spanning header.
     * Each group is configured via `headerGroups` in the visualization
     * options, which also controls whether the group can be collapsed.
     */
    headerGroupId?: string
  }

/**
 * Configuration for a single header group, keyed by `headerGroupId` in the
 * `headerGroups` visualization option.
 */
export type HeaderGroupDefinition = {
  /**
   * The label rendered in the spanning header row.
   */
  label: string

  /**
   * Ids of the columns in this group that stay visible while the group is
   * collapsed — the group's "summary" columns. Providing this key is what
   * makes the group collapsible; omit it for a purely visual group.
   *
   * Ids are matched against each column's `id` (falling back to its `label`,
   * mirroring how column ids are resolved elsewhere). Ids that don't belong to
   * this group are ignored. A collapsed group always keeps at least one
   * column, so passing `[]` — or only unknown ids — leaves the group's first
   * column visible.
   */
  collapsedColumns?: ColId[]

  /**
   * Whether the group renders collapsed on first render. Only meaningful for
   * collapsible groups. Read once on mount; afterwards the collapsed state is
   * owned by the table.
   * @default false
   */
  defaultCollapsed?: boolean
}

export type ReferenceType = "none" | "striped" | "striked"

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
   * Placeholder to display in summary-row cells when no summary value is
   * rendered. This also applies to columns without a `summary` definition.
   * Column-level `summaryPlaceholder` takes precedence.
   * @default "-"
   */
  summaryPlaceholder?: string
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
   * Called when the user clicks the "Add column" entry at the top of the
   * column-settings popover. When omitted, the entry is not shown. Open your
   * own column picker and update `columns` in response.
   */
  onAddColumn?: () => void

  /**
   * Called when the user removes a column via the trash affordance revealed on
   * hovering its row in the column-settings popover. When omitted, no remove
   * affordance is shown. Removing is distinct from hiding: drop the column from
   * `columns` in response. Frozen/leading columns and columns flagged
   * `noRemoving` are never removable.
   */
  onRemoveColumn?: (columnId: ColId) => void

  /** Maps a row to a visual variant: `"striped"`, `"striked"`, or `"none"`. */
  referenceRowType?: (item: R) => ReferenceType
  /**
   * Header group configuration. Keys are the `headerGroupId` values used in
   * column definitions. Pass a string for a plain spanning label, or a
   * {@link HeaderGroupDefinition} to also make the group collapsible:
   *
   * ```ts
   * headerGroups: {
   *   personal: "Personal information",
   *   january: {
   *     label: "January",
   *     collapsedColumns: ["january-total"],
   *     defaultCollapsed: true,
   *   },
   * }
   * ```
   *
   * A collapsed group hides every column in it except the ones listed in
   * `collapsedColumns`, and renders a toggle next to its label.
   */
  headerGroups?: Record<string, string | HeaderGroupDefinition>

  /**
   * Labels for header groups. Keys are headerGroupId values used in column
   * definitions, values are the display labels rendered in the spanning header row.
   * @deprecated Use `headerGroups` instead, which accepts the same
   * `{ [groupId]: label }` shape and additionally supports collapsing.
   */
  headerGroupLabels?: Record<string, string>

  /**
   * Called when the user collapses or expands a header group. Fires after the
   * table has applied the change; use it to persist the state, not to control
   * it.
   */
  onHeaderGroupCollapsedChange?: (groupId: string, collapsed: boolean) => void

  /**
   * Wraps the table in a rounded border container.
   * Useful for embedding the table inside panels or detail views.
   */
  bordered?: boolean
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
