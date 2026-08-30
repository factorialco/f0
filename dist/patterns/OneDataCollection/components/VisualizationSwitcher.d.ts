import { GroupingDefinition, RecordType } from '../../../hooks/datasource';
import { FiltersDefinition } from '../../OneFilterPicker/types';
import { ItemActionsDefinition } from '../item-actions';
import { NavigationFiltersDefinition } from '../navigationFilters/types';
import { SortingsDefinition, SummariesDefinition } from '../types';
import { Visualization } from '../visualizations/collection';
/**
 * Header control that lets the user switch between the available visualizations
 * with a single click. This is the only place visualizations are switched.
 *
 * Renders nothing when there is a single visualization.
 */
export declare const VisualizationSwitcher: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ visualizations, currentVisualization, onVisualizationChange, hideLabels, }: {
    visualizations: ReadonlyArray<Visualization<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    currentVisualization: number;
    onVisualizationChange: (index: number) => void;
    /** Show segments icon-only (e.g. when the header runs out of room). */
    hideLabels?: boolean;
}) => JSX.Element | null;
