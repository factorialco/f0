import { motion } from "motion/react"
import { type ReactNode, useEffect, useState } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatUser } from "../types"
import { EASE_OUT_SWIFT } from "../utils/chat-motion"

/** A person avatar-list entry (firstName/lastName/src) from a chat user. */
const toPersonAvatar = (user: F0ChatUser) => {
  if (user.avatar?.type === "person") {
    const { type: _type, ...rest } = user.avatar
    return rest
  }
  return { firstName: user.name, lastName: "" }
}

const Dots = ({ animate }: { animate: boolean }) => (
  <span className="flex items-center gap-1 py-px" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className={cn(
          "size-1.5 rounded-full bg-f1-foreground-secondary",
          // A soft rise-and-dim wave with a rest phase (WhatsApp) — `bounce`'s
          // ball-drop curve reads as UI chrome, not as someone writing.
          animate && "animate-typing-dot"
        )}
        style={animate ? { animationDelay: `${i * 150}ms` } : undefined}
      />
    ))}
  </span>
)

/** Mount-time gate shared with the container: `fresh` is armed when a typing
 * streak starts and consumed by the first bubble mount, so a remount from
 * scrolling back mid-streak renders in place (history never re-animates). */
export type TypingEntryState = { fresh: boolean }

/**
 * Typing indicator rendered inline in the transcript as an incoming message —
 * the typing user's avatar next to a bubble with animated dots. DMs read
 * "Writing…"; groups name who's typing (accessible label only; visually it's dots).
 */
export const ChatTypingBubble = ({
  users,
  isGroup,
  leaving = false,
  spacingClass,
  entryState,
}: {
  users: F0ChatUser[]
  isGroup: boolean
  /** The writer paused: fade the bubble out before its row is removed. Flipping
   * back to false (typing resumed in the grace window) fades it back — the
   * bubble never remounts, so the dots don't pop. */
  leaving?: boolean
  /** Row spacing (the virtual row's padding), applied on the bubble itself. */
  spacingClass?: string
  /** Streak-start gate — without it every remount (scroll-back into the
   * virtual window mid-streak) would replay the entry pop. */
  entryState?: TypingEntryState
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()
  // Decided once at mount; consumed after commit so a Strict-Mode double
  // render can't flag the streak's first bubble as already shown.
  const [entryFresh] = useState(() => entryState?.fresh ?? true)
  useEffect(() => {
    if (entryState) entryState.fresh = false
  }, [entryState])
  if (users.length === 0) return null

  let label = i18n.chat.writing
  if (isGroup) {
    if (users.length === 1) {
      label = i18n.t("chat.isTyping", { name: users[0].name })
    } else if (users.length === 2) {
      label = i18n.t("chat.twoTyping", {
        first: users[0].name,
        second: users[1].name,
      })
    } else {
      label = i18n.chat.severalTyping
    }
  }

  return (
    // Pure fast fade in/out (`leaving`) — no translation or scale of its own:
    // the row's appearance already produces the transcript slide, and any
    // extra motion reads as doubled. Its height is constant from mount,
    // keeping the virtualizer's measurements stable.
    <motion.div
      role="status"
      aria-label={label}
      className={cn("flex w-full items-end gap-2", spacingClass)}
      initial={reducedMotion || !entryFresh ? false : { opacity: 0 }}
      animate={leaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.14, ease: EASE_OUT_SWIFT }}
    >
      {isGroup &&
        (users.length > 1 ? (
          // Several people typing: stacked avatar list, capped at 3 with a +N.
          <span className="shrink-0">
            <F0AvatarList
              type="person"
              size="xs"
              max={3}
              noTooltip
              avatars={users.map(toPersonAvatar)}
            />
          </span>
        ) : (
          <span className="shrink-0">
            <F0Avatar
              size="xs"
              avatar={
                users[0].avatar ?? {
                  type: "person",
                  firstName: users[0].name,
                  lastName: "",
                }
              }
            />
          </span>
        ))}
      <div className="flex w-fit items-center justify-center rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4">
        <Dots animate={!reducedMotion && !leaving} />
      </div>
    </motion.div>
  )
}
