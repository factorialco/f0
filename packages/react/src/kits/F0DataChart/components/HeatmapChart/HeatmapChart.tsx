import { useRef } from "react"

import type { F0DataChartHeatmapProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useHeatmapChartOptions } from "./useHeatmapChartOptions"

export const HeatmapChart = (props: F0DataChartHeatmapProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useHeatmapChartOptions(ref, props, size)
  const chartRef = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)

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
        className="h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
      />
      {size === "sm" && (
        <div className="absolute inset-0 flex items-center justify-center bg-f1-background text-sm font-medium text-f1-foreground-secondary">
          Not supported
        </div>
      )}
    </div>
  )
}
