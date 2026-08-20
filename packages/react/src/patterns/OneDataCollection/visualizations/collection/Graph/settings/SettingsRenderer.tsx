import type { F0GraphNodeTagColumn } from "@/patterns/F0Graph"

import { RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { FiltersDefinition } from "@/patterns/F0FilterPicker/types"

import type { SortAndHideListItem } from "../../Table/components/SortAndHideList/types"
import type { GraphVisualizationOptions } from "../types"

import { useDataCollectionSettings } from "../../../../Settings/SettingsProvider"
import { SortAndHideSettings } from "../../../../Settings/SortAndHideSettings"

export type GraphVisualizationSettings = {
  /** Metadata order (tag-type ids), matching the table column settings shape. */
  order?: string[]
  /** Hidden metadata (tag-type ids). */
  hidden?: string[]
}

type GraphSettingsProps = {
  tagTypes: ReadonlyArray<F0GraphNodeTagColumn>
  labels?: Partial<Record<F0GraphNodeTagColumn, string>>
  defaultVisibleTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>
  pinnedTagTypes?: ReadonlyArray<F0GraphNodeTagColumn>
  lockedTagTypes?: Partial<Record<F0GraphNodeTagColumn, string>>
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
  lockedTagTypes,
}: GraphSettingsProps) => {
  const { settings } = useDataCollectionSettings()
  const graphSettings = settings.visualization.graph ?? {}

  const defaultVisible = new Set(defaultVisibleTagTypes ?? tagTypes)
  const pinned = new Set<string>(pinnedTagTypes ?? [])
  const locked = lockedTagTypes ?? {}
  const hidden = new Set(
    graphSettings.hidden ?? tagTypes.filter((type) => !defaultVisible.has(type))
  )
  const savedOrder = graphSettings.order ?? []

  // Apply the saved order first, then append any types not yet ordered.
  const orderedTypes = [
    ...savedOrder.filter((type) =>
      tagTypes.includes(type as F0GraphNodeTagColumn)
    ),
    ...tagTypes.filter((type) => !savedOrder.includes(type)),
  ]

  const items: SortAndHideListItem[] = orderedTypes.map((type) => {
    const lockReason = locked[type as F0GraphNodeTagColumn]
    // Locked by permission takes precedence over pinned/default: the row is
    // forced OFF + disabled with the reason in a tooltip (no lock icon).
    if (lockReason !== undefined) {
      return {
        id: type,
        label: labels?.[type as F0GraphNodeTagColumn] ?? type,
        sortable: false,
        canHide: false,
        visible: false,
        disabledReason: lockReason,
      }
    }

    return {
      id: type,
      label: labels?.[type as F0GraphNodeTagColumn] ?? type,
      // Pinned tags can't be reordered or hidden — shown with a lock icon, just
      // like frozen columns in the table settings.
      sortable: !pinned.has(type),
      canHide: !pinned.has(type),
      visible: pinned.has(type) || !hidden.has(type),
    }
  })

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
      lockedTagTypes={props.lockedTagTypes}
    />
  )
}
