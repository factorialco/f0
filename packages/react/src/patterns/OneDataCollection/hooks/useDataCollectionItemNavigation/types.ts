import type { NavigationProps } from "@/experimental/Navigation/Header/PageNavigation"
import {
  Data,
  DataSourceItemId,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  PaginationInfo,
  RecordType,
  SortingsDefinition,
  SortingsState,
  UseDataSourceItemNavigationReturn,
} from "@/hooks/datasource"

import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import {
  DataCollectionSource,
  DataCollectionSourceDefinition,
} from "../useDataCollectionSource"

/**
 * The slice of persisted collection state that was actually applied to the
 * data source during hydration. `sortings: null` means the user had
 * explicitly cleared the sorting on the originating list.
 */
export type AppliedCollectionState<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  filters?: FiltersState<Filters>
  sortings?: SortingsState<Sortings>
  search?: string
  grouping?: GroupingState<R, Grouping>
}

export interface UseDataCollectionItemNavigationProps<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> {
  /**
   * The declared data source definition — the same one the originating list
   * passes to `useDataCollectionSource` / `OneDataCollection`. `itemUrl`
   * comes from here unless overridden.
   */
  source: DataCollectionSourceDefinition<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  /**
   * The `id` of the originating `OneDataCollection` (e.g.
   * `organization/employees/v1`). Its persisted filters/sortings/search are
   * read through the data collection storage handler and seeded into the
   * source, so navigation matches what the user saw on the list — even on a
   * direct link where the list was never mounted.
   */
  collectionId: string
  /** Controlled active item ID — typically the detail route param. */
  activeItemId?: DataSourceItemId | null
  /** Default active item ID for uncontrolled usage. */
  defaultActiveItemId?: DataSourceItemId | null
  /** Callback fired whenever the active item changes. */
  onActiveItemChange?: (id: DataSourceItemId | null) => void
  /** Overrides the source idProvider. */
  idProvider?: (item: R, index?: number) => DataSourceItemId
  /** Overrides `source.itemUrl`. */
  itemUrl?: (item: R) => string | undefined
  /** Accessible titles for the PageHeader prev/next links. */
  getItemTitle?: (item: R) => string
  /**
   * Gates everything: while false neither the persisted state is read nor
   * any data fetched.
   * @default true
   */
  enabled?: boolean
  /**
   * When false, skips reading the persisted collection state and fetches
   * with the definition defaults.
   * @default true
   */
  restorePersistedState?: boolean
  /**
   * Controlled filters for the navigation context — wins over the persisted
   * list filters. Feed it the filters the user refined elsewhere (e.g. a
   * collection-bound breadcrumb select's `onFiltersChange`) so prev/next and
   * the counter follow that same context. Changing it refetches and
   * re-resolves neighbors; `undefined` keeps the persisted/definition state.
   */
  currentFilters?: FiltersState<Filters>
  /**
   * Forwarded to `useDataCollectionSource` for `dataAdapter` memoization,
   * same convention as `useDataCollectionSource(source, deps)`.
   */
  deps?: ReadonlyArray<unknown>
}

export interface UseDataCollectionItemNavigationReturn<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> extends UseDataSourceItemNavigationReturn<R> {
  /** True once persisted state was applied AND the first fetch resolved. */
  isReady: boolean
  /**
   * Render-ready PageHeader navigation. Pass it to the `navigation` prop or
   * inject it via `PageHeaderNavigationProvider`. Null while there is
   * nothing useful to render (e.g. the active item is not in the loaded
   * window on a deep direct link).
   */
  navigation: NavigationProps | null
  /**
   * What was actually read and applied from the persisted collection state,
   * or null when nothing was (empty storage, restore disabled, read error).
   */
  appliedCollectionState: AppliedCollectionState<
    R,
    Filters,
    Sortings,
    Grouping
  > | null
  /** The runtime data source created from the definition (escape hatch). */
  dataSource: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  /** The fetched data backing the navigation (escape hatch). */
  data: Data<R>
  paginationInfo: PaginationInfo | null
  isLoading: boolean
}
