import { DatePickerValue } from "./types"

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
