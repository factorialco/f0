import { F0Box, F0Text } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { useMemo, useState } from "react"

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

import { WeekNavigator } from "../components/WeekNavigator"
import { useTimesheetSource } from "../hooks/useTimesheetSource"
import { timesheetColumns } from "../lib/timesheetColumns"
import { timesheets } from "../mocks/timesheets"

/** Monday anchoring the reference screen (week of 12 Jan 2026). */
const ANCHOR = new Date(2026, 0, 12)

const STR = {
  en: { weekOf: "Week of", employees: "employees", dateLocale: "en-US" },
  es: { weekOf: "Semana del", employees: "empleados", dateLocale: "es-ES" },
} as const

function weekLabel(offsetWeeks: number, locale: AppLocale): string {
  const t = STR[locale]
  const d = new Date(ANCHOR)
  d.setDate(d.getDate() + offsetWeeks * 7)
  const day = d.getDate()
  const month = d.toLocaleString(t.dateLocale, { month: "short" })
  return `${t.weekOf} ${day} ${month} ${d.getFullYear()}`
}

/** Manager review of the whole team's weekly timesheets — the "All timesheets" tab. */
export function AllTimesheetsView() {
  const [weekOffset, setWeekOffset] = useState(0)
  const locale = useLocale()
  const t = STR[locale]
  const source = useTimesheetSource(locale)
  const columns = useMemo(() => timesheetColumns(locale), [locale])
  const employeeCount = timesheets.length

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" alignItems="center" justifyContent="between">
        <F0Text content={`${employeeCount} ${t.employees}`} variant="label" />
        <WeekNavigator
          label={weekLabel(weekOffset, locale)}
          onPrev={() => setWeekOffset((o) => o - 1)}
          onNext={() => setWeekOffset((o) => o + 1)}
          onThisWeek={() => setWeekOffset(0)}
        />
      </F0Box>
      <OneDataCollection
        source={source}
        visualizations={[{ type: "table", options: { columns } }]}
      />
    </F0Box>
  )
}
