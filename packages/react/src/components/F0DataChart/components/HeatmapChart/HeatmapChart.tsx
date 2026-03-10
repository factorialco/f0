import { useRef } from "react"

import type { F0DataChartHeatmapProps } from "../../types"

import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useHeatmapChartOptions } from "./useHeatmapChartOptions"

export const HeatmapChart = (props: F0DataChartHeatmapProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const options = useHeatmapChartOptions(ref, props)
  useEChartsInstance(ref, options)

  return <div ref={ref} className="h-full w-full" />
}
