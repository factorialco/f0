import { useLayout } from "@/components/layouts/LayoutProvider"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { F0Icon } from "../../components/F0Icon"
import { Spinner } from "../../icons/app"

import { OneEmptyState } from "@/experimental/OneEmptyState"
import { experimentalComponent } from "@/lib/experimental"
import { Skeleton } from "@/ui/skeleton"
import { OneFilterPicker } from "../../components/OneFilterPicker"
import type {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import { OneActionBar } from "../OneActionBar"
import { getSecondaryActions, MAX_EXPANDED_ACTIONS } from "./actions"
import { CollectionActions } from "./CollectionActions/CollectionActions"
import { ItemActionsDefinition } from "./item-actions"
import { navigationFilterTypes } from "./navigationFilters"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "./navigationFilters/types"
import { Search } from "./search"
import { Settings } from "./Settings"
import { SortingsDefinition, SortingsState } from "./sortings"
import { SummariesDefinition } from "./summary"
import type {
  BulkActionDefinition,
  CollectionSearchOptions,
  DataSource,
  DataSourceDefinition,
  GroupingDefinition,
  GroupingState,
  OnBulkActionCallback,
  OnLoadDataCallback,
  OnSelectItemsCallback,
  RecordType,
} from "./types"
import { DataError } from "./useData"
import { CustomEmptyStates, useEmptyState } from "./useEmptyState"

import { useEventEmitter } from "./useEventEmitter"
import type { Visualization } from "./visualizations/collection"
import { VisualizationRenderer } from "./visualizations/collection"

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
 * @template Record - The type of records in the collection
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
export const useDataSource = <
  Record extends RecordType,
  FiltersSchema extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>(
  {
    currentFilters: initialCurrentFilters = {},
    currentGrouping: initialCurrentGrouping,
    filters,
    navigationFilters,
    search,
    defaultSorting,
    summaries,
    dataAdapter,
    grouping,
    ...rest
  }: DataSourceDefinition<
    Record,
    FiltersSchema,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  deps: ReadonlyArray<unknown> = []
): DataSource<
  Record,
  FiltersSchema,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> => {
  const i18n = useI18n()

  const [currentFilters, setCurrentFilters] = useState<
    FiltersState<FiltersSchema>
  >(initialCurrentFilters)

  const [currentNavigationFilters, setCurrentNavigationFilters] = useState<
    NavigationFiltersState<NavigationFilters>
  >(() => {
    if (!navigationFilters) {
      return {} as NavigationFiltersState<NavigationFilters>
    }

    return Object.fromEntries(
      Object.entries(navigationFilters).map(([key, filter]) => {
        const filterType = navigationFilterTypes[filter.type]
        return [
          key,
          filterType.valueConverter
            ? filterType.valueConverter(filter.defaultValue, filter, i18n)
            : filter.defaultValue,
        ]
      })
    ) as NavigationFiltersState<NavigationFilters>
  })

  const [currentSortings, setCurrentSortings] =
    useState<SortingsState<Sortings> | null>(defaultSorting || null)

  const searchOptions = {
    enabled: false,
    sync: false,
    ...search,
  } satisfies CollectionSearchOptions

  const [currentSearch, setCurrentSearch] = useState<string | undefined>()

  const [debouncedCurrentSearch, setDebouncedCurrentSearch] = useDebounceValue<
    string | undefined
  >(currentSearch, 200)

  useEffect(() => {
    if (searchOptions.sync) return
    setDebouncedCurrentSearch(currentSearch)
  }, [currentSearch, searchOptions.sync, setDebouncedCurrentSearch])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedFilters = useMemo(() => filters, deps)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedSummaries = useMemo(() => summaries, deps)

  const [isLoading, setIsLoading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedDataAdapter = useMemo(() => dataAdapter, deps)

  const defaultGrouping = grouping?.mandatory
    ? {
        field: Object.keys(
          grouping.groupBy
        )[0] as keyof typeof grouping.groupBy,
        order: "asc" as const,
      }
    : undefined

  const [currentGrouping, setCurrentGrouping] = useState<
    GroupingState<Record, Grouping>
  >(initialCurrentGrouping ?? defaultGrouping)

  // For mandatory grouping, ensure we have a valid grouping state
  if (grouping?.mandatory && !currentGrouping?.field) {
    throw new Error("Grouping is mandatory but no grouping state is set")
  }

  return {
    filters: memoizedFilters,
    currentFilters,
    setCurrentFilters,
    currentSortings,
    setCurrentSortings,
    summaries: memoizedSummaries,
    search,
    currentSearch,
    setCurrentSearch,
    debouncedCurrentSearch,
    isLoading,
    setIsLoading,
    dataAdapter: memoizedDataAdapter,
    navigationFilters,
    currentNavigationFilters,
    setCurrentNavigationFilters,
    setCurrentGrouping,
    currentGrouping,
    grouping,
    idProvider: (item, index): string | number =>
      "id" in item ? `${item.id}` : index || JSON.stringify(item),
    ...rest,
  }
}

const MotionIcon = motion.create(F0Icon)

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataSource to:
 * 1. Support the composition pattern - data sources can be created and managed independently
 * 2. Allow a single data source to be visualized in multiple ways simultaneously
 * 3. Enable reuse of the same data source in different parts of the application
 * 4. Provide a clean separation of concerns between data management and UI rendering
 *
 * @template Record - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 *
 * @param source - The data source containing filters, data, and state management
 * @param visualizations - Array of available visualization options (e.g., table, card view)
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
const OneDataCollectionComp = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  visualizations,
  onSelectItems,
  onBulkAction,
  emptyStates,
  fullHeight,
}: {
  source: DataSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  visualizations: ReadonlyArray<
    Visualization<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
  onBulkAction?: OnBulkActionCallback<Record, Filters>
  emptyStates?: CustomEmptyStates
  onTotalItemsChange?: (totalItems: number) => void
  fullHeight?: boolean
}): JSX.Element => {
  const {
    // Filters
    filters,
    currentFilters,
    setCurrentFilters,
    presets,
    // Navigation filter
    currentNavigationFilters,
    navigationFilters,
    setCurrentNavigationFilters,
    // Search
    search,
    currentSearch,
    setCurrentSearch,
    //
    isLoading,
    // Actions
    primaryActions,
    secondaryActions,
    // Summary
    totalItemSummary = (totalItems: number | undefined) =>
      totalItems === undefined
        ? `${totalItems} ${i18n.collections.itemsCount}`
        : null,
    currentGrouping,
    setCurrentGrouping,
    grouping,
    currentSortings,
    setCurrentSortings,
    sortings,
  } = source
  const [currentVisualization, setCurrentVisualization] = useState(0)

  const defaultSortings = useRef(currentSortings)

  const { emitSortingChange } = useEventEmitter<Sortings>({
    defaultSorting: defaultSortings.current,
  })

  useEffect(() => {
    emitSortingChange(currentSortings)
  }, [emitSortingChange, currentSortings])

  const primaryActionItem = useMemo(
    () => primaryActions && primaryActions(),
    [primaryActions]
  )

  const allSecondaryActions = useMemo(
    () => getSecondaryActions(secondaryActions),
    [secondaryActions]
  )

  const expandedSecondaryActions = useMemo(
    () =>
      Math.min(
        (secondaryActions &&
          "expanded" in secondaryActions &&
          secondaryActions.expanded) ||
          0,
        MAX_EXPANDED_ACTIONS
      ),
    [secondaryActions]
  )

  const secondaryActionsItems = useMemo(
    () => allSecondaryActions.slice(0, expandedSecondaryActions) || [],
    [allSecondaryActions, expandedSecondaryActions]
  )

  const otherActionsItems = useMemo(
    () => allSecondaryActions.slice(expandedSecondaryActions),
    [allSecondaryActions, expandedSecondaryActions]
  )

  const hasCollectionsActions =
    !!primaryActionItem || allSecondaryActions?.length > 0

  const [clearSelectedItemsFunc, setClearSelectedItemsFunc] = useState<
    (() => void) | undefined
  >(undefined)

  const layout = useLayout()

  /**
   * Bulk actions
   */
  const [bulkActions, setBulkActions] = useState<
    | {
        primary?: BulkActionDefinition[]
        secondary?: BulkActionDefinition[]
      }
    | { warningMessage: string }
    | undefined
  >(undefined)

  const [showActionBar, setShowActionBar] = useState(false)

  const [selectedItemsCount, setSelectedItemsCount] = useState(0)

  const i18n = useI18n()

  const onSelectItemsLocal: OnSelectItemsCallback<Record, Filters> = (
    selectedItems,
    clearSelectedItems
  ): void => {
    onSelectItems?.(selectedItems, clearSelectedItems)

    /**
     * Show action bar
     */
    setShowActionBar(
      !!selectedItems.allSelected ||
        selectedItems.itemsStatus.some((item) => item.checked)
    )

    /**
     * Selected items count
     */
    setSelectedItemsCount(selectedItems.selectedCount)

    /**
     * Clear selected items function
     */
    setClearSelectedItemsFunc(() => clearSelectedItems)

    /**
     * Bulk actions for the action bar
     */
    const bulkActions = source.bulkActions
      ? source.bulkActions(selectedItems)
      : undefined

    const mapBulkActions = (action: BulkActionDefinition) => ({
      ...action,
      onClick: () => {
        onBulkAction?.(action.id, selectedItems, clearSelectedItems)
        if (!action.keepSelection) {
          clearSelectedItems()
        }
      },
    })

    if (bulkActions) {
      if ("primary" in bulkActions) {
        setBulkActions({
          primary: (bulkActions?.primary || []).map(mapBulkActions),
          secondary: (bulkActions?.secondary || []).map(mapBulkActions),
        })
      } else if ("warningMessage" in bulkActions) {
        setBulkActions({ warningMessage: bulkActions.warningMessage })
      }
    }
  }

  const [totalItems, setTotalItems] = useState<undefined | number>(undefined)
  const [isInitialLoading, setIsInitialLoading] = useState(false)

  const elementsRightActions = useMemo(
    () => [search?.enabled, visualizations.length > 1].some(Boolean),
    [search, visualizations]
  )

  const { emptyState, setEmptyStateType } = useEmptyState(emptyStates, {
    retry: () => {
      setEmptyStateType(false)
      setCurrentFilters({ ...currentFilters })
    },
    clearFilters: () => {
      setEmptyStateType(false)
      setCurrentFilters({})
      setCurrentSearch(undefined)
    },
  })

  const getEmptyStateType = (
    totalItems: number | undefined,
    filters: FiltersState<Filters>,
    search: string | undefined
  ) => {
    return totalItems === 0
      ? Object.keys(filters).length > 0 || search
        ? "no-results"
        : "no-data"
      : false
  }

  const onLoadData = ({
    totalItems,
    filters,
    isInitialLoading: isInitialLoadingFromCallback,
    search,
  }: Parameters<OnLoadDataCallback<Record, Filters>>[0]) => {
    setIsInitialLoading(isInitialLoadingFromCallback)
    setTotalItems(totalItems)
    setEmptyStateType(getEmptyStateType(totalItems, filters, search))
  }

  const onLoadError = (error: DataError) => {
    setEmptyStateType(
      "error",
      error.cause instanceof Error ? error.cause.message : error.message
    )
  }

  useEffect(() => {
    setEmptyStateType(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional we should remove the empty state when the filters, search, navigation filters change
  }, [
    currentFilters,
    currentSearch,
    currentNavigationFilters,
    source.dataAdapter,
  ])

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4",
        layout === "standard" && "-mx-6",
        fullHeight && "h-full"
      )}
    >
      {((totalItems !== undefined && totalItemSummary(totalItems)) ||
        navigationFilters) && (
        <div className="border-f1-border-primary flex gap-4 px-4">
          <div className="flex flex-1 flex-shrink gap-4 text-lg font-semibold">
            {isInitialLoading &&
              totalItems !== undefined &&
              totalItemSummary(totalItems) && <Skeleton className="h-5 w-24" />}
            {!isInitialLoading && totalItems !== undefined && (
              <div className="flex h-5 items-center">
                {totalItemSummary(totalItems)}
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-shrink justify-end">
            {navigationFilters &&
              Object.entries(navigationFilters).map(([key, filter]) => {
                const filterDef = navigationFilterTypes[filter.type]
                return filterDef.render({
                  filter: filter,
                  value: currentNavigationFilters[key]!,
                  onChange: (value) => {
                    setCurrentNavigationFilters({
                      ...currentNavigationFilters,
                      [key]: value,
                    })
                  },
                })
              })}
          </div>
        </div>
      )}
      <div
        className={cn("flex flex-col gap-4 px-4", fullHeight && "max-h-full")}
      >
        <OneFilterPicker
          filters={filters}
          value={currentFilters}
          presets={presets}
          onChange={(value) => setCurrentFilters(value)}
        >
          {isLoading && (
            <MotionIcon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              size="lg"
              icon={Spinner}
              className="animate-spin"
            />
          )}
          {search && (
            <Search onChange={setCurrentSearch} value={currentSearch} />
          )}
          <Settings
            visualizations={visualizations}
            currentVisualization={currentVisualization}
            onVisualizationChange={setCurrentVisualization}
            grouping={grouping}
            currentGrouping={currentGrouping}
            onGroupingChange={setCurrentGrouping}
            sortings={sortings}
            currentSortings={currentSortings}
            onSortingsChange={setCurrentSortings}
          />
          {hasCollectionsActions && (
            <>
              {elementsRightActions && (
                <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
              )}
              <CollectionActions
                primaryActions={primaryActionItem}
                secondaryActions={secondaryActionsItems}
                otherActions={otherActionsItems}
              />
            </>
          )}
        </OneFilterPicker>
      </div>

      {/* Visualization renderer must be always mounted to react (load data) even if empty state is shown */}
      <div
        className={cn(
          emptyState && "hidden",
          fullHeight && "h-full min-h-0 flex-1"
        )}
      >
        <VisualizationRenderer
          visualization={visualizations[currentVisualization]}
          source={source}
          onSelectItems={onSelectItemsLocal}
          onLoadData={onLoadData}
          onLoadError={onLoadError}
        />
      </div>

      {emptyState ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <OneEmptyState
            emoji={emptyState.emoji}
            title={emptyState.title}
            description={emptyState.description}
            actions={emptyState.actions}
          />
        </div>
      ) : (
        <>
          {bulkActions && (
            <OneActionBar
              isOpen={showActionBar}
              selectedNumber={selectedItemsCount}
              primaryActions={
                "primary" in bulkActions ? bulkActions?.primary : []
              }
              secondaryActions={
                "secondary" in bulkActions ? bulkActions?.secondary : []
              }
              warningMessage={
                "warningMessage" in bulkActions
                  ? bulkActions.warningMessage
                  : undefined
              }
              onUnselect={() => clearSelectedItemsFunc?.()}
            />
          )}
        </>
      )}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
const OneDataCollection = experimentalComponent(
  "OneDataCollection",
  OneDataCollectionComp
)

export { OneDataCollection }
