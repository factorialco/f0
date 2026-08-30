import { FiltersDefinition } from '../../../OneFilterPicker/types';
import { DropdownItem, DropdownItemSeparator } from '../../../../experimental/Navigation/Dropdown/internal';
import { DataCollectionSource } from '../../hooks/useDataCollectionSource/types';
import { ActionDefinition, ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SummariesDefinition } from '../../summary';
import { GroupingDefinition, RecordType, SortingsDefinition } from '../../../../hooks/datasource';
type UseItemActionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    item: R;
};
export type UseItemActions = {
    hasItemActions: boolean;
    hasMobileItemActions: boolean;
    primaryItemActions: Exclude<ActionDefinition, DropdownItemSeparator>[];
    dropdownItemActions: DropdownItem[];
    mobileDropdownItemActions: DropdownItem[];
    handleDropDownOpenChange: (open: boolean) => void;
    dropDownOpen: boolean;
    setDropDownOpen: (open: boolean) => void;
};
export declare const useItemActions: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ source, item, }: UseItemActionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => UseItemActions;
export {};
