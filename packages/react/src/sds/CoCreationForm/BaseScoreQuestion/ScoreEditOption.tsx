import data from "@emoji-mart/data/sets/15/twitter.json"
import EmojiPicker from "@emoji-mart/react"
import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { EmojiImage } from "@/lib/emojis"
import { cn } from "@/lib/utils"

import "../../Information/Reactions/Picker/index.css"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

export type ScoreEditOptionProps = {
  option: { value: number; label: string }
  selected: boolean
  onClick: (value: number) => void
  onRemove?: (value: number) => void
  onChangeLabel?: (value: number, newLabel: string) => void
  isEditMode?: boolean
  disabled?: boolean
  isEmojiMode?: boolean
}

export const ScoreEditOption = ({
  option,
  selected,
  onClick,
  onChangeLabel,
  isEditMode,
  disabled,
  isEmojiMode = false,
}: ScoreEditOptionProps) => {
  const { value, label } = option
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)

  const handleClick = () => {
    if (disabled || isEditMode) return
    onClick(value)
  }

  const handleEmojiSelect = (emoji: { native: string }) => {
    onChangeLabel?.(value, emoji.native)
    setIsEmojiPickerOpen(false)
  }

  return (
    <div
      className={cn(
        "group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
        selected && "border-f1-border-selected-bold",
        !disabled && !isEditMode ? "cursor-pointer" : "cursor-default"
      )}
      onClick={handleClick}
    >
      {isEditMode ? (
        <>
          {isEmojiMode ? (
            <Popover
              open={isEmojiPickerOpen}
              onOpenChange={setIsEmojiPickerOpen}
            >
              <PopoverTrigger asChild>
                <F0Button
                  emoji={label}
                  label={value.toString()}
                  variant="ghost"
                  hideLabel
                />
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="center"
                className="w-fit border-none bg-transparent p-2 shadow-none"
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                }}
              >
                <EmojiPicker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  locale="en"
                  icons="outline"
                  set="twitter"
                  theme="light"
                  emojiButtonSize={32}
                  emojiButtonRadius="10px"
                  emojiSize={24}
                  maxFrequentRows={2}
                  skinTonePosition="none"
                  previewPosition="none"
                  searchPosition="top"
                  navPosition="top"
                  dynamicWidth
                />
              </PopoverContent>
            </Popover>
          ) : (
            <span className="text-base font-medium">{label}</span>
          )}
        </>
      ) : (
        <EmojiImage emoji={label} size="sm" />
      )}
    </div>
  )
}
