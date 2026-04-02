import { useMemo } from "react"

import { RecordType, SortingsDefinition } from "@/hooks/datasource"

import { SummariesDefinition } from "../../../../summary"
import { TableColumnDefinition } from "../types"

export type HeaderGroupSpan = {
  type: "group"
  id: string
  label: string
  colSpan: number
  columnIndices: number[]
}

export type HeaderUngroupedSpan = {
  type: "ungrouped"
  columnIndices: number[]
}

export type HeaderGroupEntry = HeaderGroupSpan | HeaderUngroupedSpan

export const groupBorderClass =
  "border-0 border-r border-solid border-f1-border-secondary"

/**
 * Computes header group entries from columns and a label map.
 * Adjacent columns sharing the same `headerGroupId` are merged into a single
 * spanning entry. Columns without a `headerGroupId` produce an ungrouped entry
 * that renders an empty cell in the group row and the real header in the column row.
 */
export const computeHeaderGroups = (
  columns: ReadonlyArray<{ headerGroupId?: string }>,
  headerGroupLabels: Record<string, string>
): HeaderGroupEntry[] => {
  const entries: HeaderGroupEntry[] = []

  columns.forEach((column, index) => {
    const groupId = column.headerGroupId
    if (!groupId) {
      entries.push({
        type: "ungrouped",
        columnIndices: [index],
      })
      return
    }

    const last = entries[entries.length - 1]
    if (last && last.type === "group" && last.id === groupId) {
      last.colSpan++
      last.columnIndices.push(index)
    } else {
      entries.push({
        colSpan: 1,
        id: groupId,
        type: "group",
        columnIndices: [index],
        label: headerGroupLabels[groupId] ?? groupId,
      })
    }
  })

  return entries
}

/**
 * Returns header group entries for a two-row header, memoized by column identity
 * and label map. Returns `null` when no columns use `headerGroupId`, signaling
 * the single-row header should be rendered instead.
 */
export const useHeaderGroups = <
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>,
  headerGroupLabels?: Record<string, string>
): HeaderGroupEntry[] | null => {
  return useMemo(() => {
    if (!headerGroupLabels) return null

    const hasGroups = columns.some((col) => col.headerGroupId)
    if (!hasGroups) return null

    return computeHeaderGroups(columns, headerGroupLabels)
  }, [columns, headerGroupLabels])
}
