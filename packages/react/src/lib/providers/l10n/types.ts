import { WeekStartsOn } from "@/components/OneCalendar/types"

/** How times are displayed and edited: 12-hour (AM/PM) or 24-hour. */
export type HourCycle = "12h" | "24h"

export type L10nContextValue = {
  locale: string
  date?: {
    weekStartsOn: WeekStartsOn
  }
  time?: {
    /**
     * Hour cycle used by time fields. Defaults to "24h".
     * When set, the F0 time field renders/parses in this format so apps can
     * honor a user's 12h/24h preference instead of the browser locale.
     */
    hourCycle: HourCycle
  }
}
