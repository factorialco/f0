import NumberFlow from "@number-flow/react"
import { useEffect, useRef, useState } from "react"

import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { EmojiImage, getEmojiLabel, useEmojiConfetti } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

interface User {
  name: string
}

export interface ReactionProps {
  emoji: string
  initialCount: number
  hasReacted?: boolean
  users?: User[]
  /** Resolve the complete user list on first hover or keyboard focus. */
  loadUsers?: () => Promise<User[]>
  onInteraction?: (emoji: string) => void
  size?: "sm" | "md" | "lg"
}

export function Reaction({
  emoji,
  initialCount,
  hasReacted = false,
  users,
  loadUsers,
  onInteraction,
  size = "md",
}: ReactionProps) {
  const [isActive, setIsActive] = useState(hasReacted)
  const [count, setCount] = useState(initialCount)
  const [resolvedUsers, setResolvedUsers] = useState(users)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const usersRequestRef = useRef<Promise<User[]> | null>(null)
  const usersRequestGenerationRef = useRef(0)
  const { fireEmojiConfetti } = useEmojiConfetti()

  useEffect(() => {
    usersRequestGenerationRef.current += 1
    setResolvedUsers(users)
    usersRequestRef.current = null
  }, [emoji, initialCount, users])

  const loadFullUsers = () => {
    if (
      !loadUsers ||
      usersRequestRef.current ||
      (resolvedUsers?.length ?? 0) >= initialCount
    ) {
      return
    }

    const request = loadUsers()
    const requestGeneration = usersRequestGenerationRef.current
    usersRequestRef.current = request
    void request
      .then((nextUsers) => {
        if (usersRequestGenerationRef.current === requestGeneration) {
          setResolvedUsers(nextUsers)
        }
      })
      .catch(() => {})
      .finally(() => {
        if (usersRequestRef.current === request) {
          usersRequestRef.current = null
        }
      })
  }

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

  const tooltipContent =
    resolvedUsers?.map((user) => user.name).join(", ") || ""

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
        "flex items-center gap-1 px-0.5 font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        isActive &&
          "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      )}
      aria-label={`${getEmojiLabel(emoji)}: ${count}`}
      aria-pressed={isActive}
      prepend={<EmojiImage emoji={emoji} size={size} />}
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

  return tooltipContent || loadUsers ? (
    <TooltipInternal
      label={tooltipContent || getEmojiLabel(emoji)}
      onOpen={loadFullUsers}
    >
      {button}
    </TooltipInternal>
  ) : (
    button
  )
}
