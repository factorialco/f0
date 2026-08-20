import { endOfDay, isWithinInterval, startOfDay } from "date-fns"

import { DateRange, DateRangeComplete } from "../../types"
import { toDateRange } from "../../utils"
import { rangeSeparator } from "../consts"
import { DatePeriod } from "./types"

export const sortPeriods = (periods: DatePeriod[]): DatePeriod[] =>
  [...periods].sort((a, b) => a.from.getTime() - b.from.getTime())

export const toPeriodRange = (period: DatePeriod): DateRangeComplete => ({
  from: startOfDay(period.from),
  to: endOfDay(period.to),
})

/**
 * The period a date falls into. Periods are consumer-provided so they may
 * overlap or leave gaps: the first match wins and a date in a gap has no period.
 */
export const findPeriodByDate = (
  periods: DatePeriod[],
  date: Date | undefined | null
): DatePeriod | undefined => {
  if (!date) {
    return undefined
  }
  return periods.find((period) => {
    const { from, to } = toPeriodRange(period)
    return from <= to && isWithinInterval(date, { start: from, end: to })
  })
}

export const findPeriodIndex = (
  periods: DatePeriod[],
  date: Date | DateRange | undefined | null
): number => {
  const dateRange = toDateRange(date)
  const period = findPeriodByDate(periods, dateRange?.from)
  return period ? periods.indexOf(period) : -1
}

/**
 * The year a period is filed under in the view. Consumer periods are labelled
 * by where they end — a "January 2026" payroll cycle runs from 25 Dec 2025 —
 * so the end date, not the start, decides the year.
 */
export const periodYear = (period: DatePeriod): number =>
  period.to.getFullYear()

export const periodsOfYear = (
  periods: DatePeriod[],
  year: number
): DatePeriod[] => periods.filter((period) => periodYear(period) === year)

export const formatPeriodRange = (
  period: DatePeriod,
  locale = "en-US"
): string => {
  if (period.description !== undefined) {
    return period.description
  }
  const formatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
  })
  return `${formatter.format(period.from)} ${rangeSeparator} ${formatter.format(period.to)}`
}
