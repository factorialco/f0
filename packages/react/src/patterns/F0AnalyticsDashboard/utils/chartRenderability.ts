import type { F0DataChartProps } from "@/kits/F0DataChart"

import type { DashboardChartData } from "../types"

import { isDataChartEmpty } from "@/kits/F0DataChart/utils/isDataChartEmpty"

import { detectDataShape } from "./chartDataAdapter"

/**
 * Whether the raw data returned by `fetchData` carries any data point at all,
 * judged against the shape the data actually has rather than the chart type
 * the item asked for.
 *
 * This mirrors `isDataChartEmpty` (the kit's check, which runs on already-built
 * `F0DataChart` props) one step earlier in the pipeline: it distinguishes "the
 * query returned nothing" from "the query returned rows the requested chart
 * cannot place". The first is the empty state's job; only the second is worth
 * falling back to a table for.
 */
export function hasChartDataPoints(data: DashboardChartData): boolean {
  switch (detectDataShape(data)) {
    case "heatmap":
      return (data.data?.length ?? 0) > 0
    case "gauge":
      return (
        typeof (data.series as { value?: unknown } | undefined)?.value ===
        "number"
      )
    case "funnel":
    case "pie": {
      const series = data.series as { data?: unknown[] } | undefined
      return Array.isArray(series?.data) && series.data.length > 0
    }
    case "bar":
    case "line":
    case "radar":
      return (
        Array.isArray(data.series) &&
        data.series.some(
          (series) =>
            Array.isArray((series as { data?: unknown[] })?.data) &&
            (series as { data: unknown[] }).data.length > 0
        )
      )
  }
}

/**
 * Whether `F0DataChart` can actually draw these props.
 *
 * `isDataChartEmpty` answers "are there data points?"; this adds the
 * structural preconditions needed to *place* those points — a category axis
 * for bar/line, indicators for radar, both axes for a heatmap. Fail either and
 * the chart paints its frame and nothing else, which is what makes a
 * shape-mismatched widget look broken rather than empty. Funnel, pie and gauge
 * label themselves from the series, so they have no extra requirement.
 */
export function canRenderChart(props: F0DataChartProps): boolean {
  if (isDataChartEmpty(props)) return false

  switch (props.type) {
    case "bar":
    case "line":
      return props.categories.length > 0
    case "radar":
      return props.indicators.length > 0
    case "heatmap":
      return props.xCategories.length > 0 && props.yCategories.length > 0
    case "funnel":
    case "pie":
    case "gauge":
      return true
  }
}
