import { GranularityDefinitionKey } from "@/components/OneCalendar/granularities"
import { DateRange, DateRangeComplete } from "@/components/OneCalendar/types"

export interface DatePreset {
  label: string
  granularity: GranularityDefinitionKey
  value: DateRange | (() => DateRange)
}
export type DatePickerValue = {
  value: DateRangeComplete | undefined
  granularity: GranularityDefinitionKey
}
