import { useDeepCompareEffect } from "@reactuses/core"
import isEqual from "lodash/isEqual"
import { motion } from "motion/react"
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"

import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/patterns/OneFilterPicker/types"

import { F0ActionBar } from "@/components/F0ActionBar"
import { OneEmptyState } from "@/components/OneEmptyState"
import {
  GroupingDefinition,
  OnSelectItemsCallback,
  RecordType,
} from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { DataError } from "@/hooks/datasource/useData"
import { useLayout } from "@/layouts/LayoutProvider"
import { useI18n } from "@/lib/providers/i18n"
import { useDebounceBoolean } from "@/lib/useDebounceBoolean"
import { cn } from "@/lib/utils"
import { OneFilterPicker } from "@/patterns/OneFilterPicker"
import { getActiveFilterKeys } from "@/patterns/OneFilterPicker/internal/getActiveFilterKeys"
import { Spinner } from "@/ui/Spinner"

import type {
  BulkActionDefinition,
  GroupingState,
  OnBulkActionCallback,
  OnLoadDataCallback,
  SortingsState,
} from "./types"
import type { Visualization } from "./visualizations/collection"

import {
  filterActions,
  getPrimaryActions,
  getSecondaryActions,
  MAX_EXPANDED_ACTIONS,
} from "./actions"
import {
  ActionBar,
  type ActionBarItem,
  type ActionBarStatus,
  type F0ActionBarRef,
} from "./components/ActionBar"
import { CollectionActions } from "./components/CollectionActions/CollectionActions"
import { NavigationFilters as NavigationFiltersComponent } from "./components/NavigationFilters"
import {
  PresetFormDialog,
  type PresetFormValues,
} from "./components/PresetFormDialog"
import { Search } from "./components/Search"
import { useSearchPreview } from "./components/Search/useSearchPreview"
import { TotalItemsSummary } from "./components/TotalItemsSummary"
import {
  DataCollectionStatusComplete,
  DataCollectionStorageFeaturesDefinition,
} from "./hooks/useDataColectionStorage/types"
import { useDataCollectionStorage } from "./hooks/useDataColectionStorage/useDataCollectionStorage"
import { DataCollectionSource } from "./hooks/useDataCollectionSource"
import { CustomEmptyStates, useEmptyState } from "./hooks/useEmptyState"
import { useExportAction } from "./hooks/useExportAction"
import { useDataCollectionUrlSync } from "./hooks/useDataCollectionUrlSync"
import { usePerVisualizationFilters } from "./hooks/usePerVisualizationFilters"
import { getDefaultDataCollectionSettings } from "./internal/isSettingsDefault"
import { derivePresetId } from "./internal/presetId"
import {
  buildSharedPresetUrl,
  decodeSharedPreset,
  SHARED_PRESET_PARAM,
  type SharedPresetPayload,
} from "./internal/sharedPreset"
import { ItemActionsDefinition } from "./item-actions"
import { NavigationFiltersDefinition } from "./navigationFilters/types"
import { Settings } from "./Settings"
import {
  DataCollectionSettings,
  useDataCollectionSettings,
} from "./Settings/SettingsProvider"
import { SummariesDefinition } from "./summary"
import { useEventEmitter } from "./useEventEmitter"
import { VisualizationRenderer } from "./visualizations/collection"

const SUCCESS_DISMISS_MS = 1500
const SHARE_COPIED_DISMISS_MS = 2000

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
  /**
   * Opt-in to auto-managed bulk-action status. When `true`, a `Promise`
   * returned from `onBulkAction` drives the ActionBar through
   * `loading → success → idle` (or `loading → error`) automatically.
   *
   * Opt-in is required because some consumers open modals from their bulk
   * action handler whose promise resolves when the modal OPENS rather than
   * when the user confirms — auto-managing those would flash a premature
   * success. When `false` (default), async handlers keep today's
   * fire-and-forget behavior. For those cases, use `bulkActionStatus` to
   * drive status yourself from the modal's lifecycle.
   * @default false
   */
  autoManageBulkActionStatus?: boolean
  /**
   * Controlled status for the bulk-action ActionBar. Designed for multi-step
   * flows (confirmation modals, server polling) where the component can't
   * derive status from a single promise.
   *
   * - **`"idle"`** — transparent: F0's auto-manage handles immediate
   *   (promise-returning) actions normally. Pass `"idle"` even when not
   *   actively controlling; no need for a `status !== "idle" ? status : undefined`
   *   conditional.
   * - **`"loading"`** — consumer is performing an async operation (e.g. after
   *   modal confirm). F0 disables actions and shows button-level spinners.
   * - **`"success"`** — mutation resolved. F0 shows the checkmark, then after
   *   1.5 s auto-clears selection and falls back to auto-manage. The consumer
   *   does not need to set `"idle"` or clear selection manually.
   * - **`"error"`** — mutation rejected. F0 shows the error state and wiggle
   *   animation. Persists until the consumer sets a different status.
   *   Note: selection change only auto-clears the internal (auto-managed)
   *   error state — when using controlled mode the consumer must explicitly
   *   set a new status to dismiss the error.
   *
   * When this prop is provided (even as `"idle"`), void-returning handlers
   * will not auto-clear selection — F0 assumes the consumer has modal-gated
   * actions and owns the selection lifecycle. Pair with
   * `autoManageBulkActionStatus={true}` for mixed immediate + modal flows.
   */
  bulkActionStatus?: ActionBarStatus
  emptyStates?: CustomEmptyStates
  onTotalItemsChange?: (totalItems: number) => void
  fullHeight?: boolean

  /** Function to handle state change */
  onStateChange?: (
    state: DataCollectionStatusComplete<FiltersState<Filters>>
  ) => void

  /** Key for the data collection settings and state, must be unique for each data collection and contain the version e.g. "employees/v1"
   */
  id?: string

  /** Storage for the data collection settings and state: use false to disable the storage */
  storage?:
    | false
    | {
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

  /**
   * By default the data collection reads its filters/search/sortings/
   * visualization/page from the URL query params on mount and reflects any later
   * changes back into them (see `dataCollectionUrlParams`). This applies to any
   * collection — no `id` is required, and params are not scoped to one, so a
   * single URL-synced collection per page is assumed. Set this to `true` to opt
   * out of URL syncing.
   */
  disableUrlParams?: boolean
  /**
   * @deprecated removes the horizontal padding from the data collection
   */
  tmpFullWidth?: boolean

  /** Enable CSV export action in the collection actions menu.
   * - `true` enables export with default settings
   * - An object allows customizing the export filename
   * - `false` or `undefined` disables the export action (default)
   */
  csvExport?: boolean | { filename?: string }

  /** Visualization index rendered on mount, before async storage/URL restore — lets a consumer boot straight into the persisted view and skip the default→restore bounce. Defaults to 0. */
  initialVisualization?: number
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
  autoManageBulkActionStatus = false,
  bulkActionStatus: controlledBulkActionStatus,
  onStateChange,
  emptyStates,
  fullHeight,
  storage,
  id,
  disableUrlParams,
  tmpFullWidth,
  csvExport,
  initialVisualization = 0,
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
    primaryActionsLabel,
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

  const [currentVisualization, setCurrentVisualization] =
    useState(initialVisualization)

  /**
   * Preset state. Presets are a saveable snapshot of the whole view (filters,
   * sorting, view mode, grouping, columns). `selectedPresetId` tracks the active
   * preset by identity so it stays selected as the user changes state on top of
   * it. `customPresets` are user-created and persisted to storage.
   */
  const [selectedPresetId, setSelectedPresetId] = useState<string | undefined>(
    undefined
  )
  const [customPresets, setCustomPresets] = useState<
    PresetsDefinition<Filters>
  >([])
  // The preset form dialog: "create" (Save as preset) or "update" (edit a
  // custom preset's title/description via its hover edit icon). "Persist in
  // preset" updates the selected preset's captured options in place, no dialog.
  const [presetDialog, setPresetDialog] = useState<
    | { mode: "create"; shared?: SharedPresetPayload }
    | { mode: "update"; presetId: string }
    | null
  >(null)

  // A view shared via a `dc_shared_view` link, captured once at mount (so a
  // later URL sync can't wipe it before we read it). When present, we open the
  // create dialog prefilled with it; saving stores the shared config verbatim.
  const [sharedPreset] = useState<SharedPresetPayload | null>(() => {
    if (typeof window === "undefined") return null
    const params = new URLSearchParams(window.location.search)
    return decodeSharedPreset(params.get(SHARED_PRESET_PARAM))
  })

  const searchPreview = useSearchPreview(
    source.searchPreview,
    source.debouncedCurrentSearch
  )

  const {
    effectiveFilters,
    effectivePresets,
    currentFilters: activeCurrentFilters,
    setCurrentFilters: activeSetCurrentFilters,
    allVisualizationFilters,
    setAllVisualizationFilters,
    hasPerVisualizationFilters,
  } = usePerVisualizationFilters({
    sourceFilters: filters,
    sourcePresets: presets,
    sourceCurrentFilters: currentFilters,
    sourceSetCurrentFilters: setCurrentFilters,
    visualizations,
    currentVisualization,
    storageKey: id,
  })

  // Patched source with per-viz currentFilters to avoid stale filters during transitions
  const effectiveSource = useMemo(() => {
    if (!hasPerVisualizationFilters) return source
    return {
      ...source,
      currentFilters: activeCurrentFilters,
      setCurrentFilters: activeSetCurrentFilters,
    }
  }, [
    source,
    hasPerVisualizationFilters,
    activeCurrentFilters,
    activeSetCurrentFilters,
  ])

  const defaultSortings = useRef(currentSortings)
  // Developer-provided baselines captured on first render (before storage
  // hydration), used to reset uncaptured dimensions when applying a preset and
  // as the baseline for "unsaved changes" detection.
  const defaultGrouping = useRef(currentGrouping)
  const defaultFilters = useRef(activeCurrentFilters)

  const { emitSortingChange } = useEventEmitter<Sortings>({
    defaultSorting: defaultSortings.current,
    currentVisualization: hasPerVisualizationFilters
      ? currentVisualization
      : undefined,
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
    () => filterActions(getSecondaryActions(secondaryActions)),
    [secondaryActions]
  )

  // Export action - only available when csvExport is enabled
  const csvExportFilename =
    csvExport && typeof csvExport === "object"
      ? csvExport.filename
      : id
        ? `${id}_export`
        : undefined

  const exportAction = useExportAction({
    source: effectiveSource,
    currentVisualization: visualizations[currentVisualization],
    filename: csvExportFilename,
    enabled: !!csvExport,
  })

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

  // Extracts the expandedSecondaryActions from the first group
  const secondaryActionsItems = useMemo(
    () =>
      allSecondaryActions[0]?.items.slice(0, expandedSecondaryActions) || [],
    [allSecondaryActions, expandedSecondaryActions]
  )

  // Remaining actions are in the secondaryActionsItems group (expanded) and filters the empty groups
  const otherActionsItems = useMemo(() => {
    const firstGroup = allSecondaryActions[0] ?? { items: [] }
    const groups = [
      {
        ...firstGroup,
        items: firstGroup.items?.slice(expandedSecondaryActions) || [],
      },
      ...allSecondaryActions.slice(1),
    ]

    if (csvExport) {
      groups.push({ items: [exportAction] })
    }

    return groups.filter((group) => group.items.length > 0)
    // exportAction is an object rebuilt every render but its contents only
    // change when the primitives below change. We track those instead of
    // the object reference to avoid invalidating this memo every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    allSecondaryActions,
    expandedSecondaryActions,
    csvExport,
    exportAction.loading,
    exportAction.disabled,
    exportAction.onClick,
  ])

  const hasCollectionsActions =
    primaryActionItems?.length > 0 ||
    allSecondaryActions?.length > 0 ||
    !!csvExport

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
  type MappedBulkAction =
    | (BulkActionDefinition & { onClick: () => void })
    | { type: "separator" }

  const [bulkActions, setBulkActions] = useState<
    | {
        primary?: MappedBulkAction[]
        secondary?: MappedBulkAction[]
      }
    | { warningMessage: string }
    | undefined
  >(undefined)

  const groupItems = useCallback((items: MappedBulkAction[] | undefined) => {
    if (!items) {
      return []
    }
    const groups = []
    let currentGroupItems: ActionBarItem[] = []
    for (const item of items) {
      if ("type" in item && item.type === "separator") {
        groups.push({ items: currentGroupItems })
        currentGroupItems = []
      } else {
        currentGroupItems.push(item as ActionBarItem)
      }
    }
    if (currentGroupItems.length > 0) {
      groups.push({ items: currentGroupItems })
    }
    return groups
  }, [])
  /**
   * Creates the bulk actions groups to avoid change the datacollection interface
   */
  const bulkActionsGroups = useMemo(() => {
    if (!bulkActions) {
      return undefined
    }
    if ("warningMessage" in bulkActions) {
      return {
        warningMessage: bulkActions.warningMessage,
      }
    }
    return {
      primary: groupItems(bulkActions.primary ?? []),
      secondary: (bulkActions?.secondary ?? []).filter(
        (action) => !("type" in action && action.type === "separator")
      ) as ActionBarItem[],
    }
  }, [bulkActions, groupItems])

  const [showActionBar, setShowActionBar] = useState(false)

  const [selectedItemsCount, setSelectedItemsCount] = useState(0)

  const [isAllItemsSelected, setIsAllItemsSelected] = useState(false)

  // ── Bulk-action status resolution ────────────────────────────────────────
  // Two status sources: internal (auto-managed via promise) and controlled
  // (consumer-driven via bulkActionStatus prop).
  // Controlled wins unless it is "idle" or a "success" F0 already dismissed.
  // Consumers never need to reset back to "idle" after success — F0 handles
  // the auto-dismiss timer and marks the controlled success as done internally.
  // isControlledModeActiveRef: ref copy for stale-closure safety in onClick
  // handlers captured inside onSelectItemsLocal.

  const [internalBulkActionStatus, setInternalBulkActionStatus] =
    useState<ActionBarStatus>("idle")
  // State (not ref) so setting it always triggers a re-render, even when
  // internalBulkActionStatus is already "idle" (no-op bailout otherwise).
  const [controlledSuccessDismissed, setControlledSuccessDismissed] =
    useState(false)

  const actionBarRef = useRef<F0ActionBarRef>(null)
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // isControlledModeActive: true when controlled status is non-idle and not
  // an already-dismissed success. Drives the auto-manage bail-out in onClick.
  // Repeated for resolvedBulkActionStatus and isControlledModeActive — helper
  // keeps the condition in one place.
  const isControlledStatusActive = (dismissed: boolean) =>
    controlledBulkActionStatus !== undefined &&
    controlledBulkActionStatus !== "idle" &&
    !(controlledBulkActionStatus === "success" && dismissed)

  const resolvedBulkActionStatus = isControlledStatusActive(
    controlledSuccessDismissed
  )
    ? controlledBulkActionStatus
    : internalBulkActionStatus

  const isControlledModeActive = isControlledStatusActive(
    controlledSuccessDismissed
  )
  const isControlledModeActiveRef = useRef(false)
  isControlledModeActiveRef.current = isControlledModeActive

  // Prop presence alone signals modal-gated actions — void handlers must not
  // auto-clear selection regardless of the current value.
  const hasControlledBulkActionStatus = controlledBulkActionStatus !== undefined

  // Shared dismiss helper: collapse bar + clear selection atomically so React
  // batches the state updates into one render, preventing a flash of idle
  // content (stale action buttons) between clearSelectedItems() and the status
  // reset.
  const scheduleDismiss = useCallback(
    (onDismiss: () => void, hideBar = true) => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current)
      }
      successTimerRef.current = setTimeout(() => {
        if (hideBar) setShowActionBar(false)
        onDismiss()
        successTimerRef.current = null
      }, SUCCESS_DISMISS_MS)
    },
    // setShowActionBar is a stable setState ref — safe to omit from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  // Initialize to undefined (not the current prop value) so that a component
  // mounted with bulkActionStatus="success" is treated as a fresh transition
  // and schedules the dismiss timer on first render.
  const prevControlledStatusRef = useRef<ActionBarStatus | undefined>(undefined)
  useEffect(() => {
    const prev = prevControlledStatusRef.current
    prevControlledStatusRef.current = controlledBulkActionStatus

    if (controlledBulkActionStatus === "success" && prev !== "success") {
      setControlledSuccessDismissed(false)
      scheduleDismiss(() => {
        clearSelectedItemsFunc?.()
        setControlledSuccessDismissed(true)
      })
    } else if (prev === "success" && controlledBulkActionStatus !== "success") {
      // Consumer transitioned away from "success" before the timer fired.
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current)
        successTimerRef.current = null
      }
      setControlledSuccessDismissed(false)
    }
  }, [controlledBulkActionStatus, clearSelectedItemsFunc, scheduleDismiss])
  // ─────────────────────────────────────────────────────────────────────────

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
    clearSelectedItems,
    handleSelectAll
  ): void => {
    onSelectItems?.(selectedItems, clearSelectedItems, handleSelectAll)

    /**
     * Show action bar
     */
    setShowActionBar(
      !!selectedItems.allSelected ||
        selectedItems.itemsStatus.some((item) => item.checked)
    )

    /**
     * Any selection change after an error clears the error so the bar doesn't
     * persist a stale failure state across user actions. Loading/success
     * transitions are owned by the bulk-action click handler and must not be
     * interrupted here.
     */
    setInternalBulkActionStatus((prev) => (prev === "error" ? "idle" : prev))

    /**
     * Selected items count
     */
    setSelectedItemsCount(selectedItems.selectedCount)

    /**
     * Clear selected items function
     */
    setClearSelectedItemsFunc(() => clearSelectedItems)

    setIsAllItemsSelected(selectedItems.allSelected === true)

    /**
     * Bulk actions for the action bar
     */
    const bulkActions = source.bulkActions
      ? source.bulkActions(selectedItems)
      : undefined

    const mapBulkActions = (
      action: BulkActionDefinition | { type: "separator" }
    ): MappedBulkAction => {
      if ("type" in action && action.type === "separator") {
        return { type: "separator" as const }
      }
      const bulkAction = action as BulkActionDefinition
      return {
        ...bulkAction,
        onClick: () => {
          const result = onBulkAction?.(
            bulkAction.id,
            selectedItems,
            clearSelectedItems
          )
          const isPromise =
            autoManageBulkActionStatus &&
            result !== undefined &&
            typeof (result as Promise<void>)?.then === "function"

          if (!isPromise) {
            // Sync path (or opt-out). Preserve today's fire-and-forget
            // behavior: ignore any returned promise, clear selection now.
            // Skip if the bulkActionStatus prop is wired up at all — the
            // consumer has modal-gated actions and owns the selection
            // lifecycle (void return = modal opened, not action completed).
            if (!bulkAction.keepSelection && !hasControlledBulkActionStatus) {
              clearSelectedItems()
            }
            return
          }

          // Read from ref — not the closure-captured const — so this always
          // reflects the prop value at click time, not at closure-creation time.
          if (isControlledModeActiveRef.current) {
            return
          }

          setInternalBulkActionStatus("loading")
          ;(result as Promise<void>).then(
            () => {
              setInternalBulkActionStatus("success")
              // Always wipe on success — prevents already-processed items from
              // mixing with new selections made during loading.
              scheduleDismiss(() => {
                if (!bulkAction.keepSelection) {
                  clearSelectedItems()
                }
                setInternalBulkActionStatus("idle")
              }, !bulkAction.keepSelection)
            },
            () => {
              setInternalBulkActionStatus("error")
              actionBarRef.current?.wiggle({ errorHighlight: true })
            }
          )
        },
      }
    }

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
      activeSetCurrentFilters({ ...activeCurrentFilters })
    },
    clearFilters: () => {
      setEmptyStateType(false)
      activeSetCurrentFilters({})
      setCurrentSearch(undefined)
    },
  })

  const getEmptyStateType = (
    totalItems: number | undefined,
    filters: FiltersState<Filters>,
    search: string | undefined
  ) => {
    if (totalItems !== 0) return false
    // Count only *active* filters: an all-empty value like `{ department: [] }`
    // is not a filter, so an empty result with no active filters is "no-data",
    // not "no-results".
    const hasActiveFilters = effectiveFilters
      ? getActiveFilterKeys(effectiveFilters, filters, i18n).length > 0
      : false
    return hasActiveFilters || search ? "no-results" : "no-data"
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
    activeCurrentFilters,
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

  /**
   * Presets — merge developer-provided presets (filter-only or richer) with the
   * user's custom presets. Developer presets get a derived stable id so the two
   * sets share a single id space.
   */
  const mergedPresets = useMemo<PresetsDefinition<Filters>>(() => {
    const devPresets = (effectivePresets ?? []).map((preset, index) => ({
      ...preset,
      id: preset.id ?? `${preset.label}-${index}`,
    }))
    return [...devPresets, ...customPresets]
  }, [effectivePresets, customPresets])

  const customPresetIds = useMemo(
    () => new Set(customPresets.map((preset) => preset.id)),
    [customPresets]
  )

  // The current view as a comparable snapshot.
  const capturedState = useMemo(
    () => ({
      filters: activeCurrentFilters,
      sortings: currentSortings,
      grouping: currentGrouping,
      visualization: currentVisualization,
      settings,
    }),
    [
      activeCurrentFilters,
      currentSortings,
      currentGrouping,
      currentVisualization,
      settings,
    ]
  )

  // A preset's captured state, filling dimensions it doesn't declare with the
  // developer baselines (matching how `applyPreset` resets them), so comparisons
  // are apples-to-apples.
  const getPresetCapturedState = useCallback(
    (preset: PresetsDefinition<Filters>[number]) => ({
      filters: (preset.filter ?? {}) as FiltersState<Filters>,
      sortings:
        preset.sortings !== undefined
          ? (preset.sortings as SortingsState<Sortings>)
          : defaultSortings.current,
      grouping:
        preset.grouping !== undefined
          ? (preset.grouping as GroupingState<R, Grouping>)
          : defaultGrouping.current,
      visualization: preset.visualization ?? 0,
      settings:
        preset.settings !== undefined
          ? (preset.settings as DataCollectionSettings)
          : getDefaultDataCollectionSettings(),
    }),
    []
  )

  type ViewSnapshot = ReturnType<typeof getPresetCapturedState>

  // Working state captured right before a preset is selected, so deselecting the
  // preset returns to it (the data collection's default config plus whatever
  // unpersisted changes the user had applied) instead of a hard reset.
  const preSelectionStateRef = useRef<ViewSnapshot | null>(null)

  // Set when a developer preset auto-deselects because the user diverged from it,
  // so "Save as preset" is offered afterwards — even for a view-only divergence
  // (which from a pristine baseline would normally be too transient to offer).
  // Reset when a preset is selected/toggled or a preset is saved.
  const forkAfterDeselectRef = useRef(false)

  // When applying a snapshot that also switches the visualization, the
  // per-visualization filter logic restores the *target* view's own filters on
  // switch, which would clobber the filters we want to apply. So we defer the
  // filter write until the view transition has settled (the layout effect below).
  const pendingFiltersRef = useRef<{
    filters: FiltersState<Filters>
    visualization: number
  } | null>(null)

  const defaultViewSnapshot = useCallback(
    (): ViewSnapshot => ({
      filters: defaultFilters.current,
      sortings: defaultSortings.current,
      grouping: defaultGrouping.current,
      visualization: 0,
      settings: getDefaultDataCollectionSettings(),
    }),
    []
  )

  /** Applies a full view snapshot, deferring filters across a view switch. */
  const applyViewSnapshot = useCallback(
    (snapshot: ViewSnapshot) => {
      setCurrentSortings(snapshot.sortings)
      setCurrentGrouping(snapshot.grouping)
      setSettings(snapshot.settings)
      if (snapshot.visualization !== currentVisualization) {
        // Switch the view first; apply filters once the transition settles so
        // the per-visualization filter restore can't override them.
        pendingFiltersRef.current = {
          filters: snapshot.filters,
          visualization: snapshot.visualization,
        }
        setCurrentVisualization(snapshot.visualization)
      } else {
        activeSetCurrentFilters(snapshot.filters)
      }
    },
    [
      currentVisualization,
      activeSetCurrentFilters,
      setCurrentSortings,
      setCurrentGrouping,
      setSettings,
    ]
  )

  // Apply deferred snapshot filters once the target visualization is active.
  useLayoutEffect(() => {
    const pending = pendingFiltersRef.current
    if (pending && pending.visualization === currentVisualization) {
      pendingFiltersRef.current = null
      activeSetCurrentFilters(pending.filters)
    }
  }, [currentVisualization, activeSetCurrentFilters])

  /** Applies a preset's full captured state (resetting uncaptured dimensions). */
  const applyPreset = useCallback(
    (presetId: string) => {
      // Selecting/toggling a preset clears any pending "fork after deselect" hint.
      forkAfterDeselectRef.current = false
      // Toggle off: clicking the selected preset returns to the working state
      // captured before it was selected (default config + unpersisted changes).
      if (presetId === selectedPresetId) {
        applyViewSnapshot(preSelectionStateRef.current ?? defaultViewSnapshot())
        preSelectionStateRef.current = null
        setSelectedPresetId(undefined)
        return
      }

      const preset = mergedPresets.find((p) => p.id === presetId)
      if (!preset) return

      // Remember the working state the first time a preset is selected (kept
      // across preset-to-preset switches) so it can be restored on deselect.
      if (!selectedPresetId) {
        preSelectionStateRef.current = capturedState
      }

      applyViewSnapshot(getPresetCapturedState(preset))
      setSelectedPresetId(presetId)
    },
    [
      mergedPresets,
      selectedPresetId,
      capturedState,
      applyViewSnapshot,
      defaultViewSnapshot,
      getPresetCapturedState,
    ]
  )

  // Tracks the selected developer preset's applied snapshot and whether the view
  // has *settled* onto it. Auto-deselect only fires after settling, so applying a
  // preset that also switches the visualization (a multi-commit transition where
  // the view transiently differs from the snapshot) never trips the deselect.
  const devSelectionRef = useRef<{
    id: string
    snapshot: ViewSnapshot
    settled: boolean
  } | null>(null)

  // A selected view represents a specific snapshot; once the user changes
  // anything (filters/sorting/grouping/columns/view mode) it no longer matches,
  // so de-select it (and offer "Save view" to fork it into a new one). Applies
  // to both developer- and user-created views. Works for both click- and
  // URL-restored selections (it keys off `selectedPresetId`, not `applyPreset`).
  useEffect(() => {
    const selectedPreset = selectedPresetId
      ? mergedPresets.find((p) => p.id === selectedPresetId)
      : undefined

    if (!selectedPreset) {
      devSelectionRef.current = null
      return
    }

    // (Re)start tracking when the selected view changes.
    if (devSelectionRef.current?.id !== selectedPreset.id) {
      devSelectionRef.current = {
        id: selectedPreset.id!,
        snapshot: getPresetCapturedState(selectedPreset),
        settled: false,
      }
    }
    const tracked = devSelectionRef.current
    if (!tracked) return

    // Don't evaluate mid-transition (filters still being applied across a view
    // switch); the post-transition render will re-run this effect.
    if (pendingFiltersRef.current) return

    if (!tracked.settled) {
      // Wait until the view first matches the preset before arming deselect.
      if (isEqual(capturedState, tracked.snapshot)) tracked.settled = true
      return
    }

    if (!isEqual(capturedState, tracked.snapshot)) {
      devSelectionRef.current = null
      preSelectionStateRef.current = null
      // Offer "Save view" after deselecting: the user diverged from a named view,
      // so the new view is worth saving (incl. a view-only divergence).
      forkAfterDeselectRef.current = true
      setSelectedPresetId(undefined)
    }
  }, [selectedPresetId, mergedPresets, capturedState, getPresetCapturedState])

  // Snapshot of the view captured once storage has settled. "Save as preset"
  // (no preset selected) is offered only when the current view diverges from
  // this session baseline — so a freshly-loaded (incl. persisted) collection
  // does not offer to save until the user actually changes something.
  const [sessionBaseline, setSessionBaseline] = useState<ViewSnapshot | null>(
    null
  )

  /**
   * Whether to offer "Save view" (create a new view):
   * - a view is selected → "none" (diverging from it auto-deselects via the
   *   effect above; while it still matches there's nothing to save)
   * - no view selected and a non-view-mode dimension diverges from the session
   *   baseline → "save"
   * - just diverged from a (now de-selected) view → "save", even for a view-only
   *   divergence, as long as we're not back at the baseline
   *
   * Note: a visualization (view mode) change on its own, from a pristine
   * baseline, never offers "Save view" — switching views is too transient.
   */
  const presetActionState = useMemo<"save" | "none">(() => {
    // Compares everything except the view mode, so a visualization-only change
    // does not count as a reason to save a new view.
    const sameIgnoringVisualization = (a: ViewSnapshot, b: ViewSnapshot) =>
      isEqual(
        { ...a, visualization: undefined },
        { ...b, visualization: undefined }
      )

    // A still-matching selected view offers nothing; divergence deselects it.
    if (
      selectedPresetId &&
      mergedPresets.some((preset) => preset.id === selectedPresetId)
    ) {
      return "none"
    }

    // Until storage settles (baseline captured), don't offer to save — avoids a
    // spurious "save" flash while filters/sorting/etc. hydrate from storage.
    if (sessionBaseline === null) return "none"
    if (!sameIgnoringVisualization(capturedState, sessionBaseline))
      return "save"
    // Just diverged from a (now de-selected) view → offer to fork it, even when
    // only the view mode differs, as long as we're not back at baseline.
    if (
      forkAfterDeselectRef.current &&
      !isEqual(capturedState, sessionBaseline)
    ) {
      return "save"
    }
    return "none"
  }, [selectedPresetId, mergedPresets, capturedState, sessionBaseline])

  const handleSavePreset = useCallback(
    (values: PresetFormValues) => {
      // A shared-link view carries its own config; a regular "Save view"
      // captures the current view.
      const shared =
        presetDialog?.mode === "create" ? presetDialog.shared : undefined
      const config = shared
        ? {
            filter: shared.filter,
            sortings: shared.sortings,
            grouping: shared.grouping,
            visualization: shared.visualization,
            settings: shared.settings,
          }
        : {
            filter: activeCurrentFilters,
            sortings: currentSortings,
            grouping: currentGrouping,
            visualization: currentVisualization,
            settings,
          }
      const newPreset = {
        // Title-derived id (doubles as the readable `dc_view` URL value).
        id: derivePresetId(
          values.title,
          mergedPresets.map((preset) => preset.id ?? preset.label)
        ),
        label: values.title,
        description: values.description,
        ...config,
      } as PresetsDefinition<Filters>[number]
      setCustomPresets((prev) => [...prev, newPreset])
      setSelectedPresetId(newPreset.id)
      forkAfterDeselectRef.current = false
      setPresetDialog(null)
    },
    [
      presetDialog,
      activeCurrentFilters,
      currentSortings,
      currentGrouping,
      currentVisualization,
      settings,
      mergedPresets,
    ]
  )

  // Rename a custom view (title/description, from its hover edit icon). The
  // captured options are left untouched — diverging then saving creates a new view.
  const handleEditPresetMeta = useCallback(
    (values: PresetFormValues) => {
      const targetId =
        presetDialog?.mode === "update" ? presetDialog.presetId : undefined
      if (!targetId) return
      // The id is title-derived and doubles as the readable `dc_view` URL
      // value, so a rename must regenerate it (deduped against the other views)
      // and re-point the selection — otherwise the URL keeps the old name.
      const newId = derivePresetId(
        values.title,
        mergedPresets
          .filter((preset) => preset.id !== targetId)
          .map((preset) => preset.id ?? preset.label)
      )
      setCustomPresets((prev) =>
        prev.map((preset) =>
          preset.id === targetId
            ? {
                ...preset,
                id: newId,
                label: values.title,
                description: values.description,
              }
            : preset
        )
      )
      setSelectedPresetId((current) => (current === targetId ? newId : current))
      setPresetDialog(null)
    },
    [presetDialog, mergedPresets]
  )

  // Delete the preset being edited (from the update dialog's "Remove" action).
  const handleDeleteEditingPreset = useCallback(() => {
    const targetId =
      presetDialog?.mode === "update" ? presetDialog.presetId : undefined
    if (!targetId) return
    setCustomPresets((prev) => prev.filter((preset) => preset.id !== targetId))
    setSelectedPresetId((current) =>
      current === targetId ? undefined : current
    )
    setPresetDialog(null)
  }, [presetDialog])

  // "Save view" → open the create dialog.
  const onPresetAction = useCallback(() => {
    setPresetDialog({ mode: "create" })
  }, [])

  const editablePresetIds = useMemo(
    () => Array.from(customPresetIds).filter((id): id is string => !!id),
    [customPresetIds]
  )

  const onEditPreset = useCallback(
    (presetId: string) => setPresetDialog({ mode: "update", presetId }),
    []
  )

  // Copies a self-contained shareable link for a custom view to the clipboard,
  // then flashes a "Copied to your clipboard" action bar.
  const onSharePreset = useCallback(
    (presetId: string) => {
      const preset = customPresets.find((p) => p.id === presetId)
      if (!preset) return
      const url = buildSharedPresetUrl({
        label: preset.label,
        description: preset.description,
        filter: preset.filter,
        sortings: preset.sortings,
        grouping: preset.grouping,
        visualization: preset.visualization,
        settings: preset.settings,
      })
      const clipboard =
        typeof navigator !== "undefined" ? navigator.clipboard : undefined
      if (!url || !clipboard) return
      void clipboard
        .writeText(url)
        .then(() => setShareCopied(true))
        .catch(() => {})
    },
    [customPresets]
  )

  // Transient confirmation shown after a successful "Share preset" copy.
  const [shareCopied, setShareCopied] = useState(false)
  useEffect(() => {
    if (!shareCopied) return
    const timer = setTimeout(
      () => setShareCopied(false),
      SHARE_COPIED_DISMISS_MS
    )
    return () => clearTimeout(timer)
  }, [shareCopied])

  // A shared preset link prefills (once) the create dialog so the recipient can
  // just hit Save; strip the param afterwards so a reload doesn't reopen it.
  useEffect(() => {
    if (!sharedPreset) return
    setPresetDialog({ mode: "create", shared: sharedPreset })
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      params.delete(SHARED_PRESET_PARAM)
      const query = params.toString()
      window.history.replaceState(
        null,
        "",
        query
          ? `${window.location.pathname}?${query}`
          : window.location.pathname
      )
    }
    // Run once on mount for a captured shared preset.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // The custom preset currently being edited (for the form's default values).
  const editingPreset = useMemo(
    () =>
      presetDialog?.mode === "update"
        ? customPresets.find((preset) => preset.id === presetDialog.presetId)
        : undefined,
    [presetDialog, customPresets]
  )

  const { storageReady } = useDataCollectionStorage(
    id,
    typeof storage === "object" ? (storage?.features ?? ["*"]) : ["*"],
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
      customPresets: {
        value: customPresets,
        setValue: setCustomPresets,
      },
      ...(hasPerVisualizationFilters
        ? {
            visualizationFilters: {
              value: allVisualizationFilters,
              setValue: setAllVisualizationFilters,
            },
          }
        : {}),
    },
    storage === false
  )

  // Capture the session baseline once storage has settled, so "Save as preset"
  // only appears after the user changes something this session (not from
  // persisted/hydrated state). Captured once per storage scope.
  useEffect(() => {
    if (storageReady && sessionBaseline === null) {
      setSessionBaseline(capturedState)
    }
  }, [storageReady, sessionBaseline, capturedState])

  // Two-way sync between the collection state and the URL query params. Enabled
  // by default for any collection (no `id` required); opt out with
  // `disableUrlParams`.
  useDataCollectionUrlSync({
    disabled: !!disableUrlParams,
    storageReady,
    filtersDefinition: filters as FiltersDefinition | undefined,
    filters: activeCurrentFilters as FiltersState<FiltersDefinition>,
    search: currentSearch,
    sortings: currentSortings as SortingsState<SortingsDefinition>,
    visualization: currentVisualization,
    visualizationKeys: visualizations.map((v) => v.type),
    selectedPresetId,
    setFilters: activeSetCurrentFilters as (
      value: FiltersState<FiltersDefinition>
    ) => void,
    setSearch: setCurrentSearch,
    setSortings: setCurrentSortings as (
      value: SortingsState<SortingsDefinition>
    ) => void,
    setVisualization: setCurrentVisualization,
    setSelectedPresetId,
  })

  const showTotalItemSummarySkeleton = useDebounceBoolean({
    value: isInitialLoading && storageReady,
    delay: 100,
  })

  /** State */
  useDeepCompareEffect(() => {
    onStateChange?.({
      filters: activeCurrentFilters,
      sortings: currentSortings as SortingsState<SortingsDefinition>,
      visualization: currentVisualization,
      grouping: currentGrouping as GroupingState<R, GroupingDefinition<R>>,
      search: currentSearch,
      navigationFilters: currentNavigationFilters,
      settings: settings,
      ...(hasPerVisualizationFilters
        ? { visualizationFilters: allVisualizationFilters }
        : {}),
    })
  }, [
    activeCurrentFilters,
    currentSearch,
    currentNavigationFilters,
    currentSortings,
    currentVisualization,
    currentGrouping,
    settings,
    allVisualizationFilters,
  ])
  /************************/

  /** Toolbars */
  const shouldShowSettings = useMemo(() => {
    const groupByOptions = grouping
      ? Object.keys(grouping.groupBy).length + (grouping.mandatory ? 1 : 0)
      : 0

    const tableVisualization = Object.values(visualizations).find(
      (visualization) => visualization.type === "table"
    )

    // Show table settings if the table visualization is defined and the allowColumnHiding or allowColumnReordering options are true
    const showTableSettings =
      !!tableVisualization &&
      (!!tableVisualization.options?.allowColumnHiding ||
        !!tableVisualization.options?.allowColumnReordering)

    return (
      (visualizations && visualizations.length > 1) ||
      (groupByOptions > 0 && !grouping?.hideSelector) ||
      (sortings && Object.keys(sortings).length > 0) ||
      showTableSettings
    )
  }, [visualizations, grouping, sortings])

  const bottomRightHasItems = useMemo(() => {
    return (
      elementsRightActions ||
      hasCollectionsActions ||
      shouldShowSettings ||
      (search && search.enabled)
    )
  }, [elementsRightActions, hasCollectionsActions, shouldShowSettings, search])

  const totalItemSummaryPosition = useMemo(() => {
    if (!showTotalItemSummary) {
      return false
    }
    return effectiveFilters ? "top" : "bottom"
  }, [effectiveFilters, showTotalItemSummary])

  const navigationFiltersPosition = useMemo(() => {
    if (!navigationFilters) {
      return false
    }
    return bottomRightHasItems ? "top" : "bottom"
  }, [navigationFilters, bottomRightHasItems])

  const showTopToolbar = useMemo(() => {
    return (
      totalItemSummaryPosition === "top" || navigationFiltersPosition === "top"
    )
  }, [totalItemSummaryPosition, navigationFiltersPosition])

  const showBottomToolbar = useMemo(() => {
    return (
      effectiveFilters ||
      bottomRightHasItems ||
      navigationFiltersPosition === "bottom" ||
      totalItemSummaryPosition === "bottom"
    )
  }, [
    effectiveFilters,
    bottomRightHasItems,
    navigationFiltersPosition,
    totalItemSummaryPosition,
  ])

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        layout === "standard" && "-mx-[23px]",
        fullHeight && "h-full flex-1"
      )}
      style={{
        width:
          layout === "standard" && !tmpFullWidth ? "calc(100% + 46px)" : "100%", // To counteract the -mx-[23px] from the layout,
      }}
    >
      {showTopToolbar && (
        <div className="border-f1-border-primary px-page flex gap-4">
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
          className={cn(
            "flex flex-row gap-4 px-page",
            fullHeight && "max-h-full",
            tmpFullWidth && "px-0"
          )}
        >
          {totalItemSummaryPosition === "bottom" && (
            <TotalItemsSummary
              isReady={!showTotalItemSummarySkeleton}
              totalItemSummaryResult={totalItemSummaryResult}
            />
          )}
          <div className="flex-1">
            <OneFilterPicker
              filters={effectiveFilters}
              value={activeCurrentFilters}
              presets={mergedPresets}
              presetsLoading={showPresetsLoading}
              onChange={(value) => activeSetCurrentFilters(value)}
              resultCount={totalItems}
              selectedPresetId={selectedPresetId}
              onSelectPreset={applyPreset}
              editablePresetIds={editablePresetIds}
              onEditPreset={onEditPreset}
              presetActionState={presetActionState}
              onPresetAction={onPresetAction}
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
                <Search
                  onChange={setCurrentSearch}
                  value={currentSearch}
                  results={searchPreview.results}
                  resultsLoading={searchPreview.loading}
                  onResultSelect={searchPreview.onSelect}
                />
              )}
              {shouldShowSettings && (
                <Settings
                  visualizations={visualizations}
                  currentVisualization={currentVisualization}
                  onVisualizationChange={setCurrentVisualization}
                  grouping={grouping}
                  currentGrouping={currentGrouping}
                  onGroupingChange={setCurrentGrouping}
                  sortings={sortings}
                  currentSortings={currentSortings}
                  defaultSortings={defaultSortings.current}
                  onSortingsChange={setCurrentSortings}
                />
              )}
              {hasCollectionsActions && (
                <>
                  {elementsRightActions && (
                    <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
                  )}
                  <CollectionActions
                    primaryActions={primaryActionItems}
                    primaryActionsLabel={primaryActionsLabel}
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
          source={effectiveSource}
          onSelectItems={onSelectItemsLocal}
          onLoadData={onLoadData}
          onLoadError={onLoadError}
          tmpFullWidth={tmpFullWidth}
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
            <ActionBar
              ref={actionBarRef}
              isOpen={
                showActionBar ||
                resolvedBulkActionStatus === "loading" ||
                resolvedBulkActionStatus === "success"
              }
              status={resolvedBulkActionStatus}
              selectedNumber={selectedItemsCount}
              primaryActions={
                bulkActionsGroups && "primary" in bulkActionsGroups
                  ? bulkActionsGroups.primary
                  : []
              }
              secondaryActions={
                bulkActionsGroups && "secondary" in bulkActionsGroups
                  ? bulkActionsGroups.secondary
                  : []
              }
              warningMessage={
                "warningMessage" in bulkActions
                  ? bulkActions.warningMessage
                  : undefined
              }
              onUnselect={() => clearSelectedItemsFunc?.()}
              allPagesSelection={!!source.allPagesSelection}
              isAllItemsSelected={isAllItemsSelected}
              totalItems={totalItems}
            />
          )}
        </>
      )}
      <PresetFormDialog
        isOpen={presetDialog !== null}
        mode={presetDialog?.mode ?? "create"}
        initialValues={
          editingPreset
            ? {
                title: editingPreset.label,
                description: editingPreset.description,
              }
            : presetDialog?.mode === "create" && presetDialog.shared
              ? {
                  title: presetDialog.shared.label,
                  description: presetDialog.shared.description,
                }
              : undefined
        }
        onClose={() => setPresetDialog(null)}
        onSubmit={
          presetDialog?.mode === "update"
            ? handleEditPresetMeta
            : handleSavePreset
        }
        onDelete={
          presetDialog?.mode === "update"
            ? handleDeleteEditingPreset
            : undefined
        }
        onShare={
          presetDialog?.mode === "update"
            ? () => onSharePreset(presetDialog.presetId)
            : undefined
        }
        existingNames={mergedPresets
          .filter(
            (preset) =>
              !(
                presetDialog?.mode === "update" &&
                preset.id === presetDialog.presetId
              )
          )
          .map((preset) => preset.label)}
      />
      {typeof document !== "undefined" &&
        createPortal(
          // Portal next to the preset dialog (same container it uses) inside a
          // stacking context above its overlay (z-50), so the confirmation
          // paints on top of the overlay it's triggered from. The z-index is
          // set inline (not a Tailwind arbitrary class) so it always applies
          // regardless of the consumer's CSS build.
          <div style={{ position: "relative", zIndex: 9999 }}>
            <F0ActionBar
              isOpen={shareCopied}
              variant="light"
              status="success"
              label={i18n.collections.presets.copiedToClipboard}
            />
          </div>,
          document.getElementById("content") ?? document.body
        )}
    </div>
  )
}

export { OneDataCollectionComp }
