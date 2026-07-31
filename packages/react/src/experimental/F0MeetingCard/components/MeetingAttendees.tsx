import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { useI18n } from "@/lib/providers/i18n"

import { DEFAULT_MAX_AVATARS, normalizeAttendees } from "../utils"
import type { MeetingAttendee } from "../types"

export const MeetingAttendees = ({
  attendees,
  relevantCount,
  maxAvatars = DEFAULT_MAX_AVATARS,
  size = "sm",
}: {
  attendees: MeetingAttendee[]
  /**
   * How many people the count refers to — present attendees while the meeting
   * runs, invited ones otherwise. May exceed `attendees.length` when the list
   * arrives truncated, in which case the extra people fold into the `+N` counter.
   */
  relevantCount: number
  maxAvatars?: number
  size?: "xs" | "sm"
}) => {
  const { meetingCard } = useI18n()

  if (attendees.length === 0) return null

  // Only force the counter when people are genuinely missing from the list —
  // F0AvatarList shows a "+0" badge for any defined `remainingCount`.
  const notListed = Math.max(0, relevantCount - attendees.length)

  return (
    <div role="group" aria-label={meetingCard.attendees}>
      <F0AvatarList
        type="person"
        avatars={normalizeAttendees(attendees)}
        size={size}
        max={maxAvatars}
        remainingCount={notListed > 0 ? notListed : undefined}
      />
    </div>
  )
}
