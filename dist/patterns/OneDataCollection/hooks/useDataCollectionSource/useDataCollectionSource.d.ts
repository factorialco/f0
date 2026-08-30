import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SummariesDefinition } from '../../summary';
import { DataCollectionSource, DataCollectionSourceDefinition } from './types';
export declare const useDataCollectionSource: <R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(source: DataCollectionSourceDefinition<R, FiltersSchema, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, deps?: ReadonlyArray<unknown>) => DataCollectionSource<R, FiltersSchema, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
