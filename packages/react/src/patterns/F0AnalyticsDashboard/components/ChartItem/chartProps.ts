import type { F0DataChartProps } from "@/kits/F0DataChart"

import type {
  DashboardChartConfig,
  DashboardChartData,
  DashboardChartItem,
} from "../../types"

import {
  defaultChartConfig,
  detectDataShape,
  fromCanonical,
  toCanonical,
} from "../../utils/chartDataAdapter"

/**
 * Build F0DataChart props. When `overrideType` differs from the item's
 * original chart type, the data is converted via the canonical adapter.
 *
 * @internal Exported for unit tests — not part of the package's public API.
 */
export function buildChartProps(
  item: DashboardChartItem,
  data: DashboardChartData,
  overrideType?: DashboardChartConfig["type"],
  overrideOrientation?: "vertical" | "horizontal"
): F0DataChartProps {
  return muteComparisonSeries(
    buildBaseChartProps(item, data, overrideType, overrideOrientation),
    item.chart
  )
}

/** Only bar and line carry the named series that can pair up; the rest pass through. */
function muteComparisonSeries(
  props: F0DataChartProps,
  chart: DashboardChartConfig
): F0DataChartProps {
  const names =
    "comparisonSeriesNames" in chart ? chart.comparisonSeriesNames : undefined
  if (!names?.length) return props

  if (props.type === "line") {
    return {
      ...props,
      series: props.series.map((series) =>
        // Two solid lines in the same colour family are the hardest pair to
        // tell apart, hence dashed as well as faded.
        names.includes(series.name)
          ? { ...series, muted: true, dashed: true }
          : series
      ),
    }
  }

  if (props.type === "bar") {
    return {
      ...props,
      series: props.series.map((series) =>
        names.includes(series.name) ? { ...series, muted: true } : series
      ),
    }
  }

  return props
}

function buildBaseChartProps(
  item: DashboardChartItem,
  data: DashboardChartData,
  overrideType?: DashboardChartConfig["type"],
  overrideOrientation?: "vertical" | "horizontal"
): F0DataChartProps {
  const targetType = overrideType ?? item.chart.type
  // Detect actual data shape — after a transform, item.chart.type may have
  // changed but the data from fetchData still has its original shape.
  const dataShape = detectDataShape(data, targetType)

  // When the data shape matches the target and chart type, pass through
  // directly to preserve type-specific features (targets, color overrides).
  if (
    targetType === dataShape &&
    targetType === item.chart.type &&
    !overrideOrientation
  ) {
    return buildNativeChartProps(item, data)
  }

  // Cross-type transform: auto-detect source shape → canonical → target
  const canonical = toCanonical(data)
  const adapted = fromCanonical(canonical, targetType)
  const config = defaultChartConfig(targetType)

  // Preserve shared props from the original config
  const shared: Record<string, unknown> = {}
  if ("valueFormatter" in item.chart && item.chart.valueFormatter) {
    shared.valueFormatter = item.chart.valueFormatter
  }
  if (
    "tooltipValueFormatter" in item.chart &&
    item.chart.tooltipValueFormatter
  ) {
    shared.tooltipValueFormatter = item.chart.tooltipValueFormatter
  }
  if ("showLegend" in item.chart) {
    shared.showLegend = item.chart.showLegend
  }
  // Only bar targets inherit the source config's `showLabels`. Other types keep
  // their own default, so transforming a pie (labels on by default) into a line
  // doesn't drag labels along. `undefined` is not an explicit value — letting it
  // through would clobber the target's default with "unset".
  if (
    targetType === "bar" &&
    "showLabels" in item.chart &&
    item.chart.showLabels !== undefined
  ) {
    shared.showLabels = item.chart.showLabels
  }

  // Build the final props by merging config + adapted data
  switch (targetType) {
    case "bar": {
      // Resolve orientation: explicit override > item config > default config
      const orientation =
        overrideOrientation ??
        ("orientation" in item.chart
          ? (item.chart as { orientation?: string }).orientation
          : undefined) ??
        (config as { orientation?: string }).orientation
      return {
        ...config,
        ...shared,
        ...(orientation ? { orientation } : {}),
        categories: adapted.categories ?? [],
        series: adapted.series,
      } as F0DataChartProps
    }
    case "line":
      return {
        ...config,
        ...shared,
        categories: adapted.categories ?? [],
        series: adapted.series,
      } as F0DataChartProps
    case "funnel":
      return {
        ...config,
        ...shared,
        series: adapted.series,
      } as F0DataChartProps
    case "pie":
      return {
        ...config,
        ...shared,
        series: adapted.series,
      } as F0DataChartProps
    case "radar":
      return {
        ...config,
        ...shared,
        indicators: adapted.indicators ?? [],
        series: adapted.series,
      } as F0DataChartProps
    case "gauge":
      return {
        ...config,
        ...shared,
        ...(adapted.series as { value: number; name?: string }),
      } as F0DataChartProps
    case "heatmap":
      return {
        ...config,
        ...shared,
        xCategories: adapted.xCategories ?? [],
        yCategories: adapted.yCategories ?? [],
        data: adapted.data ?? [],
      } as F0DataChartProps
    case "scatter":
      // Reached only when the data doesn't look like a scatter: `detectDataShape`
      // falls through to "bar" for an empty or errored result, which sends a
      // scatter-configured item down the conversion path. Renders the empty
      // state, so losing the axis names and pointSize that `shared` drops
      // doesn't matter here.
      return {
        ...config,
        ...shared,
        series: adapted.scatterSeries ?? [],
      } as F0DataChartProps
  }
}

/**
 * Build props for the native (non-transformed) chart type.
 * This is the original buildChartProps logic that passes data through
 * as-is, preserving type-specific features.
 */
function buildNativeChartProps(
  item: DashboardChartItem,
  data: DashboardChartData
): F0DataChartProps {
  const { chart } = item

  switch (chart.type) {
    case "funnel": {
      let funnelSeries = data.series
      if (Array.isArray(data.series)) {
        const canonical = toCanonical(data, "bar")
        funnelSeries = fromCanonical(canonical, "funnel").series
      }
      return { ...chart, series: funnelSeries } as F0DataChartProps
    }
    case "pie":
      return { ...chart, series: data.series } as F0DataChartProps
    case "radar":
      return {
        ...chart,
        indicators: data.indicators ?? [],
        series: data.series,
      } as F0DataChartProps
    case "gauge":
      return {
        ...chart,
        ...(data.series as { value: number; name?: string }),
      } as F0DataChartProps
    case "heatmap":
      return {
        ...chart,
        xCategories: data.xCategories ?? [],
        yCategories: data.yCategories ?? [],
        data: data.data ?? [],
      } as F0DataChartProps
    case "scatter":
      return {
        ...chart,
        series: data.scatterSeries ?? [],
      } as F0DataChartProps
    case "bar":
    case "line": {
      let { series } = data
      let categories = data.categories ?? []
      if (series && !Array.isArray(series)) {
        const canonical = toCanonical(data, "funnel")
        const adapted = fromCanonical(canonical, chart.type)
        series = adapted.series
        categories = adapted.categories ?? []
      }
      // Dropped from the spread: the chart kit is told which series are
      // baselines through `series.muted`, not by name.
      const { comparisonSeriesNames: _comparisonSeriesNames, ...chartProps } =
        chart
      return {
        ...chartProps,
        // Dashboard bar charts show value labels by default. Resolved after the
        // spread rather than before it: `...chart` carries `showLabels` even
        // when it is explicitly `undefined`, which would overwrite the default.
        ...(chart.type === "bar"
          ? { showLabels: chart.showLabels ?? true }
          : {}),
        categories,
        series,
      } as F0DataChartProps
    }
  }
}
