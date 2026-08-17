import { useEffect, useLayoutEffect, useRef } from "react"

import { EmojiImage } from "@/lib/emojis"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

import {
  type EmojiAutocompleteCandidate,
  getEmojiAutocompleteOptionId,
} from "../hooks/useEmojiAutocomplete"
import { type PopoverPosition } from "../hooks/useMentions"

export type ChatEmojiAutocompleteProps = {
  isOpen: boolean
  results: EmojiAutocompleteCandidate[]
  selectedIndex: number
  position: PopoverPosition
  listboxId: string
  label: string
  onSelect: (candidate: EmojiAutocompleteCandidate) => void
  onHighlight: (index: number) => void
}

/**
 * Slack-style `:` emoji autocomplete. Focus remains in the textarea while the
 * active row follows keyboard or pointer navigation.
 */
export function ChatEmojiAutocomplete({
  isOpen,
  results,
  selectedIndex,
  position,
  listboxId,
  label,
  onSelect,
  onHighlight,
}: ChatEmojiAutocompleteProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const selectedItemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({ block: "nearest" })
  }, [selectedIndex])

  useLayoutEffect(() => {
    const element = listRef.current
    const parent = element?.offsetParent as HTMLElement | null
    if (!element || !parent) return
    const overflow =
      element.offsetLeft + element.offsetWidth - parent.clientWidth
    if (overflow > 0) {
      element.style.left = `${Math.max(0, element.offsetLeft - overflow)}px`
    }
  }, [position])

  if (!isOpen || results.length === 0) return null

  return (
    <div
      ref={listRef}
      id={listboxId}
      role="listbox"
      aria-label={label}
      style={{
        position: "absolute",
        bottom: position ? `${position.bottom}px` : "100%",
        left: position ? `${position.left}px` : 0,
      }}
      className={cn(
        "z-50",
        "w-72 max-h-[328px] overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      )}
    >
      {results.map((candidate, index) => {
        const isSelected = index === selectedIndex
        return (
          <div
            key={candidate.id}
            ref={isSelected ? selectedItemRef : undefined}
            id={getEmojiAutocompleteOptionId(listboxId, candidate.id)}
            role="option"
            aria-selected={isSelected}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded p-2",
              "transition-colors",
              isSelected
                ? "bg-f1-background-secondary"
                : "hover:bg-f1-background-secondary-hover"
            )}
            onMouseEnter={() => onHighlight(index)}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => onSelect(candidate)}
          >
            <span className="flex size-6 shrink-0 items-center justify-center">
              <EmojiImage emoji={candidate.native} size="md" alt="" />
            </span>
            <div className="flex min-w-0 flex-1 items-baseline gap-2">
              <OneEllipsis className="shrink-0 font-medium text-f1-foreground">
                {`:${candidate.id}:`}
              </OneEllipsis>
              <OneEllipsis className="text-sm text-f1-foreground-secondary">
                {candidate.name}
              </OneEllipsis>
            </div>
          </div>
        )
      })}
    </div>
  )
}
