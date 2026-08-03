import data from "@emoji-mart/data/sets/15/twitter.json"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { type CSSProperties, useEffect, useState } from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import { Reaction } from "@/icons/app"
import { EmojiPicker } from "@/lib/EmojiPicker"
import { EmojiImage, type EmojiImageProps } from "@/lib/emojis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { F0EmojiPickerProps, F0EmojiPickerSize } from "./types"

const EMOJI_BUTTON_SIZE = 36
const EMOJI_BUTTON_RADIUS = "10px"
const EMOJI_SIZE = 24
const MAX_FREQUENT_ROWS = 2
const TRIGGER_CLASSES = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
}
const SELECTED_AVATAR_CLASSES = {
  sm: "size-6 rounded-sm",
  md: "size-8 rounded",
  lg: "size-10 rounded-md",
}
const SELECTED_EMOJI_SIZES: Record<F0EmojiPickerSize, EmojiImageProps["size"]> =
  {
    sm: "xs",
    md: "sm",
    lg: "md",
  }
const EMOJI_PICKER_STYLE = {
  "--background-rgb": "255, 255, 255",
  "--border-radius": "12px",
  "--category-icon-size": "20px",
  "--color-border-over": "hsl(var(--neutral-10))",
  "--color-border": "hsl(var(--neutral-10))",
  "--font-size": "14px",
  "--rgb-accent": "1, 22, 55",
  "--rgb-background": "255, 255, 255",
  "--rgb-color": "1, 22, 55",
  "--rgb-input": "255, 255, 255",
  "--shadow": "0px 4px 20px 0px #0d162514",
} as CSSProperties

export const F0EmojiPicker = ({
  label,
  value,
  defaultValue = null,
  onChange,
  clearable = false,
  disabled = false,
  locale = "en",
  size = "md",
}: F0EmojiPickerProps) => {
  const i18n = useI18n()
  const [selectedEmoji = null, setSelectedEmoji] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange,
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (disabled) {
      setIsOpen(false)
    }
  }, [disabled])

  const handleEmojiSelect = (emoji: { native: string }) => {
    setSelectedEmoji(emoji.native)
    setIsOpen(false)
  }

  const handleClear = () => {
    setSelectedEmoji(null)
    setIsOpen(false)
  }

  return (
    <Popover
      open={!disabled && isOpen}
      onOpenChange={disabled ? undefined : setIsOpen}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={selectedEmoji ? `${label}: ${selectedEmoji}` : label}
          title={label}
          disabled={disabled}
          className={cn(
            "disabled:cursor-not-allowed disabled:opacity-30",
            TRIGGER_CLASSES[size],
            focusRing()
          )}
        >
          {selectedEmoji ? (
            <div
              className={cn(
                "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
                SELECTED_AVATAR_CLASSES[size]
              )}
            >
              <EmojiImage
                emoji={selectedEmoji}
                size={SELECTED_EMOJI_SIZES[size]}
                alt=""
              />
            </div>
          ) : (
            <F0AvatarIcon icon={Reaction} size={size} />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        aria-label={label}
        style={EMOJI_PICKER_STYLE}
        className="flex h-[min(500px,var(--radix-popover-content-available-height))] w-fit flex-col !overflow-hidden border-none bg-transparent p-2 shadow-none [&>div:first-child]:min-h-0 [&>div:first-child]:flex-1 [&>div:first-child]:overflow-hidden [&_em-emoji-picker]:!h-full [&_em-emoji-picker]:!w-[372px] [&_em-emoji-picker]:!max-w-[calc(100vw-32px)] [&_em-emoji-picker]:!max-h-[min(451px,calc(100vh-81px))]"
      >
        <EmojiPicker
          data={data}
          onEmojiSelect={handleEmojiSelect}
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
        {clearable && selectedEmoji ? (
          <div className="flex shrink-0 justify-end border-0 border-t border-solid border-[#e5e7eb] bg-white pt-2 [&_button]:!text-[#011637] [&_button:hover]:!bg-[#f5f6f8]">
            <F0Button
              label={i18n.actions.clear}
              variant="ghost"
              size="sm"
              onClick={handleClear}
            />
          </div>
        ) : null}
      </PopoverContent>
    </Popover>
  )
}

F0EmojiPicker.displayName = "F0EmojiPicker"
