import { useEffect, useRef, useState } from "react"

import { usePageHeaderItemNavigation } from "@/experimental/Navigation/Header/PageHeader"
import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  useData,
  useDataSourceItemNavigation,
} from "@/hooks/datasource"
import {
  DataCollectionStorage,
  useDataCollectionStorage,
} from "@/lib/providers/datacollection"

import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { useDataCollectionSource } from "../useDataCollectionSource"
import { seedFromStorage } from "./seedFromStorage"
import {
  AppliedCollectionState,
  UseDataCollectionItemNavigationProps,
  UseDataCollectionItemNavigationReturn,
} from "./types"

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
export function useDataCollectionItemNavigation<
  R extends RecordType = RecordType,
  Filters extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition =
    NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  props: UseDataCollectionItemNavigationProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
): UseDataCollectionItemNavigationReturn<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> {
  const {
    source,
    collectionId,
    activeItemId,
    defaultActiveItemId,
    onActiveItemChange,
    idProvider,
    itemUrl,
    getItemTitle,
    enabled = true,
    restorePersistedState = true,
    deps = [],
  } = props

  const storageHandler = useDataCollectionStorage()
  const dataSource = useDataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >(source, deps)

  type Applied = AppliedCollectionState<R, Filters, Sortings, Grouping>

  // Hydration is two-phase: the persisted state is applied via the source
  // setters (settled: false), and the fetch is enabled one render later
  // (settled: true). The extra render lets useData's internal search ref
  // settle, so the first fetch runs exactly once with the seeded state.
  const [hydration, setHydration] = useState<{
    key: string
    applied: Applied | null
    settled: boolean
  } | null>(null)
  const hydrated = hydration?.key === collectionId && hydration.settled

  // Latest-value refs so the hydration effect stays gated on collectionId
  // only — inline-recreated definitions/handlers never retrigger it.
  const dataSourceRef = useRef(dataSource)
  dataSourceRef.current = dataSource
  const storageHandlerRef = useRef(storageHandler)
  storageHandlerRef.current = storageHandler
  const hydratedKeyRef = useRef<string | null>(null)

  useEffect(() => {
    if (!enabled) return
    if (hydratedKeyRef.current === collectionId) return
    if (!restorePersistedState) {
      hydratedKeyRef.current = collectionId
      setHydration({ key: collectionId, applied: null, settled: false })
      return
    }
    let cancelled = false
    const hydrate = async () => {
      let applied: Applied | null = null
      try {
        // NOTE: must await (not .then) — the default noop handler returns a
        // plain object typed as a Promise.
        const storage = (await storageHandlerRef.current.get(
          collectionId
        )) as DataCollectionStorage<FiltersState<Filters>>
        if (storage && !cancelled) {
          applied = seedFromStorage<R, Filters, Sortings, Grouping>(
            storage,
            dataSourceRef.current,
            dataSourceRef.current
          )
        }
      } catch {
        // Unreadable persisted state — the definition defaults apply.
      }
      if (cancelled) return
      hydratedKeyRef.current = collectionId
      setHydration({ key: collectionId, applied, settled: false })
    }
    hydrate()
    return () => {
      cancelled = true
    }
  }, [collectionId, enabled, restorePersistedState])

  const {
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading,
    isInitialLoading,
  } = useData<R, Filters, Sortings, Grouping>(
    dataSource,
    {
      // The first fetch waits for hydration so it runs exactly once, with
      // the seeded state — never a defaults-first double fetch.
      enabled: enabled && hydrated,
      fetchParamsProvider: (options) => ({
        ...options,
        navigationFilters: dataSource.currentNavigationFilters,
      }),
    },
    [JSON.stringify(dataSource.currentNavigationFilters)]
  )

  // Phase 2: flips settled one render after the state was applied. Declared
  // after useData so it runs once its internal effects have observed the
  // seeded values.
  useEffect(() => {
    setHydration((current) =>
      current && current.key === collectionId && !current.settled
        ? { ...current, settled: true }
        : current
    )
  }, [hydration, collectionId])

  const itemNavigation = useDataSourceItemNavigation<R>({
    dataSource,
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading,
    idProvider,
    itemUrl: itemUrl ?? source.itemUrl,
    activeItemId,
    defaultActiveItemId,
    onActiveItemChange,
  })

  const navigation = usePageHeaderItemNavigation<R>(itemNavigation, {
    getItemTitle,
  })

  return {
    ...itemNavigation,
    isReady: hydrated && !isInitialLoading,
    navigation,
    appliedCollectionState: hydration?.applied ?? null,
    dataSource,
    data,
    paginationInfo,
    isLoading,
  }
}
