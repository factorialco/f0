import type * as echarts from "echarts"
import { type RefObject, useEffect, useRef } from "react"

import type { F0DataChartPointClick } from "../types"

/**
 * Where a click has to land to count as a pick.
 *
 * - `"mark"` — on the mark itself. Right for bars, slices and points, which
 *   are big enough to hit.
 * - `"plot"` — anywhere inside the plot area, resolved to the nearest mark.
 *   For lines, which are too thin to click reliably — the same reason they
 *   already use an axis-triggered tooltip rather than an item one.
 */
export type F0DataChartHitArea = "mark" | "plot"

type NativePosition =
  | {
      clientX?: number
      clientY?: number
      changedTouches?: ArrayLike<{ clientX: number; clientY: number }>
    }
  | undefined

/**
 * Viewport coordinates of a click. A `TouchEvent` carries no `clientX` of its
 * own — it lives on the touch — so anything anchored to the click would end up
 * in the viewport corner without this.
 */
function positionOf(native: NativePosition) {
  const touch = native?.changedTouches?.[0]
  return {
    clientX: touch?.clientX ?? native?.clientX ?? 0,
    clientY: touch?.clientY ?? native?.clientY ?? 0,
  }
}

type PlotSeries = { name?: string; data?: unknown[] }

/**
 * The series whose value at `dataIndex` sits closest to `yValue` — the line the
 * user was aiming at when they clicked in the plot area.
 *
 * Skips gaps and anything the legend has switched off, so a click never quotes
 * a series that isn't on screen. Null when no series has a value here.
 */
function pickNearestSeries(
  series: PlotSeries[],
  dataIndex: number,
  yValue: number,
  selected?: Record<string, boolean>
): { seriesIndex: number; seriesName: string; value: number } | null {
  let best: {
    seriesIndex: number
    seriesName: string
    value: number
    distance: number
  } | null = null

  series.forEach((entry, seriesIndex) => {
    const seriesName = String(entry.name ?? "")
    if (selected?.[seriesName] === false) return

    const point = entry.data?.[dataIndex]
    // A series that styles one of its points sends `{ value }` instead of a
    // bare number for that entry.
    const raw =
      point !== null && typeof point === "object" && "value" in point
        ? (point as { value?: unknown }).value
        : point
    if (raw === null || raw === undefined || raw === "") return

    const value = Number(raw)
    if (!Number.isFinite(value)) return

    const distance = Math.abs(value - yValue)
    if (!best || distance < best.distance) {
      best = { seriesIndex, seriesName, value, distance }
    }
  })

  if (!best) return null
  const { seriesIndex, seriesName, value } = best
  return { seriesIndex, seriesName, value }
}

/**
 * Reports the single mark the user clicked — one bar segment, one slice, one
 * point — normalised into {@link F0DataChartPointClick}.
 *
 * Works for every chart type because ECharts' item-level click params carry the
 * same fields regardless of series type, so this binds once at the instance
 * level rather than needing a variant per chart.
 *
 * With `hitArea: "plot"` it instead listens at the canvas level and resolves
 * the click itself: nearest category on the x axis, nearest series by value.
 * A line is a few pixels wide, so asking the user to hit one is asking them to
 * miss; the axis tooltip already treats the whole column as one target and this
 * makes clicking agree with it. What gets reported is unchanged — one series,
 * one value — so consumers can't tell the two paths apart.
 *
 * Deliberately narrower than the hover tooltip: an axis-triggered tooltip shows
 * every series at a category, but a click can only answer with the one the
 * user was pointing at.
 *
 * Dismisses the hover tooltip on a successful pick: the click is answered by
 * something anchored at the same spot, and leaving the tooltip up would stack
 * two floating panels over one mark.
 */
export function usePointClick(
  chartRef: RefObject<echarts.ECharts | null>,
  onPointClick: ((point: F0DataChartPointClick) => void) | undefined,
  hitArea: F0DataChartHitArea = "mark"
): void {
  // Kept in a ref so a consumer passing an inline arrow doesn't detach and
  // rebind the listener on every render.
  const handlerRef = useRef(onPointClick)
  handlerRef.current = onPointClick

  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return

    // ─── "plot": resolve the click from the canvas ──────────────
    if (hitArea === "plot") {
      if (typeof chart.getZr !== "function") return
      const zr = chart.getZr()
      if (!zr) return

      const onPlotClick = (ev: unknown) => {
        const handler = handlerRef.current
        if (!handler) return

        const e = ev as {
          offsetX?: number
          offsetY?: number
          event?: NativePosition
        }
        if (typeof e.offsetX !== "number" || typeof e.offsetY !== "number")
          return

        const pixel: [number, number] = [e.offsetX, e.offsetY]
        // The plot area only: clicks on the legend, the axes or the margins
        // aren't picks, and this is exactly the region the tooltip covers.
        if (!chart.containPixel("grid", pixel)) return

        const coords = chart.convertFromPixel({ gridIndex: 0 }, pixel) as
          | number[]
          | undefined
        const xValue = coords?.[0]
        const yValue = coords?.[1]
        if (typeof xValue !== "number" || !Number.isFinite(xValue)) return
        if (typeof yValue !== "number" || !Number.isFinite(yValue)) return

        const option = chart.getOption() as {
          series?: PlotSeries[]
          xAxis?: { data?: unknown[] }[]
          legend?: { selected?: Record<string, boolean> }[]
        }
        const categories = option.xAxis?.[0]?.data ?? []
        // On a category axis this is the fractional index; rounding lands on
        // the nearest tick. Clamped because `boundaryGap: false` puts the
        // first and last category on the grid edges, where the fraction can
        // fall just outside the range.
        const dataIndex = Math.min(
          Math.max(Math.round(xValue), 0),
          Math.max(categories.length - 1, 0)
        )

        const nearest = pickNearestSeries(
          option.series ?? [],
          dataIndex,
          yValue,
          option.legend?.[0]?.selected
        )
        if (!nearest) return

        // `hideTip` is safe to fire even with no tooltip showing.
        chart.dispatchAction({ type: "hideTip" })

        handler({
          seriesName: nearest.seriesName,
          category: String(categories[dataIndex] ?? ""),
          value: nearest.value,
          values: [nearest.value],
          dataIndex,
          seriesIndex: nearest.seriesIndex,
          ...positionOf(e.event),
        })
      }

      zr.on("click", onPlotClick)
      return () => {
        // `off` throws on a disposed instance, which happens when the chart
        // unmounts before this cleanup runs.
        if (!chart.isDisposed?.()) zr.off("click", onPlotClick)
      }
    }

    // ─── "mark": ECharts names the mark for us ──────────────────
    if (typeof chart.on !== "function") return

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
        // ECharts wraps the native event; `event.event` is the DOM original,
        // which is a TouchEvent on touch — where the position lives on the
        // touch, not on the event.
        event?: { event?: NativePosition }
      }

      // Axis labels, legend entries and the like also raise `click`; only marks
      // belonging to a series carry a value worth quoting.
      if (p.componentType !== "series") return

      // Bars and lines give a bare number; a scatter point gives `[x, y]` and a
      // heatmap cell `[xIndex, yIndex, value]`. The measure is the last entry —
      // but a scatter point *is* both numbers, so the whole tuple is reported
      // alongside it rather than discarded here.
      const list = Array.isArray(p.value) ? p.value : [p.value]
      const raw = list[list.length - 1]
      // `Number(null)` is 0 and `Number("")` is 0, so a gap in the data would
      // otherwise be reported as a real zero.
      if (raw === null || raw === undefined || raw === "") return
      const value = Number(raw)
      if (!Number.isFinite(value)) return

      // `hideTip` is safe to fire even with no tooltip showing.
      chart.dispatchAction({ type: "hideTip" })

      handler({
        seriesName: String(p.seriesName ?? ""),
        category: String(p.name ?? ""),
        value,
        values: list.map(Number),
        dataIndex: p.dataIndex ?? 0,
        seriesIndex: p.seriesIndex ?? 0,
        ...positionOf(p.event?.event),
      })
    }

    chart.on("click", onClick)
    return () => {
      // `off` throws on a disposed instance, which happens when the chart
      // unmounts before this cleanup runs.
      if (!chart.isDisposed?.()) chart.off("click", onClick)
    }
  }, [chartRef, hitArea])
}
