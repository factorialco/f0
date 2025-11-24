import { RecordType } from "@/hooks/datasource"
import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { InFilter } from "./InFilter"
import { InFilterOptions } from "./types"
import { getCacheKey, loadOptions } from "./useLoadOptions"

export const inFilter: FilterTypeDefinition<
  string[],
  InFilterOptions<string>
> = {
  emptyValue: [],
  isEmpty: (value) => (value || []).length === 0,
  render: (props) => <InFilter {...props} />,
  chipLabel: async (value, { schema }) => {
    // If getLabel is provided, use it to resolve labels without fetching all options
    if (schema.options.getLabel) {
      const selectedLabels = await Promise.all(
        value.slice(0, 1).map((v) => schema.options.getLabel!(v))
      )

      const firstSelectedLabel = selectedLabels[0]
      const remainingCount = selectedLabels.length - 1
      const hasMultipleSelections = remainingCount > 0

      return hasMultipleSelections
        ? `${firstSelectedLabel} +${remainingCount}`
        : `${firstSelectedLabel}`
    }

    const cacheKey = getCacheKey(schema)

    const optionsProp =
      "options" in schema.options ? schema.options.options : []

    const withSource =
      "source" in schema.options ? schema.options.source : undefined

    if (withSource && "mapOptions" in schema.options) {
      const firstValue = value[0]
      const remainingCount = value.length - 1
      const hasMultipleSelections = remainingCount > 0

      return hasMultipleSelections
        ? `${String(firstValue)} +${remainingCount}`
        : String(firstValue)
    }

    // For static options, load from cache or options array
    const options = await loadOptions(
      cacheKey,
      optionsProp,
      schema.options.cache
    )

    const selectedLabels = value.map((v) => {
      const option = options.find((opt) => opt.value === v)
      return option?.label ?? String(v)
    })

    const firstSelectedLabel = selectedLabels[0]
    const remainingCount = selectedLabels.length - 1
    const hasMultipleSelections = remainingCount > 0

    return hasMultipleSelections
      ? `${firstSelectedLabel} +${remainingCount}`
      : `${firstSelectedLabel}`
  },
}

export default inFilter

export type InFilterDefinition<
  T = string | number,
  R extends RecordType = RecordType,
> = BaseFilterDefinition<"in"> & {
  options: InFilterOptions<T, R>
}
