import type {
  F0DataChartPieDataPoint,
  F0DataChartProps,
} from "@/kits/F0DataChart"

import type { DashboardCategoryComparison } from "../../types"

/**
 * Glyphs, not copy: the arrow is the mark, the label beside it is the host's.
 * Flat gets none, matching the trend badge, which draws no arrow for it.
 */
const DIRECTION_GLYPH = { up: "▲", down: "▼", flat: "" } as const

function markCategory(
  category: string,
  label: string,
  comparison: DashboardCategoryComparison,
  newLabel: string
): string {
  const trend = comparison.byCategory[category]
  if (trend?.label) {
    return [label, DIRECTION_GLYPH[trend.direction], trend.label]
      .filter(Boolean)
      .join(" ")
  }
  return comparison.added?.includes(category) ? `${label} (${newLabel})` : label
}

/** Pie and funnel differ only in their discriminant: both name their points. */
function markSeriesNames<S extends { data: F0DataChartPieDataPoint[] }>(
  series: S,
  comparison: DashboardCategoryComparison,
  newLabel: string
): S {
  return {
    ...series,
    data: series.data.map((point) => ({
      ...point,
      name: markCategory(point.name, point.name, comparison, newLabel),
    })),
  }
}

/**
 * Draw a per-category comparison into the labels a chart renders.
 *
 * A bar chart gets it through its `categoryFormatter` — the seam every drawn
 * category label and axis tick goes through — composed on top of the host's
 * own formatter so a formatted category stays formatted. Pie and funnel have
 * no such formatter: their labels, legend and tooltip all read a data point's
 * `name`, so the mark goes there instead.
 *
 * Every other type passes through untouched, as the same object: line and its
 * kin are time series, where the faded baseline series carries the comparison
 * and a mark per bucket would only crowd the axis.
 */
export function markCategoryComparison(
  props: F0DataChartProps,
  comparison: DashboardCategoryComparison | undefined,
  newLabel: string
): F0DataChartProps {
  if (!comparison) return props

  if (props.type === "bar") {
    const { categoryFormatter } = props
    return {
      ...props,
      categoryFormatter: (value) =>
        markCategory(
          value,
          categoryFormatter ? categoryFormatter(value) : value,
          comparison,
          newLabel
        ),
    }
  }

  if (props.type === "pie") {
    return {
      ...props,
      series: markSeriesNames(props.series, comparison, newLabel),
    }
  }

  if (props.type === "funnel") {
    return {
      ...props,
      series: markSeriesNames(props.series, comparison, newLabel),
    }
  }

  return props
}
