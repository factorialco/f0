import { EmojiImage, EmojiImageProps } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { sizesMapping } from "../BaseAvatar"

export const avatarEmojiSizes = ["sm", "md", "lg"] as const
export type F0AvatarEmojiProps = {
  emoji: string
  size?: (typeof avatarEmojiSizes)[number]
}

const sizes = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded",
  lg: "w-10 h-10 rounded-md",
}

const imageSizes: Record<
  (typeof avatarEmojiSizes)[number],
  EmojiImageProps["size"]
> = {
  sm: "xs",
  md: "sm",
  lg: "md",
} as const

export const F0AvatarEmoji = ({ emoji, size = "md" }: F0AvatarEmojiProps) => {
  // Check legacy size
  if (!avatarEmojiSizes.includes(size)) {
    console.warn(
      `The emoji size: ${size} is deprecated. Use ${sizesMapping[size]} instead.`
    )
    const mappedSize = sizesMapping[size]
    size = mappedSize === "xs" ? "sm" : mappedSize === "sm" ? "md" : "lg"
  }

  // Check if emoji is a single emoji character using regex
  // \uFE0F is the variation selector that makes emojis display as colored graphics instead of black & white text
  const emojiRegex = /^\p{Emoji}\uFE0F?$/u
  if (!emojiRegex.test(emoji)) {
    emoji = "🤔" // Fallback to thinking face emoji if invalid
  }

  return (
    <div
      className={cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary",
        sizes[size]
      )}
    >
      <EmojiImage emoji={emoji} size={imageSizes[size]} />
    </div>
  )
}

F0AvatarEmoji.displayName = "EmojiAvatar"
