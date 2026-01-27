import { useCallback, useRef } from "react"

import {
  SortingsDefinition,
  SortingsState,
} from "@/hooks/datasource/types/sortings.typings"

import {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import { EventScalar, useF0EventCatcher } from "../../lib/providers/events"

type UseEventEmitterParams<Sortings extends SortingsDefinition> = {
  defaultFilters?: FiltersState<FiltersDefinition>
  defaultSorting?: SortingsState<Sortings>
}

const isScalar = (value: unknown): value is EventScalar => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    Array.isArray(value)
  )
}

export const useEventEmitter = <Sortings extends SortingsDefinition>({
  defaultFilters,
  defaultSorting,
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

      if (!isScalar(value)) return

      latestFilters.current = filters

      onEvent("datacollection.filter-change", {
        name: field,
        value: value,
      })
    },
    [onEvent]
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

      if (!isScalar(value)) return

      latestFilters.current = filters

      onEvent("datacollection.preset-click", {
        name: field,
        value: value,
      })
    },
    [onEvent]
  )

  return {
    emitFilterChange,
    emitSortingChange,
    emitPresetClick,
  }
}
