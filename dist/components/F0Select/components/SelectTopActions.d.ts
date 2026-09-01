import { FiltersDefinition, FiltersState, GroupingDefinition, GroupingState, RecordType } from '../../../hooks/datasource';
interface SelectTopActionsProps<R extends RecordType = RecordType, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>, Filters extends FiltersDefinition = FiltersDefinition> {
    showSearchBox?: boolean;
    filters?: Filters;
    currentFilters: FiltersState<Filters>;
    onFiltersChange: (filters: FiltersState<Filters>) => void;
    searchBoxPlaceholder?: string;
    onSearchChange: (value: string) => void;
    searchValue?: string;
    grouping?: Grouping;
    currentGrouping?: GroupingState<R, Grouping>;
    onGroupingChange?: (grouping: GroupingState<R, Grouping>) => void;
    asList?: boolean;
    isFiltersOpen?: boolean;
    onFiltersOpenChange?: (open: boolean) => void;
    showPreview?: boolean;
}
export declare const SelectTopActions: <R extends RecordType = RecordType>({ showSearchBox, searchBoxPlaceholder, onSearchChange, searchValue, grouping, currentGrouping, onGroupingChange, filters, currentFilters, onFiltersChange, asList, onFiltersOpenChange, showPreview, }: SelectTopActionsProps<R>) => import("react").JSX.Element | null;
export {};
