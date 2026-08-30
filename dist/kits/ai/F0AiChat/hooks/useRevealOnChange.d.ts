type Hold<T> = number | ((prev: T, next: T) => number);
/**
 * Hide-then-reveal helper for layout changes that would otherwise "jump".
 *
 * When `value` changes, the content is hidden *before the new layout paints*
 * (via a layout effect) so the reflow is never seen, kept hidden for `hold` ms
 * (long enough for any window resize to settle), then revealed already in its
 * final position with a quick, soft opacity fade. No sliding, no layout
 * animation — just a clean cut-out and fade-in.
 *
 * Spread the returned `motionProps` onto a `motion` element that wraps the
 * content whose layout changes.
 */
export declare function useRevealOnChange<T>(value: T, hold: Hold<T>, revealSeconds?: number): {
    visible: boolean;
    motionProps: {
        animate: {
            opacity: number;
        };
        transition: {
            duration: number;
            ease: "easeInOut";
        };
    };
};
export {};
