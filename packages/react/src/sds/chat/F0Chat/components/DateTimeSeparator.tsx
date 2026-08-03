import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import { formatRelativeDay, formatSeparator } from "../utils/natural-time"

/**
 * Centered date divider between per-day message groups, ALWAYS rendered as the
 * bordered pill — the transcript rows and the sticky header share the exact
 * same look. Shows just the day ("Today" / "Yesterday" / "12 Jun") inline; the
 * sticky header passes `withTime` to append the clock ("Today 22:14") and
 * `loading` to show a spinner inside the pill while older messages load. The
 * transcript rows pass `padded` for extra breathing room around the pill.
 */
export const DateTimeSeparator = ({
  at,
  withTime = false,
  loading = false,
  padded = false,
}: {
  at: string
  withTime?: boolean
  /** Shows a spinner inside the pill, before the label. */
  loading?: boolean
  /** Extra vertical padding, for the in-transcript day rows. */
  padded?: boolean
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
    <div className={cn("flex justify-center", padded ? "py-6" : "py-0")}>
      <span className="flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2.5 py-0.5 backdrop-blur">
        {loading && <Spinner size="small" className="h-3.5 w-3.5" />}
        <span className="text-sm font-normal text-f1-foreground-secondary">
          {label}
        </span>
      </span>
    </div>
  )
}
