import { ReactFlowProvider } from "@xyflow/react"
import { forwardRef, type ForwardedRef, type ReactNode, type Ref } from "react"

import "./F0Graph.css"
import type { EdgeVariant } from "./components/F0GraphEdge"
import type {
  F0GraphNodeTagColumn,
  GraphNodeState,
  GraphNodeVariant,
} from "./components/F0GraphNode"
import type {
  DeferredNodesPayload,
  GraphEdge,
  GraphNode,
  LayoutEngine,
  ZoomLevel,
  ZoomPreset,
  ZoomThresholds,
} from "./types"

import { F0GraphView } from "./components/F0GraphView"

// ─── Props ─────────────────────────────────────────────────────
export interface F0GraphProps<T = unknown> {
  // ---- Data (full tree mode) ----
  nodes?: GraphNode<T>[]
  edges?: GraphEdge[]

  // ---- Data (lazy tree mode) ----
  rootNodes?: GraphNode<T>[]
  /** Async callback to lazily load children when a node is expanded. Used with `rootNodes` for on-demand tree loading instead of providing the full `nodes` array upfront. */
  loadChildren?: (nodeId: string) => Promise<GraphNode<T>[]>

  // ---- Data (staged / progressive loading) ----
  /**
   * A second batch of nodes (and optional edges) loaded after the initial
   * paint. Pass a Promise that resolves with additional nodes, or a thunk
   * that returns one (invoked after first paint). Only applies to full-tree
   * mode — ignored when `rootNodes`/`loadChildren` are used.
   *
   * Deferred nodes are deduplicated by `id`; on conflict the deferred
   * version wins. Edges are appended (deduped by `id`).
   */
  deferredNodes?:
    | Promise<DeferredNodesPayload<T>>
    | (() => Promise<DeferredNodesPayload<T>>)
  /** Fired once when the deferred batch merges successfully. */
  onDeferredLoadComplete?: () => void
  /** Fired if the deferred promise rejects. */
  onDeferredLoadError?: (error: Error) => void

  // ---- Rendering ----
  /**
   * Required callback to render each node. Receives the node data and a context
   * object describing how F0Graph wants the node to behave (zoom variant,
   * selection state, expand callbacks, etc.).
   *
   * For the default pill-style node, spread `ctx` into `<F0GraphNode>`:
   * ```tsx
   * renderNode={(node, ctx) => (
   *   <F0GraphNode {...ctx} avatar={...} title={...} subtitle={...} />
   * )}
   * ```
   *
   * For fully custom nodes, return any ReactNode and use `ctx` to wire up
   * behavior (state, click, expand) however you like.
   */
  renderNode: (node: GraphNode<T>, ctx: F0GraphNodeRenderContext) => ReactNode
  /** Optional callback to render custom edges. Receives the edge and its variant (`"default" | "highlighted" | "dimmed"`). Falls back to default edge rendering when omitted. */
  renderEdge?: (edge: GraphEdge, variant: EdgeVariant) => ReactNode | null

  // ---- Zoom ----
  zoomPreset?: ZoomPreset
  zoomThresholds?: ZoomThresholds
  /** Initial zoom level. `1` = 100%. Defaults to `1`. */
  defaultZoom?: number
  /**
   * Smallest zoom level the user can pan to (the "zoom-out" limit).
   * `1` = 100%, `0.05` = 5% (graph appears tiny / dot view).
   *
   * Defaults to `0.05`. Lower values allow extreme zoom-out where nodes
   * collapse into dots; consumers with very large graphs that need a true
   * birds-eye view can drop this to `0.01` or lower.
   */
  minZoom?: number
  /**
   * Largest zoom level the user can pan to (the "zoom-in" limit).
   * `1` = 100%, `2` = 200%. Defaults to `2`.
   */
  maxZoom?: number

  // ---- Expand/collapse ----
  expandedNodes?: Set<string>
  defaultExpandedNodes?: Set<string>
  defaultExpandDepth?: number
  onExpandToggle?: (nodeId: string, expanded: boolean) => void
  /** Fired with the complete new Set on every expand/collapse, in both controlled and uncontrolled mode. */
  onExpandedNodesChange?: (next: Set<string>) => void

  // ---- Selection ----
  selectionMode?: "single" | "multi" | "none"
  selectedNodes?: Set<string>
  onNodeSelect?: (nodeId: string, selected: boolean) => void
  /** Fired with the complete new Set on every selection change, in both controlled and uncontrolled mode. */
  onSelectedNodesChange?: (next: Set<string>) => void
  /**
   * Fired when the user clicks the empty canvas. F0Graph already clears its own
   * selection/focus; use this to also clear consumer-controlled state such as
   * `highlightedNodes` / `focusedNode`.
   */
  onPaneClick?: () => void

  // ---- Navigation ----
  /**
   * Id of a node to fly to (center on) when the value **changes**. Because it
   * only reacts to a value change, re-selecting the **same** node (e.g.
   * searching the same employee twice after panning away) will NOT re-fly — for
   * that "always fly on the action" behavior, call the imperative
   * `focusNode(id)` on the graph ref instead (see {@link F0GraphHandle}).
   */
  focusedNode?: string
  highlightedNodes?: Set<string>
  /**
   * Id of a node to frame on the **first paint**, instead of the default
   * fit-to-all. The initial viewport opens already centered on this node with
   * no animation — use it to open "already looking at" a node (e.g. the current
   * user). The node must exist in the initial `nodes` (expand its ancestors
   * before mount); if it's absent, this falls back to the normal fit-to-all.
   * Only affects the initial frame — later `focusedNode` / "Find me" reveals
   * still animate with the smooth pan.
   */
  initialFocusNodeId?: string

  // ---- Layout ----
  /** Layout sizing hint passed to the built-in layout engine. Defaults to 256. Override for compact nodes (icons, file rows). */
  nodeWidth?: number
  /** Layout sizing hint passed to the built-in layout engine. Defaults to 56. Override for compact nodes (icons, file rows). */
  nodeHeight?: number
  /** Optional custom layout engine. When provided, overrides the built-in tree layout. */
  layoutEngine?: LayoutEngine

  // ---- Canvas actions ----
  /**
   * Optional action buttons rendered at the top-left of the canvas. Consumers
   * provide their own `<F0Button>` elements (use `size="md"` to match the
   * navigation controls).
   */
  canvasActions?: ReactNode

  /**
   * Optional action(s) rendered at the bottom-right of the canvas. Anchored to
   * the canvas (not the viewport), so it tracks the graph's visible area and
   * reflows when a side panel shrinks it. Symmetric to `canvasActions`
   * (top-left) and clear of the controls (bottom-left). Consumers provide their
   * own `<F0Button>` elements (use `size="md"` to match the navigation controls).
   */
  canvasFooterActions?: ReactNode

  // ---- Controls ----
  showControls?: boolean
  /**
   * Optional id of the node that represents the current user. When provided,
   * a "Find me" button is rendered as the first control and clicking it
   * centers the viewport on that node. When omitted, the button is hidden.
   */
  currentUserNodeId?: string
  /**
   * Custom handler for the "Find me" button. Use this when the current-user
   * node may be collapsed or not yet loaded (e.g. a lazy org chart): the
   * consumer can reveal it — expanding ancestors and centering — instead of the
   * default `fitView`, which can only target an already-visible node. When set,
   * the button stays enabled even while the node is off-screen. Return the
   * reveal promise to drive the button's loading spinner while it resolves.
   */
  onFocusUser?: () => void | Promise<void>
  /** Override default English labels for interactive controls. */
  controlLabels?: {
    zoomIn?: string
    zoomOut?: string
    fitView?: string
    findMe?: string
    collapseChildren?: string
    metadataSettings?: string
    graphCanvas?: string
    graphView?: string
  }

  // ---- Tag metadata ----
  /**
   * Tag types present on the rendered nodes. When provided, a Sliders
   * popover toggle is added to the controls bar that lets the user toggle
   * each type's visibility individually. When omitted, no toggle is
   * shown and tags render unfiltered.
   *
   * Order is preserved in the popover.
   */
  nodeTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>
  /**
   * Controlled set of currently visible tag types. When omitted, falls
   * back to `defaultVisibleTagTypes` (or all of `nodeTagTypes`). The
   * visibility UI itself is owned by the consumer.
   */
  visibleTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>
  /**
   * Initial visible tag types when `visibleTagTypes` is not controlled.
   * Defaults to all of `nodeTagTypes`.
   */
  defaultVisibleTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>
  /**
   * Whether the layout should reserve vertical room for one tag row beneath
   * each node so the source handle (and outgoing edges) anchors below the
   * tags rather than between the pill and the tags.
   *
   * Defaults:
   * - When `nodeTagTypes` is provided: `true` only while at least one type is
   *   currently visible (auto-collapses when all types are toggled off).
   * - When `nodeTagTypes` is omitted: `false`. Set to `true` if you render
   *   `tags` via `renderNode` and want the layout to leave room for them.
   */
  reserveTagRow?: boolean

  // ---- Viewport virtualization (opt-in, non-breaking) ----
  /**
   * Opt into node-array windowing. When enabled, only the nodes whose layout
   * box intersects the current viewport (grown by `nodeWindowPadding`) are
   * handed to React Flow, instead of every expand-visible node. The tree
   * structure and layout are still computed in full — positions, bounds and
   * fit-view stay correct — so this is safe for very large graphs (thousands
   * of nodes) where React Flow otherwise chokes on the full node array even
   * with `onlyRenderVisibleElements` (which only culls the DOM).
   *
   * Off by default; existing consumers are unaffected.
   */
  enableNodeWindowing?: boolean
  /**
   * Flow-space px kept materialized around the viewport when
   * `enableNodeWindowing` is on. Larger values pre-render more off-screen nodes
   * (smoother fast pans, more work); smaller values window more aggressively.
   * Defaults to `600`.
   */
  nodeWindowPadding?: number
  /**
   * Viewport-driven data loading. Called (debounced + batched) with the ids of
   * nodes that have entered the viewport and not been requested before, so the
   * consumer can hydrate rich `data` on demand — the tree can be built from a
   * lightweight structure and heavy per-node data fetched only for what's on
   * screen. Each id is requested at most once. Most effective together with
   * `enableNodeWindowing` (then it fires per on-screen node rather than per
   * expand-visible node). Mark not-yet-loaded nodes with `dataLoaded: false` to
   * surface `dataLoading` on the render context.
   *
   * Each id is requested at most once for the lifetime of the mounted graph.
   * If you reuse the same mounted graph across different datasets that share
   * node ids, remount it (e.g. via `key`) so the request cache resets.
   */
  loadVisibleNodeData?: (ids: string[]) => void
  /** Debounce (ms) before flushing a batch of newly-visible ids. Defaults to `200`. */
  visibleDataDebounceMs?: number

  // ---- Callbacks ----
  onZoomLevelChange?: (level: ZoomLevel) => void
  onViewportChange?: (viewport: { x: number; y: number; zoom: number }) => void
  onVisibleNodesChange?: (count: number) => void
  /**
   * Fired with the number of nodes actually handed to React Flow. Without
   * windowing this equals the visible-node count; with `enableNodeWindowing`
   * it approximates the on-screen count. Useful for perf assertions and
   * debugging.
   */
  onRenderedNodesChange?: (count: number) => void
}

// ─── Imperative handle ─────────────────────────────────────────
/**
 * Imperative API exposed via a ref on `<F0Graph>`. Use for actions that should
 * fire every time they're invoked, regardless of whether any prop changed —
 * the canonical case is a search box that re-centers on a result even when the
 * user picks the same node twice.
 */
export interface F0GraphHandle {
  /**
   * Fly to (center on) a node, animating from the current viewport. Always
   * runs, even if the node is already focused/centered — unlike the
   * `focusedNode` prop, which only reacts to a value change. Frames the node
   * with its direct children (capped zoom); safe with node windowing (an
   * off-screen target is centered via its layout position).
   */
  focusNode: (nodeId: string) => void
  /**
   * Clear the graph's own node selection (the ring set on click). Use when the
   * consumer marks a node another way — e.g. `highlightedNodes` for a search /
   * "Find me" reveal — so the two don't leave two nodes marked at once.
   */
  clearSelection: () => void
}

// ─── Custom Node Type for React Flow ───────────────────────────
/**
 * Behavior context passed to consumer's `renderNode`. Describes how F0Graph
 * wants the node to behave for the current viewport / state. Spread into
 * `<F0GraphNode>` for default rendering, or use individual fields when
 * implementing a fully custom node.
 */
export interface F0GraphNodeRenderContext {
  zoomLevel: ZoomLevel
  variant: GraphNodeVariant
  state: GraphNodeState
  expanded: boolean
  hasChildren: boolean
  childrenCount?: number
  level: number
  tabIndex: 0 | -1
  setSize: number
  posInSet: number
  nodeId: string
  ariaOwns?: string
  onExpandToggle: () => void
  onClick: () => void
  nodeRef: (el: HTMLDivElement | null) => void
  /**
   * Set of tag types currently visible. When undefined, all tag types are
   * rendered. Driven by the `visibleTagTypes` / `nodeTagTypes` props and
   * the popover toggle in the controls bar.
   */
  visibleTagTypes?: ReadonlySet<F0GraphNodeTagColumn>
  /**
   * `true` while a deferred payload is still loading and this node
   * may receive additional children once resolved.
   */
  deferredLoading?: boolean
  /**
   * `true` when viewport-driven data loading is active (`loadVisibleNodeData`
   * provided) and this node's rich data hasn't been fetched yet
   * (`dataLoaded === false`). Render a skeleton/placeholder while true.
   */
  dataLoading?: boolean
}

// ─── Public component (wraps the view in a ReactFlowProvider) ──────────────
function F0GraphInner<T = unknown>(
  props: F0GraphProps<T>,
  ref: ForwardedRef<F0GraphHandle>
) {
  return (
    <ReactFlowProvider>
      <F0GraphView {...props} handleRef={ref} />
    </ReactFlowProvider>
  )
}

export const F0Graph = forwardRef(F0GraphInner) as <T = unknown>(
  props: F0GraphProps<T> & { ref?: Ref<F0GraphHandle> }
) => ReturnType<typeof F0GraphInner>

;(F0Graph as { displayName?: string }).displayName = "F0Graph"
