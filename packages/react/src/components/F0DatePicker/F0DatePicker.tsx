import {
  GranularityDefinitionKey,
  granularityDefinitions,
} from "@/experimental/OneCalendar"
import { TranslationsType, useI18n } from "@/lib/providers/i18n"
import { DatePickerPopup } from "@/ui/DatePickerPopup"
import { useEffect, useMemo, useState } from "react"
import { DateInput } from "./components/DateInput"
import { DatePickerValue, F0DatePickerProps } from "./types"

const normalizeValue = (
  value: DatePickerValue | Date | string | undefined,
  granularityKey: GranularityDefinitionKey,
  i18n: TranslationsType
): DatePickerValue | undefined => {
  const granularity = granularityDefinitions[granularityKey]
  if (!granularity) {
    throw new Error(`Invalid granularity ${granularityKey}`)
  }

  if (value === undefined) {
    return undefined
  }
  if (value instanceof Date) {
    return {
      value: granularity.toRange(value),
      granularity: granularityKey,
    }
  }
  if (typeof value === "string") {
    return {
      value: granularity.toRange(
        granularity.fromString(value, i18n) ?? undefined
      ),
      granularity: granularityKey,
    }
  }
  return value
}

// Converts the value to a date or string depending on the value we get from
const denormalizeValue = (
  value: DatePickerValue | undefined,
  granularityKey: GranularityDefinitionKey,
  i18n: TranslationsType,
  denormalizationTarget: "date" | "string"
) => {
  if (!value) {
    return undefined
  }
  const granularity = granularityDefinitions[granularityKey]
  if (!granularity) {
    throw new Error(`Invalid granularity ${granularityKey}`)
  }
  if (denormalizationTarget === "date") {
    return value.value?.from
  }

  return granularity.toString(value.value, i18n)
}

export function F0DatePicker({
  onChange,
  value,
  presets = [],
  granularities = ["day"],
  minDate,
  maxDate,
  ...inputProps
}: F0DatePickerProps) {
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>()
  const [isOpen, _setIsOpen] = useState(false)

  const setIsOpen = (open: boolean) => {
    _setIsOpen(open)
    console.log("isOpen", open)
  }

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
    setLocalValue(normalizeValue(value, granularity.key, i18n))
  }, [value, granularity.key, i18n])

  const handleSelect = (value: DatePickerValue | undefined) => {
    handleChangeDate(value)
    setIsOpen(false)
  }

  const handleChangeDate = (value: DatePickerValue | undefined) => {
    setLocalValue(value)
    const denormalizedValue = denormalizeValue(
      value,
      granularity.key,
      i18n,
      value instanceof Date ? "date" : "string"
    )
    onChange?.(denormalizedValue, value)
  }

  const handlePickerOpenChange = (open: boolean) => {
    setIsOpen(open)
    inputProps.onOpenChange?.(open)
  }

  return (
    <>
      <DatePickerPopup
        hideCalendarInput
        onSelect={handleSelect}
        value={localValue}
        presets={presets}
        granularities={granularities}
        minDate={minDate}
        maxDate={maxDate}
        open={isOpen}
        onOpenChange={handlePickerOpenChange}
      >
        <DateInput
          {...inputProps}
          value={localValue}
          granularity={granularity}
          onDateChange={handleChangeDate}
          open={isOpen}
        />
      </DatePickerPopup>
    </>
  )
}
