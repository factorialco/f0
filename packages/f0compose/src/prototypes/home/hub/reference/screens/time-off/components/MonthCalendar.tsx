import { F0Box, F0Text } from "@factorialco/f0-react"

import { monthCells, WEEKDAYS } from "../lib/calendar"

type Props = {
  year: number
  month: number
  name: string
  taken: number[]
  blocked: number[]
  /** Day-of-month that is "today", when this month contains it. */
  today?: number
}

function DayCell({
  day,
  taken,
  blocked,
  isToday,
}: {
  day: number | null
  taken: boolean
  blocked: boolean
  isToday: boolean
}) {
  if (day === null) return <F0Box height="6" />

  if (taken) {
    return (
      <F0Box
        height="6"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <F0Box
          background="critical"
          borderRadius="full"
          paddingX="xs"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="6"
          height="6"
        >
          <F0Text content={String(day)} variant="small" />
        </F0Box>
      </F0Box>
    )
  }

  if (blocked) {
    return (
      <F0Box
        height="6"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <F0Box
          background="secondary"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="6"
          height="6"
        >
          <F0Text content={String(day)} variant="small" />
        </F0Box>
      </F0Box>
    )
  }

  if (isToday) {
    return (
      <F0Box
        height="6"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <F0Box
          background="info"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="6"
          height="6"
        >
          <F0Text content={String(day)} variant="small" />
        </F0Box>
      </F0Box>
    )
  }

  return (
    <F0Box
      height="6"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <F0Text content={String(day)} variant="small" />
    </F0Box>
  )
}

/** One compact month grid: weekday header + Monday-first day cells. */
export function MonthCalendar({
  year,
  month,
  name,
  taken,
  blocked,
  today,
}: Props) {
  const cells = monthCells(year, month)
  const takenSet = new Set(taken)
  const blockedSet = new Set(blocked)

  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      <F0Text content={name} variant="label" />
      <F0Box display="grid" columns="7" gap="xs">
        {WEEKDAYS.map((w) => (
          <F0Box
            key={w}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <F0Text content={w} variant="small" />
          </F0Box>
        ))}
        {cells.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            taken={day !== null && takenSet.has(day)}
            blocked={day !== null && blockedSet.has(day)}
            isToday={day !== null && day === today}
          />
        ))}
      </F0Box>
    </F0Box>
  )
}
