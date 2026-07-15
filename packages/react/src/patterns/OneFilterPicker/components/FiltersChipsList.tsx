import { AnimatePresence } from "motion/react"

import { F0Button } from "@/components/F0Button"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { useI18n } from "@/lib/providers/i18n"

import type { FiltersDefinition, FiltersState, FilterValue } from "../types"

import {
  FilterDefinitionsByType,
  FilterTypeDefinition,
  FilterTypeSchema,
  getFilterType,
  RegisteredFiltersState,
} from "../filterTypes"
import { getActiveFilterKeys } from "../internal/getActiveFilterKeys"
import { FilterChipButton } from "./FilterChipButton"

interface FiltersChipsListProps<Filters extends FiltersDefinition> {
  filters: Filters
  value: FiltersState<Filters>
  onFilterSelect: (key: keyof Filters) => void
  onFilterRemove: (key: keyof Filters) => void
  onClearAll: () => void
  /** When true, hide all chips (e.g., when a preset is active and already represents the filters) */
  hideChips?: boolean
  /** Total number of items matching the current filters */
  resultCount?: number
}

export function FiltersChipsList<Filters extends FiltersDefinition>({
  filters,
  value = {},
  onFilterSelect,
  onFilterRemove,
  onClearAll,
  hideChips = false,
  resultCount,
}: FiltersChipsListProps<Filters>) {
  const i18n = useI18n()

  const activeFilterKeys = getActiveFilterKeys(
    filters,
    value as unknown as RegisteredFiltersState<Filters>,
    i18n
  )
  const hasVisibleChips = !hideChips && activeFilterKeys.length > 0

  // The "Save view" action lives in the presets row (the dashed save chip), not
  // here — this row only shows filter chips + Clear.
  if (!hasVisibleChips) {
    return null
  }

  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex flex-wrap items-center gap-2">
        {resultCount !== undefined && hasVisibleChips && (
          <F0TagRaw
            text={i18n.t(
              resultCount === 1
                ? "filters.resultsFor.one"
                : "filters.resultsFor.other",
              { count: resultCount }
            )}
          />
        )}
        <AnimatePresence presenceAffectsLayout initial={false}>
          {hasVisibleChips &&
            activeFilterKeys.map((key) => {
              const filterSchema = filters[key]

              if (!filters[key]) {
                return null
              }

              const currentValue = value?.[key as keyof Filters]

              const filterType = getFilterType(filterSchema.type)
              type FilterType =
                FilterDefinitionsByType[typeof filterSchema.type]

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
                  filterKey={String(key)}
                  value={currentValue}
                  onSelect={() => onFilterSelect(key)}
                  onRemove={() => onFilterRemove(key)}
                />
              )
            })}
        </AnimatePresence>
      </div>

      <F0Button
        variant="neutral"
        label={i18n.actions.clear}
        size="sm"
        onClick={onClearAll}
      />
    </div>
  )
}
