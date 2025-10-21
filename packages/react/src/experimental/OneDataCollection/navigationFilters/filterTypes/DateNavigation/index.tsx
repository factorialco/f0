import { DateRange, granularityDefinitions } from "@/experimental/OneCalendar"
import { NavigationFilter } from "../../types"
import { DateNavigation } from "./DateNavigation"
import { DateNavigatorFilterDefinition, DateValue } from "./types"

const isDateValue = (
  value: Date | DateRange | DateValue
): value is DateValue => {
  return "date" in value
}

const dateNavigatorFilter: NavigationFilter<
  DateValue,
  DateValue | Date | DateRange | undefined | null,
  DateNavigatorFilterDefinition
> = {
  valueConverter: function (value, filterDef, i18n) {
    const availableGranularities = Array.isArray(filterDef.granularity)
      ? filterDef.granularity
      : [filterDef.granularity]

    const granularity =
      filterDef.defaultGranularity || availableGranularities[0] || "day"

    if (!value) {
      value = new Date()
    }
    // If the initial value is already a DateValue, return it
    if (isDateValue(value)) {
      return value
    }

    const granularityDefinition = granularityDefinitions[granularity]
    return {
      value: granularityDefinition.toRange(value),
      valueString: granularityDefinition.toString(value, i18n),
      granularity,
    }
  },
  render: (props) => {
    return <DateNavigation {...props} />
  },
}

export default dateNavigatorFilter
