import { FiltersDefinition, FiltersState, PresetsDefinition } from '../../OneFilterPicker/types';
interface VisualizationWithFilterOverrides<Filters extends FiltersDefinition> {
    filters?: Partial<Filters>;
    presets?: PresetsDefinition<Filters>;
    [key: string]: unknown;
}
type UsePerVisualizationFiltersArgs<Filters extends FiltersDefinition> = {
    sourceFilters: Filters | undefined;
    sourcePresets: PresetsDefinition<Filters> | undefined;
    sourceCurrentFilters: FiltersState<Filters>;
    sourceSetCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>;
    visualizations: ReadonlyArray<VisualizationWithFilterOverrides<Filters>>;
    currentVisualization: number;
    /**
     * Identity of the underlying storage scope (typically the collection `id`).
     * Used to reset hydration locks so a re-mount-free collection swap reapplies
     * the new scope's persisted filters instead of being stuck on the first one.
     */
    storageKey?: string;
};
type UsePerVisualizationFiltersResult<Filters extends FiltersDefinition> = {
    effectiveFilters: Filters | undefined;
    effectivePresets: PresetsDefinition<Filters> | undefined;
    currentFilters: FiltersState<Filters>;
    setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>;
    allVisualizationFilters: Record<string, FiltersState<Filters>>;
    setAllVisualizationFilters: (states: Record<string, FiltersState<Filters>>) => void;
    hasPerVisualizationFilters: boolean;
};
/**
 * Manages independent filter state per visualization. Per-viz scoping is on
 * whenever `visualizations.length > 1`: each viz gets its own currentFilters
 * slot in storage, and switching viz saves the previous viz's filters and
 * restores the new viz's.
 */
export declare const usePerVisualizationFilters: <Filters extends FiltersDefinition>({ sourceFilters, sourcePresets, sourceCurrentFilters, sourceSetCurrentFilters, visualizations, currentVisualization, storageKey, }: UsePerVisualizationFiltersArgs<Filters>) => UsePerVisualizationFiltersResult<Filters>;
export {};
