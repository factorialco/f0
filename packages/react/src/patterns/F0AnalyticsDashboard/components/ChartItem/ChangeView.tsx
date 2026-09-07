import type { F0DataChartProps } from "@/kits/F0DataChart"

import { F0DataChart } from "@/kits/F0DataChart"
import { tooltipValueFormat } from "@/kits/F0DataChart/utils/options"
import { useI18n } from "@/lib/providers/i18n"

import type { DashboardCategoryComparison } from "../../types"

import { TrendBadge } from "../TrendBadge/TrendBadge"
import {
  changeChartProps,
  changeRowLabel,
  changeRows,
  type ChangeViewCopy,
} from "./changeRows"

/**
 * The widget's "Show change" reading: the same categories ranked by how much
 * they moved. With numeric deltas that is a diverging bar chart; without any,
 * there is nothing to size a bar by, so it is a list of the labels instead.
 */
export function ChangeView({
  chart,
  comparison,
}: {
  chart: F0DataChartProps
  comparison: DashboardCategoryComparison
}) {
  const translations = useI18n()
  const copy: ChangeViewCopy = {
    change: translations.ai.dashboardItem.comparison.change,
    newCategory: translations.ai.dashboardItem.comparison.newCategory,
    goneCategory: translations.ai.dashboardItem.comparison.goneCategory,
    more: (count) =>
      translations.t("ai.dashboardItem.comparison.more", { count }),
  }
  const format =
    "valueFormatter" in chart
      ? tooltipValueFormat(chart.tooltipValueFormatter, chart.valueFormatter)
      : tooltipValueFormat()

  const { rows, more } = changeRows(chart, comparison, format)

  if (rows.some((row) => row.delta !== undefined)) {
    return <F0DataChart {...changeChartProps(rows, more, copy, format)} />
  }

  return (
    <ol className="m-0 flex list-none flex-col gap-1 p-0 text-base">
      {rows.map((row) => (
        <li key={row.name} className="flex items-center justify-between gap-2">
          <span className="truncate text-f1-foreground">
            {changeRowLabel(row, copy)}
          </span>
          <TrendBadge
            trend={{
              direction: row.direction,
              sentiment: row.sentiment,
              text: row.label,
              srText: row.label,
            }}
          />
        </li>
      ))}
      {more > 0 && (
        <li className="text-f1-foreground-secondary">{copy.more(more)}</li>
      )}
    </ol>
  )
}
