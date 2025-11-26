"use client"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { Spinner } from "@/experimental/Information/Spinner"
import { RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { useEffect, useMemo, useRef, useState } from "react"
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
}: InFilterComponentProps<T, R>) {
  const i18n = useI18n()

  const [searchTerm, setSearchTerm] = useState("")

  const canLoadMore = useRef(true)

  const { options, isLoading, error, loadOptions, loadMore } = useLoadOptions({
    schema: {
      ...schema,
      type: "in",
    },
    search: searchTerm,
  })

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isLoading) {
      canLoadMore.current = false
    } else {
      timeout = setTimeout(() => {
        canLoadMore.current = true
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [isLoading])

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

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    // Prevent multiple simultaneous calls
    if (isLoading || !loadMore || !canLoadMore.current) return

    const target = event.target as HTMLDivElement
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 50) {
      loadMore()
    }
  }

  const selectedText = `${value.length} ${
    value.length === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural
  }`.toLowerCase()

  return (
    <div
      className="flex min-h-full w-full flex-col"
      role="group"
      aria-label={schema.label}
    >
      {showSearch && (
        <div className="sticky left-0 right-0 top-0 rounded-tr-xl p-2 backdrop-blur-[8px]">
          <F1SearchBox
            placeholder={i18n.filters.inFilter.searchPlaceholder}
            value={searchTerm}
            onChange={setSearchTerm}
            clearable
          />
        </div>
      )}
      {isCompactMode && (
        <div className="mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" />
      )}
      <div
        className={cn(
          "overflow-y-auto px-2",
          isCompactMode && "px-1",
          isCompactMode ? "max-h-[360px]" : "h-full"
        )}
        onScroll={handleScroll}
      >
        {isCompactMode && (
          <div className="sticky left-0 right-0 top-0 z-10 flex w-full flex-1 items-center justify-between gap-1 rounded bg-f1-background/80 p-2 py-1 pr-1 backdrop-blur-[8px]">
            <span className="max-w-[250px] flex-1 whitespace-nowrap">
              <OneEllipsis className="text-f1-foreground-secondary">
                {selectedText}
              </OneEllipsis>
            </span>
            <F0Checkbox
              id="select-all"
              title={i18n.actions.selectAll}
              checked={value.length === filteredOptions.length}
              onCheckedChange={handleCheckSelectAll}
              presentational
              hideLabel
            />
          </div>
        )}
        {filteredOptions.map((option) => {
          const isSelected = value.includes(option.value)
          const optionId = `option-${String(option.value)}`

          return (
            <div
              key={String(option.value)}
              className={cn(
                "flex w-full flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded p-2 font-medium transition-colors hover:bg-f1-background-secondary",
                isCompactMode && "py-1 pr-1",
                focusRing()
              )}
              onClick={() => {
                onChange(
                  isSelected
                    ? value.filter((v) => v !== option.value)
                    : [...value, option.value]
                )
              }}
            >
              <span className="max-w-[250px] flex-1 whitespace-nowrap">
                <OneEllipsis>{option.label}</OneEllipsis>
              </span>
              <F0Checkbox
                id={optionId}
                title={option.label}
                checked={isSelected}
                presentational
                hideLabel
              />
            </div>
          )
        })}
        {isLoading && (
          <div className="flex w-full items-center justify-center py-4">
            <Spinner size="small" />
          </div>
        )}
      </div>
      {!isCompactMode && (
        <div className="sticky bottom-0 left-0 right-0 flex items-center justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
          <F0Button
            variant="outline"
            label="Select all"
            onClick={handleSelectAll}
            disabled={
              filteredOptions.length === 0 ||
              (Array.isArray(value) && value.length === filteredOptions.length)
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
  )
}
