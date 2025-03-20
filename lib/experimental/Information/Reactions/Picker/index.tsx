import { Button, ButtonProps } from "@/components/Actions/Button"
import { Reaction } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import data from "@emoji-mart/data/sets/15/twitter.json"
import EmojiPicker from "@emoji-mart/react"
import { useState } from "react"

import "./index.css"

const EMOJI_BUTTON_SIZE = 36
const EMOJI_BUTTON_RADIUS = "10px"
const EMOJI_SIZE = 24
const MAX_FREQUENT_ROWS = 2

interface PickerProps {
  onSelect?: (emoji: string) => void
  locale?: string
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  lastEmojiReaction?: string
}

export function Picker({
  onSelect,
  locale = "en",
  size = "md",
  variant = "outline",
  lastEmojiReaction,
}: PickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          label="Add reaction"
          size={size}
          icon={lastEmojiReaction ? undefined : Reaction}
          emoji={lastEmojiReaction}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setIsOpen((o) => !o)
          }}
          hideLabel
        />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        className="w-fit border-none bg-transparent p-2 shadow-none"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
        }}
      >
        <EmojiPicker
          data={data}
          onEmojiSelect={(emoji: { native: string }) => {
            onSelect?.(emoji.native)
            setIsOpen(false)
          }}
          locale={locale}
          icons="outline"
          set="twitter"
          theme="light"
          emojiButtonSize={EMOJI_BUTTON_SIZE}
          emojiButtonRadius={EMOJI_BUTTON_RADIUS}
          emojiSize={EMOJI_SIZE}
          maxFrequentRows={MAX_FREQUENT_ROWS}
          skinTonePosition="none"
          previewPosition="none"
          searchPosition="top"
          navPosition="top"
          dynamicWidth
        />
      </PopoverContent>
    </Popover>
  )
}
