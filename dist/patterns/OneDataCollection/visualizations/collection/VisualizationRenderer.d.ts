import { GroupingDefinition, OnSelectItemsCallback, RecordType } from '../../../../hooks/datasource';
import { FiltersDefinition } from '../../../OneFilterPicker/types';
import { DataCollectionSource } from '../../hooks/useDataCollectionSource/types';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { OnLoadDataCallback, OnLoadErrorCallback, SortingsDefinition, SummariesDefinition } from '../../types';
import { Visualization } from './types';
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
export declare const VisualizationRenderer: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ visualization, source, onSelectItems, onLoadData, onLoadError, tmpFullWidth, searchSelectionNonce, }: {
    visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    onSelectItems: OnSelectItemsCallback<R, Filters>;
    onLoadData: OnLoadDataCallback<R, Filters>;
    onLoadError: OnLoadErrorCallback;
    clearSelectedItems?: () => void;
    tmpFullWidth?: boolean;
    /** Bumped on every shared-search selection; forwarded to the visualization. */
    searchSelectionNonce?: number;
}) => JSX.Element;
