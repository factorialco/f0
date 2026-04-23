import { useEffect, useMemo, useState } from "react"

import type {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "@/patterns/OneDataCollection/navigationFilters/types"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { useI18n } from "@/lib/providers/i18n"
import { NavigationFilters } from "@/patterns/OneDataCollection/components/NavigationFilters/NavigationFilters"
import { navigationFilterTypes } from "@/patterns/OneDataCollection/navigationFilters"

import type { F0AnalyticsDashboardProps } from "./types"

import { DashboardGrid } from "./components/DashboardGrid/DashboardGrid"
import { ExportDropdown } from "./components/ExportDropdown/ExportDropdown"
import { FilterBar } from "./components/FilterBar/FilterBar"
import { FilterBarSkeleton } from "./components/FilterBar/FilterBarSkeleton"
import { useDashboardExport } from "./hooks/useDashboardExport"

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
  items,
  editMode,
  onLayoutChange,
  enableExport,
  exportFilename,
  onExportReady,
  resetKey,
  onTransformChart,
  navigationFilters,
  filtersLoading,
}: F0AnalyticsDashboardProps<Filters>) => {
  const i18n = useI18n()

  const [currentFilters, setCurrentFilters] = useState<FiltersState<Filters>>(
    () => defaultFilters ?? ({} as FiltersState<Filters>)
  )

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
  // suppress the canvas-level Excel export. The inner OneDataCollection
  // already exposes a CSV export via `csvExport` that respects the user's
  // current sort + hidden columns + search — the canvas Excel would run
  // on the raw dataset and silently drop those view choices, which is
  // confusing UX for a single-table surface. Multi-item dashboards keep
  // the canvas Excel (it aggregates every item into a multi-sheet file,
  // which the inner CSV cannot do).
  const isSingleCollection =
    items.length === 1 && items[0]?.type === "collection"

  useEffect(() => {
    if (isSingleCollection) {
      onExportReady?.(undefined)
      return
    }
    onExportReady?.(exportAsExcel)
    return () => onExportReady?.(undefined)
  }, [exportAsExcel, onExportReady, isSingleCollection])

  return (
    <div className="flex flex-col gap-5 pb-10">
      {(filters || filtersLoading || enableExport || navigationFilters) && (
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
      <div className="px-5">
        <DashboardGrid
          items={items}
          filters={
            {
              ...currentFilters,
              ...currentNavigationFilters,
            } as FiltersState<Filters>
          }
          editMode={editMode}
          onLayoutChange={onLayoutChange}
          onTransformChart={onTransformChart}
          resetKey={resetKey}
        />
      </div>
    </div>
  )
}

F0AnalyticsDashboard.displayName = "F0AnalyticsDashboard"
