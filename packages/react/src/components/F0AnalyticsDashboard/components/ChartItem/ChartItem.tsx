import type {
  F0DataChartFunnelSeries,
  F0DataChartPieSeries,
  F0DataChartProps,
  F0DataChartRadarSeries,
} from "@/components/F0DataChart"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

import { F0DataChart } from "@/components/F0DataChart"
import {
  BarChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
} from "@/components/F0DataChart"

import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
} from "../../types"

import { useDashboardItemData } from "../../hooks/useDashboardItemData"
import { DashboardItem } from "../DashboardItem/DashboardItem"

/** Pick the skeleton component that matches the chart type and config */
function chartSkeleton(config: DashboardChartConfig) {
  switch (config.type) {
    case "bar":
      return (
        <BarChartSkeleton
          orientation={config.orientation}
          stacked={config.stacked}
          showLegend={config.showLegend}
        />
      )
    case "line":
      return (
        <LineChartSkeleton
          lineType={config.lineType}
          showArea={config.showArea}
          showDots={config.showDots}
          showLegend={config.showLegend}
        />
      )
    case "funnel":
      return (
        <FunnelChartSkeleton
          orient={config.orient}
          sort={config.sort}
          showLegend={config.showLegend}
        />
      )
    case "pie":
      return (
        <PieChartSkeleton
          innerRadius={config.innerRadius}
          showLegend={config.showLegend}
        />
      )
    case "radar":
      return <RadarChartSkeleton showLegend={config.showLegend} />
    case "gauge":
      return <GaugeChartSkeleton />
    case "heatmap":
      return <HeatmapChartSkeleton />
  }
}

interface ChartItemProps<Filters extends FiltersDefinition> {
  item: DashboardChartItem<Filters>
  filters: FiltersState<Filters>
  actions?: import("@/experimental/Navigation/Dropdown").DropdownItem[]
}

/**
 * Build the full F0DataChart props by merging chart config with fetched data.
 *
 * Funnel charts receive `series` as a single object and no `categories`.
 * Bar/Line charts receive `categories` and `series` as arrays.
 */
function buildChartProps(
  item: DashboardChartItem,
  data: DashboardChartData
): F0DataChartProps {
  const { chart } = item

  switch (chart.type) {
    case "funnel": {
      // data.series may already be funnel-shaped (single object with .data as
      // {value,name}[]) or the bar/line shape (array of {name, data: number[]}).
      // Convert the bar/line shape to funnel shape when needed.
      let funnelSeries: F0DataChartFunnelSeries

      if (Array.isArray(data.series)) {
        const firstSeries = data.series[0] as
          | { name: string; data: number[] }
          | undefined
        funnelSeries = {
          name: firstSeries?.name ?? "Funnel",
          data: (data.categories ?? []).map((cat, i) => ({
            name: cat,
            value: firstSeries?.data[i] ?? 0,
          })),
        }
      } else {
        funnelSeries = data.series as F0DataChartFunnelSeries
      }

      return {
        ...chart,
        series: funnelSeries,
      }
    }

    case "pie":
      return {
        ...chart,
        series: data.series as F0DataChartPieSeries,
      }

    case "radar":
      return {
        ...chart,
        indicators: data.indicators ?? [],
        series: data.series as F0DataChartRadarSeries[],
      }

    case "gauge":
      return {
        ...chart,
        ...(data.series as { value: number; name?: string }),
      }

    case "heatmap":
      return {
        ...chart,
        xCategories: data.xCategories ?? [],
        yCategories: data.yCategories ?? [],
        data: data.data ?? [],
      }

    case "bar":
    case "line":
      // Bar and Line charts require categories
      return {
        ...chart,
        categories: data.categories ?? [],
        series: data.series,
      } as F0DataChartProps
  }
}

/**
 * Renders a single chart dashboard item.
 *
 * Uses `useDashboardItemData` to fetch chart data asynchronously,
 * then passes the resolved categories + series to F0DataChart
 * along with the item's visual chart config.
 *
 * Chart height is determined by the grid cell's `aspect-ratio` (set in
 * DashboardGrid). The card and this container both use `h-full` to fill
 * the cell, so charts in the same grid row always have identical heights.
 */
export function ChartItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
}: ChartItemProps<Filters>) {
  const enabled = item.useDashboardFilters !== false
  const { data, isLoading, error, retry } = useDashboardItemData<
    Filters,
    DashboardChartData
  >(item.fetchData, filters, enabled)

  const effectiveError =
    error ?? (!isLoading && !data ? new Error("No data available") : undefined)

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      isLoading={isLoading}
      error={effectiveError}
      onRetry={retry}
      skeleton={chartSkeleton(item.chart)}
      actions={actions}
    >
      {data && (
        <div className="h-full w-full px-4 py-3">
          <F0DataChart {...buildChartProps(item as DashboardChartItem, data)} />
        </div>
      )}
    </DashboardItem>
  )
}
