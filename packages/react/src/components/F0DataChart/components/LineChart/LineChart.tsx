import { useRef } from "react"

import type { F0DataChartLineProps } from "../../types"

import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useLineChartOptions } from "./useLineChartOptions"

export const LineChart = (props: F0DataChartLineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useLineChartOptions(ref, props)
  const chartRef = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)
  useLegendInteraction(chartRef)

  return <div ref={ref} className="h-full w-full" />
}
