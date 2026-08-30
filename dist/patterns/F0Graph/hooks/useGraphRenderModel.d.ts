import { Edge as RFEdge, Node as RFNode } from '@xyflow/react';
import { MutableRefObject, ReactNode } from 'react';
import { F0GraphNodeTagColumn } from '../components/F0GraphNode';
import { F0GraphNodeRenderContext } from '../F0Graph';
import { GraphEdge, GraphNode, LayoutDirection, LayoutEngine, PositionedNode, TreeNode, ZoomLevel } from '../types';
import { StackHoverZone } from '../utils';
/** Geometry of one stacked column's group node, plus its rows' offsets in it. */
interface UseGraphRenderModelOptions<T> {
    roots: TreeNode<T>[];
    nodeMap: Map<string, TreeNode<T>>;
    expandedNodes: Set<string>;
    anchorNodeRef: MutableRefObject<string | null>;
    /**
     * Called (before paint) when a toggle-driven reflow repositions the anchor
     * node by `(dx, dy)` in flow-space. The owner translates the viewport by the
     * same amount so the anchor stays visually fixed — node positions stay raw.
     */
    onAnchorReflow?: (dx: number, dy: number) => void;
    resolvedEdgesProp?: GraphEdge[];
    stableRenderNode: (node: GraphNode<unknown>, ctx: F0GraphNodeRenderContext) => ReactNode;
    nodeTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>;
    visibleTagTypesSet: Set<F0GraphNodeTagColumn>;
    reserveTagRow?: boolean;
    nodeWidthProp?: number;
    nodeHeightProp?: number;
    stackedNodeHeightProp?: number;
    stackedNodeGapProp?: number;
    layoutEngineProp?: LayoutEngine;
    zoomLevel: ZoomLevel;
    direction: LayoutDirection;
    controlLabels?: {
        collapseChildren?: string;
    };
    hoveredEdgeId: string | null;
    /**
     * Opt-in node-array windowing: when true, only the React Flow nodes whose
     * layout box intersects the current viewport (plus `nodeWindowPadding`) are
     * materialized. The layout itself is still computed over every visible node,
     * so positions, bounds and fit-view stay correct.
     */
    enableNodeWindowing?: boolean;
    /** Flow-space px grown around the viewport when windowing. */
    nodeWindowPadding?: number;
}
export interface UseGraphRenderModelResult<T> {
    visibleTreeNodes: TreeNode<T>[];
    rfNodes: RFNode[];
    rfEdges: RFEdge[];
    reservedTagHeight: number;
    tagsAffectLayout: boolean;
    /**
     * Number of `graphNode` React Flow nodes actually handed to React Flow. Equals
     * the visible count when windowing is off; approximates the on-screen count
     * when `enableNodeWindowing` is on.
     */
    renderedNodeCount: number;
    /** Ids of those `graphNode`s — for viewport-driven data loading. */
    renderedNodeIds: string[];
    /**
     * Ids of the rendered `graphNode`s with no rendered parent (roots, plus nodes
     * whose parent is windowed out). The `role="tree"` container `aria-owns` these
     * so every rendered `role="treeitem"` has exactly one owner across React
     * Flow's `role="application"` wrapper.
     */
    treeRootNodeIds: string[];
    /** Bounding box of the full layout (`null` when empty), for fit-view. */
    contentBounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    /** Layout position of a node id, regardless of whether it is windowed out. */
    getNodePosition: (id: string) => PositionedNode | undefined;
    /**
     * One region per stacked parent, covering its card, the lane and its column.
     * Feeds the pointer test that reveals that parent's collapse affordance from
     * anywhere inside the column. Not filtered by windowing: a column whose
     * affordance is windowed out has nothing to reveal.
     */
    stackHoverZones: StackHoverZone[];
}
/**
 * Turns the resolved tree + interaction state into the React Flow render model:
 * visible nodes, edges (rewritten through expanders), the computed layout, the
 * viewport anchor offset that keeps the view stable on expand/collapse, and the
 * final `rfNodes` / `rfEdges` arrays.
 */
export declare function useGraphRenderModel<T>({ roots, nodeMap, expandedNodes, anchorNodeRef, onAnchorReflow, resolvedEdgesProp, stableRenderNode, nodeTagTypes, visibleTagTypesSet, reserveTagRow, nodeWidthProp, nodeHeightProp, stackedNodeHeightProp, stackedNodeGapProp, layoutEngineProp, zoomLevel, direction, controlLabels, hoveredEdgeId, enableNodeWindowing, nodeWindowPadding, }: UseGraphRenderModelOptions<T>): UseGraphRenderModelResult<T>;
export {};
