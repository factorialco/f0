import { addYears, endOfDay, parse, startOfDay } from "date-fns"

import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDateRange,
  formatDateToString,
  formatToPlaceholder,
  isAfterOrEqual,
  isBeforeOrEqual,
  isValidDate,
  toDateRange,
  toDateRangeString,
} from "../../utils"
import { GranularityDefinition } from "../types"
import { PeriodsView } from "./PeriodsView"
import { DatePeriod, DatePeriodsDefinition } from "./types"
import {
  findPeriodByDate,
  findPeriodIndex,
  sortPeriods,
  toPeriodRange,
} from "./utils"

const PERIOD_FORMAT = "dd/MM/yyyy"

/**
 * Snaps a date to the period that contains it. A date outside every period —
 * or a picker with no periods at all — keeps its own range so min/max bounds
 * and persisted values stay usable.
 */
export function toPeriodsGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(
  date: T,
  periods: DatePeriod[]
): T extends Date | DateRange ? DateRangeComplete : T {
  type Result = T extends Date | DateRange ? DateRangeComplete : T

  const dateRange = toDateRange(date)
  if (!dateRange) {
    return null as Result
  }

  const period = findPeriodByDate(periods, dateRange.from)
  if (period) {
    return toPeriodRange(period) as Result
  }

  return {
    from: startOfDay(dateRange.from),
    to: endOfDay(dateRange.to ?? dateRange.from),
  } as Result
}

export const createPeriodsGranularity = (
  definition: DatePeriodsDefinition
): GranularityDefinition => {
  const periods = sortPeriods(definition.periods)

  const rangeAt = (index: number): DateRangeComplete | undefined => {
    const period = periods[index]
    return period ? toPeriodRange(period) : undefined
  }

  const shift = (
    date: Date | DateRange | undefined | null,
    delta: number
  ): DateRangeComplete | undefined => {
    const index = findPeriodIndex(periods, date)
    if (index === -1) {
      return undefined
    }
    return rangeAt(index + delta)
  }

  return {
    calendarView: "periods",
    selectorLabel: definition.label,
    hideDateInput: true,
    getViewDateBounds: () => {
      const first = periods.at(0)
      const last = periods.at(-1)
      if (!first || !last) {
        return undefined
      }
      return { min: endOfDay(first.to), max: endOfDay(last.to) }
    },
    add: (date, delta) => shift(date, delta) ?? date,
    getPrevNext: (value, options) => {
      const index = findPeriodIndex(periods, value)
      if (index === -1) {
        return { prev: false, next: false }
      }

      const prev = rangeAt(index - 1)
      const next = rangeAt(index + 1)

      // Periods are consumer-defined and rarely align with the min/max bounds,
      // so a period is reachable as soon as it overlaps them. The grid in
      // `PeriodsView` disables cells under the same rule.
      return {
        prev: prev && isAfterOrEqual(prev.to, options.min) ? prev : false,
        next: next && isBeforeOrEqual(next.from, options.max) ? next : false,
      }
    },
    toRangeString: (date) => formatDateRange(date, PERIOD_FORMAT),
    toRange: (date) => toPeriodsGranularityDateRange(date, periods),
    toString: (date) => {
      const dateRange = toDateRange(date)
      const period = findPeriodByDate(periods, dateRange?.from)
      if (period) {
        return period.label
      }
      if (!dateRange) {
        return ""
      }
      return formatDateToString(
        toPeriodsGranularityDateRange(dateRange, periods),
        PERIOD_FORMAT
      )
    },
    toStringMaxWidth: () => 240,
    placeholder: () => formatToPlaceholder(PERIOD_FORMAT),
    fromString: (dateStr) => {
      const dateRangeString = toDateRangeString(dateStr)
      if (!dateRangeString) {
        return null
      }

      const parsed = parse(
        dateRangeString.from.trim(),
        PERIOD_FORMAT,
        new Date()
      )
      if (!isValidDate(parsed)) {
        return null
      }

      return toPeriodsGranularityDateRange(parsed, periods)
    },
    navigate: (date, direction) => shift(date, direction)?.from ?? date,
    navigateUIView: (viewDate, direction) => addYears(viewDate, direction),
    label: (viewDate) => String(viewDate.getFullYear()),
    // The view files a period under the year it ends in, so the view date has
    // to land in that year too — a January cycle starting 25 Dec must not send
    // the view back to the previous year.
    getViewDateFromDate: (date) =>
      toPeriodsGranularityDateRange(date, periods)?.to ?? date,
    render: (renderProps) => (
      <PeriodsView
        periods={periods}
        header={definition.header}
        year={renderProps.viewDate.getFullYear()}
        motionDirection={renderProps.motionDirection}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        minDate={renderProps.minDate}
        maxDate={renderProps.maxDate}
        compact={renderProps.compact}
      />
    ),
  }
}

export const periodsGranularity = createPeriodsGranularity({ periods: [] })

export * from "./types"
