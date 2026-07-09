import { useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { ArrowUp } from "@/icons/app"
import { focusRing } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { Popover, PopoverAnchor, PopoverContent } from "@/ui/popover"

import type {
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
} from "../../F0AiChat/types"

const MAX_ITEMS_PER_GROUP = 5

function pickRandomItems(
  list: WelcomeScreenSuggestionItem[],
  amount: number = MAX_ITEMS_PER_GROUP
): WelcomeScreenSuggestionItem[] {
  if (list.length <= amount) return list
  return [...list].sort(() => 0.5 - Math.random()).slice(0, amount)
}

export type WelcomeScreenSuggestionsRowProps = {
  suggestions: WelcomeScreenSuggestion[]
  /**
   * Fired when the user picks a sub-suggestion. Receives the picked `item`
   * AND its parent `group` so callers (tracking, analytics) can attribute
   * the click to the full path the user took.
   */
  onItemClick: (
    item: WelcomeScreenSuggestionItem,
    group: WelcomeScreenSuggestion
  ) => void
  /**
   * Fires while the user hovers an item (passes the item) and when the
   * hover ends (passes null). Used to preview the item's prompt as the
   * textarea placeholder.
   */
  onItemHover?: (item: WelcomeScreenSuggestionItem | null) => void
  /**
   * Side the popover opens towards. Defaults to "top" — the row sits above the
   * textarea, so the popover opens upward into the empty space rather than
   * covering the composer. "bottom" remains available for layouts that place
   * the row below the textarea.
   */
  side?: "top" | "bottom"
}

/**
 * Group buttons + shared popover that lives next to the textarea on the
 * welcome screen. A single Popover, anchored to the row container so its
 * content spans the full textarea width and always opens above-left.
 */
export const WelcomeScreenSuggestionsRow = ({
  suggestions,
  onItemClick,
  onItemHover,
  side = "top",
}: WelcomeScreenSuggestionsRowProps) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const activeGroup = activeIdx !== null ? suggestions[activeIdx] : null

  if (suggestions.length === 0) return null

  return (
    <Popover
      open={activeGroup !== null}
      onOpenChange={(next) => {
        if (!next) {
          setActiveIdx(null)
          onItemHover?.(null)
        }
      }}
    >
      <PopoverAnchor asChild>
        <div ref={rowRef} className="flex w-full flex-wrap items-center gap-2">
          {/* Plain buttons, NOT `PopoverTrigger`s: Radix registers a single
              trigger per popover (the last one mounted), whose built-in toggle
              fires after the button's own onClick and overwrites the group
              selection — so switching to the last group closed the popover
              instead. The buttons fully own the toggle/switch semantics. */}
          {suggestions.map((group, index) => (
            <ButtonInternal
              key={`${group.label}-${index}`}
              variant="outline"
              label={group.label}
              icon={group.icon}
              pressed={activeIdx === index}
              onClick={() => {
                setActiveIdx((current) => (current === index ? null : index))
                onItemHover?.(null)
              }}
            />
          ))}
        </div>
      </PopoverAnchor>
      {activeGroup && (
        <PopoverContent
          side={side}
          align="start"
          sideOffset={8}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onPointerDownOutside={(event) => {
            // Group-button clicks own the open/switch/close semantics; letting
            // the popover also dismiss on the same pointerdown would race the
            // click and close it before the switch lands.
            const target = event.target as Node | null
            if (target && rowRef.current?.contains(target)) {
              event.preventDefault()
            }
          }}
          className={cn(
            "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
            "w-[var(--radix-popover-trigger-width)]"
          )}
        >
          <div className="flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary">
            <F0Icon icon={activeGroup.icon} size="sm" />
            <span>{activeGroup.label}</span>
          </div>
          <div className="flex flex-col">
            {pickRandomItems(activeGroup.items).map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onItemClick(item, activeGroup)
                  setActiveIdx(null)
                  onItemHover?.(null)
                }}
                onMouseEnter={() => onItemHover?.(item)}
                onMouseLeave={() => onItemHover?.(null)}
                onFocus={() => onItemHover?.(item)}
                onBlur={() => onItemHover?.(null)}
                className={cn(
                  "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
                  focusRing()
                )}
              >
                <span className="min-w-0 flex-1 truncate">{item.title}</span>
                <span
                  aria-hidden
                  className="flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <F0Icon icon={ArrowUp} size="sm" />
                </span>
              </button>
            ))}
          </div>
        </PopoverContent>
      )}
    </Popover>
  )
}
