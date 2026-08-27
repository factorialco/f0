import { useCallback, useRef, useState } from "react"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import type {
  DashboardChartData,
  DashboardItem,
  DashboardLocationData,
  DashboardMetricData,
  DashboardMetricItem,
} from "../types"

import { isRenderableChart } from "../utils/chartDataAdapter"
import { chartDataToTabular } from "../utils/chartDataToTabular"
import { downloadMultiSheetExcel } from "../utils/downloadHelpers"
import { extractColumns } from "../utils/extractColumns"

type SheetData = {
  name: string
  columns: string[]
  rows: Record<string, unknown>[]
  /** Row-lookup keys parallel to `columns`, when headers may collide. */
  keys?: string[]
}

const LOCATION_EXPORT_KEYS = {
  location: "location:name",
  density: "location:density",
  details: "location:details",
  item: "location:item",
  description: "location:description",
} as const
const LOCATION_DETAIL_VALUE_PREFIX = "location:value:"

interface UseDashboardExportOptions<Filters extends FiltersDefinition> {
  items: DashboardItem<Filters>[]
  filters: FiltersState<Filters>
  filename?: string
}

interface UseDashboardExportResult {
  exportAsExcel: () => Promise<void>
  isExporting: boolean
}

function getItemFilters<Filters extends FiltersDefinition>(
  item: { useDashboardFilters?: boolean },
  filters: FiltersState<Filters>
): FiltersState<Filters> {
  return item.useDashboardFilters === false
    ? ({} as FiltersState<Filters>)
    : filters
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
      const data: DashboardMetricData = await item.fetchData(
        getItemFilters(item, filters)
      )
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
          const data: DashboardChartData = await item.fetchData(
            getItemFilters(item, filters)
          )
          // Same guard `ChartItem` applies when rendering: without it an
          // unrenderable config throws inside the converter and the sheet is
          // dropped by the catch below, which reads as a silent omission
          // rather than a stated one.
          if (!isRenderableChart(item.chart)) {
            console.warn(
              `[useDashboardExport] Skipped chart "${item.title}": unsupported chart type`
            )
            return null
          }
          const tabular = chartDataToTabular(item.chart, data)
          return {
            name: item.title,
            columns: tabular.columns,
            rows: tabular.rows,
            keys: tabular.keys,
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
          const sourceDef = item.createSource(getItemFilters(item, filters))
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

      if (item.type === "location") {
        try {
          const labels = item.location.exportLabels
          const data: DashboardLocationData = await item.fetchData(
            getItemFilters(item, filters)
          )
          const rows = data.locations.flatMap((location) => {
            if (location.details.length === 0) {
              return [
                {
                  [LOCATION_EXPORT_KEYS.location]: location.name,
                  [LOCATION_EXPORT_KEYS.density]: location.density,
                  [LOCATION_EXPORT_KEYS.details]: location.detailsLabel,
                },
              ]
            }

            return location.details.map((detail) => {
              const row: Record<string, unknown> = {
                [LOCATION_EXPORT_KEYS.location]: location.name,
                [LOCATION_EXPORT_KEYS.density]: location.density,
                [LOCATION_EXPORT_KEYS.details]: location.detailsLabel,
                [LOCATION_EXPORT_KEYS.item]: detail.title,
              }
              if (detail.description) {
                row[LOCATION_EXPORT_KEYS.description] = detail.description
              }
              for (const value of detail.values) {
                row[`${LOCATION_DETAIL_VALUE_PREFIX}${value.label}`] =
                  value.value
              }
              return row
            })
          })
          if (rows.length === 0) return null
          const keys = Array.from(
            new Set(
              rows.flatMap((row) =>
                Object.keys(row).filter((key) => !key.startsWith("_"))
              )
            )
          )
          const headersByKey: Record<string, string> = {
            [LOCATION_EXPORT_KEYS.location]: labels.location,
            [LOCATION_EXPORT_KEYS.density]: labels.density,
            [LOCATION_EXPORT_KEYS.details]: labels.details,
            [LOCATION_EXPORT_KEYS.item]: labels.item,
            [LOCATION_EXPORT_KEYS.description]: labels.description,
          }
          return {
            name: item.title,
            columns: keys.map(
              (key) =>
                headersByKey[key] ??
                key.slice(LOCATION_DETAIL_VALUE_PREFIX.length)
            ),
            keys,
            rows,
          }
        } catch (err) {
          console.warn(
            `[useDashboardExport] Failed to export location item "${item.title}":`,
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

  // The export callback must keep a STABLE identity across renders. It is
  // handed to consumers via `onExportReady`, which typically stores it in
  // state — if its identity followed `items`/`filters` (rebuilt by many
  // consumers on every render), that store-on-change would re-render the
  // consumer and loop forever. Latest values are read through refs instead.
  const itemsRef = useRef(items)
  itemsRef.current = items
  const filtersRef = useRef(filters)
  filtersRef.current = filters
  const filenameRef = useRef(filename)
  filenameRef.current = filename

  const exportAsExcel = useCallback(async () => {
    setIsExporting(true)
    try {
      const sheets = await buildAllSheets(itemsRef.current, filtersRef.current)
      if (sheets.length > 0) {
        downloadMultiSheetExcel(sheets, filenameRef.current)
      }
    } finally {
      setIsExporting(false)
    }
  }, [])

  return { exportAsExcel, isExporting }
}
