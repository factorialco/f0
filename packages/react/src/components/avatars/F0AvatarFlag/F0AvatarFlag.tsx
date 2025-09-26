import { parse } from "twemoji-parser"
import { BaseAvatar } from "../internal/BaseAvatar"
import { F0AvatarFlagProps } from "./types"

interface ParseObject {
  url: string
  indices: [number, number]
  text: string
}

const parseEmoji = (emoji: string): ParseObject | null => {
  const [entity] = parse(emoji, {
    buildUrl: (codePoints) =>
      `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`,
  })

  return entity || null
}

const fallbackFlag = `🏴‍☠️️`

export const F0AvatarFlag = ({
  flag = fallbackFlag,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  badge,
}: F0AvatarFlagProps) => {
  const emojiEntity = parseEmoji(flag)
  return (
    <BaseAvatar
      type="base"
      name="flag"
      src={emojiEntity?.url}
      size={size}
      color="viridian"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      badge={badge}
    />
  )
}

F0AvatarFlag.displayName = "FlagAvatar"
