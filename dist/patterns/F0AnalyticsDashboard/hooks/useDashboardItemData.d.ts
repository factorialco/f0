import { FiltersDefinition, FiltersState } from '../../OneFilterPicker/types';
/**
 * Return type of the useDashboardItemData hook.
 */
export interface DashboardItemDataState<T> {
    /** Resolved data, undefined while loading or on error */
    data: T | undefined;
    /** Whether a fetch is in progress */
    isLoading: boolean;
    /** The most recent error, if any */
    error: Error | undefined;
    /** Re-trigger the fetch with the current filters */
    retry: () => void;
}
/**
 * Generic async data hook for a single dashboard item.
 *
 * Calls `fetchData(filters)` whenever the filters change, managing
 * loading / error / data states and protecting against stale responses
 * via an incrementing request counter.
 */
export declare function useDashboardItemData<Filters extends FiltersDefinition, T>(fetchData: (filters: FiltersState<Filters>) => Promise<T>, filters: FiltersState<Filters>, enabled: boolean, refreshKey?: string): DashboardItemDataState<T>;
