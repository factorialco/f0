import { ReactNode } from 'react';
import { LayoutDirection, ZoomLevel } from './types';
/**
 * Every node wrapper subscribes to this context, so it must only carry values
 * that change at DISCRETE steps. The live (continuous) zoom factor is
 * deliberately absent: publishing it here re-created the context value on every
 * zoom frame and re-rendered every node in the graph — `memo` on the wrappers
 * cannot stop a context change. Only the derived `zoomLevel` belongs here.
 */
export interface F0GraphZoomContextValue {
    zoomLevel: ZoomLevel;
    direction: LayoutDirection;
}
export declare const F0GraphZoomContext: import('react').Context<F0GraphZoomContextValue | null>;
export declare function useF0GraphZoom(): F0GraphZoomContextValue;
/** Non-throwing variant for internal wrapper components */
export declare function useF0GraphZoomInternal(): F0GraphZoomContextValue | null;
export interface F0GraphExpandContextValue {
    expandedNodes: Set<string>;
}
export declare const F0GraphExpandContext: import('react').Context<F0GraphExpandContextValue | null>;
export declare function useF0GraphExpand(): F0GraphExpandContextValue;
/** Non-throwing variant for internal wrapper components */
export declare function useF0GraphExpandInternal(): F0GraphExpandContextValue | null;
export interface F0GraphSelectionContextValue {
    selectedNodes: Set<string>;
    highlightedNodes: Set<string>;
}
export declare const F0GraphSelectionContext: import('react').Context<F0GraphSelectionContextValue | null>;
export declare function useF0GraphSelection(): F0GraphSelectionContextValue;
/** Non-throwing variant for internal wrapper components */
export declare function useF0GraphSelectionInternal(): F0GraphSelectionContextValue | null;
export interface F0GraphActionsContextValue {
    toggleExpand: (nodeId: string) => void;
    selectNode: (nodeId: string) => void;
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
    expandAll: () => Promise<void>;
    /**
     * Collapse every node by clearing the expanded set. Lazy-mode children
     * that have already been fetched stay cached — this only flips UI state.
     * Emits a single `onExpandedNodesChange(new Set())`.
     */
    collapseAll: () => void;
}
export declare const F0GraphActionsContext: import('react').Context<F0GraphActionsContextValue | null>;
export declare function useF0GraphActions(): F0GraphActionsContextValue;
/** Non-throwing variant for internal wrapper components */
export declare function useF0GraphActionsInternal(): F0GraphActionsContextValue | null;
export interface F0GraphRenderConfigContextValue {
    renderEdge?: (edge: import('./types').GraphEdge, variant: import('./components/F0GraphEdge').EdgeVariant) => ReactNode | null;
    /**
     * Set of tag types currently visible. When undefined, F0GraphNode
     * renders all tags. Driven by the F0Graph `nodeTagTypes` /
     * `visibleTagTypes` props and the controls popover.
     */
    visibleTagTypes?: ReadonlySet<import('./components/F0GraphNode').F0GraphNodeTagColumn>;
    /**
     * `true` while a deferred payload is still loading. Used by
     * F0GraphNodeWrapper to set `deferredLoading` on the render context.
     */
    deferredLoading?: boolean;
    /**
     * `true` when viewport-driven data loading is active (`loadVisibleNodeData`
     * provided). The node wrapper combines this with each node's `dataLoaded`
     * flag to set `dataLoading` on the render context.
     */
    dataLoadingEnabled?: boolean;
    /**
     * Height of the tag row reserved in the node rect by the layout engine.
     * `0` when tags don't affect layout (overflow mode) or when no tag types
     * are configured. Used by the node wrapper to top-align the pill and
     * offset the source Handle upward in compact/dot mode (where tags are
     * hidden but the rect is still oversized).
     */
    tagRowHeight?: number;
    /**
     * Height of one stacked row as reserved by the layout engine. Used by the node
     * wrapper to set `stackedHeight` on the render context, so a row always fills
     * exactly its band — otherwise a custom `stackedNodeHeight` would move the
     * layout while the row kept the default height, and the column would drift.
     */
    stackedNodeHeight?: number;
    /**
     * `true` when the graph has more rendered nodes than the snap threshold.
     * F0GraphNode uses this to disable variant transitions (chrome opacity,
     * avatar transform, text reveal) so changing zoomLevel snaps instantly
     * instead of animating thousands of elements simultaneously.
     */
    largeGraph?: boolean;
}
export declare const F0GraphRenderConfigContext: import('react').Context<F0GraphRenderConfigContextValue | null>;
/** Non-throwing variant for internal edge wrapper */
export declare function useF0GraphRenderConfigInternal(): F0GraphRenderConfigContextValue | null;
/**
 * Which stacked parent the pointer is currently inside, so that parent's collapse
 * affordance can reveal itself from anywhere in its column rather than only from
 * the narrow band under the card.
 *
 * This value changes as the pointer moves, so it is read by
 * `F0GraphCollapserWrapper` **only**. Reading it from `F0GraphNodeWrapper` would
 * re-render every node in the graph on pointer movement, and `memo` cannot stop a
 * context change (see the warning at the top of this file). There is no throwing
 * variant because nothing public needs it.
 */
export interface F0GraphStackHoverContextValue {
    hoveredStackParentId: string | null;
}
export declare const F0GraphStackHoverContext: import('react').Context<F0GraphStackHoverContextValue | null>;
export declare function useF0GraphStackHoverInternal(): F0GraphStackHoverContextValue | null;
export interface F0GraphFocusContextValue {
    focusedNodeId: string | null;
    setFocusedNodeId: (id: string | null) => void;
    registerNodeRef: (nodeId: string, el: HTMLElement | null) => void;
}
export declare const F0GraphFocusContext: import('react').Context<F0GraphFocusContextValue | null>;
export declare function useF0GraphFocus(): F0GraphFocusContextValue;
/** Non-throwing variant for internal wrapper components */
export declare function useF0GraphFocusInternal(): F0GraphFocusContextValue | null;
