import { FiltersDefinition, FiltersState } from '../types';
interface FiltersChipsListProps<Filters extends FiltersDefinition> {
    filters: Filters;
    value: FiltersState<Filters>;
    onFilterSelect: (key: keyof Filters) => void;
    onFilterRemove: (key: keyof Filters) => void;
    onClearAll: () => void;
    /** When true, hide all chips (e.g., when a preset is active and already represents the filters) */
    hideChips?: boolean;
    /** Total number of items matching the current filters */
    resultCount?: number;
}
export declare function FiltersChipsList<Filters extends FiltersDefinition>({ filters, value, onFilterSelect, onFilterRemove, onClearAll, hideChips, resultCount, }: FiltersChipsListProps<Filters>): import("react").JSX.Element | null;
export {};
