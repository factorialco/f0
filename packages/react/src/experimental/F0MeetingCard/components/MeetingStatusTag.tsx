import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { BaseTag } from "@/components/tags/internal/BaseTag"
import { Ai } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { MeetingState } from "../types"

/**
 * "Live" indicator for a running meeting. It deliberately avoids the `critical`
 * variant: red in F0 means destructive or failed, and a meeting in progress is
 * neither. The pulse is what carries the "happening right now" meaning, so it is
 * dropped when the viewer asked for reduced motion — the tag still reads
 * correctly from its label alone.
 */
const LiveTag = ({ text }: { text: string }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <BaseTag
      className="bg-f1-background-info text-f1-foreground-info"
      left={
        <div
          className={cn(
            "m-1 aspect-square w-2 rounded-full bg-f1-icon-info",
            !shouldReduceMotion && "animate-pulse"
          )}
          aria-hidden
        />
      }
      text={text}
    />
  )
}

export const MeetingStatusTag = ({
  state,
  countdownLabel,
}: {
  state: MeetingState
  /** Countdown copy shown while waiting inside the join window, e.g. "In 10 mins". */
  countdownLabel?: string
}) => {
  const { meetingCard } = useI18n()

  switch (state) {
    case "inProgress":
      return <LiveTag text={meetingCard.inProgress} />
    case "summarizing":
      // The recap is AI-generated, so the tag carries F0's AI mark instead of the
      // default status dot. `icons/ai/Summary` is closer in meaning but its text
      // lines blur at tag size; this one stays legible at 14px.
      return (
        <F0TagStatus
          text={meetingCard.summarizing}
          variant="neutral"
          icon={Ai}
        />
      )
    case "finished":
      // `positive` (green) so a completed meeting is distinguishable at a glance
      // from a cancelled one, which stays neutral — grey for both would make the
      // outcome depend on reading the label.
      return <F0TagStatus text={meetingCard.finished} variant="positive" />
    case "cancelled":
      return <F0TagStatus text={meetingCard.cancelled} variant="neutral" />
    case "scheduled":
      // `warning` rather than `neutral`: a meeting minutes away is something to
      // act on now, and the amber reads as that without implying anything failed.
      return countdownLabel ? (
        <F0TagStatus text={countdownLabel} variant="warning" />
      ) : null
    default:
      return null
  }
}
