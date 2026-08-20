import type * as echarts from "echarts"
import { type RefObject, useEffect, useRef } from "react"

import type {
  F0DataChartPointClick,
  F0DataChartPointClickSeries,
} from "../types"

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
 * Every series that has a value at `dataIndex`, in configured order — the same
 * rows the axis tooltip shows — plus the one nearest `yValue`, which is the
 * line the user was aiming at.
 *
 * Skips gaps and anything the legend has switched off, so a click never
 * reports a series that isn't on screen. Null when the whole category is
 * empty.
 */
function resolveColumn(
  series: PlotSeries[],
  dataIndex: number,
  yValue: number,
  selected?: Record<string, boolean>
): {
  series: F0DataChartPointClickSeries[]
  nearest: F0DataChartPointClickSeries
} | null {
  const entries: F0DataChartPointClickSeries[] = []
  let nearest: F0DataChartPointClickSeries | null = null
  let nearestDistance = Infinity

  series.forEach((entry, seriesIndex) => {
    const name = String(entry.name ?? "")
    if (selected?.[name] === false) return

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

    const resolved = { name, seriesIndex, value }
    entries.push(resolved)

    const distance = Math.abs(value - yValue)
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearest = resolved
    }
  })

  return nearest ? { series: entries, nearest } : null
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
 * the click itself: nearest category on the x axis, then every series that has
 * a value there. A line is a few pixels wide, so asking the user to hit one is
 * asking them to miss; the axis tooltip already treats the whole column as one
 * target, and this makes clicking agree with it — the click answers with the
 * same rows the hover did.
 *
 * `seriesName` and `value` still name a single series: the one nearest the
 * click, so anything that wants a headline has one. `series` carries the whole
 * column beside it.
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
      let isAxisHover = false

      const pointOf = (ev: unknown): [number, number] | null => {
        const { offsetX, offsetY } = ev as {
          offsetX?: number
          offsetY?: number
        }
        return typeof offsetX === "number" && typeof offsetY === "number"
          ? [offsetX, offsetY]
          : null
      }

      const onPlotMouseMove = (ev: unknown) => {
        if (isAxisHover) {
          zr.setCursorStyle("default")
          return
        }

        const pixel = pointOf(ev)
        if (handlerRef.current && pixel && chart.containPixel("grid", pixel)) {
          zr.setCursorStyle("pointer")
        }
      }

      const onPlotGlobalOut = () => {
        isAxisHover = false
        zr.setCursorStyle("default")
      }

      const onAxisMouseOver = (params: unknown) => {
        const componentType = (params as { componentType?: string })
          .componentType
        if (componentType === "xAxis" || componentType === "yAxis") {
          isAxisHover = true
          zr.setCursorStyle("default")
        }
      }

      const onAxisMouseOut = (params: unknown) => {
        const componentType = (params as { componentType?: string })
          .componentType
        if (componentType === "xAxis" || componentType === "yAxis") {
          isAxisHover = false
        }
      }

      const onPlotClick = (ev: unknown) => {
        const handler = handlerRef.current
        if (!handler) return

        const e = ev as {
          offsetX?: number
          offsetY?: number
          event?: NativePosition
        }
        const pixel = pointOf(e)
        if (!pixel) return
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

        const column = resolveColumn(
          option.series ?? [],
          dataIndex,
          yValue,
          option.legend?.[0]?.selected
        )
        if (!column) return

        // `hideTip` is safe to fire even with no tooltip showing.
        chart.dispatchAction({ type: "hideTip" })

        handler({
          source: "pointer",
          seriesName: column.nearest.name,
          category: String(categories[dataIndex] ?? ""),
          value: column.nearest.value,
          values: [column.nearest.value],
          series: column.series,
          dataIndex,
          seriesIndex: column.nearest.seriesIndex,
          ...positionOf(e.event),
        })
      }

      zr.on("click", onPlotClick)
      zr.on("mousemove", onPlotMouseMove)
      zr.on("globalout", onPlotGlobalOut)
      chart.on("mouseover", onAxisMouseOver)
      chart.on("mouseout", onAxisMouseOut)
      return () => {
        // `off` throws on a disposed instance, which happens when the chart
        // unmounts before this cleanup runs.
        if (!chart.isDisposed?.()) {
          zr.off("click", onPlotClick)
          zr.off("mousemove", onPlotMouseMove)
          zr.off("globalout", onPlotGlobalOut)
          chart.off("mouseover", onAxisMouseOver)
          chart.off("mouseout", onAxisMouseOut)
          zr.setCursorStyle("default")
        }
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
      // `Number(null)` is 0 and `Number("")` is 0, so a gap in the data would
      // otherwise be reported as a real zero.
      if (
        list.some(
          (entry) => entry === null || entry === undefined || entry === ""
        )
      )
        return
      const values = list.map(Number)
      // Every tuple member is semantic data: a finite Y cannot make a broken
      // scatter X or heatmap index safe to quote.
      if (values.some((entry) => !Number.isFinite(entry))) return
      const value = values[values.length - 1]

      // `hideTip` is safe to fire even with no tooltip showing.
      chart.dispatchAction({ type: "hideTip" })

      const seriesName = String(p.seriesName ?? "")
      const seriesIndex = p.seriesIndex ?? 0

      handler({
        source: "pointer",
        seriesName,
        category: String(p.name ?? ""),
        value,
        values,
        // A mark identifies exactly one series, so the list has one entry.
        // Only a line click resolves a whole column.
        series: [{ name: seriesName, seriesIndex, value }],
        dataIndex: p.dataIndex ?? 0,
        seriesIndex,
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
