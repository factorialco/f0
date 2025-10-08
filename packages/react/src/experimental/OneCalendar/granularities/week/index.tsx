import {
  addDays,
  addMonths,
  endOfISOWeek,
  parse,
  startOfISOWeek,
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
      default: formatDateToString(date, "'W'I yyyy"),
      long: i18n.date.granularities.week.long
        .replace("{{month}}", formatDateToString(date, "MMM"))
        .replace("{{year}}", formatDateToString(date, "yyyy"))
        .replace("{{day}}", formatDateToString(date, "d")),
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
        compact={renderProps.compact}
      />
    )
  },
}
