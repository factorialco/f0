import { granularityDefinitions } from "@/experimental/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { DatePickerPopup, isSameDatePickerValue } from "@/ui/DatePickerPopup"
import { useEffect, useMemo, useRef, useState } from "react"
import { DateInput } from "./components/DateInput"
import { DatePickerValue, F0DatePickerProps } from "./types"

export function F0DatePicker({
  onChange,
  value,
  presets = [],
  granularities = ["day"],
  minDate,
  maxDate,
  open = false,
  ...inputProps
}: F0DatePickerProps) {
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>()
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const i18n = useI18n()

  const defaultGranularity = useMemo(() => {
    return granularities[0] ?? "day"
  }, [granularities])

  const granularity = useMemo(() => {
    const granularityKey = localValue?.granularity || defaultGranularity
    if (!granularityDefinitions[granularityKey]) {
      throw new Error(`Invalid granularity ${granularityKey}`)
    }
    return {
      ...granularityDefinitions[granularityKey],
      key: granularityKey,
    }
  }, [localValue?.granularity, defaultGranularity])

  useEffect(() => {
    if (!isSameDatePickerValue(localValue, value)) {
      setLocalValue(
        value
          ? {
              // Forces the value to the correct granularity
              value: granularity.toRange(value.value?.from ?? undefined),
              granularity: value.granularity,
            }
          : undefined
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to update the local value when the value changes
  }, [value, granularity])

  const handleSelect = (value: DatePickerValue | undefined) => {
    handleChangeDate(value)

    // If the granularity is not a range, close the popup
    if (granularity.calendarMode !== "range") {
      setIsOpen(false)
    }
  }

  const handleChangeDate = (value: DatePickerValue | undefined) => {
    setLocalValue(value)
    onChange?.(value, granularity.toString(value?.value, i18n))
  }

  const handlePickerOpenChange = (open: boolean) => {
    setIsOpen(open)
    inputProps.onOpenChange?.(open)
  }

  const availablePresets = useMemo(() => {
    return presets.filter((preset) =>
      granularities.includes(preset.granularity)
    )
  }, [presets, granularities])

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isOpen && inputRef.current) {
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <DatePickerPopup
      hideCalendarInput
      onSelect={handleSelect}
      value={localValue}
      presets={availablePresets}
      granularities={granularities}
      minDate={minDate}
      maxDate={maxDate}
      open={isOpen}
      onOpenChange={handlePickerOpenChange}
    >
      <DateInput
        ref={inputRef}
        {...inputProps}
        value={localValue}
        granularity={granularity}
        onDateChange={handleChangeDate}
      />
    </DatePickerPopup>
  )
}
