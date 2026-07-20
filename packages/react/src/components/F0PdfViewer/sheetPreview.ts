// Imports SheetJS — only ever import this module from lazy-loaded sheet
// preview components (SheetViewer, the chat's ChatSheetThumbnail) so xlsx
// stays out of the consumers' base chunks.
import * as XLSX from "xlsx"

export type SheetGrid = {
  /** Tab name from the workbook. */
  name: string
  /** Formatted cell text (dates/numbers as Excel would display them). */
  rows: string[][]
  /** True when the sheet had more rows than the cap. */
  truncatedRows: boolean
}

/**
 * Parses a workbook (xlsx/xls/csv — SheetJS sniffs the format) into plain
 * string grids, capped so a huge sheet can't freeze the preview. The cap is
 * applied through the parse `range`, so out-of-range cells are never
 * materialized.
 */
export const parseWorkbook = (
  data: ArrayBuffer,
  { maxRows, maxCols }: { maxRows: number; maxCols: number }
): SheetGrid[] => {
  const workbook = XLSX.read(data, { type: "array" })
  return workbook.SheetNames.map((name) => {
    const sheet = workbook.Sheets[name]
    const ref = sheet?.["!ref"]
    if (!sheet || !ref) return { name, rows: [], truncatedRows: false }
    const range = XLSX.utils.decode_range(ref)
    const truncatedRows = range.e.r - range.s.r + 1 > maxRows
    range.e.r = Math.min(range.e.r, range.s.r + maxRows - 1)
    range.e.c = Math.min(range.e.c, range.s.c + maxCols - 1)
    const rows = XLSX.utils.sheet_to_json<string[]>(sheet, {
      header: 1,
      raw: false, // formatted text, not raw values
      defval: "",
      range,
    })
    return { name, rows, truncatedRows }
  })
}

/** Column header letters (A, B, …, Z, AA…) for the widest row of a grid. */
export const columnLetters = (rows: string[][]): string[] => {
  const count = rows.reduce((max, row) => Math.max(max, row.length), 0)
  return Array.from({ length: count }, (_, i) => XLSX.utils.encode_col(i))
}

/** Fetches and parses a spreadsheet attachment. Throws on HTTP/parse errors. */
export const fetchWorkbook = async (
  url: string,
  caps: { maxRows: number; maxCols: number }
): Promise<SheetGrid[]> => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to fetch sheet: ${response.status}`)
  return parseWorkbook(await response.arrayBuffer(), caps)
}
