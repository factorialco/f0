import { useRef } from "react"

import type { F0DataChartPieProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { usePointClick } from "../../utils/usePointClick"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { usePieChartOptions } from "./usePieChartOptions"

export const PieChart = (props: F0DataChartPieProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = usePieChartOptions(ref, props, size)
  const chartRef = useEChartsInstance(ref, options)
  usePointClick(chartRef, props.onPointClick)
  useLegendInteraction(chartRef, props.onLegendSelectionChange)

  return <div ref={ref} className="h-full w-full" />
}
