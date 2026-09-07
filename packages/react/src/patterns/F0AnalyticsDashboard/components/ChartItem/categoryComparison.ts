import type {
  F0DataChartCategoryComparison,
  F0DataChartProps,
} from "@/kits/F0DataChart"
import type { I18nContextType } from "@/lib/providers/i18n/i18n-provider"

import { tooltipValueFormat } from "@/kits/F0DataChart/utils/options"

import type { DashboardCategoryComparison } from "../../types"

import { trendSentiment } from "../TrendBadge/TrendBadge"

type CategoryChart = Extract<
  F0DataChartProps,
  { type: "bar" | "pie" | "funnel" }
>

/** The chart types whose marks are categories, which is what a comparison is keyed by. */
export function isCategoryChart(
  chart: F0DataChartProps
): chart is CategoryChart {
  return chart.type === "bar" || chart.type === "pie" || chart.type === "funnel"
}

/**
 * The value each category currently shows. A bar chart reads its first drawn
 * series — a muted one is the baseline, not the reading — and pie and funnel
 * read their points.
 */
export function categoryValues(chart: CategoryChart): Map<string, number> {
  if (chart.type !== "bar") {
    return new Map(chart.series.data.map((point) => [point.name, point.value]))
  }
  const series = chart.series.find((s) => !s.muted) ?? chart.series[0]
  return new Map(
    chart.categories.flatMap((category, index) => {
      const point = series?.data[index]
      const value = typeof point === "number" ? point : point?.value
      return value === undefined ? [] : [[category, value]]
    })
  )
}

/**
 * Hand the chart its comparison as a tooltip line per category: the host's
 * label in the trend's tone, with the baseline value when the trend carries a
 * numeric delta. Added categories say they are new. Any other chart type is
 * returned as the same object.
 */
export function withTooltipComparison(
  chart: F0DataChartProps,
  comparison: DashboardCategoryComparison | undefined,
  i18n: I18nContextType
): F0DataChartProps {
  if (!comparison || !isCategoryChart(chart)) return chart

  const values = categoryValues(chart)
  const format = tooltipValueFormat(
    chart.tooltipValueFormatter,
    chart.valueFormatter
  )
  const categoryComparison: Record<string, F0DataChartCategoryComparison> = {}

  for (const [name, trend] of Object.entries(comparison.byCategory)) {
    if (!trend.label) continue
    const entry: F0DataChartCategoryComparison = {
      label: trend.label,
      tone: trendSentiment(trend),
    }
    const value = values.get(name)
    if (trend.delta !== undefined && value !== undefined) {
      entry.description = i18n.t("ai.dashboardItem.comparison.previous", {
        value: format(value - trend.delta),
      })
    }
    categoryComparison[name] = entry
  }
  for (const name of comparison.added ?? []) {
    categoryComparison[name] ??= {
      label: i18n.ai.dashboardItem.comparison.newThisPeriod,
    }
  }

  return { ...chart, categoryComparison }
}
