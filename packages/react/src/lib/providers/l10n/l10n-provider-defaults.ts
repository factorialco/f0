import { WeekStartDay } from "@/components/OneCalendar/types"

import type { L10nContextValue } from "./types"

export const defaults: L10nContextValue = {
  locale: "en",
  date: {
    weekStartsOn: WeekStartDay.Monday,
  },
}
