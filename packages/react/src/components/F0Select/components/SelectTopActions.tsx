import { AnimatePresence, motion } from "motion/react"
import { useCallback, useState } from "react"

import { OneFilterPicker } from "@/components/OneFilterPicker"
import { GroupingSelector } from "@/experimental/OneDataCollection/Settings/components/GroupingSelector"
import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  RecordType,
} from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"

import { F1SearchBox } from "../../../experimental/Forms/Fields/F1SearchBox"
import { ActiveFiltersChips } from "./ActiveFiltersChips"

interface SelectTopActionsProps<
  R extends RecordType = RecordType,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
  Filters extends FiltersDefinition = FiltersDefinition,
> {
  showSearchBox?: boolean
  filters?: Filters
  currentFilters: FiltersState<Filters>
  onFiltersChange: (filters: FiltersState<Filters>) => void
  searchBoxPlaceholder?: string
  onSearchChange: (value: string) => void
  searchValue?: string
  grouping?: Grouping
  currentGrouping?: GroupingState<R, Grouping>
  onGroupingChange?: (grouping: GroupingState<R, Grouping>) => void
  asList?: boolean
  isFiltersOpen?: boolean
  onFiltersOpenChange?: (open: boolean) => void
}

export const SelectTopActions = <R extends RecordType = RecordType>({
  showSearchBox,
  searchBoxPlaceholder,
  onSearchChange,
  searchValue,
  grouping,
  currentGrouping,
  onGroupingChange,
  filters,
  currentFilters,
  onFiltersChange,
  asList = false,
  onFiltersOpenChange,
}: SelectTopActionsProps<R>) => {
  const i18n = useI18n()

  const [isFiltersOpenLocal, setIsFiltersOpenLocal] = useState(false)

  // Stable callback that updates both local and parent state
  const handleFiltersOpenChange = useCallback(
    (open: boolean) => {
      setIsFiltersOpenLocal(open)
      onFiltersOpenChange?.(open)
    },
    [onFiltersOpenChange]
  )

  if (
    !showSearchBox &&
    !filters &&
    (!grouping ||
      (!!grouping.mandatory && Object.entries(grouping.groupBy).length < 2))
  ) {
    return null
  }

  return (
    <div className="flex flex-col border-0 border-b border-solid border-f1-border-secondary">
      <div className="flex gap-2 p-2">
        <div className="flex flex-1 flex-row gap-2">
          {showSearchBox && (
            <div className="flex-1">
              <F1SearchBox
                placeholder={searchBoxPlaceholder ?? i18n.toc.search}
                onChange={onSearchChange}
                value={searchValue}
                debounceTime={400}
                autoFocus={!asList && !isFiltersOpenLocal}
                clearable
              />
            </div>
          )}
          {filters && (
            <OneFilterPicker
              filters={filters}
              value={currentFilters}
              onChange={onFiltersChange}
              mode={asList ? "simple" : "compact"}
              onOpenChange={handleFiltersOpenChange}
            />
          )}
        </div>
        <GroupingSelector
          hideLabel={true}
          grouping={grouping}
          currentGrouping={currentGrouping}
          onGroupingChange={onGroupingChange}
        />
      </div>
      <AnimatePresence>
        {filters && hasActiveFilters(currentFilters) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          >
            <ActiveFiltersChips
              filters={filters}
              currentFilters={currentFilters}
              onFiltersChange={onFiltersChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Check if there are any active filters
 */
const hasActiveFilters = <Filters extends FiltersDefinition>(
  currentFilters: FiltersState<Filters>
): boolean => {
  return Object.entries(currentFilters).some(([, value]) => {
    if (value === undefined || value === null) return false
    if (Array.isArray(value)) return value.length > 0
    return value !== ""
  })
}
