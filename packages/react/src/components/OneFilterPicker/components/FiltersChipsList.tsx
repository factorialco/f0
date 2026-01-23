import { AnimatePresence } from "motion/react"

import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"

import type { FiltersDefinition, FiltersState, FilterValue } from "../types"

import {
  FilterDefinitionsByType,
  FilterTypeDefinition,
  FilterTypeSchema,
  getFilterType,
} from "../filterTypes"
import { getActiveFilterKeys } from "../internal/getActiveFilterKeys"
import { FilterChipButton } from "./FilterChipButton"

interface FiltersChipsListProps<Filters extends FiltersDefinition> {
  filters: Filters
  value: FiltersState<Filters>
  onFilterSelect: (key: keyof Filters) => void
  onFilterRemove: (key: keyof Filters) => void
  onClearAll: () => void
  /** Filter keys to exclude from chip display (e.g., keys covered by presets) */
  excludedKeys?: Set<string>
}

export function FiltersChipsList<Filters extends FiltersDefinition>({
  filters,
  value = {},
  onFilterSelect,
  onFilterRemove,
  onClearAll,
  excludedKeys = new Set(),
}: FiltersChipsListProps<Filters>) {
  const i18n = useI18n()

  const activeFilterKeys = getActiveFilterKeys(filters, value, i18n)

  // Filter out keys that are covered by presets
  const visibleFilterKeys = activeFilterKeys.filter(
    (key) => !excludedKeys.has(String(key))
  )

  if (visibleFilterKeys.length === 0) {
    return null
  }

  return (
    <div className="mt-2 flex items-start justify-between gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <AnimatePresence presenceAffectsLayout initial={false}>
          {visibleFilterKeys.map((key) => {
            const filterSchema = filters[key]

            if (!filters[key]) {
              return null
            }

            const currentValue = value?.[key as keyof Filters]

            const filterType = getFilterType(filterSchema.type)
            type FilterType = FilterDefinitionsByType[typeof filterSchema.type]

            const typedFilterType =
              filterType as unknown as FilterTypeDefinition<
                FilterValue<FilterType>
              >

            if (
              typedFilterType.isEmpty(currentValue, {
                schema: filterSchema as unknown as FilterTypeSchema,
                i18n,
              })
            ) {
              return null
            }

            return (
              <FilterChipButton
                key={`filter-${String(key)}`}
                filter={filterSchema}
                value={currentValue}
                onSelect={() => onFilterSelect(key)}
                onRemove={() => onFilterRemove(key)}
              />
            )
          })}
        </AnimatePresence>
      </div>

      <F0Button
        variant="ghost"
        label={i18n.actions.clear}
        size="sm"
        onClick={onClearAll}
      />
    </div>
  )
}
