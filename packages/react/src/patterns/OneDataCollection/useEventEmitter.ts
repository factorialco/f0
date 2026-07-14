import { useCallback, useRef } from "react"

import {
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource/types/sortings.typings"

import {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import { useF0EventCatcher } from "../../lib/providers/events"
import { normalizeEventValue } from "../../lib/providers/events/normalize"

type UseEventEmitterParams<Sortings extends SortingsDefinition> = {
  defaultFilters?: FiltersState<FiltersDefinition>
  defaultSorting?: SortingsState<Sortings>
  /** Current visualization index, included in filter/preset change events when per-visualization filters are active */
  currentVisualization?: number
}

export const useEventEmitter = <Sortings extends SortingsDefinition>({
  defaultFilters,
  defaultSorting,
  currentVisualization,
}: UseEventEmitterParams<Sortings>) => {
  const latestFilters = useRef<
    UseEventEmitterParams<Sortings>["defaultFilters"] | undefined
  >(defaultFilters)
  const latestSortings = useRef<
    UseEventEmitterParams<Sortings>["defaultSorting"] | undefined
  >(defaultSorting)

  const { onEvent } = useF0EventCatcher()

  const emitFilterChange = useCallback(
    (filters: FiltersState<FiltersDefinition>) => {
      if (!filters) return

      const changedFilter = Object.entries(filters).find(
        ([field, value]) => latestFilters.current?.[field] !== value
      )

      if (!changedFilter) return

      const [field, value] = changedFilter

      const normalizedValue = normalizeEventValue(value)

      if (normalizedValue === undefined) return

      latestFilters.current = filters

      onEvent("datacollection.filter-change", {
        name: field,
        value: normalizedValue,
        ...(currentVisualization !== undefined && {
          visualization: currentVisualization,
        }),
      })
    },
    [onEvent, currentVisualization]
  )

  const emitSortingChange = useCallback(
    (sortings: SortingsState<Sortings>) => {
      if (
        (latestSortings?.current?.field === sortings?.field &&
          latestSortings?.current?.order === sortings?.order) ||
        !sortings ||
        typeof sortings.field !== "string"
      )
        return

      latestSortings.current = sortings

      onEvent("datacollection.sorting-change", {
        name: sortings.field,
        value: sortings.order,
      })
    },
    [onEvent]
  )

  const emitPresetClick = useCallback(
    (filters: FiltersState<FiltersDefinition>) => {
      if (!filters) return

      const changedFilter = Object.entries(filters).find(
        ([field, value]) => latestFilters.current?.[field] !== value
      )

      if (!changedFilter) return

      const [field, value] = changedFilter

      const normalizedValue = normalizeEventValue(value)

      if (normalizedValue === undefined) return

      latestFilters.current = filters

      onEvent("datacollection.preset-click", {
        name: field,
        value: normalizedValue,
        ...(currentVisualization !== undefined && {
          visualization: currentVisualization,
        }),
      })
    },
    [onEvent, currentVisualization]
  )

  return {
    emitFilterChange,
    emitSortingChange,
    emitPresetClick,
  }
}
