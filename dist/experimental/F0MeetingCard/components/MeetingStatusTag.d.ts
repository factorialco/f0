import { MeetingState } from '../types';
export declare const MeetingStatusTag: ({ state, countdownLabel, }: {
    state: MeetingState;
    /** Countdown copy shown while waiting inside the join window, e.g. "In 10 mins". */
    countdownLabel?: string;
}) => import("react").JSX.Element | null;
