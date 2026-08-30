/**
 * The recap of a finished meeting, rendered in full.
 *
 * It is shown whole rather than clamped with a toggle: a recap is only worth
 * having if it's read, and hiding it behind a control makes that a second
 * decision the reader has to take. The trade-off is that card heights vary with
 * the length of the recap — revisit if design asks for a fixed row height.
 */
export declare const MeetingSummary: ({ summary }: {
    summary: string;
}) => import("react").JSX.Element;
