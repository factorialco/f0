import { MutableRefObject } from 'react';
/** How long the width must hold steady before the transcript re-anchors. */
export declare const RESIZE_SETTLE_MS = 120;
/**
 * Watches the transcript viewport's WIDTH and reports when a resize starts and
 * settles.
 *
 * Nothing anchors scroll position across a width change: Virtuoso's layout
 * compensation only runs while `scrollDirection === "up"` (a resize is "down"
 * or "none"), and the browser's own fallback is off — the viewport, the measure
 * strip and Virtuoso's elements all set `overflow-anchor: none`. On top of that
 * Virtuoso re-measures ONLY the mounted rows, so everything above the overscan
 * keeps the previous width's heights and the offset tree stops describing the
 * reader's position. The caller uses this hook to freeze its derived state
 * while the width moves and to restore a captured anchor once it stops.
 *
 * Height-only changes are ignored on purpose: those are the composer growing
 * and the keyboard opening, which `followOutput` already owns.
 */
export declare function useTranscriptResizeAnchor({ onSettled, }: {
    /** Fired once, `RESIZE_SETTLE_MS` after the last width change. */
    onSettled: () => void;
}): {
    /** Attach to the scroller element (null detaches). */
    observeResize: (element: HTMLElement | null) => void;
    /** True from the first width change until the resize settles. */
    resizingRef: MutableRefObject<boolean>;
};
