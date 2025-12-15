import { EmojiImage, EmojiImageProps } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { BaseAvatarProps, sizesMapping } from "../internal/BaseAvatar"

export const avatarEmojiSizes = ["sm", "md", "lg", "xl"] as const
export type F0AvatarEmojiProps = {
  emoji: string
  size?: (typeof avatarEmojiSizes)[number]
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>

const sizes = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded",
  lg: "w-10 h-10 rounded-md",
  xl: "w-14 h-14 rounded-lg",
}

const imageSizes: Record<(typeof avatarEmojiSizes)[number], EmojiImageProps["size"]> = {
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "lg",
} as const

export const F0AvatarEmoji = ({
  emoji,
  size = "md",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: F0AvatarEmojiProps) => {
  // Check legacy size
  if (!avatarEmojiSizes.includes(size)) {
    console.warn(
      // @ts-expect-error - size is not a valid size
      `The emoji size: ${size} is deprecated. Use ${sizesMapping[size]} instead.`
    )
    // @ts-expect-error - size is not a valid size
    const mappedSize = sizesMapping[size] ?? size
    size = mappedSize
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
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <EmojiImage emoji={emoji} size={imageSizes[size]} />
    </div>
  )
}

F0AvatarEmoji.displayName = "EmojiAvatar"
