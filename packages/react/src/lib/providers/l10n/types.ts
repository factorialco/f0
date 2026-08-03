import { WeekStartsOn } from "@/components/OneCalendar/types"

export type L10nContextValue = {
  locale: string
  date?: {
    weekStartsOn?: WeekStartsOn
    /**
     * App-wide default for deriving numeric day formats from the locale
     * instead of the fixed day-first fallback. Per-component and per-filter
     * `localizedDayFormat` flags override it.
     */
    localizedDayFormat?: boolean
  }
}
