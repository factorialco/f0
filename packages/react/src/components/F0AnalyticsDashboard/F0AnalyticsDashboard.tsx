import { useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

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
}: F0AnalyticsDashboardProps<Filters>) => {
  const [currentFilters, setCurrentFilters] = useState<FiltersState<Filters>>(
    () => defaultFilters ?? ({} as FiltersState<Filters>)
  )

  const { exportAsExcel, isExporting } = useDashboardExport({
    items,
    filters: currentFilters,
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="w-full">
          <FilterBar
            filters={filters}
            value={currentFilters}
            presets={presets}
            onChange={setCurrentFilters}
          />
        </div>
        {enableExport && (
          <ExportDropdown
            onExportExcel={exportAsExcel}
            isExporting={isExporting}
          />
        )}
      </div>
      <DashboardGrid
        items={items}
        filters={currentFilters}
        editMode={editMode}
        onLayoutChange={onLayoutChange}
      />
    </div>
  )
}

F0AnalyticsDashboard.displayName = "F0AnalyticsDashboard"
