import { Markdown } from "@copilotkit/react-ui"
import { useCallback } from "react"
import * as XLSX from "xlsx"

import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import Download from "@/icons/app/Download"
import { useI18n } from "@/lib/providers/i18n"

import { f0MarkdownRenderersSimple } from "../F0MarkdownRenderers"
import { F0DataDownloadDataset, F0DataDownloadProps } from "./types"

/**
 * Generate an .xlsx file from a dataset and trigger a browser download.
 */
function downloadAsExcel(
  dataset: F0DataDownloadDataset,
  filename: string
): void {
  const { columns, rows, columnLabels } = dataset
  const headers = columns.map((col) => columnLabels?.[col] ?? col)
  const wsData = [
    headers,
    ...rows.map((row) => columns.map((col) => row[col] ?? "")),
  ]
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(wsData)
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data")

  const buffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })

  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = `${filename}.xlsx`
  link.click()
  URL.revokeObjectURL(link.href)
}

/**
 * Generate a CSV string from a dataset and trigger a browser download.
 */
function downloadAsCsv(dataset: F0DataDownloadDataset, filename: string): void {
  const { columns, rows, columnLabels } = dataset
  const headers = columns.map((col) => columnLabels?.[col] ?? col)

  const escapeCsv = (value: unknown): string => {
    const str = value == null ? "" : String(value)
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const lines = [
    headers.map(escapeCsv).join(","),
    ...rows.map((row) => columns.map((col) => escapeCsv(row[col])).join(",")),
  ]

  const blob = new Blob([lines.join("\n")], {
    type: "text/csv;charset=utf-8;",
  })

  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = `${filename}.csv`
  link.click()
  URL.revokeObjectURL(link.href)
}

/**
 * Component that renders an optional markdown preview followed by
 * a dropdown button with "Download Excel" as the primary action and
 * "Download CSV" as a secondary option. Files are generated client-side
 * from the raw dataset provided by the agent.
 */
export const F0DataDownload = ({
  markdown,
  filename = "dataset",
  dataset,
}: F0DataDownloadProps) => {
  const i18n = useI18n()

  const downloadItems = [
    {
      value: "excel",
      label: i18n.t("ai.dataDownload.download", { format: "Excel" }),
      icon: Download,
    },
    {
      value: "csv",
      label: i18n.t("ai.dataDownload.download", { format: "CSV" }),
      icon: Download,
    },
  ]

  const handleDownload = useCallback(
    (format: string, _item: unknown) => {
      if (format === "excel") {
        downloadAsExcel(dataset, filename)
      } else if (format === "csv") {
        downloadAsCsv(dataset, filename)
      } else {
        console.warn(`[F0DataDownload] Unknown download format: "${format}"`)
      }
    },
    [dataset, filename]
  )

  const { totalCount, previewCount } = dataset
  const showPreviewNote =
    totalCount != null && previewCount != null && totalCount > previewCount

  return (
    <div className="flex flex-col gap-2 pb-2">
      {markdown && (
        <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
          <Markdown content={markdown} components={f0MarkdownRenderersSimple} />
        </div>
      )}
      {showPreviewNote && (
        <p className="text-sm font-medium text-f1-foreground-secondary">
          {i18n.t("ai.dataDownloadPreview", {
            shown: previewCount,
            total: totalCount,
          })}
        </p>
      )}
      <div className="flex justify-start">
        <F0ButtonDropdown
          variant="outline"
          size="md"
          items={downloadItems}
          value="excel"
          onClick={handleDownload}
        />
      </div>
    </div>
  )
}
