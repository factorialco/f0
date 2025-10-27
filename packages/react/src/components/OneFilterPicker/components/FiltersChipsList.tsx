import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { AnimatePresence } from "motion/react"
import {
  FilterDefinitionsByType,
  FilterTypeDefinition,
  FilterTypeSchema,
  getFilterType,
} from "../filterTypes"
import type { FiltersDefinition, FiltersState, FilterValue } from "../types"
import { FilterChipButton } from "./FilterChipButton"

interface FiltersChipsListProps<Filters extends FiltersDefinition> {
  filters: Filters
  value: FiltersState<Filters>
  onFilterSelect: (key: keyof Filters) => void
  onFilterRemove: (key: keyof Filters) => void
  onClearAll: () => void
}

export function FiltersChipsList<Filters extends FiltersDefinition>({
  filters,
  value = {},
  onFilterSelect,
  onFilterRemove,
  onClearAll,
}: FiltersChipsListProps<Filters>) {
  const i18n = useI18n()

  const activeFilterKeys = Object.keys(filters).filter((key) => {
    const filterValue = value[key as keyof Filters]
    const filterSchema = filters[key as keyof Filters]

    const filterType = getFilterType(filterSchema.type)

    return filterType.isEmpty(filterValue, {
      schema: filterSchema as unknown as FilterTypeSchema,
      i18n,
    })
  }) as Array<keyof Filters>

  if (activeFilterKeys.length === 0) return null

  return (
    <div className="mt-2 flex items-start justify-between gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <AnimatePresence presenceAffectsLayout initial={false}>
          {activeFilterKeys.map((key) => {
            const filterSchema = filters[key]
            if (!filters[key]) {
              return null
            }

            const currentValue = value?.[key as keyof Filters]

            const filterType = getFilterType(filterSchema.type)
            type FilterType = FilterDefinitionsByType[typeof filterSchema.type]

            const typedFilterType = filterType as FilterTypeDefinition<
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
