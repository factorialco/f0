import type {
  F0DataChartBarSeries,
  F0DataChartLineSeries,
} from "@/components/F0DataChart"

import { F0DataChart } from "@/components/F0DataChart/F0DataChart"
import { cn } from "@/lib/utils"

import type { ChatChartSeries, F0ChatChartProps } from "./types"

const MAX_LABEL_LENGTH = 12

function truncateLabel(label: string): string {
  if (label.length <= MAX_LABEL_LENGTH) return label
  return label.slice(0, MAX_LABEL_LENGTH - 1) + "\u2026"
}

function toBarSeries(series: ChatChartSeries[]): F0DataChartBarSeries[] {
  return series.map((s) => ({ name: s.name, data: s.data }))
}

function toLineSeries(series: ChatChartSeries[]): F0DataChartLineSeries[] {
  return series.map((s) => ({ name: s.name, data: s.data }))
}

/**
 * Card widget that renders an interactive chart inside the AI chat.
 *
 * Modeled after the dashboard `DashboardItem` card: rounded border,
 * title, optional description, and a content area with the chart.
 * The LLM sends chart configuration via the `displayChart` frontend
 * tool, and this component maps it to `F0DataChart`.
 */
export function F0ChatChart(props: F0ChatChartProps) {
  const { title, description, categories, ...rest } = props

  const chartProps =
    rest.type === "bar"
      ? {
          type: "bar" as const,
          categories,
          series: toBarSeries(rest.series),
          stacked: rest.stacked,
          showLegend: false,
          categoryFormatter: truncateLabel,
        }
      : {
          type: "line" as const,
          categories,
          series: toLineSeries(rest.series),
          lineType: rest.lineType,
          showArea: rest.showArea,
          showDots: rest.showDots,
          showLegend: false,
          categoryFormatter: truncateLabel,
        }

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg overflow-hidden @container",
        "border border-solid border-f1-border-secondary",
        "bg-f1-background"
      )}
    >
      <div className="flex flex-col gap-0.5 p-4 pb-0">
        <h3 className="truncate text-lg font-semibold text-f1-foreground">
          {title}
        </h3>
        {description && (
          <p className="truncate text-sm text-f1-foreground-secondary">
            {description}
          </p>
        )}
      </div>
      <div className="aspect-[5/4] w-full p-4 pb-3 @[350px]:aspect-[4/3] @[500px]:aspect-[2/1]">
        <F0DataChart {...chartProps} />
      </div>
    </div>
  )
}
