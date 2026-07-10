import { useRef } from "react"

import type { F0DataChartRadarProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useRadarChartOptions } from "./useRadarChartOptions"

export const RadarChart = (props: F0DataChartRadarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useRadarChartOptions(ref, props, size)
  const chart = useEChartsInstance(ref, options)
  useLegendInteraction(chart)

  return (
    <div
      ref={ref}
      className="h-full w-full [&_canvas]:animate-in [&_canvas]:fade-in [&_canvas]:duration-200"
    />
  )
}
