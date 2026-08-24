import * as echarts from "echarts"
import { colord } from "colord"
import { type RefObject, useEffect, useRef } from "react"

import type {
  F0DataChartAreaSelection,
  F0DataChartAreaSelectionPoint,
  F0DataChartBarProps,
  F0DataChartHeatmapProps,
  F0DataChartLineProps,
  F0DataChartScatterProps,
} from "../types"

import { resolveChartColorToken } from "./colors"
import { barSourceSeriesIndex } from "./seriesIds"

const MAX_SELECTION_POINTS = 100

type AreaSelectableChartProps =
  | F0DataChartBarProps
  | F0DataChartLineProps
  | F0DataChartHeatmapProps
  | F0DataChartScatterProps

type BrushArea = {
  brushType?: string
  range?: unknown
}

type BrushSelectedEvent = {
  batch?: {
    areas?: BrushArea[]
    selected?: {
      seriesId?: string
      seriesIndex?: number
      dataIndex?: number[]
    }[]
  }[]
}

type BrushEndEvent = {
  areas?: BrushArea[]
}

function isPolygonRange(value: unknown): value is [number, number][] {
  return (
    Array.isArray(value) &&
    value.length >= 3 &&
    value.every(
      (point) =>
        Array.isArray(point) &&
        point.length >= 2 &&
        typeof point[0] === "number" &&
        typeof point[1] === "number"
    )
  )
}

/** Ray-casting containment against the completed ECharts brush polygon. */
export function isPointInPolygon(
  point: [number, number],
  polygon: [number, number][]
): boolean {
  let inside = false

  for (
    let current = 0, previous = polygon.length - 1;
    current < polygon.length;
    previous = current++
  ) {
    const [currentX, currentY] = polygon[current]
    const [previousX, previousY] = polygon[previous]
    const crosses =
      currentY > point[1] !== previousY > point[1] &&
      point[0] <
        ((previousX - currentX) * (point[1] - currentY)) /
          (previousY - currentY) +
          currentX

    if (crosses) inside = !inside
  }

  return inside
}

function numericValue(point: number | { value: number }): number {
  return typeof point === "number" ? point : point.value
}

function selectedIndexes(
  props: AreaSelectableChartProps,
  event: BrushSelectedEvent | null
) {
  const result = new Map<number, Set<number>>()

  for (const batch of event?.batch ?? []) {
    for (const selected of batch.selected ?? []) {
      const seriesIndex =
        props.type === "bar"
          ? barSourceSeriesIndex(selected.seriesId)
          : selected.seriesIndex
      if (seriesIndex === undefined || seriesIndex === null) continue
      const indexes = result.get(seriesIndex) ?? new Set<number>()
      for (const dataIndex of selected.dataIndex ?? []) indexes.add(dataIndex)
      result.set(seriesIndex, indexes)
    }
  }

  return result
}

function polygonFromAreas(areas: BrushArea[] | undefined) {
  const range = areas?.find(
    (area) => area.brushType === "polygon" && isPolygonRange(area.range)
  )?.range
  return isPolygonRange(range) ? range : null
}

function polygonsMatch(
  left: [number, number][],
  right: [number, number][]
): boolean {
  return (
    left.length === right.length &&
    left.every(
      (point, index) =>
        Math.abs(point[0] - right[index][0]) < 0.5 &&
        Math.abs(point[1] - right[index][1]) < 0.5
    )
  )
}

function eventMatchesPolygon(
  event: BrushSelectedEvent | null,
  polygon: [number, number][]
): boolean {
  return (event?.batch ?? []).some((batch) => {
    const eventPolygon = polygonFromAreas(batch.areas)
    return eventPolygon ? polygonsMatch(eventPolygon, polygon) : false
  })
}

function pointIsVisible(chart: echarts.ECharts, seriesName: string): boolean {
  const option = chart.getOption() as {
    legend?: { selected?: Record<string, boolean> }[]
  }
  return !(option.legend ?? []).some(
    (legend) => legend.selected?.[seriesName] === false
  )
}

function cartesianPixel(
  chart: echarts.ECharts,
  seriesIndex: number,
  value: [string | number, number]
): [number, number] | null {
  const pixel = chart.convertToPixel({ seriesIndex }, value)
  return Array.isArray(pixel) &&
    typeof pixel[0] === "number" &&
    typeof pixel[1] === "number" &&
    Number.isFinite(pixel[0]) &&
    Number.isFinite(pixel[1])
    ? [pixel[0], pixel[1]]
    : null
}

function pointForIndex(
  props: AreaSelectableChartProps,
  seriesIndex: number,
  dataIndex: number
): F0DataChartAreaSelectionPoint | null {
  if (props.type === "bar" || props.type === "line") {
    const series = props.series[seriesIndex]
    const datum = series?.data[dataIndex]
    if (!series || datum === undefined) return null
    const value = numericValue(datum)
    if (!Number.isFinite(value)) return null

    return {
      seriesName: series.name,
      category: props.categories[dataIndex] ?? "",
      value,
      values: [value],
      series: [{ name: series.name, seriesIndex, value }],
      dataIndex,
      seriesIndex,
    }
  }

  if (props.type === "scatter") {
    const series = props.series[seriesIndex]
    const datum = series?.data[dataIndex]
    if (!series || datum === undefined) return null
    const [x, y] = Array.isArray(datum) ? datum : [datum.x, datum.y]
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null

    return {
      seriesName: series.name,
      category: Array.isArray(datum) ? "" : (datum.label ?? ""),
      value: y,
      values: [x, y],
      series: [{ name: series.name, seriesIndex, value: y }],
      dataIndex,
      seriesIndex,
    }
  }

  const datum = props.data[dataIndex]
  if (!datum || datum.some((value) => !Number.isFinite(value))) return null

  return {
    seriesName: "",
    category: "",
    value: datum[2],
    values: [...datum],
    series: [{ name: "", seriesIndex: 0, value: datum[2] }],
    dataIndex,
    seriesIndex: 0,
  }
}

function linePointsInPolygon(
  chart: echarts.ECharts,
  props: F0DataChartLineProps,
  polygon: [number, number][]
): F0DataChartAreaSelectionPoint[] {
  const result: F0DataChartAreaSelectionPoint[] = []

  props.series.forEach((series, seriesIndex) => {
    if (!pointIsVisible(chart, series.name)) return

    series.data.forEach((datum, dataIndex) => {
      const category = props.categories[dataIndex]
      if (category === undefined) return
      const value = numericValue(datum)
      const pixel = cartesianPixel(chart, seriesIndex, [category, value])
      if (!pixel || !isPointInPolygon(pixel, polygon)) return
      const point = pointForIndex(props, seriesIndex, dataIndex)
      if (point) result.push(point)
    })
  })

  return result
}

function heatmapPointsInPolygon(
  chart: echarts.ECharts,
  props: F0DataChartHeatmapProps,
  polygon: [number, number][]
): F0DataChartAreaSelectionPoint[] {
  return props.data.flatMap((datum, dataIndex) => {
    const pixel = cartesianPixel(chart, 0, [datum[0], datum[1]])
    if (!pixel || !isPointInPolygon(pixel, polygon)) return []
    const point = pointForIndex(props, 0, dataIndex)
    return point ? [point] : []
  })
}

/** @internal Exported for focused geometry and payload tests. */
export function resolveAreaSelection(
  chart: echarts.ECharts,
  props: AreaSelectableChartProps,
  event: BrushSelectedEvent | null,
  polygon: [number, number][]
): F0DataChartAreaSelection {
  let points: F0DataChartAreaSelectionPoint[]

  if (props.type === "line") {
    points = linePointsInPolygon(chart, props, polygon)
  } else if (props.type === "heatmap") {
    points = heatmapPointsInPolygon(chart, props, polygon)
  } else {
    points = []
    for (const [seriesIndex, dataIndexes] of selectedIndexes(props, event)) {
      if (
        props.type === "scatter" &&
        !pointIsVisible(chart, props.series[seriesIndex]?.name ?? "")
      ) {
        continue
      }
      for (const dataIndex of dataIndexes) {
        const point = pointForIndex(props, seriesIndex, dataIndex)
        if (point) points.push(point)
      }
    }
  }

  points.sort(
    (left, right) =>
      left.seriesIndex - right.seriesIndex || left.dataIndex - right.dataIndex
  )

  const totalPointCount = points.length
  return {
    source: "pointer",
    points: points.slice(0, MAX_SELECTION_POINTS),
    totalPointCount,
  }
}

/**
 * Adds controlled ECharts polygon selection without exposing the chart
 * instance or relying on rendered DOM geometry.
 */
export function useAreaSelection(
  chartRef: RefObject<echarts.ECharts | null>,
  props: AreaSelectableChartProps,
  optionsRevision: unknown
) {
  const configRef = useRef(props.areaSelection)
  const propsRef = useRef(props)
  const latestSelectedEvent = useRef<BrushSelectedEvent | null>(null)
  const pendingPolygon = useRef<[number, number][] | null>(null)
  const pendingTimer = useRef<number | null>(null)
  const wasControlled = useRef(false)
  const hasAreaSelection = props.areaSelection !== undefined
  configRef.current = props.areaSelection
  propsRef.current = props

  useEffect(() => {
    if (!hasAreaSelection) return
    const chart = chartRef.current
    if (!chart) return

    const clearPending = () => {
      pendingPolygon.current = null
      if (pendingTimer.current !== null) {
        window.clearTimeout(pendingTimer.current)
        pendingTimer.current = null
      }
    }
    const completeSelection = (
      polygon: [number, number][],
      selectedEvent: BrushSelectedEvent | null
    ) => {
      clearPending()
      latestSelectedEvent.current = null
      if (!configRef.current?.active) return
      configRef.current.onSelect(
        resolveAreaSelection(chart, propsRef.current, selectedEvent, polygon)
      )
    }

    const handleBrushSelected = (event: unknown) => {
      if (!configRef.current?.active) {
        latestSelectedEvent.current = null
        return
      }
      const selectedEvent = event as BrushSelectedEvent
      latestSelectedEvent.current = selectedEvent
      const polygon = pendingPolygon.current
      if (polygon && eventMatchesPolygon(selectedEvent, polygon)) {
        completeSelection(polygon, selectedEvent)
      }
    }
    const handleBrushEnd = (event: unknown) => {
      const polygon = polygonFromAreas((event as BrushEndEvent).areas)
      if (!polygon || !configRef.current?.active) return

      if (
        propsRef.current.type === "line" ||
        propsRef.current.type === "heatmap"
      ) {
        completeSelection(polygon, null)
        return
      }

      if (eventMatchesPolygon(latestSelectedEvent.current, polygon)) {
        completeSelection(polygon, latestSelectedEvent.current)
        return
      }

      clearPending()
      pendingPolygon.current = polygon
      // ECharts intentionally skips the final brush action at drag end. Replay
      // the completed public brush payload so brushSelected is calculated from
      // this exact polygon instead of the previous pointer-move geometry.
      chart.dispatchAction({
        type: "brush",
        areas: (event as BrushEndEvent).areas ?? [],
      })

      // The public brush action normally emits brushSelected synchronously.
      // Keep an empty-result fallback so a future ECharts scheduling change
      // cannot leave the controlled interaction stuck in drawing mode.
      if (!pendingPolygon.current) return
      pendingTimer.current = window.setTimeout(() => {
        const selectedEvent = eventMatchesPolygon(
          latestSelectedEvent.current,
          polygon
        )
          ? latestSelectedEvent.current
          : null
        completeSelection(polygon, selectedEvent)
      }, 0)
    }

    chart.on("brushSelected", handleBrushSelected)
    chart.on("brushEnd", handleBrushEnd)

    return () => {
      clearPending()
      if (!chart.isDisposed?.()) {
        chart.off("brushSelected", handleBrushSelected)
        chart.off("brushEnd", handleBrushEnd)
      }
    }
  }, [chartRef, hasAreaSelection])

  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return

    if (!props.areaSelection) {
      latestSelectedEvent.current = null
      pendingPolygon.current = null
      if (wasControlled.current) {
        chart.dispatchAction({
          type: "takeGlobalCursor",
          key: "brush",
          brushOption: { brushType: false },
        })
        chart.dispatchAction({ type: "brush", areas: [] })
      }
      wasControlled.current = false
      return
    }

    wasControlled.current = true
    if (!props.areaSelection.active) {
      latestSelectedEvent.current = null
      pendingPolygon.current = null
      chart.dispatchAction({
        type: "takeGlobalCursor",
        key: "brush",
        brushOption: { brushType: false },
      })
      chart.dispatchAction({ type: "brush", areas: [] })
      return
    }

    const color = resolveChartColorToken("purple")
    chart.setOption({
      brush: {
        brushMode: "single",
        transformable: false,
        removeOnClick: true,
        brushStyle: {
          borderColor: color,
          color: colord(color).alpha(0.14).toRgbString(),
          borderWidth: 2,
        },
      },
    })
    chart.dispatchAction({
      type: "takeGlobalCursor",
      key: "brush",
      brushOption: { brushType: "polygon" },
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.preventDefault()
      configRef.current?.onCancel?.()
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [
    chartRef,
    optionsRevision,
    props.areaSelection?.active,
    props.type,
    props.type === "heatmap" ? props.data : props.series,
  ])
}
