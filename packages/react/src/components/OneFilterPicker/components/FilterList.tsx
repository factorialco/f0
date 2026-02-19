import { AnimatePresence, motion } from "motion/react"
import { useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"

import type {
  FilterTypeDefinition,
  FilterTypeSchema,
} from "../filterTypes/types"
import type { FiltersDefinition, FiltersState, FilterValue } from "../types"

import { FilterDefinitionsByType, getFilterType } from "../filterTypes"
import { collectNestedFilterKeys } from "../filterTypes/InFilter/components/option-utils"

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
  /** Callback fired when the apply filters button is clicked */
  onClickApplyFilters: () => void
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
  onClickApplyFilters,
}: FilterListProps<Definition>) {
  const i18n = useI18n()

  const nestedKeysMap = useMemo(() => {
    const map = new Map<string, string[]>()
    for (const [key, filter] of Object.entries(definition)) {
      if (filter.type === "in" && "options" in filter) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- accessing nested options generically
        const nested = collectNestedFilterKeys((filter as any).options)
        if (nested.length > 0) map.set(key, nested)
      }
    }
    return map
  }, [definition])

  return (
    <div
      className={cn(
        "z-30 flex h-full flex-col",
        isCompactMode ? "min-w-[224px] w-full" : "w-60",
        !isCompactMode &&
          "border border-solid border-transparent border-r-f1-border-secondary"
      )}
    >
      <div
        className={cn(
          "flex flex-1 h-full w-full flex-col min-h-0 max-h-full gap-1 overflow-x-hidden p-2"
        )}
      >
        {isCompactMode && (
          <div className="-mx-2 mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" />
        )}
        <ScrollArea className="flex-1 min-h-0 max-h-full">
          <div className="flex flex-col gap-1">
            {Object.entries(definition).map(([key, filter]) => {
              const filterType = getFilterType(filter.type)

              type FilterType = FilterDefinitionsByType[typeof filter.type]
              const currentValue = tempFilters[key] as FilterValue<FilterType>
              const typedFilterType =
                filterType as unknown as FilterTypeDefinition<
                  FilterValue<FilterType>
                >

              const ownValueActive = !typedFilterType.isEmpty(currentValue, {
                schema: filter as unknown as FilterTypeSchema,
                i18n,
              })

              const nestedKeys = nestedKeysMap.get(key)
              const nestedValueActive =
                !ownValueActive &&
                !!nestedKeys?.some((nk) => {
                  const nv = tempFilters[nk as keyof Definition]
                  return Array.isArray(nv) && nv.length > 0
                })

              const isActive = ownValueActive || nestedValueActive

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
                  <div className="flex w-full items-center justify-start gap-2.5 overflow-hidden">
                    <OneEllipsis className="flex-1 text-left text-f1-foreground">
                      {filter.label}
                    </OneEllipsis>
                    <AnimatePresence>
                      {isActive && (
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
        </ScrollArea>
        {isCompactMode && (
          <div className="-mx-2 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2">
            <F0Button
              onClick={onClickApplyFilters}
              label={i18n.filters.applyFilters}
            />
          </div>
        )}
      </div>
    </div>
  )
}
