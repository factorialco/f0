import { IconType } from "@/components/F0Icon"
import { GroupingDefinition, RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"

import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SortingsDefinition, SummariesDefinition } from "../../types"
import {
  collectionVisualizations,
  Visualization,
} from "../../visualizations/collection"

/**
 * Returns a resolver for a visualization's icon + localized label. Shared by the
 * Settings popover selector and the header view switcher so both stay in sync.
 */
export const useVisualizationMeta = () => {
  const i18n = useI18n()

  return <
    Record extends RecordType,
    Filters extends FiltersDefinition,
    Sortings extends SortingsDefinition,
    Summaries extends SummariesDefinition,
    ItemActions extends ItemActionsDefinition<Record>,
    NavigationFilters extends NavigationFiltersDefinition,
    Grouping extends GroupingDefinition<Record>,
  >(
    visualization: Visualization<
      Record,
      Filters,
      Sortings,
      Summaries,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  ): { icon: IconType; label: string } => {
    if (visualization.type === "custom") {
      return { icon: visualization.icon, label: visualization.label }
    }

    return {
      icon: collectionVisualizations[visualization.type].icon,
      label:
        visualization.label ??
        i18n.collections.visualizations[visualization.type],
    }
  }
}
