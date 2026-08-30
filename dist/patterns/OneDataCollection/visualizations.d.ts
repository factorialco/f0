import { FiltersDefinition } from '../OneFilterPicker/types';
import { IconType } from '../../components/F0Icon';
import { GroupingDefinition, OnSelectItemsCallback, RecordType } from '../../hooks/datasource';
import { SortingsDefinition } from '../../hooks/datasource/types/sortings.typings';
import { OnLoadDataCallback, OnLoadErrorCallback } from './types';
import { CardVisualizationOptions } from './visualizations/collection/Card';
import { TableVisualizationOptions } from './visualizations/collection/Table';
import { DataCollectionSource } from './hooks/useDataCollectionSource/types';
import { ItemActionsDefinition } from './item-actions';
import { NavigationFiltersDefinition } from './navigationFilters/types';
import { SummariesDefinition } from './summary';
/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
export type Visualization<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = {
    /** Card-based visualization type */
    type: "card";
    /** Configuration options for card visualization */
    options: CardVisualizationOptions<Record, Filters, Sortings>;
} | {
    /** Table-based visualization type */
    type: "table";
    /** Configuration options for table visualization */
    options: TableVisualizationOptions<Record, Filters, Sortings, Summaries>;
} | {
    /** Custom visualization type */
    type: "custom";
    /** Human-readable label for the visualization */
    label: string;
    /** Icon to represent the visualization in UI */
    icon: IconType;
    /** Custom component to render the visualization */
    component: (props: {
        onLoadData: OnLoadDataCallback<Record, Filters>;
        onLoadError: OnLoadErrorCallback;
        source: DataCollectionSource<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    }) => JSX.Element;
};
/**
 * Represents the type of visualization.
 * TODO: This should be a union of all the types in the Visualization type.
 */
export type VisualizationType = "card" | "table" | "custom";
/**
 * Props interface for components that support multiple visualizations.
 * Used to configure how data can be displayed in different formats.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template Actions - The actions type extending ActionsDefinition
 */
export type VisualizationProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, ItemActions extends ItemActionsDefinition<Record>, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = {
    /** Array of available visualization configurations */
    visualizations?: ReadonlyArray<Visualization<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
};
/**
 * A component that renders a selector for switching between different visualization types.
 * Provides buttons for each available visualization with appropriate icons.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template Actions - The actions type extending ActionsDefinition
 *
 * @param visualizations - Array of available visualizations
 * @param currentVisualization - Index of the currently selected visualization
 * @param onVisualizationChange - Callback function when visualization selection changes
 *
 * @returns A row of buttons for switching between visualizations
 */
export declare const VisualizationSelector: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ visualizations, currentVisualization, onVisualizationChange, }: {
    visualizations: ReadonlyArray<Visualization<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    currentVisualization: number;
    onVisualizationChange: (index: number) => void;
}) => JSX.Element;
/**
 * A component that renders the selected visualization for a collection.
 * Handles switching between different visualization types (table, card, or custom view)
 * and passes appropriate props to the specific visualization component.
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
export declare const VisualizationRenderer: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ visualization, source, onSelectItems, onLoadData, onLoadError, }: {
    visualization: Visualization<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    source: DataCollectionSource<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    onSelectItems: OnSelectItemsCallback<Record, Filters>;
    onLoadData: OnLoadDataCallback<Record, Filters>;
    onLoadError: OnLoadErrorCallback;
    clearSelectedItems?: () => void;
}) => JSX.Element;
