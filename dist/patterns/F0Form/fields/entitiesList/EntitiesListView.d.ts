import { IconType } from '../../../../components/F0Icon';
import { EntitiesListItem, F0EntitiesListFieldTag, F0EntitiesListItemDefinition } from './types';
/** A resolved custom row action for the list overflow menu. */
export interface EntitiesListViewAction {
    label: string;
    icon: IconType;
    critical?: boolean;
    disabled?: boolean;
    onClick: () => void;
}
/** Internal row shape: item values plus the stable key used as list identity. */
type Row = {
    __key: string;
} & Record<string, unknown>;
/** A visible field of the list (schema key + resolved header label). */
export interface EntitiesListViewField {
    id: string;
    label: string;
    /**
     * When set, this field renders as a read-only colored tag on the right side
     * of the row (instead of a description line). Returns the tag for a row, or
     * `undefined` to render nothing for that row.
     */
    tag?: (item: EntitiesListItem) => F0EntitiesListFieldTag | undefined;
}
interface EntitiesListViewProps {
    /** Rows to display, each carrying a stable `__key`. */
    rows: ReadonlyArray<Row>;
    /**
     * Visible fields in display order. The first is used as the row title and
     * the rest as description lines, unless overridden by `listItem`.
     */
    fields: ReadonlyArray<EntitiesListViewField>;
    /** Optional overrides for the row title/description/avatar. */
    listItem?: F0EntitiesListItemDefinition;
    /** Opens the edit dialog for a row key (omitted in navigable/disabled mode). */
    onEditRow?: (rowKey: string) => void;
    /** Removes a row by key (omitted when the field is disabled). */
    onRemoveRow?: (rowKey: string) => void;
    /**
     * Whether a row's remove is mid-flight (its `onRemove` hook hasn't settled),
     * so the remove action is disabled until it does.
     */
    isRemovePending?: (rowKey: string) => boolean;
    /** Whether a given row can be edited (drives the edit action's presence). */
    canEditRow: (rowKey: string) => boolean;
    /** Whether a given row can be removed (drives the remove action's presence). */
    canRemoveRow: (rowKey: string) => boolean;
    /** Row click handler — opens the edit dialog (editable mode). */
    onRowClick?: (rowKey: string) => void;
    /** Per-row link — makes the row navigable with a trailing arrow (nav mode). */
    getRowHref?: (rowKey: string) => string | undefined;
    /** Custom per-row actions (archive/unarchive, …), shown in the overflow menu. */
    getRowActions?: (rowKey: string) => ReadonlyArray<EntitiesListViewAction>;
    editLabel: string;
    removeLabel: string;
    viewLabel: string;
}
/**
 * Read-only OneDataCollection "list" visualization of an entities-list field's
 * items. Used as the dialog-mode alternative to the editable table: rows are
 * added/edited through the form dialog and each row exposes edit/remove actions.
 */
export declare function EntitiesListView({ rows, fields, listItem, onEditRow, onRemoveRow, isRemovePending, canEditRow, canRemoveRow, onRowClick, getRowHref, getRowActions, editLabel, removeLabel, viewLabel, }: EntitiesListViewProps): import("react").JSX.Element;
export {};
