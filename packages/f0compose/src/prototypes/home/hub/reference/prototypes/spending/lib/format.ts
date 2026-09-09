import type { Language } from "../state"

const localeFor: Record<Language, string> = { en: "en-US", es: "es-ES" }

/**
 * Formats a money value the way the Spending list shows it: symbol adjacent to
 * the number (no space) and decimals only when the value isn't whole — e.g.
 * `€759`, `€174.50`. Mirrors the reference screen exactly.
 */
export function formatAmount(amount: number, currency: string): string {
  const symbol = currency === "EUR" ? "€" : `${currency} `
  const num = Number.isInteger(amount) ? String(amount) : amount.toFixed(2)
  return `${symbol}${num}`
}

/** Short numeric document date (e.g. "07/08/2026" / "08/07/2026"). */
export function formatDate(iso: string, language: Language): string {
  return new Intl.DateTimeFormat(localeFor[language], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(iso + "T00:00:00Z"))
}
