import { Viewport } from '@xyflow/react';
import { PositionedNode, ViewportInset, ZoomLevel, ZoomPreset, ZoomThresholds } from '../types';
interface UseGraphViewportOptions {
    defaultZoom: number;
    zoomPreset?: ZoomPreset;
    zoomThresholds?: ZoomThresholds;
    currentUserNodeId?: string;
    onZoomLevelChange?: (level: ZoomLevel) => void;
    onViewportChange?: (viewport: {
        x: number;
        y: number;
        zoom: number;
    }) => void;
    /**
     * When node-array windowing is active, off-screen nodes aren't in React
     * Flow's store, so id-based `fitView` can't target them. These let navigation
     * fall back to the full layout: `fitBounds` for fit-all, `setCenter` for
     * fly-to. Omitted (windowing off) → the plain React Flow paths are used.
     */
    nodeWindowingActive?: boolean;
    getContentBounds?: () => {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    getNodePosition?: (id: string) => PositionedNode | undefined;
    /**
     * Region of the canvas (screen px) occluded by external chrome (a side panel).
     * All fly-to paths shift their target so the node lands in the free area. Read
     * through a ref so it never changes the handlers' identity.
     */
    viewportInset?: ViewportInset;
}
export interface UseGraphViewportResult {
    /**
     * Derived, DISCRETE zoom step. The continuous zoom factor is deliberately not
     * exposed: it changes every zoom frame, and anything that renders from it
     * re-renders at frame rate. Consumers that need to react to zoom want this.
     */
    zoomLevel: ZoomLevel;
    /**
     * True once React Flow has emitted its first viewport update (i.e. the
     * initial `fitView` has settled). Node-array windowing waits for this so the
     * mount-time fit sees every node and frames the whole graph before the
     * camera starts driving which nodes are materialized.
     */
    viewportReady: boolean;
    handleViewportChange: (vp: Viewport) => void;
    handleZoomIn: () => void;
    handleZoomOut: () => void;
    handleFitView: () => void;
    handleFocusUser: () => void;
    /**
     * Fly to a node using its full-layout position, so it works even when the
     * node is windowed out of React Flow's store. Centers the node in the free
     * region when a `viewportInset` is set. `zoom` defaults to the graph's
     * `defaultZoom`. Returns false if the position is unknown (caller should fall
     * back to an id-based fit).
     */
    centerOnNode: (nodeId: string, duration: number, zoom?: number) => boolean;
    /**
     * Build a React Flow `fitView` padding that layers the current `viewportInset`
     * on top of the symmetric `base`, so id-based fits also clear the panel. With
     * an inset it returns per-side px; with none, the plain `base` fraction
     * (identical to before).
     */
    getFitPadding: (base: number) => number | ViewportInsetPadding;
    /** True when a non-zero `viewportInset` is currently set. */
    hasViewportInset: boolean;
}
/**
 * Per-side fitView padding in px, returned by {@link getFitPadding}. Px (not
 * fractions) because React Flow resolves a *numeric* padding non-linearly —
 * `p` becomes `(dimension - dimension / (1 + p)) / 2` px per side — so a
 * fraction cannot express "shift by exactly this many px".
 */
interface ViewportInsetPadding {
    top: `${number}px`;
    right: `${number}px`;
    bottom: `${number}px`;
    left: `${number}px`;
}
/**
 * Tracks the viewport zoom (and derived discrete `zoomLevel`), fires the
 * zoom-level / viewport change callbacks, and exposes the control-bar handlers
 * (zoom in/out, fit, find-me).
 */
export declare function useGraphViewport({ defaultZoom, zoomPreset, zoomThresholds, currentUserNodeId, onZoomLevelChange, onViewportChange, nodeWindowingActive, getContentBounds, getNodePosition, viewportInset, }: UseGraphViewportOptions): UseGraphViewportResult;
export {};
