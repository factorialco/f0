import type {
  F0DataChartBarSeries,
  F0DataChartFunnelSeries,
  F0DataChartLineSeries,
  F0DataChartPieSeries,
  F0DataChartRadarSeries,
} from "@/kits/F0DataChart"

import type {
  DashboardChartConfig,
  DashboardChartData,
  ScatterChartConfig,
} from "../types"

interface TabularResult {
  /** Header labels, in order. May contain duplicates — they come from data. */
  columns: string[]
  rows: Record<string, unknown>[]
  /**
   * Stable row-lookup keys, parallel to `columns`. Set when a header label is
   * user-controlled and could therefore collide with another column: rows are
   * keyed by these instead, so two columns sharing a label stay distinct.
   * Absent when every header is a safe literal.
   */
  keys?: string[]
}

/**
 * Extract a numeric value from a data point that can be either a plain number
 * or an object with a `value` property (e.g. bar chart {value, target}).
 */
function numericValue(point: unknown): number | null {
  if (point == null) return null
  if (typeof point === "number") return point
  if (typeof point === "object" && "value" in point) {
    return (point as { value: number }).value
  }
  return null
}

/**
 * Convert chart data + config into a tabular format suitable for Excel/CSV export.
 */
export function chartDataToTabular(
  config: DashboardChartConfig,
  data: DashboardChartData
): TabularResult {
  switch (config.type) {
    case "bar":
    case "line":
      return barLineToTabular(data)
    case "funnel":
      return funnelToTabular(data)
    case "pie":
      return pieToTabular(data)
    case "radar":
      return radarToTabular(data)
    case "gauge":
      return gaugeToTabular(data)
    case "heatmap":
      return heatmapToTabular(data)
    case "scatter":
      return scatterToTabular(config, data)
  }
}

function barLineToTabular(data: DashboardChartData): TabularResult {
  const categories = data.categories ?? []
  const rawSeries = data.series
  const series = (Array.isArray(rawSeries) ? rawSeries : []) as
    | F0DataChartBarSeries[]
    | F0DataChartLineSeries[]
  const seriesNames = series.map((s: { name: string }) => s.name)
  const columns = ["Category", ...seriesNames]

  const rows = categories.map((cat, i) => {
    const row: Record<string, unknown> = { Category: cat }
    for (const s of series) {
      row[s.name] = numericValue(
        (s as { name: string; data: unknown[] }).data[i]
      )
    }
    return row
  })

  return { columns, rows }
}

function funnelToTabular(data: DashboardChartData): TabularResult {
  // Funnel data can come as a single object with .data as {value,name}[]
  // or as bar/line shape (array of series)
  if (Array.isArray(data.series)) {
    const series = data.series as F0DataChartBarSeries[]
    const firstSeries = series[0]
    if (!firstSeries) return { columns: ["Stage", "Value"], rows: [] }

    const categories = data.categories ?? []
    const rows = categories.map((cat, i) => ({
      Stage: cat,
      Value: (firstSeries as { data: number[] }).data[i] ?? 0,
    }))
    return { columns: ["Stage", "Value"], rows }
  }

  const funnelSeries = data.series as F0DataChartFunnelSeries
  const rows = (funnelSeries?.data ?? []).map(
    (d: { name: string; value: number }) => ({
      Stage: d.name,
      Value: d.value,
    })
  )
  return { columns: ["Stage", "Value"], rows }
}

function pieToTabular(data: DashboardChartData): TabularResult {
  const series = data.series as F0DataChartPieSeries
  const rows = (series?.data ?? []).map(
    (d: { name: string; value: number }) => ({
      Name: d.name,
      Value: d.value,
    })
  )
  return { columns: ["Name", "Value"], rows }
}

function radarToTabular(data: DashboardChartData): TabularResult {
  const indicators = data.indicators ?? []
  const rawSeries = data.series
  const series = (
    Array.isArray(rawSeries) ? rawSeries : []
  ) as F0DataChartRadarSeries[]
  const seriesNames = series.map((s) => s.name)
  const columns = ["Indicator", ...seriesNames]

  const rows = indicators.map((ind, i) => {
    const row: Record<string, unknown> = {
      Indicator: typeof ind === "string" ? ind : ind.name,
    }
    for (const s of series) {
      row[s.name] = s.data[i] ?? null
    }
    return row
  })

  return { columns, rows }
}

function gaugeToTabular(data: DashboardChartData): TabularResult {
  const gauge = data.series as { value: number; name?: string }
  return {
    columns: ["Name", "Value"],
    rows: [{ Name: gauge?.name ?? "Value", Value: gauge?.value ?? 0 }],
  }
}

function heatmapToTabular(data: DashboardChartData): TabularResult {
  const xCats = data.xCategories ?? []
  const yCats = data.yCategories ?? []
  const points = data.data ?? []

  const rows = points.map(([x, y, value]) => ({
    X: xCats[x] ?? x,
    Y: yCats[y] ?? y,
    Value: value,
  }))

  return { columns: ["X", "Y", "Value"], rows }
}

/**
 * One row per point, long format — the same choice heatmap makes for its
 * cells. The Series and Label columns stay in the header even when unused, so
 * a single-series scatter and a colour-split one export the same shape.
 *
 * The axis names are user-controlled (LLM-generated on the chat path), so two
 * measures called the same thing, or one called "Series", is an ordinary
 * outcome. Rows are therefore keyed by fixed ids and the names used only as
 * header labels — otherwise a later computed key silently overwrites an
 * earlier one and a column's data vanishes from the table and every export.
 */
function scatterToTabular(
  config: ScatterChartConfig,
  data: DashboardChartData
): TabularResult {
  const rows = (data.scatterSeries ?? []).flatMap((series) =>
    series.data.map((point) => ({
      series: series.name,
      label: Array.isArray(point) ? "" : (point.label ?? ""),
      x: Array.isArray(point) ? point[0] : point.x,
      y: Array.isArray(point) ? point[1] : point.y,
    }))
  )

  return {
    columns: [
      "Series",
      "Label",
      config.xAxisName ?? "X",
      config.yAxisName ?? "Y",
    ],
    keys: ["series", "label", "x", "y"],
    rows,
  }
}
