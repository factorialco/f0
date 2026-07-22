import { format, isValid, parseISO } from "date-fns"
import { useMemo } from "react"

import type { DatePickerValue } from "@/components/F0DatePicker/types"

import { F0DatePicker } from "@/components/F0DatePicker"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { cn } from "@/lib/utils"

import type { EditableCellProps } from "."

import { BaseCell } from "./BaseCell"

const ISO_FORMAT = "yyyy-MM-dd"

export function DateCell<R extends RecordType>({
  editableColumn,
  value,
  inputPlaceholder,
  error,
  loading,
  isLastColumn,
  onChange,
  hint,
}: EditableCellProps<R>) {
  const dateConfig = editableColumn.dateConfig

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
    <BaseCell
      showRightBorder={!isLastColumn}
      error={error}
      hint={hint}
      cursor="pointer"
    >
      <div
        className={cn(
          "flex w-full min-w-0 items-center",
          editableColumn.align === "right" && "justify-end"
        )}
      >
        <F0DatePicker
          className={cn(
            "[&_input]:!py-0",
            // The cell is taller (48px) than a standalone input, so the icon's
            // fixed top offset no longer centers it — pin it to the full height
            // and let its auto margins center it vertically.
            "[&_[data-slot='icon']]:!inset-y-0",
            "[&_[data-slot='placeholder']]:!flex",
            "[&_[data-slot='placeholder']]:!items-center",
            "[&_[data-slot='placeholder']]:!py-0",
            // The placeholder is absolutely positioned with no right edge, so
            // bound it to the cell width; only then does truncate clip the
            // text instead of letting it spill past the column.
            "[&_[data-slot='placeholder']]:!right-0",
            "[&_[data-slot='placeholder']]:!truncate"
          )}
          placeholder={inputPlaceholder ?? editableColumn.inputPlaceholder}
          label={editableColumn.label}
          hideLabel
          transparent
          displayFormat="default"
          value={datePickerValue}
          onChange={handleChange}
          loading={loading}
          minDate={dateConfig?.minDate}
          maxDate={dateConfig?.maxDate}
        />
      </div>
    </BaseCell>
  )
}
