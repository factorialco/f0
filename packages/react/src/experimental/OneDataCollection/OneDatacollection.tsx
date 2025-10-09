import { useLayout } from "@/components/layouts/LayoutProvider"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"

import { OneEmptyState } from "@/experimental/OneEmptyState"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { DataError } from "@/hooks/datasource/useData"
import { OneFilterPicker } from "../../components/OneFilterPicker"
import type {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import { OneActionBar } from "../OneActionBar"
import {
  getPrimaryActions,
  getSecondaryActions,
  MAX_EXPANDED_ACTIONS,
} from "./actions"
import { CollectionActions } from "./components/CollectionActions/CollectionActions"
import { Search } from "./components/Search"
import { CustomEmptyStates, useEmptyState } from "./hooks/useEmptyState"
import { ItemActionsDefinition } from "./item-actions"
import { NavigationFiltersDefinition } from "./navigationFilters/types"
import { Settings } from "./Settings"
import { SummariesDefinition } from "./summary"
import type {
  BulkActionDefinition,
  GroupingState,
  OnBulkActionCallback,
  OnLoadDataCallback,
  SortingsState,
} from "./types"

import { Spinner } from "@/experimental/Information/Spinner"
import { useEventEmitter } from "./useEventEmitter"
import type { Visualization } from "./visualizations/collection"
import { VisualizationRenderer } from "./visualizations/collection"

import {
  GroupingDefinition,
  OnSelectItemsCallback,
  RecordType,
} from "@/hooks/datasource"
import { useDebounceBoolean } from "@/lib/useDebounceBoolean"
import { NavigationFilters as NavigationFiltersComponent } from "./components/NavigationFilters"
import { TotalItemsSummary } from "./components/TotalItemsSummary"
import {
  DataCollectionStatusComplete,
  DataCollectionStorageFeaturesDefinition,
} from "./hooks/useDataColectionStorage/types"
import { useDataCollectionStorage } from "./hooks/useDataColectionStorage/useDataCollectionStorage"
import { DataCollectionSource } from "./hooks/useDataCollectionSource"
import { useDataCollectionSettings } from "./Settings/SettingsProvider"

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataCollectionSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataCollectionSource to:
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
export type OneDataCollectionProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  visualizations: ReadonlyArray<
    Visualization<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  onSelectItems?: OnSelectItemsCallback<R, Filters>
  onBulkAction?: OnBulkActionCallback<R, Filters>
  emptyStates?: CustomEmptyStates
  onTotalItemsChange?: (totalItems: number) => void
  fullHeight?: boolean

  /** Function to handle state change */
  onStateChange?: (state: DataCollectionStatusComplete) => void

  /** Key for the data collection settings and state, must be unique for each data collection and contain the version e.g. "employees/v1"
   */
  id?: string

  /** Storage for the data collection settings and state */
  storage?: {
    /** Features for the data collection storage , for example you can disable the storage for the data collection filters state
     * You can use "*" for all features and ! to disable a feature
     *
     * For example:
     * - "*" - will use all storage features (empty "" means all)
     * - "filters" - will use only the storage for the data collection filters state
     * - "filters, sortings" - will use the storage for the data collection filters and sortings state
     * - "*, !filters" - will not use the storage for the data collection filters state
     * - "!filters, sortings" - will not use the storage for the data collection filters and sortings state
     *
     */
    features?: DataCollectionStorageFeaturesDefinition
  }
}

const OneDataCollectionComp = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  source,
  visualizations,
  onSelectItems,
  onBulkAction,
  onStateChange,
  emptyStates,
  fullHeight,
  storage,
  id,
}: OneDataCollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>): JSX.Element => {
  const {
    // Filters
    filters,
    currentFilters,
    setCurrentFilters,
    presets,
    presetsLoading,
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
    totalItemSummary,
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

  /**
   * Data collection actions
   */
  const primaryActionItems = useMemo(
    () => getPrimaryActions(primaryActions),
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
    primaryActionItems?.length > 0 || allSecondaryActions?.length > 0

  /**
   * Clear selected items function
   */
  const [clearSelectedItemsFunc, setClearSelectedItemsFunc] = useState<
    (() => void) | undefined
  >(undefined)

  /**
   * Layout
   */
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

  const totalItemSummaryFn = useMemo(() => {
    if (totalItemSummary === true) {
      return (totalItems: number | undefined) =>
        totalItems !== undefined
          ? `${totalItems} ${i18n.collections.itemsCount}`
          : null
    }
    return totalItemSummary || undefined
  }, [totalItemSummary, i18n])

  const onSelectItemsLocal: OnSelectItemsCallback<R, Filters> = (
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
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  const elementsRightActions = useMemo(
    () => [search?.enabled, visualizations.length > 1].some(Boolean),
    [search, visualizations]
  )

  /**
   * Empty state
   */
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
  }: Parameters<OnLoadDataCallback<R, Filters>>[0]) => {
    if (isInitialLoadingFromCallback) {
      return
    }

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

  const showPresetsLoading = useDebounceBoolean({
    value: !!presetsLoading,
    delay: 100,
  })

  useEffect(() => {
    setEmptyStateType(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional we should remove the empty state when the filters, search, navigation filters change
  }, [
    currentFilters,
    currentSearch,
    currentNavigationFilters,
    source.dataAdapter,
  ])

  const showTotalItemSummary = useMemo(() => {
    return totalItemSummaryFn !== undefined
  }, [totalItemSummaryFn])

  const totalItemSummaryResult =
    totalItemSummaryFn === undefined
      ? null
      : totalItems !== undefined
        ? totalItemSummaryFn(totalItems)
        : null

  /**
   * Settings
   */
  const { settings, setSettings } = useDataCollectionSettings()

  const { storageReady } = useDataCollectionStorage(
    id,
    storage?.features ?? ["*"],
    {
      settings: {
        value: settings,
        setValue: setSettings,
      },
      sortings: {
        value: currentSortings,
        setValue: setCurrentSortings,
      },
      grouping: {
        value: currentGrouping,
        setValue: setCurrentGrouping,
      },
      navigationFilters: {
        value: currentNavigationFilters,
        setValue: setCurrentNavigationFilters,
      },
      visualization: {
        value: currentVisualization,
        setValue: setCurrentVisualization,
      },
      search: {
        value: currentSearch,
        setValue: setCurrentSearch,
      },
      filters: {
        value: currentFilters,
        setValue: setCurrentFilters,
      },
    }
  )

  const showTotalItemSummarySkeleton = useDebounceBoolean({
    value: isInitialLoading && storageReady,
    delay: 100,
  })

  /** State */
  useEffect(() => {
    onStateChange?.({
      filters: currentFilters,
      sortings: currentSortings as SortingsState<SortingsDefinition>,
      visualization: currentVisualization,
      grouping: currentGrouping as GroupingState<R, GroupingDefinition<R>>,
      search: currentSearch,
      navigationFilters: currentNavigationFilters,
      settings: settings,
    })
  }, [
    onStateChange,
    currentFilters,
    currentSearch,
    currentNavigationFilters,
    currentSortings,
    currentVisualization,
    currentGrouping,
    settings,
  ])
  /************************/

  /** Toolbars */
  const bottomRightHasItems = useMemo(() => {
    return elementsRightActions && hasCollectionsActions
  }, [elementsRightActions, hasCollectionsActions])

  const totalItemSummaryPosition = useMemo(() => {
    if (!showTotalItemSummary) {
      return false
    }

    return filters ? "top" : "bottom"
  }, [filters, showTotalItemSummary])

  const navigationFiltersPosition = useMemo(() => {
    if (!navigationFilters) {
      return false
    }

    return bottomRightHasItems ? "top" : "bottom"
  }, [navigationFilters, bottomRightHasItems])

  const showTopToolbar = useMemo(() => {
    return totalItemSummary !== undefined || navigationFilters
  }, [totalItemSummary, navigationFilters])

  const showBottomToolbar = useMemo(() => {
    return (
      totalItemSummary !== undefined ||
      navigationFilters ||
      navigationFiltersPosition === "bottom"
    )
  }, [totalItemSummary, navigationFilters, navigationFiltersPosition])

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        layout === "standard" && "-mx-6",
        fullHeight && "h-full flex-1"
      )}
      style={{
        width: layout === "standard" ? "calc(100% + 48px)" : "100%", // To counteract the -mx-6 from the layout
      }}
    >
      {showTopToolbar && (
        <div className="border-f1-border-primary flex gap-4 px-4">
          {totalItemSummaryPosition === "top" && (
            <TotalItemsSummary
              isReady={!showTotalItemSummarySkeleton}
              totalItemSummaryResult={totalItemSummaryResult}
            />
          )}
          <div className="flex flex-1 flex-shrink justify-end">
            {navigationFiltersPosition === "top" && (
              <NavigationFiltersComponent
                navigationFilters={navigationFilters}
                currentNavigationFilters={currentNavigationFilters}
                onChangeNavigationFilters={setCurrentNavigationFilters}
              />
            )}
          </div>
        </div>
      )}
      {showBottomToolbar && (
        <div
          className={cn("flex flex-row gap-4 px-4", fullHeight && "max-h-full")}
        >
          {totalItemSummaryPosition === "bottom" && (
            <TotalItemsSummary
              isReady={!showTotalItemSummarySkeleton}
              totalItemSummaryResult={totalItemSummaryResult}
            />
          )}
          <div className="flex-1">
            <OneFilterPicker
              filters={filters}
              value={currentFilters}
              presets={presets}
              presetsLoading={showPresetsLoading}
              onChange={(value) => setCurrentFilters(value)}
            >
              {isLoading && (
                <motion.div
                  className="flex h-8 w-8 items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <Spinner size="small" />
                </motion.div>
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
                    primaryActions={primaryActionItems}
                    secondaryActions={secondaryActionsItems}
                    otherActions={otherActionsItems}
                  />
                </>
              )}
              {navigationFiltersPosition === "bottom" && (
                <NavigationFiltersComponent
                  navigationFilters={navigationFilters}
                  currentNavigationFilters={currentNavigationFilters}
                  onChangeNavigationFilters={setCurrentNavigationFilters}
                />
              )}
            </OneFilterPicker>
          </div>
        </div>
      )}
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

export { OneDataCollectionComp }
