import { useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type { MeetingState } from "../types"
import {
  formatShortDate,
  formatTime,
  getDayKind,
  getDurationMinutes,
  getMinutesSinceStart,
  getMinutesUntilStart,
  pluralize,
  resolveLocale,
  shouldShowCountdown,
} from "../utils"

/**
 * Every human-readable string the card derives from its dates and counts.
 *
 * The card owns this formatting on purpose: leaving it to consumers is how the
 * same meeting ends up reading differently in each product. Nothing here reads a
 * clock of its own — `now` is passed in.
 */
export const useMeetingLabels = ({
  state,
  startsAt,
  endsAt,
  now,
  windowMinutes,
  invitedCount,
  presentCount,
}: {
  state: MeetingState
  startsAt: Date
  endsAt?: Date
  now: Date
  windowMinutes?: number
  invitedCount: number
  presentCount?: number
}) => {
  const { meetingCard } = useI18n()

  return useMemo(() => {
    const locale = resolveLocale()

    const dayLabels: Record<string, string | undefined> = {
      today: meetingCard.today,
      yesterday: meetingCard.yesterday,
      tomorrow: meetingCard.tomorrow,
    }

    const dayKind = getDayKind(startsAt, now)
    const dayLabel = dayLabels[dayKind] ?? formatShortDate(startsAt, locale)

    const elapsedMinutes = getMinutesSinceStart(startsAt, now)
    // A meeting that just started reads better as "Starting now" than as
    // "0 mins ago", which looks like a rounding bug.
    const leadLabel =
      state === "inProgress"
        ? elapsedMinutes === 0
          ? meetingCard.startingNow
          : pluralize(meetingCard.startedAgo, elapsedMinutes)
        : dayLabel

    const remainingMinutes = getMinutesUntilStart(startsAt, now)
    const countdownLabel = shouldShowCountdown({
      state,
      startsAt,
      now,
      windowMinutes,
    })
      ? remainingMinutes <= 0
        ? meetingCard.startingNow
        : pluralize(meetingCard.startsIn, remainingMinutes)
      : undefined

    const attendeesLabel =
      state === "inProgress" && presentCount !== undefined
        ? pluralize(meetingCard.inside, presentCount)
        : invitedCount > 0
          ? pluralize(meetingCard.invited, invitedCount)
          : undefined

    // Only meaningful once the meeting is over — a duration on an upcoming
    // meeting would read as its length, which nobody has committed to yet.
    const durationMinutes =
      state === "finished" || state === "summarizing"
        ? getDurationMinutes(startsAt, endsAt)
        : undefined

    return {
      leadLabel,
      timeLabel: formatTime(startsAt, locale),
      durationLabel:
        durationMinutes !== undefined
          ? pluralize(meetingCard.duration, durationMinutes)
          : undefined,
      countdownLabel,
      attendeesLabel,
    }
  }, [
    meetingCard,
    state,
    startsAt,
    endsAt,
    now,
    windowMinutes,
    invitedCount,
    presentCount,
  ])
}
