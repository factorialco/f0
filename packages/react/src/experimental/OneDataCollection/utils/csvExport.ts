import {
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  GroupingDefinition,
} from "@/hooks/datasource"

import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SummariesDefinition } from "../summary"
import type { Visualization } from "../visualizations/collection"

export interface CSVExportOptions {
  filename?: string
  includeHeaders?: boolean
  /** Column IDs to exclude from export (respects column visibility settings) */
  hiddenColumnIds?: Set<string>
  /** Column ID order to apply (respects column reordering settings) */
  columnOrder?: string[]
}

export interface ColumnDefinition<R extends RecordType = RecordType> {
  label: string
  field?: string
  render?: (item: R) => string
}

export function escapeCSVCell(value: unknown): string {
  if (value === null || value === undefined) {
    return ""
  }

  const stringValue = String(value)

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
export function extractDisplayValue(renderResult: unknown): string {
  if (renderResult === null || renderResult === undefined) {
    return ""
  }

  if (typeof renderResult !== "object") {
    return String(renderResult)
  }

  if (renderResult instanceof Date) {
    return renderResult.toISOString()
  }

  if (Array.isArray(renderResult)) {
    return renderResult
      .map((item) => extractDisplayValue(item))
      .filter(Boolean)
      .join("; ")
  }

  const obj = renderResult as Record<string, unknown>

  if ("type" in obj && "value" in obj && typeof obj.type === "string") {
    return extractTypedCellValue(obj.type, obj.value)
  }

  if ("firstName" in obj && "lastName" in obj) {
    return `${obj.firstName} ${obj.lastName}`.trim()
  }

  if ("label" in obj && typeof obj.label === "string") {
    return obj.label
  }

  if (
    "text" in obj &&
    (typeof obj.text === "string" || typeof obj.text === "number")
  ) {
    return String(obj.text)
  }

  if ("name" in obj && typeof obj.name === "string") {
    return obj.name
  }

  return ""
}

// TODO: Decouple cell-type-to-text extraction from this file.
// Each value-display type (ui/value-display/types/) should co-locate a
// `toPlainText` function next to its React renderer, registered in a parallel
// map mirroring `valueDisplayRenderers` in ui/value-display/renderers.tsx.
// This switch would then be replaced by a registry lookup.
/**
 * Given a cell `type` identifier and its unwrapped `value`, return a
 * human-readable string suitable for CSV export.
 *
 * The types mirror those in `packages/react/src/components/value-display/types/`.
 */
export function extractTypedCellValue(type: string, value: unknown): string {
  if (value === null || value === undefined) {
    return ""
  }

  const v = value as Record<string, unknown>

  switch (type) {
    case "person":
      return `${v.firstName ?? ""} ${v.lastName ?? ""}`.trim()

    case "company":
    case "team":
    case "folder":
    case "file":
      return typeof v.name === "string" ? v.name : ""

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

    case "number": {
      if (typeof value === "number") return String(value)
      return v.number !== undefined ? String(v.number) : ""
    }

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

    case "text":
    case "longText":
      if (typeof value === "string" || typeof value === "number") {
        return String(value)
      }
      return v.text !== undefined ? String(v.text) : ""

    case "date": {
      if (value instanceof Date) return value.toISOString()
      if (v.date instanceof Date) return v.date.toISOString()
      return v.date !== undefined ? String(v.date) : ""
    }

    case "country":
      return typeof v.label === "string"
        ? v.label
        : typeof v.code === "string"
          ? v.code
          : ""

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

    case "icon":
      return typeof v.label === "string" ? v.label : ""

    case "syncStatus":
      return typeof value === "string" ? value : ""

    default:
      return extractDisplayValue(value)
  }
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  if (!path) return obj

  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key]
    }
    return ""
  }, obj)
}

export function extractColumns<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  visualization:
    | Visualization<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    | undefined,
  hiddenColumnIds?: Set<string>,
  columnOrder?: string[]
): ColumnDefinition<R>[] {
  if (!visualization) {
    return []
  }

  if (
    visualization.type === "table" ||
    visualization.type === "editableTable"
  ) {
    const filtered = visualization.options.columns.filter((col) => {
      if (!hiddenColumnIds || hiddenColumnIds.size === 0) return true
      const colId = col.id ?? col.label ?? "column"
      return !hiddenColumnIds.has(colId)
    })

    // Apply column ordering:
    // 1. User-saved order from settings takes priority
    // 2. Fall back to column definition's `order` property
    const ordered =
      columnOrder && columnOrder.length > 0
        ? [...filtered].sort((a, b) => {
            const aId = a.id ?? a.label ?? "column"
            const bId = b.id ?? b.label ?? "column"
            const aIndex = columnOrder.indexOf(aId)
            const bIndex = columnOrder.indexOf(bId)
            const aPos = aIndex === -1 ? columnOrder.length : aIndex
            const bPos = bIndex === -1 ? columnOrder.length : bIndex
            return aPos - bPos
          })
        : [...filtered].sort(
            (a, b) =>
              (a.order ?? filtered.length) - (b.order ?? filtered.length)
          )

    return ordered.map((col) => ({
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

  // For non-table visualizations, columns are inferred from data in downloadAsCSV
  return []
}

function transformDataForCSV<R extends RecordType>(
  data: R[],
  columns: ColumnDefinition<R>[]
): string[][] {
  return data.map((item) =>
    columns.map((column) => {
      if (column.render) {
        return column.render(item)
      }

      if (column.field) {
        const value = getNestedValue(
          item as Record<string, unknown>,
          column.field
        )
        return extractDisplayValue(value)
      }

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

export async function downloadAsCSV<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  data: R[],
  visualization:
    | Visualization<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    | undefined,
  options?: CSVExportOptions
): Promise<void> {
  if (!data || data.length === 0) {
    throw new Error("No data available for export")
  }

  let columns = extractColumns(
    visualization,
    options?.hiddenColumnIds,
    options?.columnOrder
  )

  if (columns.length === 0) {
    const firstItem = data[0]
    columns = Object.keys(firstItem).map((key) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1),
      field: key,
    }))
  }

  const transformedData = transformDataForCSV(data, columns)

  const headers =
    options?.includeHeaders !== false ? columns.map((col) => col.label) : []

  const csvContent = [
    ...(headers.length > 0
      ? [headers.map((header) => escapeCSVCell(header)).join(",")]
      : []),
    ...transformedData.map((row) =>
      row.map((cell) => escapeCSVCell(cell)).join(",")
    ),
  ].join("\n")

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8",
  })

  const filename = generateFilename(options?.filename || "data_collection")

  const link = document.createElement("a")
  const objectUrl = URL.createObjectURL(blob)
  link.href = objectUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(objectUrl)
}
