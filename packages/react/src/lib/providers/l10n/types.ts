import { WeekStartsOn } from "@/experimental/OneCalendar/types"

export type L10nContextValue = {
  locale: string
  date?: {
    weekStartsOn: WeekStartsOn
  }
}
