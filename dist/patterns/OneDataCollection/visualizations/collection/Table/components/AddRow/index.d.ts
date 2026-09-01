import { ItemActionsDefinition } from '../../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../../summary';
import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../../hooks/datasource';
import { PrimaryActionItemDefinition } from '../../../../../actions';
import { RowProps } from '../Row';
type AddRowRowProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    addRowActions: PrimaryActionItemDefinition[];
    addRowLabel?: string;
    rowRef: React.RefObject<HTMLTableRowElement>;
};
declare const AddRowRowInner: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: AddRowRowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, ref: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null) => import("react").JSX.Element;
export declare const AddRowRow: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: AddRowRowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null;
}) => ReturnType<typeof AddRowRowInner>;
export {};
