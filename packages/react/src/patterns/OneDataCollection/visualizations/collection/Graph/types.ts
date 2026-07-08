import type { ReactNode } from "react"

import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { TagVariant } from "@/components/tags/F0Tag/F0Tag"
import type { RecordType } from "@/hooks/datasource"
import type { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import type { F0GraphNodeTagType, ZoomPreset } from "@/patterns/F0Graph"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

/**
 * Configuration for the "graph" visualization (org-chart style).
 *
 * The hierarchy is fetched on demand from the same `dataAdapter` of the source:
 * `childrenFilters(parentId)` returns the filter that the adapter understands as
 * "the direct children of parentId" (`null` = the roots). Children are loaded
 * when a node is expanded.
 */
export type GraphVisualizationOptions<
  R extends RecordType,
  Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  /** Primary line of text for a node. */
  title: (record: R) => string
  /** Secondary line of text for a node. */
  subtitle?: (record: R) => string
  /** Avatar shown on the leading side of the node pill. */
  avatar?: (record: R) => AvatarVariant
  /** Tags rendered in the node metadata row. */
  tags?: (record: R) => TagVariant[]
  /**
   * Tag types present on the nodes. When provided, the controls bar gains a
   * toggle to show/hide each metadata type (like configuring table columns).
   */
  nodeTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /** Friendly labels per tag type, shown in the metadata visibility toggle. */
  nodeTagTypeLabels?: Partial<Record<F0GraphNodeTagType, string>>
  /** Tag types visible by default. Defaults to all of `nodeTagTypes`. */
  defaultVisibleTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /** Tag types that are always visible and cannot be hidden in the settings. */
  pinnedTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  /**
   * Floating toolbar shown above a node while it is selected. Provide the
   * action buttons (e.g. `<F0Button size="sm" … />`) for the given record.
   */
  nodeActions?: (record: R) => ReactNode
  /** Resolves a stable node id from a record. Defaults to `String(record.id)`. */
  getNodeId?: (record: R) => string
  /** Number of children a node has. A node is expandable when this is `> 0`. */
  getChildrenCount: (record: R) => number
  /**
   * Returns the filters that, applied to the source `dataAdapter`, fetch the
   * direct children of `parentId`. `parentId === null` must return the roots.
   */
  childrenFilters: (parentId: string | null) => Partial<FiltersState<Filters>>
  /**
   * How many levels to load and expand on the initial render.
   * - `0`: show only the roots; every level below loads on click.
   * - `1` (default): also show the roots' direct children.
   * - `2`: also pre-load the grandchildren for a fuller first view.
   */
  defaultExpandDepth?: number
  /**
   * Id of a node to reveal: loads its ancestor path, expands the branch and
   * centers/highlights it. Driven by the shared Data Collection search — set it
   * from `searchPreview.onSelect`.
   */
  revealNodeId?: string
  /**
   * Resolves the ancestor path (root → … → matched node) for a node so it can
   * be revealed, returning the records in root-first order. Required for
   * revealing nodes in branches that have not been expanded yet.
   */
  loadNodePath?: (nodeId: string) => Promise<R[]>
  /** Optional parent accessor used when linking the revealed ancestor path. */
  getParentId?: (record: R) => string | null
  /**
   * Opt into two-phase (viewport-driven) hydration. When provided, the tree is
   * built from whatever lightweight records `childrenFilters`/`fetchData`
   * return, and the full record is fetched — batched, once per node — only for
   * the nodes that enter the viewport, via this loader. The returned records
   * replace each node's `data` (matched by node id) and clear its loading
   * placeholder. Best paired with `enableNodeWindowing`. Omit for the current
   * eager behavior (structure and data fetched together per expansion).
   *
   * The "lightness" of the initial records is entirely the source's choice and
   * transparent to the hook — no special adapter mode is required.
   */
  loadNodeData?: (ids: string[]) => Promise<R[]>
  /**
   * Id of the node representing the current user. When set, a "Find me" button
   * is shown in the controls that centers the viewport on that node.
   */
  currentUserNodeId?: string
  /** Initial zoom preset passed through to F0Graph. */
  zoomPreset?: ZoomPreset
  /**
   * Smallest zoom the user can pan to (the zoom-out limit), passed through to
   * F0Graph. Defaults to F0Graph's own default. Raise it (e.g. `0.3`) to keep
   * the tree readable and avoid the most zoomed-out "dot" level.
   */
  minZoom?: number
  /** Largest zoom the user can pan to (the zoom-in limit), passed through to F0Graph. */
  maxZoom?: number
  /** Whether to render the zoom/fit controls. Defaults to `true`. */
  showControls?: boolean
  /**
   * Opt into F0Graph node-array windowing (pass-through). Only the nodes near
   * the viewport are handed to React Flow — for very large trees (thousands of
   * expand-visible nodes). Off by default; non-breaking.
   */
  enableNodeWindowing?: boolean
  /** Flow-space px kept materialized around the viewport (pass-through). */
  nodeWindowPadding?: number
  /**
   * Viewport-driven data loading (pass-through). Called (debounced + batched)
   * with the ids of nodes that entered the viewport, so the consumer can
   * hydrate rich data on demand. Best paired with `enableNodeWindowing`.
   */
  loadVisibleNodeData?: (ids: string[]) => void
  /** Debounce (ms) before flushing a batch of newly-visible ids (pass-through). */
  visibleDataDebounceMs?: number
}
