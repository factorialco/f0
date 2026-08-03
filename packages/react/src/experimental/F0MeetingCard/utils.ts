import { differenceInMinutes, format, isSameDay, type Locale } from "date-fns"

import { getLocale } from "@/components/OneCalendar/utils"

import type { AttendeesDisplay, MeetingAttendee, MeetingState } from "./types"

export const DEFAULT_JOIN_WINDOW_MINUTES = 10

export const DEFAULT_MAX_AVATARS = 3

export type MeetingDayKind = "today" | "yesterday" | "tomorrow" | "other"

/** Resolve the browser's `date-fns` locale, falling back to the library default. */
export const resolveLocale = (): Locale | undefined => {
  if (typeof navigator === "undefined") return undefined
  return getLocale(navigator.language)
}

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * Which calendar day `date` falls on relative to `now`. Only the neighbouring
 * days get a word of their own; anything further reads better as a date.
 */
export const getDayKind = (date: Date, now: Date): MeetingDayKind => {
  if (isSameDay(date, now)) return "today"
  if (isSameDay(date, addDays(now, -1))) return "yesterday"
  if (isSameDay(date, addDays(now, 1))) return "tomorrow"
  return "other"
}

/** Whole minutes left until `startsAt`. Negative once the start time has passed. */
export const getMinutesUntilStart = (startsAt: Date, now: Date): number =>
  differenceInMinutes(startsAt, now)

/** Whole minutes elapsed since `startsAt`. Never negative. */
export const getMinutesSinceStart = (startsAt: Date, now: Date): number =>
  Math.max(0, differenceInMinutes(now, startsAt))

/**
 * The meeting is joinable while it is running, and from `windowMinutes` before
 * the scheduled start. A scheduled meeting whose start time already passed stays
 * joinable — the attendee is late, not locked out.
 */
export const isWithinJoinWindow = ({
  state,
  startsAt,
  now,
  windowMinutes = DEFAULT_JOIN_WINDOW_MINUTES,
}: {
  state: MeetingState
  startsAt: Date
  now: Date
  windowMinutes?: number
}): boolean => {
  if (state === "inProgress") return true
  if (state !== "scheduled") return false
  return getMinutesUntilStart(startsAt, now) <= windowMinutes
}

/** The Join affordance only makes sense before and during the meeting. */
export const isJoinRelevant = (state: MeetingState): boolean =>
  state === "scheduled" || state === "inProgress"

/**
 * Whether a countdown tag should be shown. Only while waiting inside the join
 * window — outside it the exact time in the date line is the useful information.
 */
export const shouldShowCountdown = ({
  state,
  startsAt,
  now,
  windowMinutes = DEFAULT_JOIN_WINDOW_MINUTES,
}: {
  state: MeetingState
  startsAt: Date
  now: Date
  windowMinutes?: number
}): boolean => {
  if (state !== "scheduled") return false
  const minutes = getMinutesUntilStart(startsAt, now)
  return minutes <= windowMinutes
}

/**
 * Whether any status tag is rendered for this state. Kept separate from the tag
 * component so the layout can tell an empty footer band from a populated one.
 *
 * Every state names itself except a scheduled meeting still far out, where the
 * exact time in the date line is the useful information and a tag would only
 * repeat "upcoming".
 */
export const hasStatusTag = ({
  state,
  hasCountdown,
}: {
  state: MeetingState
  hasCountdown: boolean
}): boolean => {
  if (state === "scheduled") return hasCountdown
  return true
}

/** Length of the meeting in whole minutes, once it is known to have ended. */
export const getDurationMinutes = (
  startsAt: Date,
  endsAt: Date | undefined
): number | undefined => {
  if (!endsAt) return undefined
  const minutes = differenceInMinutes(endsAt, startsAt)
  return minutes > 0 ? minutes : undefined
}

export const resolveAttendeesDisplay = (
  display: AttendeesDisplay,
  state: MeetingState
): "avatars" | "count" => {
  if (display !== "auto") return display
  return state === "inProgress" ? "avatars" : "count"
}

/**
 * The attendee total that matters for the current state: who is in the room
 * while the meeting runs, how many were invited otherwise.
 */
export const resolveRelevantCount = ({
  state,
  attendees,
  invitedCount,
  presentCount,
}: {
  state: MeetingState
  attendees: MeetingAttendee[]
  invitedCount?: number
  presentCount?: number
}): number => {
  if (state === "inProgress" && presentCount !== undefined) return presentCount
  return invitedCount ?? attendees.length
}

export type NormalizedAttendee = {
  firstName: string
  lastName: string
  src?: string
  tooltipDescription?: string
}

/**
 * `F0AvatarList` speaks first/last name, but an external attendee may only come
 * with a display name or an email. Split what we have so the avatar still derives
 * sensible initials, and surface the email as the tooltip's secondary line.
 */
export const normalizeAttendees = (
  attendees: MeetingAttendee[]
): NormalizedAttendee[] =>
  attendees.map((attendee) => {
    if (attendee.type === "internal") {
      return {
        firstName: attendee.firstName,
        lastName: attendee.lastName,
        src: attendee.src,
        tooltipDescription: attendee.email,
      }
    }

    const label = attendee.name?.trim() || attendee.email?.split("@")[0] || ""
    const [firstName = "", ...rest] = label.split(/\s+/)

    return {
      firstName,
      lastName: rest.join(" "),
      tooltipDescription: attendee.email,
    }
  })

/**
 * The library has no plural resolver — translations expose `one`/`other` forms
 * and components pick between them. See the i18n conventions.
 */
export const pluralize = (
  forms: { one: string; other: string },
  count: number
): string =>
  (count === 1 ? forms.one : forms.other).replace("{{count}}", String(count))

export const formatTime = (date: Date, locale?: Locale): string =>
  format(date, "p", { locale })

export const formatShortDate = (date: Date, locale?: Locale): string =>
  format(date, "d MMM", { locale })
