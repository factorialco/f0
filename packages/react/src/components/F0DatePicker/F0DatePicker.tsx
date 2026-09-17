import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  NavigationGranularityKey,
  resolveGranularityDefinition,
} from "@/components/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { DatePickerPopup, isSameDatePickerValue } from "@/ui/DatePickerPopup"
import { DateInput } from "./components/DateInput"
import { DatePickerValue, F0DatePickerProps } from "./types"

function getGranularityDefinition(
  granularityKey: NavigationGranularityKey | undefined,
  defaultGranularity: NavigationGranularityKey
) {
  const key = granularityKey || defaultGranularity
  return {
    ...resolveGranularityDefinition(key),
    key,
  }
}

/**
 * Returns a value range in the correct granularity. Lives at module level so
 * the initial state can be normalised the same way the value effect does.
 */
function toSafeDatePickerRange(
  value: DatePickerValue | undefined,
  defaultGranularity: NavigationGranularityKey
): DatePickerValue | undefined {
  if (!value) {
    return undefined
  }

  const granularity = getGranularityDefinition(
    value.granularity,
    defaultGranularity
  )
  const range = granularity.toRange(
    granularity.calendarMode === "range"
      ? value.value
      : (value.value?.from ?? undefined)
  )

  // Normalize { value: undefined } to undefined so isSameDatePickerValue
  // correctly detects "no change" on subsequent blur events after a clear.
  if (!range) {
    return undefined
  }

  return { value: range, granularity: value.granularity }
}

export function F0DatePicker({
  onChange,
  value,
  presets = [],
  granularities = ["day"],
  minDate,
  maxDate,
  open = false,
  showIcon = true,
  displayFormat,
  selectOnCellOnly,
  ...inputProps
}: F0DatePickerProps) {
  // Seeded from the prop so the first paint already carries the value: an empty
  // first frame flashes F0InputField's placeholder over it. Normalised on the
  // way in, or the calendar reads its own first selection as a change.
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    () => toSafeDatePickerRange(value, granularities[0] ?? "day")
  )
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const i18n = useI18n()

  const defaultGranularity = useMemo(() => {
    return granularities[0] ?? "day"
  }, [granularities])

  const getGranularity = useCallback(
    (granularityKey: NavigationGranularityKey | undefined) =>
      getGranularityDefinition(granularityKey, defaultGranularity),
    [defaultGranularity]
  )

  const toSafeRange = useCallback(
    (value: DatePickerValue | undefined) =>
      toSafeDatePickerRange(value, defaultGranularity),
    [defaultGranularity]
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

  const handlePickerOpenChange = (open: boolean) => {
    setIsOpen(open)
    inputProps.onOpenChange?.(open)
  }

  const handleSelect = (value: DatePickerValue | undefined) => {
    const safeValue = toSafeRange(value)
    const newGranularity = getGranularity(safeValue?.granularity)
    const shouldClose =
      newGranularity.calendarMode !== "range" &&
      !isSameDatePickerValue(safeValue, localValue)

    handleChangeDate(safeValue)

    // If the granularity is not a range, close the popup
    if (shouldClose) {
      handlePickerOpenChange(false)
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
      selectOnCellOnly={selectOnCellOnly}
      asChild
    >
      <DateInput
        ref={inputRef}
        {...inputProps}
        value={localValue}
        granularity={granularity}
        onDateChange={handleChangeDate}
        showIcon={showIcon}
        displayFormat={displayFormat}
      />
    </DatePickerPopup>
  )
}
