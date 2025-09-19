import { ButtonInternal } from "@/components/F0Button/internal"
import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  GroupingDefinition,
  GroupingState,
  RecordType,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource"
import { Sliders } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useState } from "react"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SummariesDefinition } from "../summary"
import { Visualization } from "../visualizations/collection"
import { GroupingSelector } from "./components/GroupingSelector"
import { SortingSelector } from "./components/SortingSelector"
import { VisualizationSelector } from "./components/VisualizationSelector"

type SettingsProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  visualizations: ReadonlyArray<
    Visualization<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  currentVisualization: number
  onVisualizationChange: (index: number) => void
  grouping?: Grouping
  currentGrouping?: GroupingState<R, Grouping>
  onGroupingChange: (groupingState: GroupingState<R, Grouping>) => void
  sortings?: SortingsDefinition
  summaries?: SummariesDefinition
  currentSortings: SortingsState<Sortings>
  onSortingsChange: (sortings: SortingsState<Sortings>) => void
}

export const Settings = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  visualizations,
  currentVisualization,
  onVisualizationChange,
  grouping,
  // summaries, // TODO: implement summaries selector
  currentGrouping,
  onGroupingChange,
  sortings,
  currentSortings,
  onSortingsChange,
}: SettingsProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const groupByOptions = grouping
    ? Object.keys(grouping.groupBy).length + (grouping.mandatory ? 1 : 0)
    : 0

  const shouldShowSettings =
    (visualizations && visualizations.length > 1) ||
    (groupByOptions > 0 && !grouping?.hideSelector) ||
    (sortings && Object.keys(sortings).length > 0)

  const [open, setOpen] = useState(false)

  const handleVisualizationChange = (index: number) => {
    setOpen(false)
    onVisualizationChange(index)
  }

  const handleGroupingChange = (
    grouping: GroupingState<R, Grouping> | undefined
  ) => {
    onGroupingChange(grouping)
  }

  const hasVisualizations = visualizations && visualizations.length > 1
  const hasGrouping = grouping && groupByOptions > 0
  const hasSortings = sortings && Object.keys(sortings).length > 0

  if (!shouldShowSettings) return null

  return (
    <div className="flex gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild onClick={() => setOpen(!open)}>
          <ButtonInternal
            variant="outline"
            label="Filters"
            icon={Sliders}
            onClick={() => {}}
            hideLabel
            compact
            pressed={open}
          />
        </PopoverTrigger>
        <PopoverContent
          className="flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0"
          align="end"
          sideOffset={8}
        >
          {[
            hasVisualizations && (
              <VisualizationSelector
                key="visualization"
                visualizations={visualizations}
                currentVisualization={currentVisualization}
                onVisualizationChange={handleVisualizationChange}
              />
            ),
            hasGrouping && !grouping?.hideSelector && (
              <GroupingSelector
                key="grouping"
                grouping={grouping}
                currentGrouping={currentGrouping}
                onGroupingChange={handleGroupingChange}
              />
            ),
            hasSortings && (
              <SortingSelector
                key="sorting"
                currentSortings={currentSortings}
                onChange={onSortingsChange}
                sortings={sortings}
              />
            ),
          ]
            .filter(Boolean)
            .map((block, index, array) => (
              <div key={index}>
                {block}
                {index < array.length - 1 && (
                  <div className="h-px w-full bg-f1-border-secondary" />
                )}
              </div>
            ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
