import { F0Button } from "@/components/F0Button"
import { VideoRecorder } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { MeetingJoin } from "../types"

/**
 * `href` and `onClick` are mutually exclusive on F0Button, so the navigating and
 * the handling variants are rendered as two distinct buttons rather than one with
 * optional props.
 */
export const MeetingJoinButton = ({
  join,
  disabled,
}: {
  join: MeetingJoin
  disabled: boolean
}) => {
  const { meetingCard } = useI18n()
  const label = join.label ?? meetingCard.join

  if (join.href && !disabled) {
    return (
      <F0Button
        label={label}
        icon={VideoRecorder}
        variant="default"
        href={join.href}
      />
    )
  }

  return (
    <F0Button
      label={label}
      icon={VideoRecorder}
      variant="default"
      disabled={disabled}
      onClick={join.onJoin}
    />
  )
}
