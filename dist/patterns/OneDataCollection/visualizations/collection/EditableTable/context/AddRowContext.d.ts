import { RecordType } from '../../../../../../hooks/datasource';
import { AddRowActionsResult } from '../types';
export type AddRowProviderProps<R extends RecordType = RecordType> = {
    addRowActions?: () => AddRowActionsResult;
    addRowActionsLabel?: string;
    addNestedRowActions?: (parent: R) => AddRowActionsResult;
    addNestedRowActionsLabel?: string;
    children: React.ReactNode;
};
/**
 * Generic provider that accepts typed callbacks and erases the generic
 * parameter before storing them in context.  The cast is safe because
 * consumers narrow the type back via `useAddRow<R>()`.
 */
export declare function AddRowProvider<R extends RecordType>({ addRowActions, addRowActionsLabel, addNestedRowActions, addNestedRowActionsLabel, children, }: AddRowProviderProps<R>): import("react").JSX.Element;
type TypedAddRowValue<R> = {
    addRowActions?: () => AddRowActionsResult;
    addRowActionsLabel?: string;
    addNestedRowActions?: (parent: R) => AddRowActionsResult;
    addNestedRowActionsLabel?: string;
};
/**
 * Access the add-row context.
 * Returns null when used outside an AddRowProvider (non-editable tables).
 */
export declare function useAddRow<R extends RecordType = RecordType>(): TypedAddRowValue<R> | null;
export {};
