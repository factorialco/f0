/**
 * Utility functions to export tables to Excel format
 */

import * as XLSX from "xlsx"

interface TableData {
  headers: string[]
  rows: string[][]
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
 * Extracts table data from a DOM table element
 * @param tableElement - The HTML table element
 * @returns TableData object with headers and rows
 */
function extractTableDataFromElement(
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
 * Downloads a table from a DOM element as Excel file
 * @param tableElement - The HTML table element
 * @param filename - Filename (without extension)
 */
export function downloadTableAsExcel(
  tableElement: HTMLTableElement,
  filename: string = "table-export"
): void {
  const tableData = extractTableDataFromElement(tableElement)

  if (tableData.headers.length === 0 && tableData.rows.length === 0) {
    console.warn("No data found in table")
    return
  }

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
}
