import NumberFlow from "@number-flow/react"
import { type ReactNode, useEffect, useRef, useState } from "react"

import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
import { EmojiImage, getEmojiLabel, useEmojiConfetti } from "@/lib/emojis"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

type ReactionUser = { name: string }

export type ChatReactionPillProps = {
  emoji: string
  initialCount: number
  hasReacted?: boolean
  users?: ReactionUser[]
  /** Resolve the complete user list on first hover or keyboard focus. */
  loadUsers?: () => Promise<ReactionUser[]>
  onInteraction?: (emoji: string) => void
  size?: "sm" | "md" | "lg"
}

/**
 * A reaction pill for the chat transcript.
 *
 * The Reactions kit has one of these, and F0Chat used it until the chat started
 * drawing emoji with the reader's own system font. Rather than teach the shared
 * pill about a mode only the chat wants — and change how post reactions look
 * everywhere else in the product — the conversation gets its own.
 *
 * Two things differ from the kit's version, and both are because this one lives
 * in a **virtualized** transcript:
 *
 * - the emoji is the system glyph, matching the bubble it sits under;
 * - the tooltip wrapper is unconditional (see below).
 */
export const ChatReactionPill = ({
  emoji,
  initialCount,
  hasReacted = false,
  users,
  loadUsers,
  onInteraction,
  size = "md",
}: ChatReactionPillProps): ReactNode => {
  const [isActive, setIsActive] = useState(hasReacted)
  const [count, setCount] = useState(initialCount)
  const [resolvedUsers, setResolvedUsers] = useState(users)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const usersRequestRef = useRef<Promise<ReactionUser[]> | null>(null)
  const usersRequestGenerationRef = useRef(0)
  const { fireEmojiConfetti } = useEmojiConfetti()

  // Re-sync with the owner after an external change (someone else reacted, or
  // our own optimistic toggle was reconciled). Without this the only way to
  // refresh an uncontrolled pill is to remount it by key — which also remounts
  // NumberFlow, a measuring widget, and inside a virtualized transcript that
  // remount lands mid-scroll.
  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  useEffect(() => {
    setIsActive(hasReacted)
  }, [hasReacted])

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      onClick={handleClick}
      className={cn(
        "flex items-center gap-1 px-0.5 font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        isActive &&
          "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      )}
      aria-label={`${getEmojiLabel(emoji)}: ${count}`}
      aria-pressed={isActive}
      prepend={<EmojiImage emoji={emoji} mode="native" size={size} />}
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

  // Always wrapped, even with nothing to say yet. Swapping between a wrapped
  // and a bare button changes the element type, so React remounts the whole
  // pill the moment the user list resolves — and in a virtualized transcript
  // that lands mid-scroll.
  return (
    <TooltipInternal
      label={tooltipContent || getEmojiLabel(emoji)}
      onOpen={loadFullUsers}
    >
      {button}
    </TooltipInternal>
  )
}
