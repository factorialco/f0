import { FiltersDefinition, FiltersState } from '../../patterns/OneFilterPicker/types';
import { BaseFetchOptions, GroupingDefinition, InfiniteScrollPaginatedResponse, PageBasedPaginatedResponse, PaginatedResponse, PaginationInfo, RecordType, SortingsDefinition } from './types';
import { DataSource } from './types/datasource.typings';
/**
 * Represents an error that occurred during data fetching
 */
export interface DataError {
    message: string;
    cause?: unknown;
}
/**
 * Response structure for non-paginated data
 */
type SimpleResult<T> = T[];
/**
 * Hook options for useData
 */
export interface UseDataOptions<R extends RecordType, Filters extends FiltersDefinition> {
    filters?: Partial<FiltersState<Filters>>;
    /**
     * When false, suspends all data fetching: the initial fetch effect does not
     * run until `enabled` becomes true. Useful to delay the first fetch until
     * async state (e.g. persisted filters) has been applied to the source.
     * `isInitialLoading` stays true while disabled.
     * @default true
     */
    enabled?: boolean;
    /**
     * A function that is called when an error occurs during data fetching.
     * It is called with the error object.
     * @param error - The error object.
     */
    onError?: (error: DataError) => void;
    /**
     * A function that provides the fetch parameters for the data source.
     * It is called before each fetch request and can be used to modify the fetch parameters.
     * @param options - The fetch parameters for the data source.
     * @returns The fetch parameters for the data source.
     */
    fetchParamsProvider?: <O extends BaseFetchOptions<Filters>>(options: O) => O;
    /**
     * A function that is called when the data is fetched successfully.
     * It is called with the response data.
     * @param response - The response data.
     */
    onResponse?: (response: PaginatedResponse<R> | SimpleResult<R>) => void;
}
/**
 * Symbol used to identify the groupId in the data
 */
export declare const GROUP_ID_SYMBOL: unique symbol;
export type WithGroupId<RecordType> = RecordType & {
    [GROUP_ID_SYMBOL]: unknown | undefined;
};
/**
 * Hook return type for useData
 */
export interface UseDataReturn<R extends RecordType> {
    data: Data<R>;
    search: string | undefined;
    setSearch: (search: string | undefined) => void;
    isInitialLoading: boolean;
    isLoading: boolean;
    isLoadingMore: boolean;
    error: DataError | null;
    paginationInfo: PaginationInfo | null;
    setPage: (page: number) => void;
    loadMore: () => void;
    totalItems: number | undefined;
    mergedFilters: FiltersState<FiltersDefinition>;
    /**
     * Opaque identity of the query whose response produced `data` — filters,
     * search, sortings and pagination position, as they were when that fetch was
     * issued. Undefined until the first response commits.
     *
     * Compare it across renders to tell "these rows answer a different question"
     * from "these rows changed". The live filter/search state on the source can't
     * do that: it moves a render (and a debounce) before the matching rows do, so
     * there is always a window where it describes a query the rendered rows do
     * not answer.
     *
     * Optional so existing constructors of this interface (mocks, adapters) stay
     * valid; `useData` itself always returns it.
     */
    committedQuery?: string;
}
export type GroupRecord<RecordType> = {
    key: string;
    label: string | Promise<string>;
    itemCount: number | undefined | Promise<number | undefined>;
    records: RecordType[];
};
export type Data<R extends RecordType> = {
    records: WithGroupId<R>[];
    type: "grouped" | "flat";
    groups: GroupRecord<R>[];
};
/**
 * A core React hook that manages data fetching, state management, and pagination within the Collections ecosystem.
 *
 * ## Why a Separate Hook?
 *
 * `useData` exists as a separate hook for three main reasons:
 *
 * - **Visualization-Specific Needs**: Different visualizations have unique data requirements:
 *   - Card visualizations need grid-aligned pagination (multiples of grid columns)
 *   - Table visualizations work best with row-optimized data fetching
 *   - Custom visualizations may need specialized data transformations
 *
 * - **Separation of Concerns**: Maintains clear boundaries between:
 *   - Data source configuration (managed by `useDataSource`)
 *   - Data fetching & state management (handled by `useData`)
 *   - UI presentation (implemented by visualization components)
 *
 * - **Extensibility**: New visualization types can be added without modifying core data logic,
 *   as each visualization directly controls how it consumes data
 *
 * ## Core Features
 *
 * - Handles multiple data source types seamlessly (synchronous, Promise-based, Observable-based)
 * - Manages pagination state with automatic page handling
 * - Provides consistent loading states (`isInitialLoading`, `isLoading`)
 * - Implements standardized error handling with detailed error information
 * - Performs automatic cleanup of subscriptions to prevent memory leaks
 * - Supports filter application with proper filter state management
 *
 * ## Usage in Visualizations
 *
 * Each visualization component calls `useData` directly to maintain control over its specific data needs:
 *
 * ```tsx
 * // Example: CardCollection customizing pagination before calling useData
 * function CardCollection({ source }) {
 *   // Override source to ensure grid-friendly pagination (multiples of 2,3,4)
 *   const adaptedSource = useMemo(() => ({
 *     ...source,
 *     dataAdapter: {
 *       ...source.dataAdapter,
 *       perPage: source.dataAdapter.perPage ?? 24,
 *     }
 *   }), [source]);
 *
 *   // Let useData handle the data fetching with our customized source
 *   const { data, isInitialLoading, paginationInfo, setPage } = useData(adaptedSource);
 *
 *   // Rendering logic follows...
 * }
 * ```
 *
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing dataAdapter and filter state
 * @param options - Optional configuration including filter overrides
 *
 * @returns {UseDataReturn<R>} An object containing:
 * - data: The current collection records
 * - isInitialLoading: Whether this is the first data load
 * - isLoading: Whether any data fetch is in progress
 * - error: Any error that occurred during data fetching
 * - paginationInfo: Pagination state and metadata if available
 * - setPage: Function to navigate to a specific page
 */
export declare function useData<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(source: DataSource<R, Filters, Sortings, Grouping>, { filters, enabled, onError, fetchParamsProvider, onResponse, }?: UseDataOptions<R, Filters>, deps?: unknown[]): UseDataReturn<R>;
export declare function isPageBasedPagination<R extends RecordType>(pagination: PaginationInfo | null): pagination is PageBasedPaginatedResponse<R>;
export declare function isInfiniteScrollPagination<R extends RecordType>(pagination: PaginationInfo | null): pagination is InfiniteScrollPaginatedResponse<R>;
export {};
