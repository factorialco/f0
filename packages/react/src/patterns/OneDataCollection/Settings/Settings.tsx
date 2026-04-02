import { useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  GroupingDefinition,
  GroupingState,
  RecordType,
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource"
import { Reset, Sliders } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SummariesDefinition } from "../summary"
import {
  collectionVisualizations,
  Visualization,
} from "../visualizations/collection"
import { GroupingSelector } from "./components/GroupingSelector"
import { SortingSelector } from "./components/SortingSelector"
import { VisualizationSelector } from "./components/VisualizationSelector"
import { useDataCollectionSettings } from "./SettingsProvider"
import {
  hasVisualizacionSettings as hasVisualizacionSettingsHelper,
  VisualizationSettingsRenderer,
} from "./VisualizationSettingsRenderer"

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
  const i18n = useI18n()

  const groupByOptions = grouping
    ? Object.keys(grouping.groupBy).length + (grouping.mandatory ? 1 : 0)
    : 0

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

  const currentVisualizationDef = useMemo(
    () => visualizations[currentVisualization],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [currentVisualization, visualizations?.[currentVisualization]]
  )
  const visualizacionSettings = useMemo(
    () => (
      <VisualizationSettingsRenderer
        key="visualization-settings"
        visualization={currentVisualizationDef}
      />
    ),
    [currentVisualizationDef]
  )

  const hasVisualizacionSettings = useMemo(
    () => hasVisualizacionSettingsHelper(currentVisualizationDef),
    [currentVisualizationDef]
  )

  const settingsTitle = useMemo(
    () => {
      const visualizationType = visualizations[currentVisualization]?.type
      if (!visualizationType) return "-"

      const visualizationName =
        i18n.collections.visualizations[
          visualizationType as keyof typeof i18n.collections.visualizations
        ] ?? "-"

      return i18n.collections.visualizations.settings.replace(
        "{{visualizationName}}",
        visualizationName as string
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [currentVisualization]
  )

  const settingsContext = useDataCollectionSettings()

  const onResetSettings = () => {
    // Call to the all visualizations reset handler
    Object.values(collectionVisualizations).forEach((visualization) => {
      visualization.settings.resetHandler?.(settingsContext)
    })
  }

  return (
    <div className="flex gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild onClick={() => setOpen(!open)}>
          <ButtonInternal
            variant="outline"
            label="Settings"
            icon={Sliders}
            onClick={() => {}}
            hideLabel
            compact
            pressed={open}
            aria-controls={open ? "settings" : undefined}
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
            hasGrouping &&
              !grouping?.hideSelector &&
              !(
                !!grouping.mandatory &&
                Object.entries(grouping.groupBy).length < 2
              ) && (
                <div className="p-3">
                  <GroupingSelector
                    key="grouping"
                    grouping={grouping}
                    currentGrouping={currentGrouping}
                    onGroupingChange={handleGroupingChange}
                  />
                </div>
              ),
            hasSortings && (
              <div className="p-3">
                <SortingSelector
                  key="sorting"
                  currentSortings={currentSortings}
                  onChange={onSortingsChange}
                  sortings={sortings}
                />
              </div>
            ),
            hasVisualizacionSettings && (
              <section key="visualization-settings" className="p-3 pb-0">
                <h3 className="mb-2 text-sm font-medium text-f1-foreground-secondary">
                  {settingsTitle}
                </h3>
                {visualizacionSettings}
              </section>
            ),
            <section
              key="reset"
              className="border-0 border-t border-solid border-t-f1-border p-3"
            >
              <F0Button
                size="sm"
                variant="ghost"
                icon={Reset}
                label={i18n.collections.visualizations.reset}
                onClick={onResetSettings}
              />
            </section>,
          ].filter(Boolean)}
        </PopoverContent>
      </Popover>
    </div>
  )
}
