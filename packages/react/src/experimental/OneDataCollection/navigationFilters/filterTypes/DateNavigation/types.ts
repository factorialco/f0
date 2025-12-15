import { DateRange, DateRangeComplete } from "@/experimental/OneCalendar"
import { GranularityDefinitionKey } from "@/experimental/OneCalendar/granularities/index"
import { DatePreset } from "@/ui/DatePickerPopup"
import { NavigationFilterComponentProps, NavigationFilterDefinitionBase } from "../../types"
export type DateNavigationOptions = {
  granularity?: GranularityDefinitionKey[] | GranularityDefinitionKey
  defaultGranularity?: GranularityDefinitionKey
  min?: Date
  max?: Date
  presets?: DatePreset[]
  hideGoToCurrent?: boolean
}

export type DateNavigatorFilterDefinition = NavigationFilterDefinitionBase<
  Date | DateRange | DateValue
> & {
  type: "date-navigator"
} & DateNavigationOptions

export type DateValue = {
  // Represents the selected value in a date-time range, e.g  for a day "2021-01-01T00:00:00Z - 2021-01-07T23:59:59Z"
  value: DateRangeComplete
  // Represents the selected value in a date-time range, e.g  for a day "2021-01-01"
  valueString: string
  granularity: GranularityDefinitionKey
}

export type DateNavigationProps = NavigationFilterComponentProps<DateValue>
