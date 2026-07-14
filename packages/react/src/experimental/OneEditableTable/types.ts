import type { RecordType, SortingsDefinition } from "@/hooks/datasource"
import type { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import type {
  EditableTableColumnDefinition,
  EditableTableOnCellChangeParams,
} from "@/patterns/OneDataCollection/visualizations/collection/EditableTable/types"

/** @internal Full editable-table column contract, with the datasource generics fixed. */
export type EditableColumn<R extends RecordType> =
  EditableTableColumnDefinition<R, SortingsDefinition, SummariesDefinition>

/**
 * Column definition for OneEditableTable.
 *
 * Reuses the editable-table column contract — same `editType` cell types
 * (`text`, `number`, `money`, `date`, `select`, `display-only`, `disabled`),
 * `selectConfig`, `numberConfig`, `dateConfig`, `formula` and `cellHint` —
 * minus the data-collection-only options (sorting, summaries, column
 * settings, header groups).
 */
export type OneEditableTableColumn<R extends RecordType> = Omit<
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
 * Props for {@link OneEditableTable}: a lightweight, fully controlled editable
 * table built on the OneTable primitives and the editable-table cell
 * components — no data collection (source, adapters, filters) required.
 */
export type OneEditableTableProps<R extends RecordType> = {
  /** Column definitions (see {@link OneEditableTableColumn}). */
  columns: ReadonlyArray<OneEditableTableColumn<R>>
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
  }
  /** Wraps the table in a rounded border container. @default true */
  bordered?: boolean
}
