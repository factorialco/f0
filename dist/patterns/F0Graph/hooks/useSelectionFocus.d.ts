import { MutableRefObject } from 'react';
import { TreeNode } from '../types';
interface UseSelectionFocusOptions<T> {
    roots: TreeNode<T>[];
    expandedNodes: Set<string>;
    selectionMode: "single" | "multi" | "none";
    controlledSelected?: Set<string>;
    onNodeSelect?: (nodeId: string, selected: boolean) => void;
    onSelectedNodesChange?: (next: Set<string>) => void;
    /** Focused on Escape / clear, so keyboard control returns to the canvas. */
    canvasRef: MutableRefObject<HTMLDivElement | null>;
}
export interface UseSelectionFocusResult {
    selectedNodes: Set<string>;
    focusedNodeId: string | null;
    setFocusedNodeId: (id: string | null) => void;
    focusedNodeIdRef: MutableRefObject<string | null>;
    registerNodeRef: (nodeId: string, el: HTMLElement | null) => void;
    nodeRefsMapRef: MutableRefObject<Map<string, HTMLElement>>;
    /** DFS order of visible node + expander/collapser ids, for keyboard nav. */
    flatVisibleOrderRef: MutableRefObject<string[]>;
    selectNode: (nodeId: string) => void;
    clearSelection: () => void;
}
/**
 * Owns selection (controlled/uncontrolled) and roving-tabindex focus: the
 * focused node id, the DFS visible order used by keyboard navigation, the
 * imperative node-ref map, and the `selectNode` / `clearSelection` actions.
 */
export declare function useSelectionFocus<T>({ roots, expandedNodes, selectionMode, controlledSelected, onNodeSelect, onSelectedNodesChange, canvasRef, }: UseSelectionFocusOptions<T>): UseSelectionFocusResult;
export {};
