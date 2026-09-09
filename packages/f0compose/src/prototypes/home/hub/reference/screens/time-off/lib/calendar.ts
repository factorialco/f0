/** Pure date helpers for the year-at-a-glance calendar. No JSX. */

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/** Week starts on Monday, matching the reference screen. */
export const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

/**
 * The day-number cells for a month, Monday-first, with leading `null`s padding
 * the offset before the 1st so the grid lines up under the weekday header.
 */
export function monthCells(year: number, month: number): (number | null)[] {
  const firstWeekday = new Date(year, month, 1).getDay() // 0 = Sun … 6 = Sat
  const offset = (firstWeekday + 6) % 7 // shift so Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (number | null)[] = Array.from({ length: offset }, () => null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}
