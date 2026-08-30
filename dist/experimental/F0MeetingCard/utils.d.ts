import { Locale } from 'date-fns';
import { AttendeesDisplay, MeetingAttendee, MeetingState } from './types';
export declare const DEFAULT_JOIN_WINDOW_MINUTES = 10;
export declare const DEFAULT_MAX_AVATARS = 3;
export type MeetingDayKind = "today" | "yesterday" | "tomorrow" | "other";
/**
 * Which calendar day `date` falls on relative to `now`. Only the neighbouring
 * days get a word of their own; anything further reads better as a date.
 */
export declare const getDayKind: (date: Date, now: Date) => MeetingDayKind;
/** Whole minutes left until `startsAt`. Negative once the start time has passed. */
export declare const getMinutesUntilStart: (startsAt: Date, now: Date) => number;
/** Whole minutes elapsed since `startsAt`. Never negative. */
export declare const getMinutesSinceStart: (startsAt: Date, now: Date) => number;
/**
 * The meeting is joinable while it is running, and from `windowMinutes` before
 * the scheduled start. A scheduled meeting whose start time already passed stays
 * joinable — the attendee is late, not locked out.
 */
export declare const isWithinJoinWindow: ({ state, startsAt, now, windowMinutes, }: {
    state: MeetingState;
    startsAt: Date;
    now: Date;
    windowMinutes?: number;
}) => boolean;
/** The Join affordance only makes sense before and during the meeting. */
export declare const isJoinRelevant: (state: MeetingState) => boolean;
/**
 * Whether a countdown tag should be shown. Only while waiting inside the join
 * window — outside it the exact time in the date line is the useful information.
 */
export declare const shouldShowCountdown: ({ state, startsAt, now, windowMinutes, }: {
    state: MeetingState;
    startsAt: Date;
    now: Date;
    windowMinutes?: number;
}) => boolean;
/**
 * Whether any status tag is rendered for this state. Kept separate from the tag
 * component so the layout can tell an empty footer band from a populated one.
 *
 * Every state names itself except a scheduled meeting still far out, where the
 * exact time in the date line is the useful information and a tag would only
 * repeat "upcoming".
 */
export declare const hasStatusTag: ({ state, hasCountdown, }: {
    state: MeetingState;
    hasCountdown: boolean;
}) => boolean;
/** Length of the meeting in whole minutes, once it is known to have ended. */
export declare const getDurationMinutes: (startsAt: Date, endsAt: Date | undefined) => number | undefined;
export declare const resolveAttendeesDisplay: (display: AttendeesDisplay, state: MeetingState) => "avatars" | "count";
/**
 * The attendee total that matters for the current state: who is in the room
 * while the meeting runs, how many were invited otherwise.
 */
export declare const resolveRelevantCount: ({ state, attendees, invitedCount, presentCount, }: {
    state: MeetingState;
    attendees: MeetingAttendee[];
    invitedCount?: number;
    presentCount?: number;
}) => number;
export type NormalizedAttendee = {
    firstName: string;
    lastName: string;
    src?: string;
    tooltipDescription?: string;
};
/**
 * `F0AvatarList` speaks first/last name, but an external attendee may only come
 * with a display name or an email. Split what we have so the avatar still derives
 * sensible initials, and surface the email as the tooltip's secondary line.
 */
export declare const normalizeAttendees: (attendees: MeetingAttendee[]) => NormalizedAttendee[];
/**
 * The library has no plural resolver — translations expose `one`/`other` forms
 * and components pick between them. See the i18n conventions.
 */
export declare const pluralize: (forms: {
    one: string;
    other: string;
}, count: number) => string;
export declare const formatTime: (date: Date, locale: Locale) => string;
export declare const formatShortDate: (date: Date, locale: Locale) => string;
