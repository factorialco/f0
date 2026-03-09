import type { F0DataChartFunnelDataPoint } from "../../types"
import { paletteColor, resolveChartColorToken } from "../../utils/colors"

/** Format a conversion percentage (one decimal place) */
export function formatPercent(value: number, total: number): string {
  if (total === 0) return "0%"
  const pct = (value / total) * 100
  if (pct === 100) return "100%"
  return `${pct.toFixed(1)}%`
}

/** Resolve the color for a single funnel data point */
export function resolveStageColor(
  point: F0DataChartFunnelDataPoint,
  seriesColor: string | undefined,
  index: number
): string {
  if (point.color) return resolveChartColorToken(point.color)
  if (seriesColor) return seriesColor
  return paletteColor(index)
}
