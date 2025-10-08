import { OneFilterPicker } from "@/components/OneFilterPicker"
import { GroupingSelector } from "@/experimental/OneDataCollection/Settings/components/GroupingSelector"
import {
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  GroupingState,
  RecordType,
} from "@/hooks/datasource"
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
  searchInputRef: React.RefObject<HTMLInputElement>
  grouping?: Grouping
  currentGrouping?: GroupingState<R, Grouping>
  onGroupingChange?: (grouping: GroupingState<R, Grouping>) => void
}

export const SelectTopActions = <R extends RecordType = RecordType>({
  showSearchBox,
  searchBoxPlaceholder,
  onSearchChange,
  searchValue,
  searchInputRef,
  grouping,
  currentGrouping,
  onGroupingChange,
  filters,
  currentFilters,
  onFiltersChange,
}: SelectTopActionsProps<R>) => {
  if (!showSearchBox) return null
  return (
    <div className="flex gap-2 border-0 border-b border-solid border-f1-border-secondary p-2">
      <div className="flex flex-1 flex-row gap-2">
        <F1SearchBox
          placeholder={searchBoxPlaceholder}
          onChange={onSearchChange}
          clearable
          value={searchValue}
          key="search-input"
          ref={searchInputRef}
        />
        {filters && (
          <OneFilterPicker
            filters={filters}
            value={currentFilters}
            onChange={onFiltersChange}
            mode="compact"
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
