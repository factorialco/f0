import { ReactNode } from 'react';
/**
 * Centered date divider between per-day message groups, ALWAYS rendered as the
 * bordered pill — the transcript rows and the sticky header share the exact
 * same look. Shows just the day ("Today" / "Yesterday" / "12 Jun") inline; the
 * sticky header passes `withTime` to append the clock ("Today 22:14") and
 * `loading` to show a spinner inside the pill while older messages load. The
 * transcript rows pass `padded` for extra breathing room around the pill.
 */
export declare const DateTimeSeparator: ({ at, withTime, loading, padded, }: {
    at: string;
    withTime?: boolean;
    /** Shows a spinner inside the pill, before the label. */
    loading?: boolean;
    /** Extra vertical padding, for the in-transcript day rows. */
    padded?: boolean;
}) => ReactNode;
