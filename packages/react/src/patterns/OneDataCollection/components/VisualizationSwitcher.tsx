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
 * Segments are icon-only: the labelled variant carried too much visual weight
 * for a secondary header control and pulled the eye away from the content. The
 * labels stay in the accessibility tree and surface in a tooltip when the
 * pointer rests on a segment. Where there is no pointer to rest (touch), they
 * stay visible, because nothing else in the header names the current view.
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
      hideLabels
      ariaLabel={i18n.collections.visualizations.viewSelectorLabel}
    />
  )
}
