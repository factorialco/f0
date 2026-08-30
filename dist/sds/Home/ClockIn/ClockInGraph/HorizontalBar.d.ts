/** One stretch of the day, ready to draw: its share, its colour, what it was. */
export type ClockInSegment = {
    value: number;
    color: string;
    /**
     * When this stretch ran. Present on every segment cut from a clock-in entry,
     * absent on the neutral remainder — which is the rest of the day, not a stretch
     * of it, and so has nothing to say on hover.
     */
    from?: Date;
    to?: Date;
    /**
     * The entry's own `label`, when it carried one — which break this was, which
     * task. Appended to the time range rather than replacing it.
     */
    label?: string;
};
/**
 * A segment's hover text: WHEN it ran and HOW LONG it lasted, then whatever the
 * entry added after that.
 *
 * The range and its duration are the minimum worth saying about a stretch of the
 * day and they need nothing from the consumer, so every real segment gets a
 * tooltip — `label` only adds to it.
 */
export declare const segmentTooltip: (segment: ClockInSegment) => string | undefined;
/**
 * The day as a thin horizontal rail — `ClockInGraph`'s `horizontal-bar`
 * geometry.
 *
 * It draws the SAME segments the ring does: `ClockInGraph` normalizes the day
 * once and hands the result to whichever geometry is asked for, so the two can't
 * disagree about the fill. Each segment takes its share of the WIDTH instead of
 * the sweep, and the 2px gap between them is the ring's `paddingAngle` in the
 * units a rail has.
 *
 * It draws NO text, unlike the ring: a 6px line has no hole to put the running
 * total in, so in this geometry the numbers belong to the layout around it (see
 * `ClockInControls`' own `horizontal-bar` variant).
 *
 * Every stretch of the day is HOVERABLE and says when it ran — the only place a
 * past stretch is accounted for once you've moved on from it — plus whatever its
 * entry labelled it. Those segments are in the accessibility tree as labelled
 * images; the rail as a whole is `aria-hidden` only when nothing in it has
 * anything to say (an empty day), since the totals it encodes are already text in
 * the rows around it.
 */
export declare function HorizontalBar({ segments }: {
    segments: ClockInSegment[];
}): import("react").JSX.Element;
