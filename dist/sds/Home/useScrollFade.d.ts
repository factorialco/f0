import { CSSProperties } from 'react';
/** How far an overflowing end is faded out, in px. */
export declare const SCROLL_FADE_PX = 24;
/**
 * Fades a scroll region's ends — but only the ends that have something hidden
 * past them.
 *
 * A static mask lies: it dims the top of the first card before you have scrolled
 * anywhere, and keeps dimming the bottom once you have reached the end, so the
 * fade reads as a visual treatment rather than as "there is more this way". This
 * watches the container and masks an end only while content is actually cut off
 * there, so a column that fits is not masked at all.
 */
export declare function useScrollFade(fade?: number): {
    ref: import('react').Dispatch<import('react').SetStateAction<HTMLElement | null>>;
    style: CSSProperties;
    element: HTMLElement | null;
};
