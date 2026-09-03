"use client"

import { useMemo } from "react"

import { F0Select, type F0SelectItemObject } from "@/components/F0Select"

import type { ResolvedFilterTagOption } from "../internal-types"
import type {
  F0FilterTagPickerFilterDefinition,
  F0FilterTagPickerOptionValue,
} from "../types"

export interface CategoryFilterSelection {
  filterKey: string
  value: F0FilterTagPickerOptionValue
}

interface CategoryFilterSelectProps {
  definition: F0FilterTagPickerFilterDefinition
  disabled: boolean
  loading: boolean
  onChange: (values: string[], options: F0SelectItemObject<string>[]) => void
  onOpenChange: (open: boolean) => void
  options: ResolvedFilterTagOption[]
  value: string[]
}

export function encodeCategoryFilterSelection(
  selection: CategoryFilterSelection
) {
  return JSON.stringify(selection)
}

export function decodeCategoryFilterSelection(
  selection: string
): CategoryFilterSelection | null {
  try {
    const parsed = JSON.parse(selection) as Partial<CategoryFilterSelection>
    if (
      typeof parsed.filterKey !== "string" ||
      (typeof parsed.value !== "string" && typeof parsed.value !== "number")
    ) {
      return null
    }

    return { filterKey: parsed.filterKey, value: parsed.value }
  } catch {
    return null
  }
}

export function CategoryFilterSelect({
  definition,
  disabled,
  loading,
  onChange,
  onOpenChange,
  options,
  value,
}: CategoryFilterSelectProps) {
  const selectOptions = useMemo(
    () =>
      options.map((option) => ({
        label: option.displayLabel,
        value: encodeCategoryFilterSelection({
          filterKey: option.filterKey,
          value: option.value,
        }),
      })),
    [options]
  )
  const commonProps = {
    clearable: true,
    disableSelectAll: true,
    disabled,
    hideLabel: true,
    label: definition.label,
    multiple: true as const,
    onChange: (
      nextValue: string[],
      _items: unknown[],
      nextOptions: F0SelectItemObject<string>[]
    ) => onChange(nextValue, nextOptions),
    onOpenChange,
    placeholder: definition.label,
    preserveSelectionOnDatasetChange: true,
    showSearchBox: true,
    size: "sm" as const,
    value,
  }

  return <F0Select {...commonProps} loading={loading} options={selectOptions} />
}
