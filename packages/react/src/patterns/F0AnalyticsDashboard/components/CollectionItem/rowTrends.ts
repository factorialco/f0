import type { RecordType } from "@/hooks/datasource"
import type { RendererDefinition } from "@/patterns/OneDataCollection/property-render"

import { isObservableLike, isPromiseLike } from "@/lib/promise-to-observable"

import type { DashboardMetricTrend, DashboardRowTrends } from "../../types"

/** As `DataSourceDefinition.idProvider`, which is what keys `rowTrends`. */
type RowIdProvider = (
  item: RecordType,
  index?: number
) => string | number | symbol

/** The trends a collection's fetch result carries, if it carries any. */
export function readRowTrends(result: unknown): DashboardRowTrends | undefined {
  if (typeof result !== "object" || result === null || !("rowTrends" in result))
    return undefined
  return (result as { rowTrends?: DashboardRowTrends }).rowTrends
}

/**
 * Report the `rowTrends` a source's own `fetchData` returns.
 *
 * The datasource keeps only `records`, so the trends have to be read off the
 * response on its way through — as a plain value, a promise or an observable,
 * whichever the host's adapter returns.
 */
export function tapRowTrends(
  result: unknown,
  onTrends: (trends: DashboardRowTrends | undefined) => void
): unknown {
  if (isObservableLike<unknown>(result)) {
    return result.map((state) => {
      if (!state.loading) onTrends(readRowTrends(state.data))
      return state
    })
  }

  if (isPromiseLike<unknown>(result)) {
    return result.then((value) => {
      onTrends(readRowTrends(value))
      return value
    })
  }

  onTrends(readRowTrends(result))
  return result
}

/**
 * A row's trend, looked up by the id the collection identifies rows by: the
 * source's `idProvider` when it has one, else the record's own `id`.
 */
export function rowTrendOf(
  row: RecordType,
  rowTrends: DashboardRowTrends,
  idProvider?: RowIdProvider
): DashboardMetricTrend | undefined {
  return rowTrends[String(idProvider ? idProvider(row) : row.id)]
}

/**
 * The "Change" column: each row's trend, looked up by the id the collection
 * identifies rows by.
 *
 * Rendered through the table's own `delta` cell rather than the widget's
 * `TrendBadge` — a column renders a value-display definition, not arbitrary
 * nodes. `delta` has no neutral state, so a flat trend renders as plain text.
 */
export function changeColumn(
  label: string,
  rowTrends: DashboardRowTrends,
  idProvider?: RowIdProvider
) {
  return {
    id: "dashboard-row-change",
    label,
    render: (row: RecordType): RendererDefinition | string | undefined =>
      renderTrend(rowTrendOf(row, rowTrends, idProvider)),
  }
}

function renderTrend(
  trend: DashboardMetricTrend | undefined
): RendererDefinition | string | undefined {
  if (!trend?.label) return undefined
  if (trend.direction === "flat") return trend.label

  return {
    type: "delta",
    value: {
      label: trend.label,
      deltaStatus: trend.direction === "up" ? "positive" : "negative",
    },
  }
}
