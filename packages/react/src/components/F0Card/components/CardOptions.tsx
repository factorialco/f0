import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Checkbox } from "@/components/F0Checkbox"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useState } from "react"

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
  title,
  overlay = false,
}: CardOptionsProps) {
  const translations = useI18n()
  const hasOtherActions = otherActions && otherActions.length > 0
  const [isOpen, setIsOpen] = useState(false)

  if (!hasOtherActions && !selectable) {
    return null
  }

  return (
    <div
      className={cn(
        "flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]",
        (isOpen || selected) && "delay-0 sm:opacity-100",
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
          />
        </div>
      )}
    </div>
  )
}
