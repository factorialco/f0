import {
  addDays,
  addMonths,
  endOfDay,
  isSameDay,
  isSameMonth,
  isSameYear,
  parse,
  startOfDay,
  startOfMonth,
} from "date-fns"

import { getNumericDateFormat } from "@/lib/date"

import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDate,
  formatDateRange,
  formatDateToString,
  formatToPlaceholder,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { DateStringFormat, GranularityDefinition } from "../types"
import { DayView } from "./DayView"

export const DAY_FORMAT_FALLBACK = "dd/MM/yyyy"

export const getDayFormat = (locale?: string): string =>
  getNumericDateFormat(locale, DAY_FORMAT_FALLBACK)

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

const formatLong = (date: DateRange | Date | undefined | null) => {
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
  toRangeString: (date, _i18n, _format, locale) =>
    formatDateRange(date, getDayFormat(locale)),
  toString: (date, _, format = "default", locale) => {
    const formats: Record<DateStringFormat, string> = {
      default: formatDateToString(date, getDayFormat(locale)),
      long: formatLong(date),
    }
    return formats[format] ?? formats.default
  },
  toStringMaxWidth: () => 160,
  placeholder: (locale) => formatToPlaceholder(getDayFormat(locale)),
  fromString: (dateStr, _i18n, locale) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()
      const referenceDate = new Date()

      // Try long format first: "20 Feb 2026" (day month year)
      const longFormatDate = parse(trimmed, "d MMM yyyy", referenceDate)
      if (!isNaN(longFormatDate.getTime())) {
        return longFormatDate
      }

      // Try numeric format: "20/02/2026"
      const dayFormat = getDayFormat(locale)
      const numericDate = parse(trimmed, dayFormat, referenceDate)
      if (!isNaN(numericDate.getTime())) {
        return numericDate
      }

      // Fallback: manual parsing for other separators (dot, dash)
      const parts = trimmed.split(/[/.-]/)
      const tokens = dayFormat.match(/[dMy]+/g) ?? []
      const partFor = (token: "d" | "M" | "y") =>
        parts[tokens.findIndex((candidate) => candidate.startsWith(token))]

      const day = Number(partFor("d"))
      const month = Number(partFor("M"))
      const year = Number(partFor("y"))
      const parsed = new Date(year, month - 1, day)

      return parsed.getDate() === day && parsed.getMonth() === month - 1
        ? parsed
        : new Date(NaN)
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
  label: (viewDate, _i18n, locale = "en-US") => {
    return new Intl.DateTimeFormat(locale, {
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
        compact={renderProps.compact}
        weekStartsOn={renderProps.weekStartsOn}
      />
    )
  },
}
