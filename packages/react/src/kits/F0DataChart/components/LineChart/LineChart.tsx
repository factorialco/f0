import { useRef } from "react"

import type { F0DataChartLineProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useAreaSelection } from "../../utils/useAreaSelection"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { usePointClick } from "../../utils/usePointClick"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useLineChartOptions } from "./useLineChartOptions"

export const LineChart = (props: F0DataChartLineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useLineChartOptions(ref, props, size)
  const chartRef = useEChartsInstance(ref, options)
  useAreaSelection(chartRef, props, options)
  // "plot", not "mark": a line is a few pixels wide, so requiring a hit on the
  // line itself makes the action unusable. Same reason the tooltip here is
  // axis-triggered — the whole column is one target.
  usePointClick(
    chartRef,
    props.areaSelection?.active ? undefined : props.onPointClick,
    "plot"
  )
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)
  useLegendInteraction(chartRef, props.onLegendSelectionChange)

  return <div ref={ref} className="h-full w-full" />
}
