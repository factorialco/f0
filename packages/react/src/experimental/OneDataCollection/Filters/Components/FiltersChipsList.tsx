import { Button } from "@/components/Actions/Button"
import { AnimatePresence } from "framer-motion"
import { useI18n } from "../../../../lib/i18n-provider"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterButton } from "./FilterButton"

interface FiltersChipsListProps<Filters extends FiltersDefinition> {
  filters: Filters
  currentFilters: FiltersState<Filters>
  onFilterSelect: (key: keyof Filters) => void
  onFilterRemove: (key: keyof Filters) => void
  onClearAll: () => void
}

export function FiltersChipsList<Filters extends FiltersDefinition>({
  filters,
  currentFilters,
  onFilterSelect,
  onFilterRemove,
  onClearAll,
}: FiltersChipsListProps<Filters>) {
  const i18n = useI18n()

  const activeFilterKeys = Object.keys(currentFilters).filter((key) => {
    const value = currentFilters[key as keyof Filters]
    const filter = filters[key as keyof Filters]
    return filter.type === "in" && Array.isArray(value) && value.length > 0
  }) as Array<keyof Filters>

  if (activeFilterKeys.length === 0) return null

  return (
    <div className="flex items-start justify-between gap-2 px-6">
      <div className="flex flex-wrap items-center gap-2">
        <AnimatePresence presenceAffectsLayout initial={false}>
          {activeFilterKeys.map((key) => {
            const filter = filters[key]
            return (
              <FilterButton
                key={`filter-${String(key)}`}
                filter={filter}
                value={currentFilters[key]}
                onSelect={() => onFilterSelect(key)}
                onRemove={() => onFilterRemove(key)}
              />
            )
          })}
        </AnimatePresence>
      </div>
      <Button
        variant="ghost"
        label={i18n.actions.clear}
        size="sm"
        onClick={onClearAll}
      />
    </div>
  )
}
