export type ClockInStatus = "clocked-in" | "break" | "clocked-out";
/**
 * The geometry the day is drawn in. Same segments, same colours, same
 * `normalizeData` either way — only the shape differs.
 */
export type ClockInGraphVariant = "ring" | "horizontal-bar";
export interface ClockInGraphProps {
    trackedMinutes?: number;
    data?: {
        from: Date;
        to: Date;
        variant: ClockInStatus;
        /**
         * EXTRA context for this stretch of the day, beyond its state — which break,
         * which task.
         *
         * The `horizontal-bar` geometry already tells you when a stretch ran and how
         * long it lasted when you hover it; this is appended after a `•`, so pass only
         * what that doesn't already say. The ring has nowhere to put either and
         * ignores them.
         */
        label?: string;
    }[];
    remainingMinutes?: number;
    /**
     * - `ring` — the 160px dial, with the running total and the day's two ends
     *   inside it.
     * - `horizontal-bar` — the same day as a full-width 6px rail, and nothing
     *   else: a line that thin has nowhere to put the numbers, so in this variant
     *   the layout around it carries them (see `ClockInControls`).
     */
    variant?: ClockInGraphVariant;
}
export declare const CLOCK_IN_COLORS: {
    "clocked-in": string;
    break: string;
    empty: string;
    "clocked-out": string;
    overtime: string;
};
export declare function ClockInGraph({ data, trackedMinutes, remainingMinutes, variant, }: ClockInGraphProps): import("react").JSX.Element;
