import * as echarts from "echarts"
import { AriaComponent } from "echarts/components"
import { type RefObject, useEffect, useRef } from "react"

// @ts-expect-error - Duplicate echarts types in dependency tree
echarts.use(AriaComponent)

/**
 * Manages the ECharts instance lifecycle: init, resize, option updates,
 * and cleanup. Shared across all ECharts-based F0 chart components.
 *
 * Accepts a ref to the container `<div>` so it can be shared with other
 * hooks that need access to the same DOM element (e.g. `useChartTheme`
 * for dark mode detection via `element.closest(".dark")`).
 */
export function useEChartsInstance(
  ref: RefObject<HTMLDivElement | null>,
  options: echarts.EChartsOption
): RefObject<echarts.ECharts | null> {
  const chart = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (ref.current) {
      chart.current = echarts.init(ref.current)

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

  useEffect(() => {
    chart.current?.setOption(options, true)
  }, [options])

  return chart
}
