import { RecordType, FiltersDefinition, SortingsDefinition, GroupingDefinition } from '../../../hooks/datasource';
import { Visualization } from '../visualizations/collection';
import { SecondaryActionItem } from '../actions';
import { DataCollectionSource } from '../hooks/useDataCollectionSource/types';
import { ItemActionsDefinition } from '../item-actions';
import { NavigationFiltersDefinition } from '../navigationFilters/types';
import { SummariesDefinition } from '../summary';
interface UseExportActionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    currentVisualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined;
    filename?: string;
    /** When false the hook returns a disabled no-op export action for
     *  collections that don't use export. Due to the Rules of Hooks, internal
     *  state, callbacks, and i18n are still initialized. Defaults to `true`. */
    enabled?: boolean;
}
export declare function useExportAction<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ source, currentVisualization, filename, enabled, }: UseExportActionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>): SecondaryActionItem;
export {};
