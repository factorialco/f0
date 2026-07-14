import { useEffect, useLayoutEffect, useRef } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { People } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import {
  type MentionCandidate,
  type PopoverPosition,
} from "../hooks/useMentions"

export type ChatMentionPopoverProps = {
  isOpen: boolean
  /** Rows to display: the "everyone" option (when matching) then members. */
  results: MentionCandidate[]
  isLoading: boolean
  selectedIndex: number
  position: PopoverPosition
  onSelect: (candidate: MentionCandidate) => void
  /** Localized "Notify everyone in this group" description for the @here row. */
  everyoneDescription: string
}

/**
 * Inline `@`-mention autocomplete, positioned above the textarea — the comms
 * twin of the AI chat's MentionPopover (same chrome, positioning and skeletons).
 * Renders group members, with the "everyone" (`@here`) option pinned on top.
 */
export function ChatMentionPopover({
  isOpen,
  results,
  isLoading,
  selectedIndex,
  position,
  onSelect,
  everyoneDescription,
}: ChatMentionPopoverProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const selectedItemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({ block: "nearest" })
  }, [selectedIndex])

  useLayoutEffect(() => {
    const el = listRef.current
    const parent = el?.offsetParent as HTMLElement | null
    if (!el || !parent) return
    const overflow = el.offsetLeft + el.offsetWidth - parent.clientWidth
    if (overflow > 0) {
      el.style.left = `${Math.max(0, el.offsetLeft - overflow)}px`
    }
  }, [position])

  const hasUserResults = results.some((r) => r.kind === "user")
  const showMemberSkeleton = isLoading && !hasUserResults
  // Nothing matches at all and we're not loading → render nothing.
  if (!isOpen || (results.length === 0 && !isLoading)) return null

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
      {results.map((candidate, index) => {
        const isSelected = index === selectedIndex
        const key =
          candidate.kind === "everyone" ? "@everyone" : candidate.user.id
        return (
          <div
            key={key}
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
              e.preventDefault()
              onSelect(candidate)
            }}
          >
            {candidate.kind === "everyone" ? (
              <>
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary">
                  <F0Icon icon={People} size="sm" color="default" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <OneEllipsis className="text-base font-medium text-f1-foreground">
                    {candidate.label}
                  </OneEllipsis>
                  <OneEllipsis className="text-sm text-f1-foreground-secondary">
                    {everyoneDescription}
                  </OneEllipsis>
                </div>
              </>
            ) : (
              <>
                <F0Avatar
                  size="xs"
                  avatar={
                    candidate.user.avatar ?? {
                      type: "person",
                      firstName: candidate.user.name,
                      lastName: "",
                    }
                  }
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <OneEllipsis className="text-base font-medium text-f1-foreground">
                    {candidate.user.name}
                  </OneEllipsis>
                </div>
              </>
            )}
          </div>
        )
      })}

      {showMemberSkeleton &&
        Array.from({ length: 3 }, (_, i) => (
          <div
            key={`skeleton-${i}`}
            className="flex items-center gap-2 p-2"
            aria-hidden="true"
          >
            <Skeleton className="size-5 shrink-0 rounded-full" />
            <Skeleton
              className={cn("h-4 rounded", i === 1 ? "w-24" : "w-32")}
            />
          </div>
        ))}
    </div>
  )
}
