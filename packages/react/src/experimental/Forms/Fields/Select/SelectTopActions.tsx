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
import { useState } from "react"
import { F1SearchBox } from "../F1SearchBox"

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
}: SelectTopActionsProps<R>) => {
  const i18n = useI18n()

  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  if (!showSearchBox) return null
  return (
    <div className="flex gap-2 border-0 border-b border-solid border-f1-border-secondary p-2">
      <div className="flex flex-1 flex-row gap-2">
        <div className="flex-1">
          <F1SearchBox
            placeholder={searchBoxPlaceholder ?? i18n.toc.search}
            onChange={onSearchChange}
            value={searchValue}
            debounceTime={400}
            autoFocus={!isFiltersOpen}
            clearable
          />
        </div>
        {filters && (
          <OneFilterPicker
            filters={filters}
            value={currentFilters}
            onChange={onFiltersChange}
            mode="compact"
            onOpenChange={setIsFiltersOpen}
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
  )
}
