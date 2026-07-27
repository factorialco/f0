import { format, isSameMonth, isSameYear, isToday, isYesterday } from "date-fns"

import { getLocale } from "@/components/OneCalendar/utils"

import type { ChatThread } from "./useChatHistory"
import type { DateGroup, ThreadGroup } from "./types"

/** Resolve the browser's `date-fns` locale, falling back to the default. */
function resolveLocale() {
  if (typeof navigator === "undefined") return undefined
  return getLocale(navigator.language)
}

export function getDateGroup(dateString: string): DateGroup {
  const date = new Date(dateString)
  const now = new Date()

  if (isToday(date)) return "today"
  if (isYesterday(date)) return "yesterday"
  if (isSameMonth(date, now)) return "thisMonth"
  return "older"
}

/**
 * Format a thread's timestamp for the history list next to its title.
 *
 * Output is humanised, locale-aware and matches the design:
 *   - "Today, 11:51"
 *   - "Yesterday, 7:59"
 *   - "Apr 23, 11:51"    (within the current year)
 *   - "Apr 6 2025, 11:51" (older — year differs from today)
 *
 * Uses a comma as the calendar/time separator instead of a natural-language
 * word ("at", "a las", "um", …). Different languages have different
 * connective grammars there — some don't use a preposition at all — so a
 * punctuation separator keeps the format consistent and safe to use in any
 * locale without per-language overrides.
 *
 * The month/day and time segments are produced by `date-fns` in the
 * browser's locale (so "Apr" becomes "abr" in Spanish, time switches to
 * 24h when the locale uses it, etc.). The calendar-day label ("Today",
 * "Yesterday") still comes from the app's i18n so it matches whatever
 * language the chat is currently running in.
 */
export function formatThreadDate(
  dateString: string,
  labels: { today: string; yesterday: string }
): string {
  const date = new Date(dateString)
  const locale = resolveLocale()
  // `p` = locale-aware short time (e.g. "7:59 AM" in en-US, "7:59" in es-ES).
  const time = format(date, "p", { locale })

  if (isToday(date)) return `${labels.today}, ${time}`
  if (isYesterday(date)) return `${labels.yesterday}, ${time}`

  const includeYear = !isSameYear(date, new Date())
  // `MMM d` = short month + day (e.g. "Apr 23"). Add the year when the
  // thread is from a previous year so the label is unambiguous.
  const datePart = format(date, includeYear ? "MMM d yyyy" : "MMM d", {
    locale,
  })
  return `${datePart}, ${time}`
}

export function groupThreadsByDate(threads: ChatThread[]): ThreadGroup[] {
  const groups: Record<DateGroup, ChatThread[]> = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: [],
  }

  for (const thread of threads) {
    const group = getDateGroup(thread.updatedAt)
    groups[group].push(thread)
  }

  const order: DateGroup[] = ["today", "yesterday", "thisMonth", "older"]
  return order
    .filter((key) => groups[key].length > 0)
    .map((key) => ({ key, threads: groups[key] }))
}
