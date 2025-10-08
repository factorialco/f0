import { F0Icon } from "@/components/F0Icon/F0Icon"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
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
  /** Whether to hide a border around the list */
  isCompactMode?: boolean
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
  isCompactMode,
}: FilterListProps<Definition>) {
  const i18n = useI18n()

  const [searchValue, setSearchValue] = useState("")

  return (
    <div
      className={cn(
        "z-30 h-full w-full min-w-[224px] shrink-0 bg-f1-background",
        !isCompactMode &&
          "border border-solid border-transparent border-r-f1-border-secondary"
      )}
    >
      <div className={cn("flex flex-col p-2")}>
        <F1SearchBox
          key="filter-list-search"
          name="filter-list-search"
          placeholder="Search..."
          value={searchValue}
          onChange={setSearchValue}
          clearable
        />
      </div>
      <div
        className={cn(
          "flex h-full w-full flex-col gap-1 overflow-y-auto p-2 pt-0",
          isCompactMode && "px-1"
        )}
      >
        {isCompactMode && (
          <div className="-mx-2 mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" />
        )}
        {Object.entries(definition).map(([key, filter]) => {
          const matchesWithSearch =
            !searchValue ||
            filter.label.toLowerCase().includes(searchValue.toLowerCase())

          if (!matchesWithSearch) return null

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
              <div className="flex w-full items-center justify-start gap-2.5">
                <span className="line-clamp-1 w-fit flex-1 text-left">
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
                {isCompactMode && <F0Icon icon={ChevronRight} />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
