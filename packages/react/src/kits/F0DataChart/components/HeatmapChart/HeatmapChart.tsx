import { useRef } from "react"

import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import type { F0DataChartHeatmapProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useHeatmapChartOptions } from "./useHeatmapChartOptions"

export const HeatmapChart = (props: F0DataChartHeatmapProps) => {
  const i18n = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useHeatmapChartOptions(ref, props, size)
  const chart = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chart, ref, theme)

  // The chart container always stays mounted so the ECharts instance has a
  // stable DOM target across breakpoint transitions. At the `sm` breakpoint
  // we overlay a "Not supported" placeholder on top of the (still-rendered)
  // canvas — this matches the AI Analytics Figma at file
  // `1smmEIugmR0CNeu7NvK33y` node `10218-20575`, where the narrow chat
  // column shows a placeholder instead of the heatmap.
  return (
    <div className="relative h-full w-full">
      <div
        ref={ref}
        className="h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default [&_canvas]:animate-in [&_canvas]:fade-in [&_canvas]:duration-200"
      />
      {size === "sm" && (
        <div className="absolute inset-0 flex items-center justify-center bg-f1-background p-3 text-center text-sm font-medium text-f1-foreground-tertiary">
          {i18n.dataChart.heatmapNotSupported}
        </div>
      )}
    </div>
  )
}
