import type {
  F0DataChartBarSeries,
  F0DataChartFunnelSeries,
  F0DataChartLineSeries,
  F0DataChartPieSeries,
  F0DataChartRadarIndicator,
  F0DataChartRadarSeries,
} from "@/kits/F0DataChart"

import type { DashboardChartConfig, DashboardChartData } from "../types"

// ---------------------------------------------------------------------------
// Canonical intermediate shape
// ---------------------------------------------------------------------------

/**
 * The common denominator for all chart data. Every chart type can be
 * converted to/from this shape, which makes it the bridge for
 * cross-type transformations.
 *
 * Adding support for a new chart type only requires two functions:
 * one in `toCanonical` and one in `fromCanonical`.
 */
export interface CanonicalChartData {
  categories: string[]
  series: { name: string; data: number[] }[]
}

// ---------------------------------------------------------------------------
// Source → Canonical
// ---------------------------------------------------------------------------

/** Extract a numeric value from a data point that can be a plain number or {value, target} */
function numericValue(point: unknown): number {
  if (typeof point === "number") return point
  if (point != null && typeof point === "object" && "value" in point) {
    return (point as { value: number }).value
  }
  return 0
}

function barLineToCanonical(data: DashboardChartData): CanonicalChartData {
  const categories = data.categories ?? []
  const rawSeries = data.series

  // May arrive as funnel-shaped single object (after a previous transform)
  if (rawSeries && !Array.isArray(rawSeries) && "data" in rawSeries) {
    const fs = rawSeries as {
      name: string
      data: { name: string; value: number }[]
    }
    if (
      Array.isArray(fs.data) &&
      fs.data.length > 0 &&
      typeof fs.data[0] === "object" &&
      "name" in fs.data[0]
    ) {
      return {
        categories: fs.data.map((d) => d.name),
        series: [{ name: fs.name, data: fs.data.map((d) => d.value) }],
      }
    }
  }

  const series = (Array.isArray(rawSeries) ? rawSeries : []) as
    | F0DataChartBarSeries[]
    | F0DataChartLineSeries[]

  return {
    categories,
    series: series.map((s) => ({
      name: s.name,
      data: ((s as { name: string; data?: unknown[] }).data ?? []).map(
        numericValue
      ),
    })),
  }
}

function funnelToCanonical(data: DashboardChartData): CanonicalChartData {
  if (Array.isArray(data.series)) {
    // Bar/line shaped
    return barLineToCanonical(data)
  }
  const fs = data.series as F0DataChartFunnelSeries
  if (!fs?.data) return { categories: [], series: [] }
  return {
    categories: fs.data.map((d) => d.name),
    series: [{ name: fs.name, data: fs.data.map((d) => d.value) }],
  }
}

function pieToCanonical(data: DashboardChartData): CanonicalChartData {
  const ps = data.series as F0DataChartPieSeries
  if (!ps?.data) return { categories: [], series: [] }
  return {
    categories: ps.data.map((d) => d.name),
    series: [{ name: ps.name, data: ps.data.map((d) => d.value) }],
  }
}

function radarToCanonical(data: DashboardChartData): CanonicalChartData {
  const indicators = data.indicators ?? []
  const series = (
    Array.isArray(data.series) ? data.series : []
  ) as F0DataChartRadarSeries[]
  return {
    categories: indicators.map((ind) =>
      typeof ind === "string" ? ind : ind.name
    ),
    series: series.map((s) => ({ name: s.name, data: [...s.data] })),
  }
}

function gaugeToCanonical(data: DashboardChartData): CanonicalChartData {
  const g = data.series as { value: number; name?: string } | undefined
  return {
    categories: [g?.name ?? "Value"],
    series: [{ name: "Value", data: [g?.value ?? 0] }],
  }
}

function heatmapToCanonical(data: DashboardChartData): CanonicalChartData {
  const xCats = data.xCategories ?? []
  const yCats = data.yCategories ?? []
  const points = data.data ?? []

  if (xCats.length === 0 || yCats.length === 0) {
    return { categories: [], series: [] }
  }

  // Build a lookup map for O(1) access instead of O(n) .find per cell
  const pointMap = new Map<string, number>()
  for (const [x, y, v] of points) {
    pointMap.set(`${x},${y}`, v)
  }

  // Pivot: each yCategory becomes a series, each xCategory a category
  const series = yCats.map((yLabel, yIdx) => ({
    name: yLabel,
    data: xCats.map((_, xIdx) => pointMap.get(`${xIdx},${yIdx}`) ?? 0),
  }))

  return { categories: xCats, series }
}

/**
 * Detect the actual shape of the data regardless of what `chart.type` says.
 * After a chart type transform, `item.chart.type` may have changed but the
 * data returned by `fetchData` still has its original shape.
 */
export function detectDataShape(
  data: DashboardChartData,
  hint?: DashboardChartConfig["type"]
): DashboardChartConfig["type"] {
  // Heatmap: has xCategories/yCategories + data tuples
  if (
    data.xCategories?.length ||
    data.yCategories?.length ||
    (data.data &&
      Array.isArray(data.data) &&
      data.data.length > 0 &&
      Array.isArray(data.data[0]))
  ) {
    return "heatmap"
  }
  // Radar: has indicators
  if (data.indicators?.length) {
    return "radar"
  }
  // Gauge: series is a single object with a `value` property (not an array)
  if (
    data.series &&
    !Array.isArray(data.series) &&
    "value" in data.series &&
    typeof (data.series as { value: unknown }).value === "number"
  ) {
    return "gauge"
  }
  // Funnel/Pie: series is a single object with a `data` array of {name, value}.
  // Both shapes are structurally identical — use the hint to disambiguate.
  if (data.series && !Array.isArray(data.series) && "data" in data.series) {
    return hint === "pie" ? "pie" : "funnel"
  }
  // Bar/Line: series is an array
  return "bar"
}

/**
 * Convert any chart data to the canonical intermediate shape.
 * The `sourceType` tells us how to interpret `data`. When omitted,
 * the shape is auto-detected (safer after chart type transforms).
 */
export function toCanonical(
  data: DashboardChartData,
  sourceType?: DashboardChartConfig["type"]
): CanonicalChartData {
  const effectiveType = sourceType ?? detectDataShape(data)
  switch (effectiveType) {
    case "bar":
    case "line":
      return barLineToCanonical(data)
    case "funnel":
      return funnelToCanonical(data)
    case "pie":
      return pieToCanonical(data)
    case "radar":
      return radarToCanonical(data)
    case "gauge":
      return gaugeToCanonical(data)
    case "heatmap":
      return heatmapToCanonical(data)
  }
}

// ---------------------------------------------------------------------------
// Canonical → Target data shape
// ---------------------------------------------------------------------------

function canonicalToBarLine(canonical: CanonicalChartData): DashboardChartData {
  return {
    categories: canonical.categories,
    series: canonical.series.map((s) => ({
      name: s.name,
      data: s.data,
    })) as F0DataChartBarSeries[],
  }
}

function canonicalToFunnel(canonical: CanonicalChartData): DashboardChartData {
  const firstSeries = canonical.series[0]
  return {
    series: {
      name: firstSeries?.name ?? "Funnel",
      data: canonical.categories.map((cat, i) => ({
        name: cat,
        value: firstSeries?.data[i] ?? 0,
      })),
    } as F0DataChartFunnelSeries,
  }
}

function canonicalToPie(canonical: CanonicalChartData): DashboardChartData {
  const firstSeries = canonical.series[0]
  return {
    series: {
      name: firstSeries?.name ?? "Distribution",
      data: canonical.categories.map((cat, i) => ({
        name: cat,
        value: firstSeries?.data[i] ?? 0,
      })),
    } as F0DataChartPieSeries,
  }
}

function canonicalToRadar(canonical: CanonicalChartData): DashboardChartData {
  // Find the max value per category across all series for indicator max
  const maxPerCategory = canonical.categories.map((_, i) =>
    Math.max(...canonical.series.map((s) => s.data[i] ?? 0), 1)
  )

  return {
    indicators: canonical.categories.map(
      (cat, i): F0DataChartRadarIndicator => ({
        name: cat,
        max: Math.ceil(maxPerCategory[i] * 1.2), // 20% headroom
      })
    ),
    series: canonical.series.map(
      (s): F0DataChartRadarSeries => ({
        name: s.name,
        data: s.data,
      })
    ),
  }
}

function canonicalToGauge(canonical: CanonicalChartData): DashboardChartData {
  const firstValue = canonical.series[0]?.data[0] ?? 0
  return {
    series: {
      value: firstValue,
      name: canonical.categories[0] ?? "Value",
    },
    categories: undefined,
  }
}

/**
 * Convert canonical data to the target chart type's expected data shape.
 */
export function fromCanonical(
  canonical: CanonicalChartData,
  targetType: DashboardChartConfig["type"]
): DashboardChartData {
  switch (targetType) {
    case "bar":
    case "line":
      return canonicalToBarLine(canonical)
    case "funnel":
      return canonicalToFunnel(canonical)
    case "pie":
      return canonicalToPie(canonical)
    case "radar":
      return canonicalToRadar(canonical)
    case "gauge":
      return canonicalToGauge(canonical)
    case "heatmap":
      // Heatmap needs 2D data — not meaningful from 1D canonical
      return { xCategories: [], yCategories: [], data: [] }
  }
}

// ---------------------------------------------------------------------------
// Compatibility check — which target types are valid for a given source?
// ---------------------------------------------------------------------------

/**
 * Returns the set of chart types that the given source type can be
 * meaningfully converted to. Used by ChartItem to filter the toggle
 * options so the user never picks a combination that would crash or
 * produce empty/meaningless output.
 */
export function compatibleTargetTypes(
  sourceType: DashboardChartConfig["type"]
): Set<DashboardChartConfig["type"] | "table"> {
  const targets = new Set<DashboardChartConfig["type"] | "table">()

  // Table is always available — chartDataToTabular handles every type
  targets.add("table")

  // The source type itself is always valid
  targets.add(sourceType)

  switch (sourceType) {
    case "bar":
    case "line":
      // Multi-series: bar ↔ line freely. Funnel/pie only make sense with
      // one series (they take the first and drop the rest), so they're
      // included — the adapter handles the lossy conversion gracefully.
      targets.add("bar")
      targets.add("line")
      targets.add("funnel")
      targets.add("radar")
      // Pie is only useful for single-series part-of-whole data — skip for
      // multi-series sources since the result is confusing.
      // (The caller can check series count to decide; here we include it
      // since single-series bar/line → pie is valid.)
      targets.add("pie")
      break

    case "funnel":
    case "pie":
      // Single-series shapes → can go to everything except heatmap
      targets.add("bar")
      targets.add("line")
      targets.add("funnel")
      targets.add("pie")
      targets.add("radar")
      break

    case "radar":
      // Radar indicators become categories → can go to bar/line/funnel/pie
      targets.add("bar")
      targets.add("line")
      targets.add("funnel")
      targets.add("pie")
      break

    case "gauge":
      // Single value — only table and itself make sense
      break

    case "heatmap":
      // 2D grid pivots to multi-series → bar/line work, but not pie/funnel
      targets.add("bar")
      targets.add("line")
      break
  }

  return targets
}

// ---------------------------------------------------------------------------
// Default chart configs
// ---------------------------------------------------------------------------

/**
 * Sensible default config for a newly transformed chart type.
 * Only includes the `type` discriminant and type-specific defaults —
 * shared props like `valueFormatter` should be preserved from the
 * source config by the caller.
 */
export function defaultChartConfig(
  type: DashboardChartConfig["type"]
): DashboardChartConfig {
  switch (type) {
    case "bar":
      return { type: "bar", orientation: "vertical" }
    case "line":
      return { type: "line", lineType: "linear", showArea: true }
    case "funnel":
      return { type: "funnel", showConversion: true, colorScale: true }
    case "pie":
      return { type: "pie", innerRadius: 0, showLabels: true }
    case "radar":
      return { type: "radar", showArea: true }
    case "gauge":
      return { type: "gauge", showValue: true }
    case "heatmap":
      return { type: "heatmap" }
  }
}
