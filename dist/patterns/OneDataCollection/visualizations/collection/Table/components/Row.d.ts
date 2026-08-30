import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { TableVisualizationType } from '../../../../types';
import { RowProps } from './FlatRow';
export type { AddRowAction, NestedRowProps, OnAddRowConfig, RowProps, } from './FlatRow';
declare const RowComponentInner: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, ref: React.ForwardedRef<HTMLTableRowElement>) => import("react").JSX.Element;
declare const Row: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: React.ForwardedRef<HTMLTableRowElement>;
    fromVisualization?: TableVisualizationType;
}) => ReturnType<typeof RowComponentInner>;
export { Row };
