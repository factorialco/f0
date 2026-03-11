import { useRef } from "react"

import type { F0DataChartPieProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { usePieChartOptions } from "./usePieChartOptions"

export const PieChart = (props: F0DataChartPieProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = usePieChartOptions(ref, props)
  useEChartsInstance(ref, options)

  return <div ref={ref} className="h-full w-full" />
}
