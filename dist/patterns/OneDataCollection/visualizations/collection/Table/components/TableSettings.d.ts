import { TableColumnDefinition } from '../types';
export type TableVisualizationSettingsKey = "table" | "editableTable";
type TableSettingsProps = {
    columns: Readonly<TableColumnDefinition<any, any, any>[]>;
    frozenColumns: number;
    allowSorting: boolean;
    allowHiding: boolean;
    /** Settings key for column order/hidden state. Use "editableTable" for EditableTable visualization. */
    visualizationKey?: TableVisualizationSettingsKey;
    /** Shows an "Add column" entry at the top of the popover when provided. */
    onAddColumn?: () => void;
    /**
     * Enables a hover trash affordance per non-frozen column (unless the column
     * sets `noRemoving`). Called with the column id to drop it from the table.
     */
    onRemoveColumn?: (columnId: string) => void;
    /** The currently user-managed frozen columns. */
    lockedColumnIds?: readonly string[];
    /** Enables independently locking or unlocking columns. */
    onLockedColumnIdsChange?: (columnIds: string[]) => void;
};
export declare const TableSettings: ({ columns: originalColumns, frozenColumns, allowSorting, allowHiding, visualizationKey, onAddColumn, onRemoveColumn, lockedColumnIds, onLockedColumnIdsChange, }: TableSettingsProps) => import("react").JSX.Element;
export {};
