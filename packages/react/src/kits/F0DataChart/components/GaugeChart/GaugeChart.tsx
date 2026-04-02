import { useRef } from "react"

import type { F0DataChartGaugeProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useGaugeChartOptions } from "./useGaugeChartOptions"

export const GaugeChart = (props: F0DataChartGaugeProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useGaugeChartOptions(ref, props)
  useEChartsInstance(ref, options)

  return <div ref={ref} className="h-full w-full" />
}
