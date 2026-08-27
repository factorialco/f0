import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { PendingQuote } from "@/kits/ai/F0AiChat/types"
import type { F0DataChartAreaSelectionArea } from "@/kits/F0DataChart"
import type {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "@/patterns/OneDataCollection/navigationFilters/types"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { Cross, Pencil } from "@/icons/app"
import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { NavigationFilters } from "@/patterns/OneDataCollection/components/NavigationFilters/NavigationFilters"
import { navigationFilterTypes } from "@/patterns/OneDataCollection/navigationFilters"

import type { F0AnalyticsDashboardProps } from "./types"

import { DashboardGrid } from "./components/DashboardGrid/DashboardGrid"
import { ExportDropdown } from "./components/ExportDropdown/ExportDropdown"
import { FilterBar } from "./components/FilterBar/FilterBar"
import { FilterBarSkeleton } from "./components/FilterBar/FilterBarSkeleton"
import { useDashboardExport } from "./hooks/useDashboardExport"

type AreaSelectionState =
  | { status: "idle" }
  | { status: "drawing"; feedback: "hint" | "empty" }
  | {
      status: "selected"
      itemId: string
      quote: PendingQuote
      area?: F0DataChartAreaSelectionArea
    }

/**
 * F0AnalyticsDashboard — a declarative, config-driven analytics dashboard.
 *
 * Renders a shared filter bar at the top and a 3-column grid of chart
 * and collection widgets below. Each widget independently fetches its data,
 * receiving the dashboard-level filters in its `fetchData` function.
 *
 * The entire dashboard structure is defined via optional `filters` / `presets`
 * and an `items` array — making it fully LLM-generatable.
 */
export const F0AnalyticsDashboard = <
  Filters extends FiltersDefinition = FiltersDefinition,
>({
  filters,
  presets,
  defaultFilters,
  filtersValue,
  onFiltersChange,
  items,
  itemFilters,
  editMode,
  onLayoutChange,
  enableExport,
  exportFilename,
  onExportReady,
  resetKey,
  onTransformChart,
  onAskAi,
  onAskAiTarget,
  navigationFilters,
  filtersLoading,
}: F0AnalyticsDashboardProps<Filters>) => {
  const i18n = useI18n()
  const { enabled: aiEnabled, pendingQuote, setPendingQuote } = useAiChat()
  const [areaSelection, setAreaSelection] = useState<AreaSelectionState>({
    status: "idle",
  })
  const [showAreaSelectionGuidance, setShowAreaSelectionGuidance] =
    useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const areaSelectionActionRef = useRef<HTMLButtonElement | HTMLAnchorElement>(
    null
  )
  const areaSelectionRef = useRef(areaSelection)
  const pendingQuoteRef = useRef(pendingQuote)
  areaSelectionRef.current = areaSelection
  pendingQuoteRef.current = pendingQuote

  const [currentFilters = {}, setCurrentFilters] = useControllableState<
    FiltersState<Filters>
  >({
    prop: filtersValue,
    defaultProp: defaultFilters ?? ({} as FiltersState<Filters>),
    onChange: onFiltersChange,
  })

  const initialNavState = useMemo(() => {
    if (!navigationFilters)
      return {} as NavigationFiltersState<NavigationFiltersDefinition>
    const state: Record<string, unknown> = {}
    for (const [key, filter] of Object.entries(navigationFilters)) {
      const filterType = navigationFilterTypes[filter.type]
      state[key] =
        filterType.valueConverter?.(filter.defaultValue, filter, i18n) ??
        filter.defaultValue
    }
    return state as NavigationFiltersState<NavigationFiltersDefinition>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [currentNavigationFilters, setCurrentNavigationFilters] =
    useState<NavigationFiltersState<NavigationFiltersDefinition>>(
      initialNavState
    )

  const { exportAsExcel, isExporting } = useDashboardExport({
    items,
    filters: currentFilters,
    filename: exportFilename,
  })

  // For single-collection-item dashboards (the `tables` skill output) we
  // suppress the canvas-level Excel export. Per-item Excel/CSV downloads are
  // exposed instead from the DashboardItem dropdown (see
  // `useCollectionDownloadActions`), which respects the user's current sort,
  // hidden columns and search. The canvas Excel would run on the raw dataset
  // and silently drop those view choices, which is confusing UX for a
  // single-table surface. Multi-item dashboards keep the canvas Excel — it
  // aggregates every item into a multi-sheet file, which the per-item
  // download cannot do.
  const isSingleCollection =
    items.length === 1 && items[0]?.type === "collection"

  const [areaSelectableItemIds, setAreaSelectableItemIds] = useState<
    ReadonlySet<string>
  >(new Set())
  const handleAreaSelectionAvailabilityChange = useCallback(
    (itemId: string, available: boolean) => {
      setAreaSelectableItemIds((current) => {
        const next = new Set(current)
        if (available) next.add(itemId)
        else next.delete(itemId)
        if (
          next.size === current.size &&
          [...next].every((id) => current.has(id))
        ) {
          return current
        }
        return next
      })
    },
    []
  )

  useEffect(() => {
    const itemIds = new Set(items.map((item) => item.id))
    setAreaSelectableItemIds((current) => {
      const next = new Set([...current].filter((id) => itemIds.has(id)))
      return next.size === current.size ? current : next
    })
  }, [items])
  const hasAreaSelectionResponder = onAskAi !== undefined || aiEnabled
  const canSelectChartArea =
    hasAreaSelectionResponder &&
    (areaSelectableItemIds.size > 0 || areaSelection.status !== "idle")

  const clearAreaSelection = useCallback(() => {
    if (
      areaSelection.status === "selected" &&
      pendingQuote === areaSelection.quote
    ) {
      setPendingQuote(null)
    }
    setShowAreaSelectionGuidance(false)
    setAreaSelection({ status: "idle" })
  }, [areaSelection, pendingQuote, setPendingQuote])

  const restoreAreaSelectionFocus = useCallback(() => {
    requestAnimationFrame(() => {
      // Availability is reported by each chart in an effect. Give that report
      // one frame to commit before deciding whether the global action survives
      // cancellation; focusing it earlier can send focus to body when the last
      // drawable chart removes the action immediately afterwards.
      requestAnimationFrame(() => {
        const action = areaSelectionActionRef.current
        if (action?.isConnected) {
          action.focus()
          return
        }

        const fallback = dashboardRef.current?.querySelector<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
        ;(fallback ?? dashboardRef.current)?.focus()
      })
    })
  }, [])

  const toggleAreaSelection = useCallback(() => {
    if (areaSelection.status === "drawing") {
      clearAreaSelection()
      restoreAreaSelectionFocus()
      return
    }
    if (
      areaSelection.status === "selected" &&
      pendingQuote === areaSelection.quote
    ) {
      setPendingQuote(null)
    }
    setShowAreaSelectionGuidance(true)
    setAreaSelection({ status: "drawing", feedback: "hint" })
  }, [
    areaSelection,
    clearAreaSelection,
    pendingQuote,
    restoreAreaSelectionFocus,
    setPendingQuote,
  ])

  const handleAreaSelectionCancel = useCallback(() => {
    clearAreaSelection()
    restoreAreaSelectionFocus()
  }, [clearAreaSelection, restoreAreaSelectionFocus])

  const handleAreaSelectionComplete = useCallback(
    (
      itemId: string,
      quote: PendingQuote | null,
      area?: F0DataChartAreaSelectionArea
    ) => {
      setShowAreaSelectionGuidance(false)
      setAreaSelection(
        quote
          ? {
              status: "selected",
              itemId,
              quote,
              ...(area ? { area } : {}),
            }
          : { status: "idle" }
      )
      if (!area && !quote) restoreAreaSelectionFocus()
    },
    [restoreAreaSelectionFocus]
  )

  useEffect(() => {
    if (areaSelection.status !== "drawing") return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return
      event.preventDefault()
      handleAreaSelectionCancel()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [areaSelection.status, handleAreaSelectionCancel])

  useEffect(() => {
    if (
      areaSelection.status === "selected" &&
      pendingQuote !== areaSelection.quote
    ) {
      setAreaSelection({ status: "idle" })
    }
  }, [areaSelection, pendingQuote])

  useEffect(() => {
    const current = areaSelectionRef.current
    if (
      current.status === "selected" &&
      pendingQuoteRef.current === current.quote
    ) {
      setPendingQuote(null)
    }
    setAreaSelection({ status: "idle" })
  }, [currentFilters, currentNavigationFilters, resetKey, setPendingQuote])

  useEffect(() => {
    if (!hasAreaSelectionResponder && areaSelection.status !== "idle") {
      clearAreaSelection()
      return
    }
    if (
      areaSelection.status === "selected" &&
      !items.some((item) => item.id === areaSelection.itemId)
    ) {
      clearAreaSelection()
    }
  }, [areaSelection, clearAreaSelection, hasAreaSelectionResponder, items])

  useEffect(() => {
    if (isSingleCollection) {
      onExportReady?.(undefined)
      return
    }
    onExportReady?.(exportAsExcel)
    return () => onExportReady?.(undefined)
  }, [exportAsExcel, onExportReady, isSingleCollection])

  // The root container switches to a fill-height layout (`h-full` + grid
  // wrapper `flex-1`) so the grid can occupy exactly the remaining viewport
  // height without producing scroll. Two cases trigger this:
  //   1. The dashboard has a single item (auto-fullscreen).
  //   2. The user clicked maximize on one item of a multi-item dashboard
  //      (`DashboardGrid` reports the change via `onFullscreenChange`).
  // Multi-item, non-fullscreen dashboards keep the natural-height layout —
  // they handle scroll at the canvas-content level.
  const isSingleItem = items.length === 1
  const [isItemFullscreen, setIsItemFullscreen] = useState(false)
  const fillHeight = isSingleItem || isItemFullscreen
  const showToolbar =
    filters ||
    filtersLoading ||
    enableExport ||
    navigationFilters ||
    canSelectChartArea
  const areaSelectionButtonLabel =
    areaSelection.status === "drawing"
      ? i18n.ai.dashboardItem.cancelChartAreaSelection
      : i18n.ai.dashboardItem.selectChartArea

  return (
    <div
      ref={dashboardRef}
      tabIndex={-1}
      className={cn(
        "relative flex flex-col gap-5 pb-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring",
        fillHeight && "h-full pb-0"
      )}
      data-analytics-dashboard=""
      onFocusCapture={() => {
        if (
          areaSelection.status === "drawing" &&
          document.activeElement !== areaSelectionActionRef.current
        ) {
          setShowAreaSelectionGuidance(false)
        }
      }}
    >
      {showToolbar && (
        <div className="flex items-center justify-between gap-4 px-5">
          <div className="w-full">
            {filters ? (
              <FilterBar
                filters={filters}
                value={currentFilters}
                presets={presets}
                onChange={setCurrentFilters}
              />
            ) : filtersLoading ? (
              <FilterBarSkeleton />
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {canSelectChartArea && (
              <ButtonInternal
                ref={areaSelectionActionRef}
                type="button"
                label={areaSelectionButtonLabel}
                icon={areaSelection.status === "drawing" ? Cross : Pencil}
                variant="outline"
                data-dashboard-area-selection-action=""
                onClick={toggleAreaSelection}
              />
            )}
            {navigationFilters && (
              <NavigationFilters
                navigationFilters={navigationFilters}
                currentNavigationFilters={currentNavigationFilters}
                onChangeNavigationFilters={setCurrentNavigationFilters}
              />
            )}
            {enableExport && (
              <ExportDropdown
                onExportExcel={exportAsExcel}
                isExporting={isExporting}
              />
            )}
          </div>
        </div>
      )}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {areaSelection.status === "drawing"
          ? areaSelection.feedback === "empty"
            ? i18n.ai.dashboardItem.emptyChartAreaSelection
            : i18n.ai.dashboardItem.chartAreaSelectionHint
          : ""}
      </div>
      {areaSelection.status === "drawing" && showAreaSelectionGuidance && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-14 z-40 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-solid border-f1-border bg-f1-background px-4 py-2 text-center text-sm font-medium text-f1-foreground shadow-md"
          data-dashboard-area-selection-status=""
        >
          <F0Icon icon={Pencil} size="sm" />
          {areaSelection.feedback === "empty"
            ? i18n.ai.dashboardItem.emptyChartAreaSelection
            : i18n.ai.dashboardItem.chartAreaSelectionHint}
        </div>
      )}
      <div
        className={cn(
          "px-5",
          fillHeight && "flex min-h-0 flex-1 flex-col pb-5"
        )}
      >
        <DashboardGrid
          items={items}
          itemFilters={itemFilters}
          filters={
            {
              ...currentFilters,
              ...currentNavigationFilters,
            } as FiltersState<Filters>
          }
          editMode={editMode}
          onLayoutChange={onLayoutChange}
          onTransformChart={onTransformChart}
          onAskAi={onAskAi}
          onAskAiTarget={onAskAiTarget}
          areaSelectionActive={areaSelection.status === "drawing"}
          selectedAreaItemId={
            areaSelection.status === "selected" ? areaSelection.itemId : null
          }
          selectedArea={
            areaSelection.status === "selected" ? areaSelection.area : null
          }
          areaSelectableItemIds={areaSelectableItemIds}
          areaSelectionUnavailableLabel={
            i18n.ai.dashboardItem.chartAreaSelectionUnavailable
          }
          onAreaSelectionComplete={handleAreaSelectionComplete}
          onAreaSelectionAvailabilityChange={
            handleAreaSelectionAvailabilityChange
          }
          onAreaSelectionEmpty={() => {
            setShowAreaSelectionGuidance(true)
            setAreaSelection({ status: "drawing", feedback: "empty" })
          }}
          onAreaSelectionCancel={handleAreaSelectionCancel}
          resetKey={resetKey}
          onFullscreenChange={setIsItemFullscreen}
        />
      </div>
    </div>
  )
}

F0AnalyticsDashboard.displayName = "F0AnalyticsDashboard"
