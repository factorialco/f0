import {
  GranularityDefinitionKey,
  granularityDefinitions,
} from "@/components/OneCalendar/granularities"
import { DateRangeComplete } from "@/components/OneCalendar/types"

export const getCompareToValue = (
  currentValue: DateRangeComplete,
  delta: number,
  units: GranularityDefinitionKey
): DateRangeComplete => {
  const granularityDefinition = granularityDefinitions[units]

  if (!granularityDefinition) {
    return { from: new Date(), to: new Date() }
  }

  return granularityDefinition.add(currentValue, delta)
}
