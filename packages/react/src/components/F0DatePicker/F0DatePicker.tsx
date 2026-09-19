import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { InlineDismissReason } from "@/components/F0InputField"
import {
  NavigationGranularityKey,
  resolveGranularityDefinition,
} from "@/components/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { DatePickerPopup, isSameDatePickerValue } from "@/ui/DatePickerPopup"
import { DateInput } from "./components/DateInput"
import {
  DatePickerValue,
  F0DatePickerInlineProps,
  F0DatePickerProps,
} from "./types"

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

  // Normalize cleared values so blur does not emit another change.
  if (!range) {
    return undefined
  }

  return { value: range, granularity: value.granularity }
}

export function F0DatePicker(props: F0DatePickerProps) {
  const {
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
    variant,
    editing = false,
    onDismiss,
    ...inputProps
  } = props as F0DatePickerInlineProps

  const inline = variant === "inline"
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    () => toSafeDatePickerRange(value, granularities[0] ?? "day")
  )
  const [localOpen, setLocalOpen] = useState(open)

  useEffect(() => {
    setLocalOpen(open)
  }, [open])

  // The parent controls the inline calendar through editing.
  const isOpen = inline ? editing : localOpen

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

  const scheduledRef = useRef(false)
  const reasonRef = useRef<InlineDismissReason>("popupClose")
  const escapePressedRef = useRef(false)
  const closeReportedRef = useRef(false)

  /** Wait for capture listeners to finish before resolving one dismissal per gesture. */
  const reportDismiss = (reason: InlineDismissReason) => {
    if (reason === "escape") {
      escapePressedRef.current = true
    } else {
      reasonRef.current = reason
    }

    if (scheduledRef.current) {
      return
    }
    scheduledRef.current = true

    queueMicrotask(() => {
      const resolved = escapePressedRef.current ? "escape" : reasonRef.current
      scheduledRef.current = false
      escapePressedRef.current = false
      reasonRef.current = "popupClose"
      // Consume the blur caused by a non-Escape dismissal.
      closeReportedRef.current = resolved !== "escape"
      onDismiss?.(resolved)
    })
  }

  const handlePickerOpenChange = (
    open: boolean,
    reason: InlineDismissReason = "popupClose"
  ) => {
    if (inline) {
      if (!open) {
        reportDismiss(reason)
      }
      return
    }

    setLocalOpen(open)
    inputProps.onOpenChange?.(open)
  }

  const reportDismissRef = useRef(reportDismiss)
  useEffect(() => {
    reportDismissRef.current = reportDismiss
  })

  // Calendar focus bypasses the input, so listen for Escape on document.
  useEffect(() => {
    if (!inline || !editing) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        reportDismissRef.current("escape")
      }
    }
    document.addEventListener("keydown", handleKeyDown, true)
    return () => document.removeEventListener("keydown", handleKeyDown, true)
  }, [inline, editing])

  /** An outside click reports popupClose instead of a second blur. */
  const handleInputBlur = () => {
    if (!inline) {
      return
    }
    requestAnimationFrame(() => {
      if (closeReportedRef.current) {
        closeReportedRef.current = false
        return
      }
      const active = document.activeElement
      const insidePicker =
        active === inputRef.current ||
        (active instanceof Element &&
          active.closest("[data-radix-popper-content-wrapper]") !== null)
      if (insidePicker) {
        return
      }
      onDismiss?.("blur")
    })
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
      handlePickerOpenChange(false, "commit")
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

  useEffect(() => {
    escapePressedRef.current = false
    closeReportedRef.current = false
  }, [editing])

  const dateInput = (
    <DateInput
      ref={inputRef}
      {...inputProps}
      value={localValue}
      granularity={granularity}
      onDateChange={handleChangeDate}
      showIcon={showIcon}
      displayFormat={displayFormat}
      variant={variant}
      editing={editing}
      onInputBlur={handleInputBlur}
    />
  )

  // Static values must not receive popover trigger ARIA attributes.
  if (inline && !editing) {
    return dateInput
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
      {dateInput}
    </DatePickerPopup>
  )
}
