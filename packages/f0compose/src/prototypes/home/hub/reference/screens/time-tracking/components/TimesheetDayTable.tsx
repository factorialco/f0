import { F0Box, F0Button, F0TagRaw, F0Text } from "@factorialco/f0-react"
import {
  ChevronDown,
  Clock,
  Coffee,
  Ellipsis,
} from "@factorialco/f0-react/icons/app"

import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"

import type { DayEntry } from "../mocks/myTimesheet"

import { formatDuration, formatHoursCompact } from "../lib/formatDuration"

const STR = {
  en: {
    headers: [
      "Day",
      "Worked hours / Planned hours",
      "Balance",
      "Breaks",
      "Extra hours",
      "Absences",
    ],
    workedHours: "Worked hours",
    breaks: "Breaks",
    dayActions: "Day actions",
    expandDay: "Expand day",
  },
  es: {
    headers: [
      "Día",
      "Horas trabajadas / Horas previstas",
      "Balance",
      "Pausas",
      "Horas extra",
      "Ausencias",
    ],
    workedHours: "Horas trabajadas",
    breaks: "Pausas",
    dayActions: "Acciones del día",
    expandDay: "Expandir día",
  },
} as const

/**
 * Weekly day-by-day breakdown for the My timesheet tab. Built as a 7-column
 * grid (six data columns + a trailing actions column) so the today row can be
 * highlighted and weekend rows muted — affordances a generic data table can't
 * express. Values are read-only in the prototype.
 */
export function TimesheetDayTable({ days }: { days: DayEntry[] }) {
  const locale = useLocale()
  const t = STR[locale]
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      border="default"
      borderColor="secondary"
      borderRadius="lg"
    >
      <F0Box
        display="grid"
        columns="7"
        gap="md"
        paddingX="md"
        paddingY="sm"
        alignItems="center"
      >
        {t.headers.map((h) => (
          <F0Text key={h} content={h} variant="small" />
        ))}
        <F0Box />
      </F0Box>

      {days.map((day) => (
        <F0Box
          key={day.date}
          display="grid"
          columns="7"
          gap="md"
          paddingX="md"
          paddingY="sm"
          alignItems="center"
          background={
            day.isToday ? "warning" : day.isWeekend ? "secondary" : undefined
          }
        >
          <F0Box display="flex" flexDirection="column">
            <F0Text content={day.date} variant="label" />
            <F0Text content={day.weekday} variant="small" />
          </F0Box>

          <F0Box display="flex" alignItems="center" gap="xs">
            <F0TagRaw onlyIcon icon={Clock} text={t.workedHours} />
            <F0Text
              content={`${formatDuration(day.worked)} / ${formatDuration(day.planned)}`}
              variant="body"
            />
          </F0Box>

          <F0Text
            content={
              day.balance != null ? formatHoursCompact(day.balance) : "—"
            }
            variant="body"
          />

          <F0Box display="flex" alignItems="center" gap="xs">
            <F0TagRaw onlyIcon icon={Coffee} text={t.breaks} />
            <F0Text content={formatDuration(day.breaks)} variant="body" />
          </F0Box>

          <F0Text content={formatDuration(day.extra)} variant="body" />

          <F0Text content={day.absence ?? "—"} variant="body" />

          <F0Box
            display="flex"
            alignItems="center"
            justifyContent="end"
            gap="xs"
          >
            <F0Button
              label={t.dayActions}
              icon={Ellipsis}
              hideLabel
              variant="ghost"
              onClick={() => {}}
            />
            <F0Button
              label={t.expandDay}
              icon={ChevronDown}
              hideLabel
              variant="ghost"
              onClick={() => {}}
            />
          </F0Box>
        </F0Box>
      ))}
    </F0Box>
  )
}
