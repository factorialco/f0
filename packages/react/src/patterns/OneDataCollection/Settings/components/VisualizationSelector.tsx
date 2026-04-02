import { F0Icon } from "@/components/F0Icon"
import { RecordType } from "@/hooks/datasource"
import { GroupingDefinition } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { focusRing } from "@/lib/utils"
import { cn } from "@/lib/utils"

import { FiltersDefinition } from "../../../../components/OneFilterPicker/types"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SortingsDefinition, SummariesDefinition } from "../../types"
import {
  collectionVisualizations,
  Visualization,
} from "../../visualizations/collection"

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

  const handleVisualizationChange = (index: number) => {
    onVisualizationChange(index)
  }

  const getVisualizationMeta = (
    visualization: Visualization<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  ) => {
    if (visualization.type === "custom") {
      return {
        icon: visualization.icon,
        label: visualization.label,
      }
    }

    const visualizationType = collectionVisualizations[visualization.type]

    return {
      icon: visualizationType.icon,
      label: i18n.collections.visualizations[visualization.type],
    }
  }
  return (
    <div className="grid grid-cols-2 p-2">
      {visualizations.map((visualization, index) => {
        const { icon, label } = getVisualizationMeta(visualization)

        const isSelected = currentVisualization === index

        return (
          <button
            className={cn(
              "flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors",
              isSelected && "bg-f1-background-secondary text-f1-foreground",
              focusRing()
            )}
            key={visualization.type}
            onClick={() => handleVisualizationChange(index)}
          >
            <F0Icon icon={icon} />
            {label}
          </button>
        )
      })}
    </div>
  )
}
