import { MutableRefObject } from 'react';
import { GraphNode, TreeNode } from '../types';
interface LazyTreeLike<T> {
    nodes: GraphNode<T>[];
    expandNode: (nodeId: string) => Promise<GraphNode<T>[]>;
}
interface UseExpandStateOptions<T> {
    roots: TreeNode<T>[];
    nodeMap: Map<string, TreeNode<T>>;
    isLazyMode: boolean;
    lazyTree: LazyTreeLike<T>;
    controlledExpanded?: Set<string>;
    defaultExpandedNodes?: Set<string>;
    defaultExpandDepth?: number;
    onExpandToggle?: (nodeId: string, expanded: boolean) => void;
    onExpandedNodesChange?: (next: Set<string>) => void;
}
export interface UseExpandStateResult {
    expandedNodes: Set<string>;
    expandedNodesRef: MutableRefObject<Set<string>>;
    /** Set on every toggle to the node whose position should stay anchored. */
    anchorNodeRef: MutableRefObject<string | null>;
    toggleExpand: (nodeId: string) => void;
    expandAll: () => Promise<void>;
    collapseAll: () => void;
}
/**
 * Owns the expand/collapse state (controlled or uncontrolled): the expanded
 * set, the single-node `toggleExpand` (which also collapses the subtree so
 * re-expanding reveals only the immediate level), and the bulk
 * `expandAll`/`collapseAll`. Also exposes `anchorNodeRef`, written on every
 * toggle and read by `useGraphRenderModel` to keep the viewport stable.
 */
export declare function useExpandState<T>({ roots, nodeMap, isLazyMode, lazyTree, controlledExpanded, defaultExpandedNodes, defaultExpandDepth, onExpandToggle, onExpandedNodesChange, }: UseExpandStateOptions<T>): UseExpandStateResult;
export {};
