import { ItemActionsDefinition } from '../../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../../summary';
import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../../hooks/datasource';
import { NestedRowProps, RowProps } from '../Row';
export type NestedActionRowProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = RowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    rowRef: React.RefObject<HTMLTableRowElement>;
    nestedRowPropsOverride: Partial<NestedRowProps>;
};
declare const NestedActionRowInner: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: NestedActionRowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, ref: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null) => import("react").JSX.Element;
export declare const NestedActionRow: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: NestedActionRowProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    ref?: ((element: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null;
}) => ReturnType<typeof NestedActionRowInner>;
export {};
