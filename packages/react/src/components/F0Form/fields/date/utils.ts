/**
 * Shared utilities for date/time field manipulation
 */

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
