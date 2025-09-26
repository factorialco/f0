import { GroupingSelector } from "@/experimental/OneDataCollection/Settings/components/GroupingSelector"
import {
  GroupingDefinition,
  GroupingState,
  RecordType,
} from "@/hooks/datasource"
import { F1SearchBox } from "../F1SearchBox"

interface SelectTopActionsProps<
  R extends RecordType = RecordType,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
> {
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange: (value: string) => void
  searchValue?: string
  searchInputRef: React.RefObject<HTMLInputElement>
  onFocus?: () => void
  onBlur?: () => void
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
  onFocus,
  onBlur,
  grouping,
  currentGrouping,
  onGroupingChange,
}: SelectTopActionsProps<R>) => {
  if (!showSearchBox) return null
  return (
    <div className="flex gap-2 px-2 pt-2">
      <div className="flex-1">
        <F1SearchBox
          placeholder={searchBoxPlaceholder}
          onChange={onSearchChange}
          clearable
          value={searchValue}
          key="search-input"
          ref={searchInputRef}
          onBlur={onBlur}
          onFocus={onFocus}
        />
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
