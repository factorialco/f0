import {
  addDays,
  addMonths,
  endOfISOWeek,
  formatDate,
  isSameMonth,
  isSameWeek,
  isSameYear,
  parse,
  startOfISOWeek,
  startOfMonth,
} from "date-fns"
import { DateRange, DateRangeComplete } from "../../types"
import {
  formatDateRange,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { DateStringFormat, GranularityDefinition } from "../types"
import { WeekView } from "./WeekView"

export function toWeekGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfISOWeek, endOfISOWeek)
}

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfISOWeek(addDays(date.from, delta * 7)),
    to: endOfISOWeek(addDays(date.to, delta * 7)),
  }
}

const toStringSort = (date: DateRange | Date | undefined | null) => {
  const dateRange = toWeekGranularityDateRange(date)
  if (!dateRange) {
    return ""
  }
  // Single date
  if (!dateRange.to || isSameWeek(dateRange.from, dateRange.to)) {
    return formatDate(dateRange.from, "W'I' yyyy")
  }

  // Range
  // Same year
  if (isSameYear(dateRange.from, dateRange.to)) {
    return `${formatDate(dateRange.from, "W'I'")} ${rangeSeparator} ${formatDate(dateRange.to, "W'I' yyyy")}`
  }

  // Different month and year
  return `${formatDate(dateRange.from, "W'I' yyyy")} ${rangeSeparator} ${formatDate(dateRange.to, "W'I' yyyy")}`
}

const toStringLong = (
  date: DateRange | Date | undefined | null,
  i18nStrings: {
    single: string
    plural: string
  }
) => {
  const dateRange = toWeekGranularityDateRange(date)
  if (!dateRange) {
    return ""
  }

  const toI18nString = (dateString: string, type: "single" | "plural") =>
    i18nStrings[type].replace("{{date}}", dateString)

  // Single date
  if (!dateRange.to || isSameWeek(dateRange.from, dateRange.to)) {
    return toI18nString(formatDate(dateRange.from, "d MMM yyyy"), "single")
  }

  // Range
  // Same month
  if (isSameMonth(dateRange.from, dateRange.to)) {
    return `${toI18nString(formatDate(dateRange.from, "d"), "plural")} ${rangeSeparator} ${toI18nString(formatDate(dateRange.to, "d MMM yyyy"), "single")}`
  }
  // Same year
  if (isSameYear(dateRange.from, dateRange.to)) {
    return `${toI18nString(formatDate(dateRange.from, "d MMM"), "plural")} ${rangeSeparator} ${toI18nString(formatDate(dateRange.to, "d MMM yyyy"), "single")}`
  }

  // Different month and year
  return `${toI18nString(formatDate(dateRange.from, "W'I' yyyy"), "plural")} ${rangeSeparator} ${toI18nString(formatDate(dateRange.to, "W'I' yyyy"), "single")}`
}

export const weekGranularity: GranularityDefinition = {
  calendarView: "week",
  add,
  getPrevNext: (value: DateRange, options) => {
    const dateRange = toWeekGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }

    const { from, to } = dateRange

    const { from: prevFrom, to: prevTo } = add({ from, to }, -1)
    const { from: nextFrom, to: nextTo } = add({ from, to }, 1)

    const minWithGranularity = options.min && startOfISOWeek(options.min)
    const maxWithGranularity = options.max && endOfISOWeek(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRangeString: (date) => {
    return formatDateRange(date, "'W'I yyyy")
  },
  toRange: (date) => toWeekGranularityDateRange(date),
  toString: (date, i18n, format = "default") => {
    const formats: Record<DateStringFormat, string> = {
      default: toStringSort(date),
      long: toStringLong(date, {
        single: i18n.date.granularities.week.long,
        plural: i18n.date.granularities.week.longRange,
      }),
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

      const [weekStr, yearStr] = trimmed.split(/\s+/)

      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr

      const week = Number(weekStr.replace(/[wW\s]/g, ""))
      return parse(`${week}`, "I", new Date().setFullYear(year))
    }

    return toWeekGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  getViewDateFromDate: (date) => {
    return startOfMonth(date)
  },
  navigate: (date, direction) => {
    return addDays(date, direction * 7)
  },
  navigateUIView: (viewDate, direction) => {
    return addMonths(viewDate, direction)
  },
  label: (viewDate) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(viewDate)
  },
  render: (renderProps) => {
    const minDate = toWeekGranularityDateRange(renderProps.minDate)
    const maxDate = toWeekGranularityDateRange(renderProps.maxDate)
    return (
      <WeekView
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
