import { Node as RFNode, NodeProps } from '@xyflow/react';
import { ReactNode } from 'react';
import { F0GraphNodeRenderContext } from '../F0Graph';
import { GraphNode, LayoutDirection, ZoomLevel } from '../types';
export interface GraphNodeData extends Record<string, unknown> {
    graphNode: GraphNode<unknown>;
    renderNode: (node: GraphNode<unknown>, ctx: F0GraphNodeRenderContext) => ReactNode;
    ariaLevel: number;
    ariaSetSize: number;
    ariaPosInSet: number;
    visibleChildIds?: string[];
    /** Set when this node is one row of its parent's stacked column. */
    stacked?: boolean;
}
export type GraphRFNode = RFNode<GraphNodeData>;
export interface ExpanderNodeData {
    [key: string]: unknown;
    count: number;
    expanded: boolean;
    parentId: string;
    parentWidth: number;
    /**
     * `true` while the parent has been expanded but its children have not arrived
     * yet (lazy / on-demand loading). The expander stays visible and shows a
     * spinner so the open action gives immediate feedback instead of a blank gap.
     */
    loading?: boolean;
}
export type ExpanderRFNode = RFNode<ExpanderNodeData>;
export interface CollapserNodeData {
    [key: string]: unknown;
    parentId: string;
    parentWidth: number;
    collapseLabel?: string;
    /** Set when this collapser sits over a stacked column, whose lane is shorter. */
    stacked?: boolean;
}
export type CollapserRFNode = RFNode<CollapserNodeData>;
/** Data for the group node behind a stacked column. */
export interface StackGroupData extends Record<string, unknown> {
    /** Which side the parent card's edge arrives from. */
    direction: LayoutDirection;
}
export type StackGroupRFNode = RFNode<StackGroupData>;
export declare const EXPANDER_Y_OFFSET_BY_ZOOM: Record<ZoomLevel, number>;
export declare const STACKED_RANK_SEP: number;
export declare const EXPANDER_Y_OFFSET_STACKED_BY_ZOOM: Record<ZoomLevel, number>;
/**
 * Height of the collapser's hover area — the band that reveals the button. In a
 * full rank lane this sits comfortably between a node and its children.
 */
export declare const COLLAPSER_HOVER_HEIGHT = 80;
/**
 * The same band over a stacked column, which halves the lane. At full height the
 * box would reach past the end of the lane and cover the top of the first row,
 * and since it is `pointer-events-auto` and above the nodes it would swallow
 * that row's clicks. Clamped to whatever the lane has left below the button's
 * own offset, so hovering the lane still reveals the button while every row
 * stays clickable end to end.
 */
export declare const collapserHoverHeightStacked: (zoom: ZoomLevel) => number;
declare function F0GraphNodeWrapperInner({ data, id }: NodeProps<GraphRFNode>): import("react").JSX.Element | null;
declare namespace F0GraphNodeWrapperInner {
    var displayName: string;
}
export declare const F0GraphNodeWrapper: import('react').MemoExoticComponent<typeof F0GraphNodeWrapperInner>;
declare function F0GraphExpanderWrapperInner({ data, id }: NodeProps<ExpanderRFNode>): import("react").JSX.Element | null;
declare namespace F0GraphExpanderWrapperInner {
    var displayName: string;
}
export declare const F0GraphExpanderWrapper: import('react').MemoExoticComponent<typeof F0GraphExpanderWrapperInner>;
declare function F0GraphCollapserWrapperInner({ data, id, }: NodeProps<CollapserRFNode>): import("react").JSX.Element | null;
declare namespace F0GraphCollapserWrapperInner {
    var displayName: string;
}
/**
 * The group node a stacked column's rows belong to (see
 * https://reactflow.dev/learn/layouting/sub-flows): they are its children, so
 * they are positioned relative to it and travel with it. It paints nothing —
 * the column reads as a group because the rows are connected to each other, not
 * because a surface sits behind them. What it still carries is the geometry:
 * its box is the rows grown by `STACKED_GROUP_PADDING`, which is where each
 * row's offset inside it comes from.
 *
 * Decorative on every axis: no semantics (the rows keep the `treeitem` roles)
 * and `pointer-events-none`, so the gaps between rows stay click-through
 * instead of swallowing canvas pans.
 */
declare function F0GraphStackGroupWrapperInner(_: NodeProps<RFNode<StackGroupData>>): import("react").JSX.Element;
declare namespace F0GraphStackGroupWrapperInner {
    var displayName: string;
}
export declare const F0GraphStackGroupWrapper: import('react').MemoExoticComponent<typeof F0GraphStackGroupWrapperInner>;
export declare const F0GraphCollapserWrapper: import('react').MemoExoticComponent<typeof F0GraphCollapserWrapperInner>;
export {};
