import { useRef } from "react"

import type { F0DataChartPieProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { usePieChartOptions } from "./usePieChartOptions"

export const PieChart = (props: F0DataChartPieProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = usePieChartOptions(ref, props, size)
  const chart = useEChartsInstance(ref, options)
  useLegendInteraction(chart)

  return <div ref={ref} className="h-full w-full" />
}
