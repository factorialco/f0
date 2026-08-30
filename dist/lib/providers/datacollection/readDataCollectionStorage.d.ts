import { FiltersDefinition, FiltersState } from '../../../patterns/OneFilterPicker/types';
import { DataCollectionStorage } from './types';
/**
 * Synchronously reads a OneDataCollection's persisted state from localStorage.
 *
 * @param id - The same `id` passed to OneDataCollection (e.g.
 *             `organization/employees/v1`), WITHOUT the `datacollection-`
 *             prefix — this function applies it.
 * @returns The parsed storage, or `null` on missing key / parse error.
 */
export declare const readDataCollectionStorage: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(id: string) => DataCollectionStorage<CurrentFiltersState> | null;
/**
 * Resolves the effective filters for the persisted visualization:
 * `visualizationFilters[String(visualization ?? 0)] ?? filters`.
 *
 * Pure equivalent of the runtime keying in usePerVisualizationFilters.ts; the
 * hook's refs/transitions/preset-hydration are irrelevant when reading
 * already-persisted state.
 *
 * NOTE on sortings: F0 persists `sortings` as `SortingsState` — a single
 * `{ field; order } | null`, NOT an array. Read it via `storage?.sortings`.
 */
export declare const resolveDataCollectionFilters: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(storage: Pick<DataCollectionStorage<CurrentFiltersState>, "visualization" | "visualizationFilters" | "filters"> | null) => CurrentFiltersState | undefined;
/**
 * Write counterpart of `resolveDataCollectionFilters`: returns a new storage
 * object with `filters` replaced, writing the SAME slot the resolver reads —
 * when a per-visualization override exists for the persisted visualization,
 * that slot is updated too, so a subsequent resolve sees the new filters
 * instead of the stale override winning.
 *
 * Pure; the rest of the persisted state (sortings, search, settings, …) is
 * preserved untouched.
 */
export declare const mergeDataCollectionFilters: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(storage: DataCollectionStorage<CurrentFiltersState>, filters: CurrentFiltersState) => DataCollectionStorage<CurrentFiltersState>;
