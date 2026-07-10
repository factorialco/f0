import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { formatRelativeDay, formatSeparator } from "../utils/natural-time"

/**
 * Centered date divider between per-day message groups. Shows just the day
 * ("Today" / "Yesterday" / "12 Jun") inline; the sticky header passes `withTime`
 * to append the clock ("Today 22:14") so the hour rides along as you scroll.
 */
export const DateTimeSeparator = ({
  at,
  withTime = false,
}: {
  at: string
  withTime?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const labels = {
    today: i18n.date.groups.today,
    yesterday: i18n.date.groups.yesterday,
  }
  const date = new Date(at)
  const now = new Date()
  const label = withTime
    ? formatSeparator(date, now, labels)
    : formatRelativeDay(date, now, labels)

  return (
    <div className="flex justify-center py-0">
      <span className="text-sm font-normal text-f1-foreground-secondary">
        {label}
      </span>
    </div>
  )
}
