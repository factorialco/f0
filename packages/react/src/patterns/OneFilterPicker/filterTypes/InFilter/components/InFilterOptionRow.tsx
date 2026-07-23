"use client"

import { useCallback, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { ChevronDown, ChevronRight } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { InFilterOptionItem } from "../types"
import { cacheLabel, cacheNestedLabel } from "../useLoadOptions"
import { hasSelectedDescendant, optionMatchesSearch } from "./option-utils"

export type InFilterOptionRowProps<T extends string> = {
  option: InFilterOptionItem<T>
  isSelected: boolean
  onToggle: () => void
  isCompactMode?: boolean
  depth: number
  onFilterChange?: (key: string, value: unknown) => void
  allFiltersValue?: Record<string, unknown>
  cacheKey: string
  searchTerm: string
  autoExpand: boolean
}

export function InFilterOptionRow<T extends string>({
  option,
  isSelected,
  onToggle,
  isCompactMode,
  depth,
  onFilterChange,
  allFiltersValue,
  cacheKey,
  searchTerm,
  autoExpand,
}: InFilterOptionRowProps<T>) {
  const [expanded, setExpanded] = useState(false)
  const i18n = useI18n()
  const hasChildren = !!option.children?.options.length

  const effectiveExpanded = expanded || (autoExpand && hasChildren)

  const childFilterKey = option.children?.filterKey
  const childValues = (
    childFilterKey && allFiltersValue
      ? ((allFiltersValue[childFilterKey] as T[]) ?? [])
      : []
  ) as T[]

  const handleToggleChild = useCallback(
    (childValue: T, childLabel: string) => {
      if (!childFilterKey || !onFilterChange) return
      const isChildSelected = childValues.includes(childValue)
      if (!isChildSelected) {
        cacheLabel(cacheKey, childValue, childLabel)
        const contextualLabel = `${option.label} > ${childLabel}`
        cacheNestedLabel(childFilterKey, childValue, contextualLabel)
      }
      const newValues = isChildSelected
        ? childValues.filter((v) => v !== childValue)
        : [...childValues, childValue]
      onFilterChange(childFilterKey, newValues)
    },
    [childFilterKey, childValues, onFilterChange, cacheKey, option.label]
  )

  const hasDescendantSelected =
    hasChildren && hasSelectedDescendant(option, allFiltersValue)
  const expansionLabel = i18n.t(
    effectiveExpanded ? "actions.collapseItem" : "actions.expandItem",
    { title: option.label }
  )

  return (
    <div
      className={cn(
        "w-full",
        depth === 0 && !isCompactMode && "px-2",
        depth === 0 &&
          "border-0 border-b border-solid border-f1-border-secondary last:border-b-0"
      )}
    >
      <div
        className="flex flex-row items-center overflow-hidden min-w-0"
        style={{ paddingLeft: `${depth * 24}px` }}
      >
        {hasChildren && (
          <div className="relative shrink-0">
            <F0Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded((prev) => !prev)}
              icon={effectiveExpanded ? ChevronDown : ChevronRight}
              label={expansionLabel}
              aria-label={
                hasDescendantSelected
                  ? `${expansionLabel}. ${i18n.status.selected.singular}`
                  : expansionLabel
              }
              aria-expanded={effectiveExpanded}
              hideLabel
            />
            {hasDescendantSelected && !effectiveExpanded && (
              <span
                aria-hidden="true"
                className="absolute -right-px -top-px h-2 w-2 rounded-full bg-f1-background-selected-bold"
              />
            )}
          </div>
        )}
        <div
          className={cn(
            "flex min-w-0 flex-1 cursor-pointer appearance-none items-center gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary",
            isCompactMode && "py-1 pr-1",
            focusRing()
          )}
        >
          <div
            className="flex min-w-0 flex-1 items-center justify-between gap-1"
            onClick={onToggle}
          >
            <span className="min-w-0 flex-1">
              <OneEllipsis>{option.label}</OneEllipsis>
            </span>
            {/* Keep the checkbox interactive so keyboard and assistive-technology
                users can toggle the option. Stop its click from reaching the
                mouse-friendly row handler and toggling the value twice. */}
            <div
              className="shrink-0"
              onClick={(event) => event.stopPropagation()}
            >
              <F0Checkbox
                title={option.label}
                checked={isSelected}
                onCheckedChange={(checked) => {
                  if (checked !== isSelected) onToggle()
                }}
                hideLabel
              />
            </div>
          </div>
        </div>
      </div>
      {effectiveExpanded && option.children && (
        <div>
          {option.children.options
            .filter(
              (child) => !searchTerm || optionMatchesSearch(child, searchTerm)
            )
            .map((child) => {
              const isChildSelected = childValues.includes(child.value as T)
              return (
                <InFilterOptionRow
                  key={String(child.value)}
                  option={child as InFilterOptionItem<T>}
                  isSelected={isChildSelected}
                  onToggle={() =>
                    handleToggleChild(child.value as T, child.label)
                  }
                  isCompactMode={isCompactMode}
                  depth={depth + 1}
                  onFilterChange={onFilterChange}
                  allFiltersValue={allFiltersValue}
                  cacheKey={cacheKey}
                  searchTerm={searchTerm}
                  autoExpand={autoExpand}
                />
              )
            })}
        </div>
      )}
    </div>
  )
}
