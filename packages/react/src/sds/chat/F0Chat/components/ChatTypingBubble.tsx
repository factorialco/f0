import { type ReactNode } from "react"

import { motion } from "motion/react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatUser } from "../types"

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
          animate && "animate-bounce"
        )}
        style={animate ? { animationDelay: `${i * 120}ms` } : undefined}
      />
    ))}
  </span>
)

/**
 * Typing indicator rendered inline in the transcript as an incoming message —
 * the typing user's avatar next to a bubble with animated dots. DMs read
 * "Writing…"; groups name who's typing (accessible label only; visually it's dots).
 */
export const ChatTypingBubble = ({
  users,
  isGroup,
}: {
  users: F0ChatUser[]
  isGroup: boolean
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()
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
    // Eases in (fade + slight rise, scaling up from the bottom-left like an
    // incoming bubble) so the dots don't pop. It's always the last row, so the
    // scale-driven height change can't disturb the messages above.
    <motion.div
      role="status"
      aria-label={label}
      className="flex w-full items-end gap-2"
      style={{ transformOrigin: "bottom left" }}
      initial={reducedMotion ? false : { opacity: 0, y: 6, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 34, mass: 0.8 }}
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
      <div className="w-fit rounded-2xl border border-solid border-f1-border-secondary bg-f1-background px-3.5 py-4 items-center justify-center flex">
        <Dots animate={!reducedMotion} />
      </div>
    </motion.div>
  )
}
