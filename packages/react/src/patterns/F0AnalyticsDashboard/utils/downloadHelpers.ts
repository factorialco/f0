import * as XLSX from "xlsx"

type SpreadsheetValue = string | number | boolean

export interface DashboardOverviewCopy {
  sheetName: string
  description: string
  rowsExported: (amount: number) => string
  previewTruncated: (amount: number) => string
  fullDataSheet: (sheetName: string) => string
}

const DASHBOARD_OVERVIEW_PREVIEW_ROWS = 50

/**
 * Serialize a cell value for spreadsheet/CSV export.
 * - null/undefined → ""
 * - numbers/booleans retain their native type for Excel
 * - Dates → ISO string
 * - objects/arrays → JSON string
 * - user-authored strings that could execute as spreadsheet formulas are
 *   prefixed with an apostrophe
 */
export function serializeValue(value: unknown): SpreadsheetValue {
  if (value == null) return ""
  if (typeof value === "number" || typeof value === "boolean") return value
  if (value instanceof Date) return value.toISOString()
  if (typeof value === "object") return JSON.stringify(value)
  const serialized = String(value)
  return /^[\s\u0000-\u001F]*[=+\-@]/.test(serialized)
    ? `'${serialized}`
    : serialized
}

/**
 * Keep downloads portable across Windows, macOS, mobile browsers, and shared
 * drives. The browser may accept reserved characters that the destination
 * filesystem cannot persist.
 */
export function sanitizeDownloadFilename(
  filename: string,
  fallback = "download"
): string {
  const sanitized = filename
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
    .slice(0, 180)
    .replace(/[. ]+$/g, "")

  if (!sanitized) return fallback
  const basename = sanitized.split(".", 1)[0]
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(basename)) {
    return `_${sanitized}`
  }
  return sanitized
}

/** Excel sheet names are case-insensitively unique and limited to 31 chars. */
export function uniqueExcelSheetName(
  requestedName: string,
  usedNames: Set<string>
): string {
  const sanitized = requestedName.replace(/[\\/?*:[\]]/g, "-").trim()
  const base = sanitized || "Sheet"
  let candidate = base.slice(0, 31)
  let suffixNumber = 2

  while (usedNames.has(candidate.toLowerCase())) {
    const suffix = ` (${suffixNumber})`
    candidate = `${base.slice(0, 31 - suffix.length).trimEnd()}${suffix}`
    suffixNumber += 1
  }

  usedNames.add(candidate.toLowerCase())
  return candidate
}

/**
 * Trigger a browser download from a Blob.
 */
function triggerDownload(blob: Blob, filename: string): void {
  const link = document.createElement("a")
  const objectUrl = URL.createObjectURL(blob)
  link.href = objectUrl
  link.download = filename
  link.style.display = "none"
  document.body.appendChild(link)
  try {
    link.click()
  } finally {
    link.remove()
    // Safari and Chromium can cancel the download if the Blob URL is revoked
    // synchronously in the click stack.
    setTimeout(() => URL.revokeObjectURL(objectUrl), 0)
  }
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
  triggerDownload(blob, `${sanitizeDownloadFilename(filename)}.xlsx`)
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
    const str = String(serializeValue(value))
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
  triggerDownload(blob, `${sanitizeDownloadFilename(filename)}.csv`)
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
  link.download = `${sanitizeDownloadFilename(filename)}.${ext}`
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
    /** Row-lookup keys parallel to `columns`; see {@link downloadAsExcel}. */
    keys?: string[]
  }[],
  filename: string,
  overview?: DashboardOverviewCopy
): void {
  const workbook = XLSX.utils.book_new()
  const usedSheetNames = new Set<string>()

  const overviewSheetName = overview
    ? uniqueExcelSheetName(overview.sheetName, usedSheetNames)
    : undefined
  const namedSheets = sheets.map((sheet) => ({
    ...sheet,
    safeName: uniqueExcelSheetName(sheet.name, usedSheetNames),
  }))

  if (overview && overviewSheetName && namedSheets.length > 1) {
    const overviewRows: SpreadsheetValue[][] = [
      [serializeValue(filename)],
      [overview.description],
      [],
    ]
    const linkedRows: Array<{ row: number; sheetName: string }> = []

    for (const sheet of namedSheets) {
      const rowKeys = sheet.keys ?? sheet.columns
      linkedRows.push({ row: overviewRows.length, sheetName: sheet.safeName })
      overviewRows.push([
        serializeValue(sheet.name),
        overview.rowsExported(sheet.rows.length),
      ])
      overviewRows.push(sheet.columns.map(serializeValue))
      overviewRows.push(
        ...sheet.rows
          .slice(0, DASHBOARD_OVERVIEW_PREVIEW_ROWS)
          .map((row) => rowKeys.map((key) => serializeValue(row[key])))
      )
      if (sheet.rows.length > DASHBOARD_OVERVIEW_PREVIEW_ROWS) {
        overviewRows.push([
          overview.previewTruncated(DASHBOARD_OVERVIEW_PREVIEW_ROWS),
        ])
      }
      overviewRows.push([overview.fullDataSheet(sheet.safeName)])
      linkedRows.push({
        row: overviewRows.length - 1,
        sheetName: sheet.safeName,
      })
      overviewRows.push([])
    }

    const overviewWorksheet = XLSX.utils.aoa_to_sheet(overviewRows)
    for (const link of linkedRows) {
      const cell = overviewWorksheet[`A${link.row + 1}`]
      if (cell) {
        cell.l = {
          Target: `#'${link.sheetName.replace(/'/g, "''")}'!A1`,
        }
      }
    }
    overviewWorksheet["!cols"] = Array.from(
      {
        length: Math.max(
          2,
          ...namedSheets.map((sheet) => sheet.columns.length)
        ),
      },
      (_, index) => ({ wch: index === 0 ? 36 : 24 })
    )
    XLSX.utils.book_append_sheet(workbook, overviewWorksheet, overviewSheetName)
  }

  for (const sheet of namedSheets) {
    const rowKeys = sheet.keys ?? sheet.columns
    const wsData = [
      sheet.columns,
      ...sheet.rows.map((row) =>
        rowKeys.map((key) => serializeValue(row[key]))
      ),
    ]
    const worksheet = XLSX.utils.aoa_to_sheet(wsData)
    XLSX.utils.book_append_sheet(workbook, worksheet, sheet.safeName)
  }

  const buffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })
  triggerDownload(blob, `${sanitizeDownloadFilename(filename)}.xlsx`)
}
