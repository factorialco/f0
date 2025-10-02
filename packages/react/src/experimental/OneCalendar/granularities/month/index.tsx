import NumberFlow from "@number-flow/react"
import {
  addMonths,
  addYears,
  endOfMonth,
  formatDate,
  isSameMonth,
  isSameYear,
  parse,
  startOfMonth,
} from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDateRange,
  formatDateToString,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { DateStringFormat, GranularityDefinition } from "../types"
import { MonthView } from "./MonthView"

export function toMonthGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfMonth, endOfMonth)
}

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfMonth(addMonths(date.from, delta)),
    to: endOfMonth(addMonths(date.to, delta)),
  }
}

const formatMonthShort = (date: Date | DateRange | undefined | null) => {
  return formatDateToString(date, "MM/yyyy")
}

const formatMonthLong = (date: Date | DateRange | undefined | null) => {
  const dateRange = toMonthGranularityDateRange(date)
  if (!dateRange) {
    return ""
  }
  // Single date
  if (!dateRange.to || isSameMonth(dateRange.from, dateRange.to)) {
    return formatDate(dateRange.from, "MMM yyyy")
  }

  // Range
  if (isSameYear(dateRange.from, dateRange.to)) {
    return `${formatDate(dateRange.from, "MMM")} ${rangeSeparator} ${formatDate(dateRange.to, "MMM yyyy")}`
  }

  // Different month and year
  return `${formatDate(dateRange.from, "MMM yyyy")} ${rangeSeparator} ${formatDate(dateRange.to, "MMM yyyy")}`
}

export const monthGranularity: GranularityDefinition = {
  calendarView: "month",
  add,
  getPrevNext: (value, options) => {
    const dateRange = toMonthGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }

    const { from, to } = dateRange
    const { from: prevFrom, to: prevTo } = add({ from, to }, -1)
    const { from: nextFrom, to: nextTo } = add({ from, to }, 1)

    const minWithGranularity = options.min && startOfMonth(options.min)
    const maxWithGranularity = options.max && endOfMonth(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRangeString: (date) => formatDateRange(date, "MM/yyyy"),
  toRange: (date) => toMonthGranularityDateRange(date),
  toString: (date, _, format = "default") => {
    const formats: Record<DateStringFormat, string> = {
      default: formatMonthShort(date),
      long: formatMonthLong(date),
    }
    return formats[format] ?? formats.default
  },
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [monthStr, yearStr] = trimmed.split(/[/.-\s+]/)

      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr
      const month =
        parse(monthStr, "MMMM", new Date().setFullYear(year)).getMonth() + 1 ||
        parse(monthStr, "MMM", new Date().setFullYear(year)).getMonth() + 1 ||
        Number(monthStr)

      return new Date(Number(year), Number(month) - 1, 1)
    }
    return toMonthGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  navigate: (date, direction) => {
    return addMonths(date, direction)
  },
  navigateUIView: (viewDate, direction) => {
    return addYears(viewDate, direction)
  },
  label: (viewDate) => {
    return (
      <NumberFlow
        format={{
          useGrouping: false,
          maximumFractionDigits: 0,
        }}
        spinTiming={{
          duration: 150,
        }}
        value={viewDate.getFullYear()}
      />
    )
  },
  getViewDateFromDate: (date) => {
    return startOfMonth(date)
  },
  render: (renderProps) => {
    const minDate = toMonthGranularityDateRange(renderProps.minDate)
    const maxDate = toMonthGranularityDateRange(renderProps.maxDate)
    return (
      <MonthView
        mode={renderProps.mode}
        year={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
        minDate={minDate ? minDate.from : undefined}
        maxDate={maxDate ? maxDate.to : undefined}
      />
    )
  },
}
