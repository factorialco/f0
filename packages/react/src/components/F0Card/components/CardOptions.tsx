import { useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Bookmark, BookmarkFilled, Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { type CardBookmark } from "../types"

interface CardOptionsProps {
  /**
   * Actions to display in the dropdown menu
   */
  otherActions?: DropdownItem[]

  /**
   * Whether the card is selectable
   */
  selectable?: boolean

  /**
   * Whether the card is selected
   */
  selected?: boolean

  /**
   * The callback to handle the selection of the card
   */
  onSelect?: (selected: boolean) => void

  /**
   * Bookmark (save) toggle rendered alongside the other options.
   */
  bookmark?: CardBookmark

  /**
   * Title for accessibility
   */
  title?: string

  /**
   * Whether the options are displayed with an overlay (displayed with the image)
   */
  overlay?: boolean
}

export function CardOptions({
  otherActions,
  selectable = false,
  selected = false,
  onSelect,
  bookmark,
  title,
  overlay = false,
}: CardOptionsProps) {
  const translations = useI18n()
  const hasOtherActions = otherActions && otherActions.length > 0
  const [isOpen, setIsOpen] = useState(false)

  if (!hasOtherActions && !selectable && !bookmark) {
    return null
  }

  // When the bookmark is the only control it carries its own circular chrome,
  // so the shared translucent container is skipped to keep it visually clean.
  const onlyBookmark = !!bookmark && !hasOtherActions && !selectable

  return (
    <div
      className={cn(
        "flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]",
        (isOpen || selected || bookmark?.bookmarked) &&
          "delay-0 sm:opacity-100",
        overlay && "pointer-events-auto absolute right-2 top-2",
        overlay &&
          !onlyBookmark &&
          "rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"
      )}
    >
      {hasOtherActions && (
        <div className="flex items-center justify-center">
          <Dropdown items={otherActions} open={isOpen} onOpenChange={setIsOpen}>
            <ButtonInternal
              label={translations.actions.other}
              icon={Ellipsis}
              variant="ghost"
              size="sm"
              hideLabel
              pressed={isOpen}
              compact
              data-testid="card-options-dropdown"
              onClick={(e) => e.stopPropagation()}
            />
          </Dropdown>
        </div>
      )}
      {selectable && (
        <div className="flex items-center justify-center">
          <F0Checkbox
            title={title}
            checked={selected}
            onCheckedChange={onSelect}
            hideLabel
            stopPropagation
          />
        </div>
      )}
      {bookmark && (
        <button
          type="button"
          aria-label={bookmark.label ?? title}
          aria-pressed={bookmark.bookmarked}
          data-testid="card-bookmark-toggle"
          className={cn(
            "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-solid border-f1-border bg-f1-background p-0",
            focusRing()
          )}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            bookmark.onBookmarkChange(!bookmark.bookmarked)
          }}
        >
          <F0Icon
            icon={bookmark.bookmarked ? BookmarkFilled : Bookmark}
            size="sm"
          />
        </button>
      )}
    </div>
  )
}
