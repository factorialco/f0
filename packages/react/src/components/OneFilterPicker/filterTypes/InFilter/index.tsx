import { RecordType } from "@/hooks/datasource"
import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { InFilter } from "./InFilter"
import { InFilterOptions } from "./types"
import {
  cacheLabel,
  getCacheKey,
  getCachedLabel,
  loadOptions,
} from "./useLoadOptions"

export const inFilter: FilterTypeDefinition<
  string[],
  InFilterOptions<string>
> = {
  emptyValue: [],
  isEmpty: (value) => (value || []).length === 0,
  render: (props) => <InFilter {...props} />,
  chipLabel: async (value, { schema }) => {
    const cacheKey = getCacheKey(schema)

    // Check cache first for all values
    const cachedLabels = value.map((v) => getCachedLabel(cacheKey, v))

    if (cachedLabels[0]) {
      // All labels are cached, use them
      const firstSelectedLabel = cachedLabels[0]!
      const remainingCount = cachedLabels.length - 1
      const hasMultipleSelections = remainingCount > 0

      return hasMultipleSelections
        ? `${firstSelectedLabel} +${remainingCount}`
        : `${firstSelectedLabel}`
    }

    // If getLabel is provided, use it to resolve labels without fetching all options
    if (schema.options.getLabel) {
      // For chip display, we only need the first label
      const firstValue = value[0]
      if (!firstValue) {
        return ""
      }

      // Check cache first
      const cached = getCachedLabel(cacheKey, firstValue)
      if (cached) {
        const remainingCount = value.length - 1
        const hasMultipleSelections = remainingCount > 0
        return hasMultipleSelections ? `${cached} +${remainingCount}` : cached
      }

      // If not cached, call getLabel and cache the result
      const label = await schema.options.getLabel!(firstValue)
      cacheLabel(cacheKey, firstValue, label)
      const remainingCount = value.length - 1
      const hasMultipleSelections = remainingCount > 0

      return hasMultipleSelections ? `${label} +${remainingCount}` : label
    }

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
      const label = option?.label ?? String(v)
      // Cache the label if we found it
      if (option) {
        cacheLabel(cacheKey, v, label)
      }
      return label
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
