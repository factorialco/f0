import { MeetingAttendee } from '../types';
export declare const MeetingAttendees: ({ attendees, relevantCount, maxAvatars, size, }: {
    attendees: MeetingAttendee[];
    /**
     * How many people the count refers to — present attendees while the meeting
     * runs, invited ones otherwise. May exceed `attendees.length` when the list
     * arrives truncated, in which case the extra people fold into the `+N` counter.
     */
    relevantCount: number;
    maxAvatars?: number;
    size?: "xs" | "sm";
}) => import("react").JSX.Element | null;
