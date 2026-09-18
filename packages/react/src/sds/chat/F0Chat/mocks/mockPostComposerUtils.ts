import { type DatePickerValue } from "@/components/F0DatePicker/types"

/**
 * A single day as `F0DatePicker` wants it.
 *
 * The picker speaks RANGES at a granularity, because that is what it is for;
 * a post's date is one day, so the range is that day from its first instant to
 * its last. The conversion lives here rather than inline so the two places that
 * need it can't disagree about where the day ends.
 */
export const asDayValue = (date: Date): DatePickerValue => {
  const from = new Date(date)
  from.setHours(0, 0, 0, 0)
  const to = new Date(date)
  to.setHours(23, 59, 59, 999)
  return { value: { from, to }, granularity: "day" }
}

/** The day the picker came back with, or nothing when it was cleared. */
export const dayValueOf = (value: DatePickerValue | undefined): Date | null =>
  value?.value?.from ? new Date(value.value.from) : null

/** `HH:mm` for a time input, which speaks only that. */
export const timeOf = (date: Date): string =>
  `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`

/**
 * A date picker and a time input over ONE timestamp.
 *
 * They are two controls because a single datetime field is miserable to use,
 * but the post has one `startsAt` — so every edit to either recombines both. A
 * blank or malformed time keeps the date's own hour rather than snapping to
 * midnight, which would silently move an evening event to the small hours.
 */
export const combineDateAndTime = (date: Date, time: string): string => {
  const [hours, minutes] = time.split(":").map(Number)
  const combined = new Date(date)
  if (Number.isFinite(hours) && Number.isFinite(minutes)) {
    combined.setHours(hours, minutes, 0, 0)
  }
  return combined.toISOString()
}

/**
 * The reader's own timezone, abbreviated ("CET", "GMT+2").
 *
 * Shown beside the schedule fields so "18:30" is unambiguous. Falls back to the
 * IANA name's last segment where the runtime has no short name for it.
 */
export const timezoneAbbreviation = (): string => {
  try {
    const parts = new Intl.DateTimeFormat(undefined, {
      timeZoneName: "short",
    }).formatToParts(new Date())
    return (
      parts.find((part) => part.type === "timeZoneName")?.value ??
      Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop() ??
      ""
    )
  } catch {
    return ""
  }
}

/**
 * The strip of HTML tags used to tell "the editor is empty" from "the editor
 * contains an empty paragraph", which is what it holds after you type and
 * delete. Without this, a body of `<p></p>` passes a `length > 0` check.
 */
export const htmlIsEmpty = (html: string): boolean =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .trim().length === 0

/**
 * Whether a title carries markup. The product rejects it outright rather than
 * escaping it — a title is one line of text, and anything else arrived by
 * accident (a paste from a rich editor) or on purpose (an injection attempt).
 */
export const containsHtml = (value: string): boolean =>
  /<\/?[a-z][\s\S]*>/i.test(value)
