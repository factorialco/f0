import { DataCollectionSource, Lane } from '../../../hooks/useDataCollectionSource';
import { ItemActionsDefinition } from '../../../item-actions';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { SummariesDefinition } from '../../../types';
import { Data, FiltersDefinition, GroupingDefinition, OnSelectItemsCallback, PaginationInfo, RecordType, SortingsDefinition } from '../../../../../hooks/datasource';
export type LaneSelectProviderProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActionsDefinition<R>, NavigationFilters, Grouping>;
    data: Data<R>;
    lane: Lane<Filters>;
    paginationInfo: PaginationInfo | null;
    onSelectItems: OnSelectItemsCallback<R, Filters>;
    onHandleSelectItemCallbackChange: (handleSelectItemChange: (item: R, checked: boolean) => void) => void;
    onSelectedItemsChange: (selectedItems: Map<number | string, R>) => void;
};
export declare const LaneSelectProvider: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: LaneSelectProviderProps<R, Filters, Sortings, Summaries, NavigationFilters, Grouping>) => null;
