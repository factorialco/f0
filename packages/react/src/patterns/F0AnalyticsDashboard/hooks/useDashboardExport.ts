import { useCallback, useRef, useState } from "react"

import { toasts } from "@/hooks/toast"
import { useI18n } from "@/lib/providers/i18n"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import type {
  DashboardChartData,
  DashboardItem,
  DashboardMetricData,
  DashboardMetricItem,
} from "../types"

import { isRenderableChart } from "../utils/chartDataAdapter"
import { chartDataToTabular } from "../utils/chartDataToTabular"
import {
  getDownloadableColumns,
  transformCollectionRows,
} from "../utils/collectionColumns"
import {
  ExportRowLimitExceededError,
  fetchAllStateAwareRecords,
} from "../utils/collectionExport"
import { downloadMultiSheetExcel } from "../utils/downloadHelpers"
import { extractColumns } from "../utils/extractColumns"

type SheetData = {
  name: string
  columns: string[]
  rows: Record<string, unknown>[]
  /** Row-lookup keys parallel to `columns`, when headers may collide. */
  keys?: string[]
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

class EmptyDashboardExportError extends Error {
  constructor() {
    super("The dashboard has no data to export")
    this.name = "EmptyDashboardExportError"
  }
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
  }

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
        const data: DashboardChartData = await item.fetchData(
          getItemFilters(item, filters)
        )
        if (!isRenderableChart(item.chart)) {
          throw new Error(
            `[useDashboardExport] Chart "${item.id}" cannot be exported`
          )
        }
        const tabular = chartDataToTabular(item.chart, data)
        return {
          name: item.title,
          columns: tabular.columns,
          rows: tabular.rows,
          keys: tabular.keys,
        }
      }

      if (item.type === "collection") {
        const sourceDef = item.createSource(getItemFilters(item, filters))
        const records = await fetchAllStateAwareRecords(sourceDef)
        const configuredColumns = getDownloadableColumns(item.visualizations)
        if (configuredColumns.length > 0) {
          return {
            name: item.title,
            columns: configuredColumns.map((column) => column.label),
            keys: configuredColumns.map((column) => column.id),
            rows: transformCollectionRows(records, configuredColumns),
          }
        }

        return {
          name: item.title,
          columns: extractColumns(records),
          rows: records,
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
  const { t } = useI18n()
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
  const tRef = useRef(t)
  tRef.current = t
  const exportPromiseRef = useRef<Promise<void> | null>(null)

  const exportAsExcel = useCallback(async () => {
    if (exportPromiseRef.current) return exportPromiseRef.current

    const exportPromise = (async () => {
      setIsExporting(true)
      const toastId = toasts.open({
        variant: "loading",
        title: tRef.current("ai.dataDownload.exportPreparing"),
        persistent: true,
      })

      try {
        const sheets = await buildAllSheets(
          itemsRef.current,
          filtersRef.current
        )
        if (
          sheets.length === 0 ||
          sheets.every((sheet) => sheet.rows.length === 0)
        ) {
          throw new EmptyDashboardExportError()
        }

        downloadMultiSheetExcel(sheets, filenameRef.current, {
          sheetName: tRef.current("ai.dataDownload.exportOverviewSheetName"),
          description: tRef.current(
            "ai.dataDownload.exportOverviewDescription"
          ),
          rowsExported: (amount) =>
            tRef.current("ai.dataDownload.exportRowsExported", { amount }),
          previewTruncated: (amount) =>
            tRef.current("ai.dataDownload.exportPreviewTruncated", {
              amount,
            }),
          fullDataSheet: (sheetName) =>
            tRef.current("ai.dataDownload.exportFullDataSheet", {
              sheetName,
            }),
        })
        toasts.open({
          id: toastId,
          variant: "success",
          title: tRef.current("ai.dataDownload.exportSuccess"),
        })
      } catch (error) {
        const isEmpty = error instanceof EmptyDashboardExportError
        const isTooLarge = error instanceof ExportRowLimitExceededError
        toasts.open({
          id: toastId,
          variant: isEmpty || isTooLarge ? "default" : "error",
          title: tRef.current(
            isEmpty
              ? "ai.dataDownload.exportEmpty"
              : isTooLarge
                ? "ai.dataDownload.exportTooLarge"
                : "ai.dataDownload.exportFailed"
          ),
          description: tRef.current(
            isEmpty
              ? "ai.dataDownload.exportEmptyDescription"
              : isTooLarge
                ? "ai.dataDownload.exportTooLargeDescription"
                : "ai.dataDownload.exportFailedDescription"
          ),
        })
        throw error
      } finally {
        setIsExporting(false)
      }
    })()

    exportPromiseRef.current = exportPromise
    try {
      await exportPromise
    } finally {
      if (exportPromiseRef.current === exportPromise) {
        exportPromiseRef.current = null
      }
    }
  }, [])

  return { exportAsExcel, isExporting }
}
