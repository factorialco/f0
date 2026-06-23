/** Labels the host's i18n provides — keeps these helpers pure/testable. */
export type NaturalTimeLabels = {
  today: string
  yesterday: string
}

const DAY_MS = 24 * 60 * 60 * 1000

const startOfDay = (d: Date): number =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()

/** Whole calendar days between two dates (0 = same day, 1 = yesterday…). */
export function calendarDaysApart(a: Date, b: Date): number {
  return Math.round((startOfDay(b) - startOfDay(a)) / DAY_MS)
}

/** "22:14" in the given locale. */
export function formatClock(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

/**
 * Relative day label: Today / Yesterday / weekday (within a week) / date.
 * Used as the day part of separators and statuses.
 */
export function formatRelativeDay(
  date: Date,
  now: Date,
  labels: NaturalTimeLabels,
  locale?: string
): string {
  const days = calendarDaysApart(date, now)
  if (days <= 0) return labels.today
  if (days === 1) return labels.yesterday
  if (days < 7) {
    return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date)
  }
  const sameYear = date.getFullYear() === now.getFullYear()
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    ...(sameYear ? {} : { year: "numeric" }),
  }).format(date)
}

/** Centered separator label, e.g. "Yesterday 22:14" or "Today 10:50". */
export function formatSeparator(
  date: Date,
  now: Date,
  labels: NaturalTimeLabels,
  locale?: string
): string {
  return `${formatRelativeDay(date, now, labels, locale)} ${formatClock(date, locale)}`
}

/**
 * Status timestamp (e.g. next to "Read"): just the clock when today, otherwise
 * the relative day + clock so old receipts still read naturally.
 */
export function formatStatusTime(
  date: Date,
  now: Date,
  labels: NaturalTimeLabels,
  locale?: string
): string {
  return calendarDaysApart(date, now) <= 0
    ? formatClock(date, locale)
    : formatSeparator(date, now, labels, locale)
}
