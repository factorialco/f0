import { ReactNode } from 'react';
/**
 * Clock beside an own bubble while its message uploads (`status: "sending"`).
 * Revealed only after {@link SENDING_CLOCK_DELAY_MS}, so with a healthy
 * connection it never appears. A timer (not a CSS animation-delay) so the
 * reveal is testable with fake timers and the `aria-hidden` state stays honest.
 * It's an action-less F0Button so `hideLabel` surfaces the send time as its
 * tooltip; mounted only once visible so it's never an invisible focus target.
 */
export declare const SendingClock: ({ sentAt }: {
    sentAt: string;
}) => ReactNode;
