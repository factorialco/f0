import { RecordType } from '../../../../../../hooks/datasource';
import { EditableTableOnCellChangeParams } from '../types';
/** How long to wait after the last keystroke before saving a typing cell. */
export declare const CELL_CHANGE_DEBOUNCE_MS = 250;
export type CellChangeOptions = {
    /**
     * Update the local item immediately but wait until the user stops typing
     * before calling onCellChange. Used by typing cells (text, number, money)
     * so a save is not triggered on every keystroke.
     */
    debounce?: boolean;
};
type EditableRowContextValue<R extends RecordType> = {
    /** The optimistic local copy of the item, updated immediately on change */
    localItem: R;
    /** Per-column error messages keyed by column id */
    cellErrors: Record<string, string>;
    /** Per-column loading state keyed by column id */
    cellLoading: Record<string, boolean>;
    /** Update a single field and notify the parent via onCellChange */
    handleCellChange: (columnId: string, value: unknown, options?: CellChangeOptions) => void;
    /** Apply multiple field updates at once, then call onCellChange once */
    batchCellChanges: (updates: Record<string, unknown>, options?: CellChangeOptions) => void;
};
export type EditableRowProviderProps<R extends RecordType> = {
    item: R;
    onCellChange: (params: EditableTableOnCellChangeParams<R>) => Promise<void | Record<string, string>>;
    children: React.ReactNode;
};
/**
 * Provider that wraps a table row with editing state.
 * Manages an optimistic local copy of the item, handles cell change callbacks,
 * and tracks per-cell error state.
 */
export declare function EditableRowProvider<R extends RecordType>({ item, onCellChange, children, }: EditableRowProviderProps<R>): import("react").JSX.Element;
/**
 * Access the editable row context.
 * Returns null when used outside an EditableRowProvider (non-editable rows).
 */
export declare function useEditableRow<R extends RecordType>(): EditableRowContextValue<R> | null;
export {};
