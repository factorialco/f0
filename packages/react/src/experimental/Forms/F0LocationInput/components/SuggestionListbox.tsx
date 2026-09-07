import { useEffect, useRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import type { F0LocationSuggestion } from "../types"

type Props = {
  id: string
  suggestions: F0LocationSuggestion[]
  activeIndex: number
  isSearching: boolean
  hasSearched: boolean
  optionId: (index: number) => string
  onPick: (suggestion: F0LocationSuggestion) => void
  onHover: (index: number) => void
}

/**
 * The list the combobox drives. Focus never enters it: the input keeps focus
 * and points at the active row with `aria-activedescendant`, so rows must not
 * steal focus on mousedown or the field blurs before the click lands.
 */
export const SuggestionListbox = ({
  id,
  suggestions,
  activeIndex,
  isSearching,
  hasSearched,
  optionId,
  onPick,
  onHover,
}: Props) => {
  const i18n = useI18n()
  const activeRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView?.({ block: "nearest" })
  }, [activeIndex])

  const showEmpty = hasSearched && !isSearching && suggestions.length === 0
  const showLoading = isSearching && suggestions.length === 0

  return (
    <ul
      id={id}
      role="listbox"
      aria-busy={isSearching || undefined}
      className="m-0 flex max-h-72 list-none flex-col gap-0.5 overflow-y-auto p-1"
    >
      {suggestions.map((suggestion, index) => {
        const isActive = index === activeIndex
        return (
          <li
            key={suggestion.id}
            ref={isActive ? activeRef : undefined}
            id={optionId(index)}
            role="option"
            aria-selected={isActive}
            className={cn(
              "flex cursor-pointer flex-col rounded px-2 py-1.5 transition-colors",
              isActive
                ? "bg-f1-background-secondary"
                : "hover:bg-f1-background-secondary-hover"
            )}
            onMouseDown={(event) => event.preventDefault()}
            onMouseMove={() => onHover(index)}
            onClick={() => onPick(suggestion)}
          >
            <span className="truncate text-f1-foreground">
              {suggestion.label}
            </span>
            {suggestion.description && (
              <span className="truncate text-sm text-f1-foreground-secondary">
                {suggestion.description}
              </span>
            )}
          </li>
        )
      })}
      {showLoading && (
        <li
          role="status"
          className="flex items-center gap-2 px-2 py-1.5 text-sm text-f1-foreground-secondary"
        >
          <Spinner size="small" />
          {i18n.locationInput.searching}
        </li>
      )}
      {showEmpty && (
        <li
          role="status"
          className="px-2 py-1.5 text-sm text-f1-foreground-secondary"
        >
          {i18n.locationInput.noResults}
        </li>
      )}
    </ul>
  )
}
