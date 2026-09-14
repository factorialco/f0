import { isAfter, isBefore } from "date-fns"
import { DateRange } from "../types"

/** A selection is a range when it carries either end. */
export const isDateRange = (value: unknown): value is DateRange => {
  return Boolean(
    value && typeof value === "object" && ("from" in value || "to" in value)
  )
}

/**
 * The range a click on a period cell commits, shared by the month, quarter,
 * half-year and year views.
 *
 * Three cases: with no range open the click opens one; clicking the period the
 * open end already sits in closes the range on that period alone; anything
 * else spans the outer edges of the two periods.
 *
 * `periodRangeOf` is what keeps this granularity-agnostic — it maps a date to
 * the period containing it, so "the same period" is "the same period start".
 */
export function rangeAfterPeriodClick({
  selected,
  clicked,
  periodRangeOf,
}: {
  selected: Date | DateRange | null | undefined
  /** The period that was clicked. */
  clicked: DateRange
  periodRangeOf: (date: Date) => DateRange
}): DateRange {
  if (!selected || !isDateRange(selected) || !selected.from || selected.to) {
    return { from: clicked.from, to: undefined }
  }

  const open = periodRangeOf(selected.from)

  if (open.from.getTime() === clicked.from.getTime()) {
    return { from: clicked.from, to: clicked.to }
  }

  return {
    from: isBefore(open.from, clicked.from) ? open.from : clicked.from,
    to: isAfter(open.to!, clicked.to!) ? open.to : clicked.to,
  }
}
