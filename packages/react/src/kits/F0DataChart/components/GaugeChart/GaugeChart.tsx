import { useRef } from "react"

import type { F0DataChartGaugeProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useGaugeChartOptions } from "./useGaugeChartOptions"

export const GaugeChart = (props: F0DataChartGaugeProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useGaugeChartOptions(ref, props, size)
  useEChartsInstance(ref, options)

  return (
    <div
      ref={ref}
      className="h-full w-full [&_canvas]:animate-in [&_canvas]:fade-in [&_canvas]:duration-200"
    />
  )
}
