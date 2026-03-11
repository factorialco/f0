import type {
  F0DataChartBarSeries,
  F0DataChartFunnelSeries,
  F0DataChartLineSeries,
  F0DataChartPieSeries,
  F0DataChartProps,
  F0DataChartRadarSeries,
} from "@/components/F0DataChart"

import { F0DataChart } from "@/components/F0DataChart"
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

function toRadarSeries(series: ChatChartSeries[]): F0DataChartRadarSeries[] {
  return series.map((s) => ({ name: s.name, data: s.data }))
}

function buildChartProps(props: F0ChatChartProps): {
  chartProps: F0DataChartProps
  useSquareAspect: boolean
} {
  switch (props.type) {
    case "bar":
      return {
        chartProps: {
          type: "bar",
          categories: props.categories,
          series: toBarSeries(props.series),
          stacked: props.stacked,
          showLegend: false,
          categoryFormatter: truncateLabel,
        },
        useSquareAspect: false,
      }
    case "line":
      return {
        chartProps: {
          type: "line",
          categories: props.categories,
          series: toLineSeries(props.series),
          lineType: props.lineType,
          showArea: props.showArea,
          showDots: props.showDots,
          showLegend: false,
          categoryFormatter: truncateLabel,
        },
        useSquareAspect: false,
      }
    case "funnel": {
      const funnelSeries: F0DataChartFunnelSeries = {
        name: "Funnel",
        data: props.stages.map((s) => ({ name: s.name, value: s.value })),
      }
      return {
        chartProps: {
          type: "funnel",
          series: funnelSeries,
          showConversion: props.showConversion,
          showLegend: false,
        },
        useSquareAspect: false,
      }
    }
    case "pie": {
      const pieSeries: F0DataChartPieSeries = {
        name: "Pie",
        data: props.segments.map((s) => ({ name: s.name, value: s.value })),
      }
      return {
        chartProps: {
          type: "pie",
          series: pieSeries,
          innerRadius: props.donut ? 60 : undefined,
          showLegend: false,
        },
        useSquareAspect: true,
      }
    }
    case "radar":
      return {
        chartProps: {
          type: "radar",
          indicators: props.indicators,
          series: toRadarSeries(props.series),
          showLegend: props.series.length > 1,
        },
        useSquareAspect: true,
      }
    case "gauge":
      return {
        chartProps: {
          type: "gauge",
          value: props.value,
          min: props.min,
          max: props.max,
          name: props.name,
        },
        useSquareAspect: true,
      }
    case "heatmap":
      return {
        chartProps: {
          type: "heatmap",
          xCategories: props.xCategories,
          yCategories: props.yCategories,
          data: props.data,
          showLabels: true,
        },
        useSquareAspect: false,
      }
  }
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
  const { title, description } = props
  const { chartProps, useSquareAspect } = buildChartProps(props)

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
      <div
        className={cn(
          "w-full p-4 pb-3",
          useSquareAspect
            ? "aspect-square @[350px]:aspect-[4/3] @[500px]:aspect-[3/2]"
            : "aspect-[5/4] @[350px]:aspect-[4/3] @[500px]:aspect-[2/1]"
        )}
      >
        <F0DataChart {...chartProps} />
      </div>
    </div>
  )
}
