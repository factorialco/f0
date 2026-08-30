import { FiltersDefinition, FiltersState } from '../types';
/**
 * Props for the FilterList component.
 * @template Definition - The type defining the structure of available filters
 */
interface FilterListProps<Definition extends FiltersDefinition> {
    /** The schema defining available filters and their configurations */
    definition: Definition;
    /** Current temporary state of filters being configured */
    tempFilters: FiltersState<Definition>;
    /** The currently selected filter key, if any */
    selectedFilterKey: keyof Definition | null;
    /** Callback fired when a filter is selected from the list */
    onFilterSelect: (key: keyof Definition) => void;
    /** Whether to hide a border around the list */
    isCompactMode?: boolean;
    /** Callback fired when the apply filters button is clicked */
    onClickApplyFilters: () => void;
}
/**
 * Displays a vertical list of available filters with selection functionality.
 *
 * Features:
 * - Shows all available filters from the definition
 * - Indicates active filters with a visual indicator
 * - Allows selecting a filter to configure
 * - Handles animation for status indicators
 *
 * This component renders the left sidebar in the filters popover interface.
 *
 * @template Definition - The type defining the structure of available filters
 */
export declare function FilterList<Definition extends FiltersDefinition>({ definition, tempFilters, selectedFilterKey, onFilterSelect, isCompactMode, onClickApplyFilters, }: FilterListProps<Definition>): import("react").JSX.Element;
export {};
