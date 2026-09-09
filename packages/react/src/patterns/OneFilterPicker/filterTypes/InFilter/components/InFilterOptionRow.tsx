"use client"

import { useCallback, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { ChevronDown, ChevronRight } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { InFilterOptionItem } from "../types"
import { cacheLabel, cacheNestedLabel } from "../useLoadOptions"
import { InFilterOptionCheckbox } from "./InFilterOptionCheckbox"
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

/**
 * The chevron that opens a nested option, with a dot when the collapsed
 * subtree holds a selection — otherwise there is nothing on screen to say so.
 */
const OptionExpandButton = ({
  label,
  expanded,
  hasSelectedDescendant,
  onToggle,
}: {
  /** The option's own label, which names the control. */
  label: string
  expanded: boolean
  hasSelectedDescendant: boolean
  onToggle: () => void
}) => {
  const i18n = useI18n()
  const accessibleName = hasSelectedDescendant
    ? `${label}. ${i18n.status.selected.singular}`
    : label

  return (
    <div className="relative shrink-0">
      <F0Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        icon={expanded ? ChevronDown : ChevronRight}
        label={label}
        aria-label={accessibleName}
        aria-expanded={expanded}
        hideLabel
      />
      {hasSelectedDescendant && !expanded ? (
        <span
          aria-hidden="true"
          className="absolute -right-px -top-px h-2 w-2 rounded-full bg-f1-background-selected-bold"
        />
      ) : null}
    </div>
  )
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
      if (!childFilterKey || !onFilterChange) {
        return
      }
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
        {hasChildren ? (
          <OptionExpandButton
            label={expansionLabel}
            expanded={effectiveExpanded}
            hasSelectedDescendant={hasDescendantSelected}
            onToggle={() => setExpanded((prev) => !prev)}
          />
        ) : null}
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
            <InFilterOptionCheckbox
              label={option.label}
              isSelected={isSelected}
              onToggle={onToggle}
            />
          </div>
        </div>
      </div>
      {effectiveExpanded && option.children ? (
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
      ) : null}
    </div>
  )
}
