import { F0Box, F0Button, F0Text } from "@factorialco/f0-react"
import {
  ChevronLeft,
  ChevronRight,
  Plus,
} from "@factorialco/f0-react/icons/app"

import { MONTH_NAMES } from "../lib/calendar"
import {
  blockedByMonth,
  calendarYear,
  takenByMonth,
  today,
} from "../mocks/timeOff"
import { MonthCalendar } from "./MonthCalendar"

function LegendItem({
  background,
  label,
}: {
  background: "info" | "secondary"
  label: string
}) {
  return (
    <F0Box
      display="flex"
      alignItems="center"
      gap="xs"
      background="secondary"
      borderRadius="full"
      paddingX="sm"
      paddingY="xs"
    >
      <F0Box background={background} borderRadius="full" width="2" height="2" />
      <F0Text content={label} variant="small" />
    </F0Box>
  )
}

/** Year-at-a-glance: a year navigator, the 12 month grids, and the legend. */
export function YearCalendar() {
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box display="flex" alignItems="center" justifyContent="between">
        <F0Box display="flex" alignItems="center" gap="xs">
          <F0Button
            label="Previous year"
            icon={ChevronLeft}
            hideLabel
            variant="ghost"
            onClick={() => {}}
          />
          <F0Text content={String(calendarYear)} variant="label" />
          <F0Button
            label="Next year"
            icon={ChevronRight}
            hideLabel
            variant="ghost"
            onClick={() => {}}
          />
        </F0Box>
        <F0Button
          label="Add time off"
          icon={Plus}
          variant="outline"
          onClick={() => {}}
        />
      </F0Box>

      <F0Box
        display="grid"
        columns="2"
        md={{ columns: "3" }}
        lg={{ columns: "4" }}
        gap="lg"
      >
        {MONTH_NAMES.map((name, month) => (
          <MonthCalendar
            key={name}
            year={calendarYear}
            month={month}
            name={name}
            taken={takenByMonth[month] ?? []}
            blocked={blockedByMonth[month] ?? []}
            today={month === today.month ? today.day : undefined}
          />
        ))}
      </F0Box>

      <F0Box display="flex" alignItems="center" gap="sm">
        <LegendItem background="info" label="today" />
        <LegendItem background="secondary" label="Blocked period" />
      </F0Box>
    </F0Box>
  )
}
