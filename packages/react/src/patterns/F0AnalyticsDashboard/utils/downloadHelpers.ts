import * as XLSX from "xlsx"

/**
 * Serialize a cell value to a string suitable for spreadsheet/CSV export.
 * - null/undefined → ""
 * - booleans → "true"/"false"
 * - Dates → ISO string
 * - objects/arrays → JSON string
 */
function serializeValue(value: unknown): string {
  if (value == null) return ""
  if (typeof value === "boolean") return String(value)
  if (value instanceof Date) return value.toISOString()
  if (typeof value === "object") return JSON.stringify(value)
  return String(value)
}

/**
 * Trigger a browser download from a Blob.
 */
function triggerDownload(blob: Blob, filename: string): void {
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
  URL.revokeObjectURL(link.href)
}

/**
 * `columns` is used as the header row. By default rows are also looked up by
 * the column string, so duplicate labels collide. Pass `keys` (parallel to
 * `columns`) when row keys differ from headers (e.g. stable column ids vs.
 * human-readable labels) to avoid the collision.
 */
export function downloadAsExcel(
  columns: string[],
  rows: Record<string, unknown>[],
  filename: string,
  keys?: string[]
): void {
  const rowKeys = keys ?? columns
  const wsData = [
    columns,
    ...rows.map((row) => rowKeys.map((k) => serializeValue(row[k]))),
  ]
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(wsData)
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data")

  const buffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })
  triggerDownload(blob, `${filename}.xlsx`)
}

/**
 * Same `keys` semantics as `downloadAsExcel`: header strings come from
 * `columns`, row values are read by `keys ?? columns`.
 */
export function downloadAsCsv(
  columns: string[],
  rows: Record<string, unknown>[],
  filename: string,
  keys?: string[]
): void {
  const rowKeys = keys ?? columns
  const escapeCsv = (value: unknown): string => {
    const str = serializeValue(value)
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const lines = [
    columns.map(escapeCsv).join(","),
    ...rows.map((row) => rowKeys.map((k) => escapeCsv(row[k])).join(",")),
  ]

  const blob = new Blob([lines.join("\n")], {
    type: "text/csv;charset=utf-8;",
  })
  triggerDownload(blob, `${filename}.csv`)
}

/**
 * Download a data URL (e.g. from ECharts getDataURL) as an image file.
 */
export function downloadAsImage(
  dataUrl: string,
  filename: string,
  ext: "png" | "jpg"
): void {
  const link = document.createElement("a")
  link.href = dataUrl
  link.download = `${filename}.${ext}`
  link.click()
}

/**
 * Create an Excel workbook with multiple sheets and trigger download.
 * Each entry becomes a separate sheet.
 */
export function downloadMultiSheetExcel(
  sheets: {
    name: string
    columns: string[]
    rows: Record<string, unknown>[]
  }[],
  filename: string
): void {
  const workbook = XLSX.utils.book_new()

  for (const sheet of sheets) {
    const wsData = [
      sheet.columns,
      ...sheet.rows.map((row) =>
        sheet.columns.map((col) => serializeValue(row[col]))
      ),
    ]
    const worksheet = XLSX.utils.aoa_to_sheet(wsData)
    // Sheet names are limited to 31 chars in Excel
    const safeName = sheet.name.slice(0, 31)
    XLSX.utils.book_append_sheet(workbook, worksheet, safeName)
  }

  const buffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })
  triggerDownload(blob, `${filename}.xlsx`)
}
