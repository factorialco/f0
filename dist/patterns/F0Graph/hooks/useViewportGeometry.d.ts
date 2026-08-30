import { ViewportRect } from '../utils';
interface UseViewportGeometryOptions {
    /** When false the hook reads nothing and never re-renders on viewport changes. */
    enabled: boolean;
    /** Flow-space px added around the viewport rect. Defaults to {@link DEFAULT_NODE_WINDOW_PADDING}. */
    padding?: number;
}
/**
 * Computes the current viewport as a padded rect in flow-space coordinates,
 * driving node-array windowing. Returns `null` when disabled or before React
 * Flow has measured the pane (width/height still 0) — callers treat `null` as
 * "no windowing, render everything", which is also the correct behavior for the
 * first paint (React Flow's own `fitView` needs all nodes present to fit them).
 *
 * The rect edges are snapped to {@link NODE_WINDOW_QUANTIZE_STEP} so both the
 * returned identity AND this hook's own subscription are stable while the camera
 * stays within a grid cell. That throttles the O(N) intersection downstream —
 * and the host component's re-render — to cell crossings rather than every
 * pan/zoom frame. The snapping must happen inside the store selector: quantizing
 * a raw `transform` read afterwards stabilizes the value but not the render.
 */
export declare function useViewportGeometry({ enabled, padding, }: UseViewportGeometryOptions): ViewportRect | null;
export {};
