import { useEffect, useMemo, useState } from "react"

import { DataTestIdWrapper, WithDataTestIdProps } from "@/lib/data-testid"
import { useL10n } from "@/lib/providers/l10n"
import {
  DatePickerPopup,
  DatePickerPopupProps,
} from "@/ui/DatePickerPopup/DatePickerPopup"
import {
  isSameDatePickerValue,
  reviveDatePickerValue,
} from "@/ui/DatePickerPopup/utils"

import { getGranularityDefinitions } from "@/components/OneCalendar/granularities"
import {
  DateRange,
  DateRangeComplete,
  WeekStartDay,
} from "@/components/OneCalendar/types"
import { DatePickerTrigger } from "./components/DateNavigatorTrigger"
import { DatePickerValue } from "./types"

export interface OneDatePickerProps
  extends Omit<DatePickerPopupProps, "children">, WithDataTestIdProps {
  hideNavigation?: boolean
  hideGoToCurrent?: boolean
}

function _OneDateNavigator({
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
  dataTestId,
  ...props
}: OneDatePickerProps) {
  // A `value`/`defaultValue` restored from persisted storage (e.g. a
  // OneDataCollection `date-navigator` filter) arrives with `from`/`to` as
  // strings after its JSON round-trip. Revive them to `Date` at the boundary so
  // every downstream consumer — the equality check below, the trigger label,
  // granularity math — receives real `Date` objects.
  const revivedValue = useMemo(() => reviveDatePickerValue(value), [value])
  const revivedDefaultValue = useMemo(
    () => reviveDatePickerValue(defaultValue),
    [defaultValue]
  )

  const [localValue, setLocalValue] = useState<DatePickerValue | undefined>(
    revivedDefaultValue ?? revivedValue
  )

  useEffect(() => {
    if (isSameDatePickerValue(revivedValue, localValue)) {
      return
    }
    setLocalValue(revivedValue || revivedDefaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to update the local value when the value changes
  }, [revivedValue, revivedDefaultValue])

  const [compareToValue, setCompareToValue] = useState<
    DateRangeComplete | DateRangeComplete[] | undefined
  >()
  const [isOpen, setIsOpen] = useState(false)
  const l10n = useL10n()

  const effectiveWeekStartsOn =
    props.weekStartsOn ?? l10n.date?.weekStartsOn ?? WeekStartDay.Monday

  const granularityDefinition = useMemo(() => {
    const granularityKey = localValue?.granularity ?? "day"
    const definitions = getGranularityDefinitions(effectiveWeekStartsOn)
    return definitions[granularityKey]
  }, [localValue?.granularity, effectiveWeekStartsOn])

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
    <DataTestIdWrapper dataTestId={dataTestId}>
      <DatePickerPopup
        onSelect={handleSelect}
        value={localValue}
        defaultValue={revivedDefaultValue}
        presets={presets}
        granularities={granularities}
        minDate={props.minDate}
        maxDate={props.maxDate}
        open={isOpen}
        onOpenChange={setIsOpen}
        compareTo={compareTo}
        defaultCompareTo={defaultCompareTo}
        onCompareToChange={handleCompareToChange}
        weekStartsOn={effectiveWeekStartsOn}
        asChild
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
      </DatePickerPopup>
    </DataTestIdWrapper>
  )
}

export const OneDateNavigator = _OneDateNavigator
