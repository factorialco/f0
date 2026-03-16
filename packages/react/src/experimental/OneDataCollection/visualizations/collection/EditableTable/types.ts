import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import type {
  TableColumnDefinition,
  TableVisualizationOptions,
  TableVisualizationSettings,
} from "../Table/types"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { EditableTableCellEditType } from "./components/cells"

export type EditableTableVisualizationSettings = TableVisualizationSettings

/**
 * Column definition for Editable Table.
 *
 * When `editType` is set, the column's `id` is used as the record key to
 * read the initial value from `item[id]` and to merge the updated value
 * back into the item passed to `onCellChange`.
 */
export type EditableTableColumnDefinition<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = TableColumnDefinition<R, Sortings, Summaries> & {
  /** Optional placeholder passed to editable inputs (e.g. date cells). */
  inputPlaceholder?: string

  /**
   * Determines how the cell is rendered in edit mode.
   * Receives the current item and returns the cell type (e.g. `"text"`) or
   * `undefined` to render the cell read-only.
   * The column `id` is used as the record key to read/write the value.
   * When omitted, the cell is always rendered read-only.
   */
  editType?: (item: R) => EditableTableCellEditType | undefined
}

export type EditableTableVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = Omit<
  TableVisualizationOptions<R, _Filters, Sortings, Summaries>,
  "columns"
> & {
  columns: ReadonlyArray<EditableTableColumnDefinition<R, Sortings, Summaries>>
  /**
   * Called when a cell value changes with the full updated row.
   * Resolve with nothing for success, or `{ columnId: "message" }` to set errors.
   * Rejection sets an error on the edited column.
   */
  onCellChange: (updatedItem: R) => Promise<void | Record<string, string>>
  /** When provided, renders an "Add" button row at the bottom of the table and nested rows. Receives the parent item when triggered from a nested row. Supports async functions for loading state. */
  onAddRow?: (parentItem?: R) => void | Promise<void>
  /** Custom label for the root-level "Add row" button. Falls back to the default i18n translation. */
  addRowButtonLabel?: string
  /** Custom label for the nested-row "Add row" button. Falls back to the default i18n translation. */
  nestedAddRowButtonLabel?: string
}

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
