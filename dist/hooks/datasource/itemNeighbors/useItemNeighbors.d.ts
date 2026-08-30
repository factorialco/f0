import { FiltersDefinition, FiltersState } from '../../../patterns/OneFilterPicker/types';
import { BaseFetchOptions, DataAdapter, ItemNeighborsId, ItemNeighborsResponse } from '../types/fetch.typings';
import { RecordType } from '../types/records.typings';
import { SortingsStateMultiple } from '../types/sortings.typings';
import { DataError } from '../useData';
export interface UseItemNeighborsOptions<R extends RecordType, Filters extends FiltersDefinition> {
    /** The adapter that may implement the `fetchItemNeighbors` capability */
    dataAdapter: DataAdapter<R, Filters>;
    /** Active item id. Null disables resolution (symbol ids cannot be used) */
    id: ItemNeighborsId | null;
    /** Current filters — same values `fetchData` receives */
    filters: FiltersState<Filters>;
    /** Current sortings — same composed array `fetchData` receives */
    sortings: SortingsStateMultiple;
    /** Current search — same value `fetchData` receives */
    search?: string;
    /**
     * Gate: resolve only while true (e.g. only when the snapshot path failed
     * to locate the item in the loaded window).
     * @default true
     */
    enabled?: boolean;
    /**
     * Extends/transforms the options passed to `fetchItemNeighbors`, mirroring
     * `useData`'s option of the same name — e.g. OneDataCollection adds
     * `navigationFilters`. The extended options also key the response cache,
     * so extra context invalidates it correctly.
     */
    fetchParamsProvider?: <O extends BaseFetchOptions<Filters>>(options: O) => O;
    onError?: (error: DataError) => void;
}
export interface UseItemNeighborsReturn<R extends RecordType> {
    /** True when the adapter implements `fetchItemNeighbors` */
    isSupported: boolean;
    /** Resolved neighbours for the CURRENT id+context, or null while unresolved */
    neighbors: ItemNeighborsResponse<R> | null;
    isResolving: boolean;
    error: DataError | null;
}
/**
 * Resolves the previous/next neighbours of an item through the adapter's
 * optional id-relative `fetchItemNeighbors` capability.
 *
 * Built for detail-page navigation on direct links: when the active item is
 * not in any loaded page window, this asks the backend for its immediate
 * neighbours (plus position/total for the counter) under the current
 * filters/sortings/search instead of walking pages.
 *
 * Semantics:
 * - `neighbors` only ever reflects the current `{id, filters, sortings,
 *   search}` — stale responses from superseded requests are dropped.
 * - Responses are cached per request key, so navigating back and forth
 *   between already-visited ids is instant. The cache is cleared whenever
 *   filters/sortings/search change; errors are never cached.
 * - When the capability is absent (`isSupported: false`), disabled, or the
 *   id is null, nothing is fetched and `neighbors` stays null — consumers
 *   keep their fallback behaviour.
 */
export declare function useItemNeighbors<R extends RecordType, Filters extends FiltersDefinition>({ dataAdapter, id, filters, sortings, search, enabled, fetchParamsProvider, onError, }: UseItemNeighborsOptions<R, Filters>): UseItemNeighborsReturn<R>;
