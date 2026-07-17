import { type ReactNode, memo, useEffect, useState } from "react"

import { motion } from "motion/react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"

import { type F0ChatUser } from "../types"
import { type ChatRow } from "../utils/grouping"
import { ChatMessageItem } from "./ChatMessageItem"
import { ChatSystemMessage } from "./ChatSystemMessage"
import { ChatTypingBubble } from "./ChatTypingBubble"
import { ChatUserHoverCard } from "./ChatUserHoverCard"
import { DateTimeSeparator } from "./DateTimeSeparator"
import { MessageStatus } from "./MessageStatus"
import { UnreadDivider } from "./UnreadDivider"

const avatarFor = (author: F0ChatUser): ReactNode => (
  <F0Avatar
    size="xs"
    avatar={
      author.avatar ?? { type: "person", firstName: author.name, lastName: "" }
    }
  />
)

/** Top spacing baked into the row (virtual rows are absolutely positioned, so
 * the old flex `gap-6`/`gap-1` can't apply — `measureElement` reads padding). */
const topSpacing = (row: ChatRow, isFirstRow: boolean): string => {
  if (isFirstRow) return "pt-2"
  if (row.type === "message") return row.isFirstOfRun ? "pt-4" : "pt-1"
  // The status footer hugs its message (MessageStatus brings its own pt-1).
  if (row.type === "footer") return "pt-0"
  return "pt-4"
}

/**
 * Renders one flattened {@link ChatRow} (separator | divider | message) for the
 * virtualized transcript. Replaces the per-run loop in `ChatMessageRun`: the
 * avatar gutter (last of run), sender name (first of run) and delivery footer
 * (last message) are derived from the row's flags. The newest appended message
 * fades/slides in once (`enterAnimation`), gated so scrolling old messages back
 * into view never re-animates.
 */
const ChatMessageRowRendererComponent = ({
  row,
  isGroup,
  isFirstRow,
  enterAnimation,
  animatedIds,
  freshIds,
  typingLeaving = false,
}: {
  row: ChatRow
  isGroup: boolean
  isFirstRow: boolean
  /** Whether enter animations are enabled at all (off for reduced motion). */
  enterAnimation: boolean
  /** Ids already shown — seeded with the initial set so only true arrivals animate. */
  animatedIds: Set<string>
  /** Ids appended at the tail THIS commit → their batch order. Transports
   * coalesce bursts into one render: every fresh message animates, staggered
   * by its order (before, only the last one did — the rest popped in dry). */
  freshIds: Map<string, number>
  /** Typing row only: fade the bubble out before the row is removed. */
  typingLeaving?: boolean
}): ReactNode => {
  // No per-row bottom padding: the transcript's bottom breathing room lives on
  // the viewport (constant), so being/stopping-being the last row never
  // changes a row's height (stable measurements = no send-time churn).
  const spacing = topSpacing(row, isFirstRow)

  // Decided once at mount: animate only genuinely fresh arrivals (in this
  // commit's appended tail and never shown before) — prepends, scroll-backs
  // and window swaps never enter `freshIds`.
  const [entry] = useState(() => {
    if (!enterAnimation || row.type !== "message") return null
    const order = freshIds.get(row.message.id)
    if (order === undefined || animatedIds.has(row.message.id)) return null
    return { order }
  })
  const animate = entry !== null
  // Mark as "seen" after commit (not during render) so render stays pure and a
  // Strict-Mode double render can't wrongly flag a fresh arrival as already shown.
  useEffect(() => {
    if (row.type === "message") animatedIds.add(row.message.id)
  }, [row, animatedIds])

  if (row.type === "separator") {
    return (
      <div className={spacing}>
        <DateTimeSeparator at={row.at} padded />
      </div>
    )
  }

  if (row.type === "divider") {
    return (
      <div className={spacing}>
        <UnreadDivider />
      </div>
    )
  }

  if (row.type === "system") {
    // Centered membership row — no enter animation (same as separators).
    return (
      <div className={spacing}>
        <ChatSystemMessage message={row.message} />
      </div>
    )
  }

  if (row.type === "typing") {
    // Spacing goes INSIDE the bubble's height-animated wrapper so the whole row
    // collapses to 0 when it leaves (outside, the padding would jump-cut).
    return (
      <ChatTypingBubble
        users={row.users}
        isGroup={isGroup}
        leaving={typingLeaving}
        spacingClass={spacing}
      />
    )
  }

  if (row.type === "footer") {
    // Delivery-status footer as its OWN constant-height row (see ChatRow):
    // sending a message only APPENDS rows — nothing shrinks, nothing shifts.
    const showFooterGutter = isGroup && !row.message.isMine
    return (
      <div className={cn("flex w-full gap-2", spacing)}>
        {showFooterGutter && (
          <span aria-hidden className="invisible shrink-0">
            {avatarFor(row.message.author)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <MessageStatus message={row.message} isGroup={isGroup} />
        </div>
      </div>
    )
  }

  const { message, isFirstOfRun, isLastOfRun } = row
  const isMine = message.isMine
  const showIdentity = isGroup && !isMine

  // Invisible avatar reserves the gutter so bubbles/reactions/footer stay aligned
  // even on rows that don't show the avatar.
  const spacer = showIdentity ? (
    <span aria-hidden className="invisible shrink-0">
      {avatarFor(message.author)}
    </span>
  ) : undefined

  const bubbleGutter = showIdentity ? (
    isLastOfRun ? (
      <ChatUserHoverCard user={message.author}>
        <span className="shrink-0 cursor-default">
          {avatarFor(message.author)}
        </span>
      </ChatUserHoverCard>
    ) : (
      spacer
    )
  ) : undefined

  const content = (
    <ChatMessageItem
      message={message}
      isMine={isMine}
      author={showIdentity && isFirstOfRun ? message.author : undefined}
      bubbleGutter={bubbleGutter}
      belowGutter={spacer}
      isFirstOfRun={isFirstOfRun}
      isLastOfRun={isLastOfRun}
    />
  )

  return animate ? (
    // WhatsApp-style arrival: the transcript's slide layer provides the shared
    // translation; the bubble adds its own presence on top — a sent one pops
    // from its corner with a micro-overshoot (mobile's entry vocabulary), an
    // incoming one rises more gently. Springs are soft enough to read but
    // settle before the slide does, so the two never fight. Batched arrivals
    // stagger by their order (45ms) so a coalesced burst enters with rhythm.
    // The row mounts at full height, keeping measurements stable for the
    // virtualizer. Only fresh unseen rows animate — scrolled-back history is
    // never disturbed.
    <motion.div
      className={cn("flex flex-col gap-1", spacing)}
      style={{ transformOrigin: isMine ? "bottom right" : "bottom left" }}
      initial={
        isMine
          ? { opacity: 0, y: 11, scale: 0.96 }
          : { opacity: 0, y: 6, scale: 0.98 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        isMine
          ? {
              type: "spring",
              stiffness: 320,
              damping: 22,
              mass: 0.8,
              delay: (entry?.order ?? 0) * 0.045,
            }
          : {
              type: "spring",
              stiffness: 280,
              damping: 26,
              mass: 0.85,
              delay: (entry?.order ?? 0) * 0.045,
            }
      }
    >
      {content}
    </motion.div>
  ) : (
    <div className={cn("flex flex-col gap-1", spacing)}>{content}</div>
  )
}

/**
 * Memoized so a container re-render (scroll state, typing, sticky date, an
 * append elsewhere) doesn't re-render every visible row — only rows whose
 * props actually changed. Row identity is real: `flattenChatRows` reuses the
 * previous build's row objects when the message and its flags are unchanged
 * (`previousRows`), and `animatedIds`/`freshIds` are stable (mutated)
 * containers, so equality holds across event-driven renders.
 */
export const ChatMessageRowRenderer = memo(ChatMessageRowRendererComponent)
