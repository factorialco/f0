import { RefCallback } from 'react';
/**
 * Holds a subtree unmounted until its element first intersects the viewport.
 *
 * Used by exactly one thing: the location map. Everything else in the
 * transcript now mounts with its row, because deferring it only ever bought a
 * placeholder. Maps are different for a reason that isn't a performance
 * hypothesis — each one takes a live WebGL context, and browsers cap how many
 * can exist at once (Chrome drops the oldest past ~16). A transcript with
 * twenty shared locations would start losing maps.
 *
 * One-shot: once visible, it stays mounted for the life of the element. No
 * queue, no idle scheduling, no settle delay — the map should be there by the
 * time the reader looks at it.
 */
export declare const useMountOnVisible: () => {
    ref: RefCallback<HTMLElement>;
    shouldMount: boolean;
};
