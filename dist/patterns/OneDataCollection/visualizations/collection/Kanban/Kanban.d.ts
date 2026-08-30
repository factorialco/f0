import { FiltersDefinition } from '../../../../OneFilterPicker/types';
import { RecordType } from '../../../../../hooks/datasource';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { GroupingDefinition, SortingsDefinition, SummariesDefinition } from '../../../types';
import { ItemActionsDefinition } from '../../../item-actions';
import { KanbanCollectionProps } from './types';
export declare const KanbanCollection: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ lanes, title, description, avatar, metadata: optionsMetadata, onMove, onCreate, source, onSelectItems, onLoadError, onLoadData, getLanesForGroup, selectableGroups, }: KanbanCollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => import("react").JSX.Element;
