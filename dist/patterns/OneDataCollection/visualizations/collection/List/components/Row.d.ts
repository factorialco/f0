import { DataCollectionSource } from '../../../../hooks/useDataCollectionSource/types';
import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../../../item-actions';
import { NavigationFiltersDefinition } from '../../../../navigationFilters/types';
import { SummariesDefinition } from '../../../../summary';
import { ItemDefinition, ListPropertyDefinition } from '../types';
type RowProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    item: R;
    selectedItems: Map<number | string, R>;
    handleSelectItemChange: (item: R, checked: boolean) => void;
    fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>;
    itemDefinition: (record: R) => ItemDefinition;
};
/**
 * Group List: Renders the list for a group
 */
export declare const Row: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ source, item, selectedItems, handleSelectItemChange, fields, itemDefinition, }: RowProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => import("react").JSX.Element;
export {};
