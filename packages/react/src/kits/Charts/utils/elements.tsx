import { ComponentProps } from "react"
import { XAxis, YAxis } from "recharts"

import { AxisConfig } from "./types"

export function measureTextWidth(
  text: string,
  font = "12px Inter, sans-serif"
): number {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  if (context) {
    context.font = font
    return context.measureText(text).width
  }
  return 0
}

export const xAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof XAxis>> => ({
  dataKey: "x",
  domain: config?.domain,
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  ticks: config?.ticks,
  tickCount: config?.tickCount,
  tickFormatter: config?.tickFormatter,
})

export const yAxisProps = (
  config?: AxisConfig
): Partial<ComponentProps<typeof YAxis>> => ({
  tickLine: false,
  axisLine: false,
  domain: config?.domain,
  tickMargin: 8,
  ticks: config?.ticks,
  tickCount: config?.tickCount,
  tickFormatter: config?.tickFormatter,
})

export const cartesianGridProps = () => ({
  vertical: false,
  strokeDasharray: "4",
})

export const chartTooltipProps = (horizontal: boolean = false) => ({
  cursor: true,
  offset: horizontal ? 0 : 20,
  position: { y: horizontal ? undefined : 0, x: horizontal ? 120 : undefined },
  animationDuration: 100,
  isAnimationActive: true,
})
