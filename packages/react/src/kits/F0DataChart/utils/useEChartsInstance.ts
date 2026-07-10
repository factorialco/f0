import * as echarts from "echarts"
import { AriaComponent } from "echarts/components"
import { type RefObject, useEffect, useRef, useState } from "react"

// @ts-expect-error - Duplicate echarts types in dependency tree
echarts.use(AriaComponent)

/**
 * Manages the ECharts instance lifecycle: init, resize, option updates,
 * and cleanup. Shared across all ECharts-based F0 chart components.
 *
 * Accepts a ref to the container `<div>` so it can be shared with other
 * hooks that need access to the same DOM element (e.g. `useChartTheme`
 * for dark mode detection via `element.closest(".dark")`).
 *
 * Init is deferred until the container has a real size: dashboard widgets
 * mount inside animated canvas panels, and calling `echarts.init` on a
 * 0-sized element warns ("Can't get DOM width or height") and produces a
 * blank chart that never recovers. The ResizeObserver performs the init on
 * the first tick where the container has dimensions.
 *
 * The instance is returned as STATE (not a ref) so dependent hooks — axis
 * label tooltip, legend interaction — re-run and attach their listeners
 * when the instance is created late.
 */
export function useEChartsInstance(
  ref: RefObject<HTMLDivElement | null>,
  options: echarts.EChartsOption
): echarts.ECharts | null {
  const [instance, setInstance] = useState<echarts.ECharts | null>(null)

  // Latest options for the deferred-init path: when the container gets its
  // size after mount, init must apply the options rendered since then —
  // the options effect below only fires on `options` changes.
  const optionsRef = useRef(options)
  optionsRef.current = options

  // The exact options object the instance currently renders. Guards the
  // options effect against re-applying what init just painted: `setInstance`
  // re-renders the component, the effect fires with the same (memoized)
  // options, and `setOption(..., notMerge)` would then rebuild the whole
  // chart — restarting the entrance animation and visibly re-laying-out the
  // grid one beat after the first paint.
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

    // Mounted with a real size (the common case: grid cells, static layouts)
    // — init synchronously, no delay.
    init()

    // Deferred init: the container mounted at 0×0, so it is expanding inside
    // an animation (canvas panels grow via a CSS transition). Initializing
    // mid-growth paints the chart on a smaller responsive breakpoint and its
    // axes/labels then pop in when the final size upgrades the breakpoint,
    // visibly re-laying-out the grid. Wait until the size stops changing so
    // the chart appears once, fully formed, at its final size. The timer
    // re-checks the size when it fires: a rendering hiccup can starve
    // ResizeObserver ticks for longer than the debounce while the CSS
    // transition keeps progressing, and painting in that lull would land
    // mid-animation again.
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
