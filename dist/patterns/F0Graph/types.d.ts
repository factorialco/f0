export interface GraphNode<T = unknown> {
    id: string;
    /**
     * For tree topology. For DAG nodes with multiple parents, use `parentIds`
     * instead. If both are provided, `parentIds` wins.
     */
    parentId: string | null;
    /**
     * Optional list of parent IDs for DAG topology. When provided, takes
     * precedence over `parentId`. A node with `parentIds.length > 1` indicates
     * a DAG node.
     */
    parentIds?: string[];
    data: T;
    childrenCount?: number;
    childrenLoaded?: boolean;
    /**
     * For viewport-driven data loading (`loadVisibleNodeData`): set `false` on a
     * lightweight/skeleton node whose rich `data` hasn't been fetched yet, then
     * `true` once hydrated. Drives the `dataLoading` flag on the render context.
     * Leave undefined when not using on-demand data loading.
     */
    dataLoaded?: boolean;
    /**
     * Render this node's children as a vertical stack directly under it — a tight
     * column of compact rows sharing the parent's x — instead of the default
     * horizontal fan-out. Use it for children that read as a list belonging to the
     * parent rather than as branches in their own right (job levels under a role,
     * plan tiers under a product).
     *
     * A stacked group reserves no horizontal space, so the parent's siblings sit
     * as close together as if it had no children at all.
     *
     * **Only applies when every child is a leaf** (`childrenCount === 0`). A group
     * with an expandable child falls back to the normal fan-out, because a stacked
     * row has nowhere to hang a subtree.
     */
    stackNodes?: boolean;
}
export interface GraphEdge {
    id: string;
    source: string;
    target: string;
    type?: "smoothstep" | "straight" | "bezier";
    /**
     * Optional consumer-defined edge metadata (labels, weights, semantic types).
     * Type-erased — consumers narrow as needed.
     */
    data?: unknown;
    /**
     * Optional click handler. When defined, the edge becomes interactive: it
     * shows the `hover` variant on pointer-enter and invokes this on click.
     */
    onEdgeClick?: (edge: GraphEdge) => void;
    /**
     * Optional hover handler. When defined, the edge becomes interactive: it
     * shows the `hover` variant on pointer-enter and invokes this with the
     * edge on enter and `null` on leave.
     */
    onEdgeHover?: (edge: GraphEdge | null) => void;
}
export interface TreeNode<T = unknown> {
    id: string;
    parentId: string | null;
    data: T;
    children: TreeNode<T>[];
    depth: number;
    childrenCount: number;
    childrenLoaded: boolean;
    /** Mirrors `GraphNode.dataLoaded` for viewport-driven data loading. */
    dataLoaded?: boolean;
    /**
     * Mirrors `GraphNode.stackNodes`. The layout engine reads it to lay this
     * node's children out as a vertical stack instead of a horizontal fan-out.
     * `useGraphRenderModel` normalizes it first — see `resolveStackedParents` —
     * so by the time the engine sees it, the leaf-children precondition holds.
     */
    stackNodes?: boolean;
    /**
     * Present when a node has multiple parents in a DAG. Lists all logical
     * parent IDs. The canonical layout parent (`parentId`) is the first entry.
     * Only set when `parentIds` was provided on the input `GraphNode`.
     */
    dagParentIds?: string[];
}
export declare const zoomLevels: readonly ["detail", "compact", "dot"];
export type ZoomLevel = (typeof zoomLevels)[number];
export declare const zoomPresets: {
    readonly default: {
        readonly detail: 0.56;
        readonly compact: 0.3;
        readonly dot: 0.18;
    };
    readonly dense: {
        readonly detail: 0.5;
        readonly compact: 0.2;
        readonly dot: 0.08;
    };
    readonly sparse: {
        readonly detail: 0.85;
        readonly compact: 0.45;
        readonly dot: 0.15;
    };
};
export type ZoomPreset = keyof typeof zoomPresets;
export interface ZoomThresholds {
    detail: number;
    compact: number;
    dot: number;
}
export type LayoutDirection = "TB" | "LR" | "BT" | "RL";
/**
 * Region of the canvas (in screen px) covered by external chrome — typically a
 * side panel / drawer opened over the graph. All fly-to paths shift their target
 * so the node lands centered in the *free* area instead of behind the panel.
 *
 * The consumer measures / knows this (e.g. a fixed-width drawer) and passes it;
 * F0Graph has no notion of the panel itself. The side is encoded by which key is
 * set — a right-hand drawer sets `right`, a left-hand one (or RTL layout) sets
 * `left` — so no separate direction handling is needed. Omitted / `0` on every
 * side behaves exactly as if there were no inset.
 */
export interface ViewportInset {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
/**
 * Layout engine interface (abstract — implementations can be swapped).
 *
 * The built-in implementation (`useLayoutEngine`) produces a deterministic
 * tree layout. For DAG topologies where nodes have multiple parents, consumers
 * should provide a custom engine wrapping a DAG layout library (e.g., dagre,
 * ELK, or d3-dag). A custom engine receives the original `nodes` and `edges`
 * (not the tree projection) and computes its own positions.
 */
export interface LayoutEngine {
    computeLayout(nodes: TreeNode[], edges: GraphEdge[], direction: LayoutDirection): LayoutResult;
}
export interface LayoutResult {
    nodes: PositionedNode[];
    edges: PositionedEdge[];
    width: number;
    height: number;
}
export interface PositionedNode {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface PositionedEdge {
    id: string;
    source: string;
    target: string;
    points: Array<{
        x: number;
        y: number;
    }>;
}
/** Payload shape returned by the deferred nodes source. */
export interface DeferredNodesPayload<T = unknown> {
    nodes: GraphNode<T>[];
    edges?: GraphEdge[];
}
/** Status of the deferred merge lifecycle. */
export type DeferredStatus = "idle" | "loading" | "resolved" | "error";
