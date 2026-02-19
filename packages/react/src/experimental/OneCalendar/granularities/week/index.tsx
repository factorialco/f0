import {
  addDays,
  addMonths,
  endOfISOWeek,
  endOfWeek,
  formatDate,
  isSameISOWeek,
  isSameWeek,
  isSameMonth,
  isSameYear,
  parse,
  startOfISOWeek,
  startOfWeek,
  startOfMonth,
} from "date-fns"

import {
  DateRange,
  DateRangeComplete,
  WeekStartDay,
  WeekStartsOn,
} from "../../types"
import {
  formatDateRange,
  formatToPlaceholder,
  isAfterOrEqual,
  isBeforeOrEqual,
  toDateRangeString,
  toGranularityDateRange,
} from "../../utils"
import { rangeSeparator } from "../consts"
import { DateStringFormat, GranularityDefinition } from "../types"
import { WeekView } from "./WeekView"

const WEEK_FORMAT = "'W'I yyyy"

// Helper functions that use ISO week functions when weekStartsOn === WeekStartDay.Monday, otherwise use configurable versions
export const getStartOfWeek = (date: Date, weekStartsOn: WeekStartsOn) => {
  return weekStartsOn === WeekStartDay.Monday
    ? startOfISOWeek(date)
    : startOfWeek(date, { weekStartsOn })
}

export const getEndOfWeek = (date: Date, weekStartsOn: WeekStartsOn) => {
  return weekStartsOn === WeekStartDay.Monday
    ? endOfISOWeek(date)
    : endOfWeek(date, { weekStartsOn })
}

export const getIsSameWeek = (
  dateLeft: Date,
  dateRight: Date,
  weekStartsOn: WeekStartsOn
) => {
  return weekStartsOn === WeekStartDay.Monday
    ? isSameISOWeek(dateLeft, dateRight)
    : isSameWeek(dateLeft, dateRight, { weekStartsOn })
}

export function toWeekGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(
  date: T,
  weekStartsOn: WeekStartsOn = WeekStartDay.Monday
): T extends Date | DateRange ? DateRangeComplete : T {
  return toGranularityDateRange(
    date,
    (d) => getStartOfWeek(d, weekStartsOn),
    (d) => getEndOfWeek(d, weekStartsOn)
  )
}

const add = (
  date: DateRangeComplete,
  delta: number,
  weekStartsOn: WeekStartsOn = WeekStartDay.Monday
): DateRangeComplete => {
  return {
    from: getStartOfWeek(addDays(date.from, delta * 7), weekStartsOn),
    to: getEndOfWeek(addDays(date.to, delta * 7), weekStartsOn),
  }
}

const toStringSort = (
  date: DateRange | Date | undefined | null,
  weekStartsOn: WeekStartsOn = WeekStartDay.Monday
) => {
  const dateRange = toWeekGranularityDateRange(date, weekStartsOn)
  if (!dateRange) {
    return ""
  }
  // Single date
  if (
    !dateRange.to ||
    getIsSameWeek(dateRange.from, dateRange.to, weekStartsOn)
  ) {
    return formatDate(dateRange.from, WEEK_FORMAT)
  }

  // Range
  // Same year
  if (isSameYear(dateRange.from, dateRange.to)) {
    return `${formatDate(dateRange.from, "'W'I")} ${rangeSeparator} ${formatDate(dateRange.to, WEEK_FORMAT)}`
  }

  // Different month and year
  return `${formatDate(dateRange.from, WEEK_FORMAT)} ${rangeSeparator} ${formatDate(dateRange.to, WEEK_FORMAT)}`
}

const toStringLong = (
  date: DateRange | Date | undefined | null,
  i18nStrings: {
    singular: string
    plural: string
  },
  weekStartsOn: WeekStartsOn = WeekStartDay.Monday
) => {
  const dateRange = toWeekGranularityDateRange(date, weekStartsOn)
  if (!dateRange) {
    return ""
  }

  const toI18nString = (
    dateString: string,
    type: "singular" | "plural" = "singular"
  ) => (i18nStrings[type] || "").replace("{{date}}", dateString)

  const isSingleWeek =
    !dateRange.to || getIsSameWeek(dateRange.from, dateRange.to, weekStartsOn)

  if (isSingleWeek) {
    return toI18nString(formatDate(dateRange.from, "d MMM yyyy"))
  }

  // Range

  const startOfToWeek = getStartOfWeek(dateRange.to, weekStartsOn)
  // Same month
  if (isSameMonth(dateRange.from, dateRange.to)) {
    return `${toI18nString(formatDate(dateRange.from, "d"), "plural")} ${rangeSeparator} ${toI18nString(formatDate(startOfToWeek, "d MMM yyyy"))}`
  }
  // Same year
  if (isSameYear(dateRange.from, dateRange.to)) {
    return `${toI18nString(formatDate(dateRange.from, "d MMM"), "plural")} ${rangeSeparator} ${toI18nString(formatDate(startOfToWeek, "d MMM yyyy"))}`
  }

  // Different month and year
  return `${toI18nString(formatDate(dateRange.from, "d MMM yyyy"), "plural")} ${rangeSeparator} ${toI18nString(formatDate(startOfToWeek, "d MMM yyyy"))}`
}

export const createWeekGranularity = (
  weekStartsOn: WeekStartsOn = WeekStartDay.Monday
): GranularityDefinition => {
  return {
    weekStartsOn,
    calendarView: "week",
    add: function (date, delta) {
      return add(date, delta, this.weekStartsOn)
    },
    getPrevNext: function (value: DateRange, options) {
      const dateRange = toWeekGranularityDateRange(value, this.weekStartsOn)
      if (!dateRange) {
        return { prev: false, next: false }
      }

      const { from, to } = dateRange

      const { from: prevFrom, to: prevTo } = add(
        { from, to },
        -1,
        this.weekStartsOn
      )
      const { from: nextFrom, to: nextTo } = add(
        { from, to },
        1,
        this.weekStartsOn
      )

      const minWithGranularity =
        options.min &&
        getStartOfWeek(options.min, this.weekStartsOn ?? WeekStartDay.Monday)
      const maxWithGranularity =
        options.max &&
        getEndOfWeek(options.max, this.weekStartsOn ?? WeekStartDay.Monday)

      return {
        prev: isAfterOrEqual(prevFrom, minWithGranularity)
          ? { from: prevFrom, to: prevTo }
          : false,
        next: isBeforeOrEqual(nextTo, maxWithGranularity)
          ? { from: nextFrom, to: nextTo }
          : false,
      }
    },
    toRangeString: function (date) {
      return formatDateRange(date, "'W'I yyyy")
    },
    toRange: function (date) {
      return toWeekGranularityDateRange(date, this.weekStartsOn)
    },
    toString: function (date, i18n, format = "default") {
      const formats: Record<DateStringFormat, string> = {
        default: toStringSort(date, this.weekStartsOn),
        long: toStringLong(
          date,
          {
            singular: i18n.date.granularities.week.longSingular,
            plural: i18n.date.granularities.week.longPlural,
          },
          this.weekStartsOn
        ),
      }
      return formats[format] ?? formats.default
    },
    toStringMaxWidth: function () {
      return 240
    },
    placeholder: () => formatToPlaceholder(WEEK_FORMAT),
    fromString: function (dateStr) {
      const dateRangeString = toDateRangeString(dateStr)
      if (!dateRangeString) {
        return null
      }
      const { from: fromStr, to: toStr } = dateRangeString

      const parseDate = (dateStr: string) => {
        const trimmed = dateStr.trim()

        const [weekStr, yearStr] = trimmed.split(/\s+/)

        const year = isNaN(Number(yearStr))
          ? new Date().getFullYear()
          : +yearStr

        const week = Number(weekStr.replace(/[wW\s]/g, ""))
        return parse(`${week}`, "I", new Date(year, 0, 1))
      }

      return toWeekGranularityDateRange(
        {
          from: parseDate(fromStr),
          to: toStr ? parseDate(toStr) : undefined,
        },
        this.weekStartsOn
      )
    },
    getViewDateFromDate: function (date) {
      return startOfMonth(date)
    },
    navigate: function (date, direction) {
      return addDays(date, direction * 7)
    },
    navigateUIView: function (viewDate, direction) {
      return addMonths(viewDate, direction)
    },
    label: function (viewDate) {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(viewDate)
    },
    render: function (renderProps) {
      const weekStartsOnRender =
        renderProps.weekStartsOn !== undefined
          ? renderProps.weekStartsOn
          : this.weekStartsOn
      const minDate = toWeekGranularityDateRange(
        renderProps.minDate,
        weekStartsOnRender
      )
      const maxDate = toWeekGranularityDateRange(
        renderProps.maxDate,
        weekStartsOnRender
      )
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
          weekStartsOn={weekStartsOnRender}
        />
      )
    },
  }
}

export const weekGranularity = createWeekGranularity(WeekStartDay.Monday)
