import data from "@emoji-mart/data/sets/15/twitter.json"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { type CSSProperties, useEffect, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Reaction } from "@/icons/app"
import { EmojiPicker } from "@/lib/EmojiPicker"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { F0EmojiPickerProps } from "./types"

const EMOJI_BUTTON_SIZE = 36
const EMOJI_BUTTON_RADIUS = "10px"
const EMOJI_SIZE = 24
const MAX_FREQUENT_ROWS = 2

const EMOJI_PICKER_STYLE = {
  "--background-rgb": "255, 255, 255",
  "--border-radius": "12px",
  "--category-icon-size": "20px",
  "--font-size": "14px",
  "--rgb-accent": "1, 22, 55",
  "--rgb-background": "255, 255, 255",
  "--rgb-color": "1, 22, 55",
  "--rgb-input": "255, 255, 255",
} as CSSProperties

const LIGHT_SURFACE_STYLE = {
  "--neutral-0": "0 0% 100%",
  "--neutral-5": "220 88% 17% / 0.04",
  "--neutral-10": "216 89% 18% / 0.06",
  "--neutral-20": "214 70% 20% / 0.1",
  "--neutral-30": "213 87% 15% / 0.2",
  "--neutral-40": "219 97% 15% / 0.45",
  "--neutral-100": "218 48% 10%",
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

  const hasClearAction = clearable && Boolean(selectedEmoji)

  return (
    <Popover
      open={!disabled && isOpen}
      onOpenChange={disabled ? undefined : setIsOpen}
    >
      <PopoverTrigger asChild>
        <F0Button
          emoji={selectedEmoji ?? undefined}
          label={label}
          aria-label={selectedEmoji ? `${label}: ${selectedEmoji}` : label}
          variant="outline"
          size={size}
          hideLabel
          disabled={disabled}
          icon={!selectedEmoji ? Reaction : undefined}
        />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        collisionPadding={16}
        aria-label={label}
        style={EMOJI_PICKER_STYLE}
        className="flex h-[min(500px,var(--radix-popover-content-available-height))] w-fit flex-col !overflow-y-auto rounded-xl border-none bg-transparent p-0 shadow-none [&>div:first-child]:min-h-0 [&>div:first-child]:flex-1 [&>div:first-child]:overflow-hidden [&_em-emoji-picker]:!h-full [&_em-emoji-picker]:!min-h-0 [&_em-emoji-picker]:!max-h-[min(451px,calc(100vh-81px))] [&_em-emoji-picker]:!w-[372px] [&_em-emoji-picker]:!max-w-[calc(100vw-32px)] [@media(max-height:320px)]:[&>div:first-child]:!min-h-[230px] [@media(max-height:320px)]:[&_em-emoji-picker]:!min-h-[230px]"
      >
        <EmojiPicker
          className={cn(
            "box-border border border-solid border-[rgba(1,22,55,0.2)] shadow-none [--color-border-over:rgba(1,22,55,0.2)] [--color-border:rgba(1,22,55,0.08)] [--shadow:none]",
            hasClearAction && "rounded-b-none border-b-0"
          )}
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
        {hasClearAction ? (
          <div
            className="flex items-center justify-end rounded-b-md border border-solid border-[rgba(1,22,55,0.2)] border-t-[rgba(1,22,55,0.1)] bg-[rgb(255,255,255)] p-2 [@media(max-height:320px)]:px-1 [@media(max-height:320px)]:py-0"
            style={LIGHT_SURFACE_STYLE}
          >
            <F0Button
              label={i18n.actions.clear}
              variant="outline"
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
