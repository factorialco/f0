import { DataCollectionSource } from '../../../../hooks/useDataCollectionSource/types';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { ChildrenPaginationInfo, NestedVariant } from '../../../../../../hooks/datasource/types/nested.typings';
interface UseLoadChildrenProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> {
    rowId: string;
    item: R;
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
}
export declare const useLoadChildren: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ rowId, item, source, }: UseLoadChildrenProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => {
    children: R[];
    loadChildren: () => R[];
    isLoading: boolean;
    childrenType: NestedVariant;
    paginationInfo: ChildrenPaginationInfo | undefined;
};
export {};
