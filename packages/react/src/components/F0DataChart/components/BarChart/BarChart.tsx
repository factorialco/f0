import { useRef } from "react"

import type { F0DataChartBarProps } from "../../types"

import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useBarChartOptions } from "./useBarChartOptions"

export const BarChart = (props: F0DataChartBarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useBarChartOptions(ref, props)
  const chartRef = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)
  useLegendInteraction(chartRef)

  return <div ref={ref} className="h-full w-full" />
}
