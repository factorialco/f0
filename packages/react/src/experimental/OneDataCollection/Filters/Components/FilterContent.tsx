"use client"

import { Input } from "@/ui/input"
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react"
import { Button } from "../../../../components/Actions/Button"
import { Search } from "../../../../icons/app"
import { EqFilter } from "../FilterTypes/EqFilter"
import { InFilter } from "../FilterTypes/InFilter"
import { SearchFilter } from "../FilterTypes/SearchFilter"
import type {
  EqFilterDefinition,
  FilterOption,
  FiltersDefinition,
  FiltersState,
  InFilterDefinition,
} from "../types"

/**
 * Props for the FilterContent component.
 * @template Definition - The type defining the structure of available filters
 */
type FilterContentProps<Definition extends FiltersDefinition> = {
  /** The currently selected filter key, if any */
  selectedFilterKey: keyof Definition | null
  /** The schema defining available filters and their configurations */
  definition: Definition
  /** Current temporary state of filters being configured */
  tempFilters: FiltersState<Definition>
  /** Callback fired when a filter value changes */
  onFilterChange: (key: keyof Definition, value: unknown) => void
}

/**
 * Renders the configuration content for the currently selected filter.
 *
 * Features:
 * - Dynamically renders different filter interfaces based on filter type
 * - Supports "in" filters with multi-select capabilities
 * - Supports "search" filters with text input
 * - Provides search functionality for filtering options within "in" filters
 * - Handles both static and dynamically loaded options
 * - Supports "Select All" functionality for multi-select filters
 *
 * This component renders the right panel in the filters popover interface
 * and adapts its UI based on the selected filter type.
 *
 * @template Definition - The type defining the structure of available filters
 */
export function FilterContent<Definition extends FiltersDefinition>({
  selectedFilterKey,
  definition,
  tempFilters,
  onFilterChange,
}: FilterContentProps<Definition>) {
  const [searchTerm, setSearchTerm] = useState("")
  const deferredSearchTerm = useDeferredValue(searchTerm)
  const [filteredOptions, setFilteredOptions] = useState<
    FilterOption<unknown>[]
  >([])
  const [loadedOptions, setLoadedOptions] = useState<FilterOption<unknown>[]>(
    []
  )
  const [isLoading, setIsLoading] = useState(false)

  // Reset state when filter changes
  useEffect(() => {
    setSearchTerm("")
    setFilteredOptions([])
    setLoadedOptions([])
  }, [selectedFilterKey])

  // Handle filtering options based on search term
  useEffect(() => {
    if (!selectedFilterKey) return

    const filter = definition[selectedFilterKey]
    if (filter.type !== "in") return

    // Apply search filter to loaded options
    if (loadedOptions.length > 0) {
      if (deferredSearchTerm) {
        setFilteredOptions(
          loadedOptions.filter((option) =>
            option.label
              .toLowerCase()
              .includes(deferredSearchTerm.toLowerCase())
          )
        )
      } else {
        setFilteredOptions(loadedOptions)
      }
    }
  }, [selectedFilterKey, deferredSearchTerm, loadedOptions, definition])

  // Load options from static array or function
  useEffect(() => {
    if (!selectedFilterKey) return

    const filter = definition[selectedFilterKey]
    if (filter.type !== "in") return

    const loadOptions = async () => {
      try {
        setIsLoading(true)
        const ops = await (typeof filter.options === "function"
          ? filter.options()
          : filter.options)
        if (ops !== undefined) {
          setLoadedOptions(ops)
          setFilteredOptions(ops)
        } else {
          throw new Error("No options found")
        }
      } catch (error) {
        console.error("Error loading options:", error)
        setLoadedOptions([])
        setFilteredOptions([])
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [selectedFilterKey, definition])

  if (!selectedFilterKey) return null

  const filter = definition[selectedFilterKey]
  const currentValue = tempFilters[selectedFilterKey]

  // Determine if we should show the search input
  // Show search when we have loaded options (regardless of whether they came from static or async source)
  const showSearch =
    filter.type === "in" && loadedOptions.length > 0 && !isLoading

  const handleSelectAll = () => {
    if (filter.type === "in") {
      const allValues = filteredOptions.map((option) => option.value)
      const currentValues = (currentValue ?? []) as unknown[]
      const newValues = [...currentValues]

      allValues.forEach((value) => {
        if (!newValues.includes(value)) {
          newValues.push(value)
        }
      })

      onFilterChange(selectedFilterKey, newValues)
    }
  }

  const handleClear = () => {
    if (selectedFilterKey) {
      onFilterChange(selectedFilterKey, filter.type === "in" ? [] : "")
    }
  }

  // Create a modified filter with filtered options for the InFilter component
  const getModifiedFilter = (originalFilter: InFilterDefinition<unknown>) => {
    if (deferredSearchTerm && loadedOptions.length > 0) {
      // If we're searching, pass the filtered options
      return { ...originalFilter, options: filteredOptions }
    }
    // Otherwise, pass the original filter to let InFilter handle loading
    return originalFilter
  }

  return (
    <div className="relative flex w-full flex-col gap-1">
      <div className="relative flex h-full flex-col justify-between overflow-y-auto">
        <div className="relative flex flex-col gap-2 p-2">
          {showSearch && (
            <div className="flex gap-3">
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
                className="h-8 rounded"
                icon={Search}
                clearable
              />
            </div>
          )}
          {filter.type === "in" && (
            <InFilter
              filter={getModifiedFilter(filter as InFilterDefinition<unknown>)}
              value={(currentValue ?? []) as unknown[]}
              onChange={(value) => onFilterChange(selectedFilterKey, value)}
            />
          )}
          {filter.type === "search" && (
            <SearchFilter
              filter={filter}
              value={(currentValue ?? "") as string}
              onChange={(value) => onFilterChange(selectedFilterKey, value)}
            />
          )}
          {filter.type === "eq" && (
            <EqFilter
              filter={filter as EqFilterDefinition<unknown>}
              value={currentValue as unknown}
              onChange={(value) => onFilterChange(selectedFilterKey, value)}
            />
          )}
        </div>
        {filter.type === "in" && filteredOptions.length > 0 && (
          <div className="sticky bottom-0 left-0 right-0 flex items-center justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
            <Button
              variant="outline"
              label="Select all"
              onClick={handleSelectAll}
              disabled={
                filteredOptions.length === 0 ||
                (Array.isArray(currentValue) &&
                  currentValue.length === filteredOptions.length)
              }
              size="sm"
            />
            <Button
              variant="ghost"
              label="Clear"
              onClick={handleClear}
              disabled={
                !Array.isArray(currentValue) || currentValue.length === 0
              }
              size="sm"
            />
          </div>
        )}
        {filter.type === "eq" && (
          <div className="sticky bottom-0 left-0 right-0 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
            <Button
              variant="ghost"
              label="Clear"
              size="sm"
              disabled={!currentValue}
              onClick={handleClear}
            />
          </div>
        )}
      </div>
    </div>
  )
}
