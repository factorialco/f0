import {
  OneDatePickerPopup,
  OneDatePickerPopupProps,
} from "@/ui/DatePickerPopup/OneDatePickerPopup"
import { useEffect, useMemo, useState } from "react"
import { granularityDefinitions } from "../OneCalendar"
import { DateRange, DateRangeComplete } from "../OneCalendar/types"
import { DatePickerTrigger } from "./components/DateNavigatorTrigger"
import { DatePickerValue } from "./types"

export interface OneDatePickerProps
  extends Omit<OneDatePickerPopupProps, "children"> {
  hideNavigation?: boolean
  hideGoToCurrent?: boolean
}

export function OneDateNavigator({
  onSelect,
  defaultValue,
  presets = [],
  granularities = ["day"],
  hideNavigation = false,
  hideGoToCurrent = false,
  compareTo,
  defaultCompareTo,
  onCompareToChange,
  value,
  ...props
}: OneDatePickerProps) {
  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    defaultValue ?? value
  )

  useEffect(() => {
    console.log("value changed", value)
    setLocalValue(value)
  }, [value])

  const [compareToValue, setCompareToValue] = useState<
    DateRangeComplete | DateRangeComplete[] | undefined
  >()
  const [isOpen, setIsOpen] = useState(false)

  const granularityDefinition = useMemo(() => {
    return granularityDefinitions[localValue?.granularity ?? "day"]
  }, [localValue?.granularity])

  const handleSelect = (value: DatePickerValue | undefined) => {
    setLocalValue(value)
    onSelect?.(value)
  }

  const handleCompareToChange = (
    compareTo: DateRangeComplete | DateRangeComplete[] | undefined
  ) => {
    setCompareToValue(compareTo)
    onCompareToChange?.(compareTo)
  }

  const handleNavigationChange = (date: DateRange) => {
    handleSelect({
      value: granularityDefinition.toRange(date),
      granularity: localValue?.granularity ?? "day",
    })
  }

  return (
    <OneDatePickerPopup
      onSelect={handleSelect}
      value={localValue}
      defaultValue={defaultValue}
      presets={presets}
      granularities={granularities}
      minDate={props.minDate}
      maxDate={props.maxDate}
      open={isOpen}
      onOpenChange={setIsOpen}
      compareTo={compareTo}
      defaultCompareTo={defaultCompareTo}
      onCompareToChange={handleCompareToChange}
    >
      <DatePickerTrigger
        value={localValue}
        compareToValue={compareToValue}
        highlighted={isOpen}
        navigation={!hideNavigation}
        onDateChange={handleNavigationChange}
        granularity={granularityDefinition}
        minDate={props.minDate}
        maxDate={props.maxDate}
        disabled={props.disabled}
        hideGoToCurrent={hideGoToCurrent}
        onClick={() => setIsOpen(true)}
      />
    </OneDatePickerPopup>
  )
}
