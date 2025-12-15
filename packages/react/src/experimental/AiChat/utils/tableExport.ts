import * as XLSX from "xlsx"

function extractTableData(table: HTMLTableElement) {
  const headers: string[] = []
  const rows: string[][] = []

  const headerCells = table.querySelectorAll("thead th, thead td")
  if (headerCells.length > 0) {
    headerCells.forEach((cell) => headers.push(cell.textContent?.trim() || ""))
  } else {
    const firstRow = table.querySelector("tr")
    firstRow
      ?.querySelectorAll("th, td")
      .forEach((cell) => headers.push(cell.textContent?.trim() || ""))
  }

  const tbody = table.querySelector("tbody")
  const dataRows = tbody ? tbody.querySelectorAll("tr") : table.querySelectorAll("tr")
  const startIndex = headerCells.length > 0 ? 0 : 1

  dataRows.forEach((row, i) => {
    if (i >= startIndex || headerCells.length > 0) {
      const rowData: string[] = []
      row.querySelectorAll("td, th").forEach((cell) => {
        rowData.push(cell.textContent?.trim() || "")
      })
      if (rowData.some((cell) => cell !== "")) {
        rows.push(rowData)
      }
    }
  })

  return { headers, rows }
}

export function downloadTableAsExcel(table: HTMLTableElement, filename = "table-export") {
  const { headers, rows } = extractTableData(table)
  if (headers.length === 0 && rows.length === 0) return

  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows])
  XLSX.utils.book_append_sheet(workbook, worksheet, "Table")

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
