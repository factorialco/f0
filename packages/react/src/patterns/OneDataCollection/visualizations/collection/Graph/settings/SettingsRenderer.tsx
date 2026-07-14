import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import type { F0GraphNodeTagType } from "@/patterns/F0Graph"

import { useDataCollectionSettings } from "../../../../Settings/SettingsProvider"
import { SortAndHideSettings } from "../../../../Settings/SortAndHideSettings"
import type { SortAndHideListItem } from "../../Table/components/SortAndHideList/types"
import type { GraphVisualizationOptions } from "../types"

export type GraphVisualizationSettings = {
  /** Metadata order (tag-type ids), matching the table column settings shape. */
  order?: string[]
  /** Hidden metadata (tag-type ids). */
  hidden?: string[]
}

type GraphSettingsProps = {
  tagTypes: ReadonlyArray<F0GraphNodeTagType>
  labels?: Partial<Record<F0GraphNodeTagType, string>>
  defaultVisibleTagTypes?: ReadonlyArray<F0GraphNodeTagType>
  pinnedTagTypes?: ReadonlyArray<F0GraphNodeTagType>
}

/**
 * Metadata visibility + ordering for the graph view. Maps tag types to list
 * rows and hands them to the shared `SortAndHideSettings` — the very same UI
 * the table uses for its columns.
 */
const GraphSettings = ({
  tagTypes,
  labels,
  defaultVisibleTagTypes,
  pinnedTagTypes,
}: GraphSettingsProps) => {
  const { settings } = useDataCollectionSettings()
  const graphSettings = settings.visualization.graph ?? {}

  const defaultVisible = new Set(defaultVisibleTagTypes ?? tagTypes)
  const pinned = new Set<string>(pinnedTagTypes ?? [])
  const hidden = new Set(
    graphSettings.hidden ?? tagTypes.filter((type) => !defaultVisible.has(type))
  )
  const savedOrder = graphSettings.order ?? []

  // Apply the saved order first, then append any types not yet ordered.
  const orderedTypes = [
    ...savedOrder.filter((type) =>
      tagTypes.includes(type as F0GraphNodeTagType)
    ),
    ...tagTypes.filter((type) => !savedOrder.includes(type)),
  ]

  const items: SortAndHideListItem[] = orderedTypes.map((type) => ({
    id: type,
    label: labels?.[type as F0GraphNodeTagType] ?? type,
    // Pinned tags can't be reordered or hidden — shown with a lock icon, just
    // like frozen columns in the table settings.
    sortable: !pinned.has(type),
    canHide: !pinned.has(type),
    visible: pinned.has(type) || !hidden.has(type),
  }))

  return (
    <SortAndHideSettings
      items={items}
      visualizationKey="graph"
      allowSorting
      allowHiding
    />
  )
}

export const SettingsRenderer = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
>(
  props: Readonly<GraphVisualizationOptions<R, Filters, Sortings>>
) => {
  if (!props.nodeTagTypes || props.nodeTagTypes.length === 0) {
    return null
  }

  return (
    <GraphSettings
      tagTypes={props.nodeTagTypes}
      labels={props.nodeTagTypeLabels}
      defaultVisibleTagTypes={props.defaultVisibleTagTypes}
      pinnedTagTypes={props.pinnedTagTypes}
    />
  )
}
