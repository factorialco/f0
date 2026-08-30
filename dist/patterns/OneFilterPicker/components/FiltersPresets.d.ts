import { FiltersDefinition, FiltersState, PresetsDefinition } from '../types';
interface FilterPresetsProps<Filters extends FiltersDefinition> {
    value: FiltersState<Filters>;
    onPresetsChange: (filter: FiltersState<Filters>) => void;
    presets: PresetsDefinition<Filters>;
    presetsLoading?: boolean;
    /** Id of the selected preset for identity-based selection. */
    selectedPresetId?: string;
    /** Selects a preset by id. When provided, selection is identity-based. */
    onSelectPreset?: (presetId: string) => void;
    /** Ids of presets that can be edited/deleted (i.e. user-created). */
    editablePresetIds?: string[];
    /** Opens the edit flow for a preset (shown as a hover icon on editable presets). */
    onEditPreset?: (presetId: string) => void;
    /**
     * When "save", a dashed "Save view" chip is shown at the end of the row.
     */
    presetActionState?: "save" | "none";
    /** Opens the create-view dialog (used by the "Save view" chip). */
    onPresetAction?: () => void;
}
export declare const FiltersPresets: <Filters extends FiltersDefinition>({ presets, value, onPresetsChange, presetsLoading, selectedPresetId, onSelectPreset, editablePresetIds, onEditPreset, presetActionState, onPresetAction, }: FilterPresetsProps<Filters>) => import("react").JSX.Element | null;
export {};
