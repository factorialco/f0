import { useCallback, useMemo, useState } from "react"

import { RecordType, SortingsDefinition } from "@/hooks/datasource"

import { SummariesDefinition } from "../../../../summary"
import { ColId, HeaderGroupDefinition, TableColumnDefinition } from "../types"
import { getColumnId } from "./useColums"

export type HeaderGroupSpan = {
  type: "group"
  id: string
  label: string
  colSpan: number
  columnIndices: number[]
  /** True when the user can collapse/expand this group. */
  collapsible: boolean
  /** True when the group is currently collapsed. */
  collapsed: boolean
}

export type HeaderUngroupedSpan = {
  type: "ungrouped"
  columnIndices: number[]
}

export type HeaderGroupEntry = HeaderGroupSpan | HeaderUngroupedSpan

export const groupBorderClass =
  "border-0 border-r border-solid border-f1-border-secondary"

/** A header group definition with its defaults resolved. */
type NormalizedHeaderGroup = {
  label: string
  collapsedColumns?: ColId[]
  defaultCollapsed: boolean
}

type NormalizedHeaderGroups = Record<string, NormalizedHeaderGroup>

/** A maximal run of adjacent columns sharing the same `headerGroupId`. */
type HeaderGroupRun = {
  groupId: string
  columnIndices: number[]
}

/**
 * Resolves the shorthand string form and the per-group defaults into a single
 * definition map. Returns `null` when no groups are configured.
 */
export const normalizeHeaderGroups = (
  headerGroups?: Record<string, string | HeaderGroupDefinition>
): NormalizedHeaderGroups | null => {
  if (!headerGroups) return null

  const normalized: NormalizedHeaderGroups = {}

  Object.entries(headerGroups).forEach(([groupId, definition]) => {
    normalized[groupId] =
      typeof definition === "string"
        ? { label: definition, defaultCollapsed: false }
        : {
            label: definition.label,
            collapsedColumns: definition.collapsedColumns,
            defaultCollapsed: definition.defaultCollapsed ?? false,
          }
  })

  return normalized
}

/**
 * Splits the columns into maximal runs of adjacent columns sharing a
 * `headerGroupId`. Ungrouped columns break a run, mirroring how spanning
 * headers are laid out.
 */
const getHeaderGroupRuns = (
  columns: ReadonlyArray<{ headerGroupId?: string }>
): HeaderGroupRun[] => {
  const runs: HeaderGroupRun[] = []

  columns.forEach((column, index) => {
    const groupId = column.headerGroupId
    if (!groupId) return

    const last = runs[runs.length - 1]
    const isAdjacent =
      last?.groupId === groupId &&
      last.columnIndices[last.columnIndices.length - 1] === index - 1

    if (isAdjacent) {
      last.columnIndices.push(index)
    } else {
      runs.push({ groupId, columnIndices: [index] })
    }
  })

  return runs
}

/**
 * Indices of the columns hidden by the currently collapsed groups. A collapsed
 * run keeps the columns listed in its `collapsedColumns`, and always at least
 * one column — a header cell spanning zero columns would stretch across the
 * rest of the row.
 */
const getCollapsedColumnIndices = <
  Col extends Pick<
    TableColumnDefinition<never, never, never>,
    "id" | "label"
  > & { headerGroupId?: string },
>(
  columns: ReadonlyArray<Col>,
  definitions: NormalizedHeaderGroups,
  collapsedGroups: ReadonlySet<string>
): ReadonlySet<number> => {
  const hidden = new Set<number>()

  getHeaderGroupRuns(columns).forEach((run) => {
    if (!collapsedGroups.has(run.groupId)) return

    const collapsedColumns = definitions[run.groupId]?.collapsedColumns
    const kept = run.columnIndices.filter((index) =>
      collapsedColumns?.includes(getColumnId(columns[index]))
    )
    const keptIndices = new Set(kept.length > 0 ? kept : [run.columnIndices[0]])

    run.columnIndices.forEach((index) => {
      if (!keptIndices.has(index)) hidden.add(index)
    })
  })

  return hidden
}

/**
 * Computes header group entries from columns and their group definitions.
 * Adjacent columns sharing the same `headerGroupId` are merged into a single
 * spanning entry. Columns without a `headerGroupId` produce an ungrouped entry
 * that renders an empty cell in the group row and the real header in the column row.
 */
export const computeHeaderGroups = (
  columns: ReadonlyArray<{ headerGroupId?: string }>,
  definitions: NormalizedHeaderGroups,
  collapsedGroups: ReadonlySet<string> = new Set()
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
      const definition = definitions[groupId]
      entries.push({
        colSpan: 1,
        id: groupId,
        type: "group",
        columnIndices: [index],
        label: definition?.label ?? groupId,
        collapsible: definition?.collapsedColumns !== undefined,
        collapsed: collapsedGroups.has(groupId),
      })
    }
  })

  return entries
}

export type UseHeaderGroupsOptions = {
  headerGroups?: Record<string, string | HeaderGroupDefinition>
  onCollapsedChange?: (groupId: string, collapsed: boolean) => void
}

export type UseHeaderGroupsReturn<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  /**
   * The columns to render, with the ones hidden by collapsed groups removed.
   * Identical to the input when nothing is collapsed.
   */
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  /**
   * Header group entries for the two-row header, or `null` when no columns use
   * `headerGroupId`, signaling the single-row header should be rendered instead.
   */
  headerGroups: HeaderGroupEntry[] | null
  /** Collapses an expanded group, or expands a collapsed one. */
  toggleHeaderGroup: (groupId: string) => void
}

/**
 * Resolves header group definitions, owns the collapsed state, and filters out
 * the columns hidden by collapsed groups so the rest of the table — rows,
 * summary footer, sticky offsets — follows automatically.
 */
export const useHeaderGroups = <
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>,
  { headerGroups, onCollapsedChange }: UseHeaderGroupsOptions = {}
): UseHeaderGroupsReturn<R, Sortings, Summaries> => {
  const definitions = useMemo(
    () => normalizeHeaderGroups(headerGroups),
    [headerGroups]
  )

  // Read once: after mount the collapsed state belongs to the table, so a
  // re-rendered `defaultCollapsed` must not stomp on the user's toggles.
  const [collapsedGroups, setCollapsedGroups] = useState<ReadonlySet<string>>(
    () =>
      new Set(
        Object.entries(definitions ?? {})
          .filter(([, definition]) => definition.defaultCollapsed)
          .map(([groupId]) => groupId)
      )
  )

  const toggleHeaderGroup = useCallback(
    (groupId: string) => {
      const collapsed = !collapsedGroups.has(groupId)
      const next = new Set(collapsedGroups)

      if (collapsed) {
        next.add(groupId)
      } else {
        next.delete(groupId)
      }

      setCollapsedGroups(next)
      onCollapsedChange?.(groupId, collapsed)
    },
    [collapsedGroups, onCollapsedChange]
  )

  const visibleColumns = useMemo(() => {
    if (!definitions || collapsedGroups.size === 0) return columns

    const hidden = getCollapsedColumnIndices(
      columns,
      definitions,
      collapsedGroups
    )
    if (hidden.size === 0) return columns

    return columns.filter((_, index) => !hidden.has(index))
  }, [columns, definitions, collapsedGroups])

  const entries = useMemo(() => {
    if (!definitions) return null
    if (!visibleColumns.some((column) => column.headerGroupId)) return null

    return computeHeaderGroups(visibleColumns, definitions, collapsedGroups)
  }, [visibleColumns, definitions, collapsedGroups])

  return {
    columns: visibleColumns,
    headerGroups: entries,
    toggleHeaderGroup,
  }
}
