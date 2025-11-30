/**
 * Utility functions to parse markdown tables and export them to Excel/CSV format
 */

import * as XLSX from "xlsx"

export type ExportFormat = "csv" | "xlsx"

interface TableData {
  headers: string[]
  rows: string[][]
}

/**
 * Parses all markdown tables from a string content
 * @param content - The markdown content containing tables
 * @returns Array of TableData objects, one for each table found
 */
export function parseMarkdownTables(content: string): TableData[] {
  const tables: TableData[] = []

  // Match markdown table patterns
  // A table starts with a header row, followed by a separator row (---|---|...), then data rows
  // Note: The separator row pattern includes | in the character class to match multi-column tables
  const tableRegex =
    /(?:^|\n)((?:\|[^\n]+\|)\n(?:\|[\s:|-]+\|)\n(?:(?:\|[^\n]+\|)(?:\n|$))+)/gm

  const matches = content.matchAll(tableRegex)

  for (const match of matches) {
    const tableContent = match[1]
    const lines = tableContent.trim().split("\n")

    if (lines.length < 3) continue // Need at least header, separator, and one data row

    // Parse header row
    const headerLine = lines[0]
    const headers = parseTableRow(headerLine)

    // Skip separator line (index 1)
    // Parse data rows
    const rows: string[][] = []
    for (let i = 2; i < lines.length; i++) {
      const row = parseTableRow(lines[i])
      if (row.length > 0) {
        rows.push(row)
      }
    }

    if (headers.length > 0 && rows.length > 0) {
      tables.push({ headers, rows })
    }
  }

  return tables
}

/**
 * Parses a single markdown table row into cells
 */
function parseTableRow(line: string): string[] {
  // Remove leading/trailing pipes and split by |
  const trimmed = line.trim()
  const withoutPipes = trimmed.startsWith("|") ? trimmed.slice(1) : trimmed
  const withoutTrailingPipe = withoutPipes.endsWith("|")
    ? withoutPipes.slice(0, -1)
    : withoutPipes

  return withoutTrailingPipe.split("|").map((cell) => cell.trim())
}

/**
 * Checks if markdown content contains at least one table
 */
export function hasMarkdownTables(content: string): boolean {
  // Note: The separator row pattern includes | in the character class to match multi-column tables
  const tableRegex =
    /(?:^|\n)(?:\|[^\n]+\|)\n(?:\|[\s:|-]+\|)\n(?:(?:\|[^\n]+\|)(?:\n|$))+/m
  return tableRegex.test(content)
}

/**
 * Escapes a cell value for CSV format
 */
function escapeCSVCell(cell: string): string {
  // If the cell contains comma, quote, or newline, wrap in quotes and escape existing quotes
  if (cell.includes(",") || cell.includes('"') || cell.includes("\n")) {
    return `"${cell.replace(/"/g, '""')}"`
  }
  return cell
}

/**
 * Converts table data to CSV format
 */
function tableToCSV(table: TableData): string {
  const lines: string[] = []

  // Add headers
  lines.push(table.headers.map(escapeCSVCell).join(","))

  // Add rows
  for (const row of table.rows) {
    lines.push(row.map(escapeCSVCell).join(","))
  }

  return lines.join("\n")
}

/**
 * Converts all tables to a single CSV (separated by empty lines)
 */
function tablesToCSV(tables: TableData[]): string {
  return tables.map(tableToCSV).join("\n\n")
}

/**
 * Downloads a blob as a file
 */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Downloads tables as CSV file
 * @param content - The markdown content containing tables
 * @param filename - Filename (without extension)
 */
export function downloadTablesAsCSV(
  content: string,
  filename: string = "table-export"
): void {
  const tables = parseMarkdownTables(content)

  if (tables.length === 0) {
    console.warn("No tables found in content")
    return
  }

  const csvContent = tablesToCSV(tables)

  // Add UTF-8 BOM for Excel compatibility
  const BOM = "\uFEFF"
  const blob = new Blob([BOM + csvContent], {
    type: "text/csv;charset=utf-8",
  })

  downloadBlob(blob, `${filename}.csv`)
}

/**
 * Downloads tables as XLSX file
 * @param content - The markdown content containing tables
 * @param filename - Filename (without extension)
 */
export function downloadTablesAsXLSX(
  content: string,
  filename: string = "table-export"
): void {
  const tables = parseMarkdownTables(content)

  if (tables.length === 0) {
    console.warn("No tables found in content")
    return
  }

  // Create a new workbook
  const workbook = XLSX.utils.book_new()

  // Add each table as a separate sheet
  tables.forEach((table, index) => {
    // Combine headers and rows into a single array
    const data = [table.headers, ...table.rows]

    // Create worksheet from array
    const worksheet = XLSX.utils.aoa_to_sheet(data)

    // Add worksheet to workbook
    const sheetName = tables.length > 1 ? `Table ${index + 1}` : "Table"
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
  })

  // Generate XLSX file and download
  const xlsxBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
  const blob = new Blob([xlsxBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })

  downloadBlob(blob, `${filename}.xlsx`)
}

/**
 * Downloads tables in the specified format
 * @param content - The markdown content containing tables
 * @param filename - Filename (without extension)
 * @param format - Export format ('csv' or 'xlsx')
 */
export function downloadTables(
  content: string,
  filename: string = "table-export",
  format: ExportFormat = "csv"
): void {
  if (format === "xlsx") {
    downloadTablesAsXLSX(content, filename)
  } else {
    downloadTablesAsCSV(content, filename)
  }
}

/**
 * @deprecated Use downloadTablesAsCSV or downloadTables instead
 */
export function downloadTablesAsExcel(
  content: string,
  filename: string = "table-export"
): void {
  downloadTablesAsCSV(content, filename)
}

/**
 * Extracts table data from a DOM table element
 * @param tableElement - The HTML table element
 * @returns TableData object with headers and rows
 */
export function extractTableDataFromElement(
  tableElement: HTMLTableElement
): TableData {
  const headers: string[] = []
  const rows: string[][] = []

  // Extract headers from thead or first row
  const headerCells = tableElement.querySelectorAll("thead th, thead td")
  if (headerCells.length > 0) {
    headerCells.forEach((cell) => {
      headers.push(cell.textContent?.trim() || "")
    })
  } else {
    // Fallback: use first row as headers
    const firstRow = tableElement.querySelector("tr")
    if (firstRow) {
      firstRow.querySelectorAll("th, td").forEach((cell) => {
        headers.push(cell.textContent?.trim() || "")
      })
    }
  }

  // Extract rows from tbody or all rows (skipping header row if no thead)
  const tbody = tableElement.querySelector("tbody")
  const dataRows = tbody
    ? tbody.querySelectorAll("tr")
    : tableElement.querySelectorAll("tr")

  const startIndex = headerCells.length > 0 ? 0 : 1 // Skip first row if it was used as headers
  dataRows.forEach((row, index) => {
    if (index >= startIndex || headerCells.length > 0) {
      const rowData: string[] = []
      row.querySelectorAll("td, th").forEach((cell) => {
        rowData.push(cell.textContent?.trim() || "")
      })
      if (rowData.length > 0 && rowData.some((cell) => cell !== "")) {
        rows.push(rowData)
      }
    }
  })

  return { headers, rows }
}

/**
 * Downloads a single table from a DOM element
 * @param tableElement - The HTML table element
 * @param filename - Filename (without extension)
 * @param format - Export format ('csv' or 'xlsx')
 */
export function downloadTableFromElement(
  tableElement: HTMLTableElement,
  filename: string = "table-export",
  format: ExportFormat = "xlsx"
): void {
  const tableData = extractTableDataFromElement(tableElement)

  if (tableData.headers.length === 0 && tableData.rows.length === 0) {
    console.warn("No data found in table")
    return
  }

  if (format === "xlsx") {
    // Create workbook with single table
    const workbook = XLSX.utils.book_new()
    const data = [tableData.headers, ...tableData.rows]
    const worksheet = XLSX.utils.aoa_to_sheet(data)
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table")

    const xlsxBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" })
    const blob = new Blob([xlsxBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })
    downloadBlob(blob, `${filename}.xlsx`)
  } else {
    const csvContent = tableToCSV(tableData)
    const BOM = "\uFEFF"
    const blob = new Blob([BOM + csvContent], {
      type: "text/csv;charset=utf-8",
    })
    downloadBlob(blob, `${filename}.csv`)
  }
}
