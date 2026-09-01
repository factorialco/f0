import { TableVisualizationType } from '../../../../types';
import { GroupingDefinition, RecordType, SelectionId, SortingsDefinition } from '../../../../../../hooks/datasource';
import { DataCollectionSource } from '../../../../hooks/useDataCollectionSource/types';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { FiltersDefinition } from '../../../../../OneFilterPicker/types';
import { CellRendererProps, ColId, RowWrapperProps, TableColumnDefinition } from '../types';
import { HeaderGroupEntry } from '../hooks/useHeaderGroups';
import { NestedRowProps } from './Row';
export type RowProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    item: R;
    index: number;
    groupIndex: number;
    onCheckedChange: (checked: boolean) => void;
    onItemCheckedChange?: (item: R, checked: boolean) => void;
    selectedItems: Map<string | number, R>;
    columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>;
    frozenColumnsLeft: number;
    checkColumnWidth: number;
    tableWithChildren: boolean;
    nestedRowProps?: NestedRowProps;
    /** Optional predicate to apply a row-level visual variant. */
    referenceRowType?: (item: R) => "none" | "striped" | "striked";
    /** In a table with nested rows, renders root rows (depth 0) in bold. */
    boldRootRows?: boolean;
    /** Custom cell renderer, passed through from Table to Row */
    cellRenderer?: React.ComponentType<CellRendererProps<R, Sortings, Summaries>>;
    /** Row wrapper for child rows (provides per-row context, e.g. editing state) */
    rowWrapper?: React.ComponentType<RowWrapperProps<R>>;
    fromVisualization?: TableVisualizationType;
    headerGroups: HeaderGroupEntry[] | null;
    /** Marker classes the collapse animation looks the cells up by. */
    collapsingCellClasses?: ReadonlyMap<ColId, string>;
    registerSelectable?: (id: SelectionId, item: R) => void;
    unregisterSelectable?: (id: SelectionId) => void;
};
declare const NestedRowComponentInner: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, ref: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null) => import("react").JSX.Element;
declare const NestedRow: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: React.ForwardedRef<HTMLTableRowElement>;
    fromVisualization?: TableVisualizationType;
}) => ReturnType<typeof NestedRowComponentInner>;
export { NestedRow };
