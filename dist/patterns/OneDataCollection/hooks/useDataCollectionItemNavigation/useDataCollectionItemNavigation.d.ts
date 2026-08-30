import { FiltersDefinition, GroupingDefinition, RecordType, SortingsDefinition } from '../../../../hooks/datasource';
import { ItemActionsDefinition } from '../../item-actions';
import { NavigationFiltersDefinition } from '../../navigationFilters/types';
import { SummariesDefinition } from '../../summary';
import { UseDataCollectionItemNavigationProps, UseDataCollectionItemNavigationReturn } from './types';
/**
 * Item navigation (prev/next + counter + PageHeader wiring) fed from a
 * **declared** data collection source definition plus the `collectionId` of
 * the originating list — not from a mounted collection.
 *
 * Because it never needs the list mounted, it works on a direct link / hard
 * refresh of a detail page: the persisted filters/sortings/search the list
 * wrote through the data collection storage handler are read by
 * `collectionId`, validated against the definition, and seeded into the
 * source before the first fetch (exactly one fetch, with the right state).
 *
 * Persisted state intentionally wins over `source.currentFilters` /
 * `currentSortings`: the definition values apply on mount and the hydrated
 * state lands right after, mirroring what the user last saw on the list.
 *
 * When the adapter implements the optional id-relative `fetchItemNeighbors`
 * capability, gaps the loaded window can't answer (deep direct link to an
 * item beyond the first page, or a neighbor past the window edge) are
 * resolved backend-side under the same filters/sortings/search — prev/next
 * and the counter then behave as if the whole filtered set were loaded.
 * Without the capability, behavior is window-only as before.
 *
 * @example
 * ```tsx
 * const { navigation } = useDataCollectionItemNavigation({
 *   source: employeesSourceDefinition, // same definition the list uses
 *   collectionId: "organization/employees/v1", // same id the list uses
 *   activeItemId: routeParams.employeeId,
 *   getItemTitle: (employee) => employee.name,
 * })
 * return (
 *   <PageHeaderNavigationProvider value={navigation}>
 *     <EmployeeDetailPage />
 *   </PageHeaderNavigationProvider>
 * )
 * ```
 */
export declare function useDataCollectionItemNavigation<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(props: UseDataCollectionItemNavigationProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>): UseDataCollectionItemNavigationReturn<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
