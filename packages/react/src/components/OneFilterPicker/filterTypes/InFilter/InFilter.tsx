"use client"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { Spinner } from "@/experimental/Information/Spinner"
import { RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Select, SelectContent, SelectItem } from "@/ui/Select"
import { useEffect, useMemo, useState } from "react"
import { FilterTypeComponentProps } from "../types"
import { InFilterOptions } from "./types"
import { useLoadOptions } from "./useLoadOptions"

/**
 * Props for the InFilter component.
 * @template T - The type of values that can be selected
 */
type InFilterComponentProps<
  T = unknown,
  R extends RecordType = RecordType,
> = FilterTypeComponentProps<T[], InFilterOptions<T, R>>

/**
 * A multi-select filter component that allows users to select multiple options from a predefined list.
 * Renders a list of checkboxes that can be toggled on/off to include/exclude values.
 *
 * Features:
 * - Visual indication of selected state
 * - Toggle functionality (select/deselect)
 * - Maintains order of selection
 * - Supports both static and async options
 * - Shows loading state for async options
 *
 * @template T - The type of values that can be selected
 *
 * @example
 * ```tsx
 * // Static options
 * <InFilter
 *   filter={{
 *     type: "in",
 *     label: "Status",
 *     options: {
 *       options: [
 *         { value: "active", label: "Active" },
 *         { value: "inactive", label: "Inactive" }
 *       ]
 *     }
 *   }}
 *   value={["active"]}
 *   onChange={setSelectedStatus}
 * />
 *
 * // Async options
 * <InFilter
 *   filter={{
 *     type: "in",
 *     label: "Users",
 *     options: {
 *       options: async () => {
 *         const users = await fetchUsers();
 *         return users.map(user => ({ value: user.id, label: user.name }));
 *       }
 *     }
 *   }}
 *   value={[]}
 *   onChange={setSelectedUsers}
 * />
 * ```
 */
export function InFilter<T extends string, R extends RecordType = RecordType>({
  schema,
  value,
  onChange,
  isCompactMode,
  top,
  bottom,
}: InFilterComponentProps<T, R>) {
  const i18n = useI18n()

  const [searchTerm, setSearchTerm] = useState("")

  const { options, isLoading, error, loadOptions, loadMore } = useLoadOptions({
    schema: {
      ...schema,
      type: "in",
    },
    search: searchTerm,
  })

  const hasSource = "source" in schema.options

  useEffect(() => {
    setSearchTerm("")
  }, [schema])

  const filteredOptions = useMemo(
    () =>
      hasSource
        ? options
        : options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
          ),
    [hasSource, options, searchTerm]
  )

  const items = useMemo(
    () =>
      (filteredOptions || []).map((option) => ({
        value: option.value,
        height: 40,
        item: (
          <SelectItem
            value={option.value}
            className="pb-2 pt-2 font-medium first-of-type:pb-2 first-of-type:pt-2"
          >
            {option.label}
          </SelectItem>
        ),
      })),
    [filteredOptions]
  )

  if (isLoading && !options.length) {
    return (
      <div className="flex w-full items-center justify-center py-4">
        <Spinner size="small" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-f1-foreground-destructive flex w-full flex-col items-center justify-center gap-2 py-4">
        <p className="text-sm">{i18n.filters.failedToLoadOptions}</p>
        <button
          className={cn(
            "text-f1-foreground-primary text-xs underline",
            focusRing()
          )}
          onClick={() => {
            // Re-trigger the effect to retry loading
            loadOptions(true)
          }}
        >
          {i18n.filters.retry}
        </button>
      </div>
    )
  }

  if (options.length === 0) {
    return (
      <div className="flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary">
        No options available
      </div>
    )
  }

  // Determine if we should show the search input
  // Show search when we have loaded options (regardless of whether they came from static or async source)
  const showSearch = options.length > 0

  const handleSelectAll = () => {
    const allValues = filteredOptions.map((option) => option.value)
    const currentValues = value ?? []
    const newValues = [...currentValues]

    allValues.forEach((value) => {
      if (!newValues.includes(value)) {
        newValues.push(value)
      }
    })

    onChange(newValues)
  }

  const handleCheckSelectAll = (checked: boolean) => {
    if (checked) {
      handleSelectAll()
    } else {
      onChange([])
    }
  }

  const handleClear = () => {
    onChange([])
  }

  const selectedText = `${value.length} ${
    value.length === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural
  }`.toLowerCase()

  return (
    <div aria-label={schema.label} role="group" className="h-full">
      <Select
        value={value}
        onValueChange={onChange}
        as="list-with-scroll"
        multiple
      >
        <SelectContent
          items={items}
          onScrollBottom={loadMore}
          isLoading={isLoading}
          isLoadingMore={isLoading}
          className="h-full"
          asChild={!isCompactMode}
          top={
            <div className="flex w-full flex-col">
              {top}
              {showSearch && (
                <div className="sticky left-0 right-0 top-0 rounded-tr-xl p-2 backdrop-blur-[8px]">
                  <F1SearchBox
                    placeholder={i18n.toc.search}
                    value={searchTerm}
                    onChange={setSearchTerm}
                    autoFocus
                    clearable
                  />
                </div>
              )}
              <div className="mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" />
              <div className="flex w-full items-center justify-between gap-1 rounded py-1 pl-4 pr-3">
                <span className="max-w-[250px] flex-1 whitespace-nowrap">
                  <OneEllipsis className="text-f1-foreground-secondary">
                    {selectedText}
                  </OneEllipsis>
                </span>
                {!hasSource && (
                  <F0Checkbox
                    id="select-all"
                    title="Select all"
                    checked={value.length === filteredOptions.length}
                    onCheckedChange={handleCheckSelectAll}
                    presentational
                    hideLabel
                  />
                )}
              </div>
            </div>
          }
          bottom={
            <div className="flex w-full flex-col">
              {bottom}
              {!isCompactMode && (
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
                  <F0Button
                    variant="outline"
                    label="Select all"
                    onClick={handleSelectAll}
                    disabled={
                      filteredOptions.length === 0 ||
                      (Array.isArray(value) &&
                        value.length === filteredOptions.length)
                    }
                    size="sm"
                  />
                  <F0Button
                    variant="ghost"
                    label="Clear"
                    onClick={handleClear}
                    disabled={!Array.isArray(value) || value.length === 0}
                    size="sm"
                  />
                </div>
              )}
            </div>
          }
        />
      </Select>
    </div>
  )
}
