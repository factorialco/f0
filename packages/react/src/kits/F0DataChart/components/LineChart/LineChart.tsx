import { useRef } from "react"

import type { F0DataChartLineProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useLineChartOptions } from "./useLineChartOptions"

export const LineChart = (props: F0DataChartLineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useLineChartOptions(ref, props, size)
  const chartRef = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)
  useLegendInteraction(chartRef)

  // ECharts (zrender) sets `cursor: pointer` on the canvas element via inline
  // style whenever an axis label has `triggerEvent: true` (which we need for
  // the truncation tooltip). `axisLabel.cursor` is ignored for canvas-rendered
  // labels, so `useAxisLabelTooltip` toggles `data-axis-hover="true"` on the
  // container while the cursor is over an axis label, and the Tailwind
  // arbitrary variant below scopes the `cursor: default !important` reset to
  // exactly that window — leaving the rest of the chart with its normal
  // pointer cursor over data points.
  return (
    <div
      ref={ref}
      className="h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
    />
  )
}
