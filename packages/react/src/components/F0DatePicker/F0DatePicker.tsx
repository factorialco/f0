import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { InputFieldProps } from "@/components/F0InputField"
import {
  NavigationGranularityKey,
  resolveGranularityDefinition,
} from "@/components/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { DatePickerPopup, isSameDatePickerValue } from "@/ui/DatePickerPopup"
import { DateDisplay } from "./components/DateDisplay"
import { DateInput } from "./components/DateInput"
import {
  DatePickerMode,
  DatePickerValue,
  F0DatePickerProps,
  F0DatePickerSharedProps,
} from "./types"
import { InputFieldInheritedProps } from "./types.internal"

/**
 * The flat shape the implementation reads. The public union is what callers are
 * held to; internally both variants are one component, so the `never`s that
 * keep the API honest would only get in the way here.
 */
type F0DatePickerImplProps = F0DatePickerSharedProps & {
  variant?: "default" | "inline"
  open?: boolean
  showIcon?: boolean
  onRequestChange?: () => void
  onModeChange?: (mode: DatePickerMode) => void
  copyable?: boolean
} & Pick<InputFieldProps<string>, InputFieldInheritedProps>

export function F0DatePicker(props: F0DatePickerProps) {
  const {
    onChange,
    value,
    presets = [],
    granularities = ["day"],
    minDate,
    maxDate,
    displayFormat,
    selectOnCellOnly,
    variant = "default",
    onModeChange,
    onRequestChange,
    copyable,
    open = false,
    showIcon = true,
    ...inputProps
  } = props as F0DatePickerImplProps

  const isInline = variant === "inline"

  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>()
  const [isOpen, setIsOpen] = useState(open)
  const [isReading, setIsReading] = useState(isInline)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    setIsReading(isInline)
  }, [isInline])

  // Reading is where an inline picker lives: editing is a detour that lasts as
  // long as the popup, so closing it puts the date back to text.
  const closePicker = useCallback(() => {
    setIsOpen(false)
    if (isInline) {
      setIsReading(true)
      onModeChange?.("read")
    }
  }, [isInline, onModeChange])

  const startEditing = useCallback(() => {
    setIsReading(false)
    onModeChange?.("edit")
    setIsOpen(true)
  }, [onModeChange])

  /** A date read as text is numeric (dd/MM/yyyy), and stays numeric while edited. */
  const resolvedDisplayFormat =
    displayFormat ?? (isInline ? "default" : undefined)

  const i18n = useI18n()

  const defaultGranularity = useMemo(() => {
    return granularities[0] ?? "day"
  }, [granularities])

  const getGranularity = useCallback(
    (granularityKey: NavigationGranularityKey | undefined) => {
      const key = granularityKey || defaultGranularity
      return {
        ...resolveGranularityDefinition(key),
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

      const granularity = getGranularity(value.granularity)
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
      !isSameDatePickerValue(safeValue, localValue)

    handleChangeDate(safeValue)

    // If the granularity is not a range, close the popup
    if (shouldClose) {
      closePicker()
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
    if (open) {
      setIsOpen(true)
    } else {
      closePicker()
    }
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

  if (isInline && isReading) {
    return (
      <DateDisplay
        label={inputProps.label}
        placeholder={inputProps.placeholder}
        size={inputProps.size}
        readonly={inputProps.readonly}
        error={inputProps.error}
        status={inputProps.status}
        hint={inputProps.hint}
        value={granularity.toString(
          localValue?.value,
          i18n,
          resolvedDisplayFormat ?? "default"
        )}
        copyable={copyable}
        onEdit={startEditing}
        onRequestChange={onRequestChange}
      />
    )
  }

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
        hideLabel={isInline ? true : inputProps.hideLabel}
        value={localValue}
        granularity={granularity}
        onDateChange={handleChangeDate}
        showIcon={showIcon}
        displayFormat={resolvedDisplayFormat}
      />
    </DatePickerPopup>
  )
}
