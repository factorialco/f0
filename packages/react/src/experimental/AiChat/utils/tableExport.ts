/**
 * Utility functions to parse markdown tables and export them to Excel/CSV format
 */

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
 * Downloads tables as an Excel-compatible CSV file
 * @param content - The markdown content containing tables
 * @param filename - Optional filename (without extension)
 */
export function downloadTablesAsExcel(
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

  // Create download link
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${filename}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
