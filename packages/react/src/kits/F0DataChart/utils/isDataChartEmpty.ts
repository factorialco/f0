import type { F0DataChartProps } from "../types"

/**
 * Returns `true` when a chart has no data points to render — i.e. the
 * `series` / `data` arrays are missing or empty. **All-zero datasets are
 * NOT empty** (e.g. `data: [0, 0, 0]` is a legitimate zero-valued chart),
 * so this detection avoids hijacking what was previously a valid render.
 *
 * Null-safe: malformed input is treated as empty.
 *
 * Consumers that prefer to surface the empty state for all-zero data can
 * pass `emptyState.disabled: false` is the default — opt-in to a custom
 * `render` prop or wrap the chart themselves.
 */
export function isDataChartEmpty(props: F0DataChartProps): boolean {
  switch (props.type) {
    case "bar":
    case "line": {
      const series = props.series
      if (!Array.isArray(series) || series.length === 0) return true
      // Empty when every series has no data points at all.
      return series.every(
        (s) => !s || !Array.isArray(s.data) || s.data.length === 0
      )
    }
    case "funnel":
    case "pie": {
      const series = props.series
      return !series || !Array.isArray(series.data) || series.data.length === 0
    }
    case "radar": {
      const series = props.series
      if (!Array.isArray(series) || series.length === 0) return true
      return series.every(
        (s) => !s || !Array.isArray(s.data) || s.data.length === 0
      )
    }
    case "gauge": {
      // No value at all → empty. `0` is a legitimate gauge state.
      return props.value == null
    }
    case "heatmap": {
      const data = props.data
      return !Array.isArray(data) || data.length === 0
    }
    case "categoryBar": {
      // All-zero segments render nothing (every width collapses to 0%),
      // so unlike other variants an all-zero dataset IS empty here.
      const data = props.data
      if (!Array.isArray(data) || data.length === 0) return true
      return data.every((segment) => !segment || !(segment.value > 0))
    }
    default:
      return true
  }
}
