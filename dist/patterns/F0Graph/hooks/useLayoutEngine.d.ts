import { LayoutEngine } from '../types';
interface UseLayoutEngineOptions {
    nodeWidth?: number;
    nodeHeight?: number;
    rankSep?: number;
    nodeSep?: number;
    rootSep?: number;
    /**
     * Main-axis size of a stacked node — its height in the default `TB`
     * direction. A stacked row inherits the card's width but not its height: it
     * is a compact strip, so it sizes independently of `nodeHeight`. Defaults
     * to 44 (`STACKED_NODE_HEIGHT`).
     */
    stackedNodeHeight?: number;
    /** Gap between two consecutive stacked nodes. Defaults to 16. */
    stackedNodeGap?: number;
    /**
     * When > 0, node centers are snapped to this pixel grid so columns/rows line
     * up with the canvas background dots and edges stay crisp. `0` only rounds to
     * integers. Defaults to `0`.
     */
    snapGrid?: number;
}
/**
 * Built-in tree layout engine hook.
 *
 * This engine is intentionally tree-focused: it positions each node under its
 * canonical parent only. When a `TreeNode` has `dagParentIds`, the extra
 * parents are ignored for positioning — the node is laid out under its first
 * parent (the canonical one).
 *
 * **DAG consumers:** For layouts where edges to all parents affect node
 * positioning, provide a custom `layoutEngine` prop to F0Graph that wraps a
 * DAG layout library (dagre, ELK, d3-dag). The custom engine receives the
 * original `nodes` + `edges` arrays and computes its own `LayoutResult`.
 * This hook serves as the reference implementation and fallback.
 */
export declare function useLayoutEngine(options?: UseLayoutEngineOptions): LayoutEngine;
export {};
