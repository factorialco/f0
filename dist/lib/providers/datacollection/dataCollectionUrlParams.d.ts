import { FiltersDefinition, FiltersState } from '../../../patterns/OneFilterPicker/types';
import { DataCollectionStorage } from './types';
/**
 * Every data collection URL param shares this prefix, so each filter is its own
 * readable param — e.g. `?dc_department=Sales&dc_search=ada&dc_visualization=kanban`
 * instead of a single JSON blob. Params are not scoped to a collection id, so
 * this assumes a single URL-synced collection per page.
 */
export declare const DATA_COLLECTION_URL_PARAM_PREFIX = "dc_";
/**
 * The reserved (non-filter) param names. Individual filters are encoded as
 * `dc_<filterKey>`; these names are written last (via `set`) so that on the rare
 * clash where a filter key is exactly `search`, `sort`, `view` or `page`, the
 * reserved param wins.
 */
export declare const DATA_COLLECTION_URL_PARAMS: {
    readonly search: "dc_search";
    readonly sortings: "dc_sort";
    /** Active visualization type/key, e.g. `table` (omitted for the default one). */
    readonly visualization: "dc_visualization";
    /** Current page (1-indexed; omitted for the first page). */
    readonly page: "dc_page";
    /** Selected view id (omitted when no view is selected). */
    readonly preset: "dc_view";
};
/**
 * Maximum number of values a single filter may contribute to the URL.
 *
 * A multi-select (`in`) filter materializes one URL param per selected value,
 * so "select all" over a large or paginated data source would otherwise dump
 * hundreds of ids into the query string (bloated, and beyond browser/server URL
 * length limits). Past this cap the filter is left out of the URL — it is still
 * applied in-memory and persisted via storage, just not shareable through the
 * URL. Deliberately conservative; tune if a use case needs more.
 */
export declare const MAX_URL_FILTER_VALUES = 25;
/** The subset of a data collection's state we read from / write to the URL. */
export type DataCollectionUrlState<CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>> = Pick<DataCollectionStorage<CurrentFiltersState>, "filters" | "search" | "sortings"> & {
    /**
     * Active visualization, addressed by its **type/key** (e.g. `"table"`,
     * `"kanban"`) rather than a positional index — readable and stable across
     * reordering. Mapping to/from the index is the caller's job (the data
     * collection knows the visualization list).
     */
    visualization?: string;
    /** Current page (1-indexed). Not part of persisted storage — URL only. */
    page?: number;
    /** Selected preset id (absent when no preset is selected). URL only. */
    preset?: string;
};
/** How {@link syncDataCollectionUrlParams} should update the browser history. */
export type DataCollectionUrlHistoryMode = "replace" | "push" | "none";
/**
 * Parses a data collection's state out of URL query params.
 *
 * @param input - A query string, a `URLSearchParams`, or omitted to read from
 *                `window.location.search`.
 * @param filtersDefinition - Needed to decode the `dc_<filterKey>` params back
 *                into correctly-typed filter values. Omit to skip filters.
 * @returns The state encoded in the URL (empty when no `dc_` params are present).
 *          Params are not scoped to a collection id — one synced collection per
 *          page is assumed.
 */
export declare const parseDataCollectionUrlParams: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(input?: string | URLSearchParams, filtersDefinition?: FiltersDefinition) => DataCollectionUrlState<CurrentFiltersState>;
/**
 * Builds a fresh `URLSearchParams` encoding a data collection's state, symmetric
 * with {@link parseDataCollectionUrlParams}.
 */
export declare const buildDataCollectionUrlParams: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(state?: DataCollectionUrlState<CurrentFiltersState>) => URLSearchParams;
/**
 * Writes a data collection's current state onto an existing query string,
 * preserving any unrelated params. Every `dc_`-prefixed param is rebuilt from
 * `state`, so cleared values drop out and an entirely empty state leaves the URL
 * free of `dc_` params.
 */
export declare const setDataCollectionUrlParams: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(current: string | URLSearchParams | undefined, state: DataCollectionUrlState<CurrentFiltersState>) => URLSearchParams;
/**
 * Reflects a data collection's current state into the URL.
 *
 * Pairs with {@link parseDataCollectionUrlParams} (which reads the other way).
 * `OneDataCollection` wires this up by default when an `id` is set.
 *
 * @returns The resulting query string (no leading `?`), or `null` under SSR.
 */
export declare const syncDataCollectionUrlParams: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(state: DataCollectionUrlState<CurrentFiltersState>, options?: {
    history?: DataCollectionUrlHistoryMode;
}) => string | null;
/**
 * Synchronously persists a OneDataCollection's state to localStorage, mirroring
 * `readDataCollectionStorage`. Uses the same `datacollection-` prefixed key as
 * `dataCollectionLocalStorageHandler` so the component hydrates from it.
 *
 * @param id - The OneDataCollection `id`, WITHOUT the `datacollection-` prefix.
 */
export declare const writeDataCollectionStorage: <CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>>(id: string, storage: DataCollectionStorage<CurrentFiltersState>) => void;
