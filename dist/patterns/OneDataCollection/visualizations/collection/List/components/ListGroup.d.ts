import { FiltersDefinition } from '../../../../../OneFilterPicker/types';
import { GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { DataCollectionSource } from '../../../../hooks/useDataCollectionSource';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { ItemDefinition, ListPropertyDefinition } from '../types';
type ListGroupProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    items: R[];
    selectedItems: Map<number | string, R>;
    handleSelectItemChange: (item: R, checked: boolean) => void;
    fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>;
    itemDefinition: (record: R) => ItemDefinition;
    isLoadingMore: boolean;
};
/**
 * Group List: Renders the list for a group
 */
export declare const ListGroup: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ source, items, selectedItems, handleSelectItemChange, fields, itemDefinition, isLoadingMore, }: ListGroupProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => import("react").JSX.Element;
export {};
