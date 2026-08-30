import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../../summary';
import { RowProps } from '../FlatRow';
export declare const DEFAULT_LOADING_ROWS_COUNT = 3;
type LoadMoreRowProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    onLoadMoreChildren: () => void;
    rowRef: React.RefObject<HTMLTableRowElement>;
};
declare const LoadMoreRowInner: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: LoadMoreRowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, ref: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null) => import("react").JSX.Element;
export declare const LoadMoreRow: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: LoadMoreRowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null;
}) => ReturnType<typeof LoadMoreRowInner>;
export {};
