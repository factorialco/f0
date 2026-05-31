import { useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Checkbox } from "@/components/F0Checkbox"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Bookmark, BookmarkFilled, Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

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

  return (
    <div
      className={cn(
        "flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]",
        (isOpen || selected || !!bookmark) && "delay-0 sm:opacity-100",
        overlay &&
          "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"
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
        <div className="flex items-center justify-center">
          <ButtonInternal
            label={bookmark.label ?? title ?? ""}
            icon={bookmark.bookmarked ? BookmarkFilled : Bookmark}
            variant="ghost"
            size="sm"
            hideLabel
            pressed={bookmark.bookmarked}
            compact
            data-testid="card-bookmark-toggle"
            onClick={(e) => {
              e.stopPropagation()
              bookmark.onBookmarkChange(!bookmark.bookmarked)
            }}
          />
        </div>
      )}
    </div>
  )
}
