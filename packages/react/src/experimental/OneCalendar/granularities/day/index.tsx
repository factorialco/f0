import {
  addDays,
  addMonths,
  endOfDay,
  isSameDay,
  isSameMonth,
  isSameYear,
  startOfDay,
  startOfMonth,
} from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDate,
  formatDateRange,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { GranularityDefinition } from "../types"
import { DayView } from "./DayView"

export function toDayGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfDay, endOfDay)
}

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfDay(addDays(date.from, delta)),
    to: endOfDay(addDays(date.to, delta)),
  }
}

export const dayGranularity: GranularityDefinition = {
  calendarView: "day",
  add,
  getPrevNext: (value: DateRange, options) => {
    const dateRange = toDayGranularityDateRange(value)
    if (!dateRange) {
      return {
        prev: false,
        next: false,
      }
    }

    const { from, to } = dateRange

    const { from: prevFrom, to: prevTo } = add({ from, to }, -1)
    const { from: nextFrom, to: nextTo } = add({ from, to }, 1)

    const minWithGranularity = options.min && startOfDay(options.min)
    const maxWithGranularity = options.max && endOfDay(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRange: (date) => toDayGranularityDateRange(date),
  toRangeString: (date) => formatDateRange(date, "dd/MM/yyyy"),
  toString: (date) => {
    const dateRange = toDayGranularityDateRange(date)
    if (!dateRange) {
      return ""
    }
    // Single date
    if (!dateRange.to || isSameDay(dateRange.from, dateRange.to)) {
      return formatDate(dateRange.from, "dd MMM yyyy")
    }

    // Range
    // Same month
    if (isSameMonth(dateRange.from, dateRange.to)) {
      return `${formatDate(dateRange.from, "dd")} ${rangeSeparator} ${formatDate(dateRange.to, "dd MMM yyyy")}`
    }

    // Same year
    if (isSameYear(dateRange.from, dateRange.to)) {
      return `${formatDate(dateRange.from, "dd MMM")} ${rangeSeparator} ${formatDate(dateRange.to, "dd MMM yyyy")}`
    }

    // Different month and year
    return `${formatDate(dateRange.from, "dd MMM yyyy")} ${rangeSeparator} ${formatDate(dateRange.to, "dd MMM yyyy")}`
  },
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()
      const [day, month, year] = trimmed.split(/[/.-]/)
      return new Date(Number(year), Number(month) - 1, Number(day))
    }

    return toDayGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  navigate: (viewDate, direction) => {
    return addDays(viewDate, direction)
  },
  navigateUIView: (viewDate, direction) => {
    return addMonths(viewDate, direction)
  },
  getViewDateFromDate: (date) => {
    return startOfMonth(date)
  },
  label: (viewDate) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(viewDate)
  },
  render: (renderProps) => {
    const minDate = toDayGranularityDateRange(renderProps.minDate)
    const maxDate = toDayGranularityDateRange(renderProps.maxDate)
    return (
      <DayView
        mode={renderProps.mode}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        month={renderProps.month}
        onMonthChange={renderProps.onMonthChange}
        motionDirection={renderProps.motionDirection}
        minDate={minDate ? minDate.from : undefined}
        maxDate={maxDate ? maxDate.to : undefined}
      />
    )
  },
}
