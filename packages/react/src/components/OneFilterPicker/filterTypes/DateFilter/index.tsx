import { getGranularitySimpleDefinition } from "@/experimental/OneCalendar"
import { DateRange } from "@/experimental/OneCalendar/types"
import { type BaseFilterDefinition } from "../filters"
import { FilterTypeContext, FilterTypeDefinition } from "../types"
import { getOptionsWithDefaults } from "../utils"
import { DateFilter, DateFilterOptions } from "./DateFilter"

const isEmpty = (
  value: Date | DateRange | undefined,
  context: FilterTypeContext<DateFilterOptions>
): value is undefined => {
  return (
    !value ||
    ("from" in value &&
      !value.from &&
      context.schema.options.mode === "single") ||
    ("from" in value &&
      !value.from &&
      !value.to &&
      context.schema.options.mode === "range")
  )
}

const defaults: DateFilterOptions = {
  mode: "single",
  view: "day",
}

export const dateFilter: FilterTypeDefinition<
  Date | DateRange | undefined,
  DateFilterOptions
> = {
  emptyValue: undefined,
  render: (props) => {
    const options = getOptionsWithDefaults(props.schema.options, defaults)
    return <DateFilter {...props} schema={{ ...props.schema, options }} />
  },
  isEmpty,
  chipLabel: (value, context) => {
    const options = getOptionsWithDefaults(context.schema.options, defaults)

    const granularity = getGranularitySimpleDefinition(options.view)

    return granularity.toString(value, context.i18n)
  },
  formHeight: 520,
}

export default dateFilter

export type DateFilterDefinition = BaseFilterDefinition<"date"> & {
  options?: DateFilterOptions
}
