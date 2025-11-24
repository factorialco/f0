import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { EmojiImage, getEmojiLabel, useEmojiConfetti } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"
import NumberFlow from "@number-flow/react"
import { useRef, useState } from "react"

interface User {
  name: string
}

export interface ReactionProps {
  emoji: string
  initialCount: number
  hasReacted?: boolean
  users?: User[]
  onInteraction?: (emoji: string) => void
}

export function Reaction({
  emoji,
  initialCount,
  hasReacted = false,
  users,
  onInteraction,
}: ReactionProps) {
  const [isActive, setIsActive] = useState(hasReacted)
  const [count, setCount] = useState(initialCount)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { fireEmojiConfetti } = useEmojiConfetti()

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    emoji: string
  ) => {
    event.stopPropagation()
    setCount(count + (isActive ? -1 : 1))
    setIsActive(!isActive)
    onInteraction?.(emoji)

    if (!isActive) {
      fireEmojiConfetti(emoji, buttonRef)
    }
  }

  const tooltipContent = users?.map((user) => user.name).join(", ") || ""

  const button = (
    <Action
      ref={buttonRef}
      variant="outline"
      size="md"
      compact
      onClick={(event) => {
        handleClick(event, emoji)
      }}
      className={cn(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        isActive &&
          "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      )}
      aria-label={getEmojiLabel(emoji)}
      prepend={<EmojiImage emoji={emoji} size="md" />}
    >
      <NumberFlow
        value={count}
        spinTiming={{
          duration: 200,
          easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        className={cn(
          "tabular-nums",
          isActive ? "text-f1-foreground-selected" : "text-f1-foreground"
        )}
      />
    </Action>
  )

  return tooltipContent ? (
    <Tooltip label={tooltipContent}>{button}</Tooltip>
  ) : (
    button
  )
}
