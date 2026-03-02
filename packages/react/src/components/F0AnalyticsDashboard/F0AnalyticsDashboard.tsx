import { useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

import type { F0AnalyticsDashboardProps } from "./types"

import { DashboardGrid } from "./components/DashboardGrid/DashboardGrid"
import { FilterBar } from "./components/FilterBar/FilterBar"

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
}: F0AnalyticsDashboardProps<Filters>) => {
  const [currentFilters, setCurrentFilters] = useState<FiltersState<Filters>>(
    () => defaultFilters ?? ({} as FiltersState<Filters>)
  )

  return (
    <div className="flex flex-col gap-4">
      <FilterBar
        filters={filters}
        value={currentFilters}
        presets={presets}
        onChange={setCurrentFilters}
      />
      <DashboardGrid items={items} filters={currentFilters} />
    </div>
  )
}

F0AnalyticsDashboard.displayName = "F0AnalyticsDashboard"
