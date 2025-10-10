import { useI18n } from "@/lib/providers/i18n"
import { AnimatePresence, motion } from "motion/react"
import { cn, focusRing } from "../../../lib/utils"
import { FilterDefinitionsByType, getFilterType } from "../filterTypes"
import type {
  FilterTypeDefinition,
  FilterTypeSchema,
} from "../filterTypes/types"
import type { FiltersDefinition, FiltersState, FilterValue } from "../types"

/**
 * Props for the FilterList component.
 * @template Definition - The type defining the structure of available filters
 */
interface FilterListProps<Definition extends FiltersDefinition> {
  /** The schema defining available filters and their configurations */
  definition: Definition
  /** Current temporary state of filters being configured */
  tempFilters: FiltersState<Definition>
  /** The currently selected filter key, if any */
  selectedFilterKey: keyof Definition | null
  /** Callback fired when a filter is selected from the list */
  onFilterSelect: (key: keyof Definition) => void
}

/**
 * Displays a vertical list of available filters with selection functionality.
 *
 * Features:
 * - Shows all available filters from the definition
 * - Indicates active filters with a visual indicator
 * - Allows selecting a filter to configure
 * - Handles animation for status indicators
 *
 * This component renders the left sidebar in the filters popover interface.
 *
 * @template Definition - The type defining the structure of available filters
 */
export function FilterList<Definition extends FiltersDefinition>({
  definition,
  tempFilters,
  selectedFilterKey,
  onFilterSelect,
}: FilterListProps<Definition>) {
  const i18n = useI18n()
  return (
    <div className="w-[224px] shrink-0 border border-solid border-transparent border-r-f1-border-secondary">
      <div className="flex h-full w-full flex-col gap-1 overflow-y-auto p-2">
        {Object.entries(definition).map(([key, filter]) => {
          const filterType = getFilterType(filter.type)

          type FilterType = FilterDefinitionsByType[typeof filter.type]
          const currentValue = tempFilters[key] as FilterValue<FilterType>
          const typedFilterType = filterType as FilterTypeDefinition<
            FilterValue<FilterType>
          >

          return (
            <button
              key={key}
              className={cn(
                "group relative flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors",
                "hover:bg-f1-background-secondary",
                selectedFilterKey === key && "bg-f1-background-secondary",
                focusRing()
              )}
              onClick={() => onFilterSelect(key as keyof Definition)}
            >
              <div className="flex items-center justify-start gap-2.5">
                <span className="line-clamp-1 w-fit text-left">
                  {filter.label}
                </span>
                <AnimatePresence>
                  {!typedFilterType.isEmpty(currentValue, {
                    schema: filter as unknown as FilterTypeSchema,
                    i18n,
                  }) && (
                    <motion.div
                      className="h-2 w-2 shrink-0 rounded-full bg-f1-background-selected-bold"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
