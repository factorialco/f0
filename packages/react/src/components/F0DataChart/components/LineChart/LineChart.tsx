import { useRef } from "react"

import type { F0DataChartLineProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLineChartOptions } from "./useLineChartOptions"

export const LineChart = (props: F0DataChartLineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useLineChartOptions(ref, props)
  useEChartsInstance(ref, options)

  return <div ref={ref} className="h-full w-full" />
}
