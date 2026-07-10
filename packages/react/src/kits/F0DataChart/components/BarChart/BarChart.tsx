import { useRef } from "react"

import type { F0DataChartBarProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useBarChartOptions } from "./useBarChartOptions"

export const BarChart = (props: F0DataChartBarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useBarChartOptions(ref, props, size)
  const chart = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chart, ref, theme)
  useLegendInteraction(chart)

  // See LineChart.tsx for the rationale on the scoped axis-label cursor reset.
  return (
    <div
      ref={ref}
      className="h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default [&_canvas]:animate-in [&_canvas]:fade-in [&_canvas]:duration-200"
    />
  )
}
