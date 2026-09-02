import { ZoomLevel } from './types';
export declare const EMPTY_HIGHLIGHTED_NODES: Set<string>;
export declare const EMPTY_TAG_COLUMNS: readonly string[];
export declare const COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM: Record<ZoomLevel, number>;
/**
 * How tall a node paints — the pill, without the tag block hanging under it. The
 * layout engine's default `nodeHeight`, and where a node's connectors leave from
 * (the box below it is reservation, see `paintedHandleStyle`).
 */
export declare const NODE_HEIGHT = 56;
/**
 * Vertical lane between a node's bottom and its children's top: the layout
 * engine's default `rankSep`, and the lane the expand/collapse affordance is
 * centred in. One definition on purpose — it used to be declared twice, in the
 * engine and again in the React Flow adapters, kept in step by a comment, while
 * the stacked lane and the affordance offsets were derived from the copy.
 */
export declare const NODE_RANK_SEP = 130;
export declare const BACKGROUND_DOT_GAP = 32;
/** Avatar box in a stacked row: `md`, one step down from the card's `lg`. */
export declare const STACKED_NODE_AVATAR = 32;
/** Inset from the inner edge of the border to the avatar, on all four sides. */
export declare const STACKED_NODE_PADDING = 5;
/** Step from the avatar to the title. The same 8px the card puts there. */
export declare const STACKED_NODE_TITLE_GAP = 8;
/**
 * How much narrower a stacked row is than the card above it, split across both
 * edges. A column is subordinate to its parent, so it reads better indented
 * from the card's own silhouette than running flush with it.
 *
 * Width only — the reserved band is unaffected, since the layout engine gives a
 * stacked parent no cross-axis cost at all (its column lives inside the
 * parent's own lane).
 */
export declare const STACKED_NODE_WIDTH_INSET = 24;
/**
 * Horizontal room the node wrapper leaves around a node's layout box, so two
 * adjacent cards never touch. Subtracted from the box to get the width a node
 * actually paints.
 */
export declare const NODE_BOX_INSET = 20;
/**
 * A stacked column is a React Flow sub-flow: the rows are child nodes of a
 * group node that wraps them (see
 * https://reactflow.dev/learn/layouting/sub-flows). This is the room that group
 * keeps between its edge and the rows inside it. Real geometry, not CSS: the
 * group's box is the union of its rows grown by this much, and each row's
 * position inside the group starts at it.
 */
export declare const STACKED_GROUP_PADDING = 8;
export declare const STACKED_NODE_HEIGHT: number;
export declare const STACKED_NODE_GAP = 16;
/**
 * The row's title type scale per zoom variant, mirroring the node card's own
 * (14/20 in detail, 24/32 in compact, no text in dot). Without it a column
 * keeps detail typography while the cards around it scale up, so the stack
 * stops reading at the same scale as the parent it hangs from.
 *
 * Both steps fit the *same* band, which is the point: 32px of line height plus
 * the 2×(padding + border) inset is exactly `STACKED_NODE_HEIGHT`, as is the
 * 32px avatar that governs the detail row. So the row can answer to zoom
 * without the reserved band changing — and the band must not change, since the
 * layout runs before the zoom level is known (see the zoomLevel⇄bounds cycle in
 * F0GraphView).
 */
export declare const STACKED_NODE_TITLE_BY_ZOOM: Record<ZoomLevel, {
    fontSize: number;
    lineHeight: string;
} | null>;
export declare const STACKED_RANK_SEP_RATIO = 0.5;
export declare const FOCUS_SETTLE_DELAY_MS = 100;
export declare const FIT_VIEW_PADDING_TIGHT = 0.1;
export declare const FIT_VIEW_PADDING_LOOSE = 0.5;
export declare const NODE_CLICK_DISTANCE_SQ: number;
export declare const DEFAULT_NODE_WINDOW_PADDING = 600;
export declare const DEFAULT_VISIBLE_DATA_DEBOUNCE_MS = 200;
export declare const NODE_WINDOW_QUANTIZE_STEP = 400;
export declare const LARGE_GRAPH_SNAP_THRESHOLD = 700;
export declare const INITIAL_FOCUS_MAX_ZOOM = 1;
export declare const NODE_CLICK_ZOOM = 1.5;
