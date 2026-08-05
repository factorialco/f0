import { useMemo } from "react"

import { RecordType, SortingsDefinition } from "@/hooks/datasource"

import { SummariesDefinition } from "../../../../summary"
import { HeaderGroupDefinition, TableColumnDefinition } from "../types"

/**
 * Resolves the table's single focus area onto the columns, so everything
 * downstream — headers, cells, summary row — can read `column.focused`
 * directly.
 *
 * A focused header group focuses every column in it and takes precedence:
 * column-level `focused` flags outside it are ignored. Without a focused
 * group, only one column may be focused — the first one (in definition
 * order) wins and the rest are ignored. Both misuses warn in the console.
 */
export const useFocusedColumns = <
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>,
  headerGroups?: Record<string, string | HeaderGroupDefinition>
): ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>> =>
  useMemo(() => {
    const focusedGroupIds = Object.entries(headerGroups ?? {})
      .filter(
        ([, definition]) => typeof definition !== "string" && definition.focused
      )
      .map(([groupId]) => groupId)

    if (focusedGroupIds.length > 1) {
      console.warn(
        "Only one header group can be focused: keeping the first focused group and ignoring the rest"
      )
    }

    const focusedGroupId = focusedGroupIds[0]
    if (focusedGroupId) {
      if (
        columns.some(
          (column) => column.focused && column.headerGroupId !== focusedGroupId
        )
      ) {
        console.warn(
          "A header group is focused: column-level focus outside the group is ignored"
        )
      }
      return columns.map((column) => ({
        ...column,
        focused: column.headerGroupId === focusedGroupId,
      }))
    }

    const focusedIndex = columns.findIndex((column) => column.focused)
    const extraFocused = columns.some(
      (column, index) => column.focused && index !== focusedIndex
    )
    if (!extraFocused) return columns

    console.warn(
      "Only one column can be focused: keeping the first focused column and ignoring the rest"
    )
    return columns.map((column, index) =>
      index === focusedIndex || !column.focused
        ? column
        : { ...column, focused: false }
    )
  }, [columns, headerGroups])
