import { GroupingDefinition, RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { F0SegmentedControl } from "@/experimental/Actions/F0SegmentedControl"

import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { useVisualizationMeta } from "../Settings/components/useVisualizationMeta"
import { SortingsDefinition, SummariesDefinition } from "../types"
import { Visualization } from "../visualizations/collection"

/**
 * Header control that lets the user switch between the available visualizations
 * with a single click. This is the only place visualizations are switched.
 *
 * Renders nothing when there is a single visualization.
 */
export const VisualizationSwitcher = <
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
  hideLabels,
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
  /** Show segments icon-only (e.g. when the header runs out of room). */
  hideLabels?: boolean
}): JSX.Element | null => {
  const i18n = useI18n()
  const getVisualizationMeta = useVisualizationMeta()

  if (!visualizations || visualizations.length <= 1) {
    return null
  }

  const items = visualizations.map((visualization, index) => {
    const { icon, label } = getVisualizationMeta(visualization)
    return { value: String(index), label, icon }
  })

  return (
    <F0SegmentedControl
      items={items}
      value={String(currentVisualization)}
      onChange={(value) => onVisualizationChange(Number(value))}
      hideLabels={hideLabels}
      ariaLabel={i18n.collections.visualizations.viewSelectorLabel}
    />
  )
}
