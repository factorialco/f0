import { type BaseFilterDefinition } from "../filters"
import { FilterTypeDefinition } from "../types"
import { getOptionsWithDefaults } from "../utils"
import {
  NumberFilter,
  NumberFilterOptions,
  NumberFilterValue,
} from "./NumberFilter"

const isEmpty = (value: NumberFilterValue): value is undefined => {
  return !value || (value[0] === undefined && value[1] === undefined)
}

const defaults: NumberFilterOptions = {
  min: undefined,
  max: undefined,
}

export const numberFilter: FilterTypeDefinition<
  NumberFilterValue,
  NumberFilterOptions
> = {
  emptyValue: [undefined, undefined],
  render: (props) => {
    const options = getOptionsWithDefaults(props.schema.options, defaults)
    return <NumberFilter {...props} schema={{ ...props.schema, options }} />
  },
  isEmpty,
  chipLabel: (value, context) => {
    const i18n = context.i18n
    if (value?.[0] !== undefined && value?.[1] !== undefined) {
      return i18n.t("filters.range", { min: value?.[0], max: value?.[1] })
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

export default numberFilter

export type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
  options?: NumberFilterOptions
}
