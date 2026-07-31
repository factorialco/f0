import { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Card } from "@/ui/Card"
import { Skeleton } from "@/ui/skeleton"
import { Text } from "@/ui/Text"

import { MeetingAttendees } from "./components/MeetingAttendees"
import { MeetingJoinButton } from "./components/MeetingJoinButton"
import { MeetingStatusTag } from "./components/MeetingStatusTag"
import { MeetingSummary } from "./components/MeetingSummary"
import { useMeetingLabels } from "./hooks/useMeetingLabels"
import type { F0MeetingCardProps } from "./types"
import {
  DEFAULT_MAX_AVATARS,
  hasStatusTag,
  isJoinRelevant,
  isWithinJoinWindow,
  resolveAttendeesDisplay,
  resolveRelevantCount,
} from "./utils"

const F0MeetingCardBase = forwardRef<HTMLDivElement, F0MeetingCardProps>(
  function F0MeetingCard(
    {
      state,
      title,
      startsAt,
      endsAt,
      now,
      attendees = [],
      invitedCount,
      presentCount,
      attendeesDisplay = "auto",
      maxAvatars = DEFAULT_MAX_AVATARS,
      summary,
      join,
      secondaryActions,
      compact = false,
    },
    ref
  ) {
    const { meetingCard } = useI18n()
    // Resolved once per render rather than on a timer: the card is a pure
    // function of its props, and the consumer already re-renders as the
    // meeting's real state changes.
    const reference = now ?? new Date()

    const relevantCount = resolveRelevantCount({
      state,
      attendees,
      invitedCount,
      presentCount,
    })

    const {
      leadLabel,
      timeLabel,
      durationLabel,
      countdownLabel,
      attendeesLabel,
    } = useMeetingLabels({
      state,
      startsAt,
      endsAt,
      now: reference,
      windowMinutes: join?.windowMinutes,
      invitedCount: relevantCount,
      presentCount,
    })

    const display = resolveAttendeesDisplay(attendeesDisplay, state)
    const showsAvatars = display === "avatars" && attendees.length > 0
    const countLabel = display === "count" ? attendeesLabel : undefined

    // A running meeting with no title of its own says what it is instead.
    const headline =
      title ??
      (state === "inProgress" ? meetingCard.inProgressTitle : undefined)
    const headlineCarriesState = !title && state === "inProgress"

    const metaSegments = compact
      ? [
          // No footer band in compact, so the countdown has to ride along the
          // headline as text. The clock time is dropped while the meeting runs —
          // "started 4 mins ago" is the useful fact then, not when it began.
          countdownLabel ?? leadLabel,
          state === "inProgress" ? undefined : timeLabel,
          countLabel,
        ].filter(Boolean)
      : [leadLabel, timeLabel, durationLabel, countLabel].filter(Boolean)

    const showsJoin = isJoinRelevant(state) && !!join
    const joinDisabled =
      join?.disabled ??
      !isWithinJoinWindow({
        state,
        startsAt,
        now: reference,
        windowMinutes: join?.windowMinutes,
      })

    const showsStatusTag =
      hasStatusTag({ state, hasCountdown: !!countdownLabel }) &&
      // In compact the state travels with the headline: the countdown became
      // text above, and an in-progress row without a title already says so.
      !(compact && (state === "scheduled" || headlineCarriesState))
    const hasActions = showsJoin || !!secondaryActions?.length

    const titleBlock = (
      <>
        {headline && (
          <Text
            variant="body"
            content={headline}
            className={cn(
              "break-words font-medium",
              // Struck through but at full contrast: the strike says it's off, and
              // dimming on top would make the title harder to read for no
              // additional meaning — the "Cancelled" tag already carries it.
              state === "cancelled" && "line-through"
            )}
          />
        )}
        {metaSegments.length > 0 && (
          <Text variant="description" content={metaSegments.join(" · ")} />
        )}
      </>
    )

    const attendeesBlock = showsAvatars && (
      <MeetingAttendees
        attendees={attendees}
        relevantCount={relevantCount}
        maxAvatars={maxAvatars}
        size={compact ? "xs" : "sm"}
      />
    )

    const summaryBlock = state === "finished" && summary && (
      <MeetingSummary summary={summary} />
    )

    const statusTagBlock = showsStatusTag && (
      <MeetingStatusTag state={state} countdownLabel={countdownLabel} />
    )

    const actionsBlock = hasActions && (
      <>
        {secondaryActions?.map((action) => (
          <F0Button
            key={action.label}
            label={action.label}
            icon={action.icon}
            variant="outline"
            onClick={action.onClick}
          />
        ))}
        {showsJoin && join && (
          <MeetingJoinButton join={join} disabled={joinDisabled} />
        )}
      </>
    )

    return (
      <Card
        ref={ref}
        className={cn(
          // Container geometry and border deliberately match F0AudioPlayerCard
          // (rounded-2xl / p-3 / border-f1-border-secondary) rather than the
          // heavier ui/Card defaults, so a meeting and its recording read as the
          // same family when they sit next to each other.
          "rounded-2xl border-f1-border-secondary bg-f1-background p-3 shadow-none",
          compact ? "gap-1.5" : "gap-2.5"
        )}
        data-testid="meeting-card"
      >
        {compact ? (
          <div className="flex flex-row items-center gap-3">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex flex-row flex-wrap items-baseline gap-1.5">
                {titleBlock}
                {statusTagBlock}
              </div>
              {attendeesBlock}
              {summaryBlock}
            </div>
            {hasActions && (
              <div className="flex shrink-0 flex-row items-center gap-2">
                {actionsBlock}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex min-w-0 flex-col gap-0">{titleBlock}</div>

            {attendeesBlock}
            {summaryBlock}

            {/* Stretched over the card padding so the divider reaches both edges. */}
            {(hasActions || showsStatusTag) && (
              <div
                className={cn(
                  "flex flex-row items-center gap-2",
                  hasActions &&
                    "-mx-3 -mb-3 mt-0.5 border-0 border-t border-solid border-t-f1-border-secondary px-3 pb-3 pt-3"
                )}
              >
                <div className="flex flex-1 flex-row items-center gap-2">
                  {statusTagBlock}
                </div>
                {hasActions && (
                  <div className="flex flex-row items-center gap-2">
                    {actionsBlock}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </Card>
    )
  }
)

F0MeetingCardBase.displayName = "F0MeetingCard"

const F0MeetingCardSkeleton = ({ compact = false }: { compact?: boolean }) => (
  <Card
    className={cn(
      "rounded-2xl border-f1-border-secondary bg-f1-background p-3 shadow-none",
      compact ? "gap-1.5" : "gap-2.5"
    )}
    aria-busy="true"
    aria-live="polite"
  >
    {compact ? (
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-4 w-40 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    ) : (
      <>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-40 rounded-md" />
          <Skeleton className="h-3 w-28 rounded-md" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
      </>
    )}
  </Card>
)

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0MeetingCard = withDataTestId(
  experimentalComponent(
    "F0MeetingCard",
    withSkeleton(F0MeetingCardBase, F0MeetingCardSkeleton)
  )
)
