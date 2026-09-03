import type { F0DataChartProps } from "@/kits/F0DataChart"

import type { DashboardCategoryComparison } from "../../types"

/** Glyphs, not copy: the arrow is the mark, the label beside it is the host's. */
const DIRECTION_GLYPH = { up: "▲", down: "▼", flat: "=" } as const

/**
 * The category label with its comparison appended — "Sales ▲ +4.2%", or the
 * `newLabel` for a category the compared period did not have. Returns the
 * label untouched for a category the comparison says nothing about.
 */
function markCategory(
  category: string,
  label: string,
  comparison: DashboardCategoryComparison,
  newLabel: string
): string {
  const trend = comparison.byCategory[category]
  if (trend?.label) {
    return `${label} ${DIRECTION_GLYPH[trend.direction]} ${trend.label}`
  }
  return comparison.added?.includes(category) ? `${label} (${newLabel})` : label
}

/**
 * Draw a per-category comparison into the labels a chart already renders.
 *
 * A bar chart gets it through its `categoryFormatter` — the seam every category
 * label, axis tick and quoted point already goes through — composed on top of
 * the host's own formatter so a formatted category stays formatted. Pie and
 * funnel have no such formatter: their labels, legend and tooltip all read a
 * data point's `name`, so the mark goes there instead.
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
      series: {
        ...props.series,
        data: props.series.data.map((point) => ({
          ...point,
          name: markCategory(point.name, point.name, comparison, newLabel),
        })),
      },
    }
  }

  if (props.type === "funnel") {
    return {
      ...props,
      series: {
        ...props.series,
        data: props.series.data.map((point) => ({
          ...point,
          name: markCategory(point.name, point.name, comparison, newLabel),
        })),
      },
    }
  }

  return props
}
