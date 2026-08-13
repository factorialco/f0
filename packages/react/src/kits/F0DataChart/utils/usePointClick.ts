import type * as echarts from "echarts"
import { type RefObject, useEffect, useRef } from "react"

import type { F0DataChartPointClick } from "../types"

/**
 * Reports the single mark the user clicked — one bar segment, one slice, one
 * point — normalised into {@link F0DataChartPointClick}.
 *
 * Works for every chart type because ECharts' item-level click params carry the
 * same fields regardless of series type, so this binds once at the instance
 * level rather than needing a variant per chart.
 *
 * Deliberately narrower than the hover tooltip: an axis-triggered tooltip shows
 * every series at a category, but a click can only identify the mark under the
 * cursor. Reconstructing the full category would mean reading back the option's
 * series, which is a different feature.
 *
 * Dismisses the hover tooltip on a successful pick: the click is answered by
 * something anchored at the same spot, and leaving the tooltip up would stack
 * two floating panels over one mark.
 */
export function usePointClick(
  chartRef: RefObject<echarts.ECharts | null>,
  onPointClick: ((point: F0DataChartPointClick) => void) | undefined
): void {
  // Kept in a ref so a consumer passing an inline arrow doesn't detach and
  // rebind the listener on every render.
  const handlerRef = useRef(onPointClick)
  handlerRef.current = onPointClick

  useEffect(() => {
    const chart = chartRef.current
    if (!chart || typeof chart.on !== "function") return

    const onClick = (params: unknown) => {
      const handler = handlerRef.current
      if (!handler) return

      const p = params as {
        componentType?: string
        seriesName?: string
        seriesIndex?: number
        dataIndex?: number
        name?: string
        value?: unknown
        // ECharts wraps the native event; `event.event` is the DOM original.
        event?: { event?: { clientX?: number; clientY?: number } }
      }

      // Axis labels, legend entries and the like also raise `click`; only marks
      // belonging to a series carry a value worth quoting.
      if (p.componentType !== "series") return

      // Bars and lines give a bare number; scatter and some stacked shapes give
      // a tuple whose last entry is the measure.
      const raw = Array.isArray(p.value) ? p.value[p.value.length - 1] : p.value
      // `Number(null)` is 0 and `Number("")` is 0, so a gap in the data would
      // otherwise be reported as a real zero.
      if (raw === null || raw === undefined || raw === "") return
      const value = Number(raw)
      if (!Number.isFinite(value)) return

      const native = p.event?.event

      // `hideTip` is safe to fire even with no tooltip showing.
      chart.dispatchAction({ type: "hideTip" })

      handler({
        seriesName: String(p.seriesName ?? ""),
        category: String(p.name ?? ""),
        value,
        dataIndex: p.dataIndex ?? 0,
        seriesIndex: p.seriesIndex ?? 0,
        clientX: native?.clientX ?? 0,
        clientY: native?.clientY ?? 0,
      })
    }

    chart.on("click", onClick)
    return () => {
      // `off` throws on a disposed instance, which happens when the chart
      // unmounts before this cleanup runs.
      if (!chart.isDisposed?.()) chart.off("click", onClick)
    }
  }, [chartRef])
}
