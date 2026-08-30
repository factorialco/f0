import { DataCollectionSource } from '../useDataCollectionSource';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SummariesDefinition } from '../../types';
import { Data, FiltersDefinition, GroupingDefinition, OnSelectItemsCallback, PaginationInfo, RecordType, SortingsDefinition, UseSelectableReturn } from '../../../../hooks/datasource';
/**
 * Creates and scopes the useSelectable hook for a given lanes
 * @param lanes
 * @param source
 * @param onSelectItems
 * @returns
 */
export declare const useSelectableLanes: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(lanes: {
    id: string;
    data: Data<R>;
    paginationInfo: PaginationInfo | null;
}[], source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActionsDefinition<R>, NavigationFilters, Grouping>, onSelectItems?: OnSelectItemsCallback<R, Filters>) => {
    lanesUseSelectable: Map<string, UseSelectableReturn<R, Filters>>;
    lanesSelectProvider: import("react").JSX.Element[];
};
