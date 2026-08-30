import { KeyboardEvent, MutableRefObject } from 'react';
import { TreeNode } from '../types';
interface UseGraphKeyboardOptions<T> {
    nodeMap: Map<string, TreeNode<T>>;
    clearSelection: () => void;
    toggleExpand: (nodeId: string) => void;
    selectNode: (nodeId: string) => void;
    focusedNodeIdRef: MutableRefObject<string | null>;
    setFocusedNodeId: (id: string | null) => void;
    flatVisibleOrderRef: MutableRefObject<string[]>;
    expandedNodesRef: MutableRefObject<Set<string>>;
    nodeRefsMapRef: MutableRefObject<Map<string, HTMLElement>>;
}
export interface UseGraphKeyboardResult {
    handleTreeKeyDown: (e: KeyboardEvent) => void;
    handleCanvasKeyDown: (e: KeyboardEvent) => void;
}
/**
 * Keyboard handlers for the graph: tree navigation (arrows, Home/End,
 * expand/collapse, select) when a node is focused, and canvas pan/zoom when the
 * canvas wrapper itself has focus.
 */
export declare function useGraphKeyboard<T>({ nodeMap, clearSelection, toggleExpand, selectNode, focusedNodeIdRef, setFocusedNodeId, flatVisibleOrderRef, expandedNodesRef, nodeRefsMapRef, }: UseGraphKeyboardOptions<T>): UseGraphKeyboardResult;
export {};
