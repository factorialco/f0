import { ReactNode } from 'react';
import { GroupingDefinition, RecordType } from '../../../hooks/datasource';
import { FiltersDefinition } from '../../OneFilterPicker/types';
import { ItemActionsDefinition } from '../item-actions';
import { NavigationFiltersDefinition } from '../navigationFilters/types';
import { CollectionProps, SortingsDefinition, SummariesDefinition } from '../types';
import { collectionVisualizations, VisualizacionTypeDefinition } from '../visualizations/collection/collectionViewRegistry';
import { Visualization } from '../visualizations/collection/types';
export declare const getVisualizationTypeRegistry: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(type: keyof typeof collectionVisualizations | "custom") => VisualizacionTypeDefinition<CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, object>> | null;
export declare const getSettingsResetHandler: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => ((settings: import('./SettingsProvider').DataCollectionSettingsContextType) => void) | null;
export declare const hasVisualizacionSettings: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => boolean;
/**
 * A component that renders the selected visualization settings for a collection.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The item actions type extending Item ActionsDefinition
 *
 * @param visualization - The configuration for the current visualization
 * @param source - The data source to visualize
 *
 * @returns The rendered visualization component (TableCollection, CardCollection, or custom component)
 */
export declare const VisualizationSettingsRenderer: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ visualization, }: {
    visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
}) => ReactNode;
