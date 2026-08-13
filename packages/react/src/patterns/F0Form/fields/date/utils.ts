/**
 * Shared utilities for date/time field manipulation
 */
import { format, isValid, parse } from "date-fns"

import type { HourCycle } from "@/lib/providers/l10n/types"

/**
 * Extracts time string (HH:mm) from a Date
 */
export function dateToTimeString(date: Date | undefined): string {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return ""

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  return `${hours}:${minutes}`
}

/**
 * Converts a time string (HH:mm) to a Date object.
 * Uses today's date as the base.
 */
export function timeStringToDate(timeString: string): Date | undefined {
  if (!timeString) return undefined

  const [hours, minutes] = timeString.split(":").map(Number)
  if (isNaN(hours) || isNaN(minutes)) return undefined

  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  return date
}

/**
 * Combines a date and time string into a single Date object
 */
export function combineDateAndTime(
  date: Date | undefined,
  timeString: string | undefined
): Date | undefined {
  if (!date) return undefined

  const result = new Date(date)

  if (timeString) {
    const [hours, minutes, seconds] = timeString.split(":").map(Number)
    result.setHours(hours ?? 0, minutes ?? 0, seconds ?? 0, 0)
  } else {
    result.setHours(0, 0, 0, 0)
  }

  return result
}

const timePattern = (hourCycle: HourCycle): string =>
  hourCycle === "12h" ? "hh:mm a" : "HH:mm"

/**
 * Formats a Date as a time string in the given hour cycle
 * (e.g. "08:00 PM" for 12h, "20:00" for 24h).
 */
export function dateToDisplayTime(
  date: Date | undefined,
  hourCycle: HourCycle
): string {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return ""
  return format(date, timePattern(hourCycle))
}

/**
 * Parses a time string in the given hour cycle back to a Date (today's date as
 * base). Returns undefined when the input isn't a valid time.
 */
export function displayTimeToDate(
  input: string,
  hourCycle: HourCycle
): Date | undefined {
  const trimmed = input.trim()
  if (!trimmed) return undefined
  const parsed = parse(trimmed, timePattern(hourCycle), new Date())
  return isValid(parsed) ? parsed : undefined
}
