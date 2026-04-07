import {
  addMonths,
  addYears,
  endOfQuarter,
  formatDate,
  isSameQuarter,
  isSameYear,
  startOfQuarter,
} from "date-fns"

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
import { QuarterView } from "./QuarterView"

const QUARTER_FORMAT = "'Q'Q yyyy"

export function toQuarterGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(date: T): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(date, startOfQuarter, endOfQuarter)
}

const add = (date: DateRangeComplete, delta: number): DateRangeComplete => {
  return {
    from: startOfQuarter(addMonths(date.from, delta * 3)),
    to: endOfQuarter(addMonths(date.to, delta * 3)),
  }
}

const formatQuarterShort = (date: Date | DateRange | undefined | null) => {
  return formatDateToString(date, QUARTER_FORMAT)
}

const formatQuarterLong = (date: Date | DateRange | undefined | null) => {
  const dateRange = toQuarterGranularityDateRange(date)
  if (!dateRange) {
    return ""
  }
  // Single date
  if (!dateRange.to || isSameQuarter(dateRange.from, dateRange.to)) {
    return formatDate(dateRange.from, "'Q'Q yyyy")
  }

  // Range
  // Same year
  if (isSameYear(dateRange.from, dateRange.to)) {
    return `${formatDate(dateRange.from, "'Q'Q")} ${rangeSeparator} ${formatDate(dateRange.to, "'Q'Q yyyy")}`
  }

  // Different year
  return `${formatDate(dateRange.from, "'Q'Q yyyy")} ${rangeSeparator} ${formatDate(dateRange.to, "'Q'Q yyyy")}`
}

export const quarterGranularity: GranularityDefinition = {
  calendarView: "quarter",
  add,
  getPrevNext: (value, options) => {
    const dateRange = toQuarterGranularityDateRange(value)
    if (!dateRange) {
      return { prev: false, next: false }
    }
    const { from, to } = dateRange

    const { from: prevFrom, to: prevTo } = add({ from, to }, -1)
    const { from: nextFrom, to: nextTo } = add({ from, to }, 1)

    const minWithGranularity = options.min && startOfQuarter(options.min)
    const maxWithGranularity = options.max && endOfQuarter(options.max)

    return {
      prev: isAfterOrEqual(prevFrom, minWithGranularity)
        ? { from: prevFrom, to: prevTo }
        : false,
      next: isBeforeOrEqual(nextTo, maxWithGranularity)
        ? { from: nextFrom, to: nextTo }
        : false,
    }
  },
  toRangeString: (date) => formatDateRange(date, "'Q'Q yyyy"),
  toRange: (date) => toQuarterGranularityDateRange(date),
  toString: (date, _, format = "default") => {
    const formats: Record<DateStringFormat, string> = {
      default: formatQuarterShort(date),
      long: formatQuarterLong(date),
    }
    return formats[format] ?? formats.default
  },
  toStringMaxWidth: () => 110,
  placeholder: () => formatToPlaceholder(QUARTER_FORMAT),
  fromString: (dateStr) => {
    const dateRangeString = toDateRangeString(dateStr)
    if (!dateRangeString) {
      return null
    }
    const { from: fromStr, to: toStr } = dateRangeString

    const parseDate = (dateStr: string) => {
      const trimmed = dateStr.trim()

      const [quarterStr, yearStr] = trimmed.split(/\s+/)
      const year = isNaN(Number(yearStr)) ? new Date().getFullYear() : +yearStr
      const quarter = Number(quarterStr.replace(/[qQ\s]/g, ""))

      return new Date(year, (quarter - 1) * 3, 1)
    }

    return toQuarterGranularityDateRange({
      from: parseDate(fromStr),
      to: toStr ? parseDate(toStr) : undefined,
    })
  },
  navigate: (date, direction) => {
    return startOfQuarter(addMonths(date, direction * 3))
  },
  navigateUIView: (viewDate, direction) => {
    return startOfQuarter(addYears(viewDate, direction * 5))
  },
  label: (viewDate) => {
    const baseYear = Math.floor(viewDate.getFullYear() / 5) * 5
    const endYear = baseYear + 4
    return `${baseYear} ${rangeSeparator} ${endYear}`
  },
  getViewDateFromDate: (date) => {
    return startOfQuarter(date)
  },
  render: (renderProps) => {
    const minDate = toQuarterGranularityDateRange(renderProps.minDate)
    const maxDate = toQuarterGranularityDateRange(renderProps.maxDate)
    return (
      <QuarterView
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
