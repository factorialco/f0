/**
 * Natural-language date/time for the transcript. Fully localizable by design:
 * weekday/month/clock come from `Intl.DateTimeFormat`, and "Today"/"Yesterday"
 * come from the i18n `labels`. The `locale` is optional and defaults to the
 * runtime/browser locale (we intentionally don't thread an explicit one), so a
 * host that translates the labels and runs in the user's locale gets fully
 * natural output in any language.
 */
/** Labels the host's i18n provides — keeps these helpers pure/testable. */
export type NaturalTimeLabels = {
    today: string;
    yesterday: string;
};
/** Whole calendar days between two dates (0 = same day, 1 = yesterday…). */
export declare function calendarDaysApart(a: Date, b: Date): number;
/**
 * The wall clock in the reader's own convention: "22:14" in Spanish, "10:14 PM"
 * in US English.
 *
 * `timeStyle` — not `hour`/`minute` — so the locale decides everything,
 * including whether the hour is padded. Asking for a 2-digit hour forced
 * "01:53 PM" on a 12-hour locale, which no US reader writes.
 */
export declare function formatClock(date: Date, locale?: string): string;
/**
 * Relative day label: Today / Yesterday / weekday (within a week) / date.
 * Used as the day part of separators and statuses.
 */
export declare function formatRelativeDay(date: Date, now: Date, labels: NaturalTimeLabels, locale?: string): string;
/** Centered separator label, e.g. "Yesterday 22:14" or "Today 10:50". */
export declare function formatSeparator(date: Date, now: Date, labels: NaturalTimeLabels, locale?: string): string;
