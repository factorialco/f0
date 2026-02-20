"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { ScrollArea } from "@/ui/scrollarea"
import { Spinner } from "@/ui/Spinner"
import { RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { FilterTypeComponentProps } from "../types"
import { InFilterFlatOption } from "./components/InFilterFlatOption"
import { InFilterOptionRow } from "./components/InFilterOptionRow"
import { optionMatchesSearch } from "./components/option-utils"
import { InFilterOptions } from "./types"
import { cacheLabel, getCacheKey, useLoadOptions } from "./useLoadOptions"

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
 * - Hierarchical nested options with independent selection per filter key
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
  onFilterChange,
  allFiltersValue,
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

  const cacheKey = getCacheKey(schema)

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

  const searchTermLower = searchTerm.toLowerCase()

  const filteredOptions = useMemo(
    () =>
      hasSource
        ? options
        : options.filter((option) =>
            optionMatchesSearch(option, searchTermLower)
          ),
    [hasSource, options, searchTermLower]
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
            loadOptions(true)
          }}
        >
          {i18n.filters.retry}
        </button>
      </div>
    )
  }

  if (options.length === 0 && !hasSource) {
    return (
      <div className="flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary">
        No options available
      </div>
    )
  }

  const showSearch = options.length > 0 || hasSource

  const handleSelectAll = () => {
    const currentValues = value ?? []
    const newValues = [...currentValues]

    filteredOptions.forEach((option) => {
      if (!newValues.includes(option.value)) {
        newValues.push(option.value)
        cacheLabel(cacheKey, option.value, option.label)
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

  const handleScrollBottom = () => {
    if (isLoading || !loadMore || !canLoadMore.current) return
    loadMore()
  }

  const handleToggleOption = (optionValue: T, optionLabel: string) => {
    const isSelected = value.includes(optionValue)
    if (!isSelected) {
      cacheLabel(cacheKey, optionValue, optionLabel)
    }
    onChange(
      isSelected
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]
    )
  }

  const selectedText = `${value.length} ${
    value.length === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural
  }`.toLowerCase()

  const hasAnyChildren = filteredOptions.some(
    (opt) => !!opt.children?.options.length
  )
  const autoExpand = !!searchTermLower && hasAnyChildren

  return (
    <div
      className="flex max-h-full w-full flex-col flex-1 min-h-0"
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
      <ScrollArea
        className={cn(
          "[&>div]:pb-2",
          isCompactMode && "px-1",
          isCompactMode ? "max-h-[360px]" : "flex-1 min-h-0"
        )}
        onScrollBottom={handleScrollBottom}
        scrollMargin={50}
      >
        {isCompactMode && (
          <div className="sticky left-0 right-0 top-0 z-10 flex w-full flex-1 items-center justify-between gap-1 rounded bg-f1-background/80 p-2 py-1 pr-1 backdrop-blur-[8px]">
            <span className="min-w-0 flex-1">
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
        {filteredOptions.length === 0 && !isLoading && (
          <div className="flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary">
            {i18n.select.noResults}
          </div>
        )}
        {hasAnyChildren
          ? filteredOptions.map((option) => (
              <InFilterOptionRow
                key={String(option.value)}
                option={option}
                isSelected={value.includes(option.value)}
                onToggle={() => handleToggleOption(option.value, option.label)}
                isCompactMode={isCompactMode}
                depth={0}
                onFilterChange={onFilterChange}
                allFiltersValue={allFiltersValue}
                cacheKey={cacheKey}
                searchTerm={searchTermLower}
                autoExpand={autoExpand}
              />
            ))
          : filteredOptions.map((option) => (
              <InFilterFlatOption
                key={String(option.value)}
                option={option}
                isSelected={value.includes(option.value)}
                onToggle={() => handleToggleOption(option.value, option.label)}
                isCompactMode={isCompactMode}
              />
            ))}
        {isLoading && (
          <div className="flex w-full items-center justify-center py-4">
            <Spinner size="small" />
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
