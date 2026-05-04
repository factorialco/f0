import type {
  F0DataChartBarDataPoint,
  F0DataChartLineDataPoint,
  F0DataChartProps,
} from "../types"

const getBarOrLineValue = (
  point: F0DataChartBarDataPoint | F0DataChartLineDataPoint
): number => (typeof point === "number" ? point : (point?.value ?? 0))

const allZeros = (values: number[]) => values.every((v) => v === 0)

/**
 * Returns `true` when a chart has no meaningful data to render — either
 * because the series/data arrays are empty or because every numeric value
 * resolves to `0`. Null-safe: malformed input is treated as empty.
 *
 * Note: gauges with `value === 0` are NOT considered empty (0% is a
 * legitimate state). Only `value == null` triggers the empty branch.
 */
export function isDataChartEmpty(props: F0DataChartProps): boolean {
  switch (props.type) {
    case "bar":
    case "line": {
      const series = props.series
      if (!Array.isArray(series) || series.length === 0) return true
      const allValues: number[] = []
      for (const s of series) {
        if (!s || !Array.isArray(s.data)) continue
        for (const point of s.data) {
          allValues.push(getBarOrLineValue(point))
        }
      }
      if (allValues.length === 0) return true
      return allZeros(allValues)
    }
    case "funnel":
    case "pie": {
      const series = props.series
      if (!series || !Array.isArray(series.data) || series.data.length === 0) {
        return true
      }
      return series.data.every((d) => !d || (d.value ?? 0) === 0)
    }
    case "radar": {
      const series = props.series
      if (!Array.isArray(series) || series.length === 0) return true
      const allValues: number[] = []
      for (const s of series) {
        if (!s || !Array.isArray(s.data)) continue
        for (const v of s.data) {
          allValues.push(typeof v === "number" ? v : 0)
        }
      }
      if (allValues.length === 0) return true
      return allZeros(allValues)
    }
    case "gauge": {
      // 0% is a legitimate gauge state — only nullish values are empty.
      return props.value == null
    }
    case "heatmap": {
      const data = props.data
      if (!Array.isArray(data) || data.length === 0) return true
      return data.every(
        (tuple) => !Array.isArray(tuple) || (tuple[2] ?? 0) === 0
      )
    }
    default:
      return true
  }
}
