import { useContext, useEffect, useMemo, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Select } from "@/components/F0Select"
import { OneCalendar } from "@/components/OneCalendar"
import {
  DatePeriodsDefinition,
  getGranularityDefinitions,
  GranularityDefinitionKey,
  NavigationGranularityKey,
} from "@/components/OneCalendar/granularities"
import {
  DateRange,
  DateRangeComplete,
  WeekStartDay,
  WeekStartsOn,
} from "@/components/OneCalendar/types"
import { ChevronLeft } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { F0DialogContext } from "@/patterns/F0Dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { getCompareToValue } from "./compareTo"
import { createCalendarDismissalHandlers } from "./dismissal"
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

export type DatePickerCompareTo = Partial<
  Record<NavigationGranularityKey, CompareToDef[]>
>

export interface DatePickerPopupProps {
  onSelect?: (value: DatePickerValue | undefined) => void
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  presets?: DatePreset[]
  granularities?: NavigationGranularityKey[]
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
  weekStartsOn?: WeekStartsOn
  /** When true, switching granularity only changes the view; selection and close happen only on a cell click. Default false. */
  selectOnCellOnly?: boolean
  /**
   * Consumer-defined ranges (payroll cycles, academic terms…) offered as an
   * extra entry in the granularity selector. Its `label` names that entry.
   */
  periods?: DatePeriodsDefinition
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
  weekStartsOn,
  selectOnCellOnly = false,
  periods,
  ...props
}: DatePickerPopupProps) {
  const i18n = useI18n()
  const l10n = useL10n()
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    value || defaultValue
  )

  const effectiveWeekStartsOn =
    weekStartsOn ?? l10n.date?.weekStartsOn ?? WeekStartDay.Monday

  // The calendar's year/month dropdowns are selects that portal into the dialog's
  // container — a stacking context. A calendar left in `document.body` would paint over
  // that subtree and cover the dropdowns it owns, so share the container instead.
  // Side panels (left/right) stay in body to prevent clipping.
  const dialogContext = useContext(F0DialogContext)
  const shouldUseDialogContainer =
    dialogContext.portalContainer &&
    (dialogContext.position === "center" ||
      dialogContext.position === "fullscreen")
  const portalContainer = shouldUseDialogContainer
    ? dialogContext.portalContainer
    : undefined

  const contentRef = useRef<HTMLDivElement>(null)
  const dismissalHandlers = useMemo(
    () => createCalendarDismissalHandlers(() => contentRef.current),
    []
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

  const definitions = useMemo(
    () =>
      getGranularityDefinitions({
        weekStartsOn: effectiveWeekStartsOn,
        periods,
      }),
    [effectiveWeekStartsOn, periods]
  )

  const granularityDefinition = useMemo(
    () => definitions[localGranularity],
    [definitions, localGranularity]
  )

  // Supplying periods is what makes them selectable; listing the key in
  // `granularities` only controls where the entry sits in the selector. Tying
  // the entry to the data means the selector can never offer a periods entry
  // with nothing behind it.
  const granularityOptions = useMemo(
    () =>
      periods && !granularities.includes("periods")
        ? [...granularities, "periods" as const]
        : granularities,
    [granularities, periods]
  )

  const calendarMode = useMemo(() => {
    return granularityDefinition.calendarMode || "single"
  }, [granularityDefinition])

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
      value: definitions[selectedPreset.granularity].toRange(
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

  const handleSelectGranularity = (granularity: NavigationGranularityKey) => {
    // View-only: switch granularity without emitting or closing.
    if (selectOnCellOnly) {
      setLocalValue((prev) =>
        prev ? { ...prev, granularity } : { value: undefined, granularity }
      )
      return
    }
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
      <PopoverContent
        ref={contentRef}
        className="w-full overflow-auto"
        align="start"
        container={portalContainer}
        {...dismissalHandlers}
      >
        {showPresets ? (
          <PresetList
            presets={presets}
            date={localValue}
            onSelect={handlePresetSelect}
          />
        ) : (
          <div className="flex gap-4">
            {(presets.length > 0 || granularityOptions.length > 1) && (
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
                {granularityOptions.length > 1 && (
                  <GranularitySelector
                    granularities={granularityOptions}
                    value={localGranularity}
                    onChange={handleSelectGranularity}
                    definitions={definitions}
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
                weekStartsOn={effectiveWeekStartsOn}
                selectOnCellOnly={selectOnCellOnly}
                periods={periods}
              />
              {compareToOptions.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                  <div className="text-gray-500 text-sm">
                    {i18n.date.compareTo}
                  </div>
                  <F0Select
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
