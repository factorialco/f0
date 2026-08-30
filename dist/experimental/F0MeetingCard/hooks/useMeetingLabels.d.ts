import { MeetingState } from '../types';
/**
 * Every human-readable string the card derives from its dates and counts.
 *
 * The card owns this formatting on purpose: leaving it to consumers is how the
 * same meeting ends up reading differently in each product. Nothing here reads a
 * clock of its own — `now` is passed in.
 */
export declare const useMeetingLabels: ({ state, startsAt, endsAt, now, windowMinutes, invitedCount, presentCount, }: {
    state: MeetingState;
    startsAt: Date;
    endsAt?: Date;
    now: Date;
    windowMinutes?: number;
    invitedCount: number;
    presentCount?: number;
}) => {
    leadLabel: string;
    timeLabel: string;
    durationLabel: string | undefined;
    countdownLabel: string | undefined;
    attendeesLabel: string | undefined;
};
