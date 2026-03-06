import { format, isValid, parseISO } from "date-fns"
import { useMemo } from "react"

import type { DatePickerValue } from "@/components/F0DatePicker/types"

import { F0DatePicker } from "@/components/F0DatePicker"
import { RecordType } from "@/hooks/datasource/types/records.typings"

import type { EditableCellProps } from "."

import { BaseCell } from "./BaseCell"

const ISO_FORMAT = "yyyy-MM-dd"

export function DateCell<R extends RecordType>({
  editableColumn,
  value,
  error,
  loading,
  isLastColumn,
  onChange,
}: EditableCellProps<R>) {
  const datePickerValue = useMemo<DatePickerValue | undefined>(() => {
    if (!value) return undefined
    const date = parseISO(value)
    if (!isValid(date)) return undefined
    return { granularity: "day", value: { from: date, to: date } }
  }, [value])

  const handleChange = (selected: DatePickerValue | undefined) => {
    const date = selected?.value?.from
    const newISOValue = date ? format(date, ISO_FORMAT) : ""
    if (newISOValue !== value) {
      onChange(newISOValue)
    }
  }

  return (
    <BaseCell showRightBorder={!isLastColumn}>
      <F0DatePicker
        label={editableColumn.label}
        hideLabel
        hideIcon
        transparent
        displayFormat="default"
        value={datePickerValue}
        onChange={handleChange}
        error={error}
        loading={loading}
      />
    </BaseCell>
  )
}
