import { ReactElement } from 'react';
import { FiltersDefinition, FiltersMode, FiltersState, PresetsDefinition } from './types';
/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
export type OneFilterPickerRootProps<Definition extends FiltersDefinition> = {
    /** The definition of available filters and their configurations */
    filters?: Definition;
    /** Current state of applied filters */
    value: FiltersState<Definition>;
    /** Optional preset configurations that users can select */
    presets?: PresetsDefinition<Definition>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /** Callback fired when filters are changed */
    onChange: (value: FiltersState<Definition>) => void;
    /** The children of the component */
    children?: React.ReactNode;
    /** The mode of the component */
    mode?: FiltersMode;
    /** Callback fired when filters open state is changed */
    onOpenChange?: (isOpen: boolean) => void;
    /** Display counter for the applied filters */
    displayCounter?: boolean;
    /** Total number of items matching the current filters, displayed as "N results for:" prefix in the chips row */
    resultCount?: number;
    /**
     * Id of the currently selected preset. When provided together with
     * `onSelectPreset`, preset selection is identity-based (the preset stays
     * selected as the user changes state on top of it). When absent, the picker
     * falls back to legacy exact-filter-match selection.
     */
    selectedPresetId?: string;
    /** Selects a preset by id. Enables identity-based selection. */
    onSelectPreset?: (presetId: string) => void;
    /** Ids of presets that can be edited/deleted (user-created presets). */
    editablePresetIds?: string[];
    /** Opens the edit flow for a preset (hover icon on editable presets). */
    onEditPreset?: (presetId: string) => void;
    /** Whether to show the dashed "Save view" chip ("save" | "none"). */
    presetActionState?: "save" | "none";
    /** Opens the preset create/update dialog. */
    onPresetAction?: () => void;
};
/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for filter configuration and displays active filters as chips.
 *
 * The component supports multiple filter types through a unified interface:
 * - "in" type filters: Multi-select filters with predefined options
 * - "search" type filters: Free-text search filters
 *
 * Features:
 * - Search and multi-select filters with type safety
 * - Temporary filter state that's only applied when explicitly confirmed
 * - Animated filter chips for active filters
 * - Support for filter presets for quick selection of common filter combinations
 * - Responsive design for different viewport sizes
 *
 * The component maintains a temporary state of filters that are only applied
 * when the user explicitly clicks the "Apply Filters" button, allowing for
 * a more controlled filtering experience.
 *
 * @template Definition - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Example with multiple filter types and presets
 * <Filters
 *   schema={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" },
 *         { value: "sales", label: "Sales" }
 *       ]
 *     },
 *     search: {
 *       type: "search",
 *       label: "Search"
 *     }
 *   }}
 *   filters={{
 *     department: ["engineering"]
 *   }}
 *   presets={[
 *     {
 *       label: "Engineering Only",
 *       filter: { department: ["engineering"] }
 *     },
 *     {
 *       label: "Sales & Marketing",
 *       filter: { department: ["sales", "marketing"] }
 *     }
 *   ]}
 *   onChange={setFilters}
 * />
 * ```
 *
 * @see {@link FiltersDefinition} for detailed schema structure
 * @see {@link FiltersState} for the structure of filter state
 */
declare const FiltersRoot: {
    <Definition extends FiltersDefinition>({ filters, value, children, presetsLoading, mode, onOpenChange, ...props }: OneFilterPickerRootProps<Definition>): import("react").JSX.Element;
    displayName: string;
};
/**
 * Filter controls
 */
declare const FiltersControls: {
    (): import("react").JSX.Element | null;
    displayName: string;
};
/**
 * Filter presets
 */
declare const FiltersPresets: {
    (): import("react").JSX.Element | undefined;
    displayName: string;
};
/**
 * Filter chips list
 */
declare const FiltersChipsList: {
    (): import("react").JSX.Element | undefined;
    displayName: string;
};
declare const OneFilterPicker: <Definition extends FiltersDefinition>(props: OneFilterPickerRootProps<Definition> & {
    dataTestId?: string;
}) => ReactElement | null;
/**
 * Export the components as named exports to allow to customize the layout
 *
 * @example
 * ```tsx
 * <OneFiltersPicker>
 *   <div className="flex flex-col gap-2">
 *     <OneFiltersPicker.Controls />
 *     <OneFiltersPicker.Presets />
 *     <div className="flex flex-col gap-2">
 *       {children}
 *     </div>
 *   </div>
 *  <OneFiltersPicker.ChipsList />
 * </OneFiltersPicker>
 *
 * Use OneFilterPicker as a single component to get a default layout
 * ```tsx
 * <OneFilterPicker />
 * ```
 */
export { FiltersChipsList as ChipsList, FiltersControls as Controls, OneFilterPicker, FiltersPresets as Presets, FiltersRoot as Root, };
