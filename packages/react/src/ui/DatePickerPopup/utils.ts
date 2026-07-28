import { DatePickerValue } from "./types"

const coerceToDate = (value: Date | string | number): Date =>
  value instanceof Date ? value : new Date(value)

/**
 * Revives a `DatePickerValue` whose `from`/`to` may have been serialized to
 * strings before reaching us.
 *
 * The date range is typed as `Date` objects, but a value that has round-tripped
 * through `JSON.stringify`/`JSON.parse` — e.g. a `OneDataCollection`
 * `date-navigator` filter restored from persisted storage — arrives with
 * `from`/`to` as ISO strings. Downstream consumers (the equality check, the
 * trigger label, granularity math) all call `Date` methods such as
 * `.getTime()`, so a string `from` throws
 * `TypeError: from.getTime is not a function`.
 *
 * Returns the original reference untouched when the range is already made of
 * real `Date` objects (the common case), so this adds no re-render churn.
 */
export const reviveDatePickerValue = (
  value: DatePickerValue | undefined
): DatePickerValue | undefined => {
  if (!value?.value) {
    return value
  }
  const { from, to } = value.value as {
    from: Date | string | number
    to: Date | string | number
  }
  if (from instanceof Date && to instanceof Date) {
    return value
  }
  return {
    ...value,
    value: { from: coerceToDate(from), to: coerceToDate(to) },
  }
}

export const isSameDatePickerValue = (
  a: DatePickerValue | undefined,
  b: DatePickerValue | undefined
): boolean => {
  if (!a && !b) {
    return true
  }
  if (!a || !b) {
    return false
  }

  return (
    a.value?.from.getTime() === b.value?.from.getTime() &&
    a.value?.to.getTime() === b.value?.to.getTime() &&
    a.granularity === b.granularity
  )
}
