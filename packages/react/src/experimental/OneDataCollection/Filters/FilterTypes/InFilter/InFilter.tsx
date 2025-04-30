"use client"

import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { Spinner } from "@/experimental/Information/Spinner"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { useEffect, useMemo, useState } from "react"
import { FilterTypeComponentProps } from "../types"
import { FilterOption, InFilterOptions } from "./types"

/**
 * Props for the InFilter component.
 * @template T - The type of values that can be selected
 */
type InFilterComponentProps<T = unknown> = FilterTypeComponentProps<
  T[],
  InFilterOptions<T>
>

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
 *     options: [
 *       { value: "active", label: "Active" },
 *       { value: "inactive", label: "Inactive" }
 *     ]
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
 *     options: async () => {
 *       const users = await fetchUsers();
 *       return users.map(user => ({ value: user.id, label: user.name }));
 *     }
 *   }}
 *   value={[]}
 *   onChange={setSelectedUsers}
 * />
 * ```
 */
export function InFilter<T extends string>({
  schema,
  value,
  onChange,
}: InFilterComponentProps<T>) {
  // Determine if options are synchronous or asynchronous
  const isAsyncOptions = typeof schema.options === "function"

  // For synchronous options, use useMemo to avoid unnecessary rerenders
  const syncOptions = useMemo(() => {
    return Array.isArray(schema.options) ? schema.options : []
  }, [schema.options])

  // Only use state for async options
  const [asyncOptions, setAsyncOptions] = useState<FilterOption<T>[]>([])
  const [isLoading, setIsLoading] = useState(isAsyncOptions)
  const [error, setError] = useState<Error | null>(null)

  const i18n = useI18n()

  // Determine which options to use for rendering
  const options = isAsyncOptions ? asyncOptions : syncOptions

  useEffect(() => {
    // Skip effect for synchronous options
    if (!isAsyncOptions) return

    // Load options from function
    const loadOptions = async () => {
      try {
        if (typeof schema.options === "function") {
          setIsLoading(true)
          setError(null)
          const result = await schema.options()
          setAsyncOptions(result as FilterOption<T>[])
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load options")
        )
        console.error("Error loading filter options:", err)
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [schema, schema.options, isAsyncOptions])

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center py-4">
        <Spinner size="small" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-f1-foreground-destructive flex w-full flex-col items-center justify-center gap-2 py-4">
        <p className="text-sm">
          {i18n.collections.filters.failedToLoadOptions}
        </p>
        <button
          className={cn(
            "text-f1-foreground-primary text-xs underline",
            focusRing()
          )}
          onClick={() => {
            // Re-trigger the effect to retry loading
            setAsyncOptions([])
            setError(null)
            setIsLoading(true)
          }}
        >
          {i18n.collections.filters.retry}
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

  return (
    <div
      className="flex w-full flex-col gap-1"
      role="group"
      aria-label={schema.label}
    >
      {options.map((option) => {
        const isSelected = value.includes(option.value)
        const optionId = `option-${String(option.value)}`

        return (
          <div
            key={String(option.value)}
            className={cn(
              "flex w-full cursor-pointer appearance-none items-center justify-between rounded p-2 font-medium transition-colors hover:bg-f1-background-secondary",
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
            <span className="line-clamp-1 w-fit text-left">{option.label}</span>
            <Checkbox
              id={optionId}
              title={option.label}
              checked={isSelected}
              presentational
              hideLabel
            />
          </div>
        )
      })}
    </div>
  )
}
