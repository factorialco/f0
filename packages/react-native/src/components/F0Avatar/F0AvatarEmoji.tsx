import React from "react"
import { View } from "react-native"

import { EmojiImage } from "../../lib/emojis"
import { cn } from "../../lib/utils"

import {
  type F0AvatarEmojiProps,
  type F0AvatarUtilitySize,
} from "./F0Avatar.types"

const containerSizes: Record<F0AvatarUtilitySize, string> = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-8 h-8 rounded",
  lg: "w-10 h-10 rounded-lg",
}

const emojiSizes = {
  sm: { icon: "w-4 h-4", text: "text-xs" },
  md: { icon: "w-5 h-5", text: "text-sm" },
  lg: { icon: "w-6 h-6", text: "text-md" },
} as const

export const F0AvatarEmoji = React.memo(function F0AvatarEmoji({
  emoji,
  size = "sm",
}: F0AvatarEmojiProps) {
  return (
    <View
      className={cn(
        containerSizes[size],
        "flex aspect-square items-center justify-center border border-solid border-f0-border-secondary bg-f0-background dark:bg-f0-background-inverse-secondary"
      )}
    >
      <EmojiImage emoji={emoji} size={emojiSizes[size]} />
    </View>
  )
})
