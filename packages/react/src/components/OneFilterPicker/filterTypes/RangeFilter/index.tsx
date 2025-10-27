import { type BaseFilterDefinition } from "../filters"
import { FilterTypeDefinition } from "../types"
import { getOptionsWithDefaults } from "../utils"
import {
  RangeFilter,
  RangeFilterOptions,
  RangeFilterValue,
} from "./RangeFilter"

const isEmpty = (value: RangeFilterValue): value is undefined => {
  return !value || (value[0] === undefined && value[1] === undefined)
}

const defaults: RangeFilterOptions = {
  min: undefined,
  max: undefined,
}

export const rangeFilter: FilterTypeDefinition<
  RangeFilterValue,
  RangeFilterOptions
> = {
  emptyValue: [undefined, undefined],
  render: (props) => {
    const options = getOptionsWithDefaults(props.schema.options, defaults)
    return <RangeFilter {...props} schema={{ ...props.schema, options }} />
  },
  isEmpty,
  chipLabel: (value) => {
    if (value?.[0] !== undefined && value?.[1] !== undefined) {
      return `${value?.[0]} - ${value?.[1]}`
    }

    if (value?.[1] !== undefined) {
      return `<= ${value?.[1]}`
    }

    if (value?.[0] !== undefined) {
      return `>= ${value?.[0]}`
    }

    return ""
  },
}

export default rangeFilter

export type RangeFilterDefinition = BaseFilterDefinition<"range"> & {
  options?: RangeFilterOptions
}
