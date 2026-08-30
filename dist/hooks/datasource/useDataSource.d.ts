import { DataSource, DataSourceDefinition, FiltersDefinition, GroupingDefinition, PaginationType, RecordType, SortingsDefinition } from './types';
/**
 * Get the pagination type of a data adapter
 * @param dataAdapter - The data adapter to get the pagination type of
 * @returns The pagination type of the data adapter
 */
export declare const getDataSourcePaginationType: <D extends {
    paginationType?: PaginationType | undefined | never;
}>(dataAdapter: D) => PaginationType;
/**
 * Create a data source definition from a data source definition
 * This function is a helper to allow to infer the type of the data source definition
 * from the data source definition.
 *
 * @param definition - The data source definition to create from
 * @returns The created data source definition
 */
export declare const createDataSourceDefinition: <R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(definition: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>) => DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>;
/**
 * A hook that manages data source state and filtering capabilities for a collection.
 * It creates and returns a reusable data source that can be shared across different
 * visualizations and components.
 *
 * This hook is intentionally separated from the rendering components to:
 * 1. Enable sharing the same data source across multiple components
 * 2. Allow for state management outside the rendering layer
 * 3. Support more complex data filtering, querying, and pagination logic
 * 4. Provide a clean separation between data management and visualization
 *
 * @template R - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 * @template Actions - The definition of available actions for the collection
 *
 * @param options - Configuration object containing:
 *   - filters: Optional filter configurations for the collection
 *   - currentFilters: Initial state of the filters
 *   - dataAdapter: Adapter for data fetching and manipulation
 *   - itemActions: Optional item actions available
 *   - actions: Optional DataCollection actions
 *   - presets: Optional filter presets
 * @param deps - Dependency array for memoization, similar to useEffect dependencies
 *
 * @returns A DataSource object containing:
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - dataAdapter: The data adapter for fetching/manipulating data
 * - itemActions: Available actions for records (items)
 * - actions: Available actions for the collection
 * - presets: Available filter presets
 */
export declare function useDataSource<R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>({ defaultFilters, currentFilters: externalCurrentFilters, defaultGrouping: externalDefaultGrouping, currentGrouping: externalCurrentGrouping, filters, search, defaultSortings, currentSortings: externalCurrentSortings, dataAdapter, grouping, ...rest }: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>, deps?: ReadonlyArray<unknown>): DataSource<R, FiltersSchema, Sortings, Grouping>;
