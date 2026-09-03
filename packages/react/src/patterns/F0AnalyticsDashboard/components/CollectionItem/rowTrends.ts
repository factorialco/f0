import type { RecordType, SortingsDefinition } from "@/hooks/datasource"
import type { RendererDefinition } from "@/patterns/OneDataCollection/property-render"
import type { TableColumnDefinition } from "@/patterns/OneDataCollection/visualizations/collection/Table/types"

import { defaultIdProvider } from "@/hooks/datasource/useData"

import type { DashboardMetricTrend, DashboardRowTrends } from "../../types"

/** As `DataSourceDefinition.idProvider`, which is what keys `rowTrends`. */
type RowIdProvider = (
  item: RecordType,
  index?: number
) => string | number | symbol

export function rowTrendOf(
  row: RecordType,
  rowTrends: DashboardRowTrends,
  idProvider: RowIdProvider = defaultIdProvider
): DashboardMetricTrend | undefined {
  return rowTrends[String(idProvider(row))]
}

/**
 * Rendered through the table's own `delta` cell rather than the widget's
 * `TrendBadge` — a column renders a value-display definition, not arbitrary
 * nodes.
 */
export function changeColumn(
  label: string,
  rowTrends: DashboardRowTrends,
  idProvider?: RowIdProvider,
  sorting?: string
): TableColumnDefinition<RecordType, SortingsDefinition, never> {
  return {
    id: "dashboard-row-change",
    label,
    sorting,
    render: (row: RecordType): RendererDefinition | string | undefined =>
      renderTrend(rowTrendOf(row, rowTrends, idProvider)),
  }
}

function renderTrend(
  trend: DashboardMetricTrend | undefined
): RendererDefinition | string | undefined {
  if (!trend?.label) return undefined

  // No sentiment: the arrow follows the direction and carries its own colour,
  // and a flat trend has neither, so it stays the plain text it always was.
  if (!trend.sentiment) {
    if (trend.direction === "flat") return trend.label
    return {
      type: "delta",
      value: {
        label: trend.label,
        deltaStatus: trend.direction === "up" ? "positive" : "negative",
      },
    }
  }

  return {
    type: "delta",
    value: {
      label: trend.label,
      deltaStatus: trend.sentiment,
      arrow: trend.direction === "flat" ? "none" : trend.direction,
    },
  }
}
