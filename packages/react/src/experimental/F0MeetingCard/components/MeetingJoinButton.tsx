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
  compact = false,
}: {
  join: MeetingJoin
  disabled: boolean
  /**
   * Drops the button to `outline` emphasis. A compact card is embedded inside
   * denser surroundings, where a solid primary would shout over its host.
   */
  compact?: boolean
}) => {
  const { meetingCard } = useI18n()
  const label = join.label ?? meetingCard.join
  const variant = compact ? "outline" : "default"

  if (join.href && !disabled) {
    return (
      <F0Button
        label={label}
        icon={VideoRecorder}
        variant={variant}
        size="sm"
        href={join.href}
      />
    )
  }

  return (
    <F0Button
      label={label}
      icon={VideoRecorder}
      variant={variant}
      size="sm"
      disabled={disabled}
      onClick={join.onJoin}
    />
  )
}
