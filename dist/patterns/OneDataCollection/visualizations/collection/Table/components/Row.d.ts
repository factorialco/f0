import { IconType } from '../../../../../../components/F0Icon';
import { TableVisualizationType } from '../../../../types';
import { GroupingDefinition, RecordType, SelectionId, SortingsDefinition } from '../../../../../../hooks/datasource';
import { NestedVariant } from '../../../../../../hooks/datasource/types/nested.typings';
import { DataCollectionSource } from '../../../../hooks/useDataCollectionSource/types';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { FiltersDefinition } from '../../../../../OneFilterPicker/types';
import { CellRendererProps, ColId, ReferenceType, RowWrapperProps, TableColumnDefinition } from '../types';
import { HeaderGroupEntry } from '../hooks/useHeaderGroups';
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
    noBorder?: boolean;
    loading?: boolean;
    tableWithChildren: boolean;
    nestedRowProps?: NestedRowProps;
    disableHover?: boolean;
    /** When true, plays the green "flash on add" background animation once. */
    isNew?: boolean;
    /** Optional predicate to apply a row-level visual variant. */
    referenceRowType?: (item: R) => ReferenceType;
    /** In a table with nested rows, renders root rows (depth 0) in bold. */
    boldRootRows?: boolean;
    /** Optional custom cell renderer. When provided, wraps each cell's content. */
    cellRenderer?: React.ComponentType<CellRendererProps<R, Sortings, Summaries> & {
        isLastColumn?: boolean;
    }>;
    /** Row wrapper passed through to NestedRow for wrapping child rows */
    rowWrapper?: React.ComponentType<RowWrapperProps<R>>;
    fromVisualization?: TableVisualizationType;
    headerGroups: HeaderGroupEntry[] | null;
    /** Marker class for each animating column's cells, keyed by column id. */
    collapsingCellClasses?: ReadonlyMap<ColId, string>;
    registerSelectable?: (id: SelectionId, item: R) => void;
    unregisterSelectable?: (id: SelectionId) => void;
};
export type AddRowAction = {
    label: string;
    icon?: IconType;
    description?: string;
    onClick?: () => void | Promise<void>;
    loading?: boolean;
    disabled?: boolean;
};
export type OnAddRowConfig = {
    actions: AddRowAction[];
    label?: string;
};
export type NestedRowProps = {
    connectorHeight?: number;
    depth?: number;
    expanded?: boolean;
    hasLoadedChildren?: boolean;
    isLastChild?: boolean;
    nestedVariant?: NestedVariant;
    parentHasChildren?: boolean;
    onExpand?: () => void;
    onLoadMoreChildren?: () => void;
    onAddRow?: OnAddRowConfig;
    stickyRow?: boolean;
};
declare const RowComponentInner: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ source, item, onCheckedChange, onItemCheckedChange, selectedItems, columns, frozenColumnsLeft, checkColumnWidth, index, groupIndex, noBorder, loading, nestedRowProps, tableWithChildren, disableHover, isNew, referenceRowType: referenceRowTypeFn, boldRootRows, cellRenderer: CellRenderer, rowWrapper, fromVisualization, headerGroups, collapsingCellClasses, registerSelectable, unregisterSelectable, }: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, ref: React.ForwardedRef<HTMLTableRowElement>) => import("react").JSX.Element;
declare const Row: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: React.ForwardedRef<HTMLTableRowElement>;
    fromVisualization?: TableVisualizationType;
}) => ReturnType<typeof RowComponentInner>;
export { Row };
