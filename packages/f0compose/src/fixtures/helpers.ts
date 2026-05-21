/**
 * Deterministic helpers for fixtures.
 */

export const TODAY = "2026-05-05"

export function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z")
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

export function avatarFor(seed: string): string {
  return `https://i.pravatar.cc/120?u=${encodeURIComponent(seed)}`
}

/**
 * Natural-language relative date vs. fixture TODAY: "Today", "Yesterday",
 * "3 days ago", "2 weeks ago", "5 months ago". Deterministic — uses TODAY
 * (not `new Date()`) so prototypes render the same date on every visit.
 */
export function relativeDate(iso: string, locale = "en"): string {
  const today = new Date(TODAY + "T00:00:00Z")
  const date = new Date(iso + "T00:00:00Z")
  const days = Math.round(
    (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  )
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })
  if (days < 7) return rtf.format(-days, "day")
  if (days < 30) return rtf.format(-Math.round(days / 7), "week")
  if (days < 365) return rtf.format(-Math.round(days / 30), "month")
  return rtf.format(-Math.round(days / 365), "year")
}
