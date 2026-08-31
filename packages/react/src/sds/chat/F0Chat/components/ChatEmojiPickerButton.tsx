import { type ReactNode, useState } from "react"

import { type F0ButtonProps } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { type IconType } from "@/components/F0Icon"
import { Reaction } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { EmojiPicker } from "./EmojiPicker"

/**
 * The chat's own emoji-picker trigger.
 *
 * F0Chat used to borrow the Reactions kit's `Picker`, which is emoji-mart. It
 * doesn't any more: the picker in this folder is F0Chat's, and only the
 * conversation gets it — the composer, the message action menu and the
 * add-reaction affordance next to the pills. Everything else in the product
 * (posts, surveys, the channel icon input) keeps the emoji-mart one, on purpose.
 */
export const ChatEmojiPickerButton = ({
  onSelect,
  label,
  size = "md",
  variant = "outline",
  icon,
}: {
  onSelect: (emoji: string) => void
  /** Accessible label and tooltip for the trigger. */
  label: string
  size?: F0ButtonProps["size"]
  variant?: F0ButtonProps["variant"]
  icon?: IconType
}): ReactNode => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <ButtonInternal
          variant={variant}
          compact
          hideLabel
          label={label}
          size={size}
          icon={icon ?? Reaction}
          pressed={isOpen}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setIsOpen((open) => !open)
          }}
        />
      </PopoverTrigger>
      {/* `PopoverContent` already brings the border, the surface, the shadow and
          `max-h` from Radix's available height. The old call sites cancelled all
          of it with `shadow-none bg-transparent border-none` and had the panel
          redraw its own — which is why the picker had no shadow. Only two
          overrides are needed: the panel sets its own width, and the scroll
          belongs to the emoji grid, not to the whole panel. */}
      <PopoverContent
        align="start"
        collisionPadding={12}
        className="w-auto overflow-hidden p-0 border border-solid border-f1-border-secondary rounded-lg shadow-md"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
        }}
      >
        <EmojiPicker
          onSelect={(emoji) => {
            onSelect(emoji)
            setIsOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
