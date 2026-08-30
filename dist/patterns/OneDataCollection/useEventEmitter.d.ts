import { SortingsDefinition, SortingsState } from '../../hooks/datasource/types/sortings.typings';
import { FiltersDefinition, FiltersState } from '../OneFilterPicker/types';
type UseEventEmitterParams<Sortings extends SortingsDefinition> = {
    defaultFilters?: FiltersState<FiltersDefinition>;
    defaultSorting?: SortingsState<Sortings>;
    /** Current visualization index, included in filter/preset change events when per-visualization filters are active */
    currentVisualization?: number;
};
export declare const useEventEmitter: <Sortings extends SortingsDefinition>({ defaultFilters, defaultSorting, currentVisualization, }: UseEventEmitterParams<Sortings>) => {
    emitFilterChange: (filters: FiltersState<FiltersDefinition>) => void;
    emitSortingChange: (sortings: SortingsState<Sortings>) => void;
    emitPresetClick: (filters: FiltersState<FiltersDefinition>) => void;
};
export {};
