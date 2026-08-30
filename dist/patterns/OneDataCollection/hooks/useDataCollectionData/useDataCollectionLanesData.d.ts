import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition, UseDataOptions } from '../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SummariesDefinition } from '../../summary';
import { DataCollectionSource } from '../useDataCollectionSource';
import { UseDataCollectionData } from './useDataCollectionData';
export declare function useDataCollectionLanesData<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActionsDefinition<R>, NavigationFilters, Grouping>, options?: UseDataOptions<R, Filters>): {
    lanesProvider: import("react").JSX.Element[];
    lanesHooks: Record<string | symbol, UseDataCollectionData<R>>;
};
