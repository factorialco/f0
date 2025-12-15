import {
  differenceInDays,
  format,
  formatDistanceToNowStrict,
  isToday,
  isYesterday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns"

export function formatTime(date: Date) {
  return format(date, "p")
}

export function formatTime24Hours(date: Date) {
  return format(date, "HH:mm")
}

export function getAbbreviateMonth(date: Date) {
  return format(date, "LLL")
}

export function getDayOfMonth(date: Date) {
  return date.getDate()
}

export function getAgo(date: Date, addSuffix = true) {
  return formatDistanceToNowStrict(date, { addSuffix })
}

type GetDisplayDateBasedOnDurationOptions = {
  yesterdayRelative?: boolean
}

export function getDisplayDateBasedOnDuration(
  date: Date,
  { yesterdayRelative = true }: GetDisplayDateBasedOnDurationOptions = {}
) {
  if (isToday(date)) {
    return getAgo(date)
  }

  if (isYesterday(date)) {
    return yesterdayRelative ? getAgo(date) : format(date, "p")
  }

  return format(date, "PPPp")
}

type DateGroup = "today" | "yesterday" | "lastWeek" | "lastMonth" | number

export const categorizeItemsByDate = <T extends Record<D, Date>, D extends keyof T>(
  items: T[],
  dateField: D
) => {
  const groups: Record<DateGroup, T[]> = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: [],
  }

  items.forEach((item) => {
    const date = item[dateField]

    const diffDays = Math.abs(differenceInDays(date, new Date()))

    if (isToday(date)) {
      groups.today.push(item)
    } else if (isYesterday(date)) {
      groups.yesterday.push(item)
    } else if (diffDays <= 7) {
      groups.lastWeek.push(item)
    } else if (diffDays <= 30) {
      groups.lastMonth.push(item)
    } else {
      groups[date.getFullYear()] = [...(groups[date.getFullYear()] || []), item]
    }
  })

  return groups
}

export type DateGranularity = "day" | "week" | "month" | "year"
const dateGranularityFunction: Record<DateGranularity, (date: Date) => Date> = {
  day: startOfDay,
  month: startOfMonth,
  week: startOfWeek,
  year: startOfYear,
}

export function setDateGranularity(date: Date, granularity: DateGranularity) {
  return (
    dateGranularityFunction[granularity]?.(date) ||
    new Error(`Invalid date granularity ${granularity}`)
  )
}
