import { useEffect, useMemo, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { NavigationFilters } from "@/patterns/OneDataCollection/components/NavigationFilters/NavigationFilters"
import { navigationFilterTypes } from "@/patterns/OneDataCollection/navigationFilters"
import type {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "@/patterns/OneDataCollection/navigationFilters/types"
import { useI18n } from "@/lib/providers/i18n"

import type { F0AnalyticsDashboardProps } from "./types"

import { DashboardGrid } from "./components/DashboardGrid/DashboardGrid"
import { ExportDropdown } from "./components/ExportDropdown/ExportDropdown"
import { FilterBar } from "./components/FilterBar/FilterBar"
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

  useEffect(() => {
    onExportReady?.(exportAsExcel)
    return () => onExportReady?.(undefined)
  }, [exportAsExcel, onExportReady])

  return (
    <div className="flex flex-col gap-5 py-4">
      {(filters || enableExport || navigationFilters) && (
        <div className="flex items-center justify-between gap-4 px-5">
          <div className="w-full">
            <FilterBar
              filters={filters}
              value={currentFilters}
              presets={presets}
              onChange={setCurrentFilters}
            />
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
