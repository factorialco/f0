import { createContext, useContext, type ReactNode } from "react"

import type { LayoutDirection, ZoomLevel } from "./types"

// ─── Zoom ──────────────────────────────────────────────────────

export interface F0GraphZoomContextValue {
  zoomLevel: ZoomLevel
  currentZoom: number
  direction: LayoutDirection
}

export const F0GraphZoomContext = createContext<F0GraphZoomContextValue | null>(
  null
)

F0GraphZoomContext.displayName = "F0GraphZoomContext"

export function useF0GraphZoom(): F0GraphZoomContextValue {
  const ctx = useContext(F0GraphZoomContext)
  if (ctx === null) {
    throw new Error("useF0GraphZoom must be used within an <F0Graph> component")
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphZoomInternal(): F0GraphZoomContextValue | null {
  return useContext(F0GraphZoomContext)
}

// ─── Expand ────────────────────────────────────────────────────

export interface F0GraphExpandContextValue {
  expandedNodes: Set<string>
}

export const F0GraphExpandContext =
  createContext<F0GraphExpandContextValue | null>(null)

F0GraphExpandContext.displayName = "F0GraphExpandContext"

export function useF0GraphExpand(): F0GraphExpandContextValue {
  const ctx = useContext(F0GraphExpandContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphExpand must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphExpandInternal(): F0GraphExpandContextValue | null {
  return useContext(F0GraphExpandContext)
}

// ─── Selection ─────────────────────────────────────────────────

export interface F0GraphSelectionContextValue {
  selectedNodes: Set<string>
  highlightedNodes: Set<string>
}

export const F0GraphSelectionContext =
  createContext<F0GraphSelectionContextValue | null>(null)

F0GraphSelectionContext.displayName = "F0GraphSelectionContext"

export function useF0GraphSelection(): F0GraphSelectionContextValue {
  const ctx = useContext(F0GraphSelectionContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphSelection must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphSelectionInternal(): F0GraphSelectionContextValue | null {
  return useContext(F0GraphSelectionContext)
}

// ─── Actions ───────────────────────────────────────────────────

export interface F0GraphActionsContextValue {
  toggleExpand: (nodeId: string) => void
  selectNode: (nodeId: string) => void
  /**
   * Expand every expandable node in the graph.
   *
   * Eager mode: synchronously walks the resolved tree and adds all nodes
   * that have children to the expanded set. Resolves immediately.
   *
   * Lazy mode (`rootNodes` + `loadChildren`): performs a BFS over the
   * known tree, awaiting `loadChildren` for any node with
   * `childrenCount > 0 && !childrenLoaded`. Newly-loaded children are
   * enqueued and the cascade continues until the queue drains. Errors
   * from individual `loadChildren` calls are swallowed so one failing
   * branch does not abort the rest.
   *
   * Bulk actions emit a single `onExpandedNodesChange` once the operation
   * settles. They do NOT fire `onExpandToggle` per node.
   */
  expandAll: () => Promise<void>
  /**
   * Collapse every node by clearing the expanded set. Lazy-mode children
   * that have already been fetched stay cached — this only flips UI state.
   * Emits a single `onExpandedNodesChange(new Set())`.
   */
  collapseAll: () => void
}

export const F0GraphActionsContext =
  createContext<F0GraphActionsContextValue | null>(null)

F0GraphActionsContext.displayName = "F0GraphActionsContext"

export function useF0GraphActions(): F0GraphActionsContextValue {
  const ctx = useContext(F0GraphActionsContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphActions must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphActionsInternal(): F0GraphActionsContextValue | null {
  return useContext(F0GraphActionsContext)
}

// ─── Render Config ─────────────────────────────────────────────

export interface F0GraphRenderConfigContextValue {
  renderEdge?: (
    edge: import("./types").GraphEdge,
    variant: import("./components/F0GraphEdge").EdgeVariant
  ) => ReactNode | null
  /**
   * Set of tag types currently visible. When undefined, F0GraphNode
   * renders all tags. Driven by the F0Graph `nodeTagTypes` /
   * `visibleTagTypes` props and the controls popover.
   */
  visibleTagTypes?: ReadonlySet<
    import("./components/F0GraphNode").F0GraphNodeTagType
  >
  /**
   * `true` while a deferred payload is still loading. Used by
   * F0GraphNodeWrapper to set `deferredLoading` on the render context.
   */
  deferredLoading?: boolean

  /**
   * Height of the tag row reserved in the node rect by the layout engine.
   * `0` when tags don't affect layout (overflow mode) or when no tag types
   * are configured. Used by the node wrapper to top-align the pill and
   * offset the source Handle upward in compact/dot mode (where tags are
   * hidden but the rect is still oversized).
   */
  tagRowHeight?: number
  /**
   * `true` when the graph has more rendered nodes than the snap threshold.
   * F0GraphNode uses this to disable variant transitions (chrome opacity,
   * avatar transform, text reveal) so changing zoomLevel snaps instantly
   * instead of animating thousands of elements simultaneously.
   */
  largeGraph?: boolean
}

export const F0GraphRenderConfigContext =
  createContext<F0GraphRenderConfigContextValue | null>(null)

F0GraphRenderConfigContext.displayName = "F0GraphRenderConfigContext"

/** Non-throwing variant for internal edge wrapper */
export function useF0GraphRenderConfigInternal(): F0GraphRenderConfigContextValue | null {
  return useContext(F0GraphRenderConfigContext)
}

// ─── Focus (roving tabindex) ───────────────────────────────────

export interface F0GraphFocusContextValue {
  focusedNodeId: string | null
  setFocusedNodeId: (id: string | null) => void
  registerNodeRef: (nodeId: string, el: HTMLElement | null) => void
}

export const F0GraphFocusContext =
  createContext<F0GraphFocusContextValue | null>(null)

F0GraphFocusContext.displayName = "F0GraphFocusContext"

export function useF0GraphFocus(): F0GraphFocusContextValue {
  const ctx = useContext(F0GraphFocusContext)
  if (ctx === null) {
    throw new Error(
      "useF0GraphFocus must be used within an <F0Graph> component"
    )
  }
  return ctx
}

/** Non-throwing variant for internal wrapper components */
export function useF0GraphFocusInternal(): F0GraphFocusContextValue | null {
  return useContext(F0GraphFocusContext)
}
