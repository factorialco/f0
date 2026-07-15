import type { IconType } from "@/components/F0Icon"
import type { RecordType, SortingsDefinition } from "@/hooks/datasource"
import type { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import type {
  EditableTableColumnDefinition,
  EditableTableOnCellChangeParams,
} from "@/patterns/OneDataCollection/visualizations/collection/EditableTable/types"

/**
 * A custom trailing action button for a row (see
 * {@link F0FormEditableTableProps.rowActions}).
 */
export type F0FormEditableTableRowAction<R extends RecordType> = {
  /** Stable key within the row's action list (defaults to the label). */
  id?: string
  /** Icon shown in the button. */
  icon: IconType
  /** Accessible label; also shown next to the icon when `showLabel` is set. */
  label: string
  /** Render the label next to the icon. Icon-only by default. */
  showLabel?: boolean
  /** Use the destructive (critical) button styling. */
  critical?: boolean
  /** Disables the button. */
  disabled?: boolean
  /** Called when the button is clicked. */
  onClick: (item: R, index: number) => void | Promise<void>
}

/** @internal Full editable-table column contract, with the datasource generics fixed. */
export type EditableColumn<R extends RecordType> =
  EditableTableColumnDefinition<R, SortingsDefinition, SummariesDefinition>

/**
 * Column definition for F0FormEditableTable.
 *
 * Reuses the editable-table column contract — same `editType` cell types
 * (`text`, `number`, `money`, `date`, `select`, `display-only`, `disabled`),
 * `selectConfig`, `numberConfig`, `dateConfig`, `formula` and `cellHint` —
 * minus the data-collection-only options (sorting, summaries, column
 * settings, header groups).
 */
export type F0FormEditableTableColumn<R extends RecordType> = Omit<
  EditableColumn<R>,
  | "render"
  | "sorting"
  | "summary"
  | "summaryPlaceholder"
  | "order"
  | "hidden"
  | "noHiding"
  | "headerGroupId"
  | "sticky"
  | "id"
> & {
  /** The record key this column reads from and writes to. */
  id: string
  /**
   * Optional custom renderer for read-only display (same contract as the
   * editable table). When omitted, the raw value at `item[id]` is shown.
   */
  render?: EditableColumn<R>["render"]
}

/**
 * Props for {@link F0FormEditableTable}: a lightweight, fully controlled editable
 * table built on the OneTable primitives and the editable-table cell
 * components — no data collection (source, adapters, filters) required.
 */
export type F0FormEditableTableProps<R extends RecordType> = {
  /** Column definitions (see {@link F0FormEditableTableColumn}). */
  columns: ReadonlyArray<F0FormEditableTableColumn<R>>
  /**
   * Rows in display order. The table is controlled: edits, reorders and
   * removals are reported via callbacks and the parent updates `items`.
   */
  items: R[]
  /**
   * Stable id per row, used as the React key and the drag identity.
   * Defaults to `String(item.id)` and falls back to the index.
   */
  getRowId?: (item: R, index: number) => string
  /**
   * Called when a cell value changes (same contract as the editableTable
   * visualization). Resolve with nothing for success, or a
   * `{ columnId: message }` record to show per-cell errors.
   */
  onCellChange: (
    params: EditableTableOnCellChangeParams<R>
  ) => Promise<void | Record<string, string>>
  /** Shows a leading drag handle on each row to reorder by dragging. */
  sortableRows?: boolean
  /** Called after a row is dropped in a new position. */
  onReorderRows?: (params: {
    /** All items in their new order. */
    items: R[]
    /** Index the row was dragged from. */
    from: number
    /** Index the row was dropped at. */
    to: number
    /** The moved record. */
    movedItem: R
  }) => void
  /** When provided, each row gets a trailing remove button. */
  onRemoveRow?: (item: R, index: number) => void
  /**
   * When provided, each row gets a trailing edit (pencil) button.
   * Use for row editing flows that happen outside the table (e.g. a dialog).
   */
  onEditRow?: (item: R, index: number) => void
  /**
   * Controls per-row visibility of the edit button (only relevant when
   * `onEditRow` is provided). Defaults to showing it on every row.
   */
  canEditRow?: (item: R, index: number) => boolean
  /**
   * Custom trailing actions per row. Return the actions to show for the given
   * row; because it's resolved per row, the actions can depend on the row's
   * value (e.g. an "Archive" vs "Unarchive" toggle driven by a hidden column).
   * Rendered in the trailing actions column, between the edit and remove
   * buttons when those are also present.
   */
  rowActions?: (item: R, index: number) => F0FormEditableTableRowAction<R>[]
  /**
   * External validation error for a cell, keyed by the column id. When it
   * returns a message the cell shows an error border and a tooltip with the
   * message on hover/focus. Use for errors coming from outside the table
   * (e.g. schema validation), on top of the errors `onCellChange` can return.
   */
  getCellError?: (
    item: R,
    columnId: string,
    index: number
  ) => string | undefined
  /** When provided, renders an add-row button under the last row. */
  addRow?: {
    /** Button label (defaults to the i18n editable-table "Add row"). */
    label?: string
    onClick: () => void | Promise<void>
    /** Disables the add button (e.g. while an existing row is still invalid). */
    disabled?: boolean
    /** Tooltip shown on hover while the add button is `disabled`, explaining why. */
    disabledTooltip?: string
  }
  /** Wraps the table in a rounded border container. @default true */
  bordered?: boolean
  /**
   * Disables interaction (dragging, edit/remove/row-action buttons) while
   * keeping the handle and actions columns in place, so toggling it (e.g. while
   * a form submits) doesn't shift the layout. Cell editability is controlled
   * separately via each column's `editType`.
   */
  disabled?: boolean
}
