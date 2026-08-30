import { FiltersDefinition, FiltersMode, FiltersState, PresetsDefinition } from './types';
export type FiltersContextType<Definition extends FiltersDefinition> = {
    filters: Definition | undefined;
    value: FiltersState<Definition>;
    presets?: PresetsDefinition<Definition>;
    presetsLoading?: boolean;
    removeFilterValue: (key: keyof Definition) => void;
    setFiltersValue: (filters: FiltersState<Definition>) => void;
    isFiltersOpen: boolean;
    setIsFiltersOpen: (isOpen: boolean) => void;
    emitFilterChange: (filters: FiltersState<Definition>) => void;
    emitPresetClick: (filters: FiltersState<Definition>) => void;
    mode?: FiltersMode;
    displayCounter?: boolean;
    /** Total number of items matching the current filters, displayed as "N results for:" prefix in the chips row */
    resultCount?: number;
    /**
     * Id of the currently selected preset. When provided (together with
     * `onSelectPreset`), preset selection is identity-based: the preset stays
     * selected even as the user changes filters/sorting/etc. on top of it. When
     * absent, the picker falls back to legacy exact-filter-match selection.
     */
    selectedPresetId?: string;
    /** Selects a preset by id. Enables identity-based selection (see above). */
    onSelectPreset?: (presetId: string) => void;
    /** Ids of presets that can be edited/deleted (user-created presets). */
    editablePresetIds?: string[];
    /** Opens the edit flow for a preset (hover icon on editable presets). */
    onEditPreset?: (presetId: string) => void;
    /**
     * Whether to show the dashed "Save view" chip in the presets row:
     * - "save": the current view diverges and no view is selected → offer to save
     * - "none": no action available
     */
    presetActionState?: "save" | "none";
    /** Opens the create-view dialog. */
    onPresetAction?: () => void;
};
export declare const FiltersContext: import('react').Context<FiltersContextType<FiltersDefinition>>;
