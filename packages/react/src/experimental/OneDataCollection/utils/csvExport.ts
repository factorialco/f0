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

/**
 * Extract a plain-text representation from a cell value returned by a column's
 * `render` function.
 *
 * Column renderers in f0 return either:
 *  - a primitive (string / number)
 *  - a `{ type, value }` wrapper where `type` is one of the value-display cell
 *    types and `value` is the type-specific payload
 *  - a raw typed object (person, badge, date, …)
 */
function extractDisplayValue(renderResult: unknown): string {
  if (renderResult === null || renderResult === undefined) {
    return ""
  }

  // Primitives
  if (typeof renderResult !== "object") {
    return String(renderResult)
  }

  // Date instances
  if (renderResult instanceof Date) {
    return renderResult.toISOString()
  }

  // Arrays (e.g. tagList tags, multiple badges)
  if (Array.isArray(renderResult)) {
    return renderResult
      .map((item) => extractDisplayValue(item))
      .filter(Boolean)
      .join("; ")
  }

  const obj = renderResult as Record<string, unknown>

  // ── { type, value } wrapper (most common pattern) ──────────────────
  if ("type" in obj && "value" in obj && typeof obj.type === "string") {
    return extractTypedCellValue(obj.type, obj.value)
  }

  // ── Raw typed objects (legacy / direct usage) ──────────────────────

  // Person
  if ("firstName" in obj && "lastName" in obj) {
    return `${obj.firstName} ${obj.lastName}`.trim()
  }

  // Objects with a label (badge, tag, dotTag, status, statusTag, alertTag…)
  if ("label" in obj && typeof obj.label === "string") {
    return obj.label
  }

  // Objects with a text field (longText, text)
  if (
    "text" in obj &&
    (typeof obj.text === "string" || typeof obj.text === "number")
  ) {
    return String(obj.text)
  }

  // Objects with a name field (company, team, folder, file)
  if ("name" in obj && typeof obj.name === "string") {
    return obj.name
  }

  // Fallback – avoid "[object Object]"
  return ""
}

/**
 * Given a cell `type` identifier and its unwrapped `value`, return a
 * human-readable string suitable for CSV export.
 *
 * The types mirror those in `packages/react/src/components/value-display/types/`.
 */
function extractTypedCellValue(type: string, value: unknown): string {
  if (value === null || value === undefined) {
    return ""
  }

  const v = value as Record<string, unknown>

  switch (type) {
    // ── Identity / entity types ──────────────────────────────────────
    case "person":
      return `${v.firstName ?? ""} ${v.lastName ?? ""}`.trim()

    case "company":
    case "team":
    case "folder":
      return typeof v.name === "string" ? v.name : ""

    case "file":
      return typeof v.name === "string" ? v.name : ""

    // ── Tag / status types ───────────────────────────────────────────
    case "dotTag":
    case "status":
    case "statusTag":
    case "alertTag":
    case "tag":
      return typeof v.label === "string" ? v.label : ""

    case "tagList": {
      const tags = v.tags
      if (Array.isArray(tags)) {
        return tags
          .map((t: Record<string, unknown>) =>
            typeof t.label === "string" ? t.label : String(t)
          )
          .join("; ")
      }
      return ""
    }

    // ── Numeric types ────────────────────────────────────────────────
    case "number":
      return v.number !== undefined ? String(v.number) : ""

    case "amount": {
      if (typeof value === "number") return String(value)
      return v.amount !== undefined ? String(v.amount) : ""
    }

    case "percentage": {
      if (typeof value === "number") return String(value)
      return v.percentage !== undefined ? `${v.percentage}%` : ""
    }

    case "progressBar": {
      if (typeof value === "number") return String(value)
      const pctValue = v.value !== undefined ? v.value : ""
      const pctLabel = typeof v.label === "string" ? v.label : ""
      return pctLabel || String(pctValue)
    }

    // ── Text types ───────────────────────────────────────────────────
    case "text":
    case "longText":
      if (typeof value === "string" || typeof value === "number") {
        return String(value)
      }
      return v.text !== undefined ? String(v.text) : ""

    // ── Date ─────────────────────────────────────────────────────────
    case "date": {
      if (value instanceof Date) return value.toISOString()
      if (v.date instanceof Date) return v.date.toISOString()
      return v.date !== undefined ? String(v.date) : ""
    }

    // ── Country ──────────────────────────────────────────────────────
    case "country":
      return typeof v.label === "string"
        ? v.label
        : typeof v.code === "string"
          ? v.code
          : ""

    // ── Avatar list ──────────────────────────────────────────────────
    case "avatarList": {
      const list = v.avatarList
      if (Array.isArray(list)) {
        return list
          .map((a: Record<string, unknown>) => {
            if (
              typeof a.firstName === "string" &&
              typeof a.lastName === "string"
            ) {
              return `${a.firstName} ${a.lastName}`.trim()
            }
            return typeof a.name === "string" ? a.name : ""
          })
          .filter(Boolean)
          .join("; ")
      }
      return ""
    }

    // ── Icon ─────────────────────────────────────────────────────────
    case "icon":
      return typeof v.label === "string" ? v.label : ""

    // ── Sync status ──────────────────────────────────────────────────
    case "syncStatus":
      return typeof value === "string" ? value : ""

    default:
      // Unknown type – try common fields before giving up
      return extractDisplayValue(value)
  }
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
