import { WeekStartsOn } from "@/components/OneCalendar/types"

export type L10nContextValue = {
  locale: string
  date?: {
    weekStartsOn: WeekStartsOn
  }
}
