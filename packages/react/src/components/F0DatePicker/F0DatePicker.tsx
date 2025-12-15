import { GranularityDefinitionKey, granularityDefinitions } from "@/experimental/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { DatePickerPopup, isSameDatePickerValue } from "@/ui/DatePickerPopup"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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

  const getGranularity = useCallback(
    (granularityKey: GranularityDefinitionKey | undefined) => {
      const key = granularityKey || defaultGranularity
      if (!granularityDefinitions[key]) {
        throw new Error(`Invalid granularity ${key}`)
      }
      return {
        ...granularityDefinitions[key],
        key,
      }
    },
    [defaultGranularity]
  )

  /**
   * Returns a value range in the correct granularity
   */
  const toSafeRange = useCallback(
    (value: DatePickerValue | undefined) => {
      if (!value) {
        return undefined
      }

      const granularity = getGranularity(value?.granularity)

      return value
        ? {
            value: granularity.toRange(
              granularity.calendarMode === "range" ? value.value : (value.value?.from ?? undefined)
            ),
            granularity: value.granularity,
          }
        : undefined
    },
    [getGranularity]
  )

  const granularity = useMemo(() => {
    return getGranularity(localValue?.granularity)
  }, [localValue?.granularity, getGranularity])

  useEffect(() => {
    const safeValue = toSafeRange(value)
    if (!isSameDatePickerValue(localValue, safeValue)) {
      setLocalValue(safeValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to update the local value when the value changes
  }, [value])

  const handleSelect = (value: DatePickerValue | undefined) => {
    const safeValue = toSafeRange(value)
    const newGranularity = getGranularity(safeValue?.granularity)
    const shouldClose =
      newGranularity.calendarMode !== "range" &&
      safeValue?.granularity === localValue?.granularity &&
      !isSameDatePickerValue(safeValue, localValue)

    handleChangeDate(safeValue)

    // If the granularity is not a range, close the popup
    if (shouldClose) {
      setIsOpen(false)
    }
  }

  const handleChangeDate = (value: DatePickerValue | undefined) => {
    const safeValue = toSafeRange(value)
    setLocalValue(safeValue)
    if (!isSameDatePickerValue(safeValue, localValue)) {
      const granularity = getGranularity(safeValue?.granularity)
      onChange?.(safeValue, granularity.toString(safeValue?.value, i18n))
    }
  }

  const handlePickerOpenChange = (open: boolean) => {
    setIsOpen(open)
    inputProps.onOpenChange?.(open)
  }

  const availablePresets = useMemo(() => {
    return presets.filter((preset) => granularities.includes(preset.granularity))
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
      asChild
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
