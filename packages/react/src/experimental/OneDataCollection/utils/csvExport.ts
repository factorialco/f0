import { RecordType } from "@/hooks/datasource"

import type { Visualization } from "../visualizations/collection"

export interface CSVExportOptions {
  filename?: string
  includeHeaders?: boolean
  encoding?: string
}

export interface ColumnDefinition {
  label: string
  field?: string
  render?: (item: any) => any
}

function escapeCSVCell(value: any): string {
  if (value === null || value === undefined) {
    return ""
  }

  const stringValue = String(value)

  // If the value contains comma, newline, or quotes, wrap in quotes and escape quotes
  if (
    stringValue.includes(",") ||
    stringValue.includes("\n") ||
    stringValue.includes('"')
  ) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }

  return stringValue
}

function extractDisplayValue(renderResult: any): string {
  // Handle different render result types
  if (renderResult === null || renderResult === undefined) {
    return ""
  }

  // Handle person objects from person render type
  if (
    typeof renderResult === "object" &&
    "firstName" in renderResult &&
    "lastName" in renderResult
  ) {
    return `${renderResult.firstName} ${renderResult.lastName}`.trim()
  }

  // Handle badge objects
  if (typeof renderResult === "object" && "label" in renderResult) {
    return renderResult.label
  }

  // Handle arrays (like multiple badges)
  if (Array.isArray(renderResult)) {
    return renderResult
      .map((item) =>
        typeof item === "object" && "label" in item ? item.label : String(item)
      )
      .join("; ")
  }

  // Handle date objects
  if (renderResult instanceof Date) {
    return renderResult.toISOString()
  }

  return String(renderResult)
}

function getNestedValue(obj: any, path: string): any {
  if (!path) return obj

  return path.split(".").reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : ""
  }, obj)
}

function extractColumns<R extends RecordType>(
  visualization: Visualization<R, any, any, any, any, any, any> | undefined
): ColumnDefinition[] {
  if (!visualization) {
    return []
  }

  if (visualization.type === "table") {
    return visualization.options.columns.map((col) => ({
      label: col.label,
      field: col.sorting || undefined,
      render: col.render
        ? (item: R) => {
            const result = col.render!(item)
            return extractDisplayValue(result)
          }
        : undefined,
    }))
  }

  // For non-table visualizations, we'll need to infer columns from data structure
  // This is a fallback - in most cases, users will have a table view available
  return []
}

function transformDataForCSV<R extends RecordType>(
  data: R[],
  columns: ColumnDefinition[]
): string[][] {
  return data.map((item) =>
    columns.map((column) => {
      if (column.render) {
        return column.render(item)
      }

      if (column.field) {
        const value = getNestedValue(item, column.field)
        return extractDisplayValue(value)
      }

      // Fallback: try to get any value from the item
      return extractDisplayValue(item)
    })
  )
}

function generateFilename(baseFilename?: string): string {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, "")
  const sanitized = baseFilename
    ? baseFilename.replace(/[^a-zA-Z0-9-_]/g, "_")
    : "export"
  return `${sanitized}_${timestamp}.csv`
}

export async function downloadAsCSV<R extends RecordType>(
  data: R[],
  visualization: Visualization<R, any, any, any, any, any, any> | undefined,
  options?: CSVExportOptions
): Promise<void> {
  if (!data || data.length === 0) {
    throw new Error("No data available for export")
  }

  const columns = extractColumns(visualization)

  // If no columns from visualization, try to infer from data structure
  if (columns.length === 0) {
    const firstItem = data[0]
    const inferredColumns: ColumnDefinition[] = Object.keys(firstItem).map(
      (key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        field: key,
      })
    )
    columns.push(...inferredColumns)
  }

  const transformedData = transformDataForCSV(data, columns)

  const headers =
    options?.includeHeaders !== false ? columns.map((col) => col.label) : []

  const csvContent = [
    ...(headers.length > 0 ? [headers.join(",")] : []),
    ...transformedData.map((row) =>
      row.map((cell) => escapeCSVCell(cell)).join(",")
    ),
  ].join("\n")

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8",
  })

  const filename = options?.filename || generateFilename("data_collection")

  // Create download link and trigger download
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
}
