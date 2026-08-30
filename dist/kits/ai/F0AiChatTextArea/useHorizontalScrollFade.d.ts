import { CSSProperties } from 'react';
/** How far an overflowing end is faded out, in px. */
export declare const SCROLL_FADE_PX = 24;
/**
 * Fades a horizontal scroller's ends — but only the ends that have something
 * hidden past them.
 *
 * The fade IS the scroll affordance: the row has no visible scrollbar, so a chip
 * cut off by a soft edge is the only thing telling the reader there is more
 * sideways. That only works if the mask is honest — a static gradient dims the
 * first chip before you have scrolled anywhere and keeps dimming the last one
 * once you have reached the end, at which point it reads as decoration rather
 * than as "there is more this way". So each end is masked only while content is
 * actually cut off there, and a row that fits is not masked at all.
 *
 * (The vertical sibling of this lives in `sds/Home/useScrollFade` — same idea,
 * other axis. They are kept apart rather than shared because each is a few lines
 * of measurement and neither domain should reach into the other's internals.)
 */
export declare function useHorizontalScrollFade(fade?: number): {
    ref: import('react').Dispatch<import('react').SetStateAction<HTMLElement | null>>;
    style: CSSProperties;
};
