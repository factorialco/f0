import { type ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { formatSeparator } from "../utils/natural-time"

/** Centered "Yesterday 22:14"-style divider between time-separated message groups. */
export const DateTimeSeparator = ({ at }: { at: string }): ReactNode => {
  const i18n = useI18n()
  const label = formatSeparator(new Date(at), new Date(), {
    today: i18n.chat.today,
    yesterday: i18n.chat.yesterday,
  })

  return (
    <div className="flex justify-center py-0">
      <span className="text-sm font-normal text-f1-foreground-tertiary">
        {label}
      </span>
    </div>
  )
}
