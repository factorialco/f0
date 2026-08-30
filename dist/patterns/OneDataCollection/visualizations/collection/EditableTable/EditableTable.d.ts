import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../../item-actions';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { SummariesDefinition } from '../../../summary';
import { CollectionProps } from '../../../types';
import { EditableTableVisualizationOptions } from './types';
export declare const EditableTableCollection: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ onCellChange, addRowActions, addRowActionsLabel, addNestedRowActions, addNestedRowActionsLabel, ...props }: CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, EditableTableVisualizationOptions<R, Filters, Sortings, Summaries>>) => import("react").JSX.Element;
