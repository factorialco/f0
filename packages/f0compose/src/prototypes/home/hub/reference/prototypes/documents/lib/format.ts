/** Pure formatting helpers for the Documents prototype (JSX-free). */

import type { AppLocale } from "@/prototypes/home/hub/reference/lib/i18n"

const MONTHS: Record<AppLocale, string[]> = {
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  es: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ],
}

/** ISO date → "12 Jun 2026" / "12 jun 2026". Deterministic — no relative "now" math. */
export function formatDate(iso: string, locale: AppLocale = "en"): string {
  const d = new Date(iso)
  return `${d.getDate()} ${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`
}

/** Kilobytes → "1.4 MB" / "184 KB" / "—" when unknown (folders). */
export function formatSize(kb?: number): string {
  if (kb == null) return "—"
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`
}

/** "3 items" / "1 item" / "Empty" (EN) — "3 elementos" / "1 elemento" / "Vacía" (ES). */
export function formatItemCount(n: number, locale: AppLocale = "en"): string {
  if (locale === "es") {
    if (n === 0) return "Vacía"
    return `${n} elemento${n === 1 ? "" : "s"}`
  }
  if (n === 0) return "Empty"
  return `${n} item${n === 1 ? "" : "s"}`
}
