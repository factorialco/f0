"use client"

import { useEffect, useMemo } from "react"

import type { InFilterOptionItem } from "@/patterns/OneFilterPicker/filterTypes/InFilter/types"

import { useLoadOptions } from "@/patterns/OneFilterPicker/filterTypes/InFilter/useLoadOptions"

import type {
  FilterTagOptionsState,
  ResolvedFilterTagOption,
} from "../internal-types"
import type {
  F0FilterTagPickerFilterDefinition,
  F0FilterTagPickerOptionValue,
} from "../types"

interface FilterOptionsLoaderProps {
  filterKey: string
  definition: F0FilterTagPickerFilterDefinition
  search?: string
  onStateChange: (filterKey: string, state: FilterTagOptionsState) => void
}

function optionId(filterKey: string, value: F0FilterTagPickerOptionValue) {
  return `${filterKey}:${typeof value}:${String(value)}`
}

export function flattenOptions(
  options: InFilterOptionItem<F0FilterTagPickerOptionValue>[],
  context: {
    categoryKey: string
    categoryLabel: string
    filterKey: string
    ancestors: string[]
  }
): ResolvedFilterTagOption[] {
  return options.flatMap((option) => {
    const path = [...context.ancestors, option.label]
    const resolvedOption: ResolvedFilterTagOption = {
      id: optionId(context.filterKey, option.value),
      categoryKey: context.categoryKey,
      categoryLabel: context.categoryLabel,
      filterKey: context.filterKey,
      label: option.label,
      displayLabel: path.join(" › "),
      value: option.value,
    }

    if (!option.children) {
      return [resolvedOption]
    }

    return [
      resolvedOption,
      ...flattenOptions(option.children.options, {
        ...context,
        filterKey: option.children.filterKey,
        ancestors: path,
      }),
    ]
  })
}

export function FilterOptionsLoader({
  filterKey,
  definition,
  search,
  onStateChange,
}: FilterOptionsLoaderProps) {
  const { options, isLoading, error, loadMore, hasMore } = useLoadOptions({
    schema: definition,
    search,
  })

  const resolvedOptions = useMemo(
    () =>
      flattenOptions(options, {
        categoryKey: filterKey,
        categoryLabel: definition.label,
        filterKey,
        ancestors: [],
      }),
    [definition.label, filterKey, options]
  )

  useEffect(() => {
    onStateChange(filterKey, {
      options: resolvedOptions,
      isLoading,
      error,
      hasMore,
      loadMore,
    })
  }, [
    error,
    filterKey,
    hasMore,
    isLoading,
    loadMore,
    onStateChange,
    resolvedOptions,
  ])

  return null
}
