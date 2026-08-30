import { RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { SummariesDefinition } from '../../../../summary';
import { ColId, TableColumnDefinition, TableVisualizationSettings } from '../types';
/**
 * Resolves the stable id of a column: its explicit `id`, falling back to its
 * `label`. Used for ordering, hiding and header-group collapsing.
 */
export declare const getColumnId: <Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label">>(column: Col) => string;
export declare const getNextLockedColumnIds: (currentIds: readonly ColId[] | undefined, columnId: ColId, locked: boolean) => string[];
/**
 * Get the order of the columns from the definition and sort them by the order putting the ones with no order at the end
 * @param columns - The columns to get the order from
 * @returns
 */
export declare const getColsOrderFromDefinition: <Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label"> & Partial<Pick<TableColumnDefinition<never, never, never>, "order">>>(columns: Readonly<Col[]>) => ColId[];
export declare const getColsHiddenFromDefinition: <Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label"> & Partial<Pick<TableColumnDefinition<never, never, never>, "hidden" | "noHiding">>>(columns: Readonly<Col[]>) => ColId[];
type UseColumnsReturn<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = {
    columns: readonly TableColumnDefinition<R, Sortings, Summaries>[];
    colsHidden: ColId[];
    setColsHidden: (colsHidden: ColId[]) => void;
    colsOrder: ColId[];
    setColsOrder: (colsOrder: ColId[]) => void;
    savedOrder: ColId[];
    /** User-managed lock ids after enforcing a remaining scrollable column. */
    managedLockedColumnIds: ColId[];
    /** Permanent and user-managed columns that participate in sticky layout. */
    stickyColumnIds: ColId[];
    columnsWithStatus: {
        column: TableColumnDefinition<R, Sortings, Summaries> & {
            id: ColId;
        };
        canHide: boolean;
        visible: boolean;
        sortable: boolean;
        frozen: boolean;
        locked: boolean;
        order: number;
    }[];
};
/**
 * Hook to manage the columns state of the table (hide, order, etc)
 * @param originalColumns
 * @param frozenColumns
 * @returns
 */
export declare const useColumns: <R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition>(originalColumns: Readonly<TableColumnDefinition<R, Sortings, Summaries>[]>, frozenColumns: number, settings?: TableVisualizationSettings, allowSorting?: boolean, allowHiding?: boolean, lockedColumnIds?: readonly ColId[], usesExplicitColumnLocking?: boolean) => UseColumnsReturn<R, Sortings, Summaries>;
export {};
