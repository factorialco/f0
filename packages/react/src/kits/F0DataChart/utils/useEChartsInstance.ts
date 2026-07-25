import * as echarts from "echarts"
import { AriaComponent } from "echarts/components"
import { type RefObject, useEffect, useRef, useState } from "react"

// @ts-expect-error - Duplicate echarts types in dependency tree
echarts.use(AriaComponent)

/** ECharts instance lifecycle. Init waits for a real, settled container size (0-sized init warns and stays blank); the instance is state so listener hooks re-attach when it is created late. */
export function useEChartsInstance(
  ref: RefObject<HTMLDivElement | null>,
  options: echarts.EChartsOption
): echarts.ECharts | null {
  const [instance, setInstance] = useState<echarts.ECharts | null>(null)

  const optionsRef = useRef(options)
  optionsRef.current = options

  // Stops the options effect re-applying what init just painted — a redundant
  // notMerge setOption rebuilds the chart and restarts its entrance animation.
  const appliedOptionsRef = useRef<echarts.EChartsOption | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    let chart: echarts.ECharts | null = null
    let settleTimer: number | undefined

    const init = () => {
      if (chart || container.clientWidth === 0 || container.clientHeight === 0)
        return
      chart = echarts.init(container)
      chart.setOption(optionsRef.current, true)
      appliedOptionsRef.current = optionsRef.current
      setInstance(chart)
    }

    init()

    // Mounted 0-sized: the container is growing inside a CSS transition. Wait
    // for the size to settle, re-checking at fire time (frame hiccups can
    // starve ResizeObserver ticks mid-transition), then paint once.
    const scheduleSettledInit = () => {
      window.clearTimeout(settleTimer)
      const scheduledWidth = container.clientWidth
      const scheduledHeight = container.clientHeight
      settleTimer = window.setTimeout(() => {
        if (
          container.clientWidth !== scheduledWidth ||
          container.clientHeight !== scheduledHeight
        ) {
          scheduleSettledInit()
          return
        }
        init()
      }, 120)
    }

    const resizeObserver = new ResizeObserver(() => {
      if (!chart) {
        scheduleSettledInit()
        return
      }
      if (!chart.isDisposed()) {
        chart.resize()
      }
    })

    resizeObserver.observe(container)

    return () => {
      window.clearTimeout(settleTimer)
      resizeObserver.disconnect()
      if (chart && !chart.isDisposed()) {
        chart.dispose()
      }
      setInstance(null)
    }
  }, [ref])

  useEffect(() => {
    if (!instance || instance.isDisposed()) return
    if (appliedOptionsRef.current === options) return
    appliedOptionsRef.current = options
    instance.setOption(options, true)
  }, [instance, options])

  return instance
}
