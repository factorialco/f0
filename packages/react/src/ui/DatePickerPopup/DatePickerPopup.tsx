import { F0Button } from "@/components/F0Button"
import {
  GranularityDefinitionKey,
  OneCalendar,
  granularityDefinitions,
} from "@/experimental/OneCalendar"
import { DateRange, DateRangeComplete } from "@/experimental/OneCalendar/types"
import { ChevronLeft } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useMemo, useState } from "react"
import { Select } from "../../experimental/Forms/Fields/Select"
import { getCompareToValue } from "./compareTo"
import { GranularitySelector } from "./components/GranularitySelector"
import { PresetList } from "./components/PresetList"
import { DatePickerValue, DatePreset } from "./types"
import { isSameDatePickerValue } from "./utils"

export type CompareToDefKey = string
export type CompareToDef = {
  label: string
  value:
    | { delta: number; units: GranularityDefinitionKey }
    | ((value: DateRangeComplete) => DateRangeComplete | DateRangeComplete[])
}

export type DatePickerCompareTo = Record<
  GranularityDefinitionKey,
  CompareToDef[]
>

export interface DatePickerPopupProps {
  onSelect?: (value: DatePickerValue | undefined) => void
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  presets?: DatePreset[]
  granularities?: GranularityDefinitionKey[]
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  hideGoToCurrent?: boolean
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  compareTo?: DatePickerCompareTo
  defaultCompareTo?: CompareToDefKey
  hideCalendarInput?: boolean
  asChild?: boolean
  onCompareToChange?: (
    compareTo: DateRangeComplete | DateRangeComplete[] | undefined
  ) => void
}

const PRESET_CUSTOM = "__custom__"

export function DatePickerPopup({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
  children,
  compareTo,
  defaultCompareTo,
  onCompareToChange,
  hideCalendarInput,
  value,
  asChild,
  ...props
}: DatePickerPopupProps) {
  const i18n = useI18n()
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    value || defaultValue
  )

  useEffect(() => {
    if (!isSameDatePickerValue(value, localValue)) {
      setLocalValue(value || defaultValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue])

  const localGranularity = useMemo(
    () => localValue?.granularity ?? "day",
    [localValue?.granularity]
  )

  const granularityDefinition = useMemo(() => {
    return granularityDefinitions[localGranularity]
  }, [localGranularity])

  const calendarMode = useMemo(() => {
    return granularityDefinitions[localGranularity].calendarMode || "single"
  }, [localGranularity])

  const handleSelectDate = (date: Date | DateRange | null) => {
    handleSelect({
      value: granularityDefinition.toRange(date ?? undefined),
      granularity: localGranularity,
    })
  }

  const handleSelect = (value: DatePickerValue) => {
    if (isSameDatePickerValue(value, localValue)) {
      return
    }

    setLocalValue(value)
    onSelect?.(value)
  }

  const handlePresetSelect = (presetId: string) => {
    setCustomRangeMode(presetId === PRESET_CUSTOM)

    const selectedPreset = presetId ? presets[+presetId] : undefined
    if (!selectedPreset) return

    handleSelect({
      value: granularityDefinitions[selectedPreset.granularity].toRange(
        typeof selectedPreset.value === "function"
          ? selectedPreset.value()
          : selectedPreset.value
      ),
      granularity: selectedPreset.granularity,
    })
    if (presetId !== PRESET_CUSTOM) {
      props.onOpenChange?.(false)
    }
  }

  const [customRangeMode, setCustomRangeMode] = useState(false)

  const handleSelectGranularity = (granularity: GranularityDefinitionKey) => {
    handleSelect({
      value: localValue?.value,
      granularity,
    })
  }

  const showPresets = useMemo(
    () => presets.length > 0 && !customRangeMode,
    [presets, customRangeMode]
  )

  const handleBackToPresets = () => {
    setCustomRangeMode(false)
  }

  const calendarView = useMemo(
    () => granularityDefinition.calendarView || "day",
    [granularityDefinition]
  )

  // Compare to
  const [selectedCompareTo, setSelectedCompareTo] = useState<
    string | undefined
  >(defaultCompareTo || undefined)

  const compareToOptions = useMemo(() => {
    const granularityCompareTo = (compareTo ?? {})[localGranularity] || []

    if (!localValue?.value) {
      return []
    }

    const currentValue = localValue.value

    const res = granularityCompareTo.map((compare, index) => {
      const value =
        typeof compare.value === "function"
          ? compare.value(granularityDefinition.toRange(currentValue))
          : getCompareToValue(
              granularityDefinition.toRange(currentValue),
              compare.value.delta,
              compare.value.units
            )

      const description = Array.isArray(value)
        ? value.map((v) => granularityDefinition.toString(v, i18n)).join(", ")
        : granularityDefinition.toString(value, i18n)

      return {
        label: compare.label,
        value: (index + 1).toString(), // This leaves index 0 spot vacant for the 'none' option.
        description,
        dateValue: value,
      }
    })

    if (res.length === 0) {
      return []
    }

    return [
      {
        label: i18n.date.none,
        value: "0",
        description: "",
        dateValue: undefined,
      },
      ...res,
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compareTo, localValue, granularityDefinition, localGranularity])

  useEffect(() => {
    setSelectedCompareTo(defaultCompareTo || "0")
  }, [localGranularity, defaultCompareTo])

  const handleCompareToChange = (value: string) => {
    setSelectedCompareTo(value)
  }

  // Update the compare to value when the selected compare to changes
  // Also when the local value changes to emit the new compare to date
  useEffect(() => {
    onCompareToChange?.(
      selectedCompareTo
        ? compareToOptions[+selectedCompareTo]?.dateValue
        : undefined
    )
  }, [selectedCompareTo, onCompareToChange, compareToOptions])

  return (
    <Popover open={props.open} onOpenChange={props.onOpenChange}>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="w-full overflow-auto" align="start">
        {showPresets ? (
          <PresetList
            presets={presets}
            date={localValue}
            onSelect={handlePresetSelect}
          />
        ) : (
          <div className="flex gap-4">
            {(presets.length > 0 || granularities.length > 1) && (
              <div>
                {presets.length > 0 && (
                  <F0Button
                    icon={ChevronLeft}
                    variant="neutral"
                    size="sm"
                    hideLabel
                    label="Back"
                    onClick={handleBackToPresets}
                  />
                )}
                {granularities.length > 1 && (
                  <GranularitySelector
                    granularities={granularities}
                    value={localGranularity}
                    onChange={handleSelectGranularity}
                  />
                )}
              </div>
            )}
            <div className="min-w-[300px] flex-1">
              <OneCalendar
                showInput={!hideCalendarInput}
                mode={calendarMode}
                view={calendarView}
                onSelect={handleSelectDate}
                defaultSelected={localValue?.value}
                minDate={props.minDate}
                maxDate={props.maxDate}
              />
              {compareToOptions.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                  <div className="text-gray-500 text-sm">
                    {i18n.date.compareTo}
                  </div>
                  <Select
                    label={i18n.date.compareTo}
                    hideLabel
                    placeholder={i18n.date.compareTo}
                    options={compareToOptions.map((option) => ({
                      label: option.label,
                      value: option.value,
                      description: option.description ?? "",
                    }))}
                    onChange={handleCompareToChange}
                    value={selectedCompareTo}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
