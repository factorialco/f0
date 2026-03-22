import { useEffect, useRef } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson/F0AvatarPerson"
import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { PersonProfile } from "../../types"
import type { PopoverPosition } from "./useMentions"

export type MentionPopoverProps = {
  /** Whether the popover is visible */
  isOpen: boolean
  /** Search results to display */
  results: PersonProfile[]
  /** Whether a search is in progress */
  isLoading: boolean
  /** Currently highlighted index */
  selectedIndex: number
  /** Pixel position for the popover (left / bottom relative to parent) */
  position: PopoverPosition
  /** Callback when a person is selected */
  onSelect: (person: PersonProfile) => void
}

/**
 * Dropdown list for @mention autocomplete, positioned above the textarea.
 *
 * Renders person results with avatars, names, and optional job titles.
 * Supports keyboard navigation (highlighted index managed externally via useMentions).
 */
export function MentionPopover({
  isOpen,
  results,
  isLoading,
  selectedIndex,
  position,
  onSelect,
}: MentionPopoverProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const selectedItemRef = useRef<HTMLDivElement>(null)

  // Scroll selected item into view
  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({ block: "nearest" })
  }, [selectedIndex])

  const showLoading = isLoading && results.length === 0
  const showEmpty = !isLoading && results.length === 0

  if (!isOpen || showEmpty) return null

  return (
    <div
      ref={listRef}
      role="listbox"
      style={{
        position: "absolute",
        bottom: position ? `${position.bottom}px` : "100%",
        left: position ? `${position.left}px` : 0,
      }}
      className={cn(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      )}
    >
      {showLoading
        ? Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-2"
              aria-hidden="true"
            >
              <Skeleton className="size-5 shrink-0 rounded-full" />
              <Skeleton
                className={cn("h-4 rounded", i === 1 ? "w-24" : "w-32")}
              />
            </div>
          ))
        : results.map((person, index) => {
            const isSelected = index === selectedIndex
            const name = `${person.firstName} ${person.lastName}`.trim()

            return (
              <div
                key={String(person.id)}
                ref={isSelected ? selectedItemRef : undefined}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "flex cursor-pointer items-center gap-2 p-2 rounded",
                  "transition-colors",
                  isSelected
                    ? "bg-f1-background-secondary"
                    : "hover:bg-f1-background-secondary-hover"
                )}
                onMouseDown={(e) => {
                  // Prevent textarea blur
                  e.preventDefault()
                  onSelect(person)
                }}
                onMouseEnter={() => {
                  // Update visual highlight on hover — handled by parent via
                  // selectedIndex state, but we don't set it here to avoid
                  // fighting with keyboard nav. The highlight is purely visual
                  // via the isSelected check above.
                }}
              >
                <F0AvatarPerson
                  firstName={person.firstName}
                  lastName={person.lastName}
                  src={person.avatarUrl}
                  size="xsmall"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <OneEllipsis className="text-base font-medium text-f1-foreground">
                    {name}
                  </OneEllipsis>
                </div>
              </div>
            )
          })}
    </div>
  )
}
