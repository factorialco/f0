import { useCallback, useMemo, useState } from "react"

import { RecordType, SortingsDefinition } from "@/hooks/datasource"
import { useReducedMotion } from "@/lib/a11y"

import { SummariesDefinition } from "../../../../summary"
import { ColId, HeaderGroupDefinition, TableColumnDefinition } from "../types"
import { ColumnCollapseTransition } from "./useColumnCollapseAnimation"
import { getColumnId } from "./useColums"

/**
 * Marker carried by the animating cells of a group so the animation can find
 * them. Group ids come from consumers and are not guaranteed to be usable in a
 * selector, so this is keyed by the group's position among the collapsible ones
 * rather than by the id itself.
 */
export const collapsingCellClassFor = (groupIndex: number) =>
  `f0-collapsing-group-${groupIndex}`

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
   * Header group entries for the two-row header. `null` when no groups are
   * configured or no visible column carries a `headerGroupId`, signalling that
   * the single-row header should be rendered instead.
   */
  headerGroups: HeaderGroupEntry[] | null
  /** Collapses an expanded group, or expands a collapsed one. */
  toggleHeaderGroup: (groupId: string) => void
  /**
   * Marker class each animating column's cells should carry, keyed by column
   * id. Empty once nothing is in flight.
   */
  collapsingCellClasses: ReadonlyMap<ColId, string>
  /** One entry per group in flight, to hand to the collapse animation. */
  collapseTransitions: ColumnCollapseTransition[]
  /** Called by the animation to release a group once it has played out. */
  settleHeaderGroup: (groupId: string) => void
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

  // Groups mid-flight. Their collapsible columns stay mounted at full width so
  // their contents can animate out before the close lands.
  const [animatingGroups, setAnimatingGroups] = useState<ReadonlySet<string>>(
    new Set()
  )
  const shouldReduceMotion = useReducedMotion()

  const settleGroup = useCallback((groupId: string) => {
    setAnimatingGroups((current) => {
      if (!current.has(groupId)) return current
      const next = new Set(current)
      next.delete(groupId)
      return next
    })
  }, [])

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

      if (shouldReduceMotion) {
        settleGroup(groupId)
      } else {
        // The columns stay mounted at their natural size for this render; the
        // animation measures them and drives both directions from there,
        // reporting back through `settleGroup` when it is done.
        setAnimatingGroups((current) => new Set(current).add(groupId))
      }

      onCollapsedChange?.(groupId, collapsed)
    },
    [collapsedGroups, onCollapsedChange, shouldReduceMotion, settleGroup]
  )

  // A collapsed group only drops its columns once it has finished animating.
  const settledCollapsedGroups = useMemo(() => {
    if (animatingGroups.size === 0) return collapsedGroups
    return new Set(
      [...collapsedGroups].filter((groupId) => !animatingGroups.has(groupId))
    )
  }, [collapsedGroups, animatingGroups])

  const visibleColumns = useMemo(() => {
    if (!definitions || settledCollapsedGroups.size === 0) return columns

    const hidden = getCollapsedColumnIndices(
      columns,
      definitions,
      settledCollapsedGroups
    )
    if (hidden.size === 0) return columns

    return columns.filter((_, index) => !hidden.has(index))
  }, [columns, definitions, settledCollapsedGroups])

  // Stable order, so a group's marker class does not change between renders.
  const collapsibleGroupIds = useMemo(
    () =>
      Object.entries(definitions ?? {})
        .filter(([, definition]) => definition.collapsedColumns !== undefined)
        .map(([groupId]) => groupId)
        .sort(),
    [definitions]
  )

  // Which marker class each animating column's cells should carry, if any.
  const collapsingCellClasses = useMemo(() => {
    const classes = new Map<ColId, string>()
    if (!definitions || animatingGroups.size === 0) return classes

    animatingGroups.forEach((groupId) => {
      const groupIndex = collapsibleGroupIds.indexOf(groupId)
      if (groupIndex === -1) return

      const indices = getCollapsedColumnIndices(
        visibleColumns,
        definitions,
        new Set([groupId])
      )

      indices.forEach((index) => {
        classes.set(
          getColumnId(visibleColumns[index]),
          collapsingCellClassFor(groupIndex)
        )
      })
    })

    return classes
  }, [visibleColumns, definitions, animatingGroups, collapsibleGroupIds])

  // One entry per group in flight, for the animation to pick up.
  const collapseTransitions = useMemo(
    () =>
      [...animatingGroups]
        .map((groupId) => ({
          groupId,
          cellClass: collapsingCellClassFor(
            collapsibleGroupIds.indexOf(groupId)
          ),
          direction: (collapsedGroups.has(groupId) ? "close" : "open") as
            | "close"
            | "open",
        }))
        .filter(({ groupId }) => collapsibleGroupIds.includes(groupId)),
    [animatingGroups, collapsedGroups, collapsibleGroupIds]
  )

  const entries = useMemo(() => {
    if (!definitions) return null
    if (!visibleColumns.some((column) => column.headerGroupId)) return null

    // Built from the requested state, so the toggle's icon and aria-expanded
    // answer the click while the columns are still on their way out.
    return computeHeaderGroups(visibleColumns, definitions, collapsedGroups)
  }, [visibleColumns, definitions, collapsedGroups])

  return {
    columns: visibleColumns,
    collapsingCellClasses,
    collapseTransitions,
    settleHeaderGroup: settleGroup,
    headerGroups: entries,
    toggleHeaderGroup,
  }
}
