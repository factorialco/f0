import { type BaseFilterDefinition } from "../filters"
import { FilterTypeDefinition } from "../types"
import { getOptionsWithDefaults } from "../utils"
import {
  NumberFilter,
  NumberFilterOptions,
  NumberFilterValue,
} from "./NumberFilter"

const isEmpty = (value: NumberFilterValue | undefined): value is undefined => {
  return (
    !value ||
    (value.mode === "single" && value.value === undefined) ||
    (value.mode === "range" &&
      (value.value === undefined ||
        (value.value?.[0] === undefined && value.value?.[1] === undefined)))
  )
}

const defaults: NumberFilterOptions = {
  min: undefined,
  max: undefined,
}

export const numberFilter: FilterTypeDefinition<
  NumberFilterValue,
  NumberFilterOptions
> = {
  emptyValue: { mode: "single", value: undefined },
  render: (props) => {
    const options = getOptionsWithDefaults(props.schema.options, defaults)
    return <NumberFilter {...props} schema={{ ...props.schema, options }} />
  },
  isEmpty,
  chipLabel: (filterValue, context) => {
    const i18n = context.i18n
    // Single value
    if (filterValue.mode === "single") {
      if (filterValue.value === undefined) {
        return ""
      }
      return i18n.t("filters.number.equalShort", {
        value: filterValue.value.toString(),
      })
    }

    const value = filterValue.value
    // Range value
    if (value?.[0] !== undefined && value?.[1] !== undefined) {
      return i18n.t("filters.number.range", {
        min: value?.[0],
        max: value?.[1],
      })
    }

    if (value?.[1] !== undefined) {
      return i18n.t("filters.number.lessThanOrEqualShort", {
        value: value?.[1],
      })
    }

    if (value?.[0] !== undefined) {
      return i18n.t("filters.number.greaterThanOrEqualShort", {
        value: value?.[0],
      })
    }

    return ""
  },
}

export default numberFilter

export type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
  options?: NumberFilterOptions
}
