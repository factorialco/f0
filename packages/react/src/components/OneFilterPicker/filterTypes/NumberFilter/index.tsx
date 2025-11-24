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
    (value?.mode === "range" &&
      value?.from?.value === value?.to?.value &&
      value?.from?.value === undefined) ||
    (value?.mode === "single" && value?.value === undefined)
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
  emptyValue: undefined,
  render: (props) => {
    const options = getOptionsWithDefaults(props.schema.options, defaults)
    return <NumberFilter {...props} schema={{ ...props.schema, options }} />
  },
  isEmpty,
  chipLabel: (value, context) => {
    const i18n = context.i18n

    // Single value
    if (value?.mode === "single" || value?.mode === undefined) {
      if (value?.value === undefined) {
        return ""
      }
      return i18n.t("filters.number.equalShort", {
        value: value?.value?.toString(),
      })
    }

    if (value?.mode === "range") {
      // Range value
      if (value?.from?.value !== undefined && value?.to?.value !== undefined) {
        return i18n.t("filters.number.range", {
          min: value?.from?.value,
          max: value?.to?.value,
          minStrict: !value?.from?.strict ? ">" : "≥",
          maxStrict: !value?.to?.strict ? "<" : "≤",
        })
      }

      if (value?.to?.value !== undefined) {
        if (value?.to?.strict) {
          return i18n.t("filters.number.lessThanOrEqualShort", {
            value: value?.to?.value,
          })
        } else {
          return i18n.t("filters.number.lessThanShort", {
            value: value?.to?.value,
          })
        }
      }

      if (value?.from?.value !== undefined) {
        if (value?.from?.strict) {
          return i18n.t("filters.number.greaterThanOrEqualShort", {
            value: value?.from?.value,
          })
        } else {
          return i18n.t("filters.number.greaterThanShort", {
            value: value?.from?.value,
          })
        }
      }
    }

    return ""
  },
}

export default numberFilter

export type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
  options?: NumberFilterOptions
}
