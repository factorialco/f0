import { FiltersDefinition, FiltersState, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../hooks/datasource';
import { SearchOptions } from '../../../../hooks/datasource/types/search.typings';
import { DataCollectionStorage } from '../../../../lib/providers/datacollection';
import { AppliedCollectionState } from './types';
export interface SeedableDefinition<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>> {
    filters?: Filters;
    sortings?: Sortings;
    search?: SearchOptions;
    grouping?: Grouping;
}
export interface SeedTarget<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>> {
    setCurrentFilters: (filters: FiltersState<Filters>) => void;
    setCurrentSortings: (sortings: {
        field: keyof Sortings;
        order: "asc" | "desc";
    } | null) => void;
    setCurrentSearch: (search: string | undefined) => void;
    setCurrentGrouping: (grouping: {
        field: keyof Grouping["groupBy"];
        order?: "asc" | "desc";
    } | undefined) => void;
}
/**
 * Applies a OneDataCollection's persisted state onto a data source's runtime
 * setters, validating every piece against the declared definition first so
 * stale persisted keys (schema drift, renamed filters) never reach the
 * adapter.
 *
 * - Filters: resolved per-visualization (`visualizationFilters` wins over
 *   `filters`), then pruned to the keys declared in `definition.filters`.
 * - Sortings: a single `{ field, order } | null` — `null` is an explicit
 *   user "clear sorting" and is applied; `undefined` keeps the defaults.
 * - Search: applied only when the definition enables search.
 * - Grouping: applied only when the persisted field is a declared groupBy —
 *   grouping changes record order, and prev/next must match the list.
 *
 * Pure besides invoking the given setters. Returns what was applied, or null
 * when the storage contributed nothing.
 */
export declare function seedFromStorage<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>>(storage: DataCollectionStorage<FiltersState<Filters>>, definition: SeedableDefinition<R, Filters, Sortings, Grouping>, target: SeedTarget<R, Filters, Sortings, Grouping>): AppliedCollectionState<R, Filters, Sortings, Grouping> | null;
