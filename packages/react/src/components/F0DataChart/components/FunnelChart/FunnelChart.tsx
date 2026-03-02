import { useRef } from "react"

import type { F0DataChartFunnelProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useFunnelChartOptions } from "./useFunnelChartOptions"

export const FunnelChart = (props: F0DataChartFunnelProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useFunnelChartOptions(ref, props)
  useEChartsInstance(ref, options)

  return <div ref={ref} className="h-full w-full" />
}
