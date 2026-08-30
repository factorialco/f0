import { FiltersDefinition, FiltersState } from '../types';
/**
 * Props for the FilterContent component.
 * @template Definition - The type defining the structure of available filters
 */
type FilterContentProps<Definition extends FiltersDefinition> = {
    /** The currently selected filter key, if any */
    selectedFilterKey: keyof Definition | null;
    /** The schema defining available filters and their configurations */
    definition: Definition;
    /** Current temporary state of filters being configured */
    tempFilters: FiltersState<Definition>;
    /** Callback fired when a filter value changes */
    onFilterChange: (key: keyof Definition, value: unknown) => void;
    /** Tells us if we are in compact mode */
    isCompactMode?: boolean;
};
/**
 * Renders the configuration content for the currently selected filter.
 *
 * Features:
 * - Dynamically renders different filter interfaces based on filter type
 * - Supports "in" filters with multi-select capabilities
 * - Supports "search" filters with text input
 * - Provides search functionality for filtering options within "in" filters
 * - Handles both static and dynamically loaded options
 * - Supports "Select All" functionality for multi-select filters
 *
 * This component renders the right panel in the filters popover interface
 * and adapts its UI based on the selected filter type.
 *
 * @template Definition - The type defining the structure of available filters
 */
export declare function FilterContent<Definition extends FiltersDefinition>({ selectedFilterKey, definition, tempFilters, onFilterChange, isCompactMode, }: FilterContentProps<Definition>): import("react").JSX.Element | null;
export {};
