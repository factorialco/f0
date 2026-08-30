import { FiltersDefinition, FiltersState, PresetDefinition } from '../types';
/**
 * Checks whether a preset exactly matches the current filter state.
 * A preset is considered selected only when the current filters have the
 * same keys and values as the preset's filter — no extra, no missing.
 */
export declare const isPresetSelected: <Filters extends FiltersDefinition>(preset: PresetDefinition<Filters>, currentFilters: FiltersState<Filters>) => boolean;
