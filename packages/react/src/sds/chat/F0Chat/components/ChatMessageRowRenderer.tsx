import { type ReactNode, memo, useEffect, useState } from "react"

import { motion } from "motion/react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"

import { type F0ChatUser } from "../types"
import { rowEntryTransition } from "../utils/chat-motion"
import { type ChatRow } from "../utils/grouping"
import { ChatMessageItem } from "./ChatMessageItem"
import { ChatSystemMessage } from "./ChatSystemMessage"
import { ChatTypingBubble, type TypingEntryState } from "./ChatTypingBubble"
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
  typingEntry,
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
  /** Typing row only: streak-start gate for the bubble's entry pop. */
  typingEntry?: TypingEntryState
}): ReactNode => {
  // No per-row bottom padding: the transcript's bottom breathing room lives on
  // the viewport (constant), so being/stopping-being the last row never
  // changes a row's height (stable measurements = no send-time churn).
  const spacing = topSpacing(row, isFirstRow)

  // Decided once at mount: animate only genuinely fresh arrivals (in this
  // commit's appended tail and never shown before) — prepends, scroll-backs
  // and window swaps never enter `freshIds`. A live day change animates its
  // separator alongside its message (same batch slot, `forId`); system rows
  // are real appended items so they gate like messages. The unread divider
  // never animates (it only (re)appears on conversation entry).
  const [entry] = useState(() => {
    if (!enterAnimation) return null
    if (row.type === "message" || row.type === "system") {
      const order = freshIds.get(row.message.id)
      if (order === undefined || animatedIds.has(row.message.id)) return null
      return { order }
    }
    if (row.type === "separator") {
      const order = freshIds.get(row.forId)
      if (order === undefined || animatedIds.has(row.key)) return null
      return { order }
    }
    return null
  })
  const animate = entry !== null
  // Mark as "seen" after commit (not during render) so render stays pure and a
  // Strict-Mode double render can't wrongly flag a fresh arrival as already shown.
  useEffect(() => {
    if (row.type === "message" || row.type === "system") {
      animatedIds.add(row.message.id)
    } else if (row.type === "separator") {
      animatedIds.add(row.key)
    }
  }, [row, animatedIds])

  if (row.type === "separator" || row.type === "system") {
    // Centered, author-less rows — same fast opacity-only entry as messages.
    const inner =
      row.type === "separator" ? (
        <DateTimeSeparator at={row.at} padded />
      ) : (
        <ChatSystemMessage message={row.message} />
      )
    return animate ? (
      <motion.div
        className={spacing}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={rowEntryTransition(entry?.order ?? 0)}
      >
        {inner}
      </motion.div>
    ) : (
      <div className={spacing}>{inner}</div>
    )
  }

  if (row.type === "divider") {
    return (
      <div className={spacing}>
        <UnreadDivider />
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
        entryState={typingEntry}
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
    // WhatsApp-style arrival: the transcript's slide layer (critically damped)
    // is the ONLY movement; the bubble itself just fades in fast — any own
    // translation doubles the slide's motion, and a slow fade reads as an
    // empty gap that fills in late. Batched arrivals stagger by their order
    // (capped — rows mount at full height, so an uncapped stagger leaves
    // blank rows during big reconnect bursts). Only fresh unseen rows animate
    // — scrolled-back history is never disturbed.
    <motion.div
      className={cn("flex flex-col gap-1", spacing)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={rowEntryTransition(entry?.order ?? 0)}
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
