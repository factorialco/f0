import { RefObject } from 'react';
/** Kept in step with the durations below. */
export declare const COLLAPSE_ANIMATION_MS = 220;
export type ColumnCollapseTransition = {
    groupId: string;
    /** Marker class the animating cells of this group carry. */
    cellClass: string;
    direction: "open" | "close";
};
/**
 * Drives the open/close of a header group's columns with the Web Animations
 * API, and reports each group as finished so the caller can drop the columns.
 *
 * Why not a CSS transition: closing works either way, but opening does not.
 * A transition needs a concrete value on both ends, and a reopening column is
 * heading for whatever width the table layout algorithm resolves — there is no
 * end value to interpolate towards, so it snaps. Measuring the natural width
 * first and animating to that pixel value is what makes the two directions
 * behave the same.
 *
 * The contents are faded on their own schedule rather than alongside the width:
 * out early when closing, in late when opening. Matching them to the width
 * leaves a sliver of clipped text riding the column, in both directions.
 */
export declare const useColumnCollapseAnimation: (containerRef: RefObject<HTMLElement | null>, transitions: ColumnCollapseTransition[], onGroupFinished: (groupId: string) => void, enabled?: boolean) => void;
