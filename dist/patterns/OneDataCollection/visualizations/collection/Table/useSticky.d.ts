import { RecordType } from '../../../../../hooks/datasource';
import { SortingsDefinition } from '../../../../../hooks/datasource/types/sortings.typings';
import { SummariesDefinition } from '../../../summary';
import { TableColumnDefinition } from './types';
export declare const useSticky: <R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition>(frozenColumnsLeft: number, columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>, hasCheckColumn: boolean) => {
    getStickyPosition: (cellIndex: number) => {
        left: number;
    } | undefined;
    checkColumnWidth: number;
};
