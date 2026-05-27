import {
  GroupingDefinition,
  OnSelectItemsCallback,
  RecordType,
} from "@/hooks/datasource"

import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { DataCollectionSource } from "../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import {
  CollectionProps,
  OnLoadDataCallback,
  OnLoadErrorCallback,
} from "../../types"
import { SortingsDefinition, SummariesDefinition } from "../../types"
import {
  collectionVisualizations,
  VisualizacionTypeDefinition,
} from "./collectionViewRegistry"
import { Visualization } from "./types"

/**
 * Returns the effective data source for a visualization.
 *
 * If the visualization entry carries its own `source` override, that source is
 * returned; otherwise the collection's top-level `source` is used.
 *
 * The override branch is type-narrowed via the presence of a `source` property
 * on the union — no type assertions required.
 */
export const getEffectiveSource = <
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
  >,
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
): DataCollectionSource<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> => {
  if ("source" in visualization && visualization.source) {
    return visualization.source
  }
  return source
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
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  visualization,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
  tmpFullWidth,
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
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  onSelectItems: OnSelectItemsCallback<R, Filters>
  onLoadData: OnLoadDataCallback<R, Filters>
  onLoadError: OnLoadErrorCallback
  clearSelectedItems?: () => void
  tmpFullWidth?: boolean
}): JSX.Element => {
  const effectiveSource = getEffectiveSource(visualization, source)

  if (visualization.type === "custom") {
    return visualization.component({
      source: effectiveSource,
      onLoadData,
      onLoadError,
      onSelectItems,
    })
  }

  const visualizationType = collectionVisualizations[
    visualization.type
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
    throw new Error(`Visualization type ${visualization.type} not found`)
  }

  return visualizationType.render({
    source: effectiveSource,
    ...visualization.options,
    onSelectItems,
    onLoadData,
    onLoadError,
    tmpFullWidth,
  })
}
