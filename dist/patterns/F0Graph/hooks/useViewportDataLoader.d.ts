interface UseViewportDataLoaderOptions {
    /** Ids of the nodes currently materialized on screen. */
    nodeIds: string[];
    /**
     * Called (debounced) with the batch of ids that have entered the viewport
     * and not been requested before. Undefined disables the loader entirely.
     */
    loadVisibleNodeData?: (ids: string[]) => void;
    /** Debounce before flushing a batch. Defaults to {@link DEFAULT_VISIBLE_DATA_DEBOUNCE_MS}. */
    debounceMs?: number;
    /**
     * Gate accumulation/flushing. Defaults to `true`. Pass `false` while the ids
     * don't yet represent the on-screen set — e.g. with node windowing, the very
     * first render (before the viewport settles) exposes *every* node, and
     * flushing then would request the whole tree instead of just what's visible.
     * Ids accumulate only from the render where this becomes `true`.
     */
    enabled?: boolean;
}
/**
 * Viewport-driven data loading. Watches the on-screen node ids and, once the
 * camera settles for `debounceMs`, invokes `loadVisibleNodeData` with the ids
 * that newly entered the viewport. Each id is requested at most once for the
 * lifetime of the graph, and ids seen mid-pan accumulate into a single batch —
 * so a fast pan across the graph produces one settled fetch, not one per frame.
 *
 * Fly-over nodes are NOT hydrated: at flush time the batch is filtered to the
 * ids that are STILL on screen, so nodes the camera merely swept across during
 * an automatic navigation (or a fast user pan) — entering and leaving within
 * the debounce window — are dropped. Because the debounce is trailing, the
 * single flush lands after the camera settles, when the on-screen set is the
 * final resting viewport. Dropped ids are NOT marked as requested, so they stay
 * eligible to hydrate if the user later navigates to them.
 */
export declare function useViewportDataLoader({ nodeIds, loadVisibleNodeData, debounceMs, enabled, }: UseViewportDataLoaderOptions): void;
export {};
