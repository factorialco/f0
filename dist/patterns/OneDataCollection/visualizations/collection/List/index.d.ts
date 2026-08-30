import { FiltersDefinition } from '../../../../OneFilterPicker/types';
import { RecordType, SortingsDefinition } from '../../../../../hooks/datasource';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { ItemActionsDefinition } from '../../../item-actions';
import { SummariesDefinition } from '../../../summary';
import { CollectionProps, GroupingDefinition } from '../../../types';
import { ListVisualizationOptions } from './types';
/**
 * Group List: Renders the list for a group
 */
export type ListCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, ListVisualizationOptions<Record, Filters, Sortings>>;
export declare const ListCollection: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ fields, itemDefinition, source, onSelectItems, onLoadData, onLoadError, tmpFullWidth, }: ListCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => import("react").JSX.Element;
