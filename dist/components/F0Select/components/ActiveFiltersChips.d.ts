import { FiltersDefinition, FiltersState } from '../../../hooks/datasource';
type ActiveFiltersChipsProps<Filters extends FiltersDefinition> = {
    filters: Filters;
    currentFilters: FiltersState<Filters>;
    onFiltersChange: (filters: FiltersState<Filters>) => void;
};
/**
 * Component to display active filters as chips with horizontal scroll
 */
export declare const ActiveFiltersChips: {
    <Filters extends FiltersDefinition>({ filters, currentFilters, onFiltersChange, }: ActiveFiltersChipsProps<Filters>): import("react").JSX.Element | null;
    displayName: string;
};
export {};
