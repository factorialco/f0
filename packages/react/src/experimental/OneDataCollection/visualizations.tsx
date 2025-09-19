import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  GroupingDefinition,
  OnSelectItemsCallback,
  RecordType,
} from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { Kanban, Sliders, Table } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useState } from "react"
import { DataCollectionSource } from "./hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "./item-actions"
import { NavigationFiltersDefinition } from "./navigationFilters/types"
import { SummariesDefinition } from "./summary"
import type { OnLoadDataCallback, OnLoadErrorCallback } from "./types"
import type { CardVisualizationOptions } from "./visualizations/collection/Card"
import { CardCollection } from "./visualizations/collection/Card"
import type { TableVisualizationOptions } from "./visualizations/collection/Table"
import { TableCollection } from "./visualizations/collection/Table"

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
export type Visualization<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> =
  | {
      /** Card-based visualization type */
      type: "card"
      /** Configuration options for card visualization */
      options: CardVisualizationOptions<Record, Filters, Sortings>
    }
  | {
      /** Table-based visualization type */
      type: "table"
      /** Configuration options for table visualization */
      options: TableVisualizationOptions<Record, Filters, Sortings, Summaries>
    }
  | {
      /** Custom visualization type */
      type: "custom"
      /** Human-readable label for the visualization */
      label: string
      /** Icon to represent the visualization in UI */
      icon: IconType
      /** Custom component to render the visualization */
      component: (props: {
        onLoadData: OnLoadDataCallback<Record, Filters>
        onLoadError: OnLoadErrorCallback
        source: DataCollectionSource<
          Record,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
      }) => JSX.Element
    }

/**
 * Represents the type of visualization.
 * TODO: This should be a union of all the types in the Visualization type.
 */
export type VisualizationType = "card" | "table" | "custom"

/**
 * Props interface for components that support multiple visualizations.
 * Used to configure how data can be displayed in different formats.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template Actions - The actions type extending ActionsDefinition
 */
export type VisualizationProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  /** Array of available visualization configurations */
  visualizations?: ReadonlyArray<
    Visualization<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
}

/**
 * A component that renders a selector for switching between different visualization types.
 * Provides buttons for each available visualization with appropriate icons.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template Actions - The actions type extending ActionsDefinition
 *
 * @param visualizations - Array of available visualizations
 * @param currentVisualization - Index of the currently selected visualization
 * @param onVisualizationChange - Callback function when visualization selection changes
 *
 * @returns A row of buttons for switching between visualizations
 */
export const VisualizationSelector = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  visualizations,
  currentVisualization,
  onVisualizationChange,
}: {
  visualizations: ReadonlyArray<
    Visualization<
      Record,
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
}): JSX.Element => {
  const i18n = useI18n()
  const [open, setOpen] = useState(false)

  const handleVisualizationChange = (index: number) => {
    setOpen(false)
    onVisualizationChange(index)
  }

  return (
    <div className="flex gap-2">
      <Popover open={open}>
        <PopoverTrigger asChild onClick={() => setOpen(!open)}>
          <F0Button
            variant="outline"
            label="Filters"
            icon={Sliders}
            onClick={() => {}}
            hideLabel
          />
        </PopoverTrigger>
        <PopoverContent
          className="w-[280px] rounded-md border border-solid border-f1-border-secondary p-2"
          align="end"
          sideOffset={8}
          alignOffset={-6}
        >
          <div className="grid grid-cols-2">
            {visualizations.map((visualization, index) => {
              const isSelected = currentVisualization === index
              const IconVisualization: IconType =
                visualization.type === "custom"
                  ? visualization.icon
                  : visualization.type === "table"
                    ? Table
                    : Kanban

              const label =
                visualization.type === "custom"
                  ? visualization.label
                  : i18n.collections.visualizations[visualization.type]

              return (
                <button
                  className={cn(
                    "flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors",
                    isSelected &&
                      "bg-f1-background-secondary text-f1-foreground",
                    focusRing()
                  )}
                  key={visualization.type}
                  onClick={() => handleVisualizationChange(index)}
                >
                  <F0Icon icon={IconVisualization} />
                  {label}
                </button>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

/**
 * A component that renders the selected visualization for a collection.
 * Handles switching between different visualization types (table, card, or custom view)
 * and passes appropriate props to the specific visualization component.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The item actions type extending Item ActionsDefinition
 *
 * @param visualization - The configuration for the current visualization
 * @param source - The data source to visualize
 *
 * @returns The rendered visualization component (TableCollection, CardCollection, or custom component)
 */

export const VisualizationRenderer = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  visualization,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
}: {
  visualization: Visualization<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  source: DataCollectionSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  onSelectItems: OnSelectItemsCallback<Record, Filters>
  onLoadData: OnLoadDataCallback<Record, Filters>
  onLoadError: OnLoadErrorCallback
  clearSelectedItems?: () => void
}): JSX.Element => {
  switch (visualization.type) {
    case "table":
      return (
        <TableCollection<
          Record,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          source={source}
          {...visualization.options}
          onSelectItems={onSelectItems}
          onLoadData={onLoadData}
          onLoadError={onLoadError}
        />
      )
    case "card":
      return (
        <CardCollection<
          Record,
          Filters,
          Sortings,
          Summaries,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          source={source}
          {...visualization.options}
          onSelectItems={onSelectItems}
          onLoadData={onLoadData}
          onLoadError={onLoadError}
        />
      )
    case "custom":
      return visualization.component({ source, onLoadData, onLoadError })
  }
}
