import * as XLSX from "xlsx"

import type { DataDownloadDataset } from "./types"

/**
 * Generate an .xlsx file from a dataset and trigger a browser download.
 */
export function downloadAsExcel(
  dataset: DataDownloadDataset,
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
export function downloadAsCsv(
  dataset: DataDownloadDataset,
  filename: string
): void {
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
