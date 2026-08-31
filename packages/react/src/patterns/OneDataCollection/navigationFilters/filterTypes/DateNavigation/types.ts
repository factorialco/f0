import { DateRange, DateRangeComplete } from "@/components/OneCalendar"
import {
  DatePeriodsDefinition,
  NavigationGranularityKey,
} from "@/components/OneCalendar/granularities/index"
import { DatePreset } from "@/ui/DatePickerPopup"

import {
  NavigationFilterComponentProps,
  NavigationFilterDefinitionBase,
} from "../../types"
export type DateNavigationOptions = {
  granularity?: NavigationGranularityKey[] | NavigationGranularityKey
  defaultGranularity?: NavigationGranularityKey
  min?: Date
  max?: Date
  presets?: DatePreset[]
  hideGoToCurrent?: boolean
  /**
   * Consumer-defined ranges (payroll cycles, academic terms…) navigable as an
   * extra entry in the granularity selector, named by its `label`.
   */
  periods?: DatePeriodsDefinition
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
  granularity: NavigationGranularityKey
}

export type DateNavigationProps = NavigationFilterComponentProps<DateValue>
