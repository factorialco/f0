import { addYears, endOfYear, parse, startOfYear } from "date-fns"

import { DateRange, DateRangeComplete } from "../../types"
import {
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
import { YearView } from "./YearView"

const YEAR_FORMAT = "yyyy"

export function toYearGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfYear, endOfYear)
}

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfYear(addYears(date.from, delta)),
    to: endOfYear(addYears(date.to, delta)),
  }
}

export const yearGranularity: GranularityDefinition = {
  calendarView: "year",
  add,
  getPrevNext: (value, options) => {
    const dateRange = toYearGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }
    const { from, to } = dateRange

    const { from: prevFrom, to: prevTo } = add({ from, to }, -1)
    const { from: nextFrom, to: nextTo } = add({ from, to }, 1)

    const minWithGranularity = options.min && startOfYear(options.min)
    const maxWithGranularity = options.max && endOfYear(options.max)

    return {
      prev:
        isAfterOrEqual(prevFrom, minWithGranularity) &&
        isAfterOrEqual(prevTo, minWithGranularity)
          ? { from: prevFrom, to: prevTo }
          : false,
      next:
        isBeforeOrEqual(nextTo, maxWithGranularity) &&
        isBeforeOrEqual(nextFrom, maxWithGranularity)
          ? { from: nextFrom, to: nextTo }
          : false,
    }
  },
  toRange: (date) => toYearGranularityDateRange(date),
  toRangeString: (date) => formatDateRange(date, YEAR_FORMAT),
  toString: (date, _, format = "default") => {
    const formats: Record<DateStringFormat, string> = {
      default: formatDateToString(date, YEAR_FORMAT),
      long: formatDateToString(date, YEAR_FORMAT), // For years, long format is the same as default
    }
    return formats[format] ?? formats.default
  },
  toStringMaxWidth: () => 70,
  placeholder: () => formatToPlaceholder(YEAR_FORMAT),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()
      return parse(trimmed, "yyyy", new Date())
    }

    return toYearGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  getViewDateFromDate: (date) => {
    return startOfYear(date)
  },
  navigate: (date, direction) => {
    return addYears(date, direction)
  },
  navigateUIView: (viewDate, direction) => {
    return addYears(viewDate, direction * 10)
  },
  label: (viewDate) => {
    const startYear = viewDate.getFullYear() - (viewDate.getFullYear() % 10)
    const endYear = startYear + 9

    return `${startYear} ${rangeSeparator} ${endYear}`
  },
  render: (renderProps) => {
    const minDate = toYearGranularityDateRange(renderProps.minDate)
    const maxDate = toYearGranularityDateRange(renderProps.maxDate)
    return (
      <YearView
        mode={renderProps.mode}
        decade={renderProps.viewDate.getFullYear()}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        motionDirection={renderProps.motionDirection}
        minDate={minDate ? minDate.from : undefined}
        maxDate={maxDate ? maxDate.to : undefined}
      />
    )
  },
}
