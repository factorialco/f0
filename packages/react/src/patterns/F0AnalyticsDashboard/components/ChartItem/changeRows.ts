import type {
  ChartColorToken,
  F0DataChartBarProps,
  F0DataChartProps,
} from "@/kits/F0DataChart"

import type {
  DashboardCategoryComparison,
  DashboardMetricTrend,
} from "../../types"

import { trendSentiment } from "../TrendBadge/TrendBadge"
import { categoryValues, isCategoryChart } from "./categoryComparison"

/** Rows the change view draws before folding the rest into "+N more". */
export const CHANGE_VIEW_ROWS = 10

export interface ChangeRow {
  name: string
  kind: "changed" | "added" | "removed"
  label: string
  direction: DashboardMetricTrend["direction"]
  sentiment?: DashboardMetricTrend["sentiment"]
  /** Signed by direction, so a "down" trend draws to the left whatever sign its delta carries. */
  delta?: number
}

const TONE_COLOR: Record<ReturnType<typeof trendSentiment>, ChartColorToken> = {
  positive: "grass",
  negative: "red",
  neutral: "smoke",
}

function signedDelta(trend: DashboardMetricTrend): number | undefined {
  if (trend.delta === undefined) return undefined
  return trend.direction === "down"
    ? -Math.abs(trend.delta)
    : Math.abs(trend.delta)
}

/** Largest change first; rows without a number after them, in label order. */
function byMagnitude(a: ChangeRow, b: ChangeRow): number {
  const size = (row: ChangeRow) =>
    row.delta === undefined ? -1 : Math.abs(row.delta)
  return size(b) - size(a) || a.label.localeCompare(b.label)
}

/**
 * The rows of the change view: new categories first at their full value,
 * then every category that moved, largest move first, then the ones that
 * vanished. Flat categories are not a change, so they are left out.
 */
export function changeRows(
  chart: F0DataChartProps,
  comparison: DashboardCategoryComparison,
  format: (value: number) => string
): { rows: ChangeRow[]; more: number } {
  const { byCategory } = comparison
  const added = comparison.added ?? []
  const removed = comparison.removed ?? []
  const values = isCategoryChart(chart) ? categoryValues(chart) : new Map()

  const changed = Object.entries(byCategory)
    .filter(
      ([name, trend]) =>
        trend.direction !== "flat" &&
        !added.includes(name) &&
        !removed.includes(name)
    )
    .map(
      ([name, trend]): ChangeRow => ({
        name,
        kind: "changed",
        label: trend.label,
        direction: trend.direction,
        sentiment: trend.sentiment,
        delta: signedDelta(trend),
      })
    )
    .sort(byMagnitude)

  const first = added.map((name): ChangeRow => {
    const value = values.get(name)
    const trend = byCategory[name]
    return {
      name,
      kind: "added",
      label: trend?.label ?? (value === undefined ? "" : format(value)),
      direction: trend?.direction ?? "up",
      sentiment: trend?.sentiment,
      delta: value,
    }
  })

  const last = removed.map((name): ChangeRow => {
    const trend = byCategory[name]
    return {
      name,
      kind: "removed",
      label: trend?.label ?? "",
      direction: trend?.direction ?? "down",
      sentiment: trend?.sentiment,
      delta: trend && signedDelta(trend),
    }
  })

  const all = [...first, ...changed, ...last]
  return {
    rows: all.slice(0, CHANGE_VIEW_ROWS),
    more: Math.max(0, all.length - CHANGE_VIEW_ROWS),
  }
}

export interface ChangeViewCopy {
  change: string
  newCategory: string
  goneCategory: string
  more: (count: number) => string
}

/** The row's name, with what kind of row it is where that is not a plain change. */
export function changeRowLabel(row: ChangeRow, copy: ChangeViewCopy): string {
  if (row.kind === "added") return `${row.name} (${copy.newCategory})`
  if (row.kind === "removed") return `${row.name} (${copy.goneCategory})`
  return row.name
}

/**
 * A diverging horizontal bar chart of the rows: gains to the right, losses to
 * the left, each in its trend's tone. A row without a number — a vanished
 * category the host gave no delta, the "+N more" fold — keeps its label and
 * draws no bar.
 */
export function changeChartProps(
  rows: ChangeRow[],
  more: number,
  copy: ChangeViewCopy,
  format: (value: number) => string
): F0DataChartBarProps {
  const categories = rows.map((row) => changeRowLabel(row, copy))
  const data = rows.map((row) => ({
    value: row.delta ?? 0,
    color: TONE_COLOR[trendSentiment(row)],
  }))
  if (more > 0) {
    categories.push(copy.more(more))
    data.push({ value: 0, color: TONE_COLOR.neutral })
  }
  const signed = (value: number) =>
    value === 0 ? "" : value > 0 ? `+${format(value)}` : format(value)

  return {
    type: "bar",
    orientation: "horizontal",
    categories,
    series: [{ name: copy.change, data }],
    showLegend: false,
    showLabels: true,
    valueFormatter: signed,
  }
}
