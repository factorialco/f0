import { useCallback, useMemo, useRef, useState } from "react"

import type { DropdownItem } from "@/experimental/Navigation/Dropdown"

import { toasts } from "@/hooks/toast"
import { Table } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import {
  ExportRowLimitExceededError,
  fetchAllStateAwareRecords,
  type DownloadableSource,
} from "../utils/collectionExport"
import {
  type DownloadableColumn,
  transformCollectionRows,
} from "../utils/collectionColumns"
import { downloadAsCsv, downloadAsExcel } from "../utils/downloadHelpers"

/**
 * Optional per-column metadata declared by the dashboard collection item.
 * Used to (a) produce human-readable headers and (b) anchor the export
 * column order when the user has not tweaked visualization settings.
 */
interface UseCollectionDownloadActionsOptions {
  /** Active data source — read at click-time to respect latest state. */
  source: DownloadableSource | null | undefined
  /** Filename base (no extension). */
  title: string
  /** Declarative column list from the dashboard item (id + label). */
  columns: DownloadableColumn[]
  /**
   * Settings snapshot from OneDataCollection's `onStateChange`. When
   * present we filter out hidden columns and apply the user's preferred
   * order. The shape matches OneDataCollection's internal
   * `TableVisualizationSettings`.
   */
  tableSettings?: { hidden?: string[]; order?: string[] }
}

/**
 * Apply the user's current column visibility / ordering on top of the
 * declarative column list the dashboard item emitted. Hidden columns are
 * dropped; known ids from `order` come first (in that order), unknown
 * ids from the schema keep their original relative position at the tail.
 */
function resolveExportColumns(
  columns: DownloadableColumn[],
  tableSettings: { hidden?: string[]; order?: string[] } | undefined
): DownloadableColumn[] {
  const hidden = new Set(tableSettings?.hidden ?? [])
  const visible = columns.filter((c) => !hidden.has(c.id))

  const order = tableSettings?.order
  if (!order || order.length === 0) return visible

  const byId = new Map(visible.map((c) => [c.id, c]))
  const ordered: DownloadableColumn[] = []
  for (const id of order) {
    const col = byId.get(id)
    if (col) {
      ordered.push(col)
      byId.delete(id)
    }
  }
  // Append any column not mentioned in `order` in its original schema order.
  for (const col of visible) {
    if (byId.has(col.id)) ordered.push(col)
  }
  return ordered
}

/**
 * Build the Excel/CSV download actions for the DashboardItem 3-dot menu.
 * Both actions run against the current view state:
 *   - filters, sortings, search and navigation filters from `source`
 *   - hidden columns + column order from the collection's table settings
 *     (captured via OneDataCollection's `onStateChange` callback)
 *   - human-readable headers pulled from the agent-supplied `columns[].label`
 */
export function useCollectionDownloadActions({
  source,
  title,
  columns,
  tableSettings,
}: UseCollectionDownloadActionsOptions): DropdownItem[] {
  const { t } = useI18n()
  const [isExporting, setIsExporting] = useState(false)
  const exportPromiseRef = useRef<Promise<void> | null>(null)

  const runDownload = useCallback(
    async (fmt: "excel" | "csv") => {
      if (!source) return
      if (exportPromiseRef.current) return exportPromiseRef.current

      const exportPromise = (async () => {
        setIsExporting(true)
        const toastId = toasts.open({
          variant: "loading",
          title: t("ai.dataDownload.downloadPreparing"),
          persistent: true,
        })
        try {
          const records = await fetchAllStateAwareRecords(source)
          const exportColumns = resolveExportColumns(columns, tableSettings)
          if (exportColumns.length === 0 || records.length === 0) {
            toasts.open({
              id: toastId,
              variant: "default",
              title: t("ai.dataDownload.exportEmpty"),
              description: t("ai.dataDownload.exportEmptyDescription"),
            })
            return
          }

          const headerLabels = exportColumns.map((column) => column.label)
          const rowKeys = exportColumns.map((column) => column.id)
          const transformedRows = transformCollectionRows(
            records,
            exportColumns
          )

          if (fmt === "excel")
            downloadAsExcel(headerLabels, transformedRows, title, rowKeys)
          else downloadAsCsv(headerLabels, transformedRows, title, rowKeys)
          toasts.open({
            id: toastId,
            variant: "success",
            title: t("ai.dataDownload.downloadSuccess"),
          })
        } catch (error) {
          const isTooLarge = error instanceof ExportRowLimitExceededError
          toasts.open({
            id: toastId,
            variant: isTooLarge ? "default" : "error",
            title: t(
              isTooLarge
                ? "ai.dataDownload.exportTooLarge"
                : "ai.dataDownload.downloadFailed"
            ),
            description: t(
              isTooLarge
                ? "ai.dataDownload.exportTooLargeDescription"
                : "ai.dataDownload.exportFailedDescription"
            ),
          })
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
    },
    [source, columns, tableSettings, title, t]
  )

  const handleExcel = useCallback(() => runDownload("excel"), [runDownload])
  const handleCsv = useCallback(() => runDownload("csv"), [runDownload])

  return useMemo(() => {
    if (!source) return []
    return [
      {
        label: isExporting
          ? t("ai.dataDownload.exporting")
          : t("ai.dataDownload.download", { format: "Excel" }),
        icon: Table,
        onClick: handleExcel,
        disabled: isExporting,
      },
      {
        label: isExporting
          ? t("ai.dataDownload.exporting")
          : t("ai.dataDownload.download", { format: "CSV" }),
        icon: Table,
        onClick: handleCsv,
        disabled: isExporting,
      },
    ]
  }, [source, t, handleExcel, handleCsv, isExporting])
}
