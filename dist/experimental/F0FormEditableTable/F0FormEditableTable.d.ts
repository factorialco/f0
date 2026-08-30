import { RecordType } from '../../hooks/datasource';
import { F0FormEditableTableProps } from './types';
/**
 * A lightweight, fully controlled editable table built on the OneTable
 * primitives and the editable-table cell components (`text`, `number`,
 * `money`, `date`, `select`, ...), with optional drag-to-reorder rows,
 * per-row removal and an add-row action — no data collection required.
 *
 * The parent owns the `items` array: cell edits are reported via
 * `onCellChange`, reorders via `onReorderRows`, removals via `onRemoveRow`,
 * and additions via `addRow.onClick`.
 */
declare function F0FormEditableTableBase<R extends RecordType>({ columns: columnsProp, items, getRowId, onCellChange, sortableRows, onReorderRows, onRemoveRow, onEditRow, canEditRow, canRemoveRow, rowActions, getCellError, addRow, editLabel: editLabelProp, removeLabel: removeLabelProp, bordered, disabled, }: F0FormEditableTableProps<R>): import("react").JSX.Element;
/**
 * F0FormEditableTable is experimental — its API may change without a major bump.
 */
export declare const F0FormEditableTable: typeof F0FormEditableTableBase;
export {};
