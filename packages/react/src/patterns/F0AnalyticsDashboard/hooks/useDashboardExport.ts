import { useCallback, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"

import type {
  DashboardChartData,
  DashboardItem,
  DashboardMetricData,
  DashboardMetricItem,
} from "../types"

import { chartDataToTabular } from "../utils/chartDataToTabular"
import { downloadMultiSheetExcel } from "../utils/downloadHelpers"
import { extractColumns } from "../utils/extractColumns"

type SheetData = {
  name: string
  columns: string[]
  rows: Record<string, unknown>[]
}

interface UseDashboardExportOptions<Filters extends FiltersDefinition> {
  items: DashboardItem<Filters>[]
  filters: FiltersState<Filters>
  filename?: string
}

interface UseDashboardExportResult {
  exportAsExcel: () => Promise<void>
  isExporting: boolean
}

async function buildMetricsSheet<Filters extends FiltersDefinition>(
  metricItems: DashboardMetricItem<Filters>[],
  filters: FiltersState<Filters>
): Promise<SheetData | null> {
  if (metricItems.length === 0) return null

  const rows: Record<string, unknown>[] = []
  let hasPrevious = false

  for (const item of metricItems) {
    try {
      const data: DashboardMetricData = await item.fetchData(filters)
      const row: Record<string, unknown> = {
        Metric: item.title,
        Value: data.value,
      }
      if (data.previousValue !== undefined) {
        row["Previous Value"] = data.previousValue
        hasPrevious = true
      }
      rows.push(row)
    } catch (err) {
      console.warn(
        `[useDashboardExport] Failed to export metric "${item.title}":`,
        err
      )
    }
  }

  if (rows.length === 0) return null

  const columns = hasPrevious
    ? ["Metric", "Value", "Previous Value"]
    : ["Metric", "Value"]

  return { name: "Metrics", columns, rows }
}

async function buildAllSheets<Filters extends FiltersDefinition>(
  items: DashboardItem<Filters>[],
  filters: FiltersState<Filters>
): Promise<SheetData[]> {
  const sheets: SheetData[] = []

  // Collect all metrics into a single "Metrics" sheet
  const metricItems = items.filter(
    (item): item is DashboardMetricItem<Filters> => item.type === "metric"
  )
  const metricsSheet = await buildMetricsSheet(metricItems, filters)
  if (metricsSheet) sheets.push(metricsSheet)

  // Build sheets for charts and collections in parallel
  const nonMetricItems = items.filter((item) => item.type !== "metric")
  const sheetPromises = nonMetricItems.map(
    async (item): Promise<SheetData | null> => {
      if (item.type === "chart") {
        try {
          const data: DashboardChartData = await item.fetchData(filters)
          const tabular = chartDataToTabular(item.chart, data)
          return {
            name: item.title,
            columns: tabular.columns,
            rows: tabular.rows,
          }
        } catch (err) {
          console.warn(
            `[useDashboardExport] Failed to export chart "${item.title}":`,
            err
          )
          return null
        }
      }

      if (item.type === "collection") {
        try {
          const sourceDef = item.createSource(filters)
          const result = await sourceDef.dataAdapter.fetchData({
            filters: {},
            sortings: [],
            pagination: { currentPage: 1, perPage: 100000 },
          })
          const records: Record<string, unknown>[] =
            "records" in result
              ? result.records
              : (result as Record<string, unknown>[])
          if (records.length === 0) return null
          const columns = extractColumns(records)
          return { name: item.title, columns, rows: records }
        } catch (err) {
          console.warn(
            `[useDashboardExport] Failed to export collection "${item.title}":`,
            err
          )
          return null
        }
      }

      return null
    }
  )

  const results = await Promise.all(sheetPromises)
  for (const result of results) {
    if (result) sheets.push(result)
  }

  return sheets
}

export function useDashboardExport<Filters extends FiltersDefinition>({
  items,
  filters,
  filename = "dashboard",
}: UseDashboardExportOptions<Filters>): UseDashboardExportResult {
  const [isExporting, setIsExporting] = useState(false)

  const exportAsExcel = useCallback(async () => {
    setIsExporting(true)
    try {
      const sheets = await buildAllSheets(items, filters)
      if (sheets.length > 0) {
        downloadMultiSheetExcel(sheets, filename)
      }
    } finally {
      setIsExporting(false)
    }
  }, [items, filters, filename])

  return { exportAsExcel, isExporting }
}
