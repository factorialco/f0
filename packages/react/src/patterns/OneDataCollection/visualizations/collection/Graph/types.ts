import type { ReactNode } from "react"

import type {
  F0GraphNodeRenderContext,
  F0GraphProps,
  GraphEdge,
} from "@/patterns/F0Graph"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import type { RecordType, SortingsDefinition } from "@/hooks/datasource"

import type { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type { CollectionProps, GroupingDefinition } from "../../../types"
import type { SummariesDefinition } from "../../../summary"

/**
 * Adapter that extracts the structural fields F0Graph needs from a record.
 *
 * The full record is preserved on the projected node automatically and node
 * identity is stamped by `GraphCollection` via the shared `getKey` helper
 * (`source.idProvider(item, index)` → `item.id` → `String(index)`). Adapter
 * does NOT return an id.
 */
export type GraphNodeAdapter<R extends RecordType> = (record: R) => {
  /** Single-parent tree linkage. */
  parentId: string | null
  /** DAG linkage. When present, takes precedence over `parentId`. */
  parentIds?: string[]
  /** Hint for lazy-loaded children. */
  childrenCount?: number
  /** Hint for lazy-loaded children. */
  childrenLoaded?: boolean
}

/**
 * Optional adapter that derives explicit edges from records. When omitted,
 * F0Graph derives parent→child edges from `parentId`/`parentIds`.
 *
 * Use this when edges have semantic metadata (labels, weights, click handlers)
 * that are not expressible through tree linkage alone.
 */
export type GraphEdgeAdapter<R extends RecordType> = (
  records: ReadonlyArray<R>
) => ReadonlyArray<GraphEdge>

/**
 * Return shape of `detailPanel`, re-exported from F0Graph so the public API
 * stays readable instead of inlining a deep conditional type.
 */
export type GraphDetailPanel = ReturnType<
  NonNullable<F0GraphProps["detailPanel"]>
>

/**
 * Extras forwarded as the third argument of `renderNode`. Carries the
 * pre-built item-actions dropdown (Phase 1 fallback for `detailPanel`).
 */
export type GraphRenderNodeExtras = {
  /** Ready-to-render dropdown trigger; spread into `F0GraphNode.actions`. */
  actions?: ReactNode
}

/**
 * Subset of F0GraphProps that GraphCollection delegates to consumers. Excludes
 * fields that GraphCollection owns (data, selection, search) or that depend on
 * Phase 2+ features (loadChildren, detailPanel, dimmedNodes).
 */
export type GraphGraphPropsPassthrough<R extends RecordType> = Omit<
  F0GraphProps<R>,
  | "nodes"
  | "edges"
  | "rootNodes"
  | "loadChildren"
  | "renderNode"
  | "selectionMode"
  | "onNodeSelect"
  | "onSelectedNodesChange"
  | "detailPanel"
  | "selectedNodes"
  | "highlightedNodes"
  | "searchValue"
  | "onSearchChange"
  | "searchable"
>

export type GraphVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  /**
   * Stable identifier used by F0Graph to scope per-graph persisted state
   * (currently: detail-panel width). When omitted, `GraphCollection` defaults
   * to `React.useId()` so each instance gets a unique key — pass an explicit
   * value only when you want a persistence key tied to a known domain entity.
   */
  graphId?: string

  /** Required. Maps a record to its parent linkage. */
  nodeAdapter: GraphNodeAdapter<R>

  /** Optional. Derive explicit edges; otherwise inferred from parent linkage. */
  edgeAdapter?: GraphEdgeAdapter<R>

  /**
   * Required. Render the node body. Extends F0Graph's `renderNode` with a
   * third `extras` argument: when `source.itemActions` is configured and no
   * `detailPanel` is supplied (Phase 1), `extras.actions` carries a ready-to-use
   * dropdown trigger that should be spread into `F0GraphNode`'s `actions`
   * slot. Consumers MAY ignore `extras`; the prop is purely additive.
   */
  renderNode: (
    record: R,
    ctx: F0GraphNodeRenderContext,
    extras: GraphRenderNodeExtras
  ) => ReactNode

  /**
   * Optional lazy loader. When provided, GraphCollection switches to lazy
   * mode: the first page of records becomes F0Graph's `rootNodes` and each
   * subsequent expand fetches children via `loadChildren(nodeId)`.
   *
   * Requirements:
   * - Source must declare a paginated `paginationType` ("pages" or
   *   "infinite-scroll"). Omitting `loadChildren` requires the inverse — a
   *   non-paginated source — because eager mode pulls the full graph in one
   *   fetch.
   * - Returned records pass through `nodeAdapter` and inherit selection state
   *   via the standard projection (`source.selectable` / `item.id` / index).
   * - GraphCollection wraps the loader with an internal AbortController per
   *   nodeId: results that resolve after unmount are dropped silently. The
   *   controller's `signal` is forwarded as `opts.signal` so the consumer can
   *   cancel the underlying request (e.g. pass it to `fetch`).
   */
  loadChildren?: (
    nodeId: string,
    opts: {
      /**
       * Aborted if the user collapses the node before resolution or the
       * component unmounts. Consumers SHOULD forward this to `fetch` (or
       * their underlying request layer) so cancelled loads release network
       * resources instead of resolving into a dropped result.
       */
      signal: AbortSignal
    }
  ) => Promise<ReadonlyArray<R>>

  /**
   * Escape hatch for everything F0Graph exposes that this view does NOT own.
   * DataCollection owns data, selection, search. Everything else
   * (zoomPreset, defaultZoom, defaultExpandDepth, layoutEngine, nodeWidth,
   * nodeHeight, fullScreen, showControls, currentUserNodeId, renderEdge, etc.)
   * passes through here.
   */
  graphProps?: GraphGraphPropsPassthrough<R>
}

export type GraphCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  GraphVisualizationOptions<Record, Filters, Sortings>
>
