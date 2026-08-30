import { GraphEdge, LayoutDirection, PositionedNode, TreeNode } from './types';
/**
 * React Flow `fitViewOptions.nodes` for the initial frame: `[{ id }]` to open
 * centered on `initialFocusNodeId`, or `undefined` to fit the whole graph.
 * Returns `undefined` (fit-all fallback) when no target is given or the target
 * isn't among the present nodes — so a missing node never leaves a blank frame.
 */
export declare function resolveInitialFitViewNodes(initialFocusNodeId: string | undefined, childIds: readonly string[], presentNodeIds: ReadonlySet<string>): Array<{
    id: string;
}> | undefined;
/** Axis-aligned rectangle in flow-space coordinates. */
export interface ViewportRect {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
/**
 * Whether a node box (top-left `x`/`y`, size `width`/`height`) overlaps `rect`.
 * Pure AABB intersection — the core predicate behind node-array windowing.
 */
export declare function nodeIntersectsRect(x: number, y: number, width: number, height: number, rect: ViewportRect): boolean;
/** One stacked column's group box, plus its rows' offsets inside it. */
export interface StackGroupBox {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    /** Row boxes relative to the group's own origin, keyed by row id. */
    rows: Map<string, {
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
}
/**
 * Turns each stacked parent's rows into the React Flow sub-flow that renders
 * them (see https://reactflow.dev/learn/layouting/sub-flows): a group box, the
 * rows' offsets inside it, and the chain that says which row a row's connector
 * comes from.
 *
 * The group's box is the union of its rows grown by `STACKED_GROUP_PADDING`, so
 * the padding is real geometry rather than CSS — the rows sit inside it at
 * exactly that offset. The rows are narrowed off the layout box by the same
 * cross-axis inset the card wrapper used to apply in CSS, which keeps a row's
 * CENTER on the parent's axis (the inset comes off both edges) while making its
 * box the width it actually paints.
 *
 * Pure: same inputs, same boxes. Lives here rather than inside the render model
 * so it can be exercised without standing up the whole hook.
 */
export declare function computeStackGroups<T>(visibleTreeNodes: TreeNode<T>[], stackedNodeIndex: Map<string, number>, positionMap: Map<string, PositionedNode>, direction: LayoutDirection): {
    groups: Map<string, StackGroupBox>;
    groupOf: Map<string, string>;
    previousRow: Map<string, string>;
};
/**
 * The region that belongs to one stacked parent: its card, the lane under it and
 * the whole column below that, as one rect in flow coordinates.
 */
export interface StackHoverZone {
    parentId: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * Which stacked parent's region contains a point, or `null` for none.
 *
 * Point-in-rect rather than the rect-vs-rect [[nodeIntersectsRect]] above, and
 * answered geometrically rather than by hit-testing, for two reasons. React Flow
 * renders every node flat as siblings, so a sub-flow's rows are not DOM children
 * of their group and no `group-hover` variant can connect the rows, the group and
 * the collapse affordance. And making the group hit-testable instead would break
 * selection: the canvas `onPointerUp` handler resolves
 * `target.closest(".react-flow__node")` and selects whatever it finds, so a click
 * in the gap between two rows would select the group node and report that to the
 * consumer, besides suppressing `onPaneClick` over every column.
 *
 * Inclusive on all four edges. Zones cannot overlap (one per stacked parent, each
 * inside its parent's own lane), so the first match wins.
 */
export declare function findStackHoverZoneAt(zones: readonly StackHoverZone[], x: number, y: number): string | null;
/**
 * Bounding box of every positioned node, as an `{ x, y, width, height }` rect
 * suitable for `reactFlow.fitBounds`. Returns `null` for an empty layout.
 * Lets navigation (fit-view, fly-to) target the full graph even when node-array
 * windowing has removed off-screen nodes from the React Flow store.
 */
export declare function computeLayoutBounds(nodes: PositionedNode[]): {
    x: number;
    y: number;
    width: number;
    height: number;
} | null;
/** Compute the initial expanded set by expanding every node above `depth`. */
export declare function computeExpandedByDepth<T>(roots: TreeNode<T>[], depth: number): Set<string>;
/**
 * Collect every expandable node id (eager mode). A node is "expandable" when it
 * has children to reveal; in eager mode the tree is fully known, so
 * `children.length > 0` is sufficient.
 */
export declare function collectExpandableNodeIds<T>(roots: TreeNode<T>[]): Set<string>;
/** Derive parent→child edges from the tree structure. */
export declare function deriveEdgesFromTree<T>(roots: TreeNode<T>[]): GraphEdge[];
/**
 * Ids of the nodes whose children actually render as a vertical stack, and the
 * ids of the stacked nodes themselves.
 *
 * `stackNodes` is a request, not a guarantee: a stacked row is a compact
 * strip with no lane beneath it, so a child that can expand has nowhere to put
 * its own subtree. Such a group falls back to the normal horizontal fan-out.
 * Emptiness is the other fallback — an as-yet-unloaded group (children not
 * fetched, or collapsed) stacks nothing and is left to the standard path until
 * its children arrive.
 *
 * Resolved once per render and shared by the layout engine input and the node
 * render context, so "is this stacked?" has a single answer everywhere.
 */
export declare function resolveStackedParents<T>(nodes: TreeNode<T>[]): {
    stackedParentIds: Set<string>;
    /** Stacked node id → its 0-based position in the column. */
    stackedNodeIndex: Map<string, number>;
};
/** Collect the nodes currently visible, respecting the expanded set. */
export declare function collectVisibleNodes<T>(roots: TreeNode<T>[], expandedNodes: Set<string>): TreeNode<T>[];
