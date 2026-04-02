import { format, isAfter, isBefore, isEqual } from "date-fns"
import * as locales from "date-fns/locale"
import { Matcher } from "react-day-picker"

import { GranularityDefinition } from "./granularities"
import { rangeSeparator } from "./granularities/consts"
import { DateRange, DateRangeComplete, DateRangeString } from "./types"

/**
 * Converts a date-fns format string to a human-readable placeholder pattern.
 * e.g. "dd/MM/yyyy" → "dd/mm/yyyy", "'W'I yyyy" → "Wnn yyyy"
 */
export const formatToPlaceholder = (formatStr: string): string => {
  return formatStr
    .replace(/'([^']+)'/g, "$1") // Remove quotes around literals (e.g., 'W' → W, 'Q' → Q)
    .replace(/MM/g, "mm") // Month number → mm
    .replace(/dd/g, "dd") // Day → dd
    .replace(/yyyy/g, "yyyy") // Year → yyyy
    .replace(/I/g, "nn") // ISO week number → nn
    .replace(/Q/g, "n") // Quarter number → n
}

// Get the locale object from date-fns/locale

export const getLocale = (localeKey: string) => {
  const key = localeKey.split("-")[0] // Handle both 'es' and 'es-ES' formats
  return locales[key as keyof typeof locales]
}

export const toDateRange = (
  value: Date | DateRange | undefined | null
): DateRange | undefined => {
  if (value instanceof Date) {
    return { from: value }
  }
  if (value === null || value === undefined) {
    return undefined
  }

  return value
}

/**
 * Returns true if the date is valid or undefined or null
 * @param date
 * @returns
 */
export const isValidOrEmptyDate = (date: Date | undefined | null): boolean => {
  if (date === undefined || date === null) {
    return true
  }
  return isValidDate(date)
}

/**
 * Returns true if the date is valid
 * @param date
 * @returns
 */
export const isValidDate = (date: Date | undefined | null): boolean => {
  if (date === undefined || date === null) {
    return false
  }
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Returns the date range string from a string or DateRangeString
 * @param value
 * @returns
 */
export const toDateRangeString = (
  value: undefined | string | DateRangeString
): DateRangeString | undefined => {
  if (value === undefined) {
    return undefined
  }

  if (typeof value === "string") {
    const [fromStr, toStr] = value.split(/(?:\s+-\s+|\s+→\s+)/)
    return {
      from: fromStr,
      to: toStr,
    }
  }

  return value
}

export const formatDate = (date: Date, formatStr: string): string => {
  return format(date, formatStr)
}

/**
 * Formats the date range to a string
 * @param date
 * @param formatStr
 * @returns
 */
export const formatDateRange = (
  date: Date | DateRange | undefined | null,
  formatStr: string
): DateRangeString => {
  const dateRange = toDateRange(date)
  if (!dateRange) {
    return {
      from: "",
      to: undefined,
    }
  }

  const from = formatDate(dateRange.from, formatStr)
  const to = dateRange.to ? formatDate(dateRange.to, formatStr) : undefined

  return {
    from,
    to: to && from !== to ? to : undefined,
  }
}

export const formatDateToString = (
  date: Date | DateRange | undefined | null,
  formatStr: string
): string => {
  const dateRange = formatDateRange(date, formatStr)
  if (!dateRange) {
    return "-"
  }
  const { from, to } = dateRange

  return `${from}${to && from !== to ? ` ${rangeSeparator} ${to}` : ""}`
}

export function toGranularityDateRange<
  T extends Date | DateRange | undefined | null,
>(
  date: Date | DateRange | undefined | null,
  fromFn: (date: Date) => Date,
  toFn: (date: Date) => Date
): T extends Date | DateRange ? DateRangeComplete : T {
  type ReturnType<T> = T extends Date | DateRange ? DateRangeComplete : T

  const dateRange = toDateRange(date)
  if (!dateRange) {
    return null as ReturnType<T>
  }
  const { from, to } = dateRange

  return {
    from: fromFn(from),
    to: toFn(to ? to : from),
  } as ReturnType<T>
}

/**
 * Checks if the data is before or equal
 * @param date
 * @param min
 * @returns
 */
export const isBeforeOrEqual = (date: Date, min: Date | undefined) =>
  !min || isBefore(date, min) || isEqual(date, min)

/**
 * Checks if the data is after or equal
 * @param date
 * @param max
 * @returns
 */
export const isAfterOrEqual = (date: Date, max: Date | undefined) =>
  !max || isAfter(date, max) || isEqual(date, max)
/**
 * Converts a date range to a calendar picker matcher
 * @param minDate
 * @param maxDate
 * @returns
 */
export const toCalendarPickerMatcher = ({
  minDate,
  maxDate,
}: {
  minDate?: Date
  maxDate?: Date
}): Matcher | Matcher[] => {
  const res: Matcher[] = []
  if (minDate) {
    res.push({ before: minDate })
  }
  if (maxDate) {
    res.push({ after: maxDate })
  }
  return res
}

/**
 * Check if the date is active
 * @param date
 * @param granularity
 * @param contraints
 * @returns
 */
export const isActiveDate = (
  date: Date | undefined | null,
  granularity: GranularityDefinition,
  { minDate, maxDate }: { minDate?: Date; maxDate?: Date }
) => {
  const dateWithGranularity = granularity.toRange(date)

  const minDateWithGranularity = granularity.toRange(minDate)
  const maxDateWithGranularity = granularity.toRange(maxDate)
  return (
    !date ||
    (!!dateWithGranularity?.from &&
      isValidDate(dateWithGranularity.from) &&
      (!minDateWithGranularity?.from ||
        isAfterOrEqual(
          dateWithGranularity.from,
          minDateWithGranularity.from
        )) &&
      (!maxDateWithGranularity?.to ||
        isBeforeOrEqual(dateWithGranularity.to, maxDateWithGranularity.to)))
  )
}
