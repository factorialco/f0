import { FiltersDefinition, FiltersState, SortingsDefinition, SortingsState } from '../../../hooks/datasource';
type UseDataCollectionUrlSyncOptions = {
    /**
     * When true, no reading from or writing to the URL happens. URL syncing is on
     * by default for *any* collection (an `id` is not required) — params are not
     * scoped to a collection, so a single URL-synced collection per page is
     * assumed.
     */
    disabled: boolean;
    /** Storage hydration gate — we apply the URL only after it resolves. */
    storageReady: boolean;
    /** Needed to decode `dc_<filterKey>` params back into typed filter values. */
    filtersDefinition: FiltersDefinition | undefined;
    filters: FiltersState<FiltersDefinition>;
    search: string | undefined;
    sortings: SortingsState<SortingsDefinition>;
    /**
     * The collection's default sortings. While the current sorting still equals
     * it, `dc_sort` is left out of the URL, so a collection that starts already
     * sorted (a `defaultSortings` was configured) does not stamp the param on the
     * first paint with no user interaction.
     */
    defaultSortings?: SortingsState<SortingsDefinition>;
    /** Index of the active visualization. */
    visualization: number;
    /**
     * Ordered visualization type/keys (e.g. `["table", "kanban"]`), used to map
     * the index to/from the readable `dc_visualization` value, only synced
     * when there is more than one visualization. Duplicate types resolve to the
     * first matching index on read.
     */
    visualizationKeys: readonly string[];
    /** Id of the selected preset (absent when none is selected). */
    selectedPresetId: string | undefined;
    setFilters: (value: FiltersState<FiltersDefinition>) => void;
    setSearch: (value: string | undefined) => void;
    setSortings: (value: SortingsState<SortingsDefinition>) => void;
    setVisualization: (value: number) => void;
    setSelectedPresetId: (value: string | undefined) => void;
};
/**
 * Keeps a OneDataCollection's filters/search/sortings/visualization in two-way
 * sync with the URL query params (see `dataCollectionUrlParams`):
 *
 * - **URL → collection:** once, after storage has hydrated (so the URL takes
 *   precedence over persisted state), the `dc_`-prefixed params are applied to
 *   the current state.
 * - **collection → URL:** thereafter, every change to filters/search/sortings is
 *   reflected back into the URL via `history.replaceState`.
 *
 * The "apply once, then write" ordering avoids the pre-hydration empty snapshot
 * clobbering freshly-loaded params: writing only starts after the URL has been
 * read and applied (which flips `urlApplied` in the same render as the applied
 * state, so the first write re-affirms the URL rather than wiping it).
 */
export declare const useDataCollectionUrlSync: ({ disabled, storageReady, filtersDefinition, filters, search, sortings, defaultSortings, visualization, visualizationKeys, selectedPresetId, setFilters, setSearch, setSortings, setVisualization, setSelectedPresetId, }: UseDataCollectionUrlSyncOptions) => void;
export {};
