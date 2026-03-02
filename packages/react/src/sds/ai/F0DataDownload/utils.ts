import { F0DataDownloadDataset } from "./types"

/** Trigger a browser download from an in-memory Blob. */
export function triggerDownload(blob: Blob, name: string): void {
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = name
  link.click()
  URL.revokeObjectURL(link.href)
}

/** Resolve display headers from column keys, using columnLabels when available. */
export function resolveHeaders(
  columns: string[],
  columnLabels?: Record<string, string>
): string[] {
  return columns.map((col) => columnLabels?.[col] ?? col)
}

/** Build a 2D array of [headers, ...rows] ready for spreadsheet or table generation. */
export function buildTableData(
  dataset: F0DataDownloadDataset
): [headers: string[], ...rows: unknown[][]] {
  const { columns, rows, columnLabels } = dataset
  const headers = resolveHeaders(columns, columnLabels)
  return [headers, ...rows.map((row) => columns.map((col) => row[col] ?? ""))]
}

/**
 * Escape a value for a delimiter-separated format (CSV or TSV).
 * Wraps in double-quotes when the value contains the delimiter, a quote, or a newline.
 */
export function escapeDelimited(value: unknown, delimiter: string): string {
  const str = value == null ? "" : String(value)
  if (
    str.includes(delimiter) ||
    str.includes('"') ||
    str.includes("\n") ||
    str.includes("\r")
  ) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

/**
 * Build a delimiter-separated string (CSV or TSV) from a dataset.
 * Reused by both csv.ts and tsv.ts to avoid duplication.
 */
export function buildDelimitedString(
  dataset: F0DataDownloadDataset,
  delimiter: string
): string {
  const { columns, rows, columnLabels } = dataset
  const headers = resolveHeaders(columns, columnLabels)

  const lines = [
    headers.map((h) => escapeDelimited(h, delimiter)).join(delimiter),
    ...rows.map((row) =>
      columns.map((col) => escapeDelimited(row[col], delimiter)).join(delimiter)
    ),
  ]

  return lines.join("\n")
}
