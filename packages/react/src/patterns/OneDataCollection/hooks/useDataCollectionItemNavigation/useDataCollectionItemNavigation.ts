import { useEffect, useMemo, useRef, useState } from "react"

import type { NavigationProps } from "@/experimental/Navigation/Header/PageNavigation"
import { usePageHeaderItemNavigation } from "@/experimental/Navigation/Header/PageHeader"
import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  SortingsStateMultiple,
  useData,
  useDataSourceItemNavigation,
  useItemNeighbors,
} from "@/hooks/datasource"
import { defaultIdProvider } from "@/hooks/datasource/useDataSourceItemNavigation/useDataSourceItemNavigation"
import {
  DataCollectionStorage,
  useDataCollectionStorage,
} from "@/lib/providers/datacollection"
import { subscribeToDataCollectionStorageChanges } from "@/lib/providers/datacollection/dataCollectionStorageEvents"

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
    currentFilters: currentFiltersOverride,
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

  // Controlled filters override — applied value-keyed, never identity-keyed,
  // so inline-recreated objects don't refetch.
  const overrideFiltersKey =
    currentFiltersOverride === undefined
      ? null
      : JSON.stringify(currentFiltersOverride)
  const overrideFiltersRef = useRef(currentFiltersOverride)
  overrideFiltersRef.current = currentFiltersOverride
  const appliedOverrideKeyRef = useRef<string | null>(null)

  const applyFiltersOverride = () => {
    const override = overrideFiltersRef.current
    if (override === undefined) return
    appliedOverrideKeyRef.current = JSON.stringify(override)
    dataSourceRef.current.setCurrentFilters(override)
  }

  useEffect(() => {
    if (!enabled) return
    if (hydratedKeyRef.current === collectionId) return
    if (!restorePersistedState) {
      hydratedKeyRef.current = collectionId
      applyFiltersOverride()
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
      // The controlled override wins over what storage seeded, applied
      // before the fetch is enabled so the first fetch runs once with it.
      applyFiltersOverride()
      setHydration({ key: collectionId, applied, settled: false })
    }
    hydrate()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionId, enabled, restorePersistedState])

  // Later override changes (e.g. the user refining filters in a
  // collection-bound breadcrumb select) re-apply and refetch.
  useEffect(() => {
    if (!hydrated || overrideFiltersKey === null) return
    if (appliedOverrideKeyRef.current === overrideFiltersKey) return
    applyFiltersOverride()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, overrideFiltersKey])

  // Live re-seed: when another collection-bound consumer writes this
  // collection's persisted state (e.g. the breadcrumb select's editable
  // filters writing through), re-apply it so prev/next + counter follow
  // without any app-side plumbing. The controlled override still wins: while
  // it is set, the persisted filters are not seeded at all — applying them
  // first and re-applying the override after would leak one fetch under the
  // written filters.
  useEffect(() => {
    if (!enabled || !restorePersistedState) return
    return subscribeToDataCollectionStorageChanges(collectionId, async () => {
      try {
        // NOTE: must await (not .then) — the default noop handler returns a
        // plain object typed as a Promise.
        const storage = (await storageHandlerRef.current.get(
          collectionId
        )) as DataCollectionStorage<FiltersState<Filters>>
        if (!storage) return
        const definition = dataSourceRef.current
        seedFromStorage<R, Filters, Sortings, Grouping>(
          storage,
          {
            filters:
              overrideFiltersRef.current === undefined
                ? definition.filters
                : undefined,
            sortings: definition.sortings,
            search: definition.search,
            grouping: definition.grouping,
          },
          definition
        )
      } catch {
        // Unreadable persisted state — keep the current state.
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const effectiveItemUrl = itemUrl ?? source.itemUrl

  const itemNavigation = useDataSourceItemNavigation<R>({
    dataSource,
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading,
    idProvider,
    itemUrl: effectiveItemUrl,
    activeItemId,
    defaultActiveItemId,
    onActiveItemChange,
  })

  // ── Neighbors fallback ────────────────────────────────────────────────
  // The loaded window can't always answer: on a deep direct link the active
  // item is in no loaded page, and at a window edge the adjacent record
  // exists but isn't loaded. When the adapter implements the optional
  // id-relative `fetchItemNeighbors` capability, those gaps are resolved
  // backend-side under the same filters/sortings/search — prev/next and the
  // counter behave exactly as if the whole filtered set were loaded.

  const neighborsId =
    typeof itemNavigation.activeItemId === "string" ||
    typeof itemNavigation.activeItemId === "number"
      ? itemNavigation.activeItemId
      : null

  const windowHasItem = itemNavigation.activeItem !== null
  const windowMissingNext =
    windowHasItem && itemNavigation.nextItem === null && itemNavigation.hasNext
  const windowMissingPrevious =
    windowHasItem &&
    itemNavigation.previousItem === null &&
    itemNavigation.hasPrevious
  const needsNeighbors =
    neighborsId !== null &&
    (!windowHasItem || windowMissingNext || windowMissingPrevious)

  // Same composition fetchData receives (sorting first, grouping second).
  const neighborsSortings: SortingsStateMultiple = [
    ...(dataSource.currentSortings
      ? [
          {
            field: dataSource.currentSortings.field as string,
            order: dataSource.currentSortings.order,
          },
        ]
      : []),
    ...(dataSource.currentGrouping
      ? [
          {
            field: dataSource.currentGrouping.field as string,
            order: dataSource.currentGrouping.order ?? "asc",
          },
        ]
      : []),
  ]

  const { neighbors, isSupported: neighborsSupported } = useItemNeighbors<
    R,
    Filters
  >({
    dataAdapter: dataSource.dataAdapter,
    id: neighborsId,
    filters: dataSource.currentFilters,
    sortings: neighborsSortings,
    search: dataSource.debouncedCurrentSearch,
    // Loading gates: while the window is (initially or re)fetching it may
    // still answer; resolve id-relatively only once it conclusively can't.
    enabled:
      enabled && hydrated && !isInitialLoading && !isLoading && needsNeighbors,
    fetchParamsProvider: (options) => ({
      ...options,
      navigationFilters: dataSource.currentNavigationFilters,
    }),
  })

  const effectiveIdProvider = useMemo(() => {
    if (idProvider) return idProvider
    if (dataSource.idProvider) {
      return (item: R, index?: number) => dataSource.idProvider!(item, index)
    }
    return defaultIdProvider
  }, [idProvider, dataSource.idProvider])

  const navigationState = useMemo(() => {
    if (!needsNeighbors || neighbors === null) return itemNavigation

    // Window values win where present; neighbors fill the gaps. A null
    // neighbor from the backend is a true collection edge.
    const previousItem = itemNavigation.previousItem ?? neighbors.previous
    const nextItem = itemNavigation.nextItem ?? neighbors.next
    const urlOf = (item: R | null) =>
      item && effectiveItemUrl ? (effectiveItemUrl(item) ?? null) : null

    return {
      ...itemNavigation,
      previousItem,
      nextItem,
      previousItemUrl: itemNavigation.previousItemUrl ?? urlOf(previousItem),
      nextItemUrl: itemNavigation.nextItemUrl ?? urlOf(nextItem),
      absoluteIndex:
        itemNavigation.absoluteIndex ??
        (neighbors.position !== undefined ? neighbors.position - 1 : null),
      totalItems: itemNavigation.totalItems ?? neighbors.total,
      hasPrevious: itemNavigation.hasPrevious || previousItem !== null,
      hasNext: itemNavigation.hasNext || nextItem !== null,
      // Off-window the base goTo* no-op (no window index): jump straight to
      // the resolved neighbor instead.
      goToPrevious: windowHasItem
        ? itemNavigation.goToPrevious
        : () => {
            if (neighbors.previous) {
              itemNavigation.setActiveItemId(
                effectiveIdProvider(neighbors.previous)
              )
            }
          },
      goToNext: windowHasItem
        ? itemNavigation.goToNext
        : () => {
            if (neighbors.next) {
              itemNavigation.setActiveItemId(
                effectiveIdProvider(neighbors.next)
              )
            }
          },
    }
  }, [
    itemNavigation,
    needsNeighbors,
    neighbors,
    windowHasItem,
    effectiveItemUrl,
    effectiveIdProvider,
  ])

  const navigation = usePageHeaderItemNavigation<R>(navigationState, {
    getItemTitle,
  })

  // True from the render an off-window gap appears until neighbors resolve —
  // unlike useItemNeighbors' isResolving, which only flips in an effect and
  // would leave a one-render flicker.
  const awaitingNeighbors =
    enabled &&
    hydrated &&
    neighborsSupported &&
    needsNeighbors &&
    neighbors === null

  // Hold the previous render-ready navigation while neighbors resolve for a
  // new item, so header controls don't flicker on every off-window hop. The
  // ref only ever stores non-null values: it is read exclusively while
  // awaiting, where the last known navigation is the right thing to show.
  const heldNavigationRef = useRef<NavigationProps | null>(null)
  const heldNavigation =
    navigation ?? (awaitingNeighbors ? heldNavigationRef.current : null)
  useEffect(() => {
    if (navigation !== null) heldNavigationRef.current = navigation
  }, [navigation])

  return {
    ...navigationState,
    isNavigating: navigationState.isNavigating || awaitingNeighbors,
    isReady: hydrated && !isInitialLoading,
    navigation: heldNavigation,
    appliedCollectionState: hydration?.applied ?? null,
    dataSource,
    data,
    paginationInfo,
    isLoading,
  }
}
