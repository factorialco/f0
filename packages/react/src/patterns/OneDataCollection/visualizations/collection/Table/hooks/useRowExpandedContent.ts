import { ReactNode, useCallback } from "react"
import { RecordType } from "@/hooks/datasource"
import {
  getContentExpansionId,
  getExpandPanelId,
  getExpandToggleId,
  getRowExpansionId,
  hasStableId,
} from "../lib/rowExpansion"
import { useOptionalNestedExpansionContext } from "../providers/NestedProvider"
import { ExpandedContentContext } from "../types"

type UseRowExpandedContentProps<R extends RecordType> = {
  item: R
  index: number
  groupIndex: number
  depth: number
  /** True when the row owns the chevron for its children, which wins. */
  rowWithChildren: boolean
  renderExpandedContent?: (
    item: R,
    context: ExpandedContentContext
  ) => ReactNode
  onExpandedContentChange?: (item: R, expanded: boolean) => void
}

/**
 * Resolves a row's expanded-content panel: whether it has one, whether it is
 * open, and how to toggle it.
 *
 * Reads the expansion context rather than local state so a panel survives the
 * row unmounting, and closes with the rest of the tree when filters change.
 */
export const useRowExpandedContent = <R extends RecordType>({
  item,
  index,
  groupIndex,
  depth,
  rowWithChildren,
  renderExpandedContent,
  onExpandedContentChange,
}: UseRowExpandedContentProps<R>) => {
  // Optional: a Row rendered outside a table has nowhere to keep panel state,
  // and simply has no panel.
  const expansion = useOptionalNestedExpansionContext<R>()
  const expandedRowIds = expansion?.expandedRowIds
  const setRowExpanded = expansion?.setRowExpanded

  const rowId = getRowExpansionId({ groupIndex, depth, item, index })
  const contentId = getContentExpansionId(rowId)

  const setExpanded = useCallback(
    (expanded: boolean) => {
      setRowExpanded?.(contentId, expanded)
      onExpandedContentChange?.(item, expanded)
    },
    [setRowExpanded, contentId, onExpandedContentChange, item]
  )

  const collapse = useCallback(() => setExpanded(false), [setExpanded])

  // A row with children already owns the chevron, and its panel would land
  // between it and its children — where the tree connector measures the
  // previous sibling to size itself.
  const content =
    !expansion || rowWithChildren || !hasStableId(item)
      ? undefined
      : renderExpandedContent?.(item, { depth, collapse })

  const expandable =
    content !== undefined && content !== null && content !== false

  // Unlike nested children, a panel has no default-open policy: an absent entry
  // is closed. `defaultExpanded` speaks for the tree, not for panels.
  const expanded = expandable && expandedRowIds?.[contentId] === true

  const toggle = useCallback(
    () => setExpanded(expandedRowIds?.[contentId] !== true),
    [setExpanded, expandedRowIds, contentId]
  )

  return {
    expandable,
    expanded,
    content,
    toggle,
    toggleId: getExpandToggleId(contentId),
    panelId: getExpandPanelId(contentId),
  }
}
