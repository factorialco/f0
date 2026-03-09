import { useRef } from "react"

import type { F0DataChartBarProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useBarChartOptions } from "./useBarChartOptions"

export const BarChart = (props: F0DataChartBarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useBarChartOptions(ref, props)
  useEChartsInstance(ref, options)

  return <div ref={ref} className="h-full w-full" />
}
