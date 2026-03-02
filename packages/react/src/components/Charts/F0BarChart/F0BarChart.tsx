import * as echarts from "echarts"
import { AriaComponent } from "echarts/components"
import { useEffect, useRef } from "react"

import { theme as f0LightTheme } from "../F0Chart/themes/f0.light"
import type { F0BarChartProps } from "./types"
import { useBarChartOptions } from "./useBarChartOptions"

// @ts-expect-error - Duplicate echarts types in dependency tree
echarts.use(AriaComponent)

export const F0BarChart = (props: F0BarChartProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const chart = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (ref.current) {
      chart.current = echarts.init(ref.current, f0LightTheme)

      const container = ref.current
      const resizeObserver = new ResizeObserver(() => {
        chart.current?.resize()
      })

      resizeObserver.observe(container)

      return () => {
        resizeObserver.disconnect()
        chart.current?.dispose()
      }
    }
  }, [ref])

  const options = useBarChartOptions(props)

  useEffect(() => {
    chart.current?.setOption(options, true)
  }, [options])

  return <div ref={ref} className="h-full w-full" />
}
