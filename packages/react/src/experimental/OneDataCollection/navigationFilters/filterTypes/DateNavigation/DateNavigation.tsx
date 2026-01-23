import { getGranularityDefinition } from "@/experimental/OneCalendar/OneCalendar"
import { OneDateNavigator } from "@/experimental/OneDateNavigator"
import { useI18n } from "@/lib/providers/i18n"
import { type DatePickerValue } from "@/ui/DatePickerPopup"

import { DateNavigationProps } from "./types"

export function DateNavigation({
  filter,
  value,
  onChange,
}: DateNavigationProps) {
  const i18n = useI18n()
  const options = {
    granularity: "day" as const,
    ...filter,
  }

  const availableGranularities = Array.isArray(options.granularity)
    ? options.granularity
    : [options.granularity]

  const granularityDefinition = getGranularityDefinition(
    value.granularity || availableGranularities[0]
  )

  const handleChange = (newDateRange: DatePickerValue | undefined) => {
    if (!newDateRange || !newDateRange.value) {
      return
    }

    onChange({
      value: newDateRange.value,
      granularity: newDateRange.granularity,
      valueString: granularityDefinition.toString(newDateRange.value, i18n),
    })
  }

  return (
    <div className="flex items-center gap-2">
      <OneDateNavigator
        onSelect={handleChange}
        defaultValue={value}
        granularities={availableGranularities}
        minDate={options.min}
        maxDate={options.max}
        presets={options.presets}
        hideGoToCurrent={options.hideGoToCurrent}
      />
    </div>
  )
}
