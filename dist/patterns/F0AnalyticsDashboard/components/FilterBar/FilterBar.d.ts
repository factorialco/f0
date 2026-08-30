import { FiltersDefinition, FiltersState, PresetsDefinition } from '../../../OneFilterPicker/types';
interface FilterBarProps<Filters extends FiltersDefinition> {
    filters?: Filters;
    value: FiltersState<Filters>;
    presets?: PresetsDefinition<Filters>;
    presetsLoading?: boolean;
    onChange: (value: FiltersState<Filters>) => void;
}
/**
 * Dashboard-level filter bar.
 *
 * Renders `OneFilterPicker` with the dashboard source's filters, presets,
 * and current filter values. This is the single point of filter control
 * for the entire dashboard.
 */
export declare function FilterBar<Filters extends FiltersDefinition>({ filters, value, presets, presetsLoading, onChange, }: FilterBarProps<Filters>): import("react").JSX.Element | null;
export {};
