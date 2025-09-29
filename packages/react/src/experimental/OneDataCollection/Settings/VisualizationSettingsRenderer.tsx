import { CollectionProps } from "../types"

import { GroupingDefinition, RecordType } from "@/hooks/datasource"
import { ReactNode } from "react"
import { FiltersDefinition } from "../../../components/OneFilterPicker/types"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SortingsDefinition, SummariesDefinition } from "../types"
import {
  collectionVisualizations,
  VisualizacionTypeDefinition,
} from "../visualizations/collection/collectionViewRegistry"
import { Visualization } from "../visualizations/collection/types"

export const getVisualizationTypeRegistry = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  type: keyof typeof collectionVisualizations | "custom"
) => {
  if (type === "custom") {
    return null
  }

  const visualizationType = collectionVisualizations[
    type
  ] as VisualizacionTypeDefinition<
    CollectionProps<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping,
      object
    >
  >

  if (!visualizationType) {
    throw new Error(`Visualization type ${type} not found`)
  }

  return visualizationType
}

export const getSettingsResetHandler = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  visualization: Visualization<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
) => {
  const visualizationType = getVisualizationTypeRegistry(visualization.type)

  return visualizationType?.settings.resetHandler ?? null
}

const getSettingsRenderer = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  visualization: Visualization<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
) => {
  const visualizationType = getVisualizationTypeRegistry(visualization.type)
  return visualizationType?.settings.renderer ?? null
}

export const hasVisualizacionSettings = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  visualization: Visualization<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
) => {
  if (visualization.type === "custom") {
    return false
  }

  const settingsRenderer = getSettingsRenderer(visualization)
  if (settingsRenderer) {
    return (
      settingsRenderer(
        visualization.options as unknown as Parameters<
          typeof settingsRenderer
        >[0]
      ) !== null
    )
  }

  return false
}

/**
 * A component that renders the selected visualization settings for a collection.
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

export const VisualizationSettingsRenderer = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  visualization,
}: {
  visualization: Visualization<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
}): ReactNode => {
  if (visualization.type === "custom") {
    return null
  }

  const settingsRenderer = getSettingsRenderer(visualization)

  if (settingsRenderer) {
    return settingsRenderer(
      visualization.options as unknown as Parameters<typeof settingsRenderer>[0]
    )
  }

  return null
}
