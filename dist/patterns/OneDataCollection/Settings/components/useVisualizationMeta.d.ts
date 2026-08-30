import { IconType } from '../../../../components/F0Icon';
import { GroupingDefinition, RecordType } from '../../../../hooks/datasource';
import { FiltersDefinition } from '../../../OneFilterPicker/types';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SortingsDefinition, SummariesDefinition } from '../../types';
import { Visualization } from '../../visualizations/collection';
/**
 * Returns a resolver for a visualization's icon + localized label. Shared by the
 * Settings popover selector and the header view switcher so both stay in sync.
 */
export declare const useVisualizationMeta: () => <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>(visualization: Visualization<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => {
    icon: IconType;
    label: string;
};
