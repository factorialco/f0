import { useRef } from "react"

import type { F0DataChartRadarProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useRadarChartOptions } from "./useRadarChartOptions"

export const RadarChart = (props: F0DataChartRadarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useRadarChartOptions(ref, props)
  const chartRef = useEChartsInstance(ref, options)
  useLegendInteraction(chartRef)

  return <div ref={ref} className="h-full w-full" />
}
