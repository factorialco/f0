import { type ReactNode, memo, useEffect, useState } from "react"

import { motion } from "motion/react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"

import { type F0ChatUser } from "../types"
import { type ChatRow } from "../utils/grouping"
import { ChatMessageItem } from "./ChatMessageItem"
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
  isLastRow,
  enterAnimation,
  animatedIds,
  dividerLeaving = false,
}: {
  row: ChatRow
  isGroup: boolean
  isFirstRow: boolean
  isLastRow: boolean
  /** Whether enter animations are enabled at all (off for reduced motion). */
  enterAnimation: boolean
  /** Ids already shown — seeded with the initial set so only true arrivals animate. */
  animatedIds: Set<string>
  /** Divider row only: fade it out in place before the row is removed. */
  dividerLeaving?: boolean
}): ReactNode => {
  const spacing = cn(topSpacing(row, isFirstRow), isLastRow && "pb-6")

  // Decided once at mount: animate only the conversation's last message when it
  // hasn't been seen yet. `isLastMessage` excludes prepended/older messages.
  const [animate] = useState(
    () =>
      enterAnimation &&
      row.type === "message" &&
      row.isLastMessage &&
      !animatedIds.has(row.message.id)
  )
  // Mark as "seen" after commit (not during render) so render stays pure and a
  // Strict-Mode double render can't wrongly flag a fresh arrival as already shown.
  useEffect(() => {
    if (row.type === "message") animatedIds.add(row.message.id)
  }, [row, animatedIds])

  if (row.type === "separator") {
    return (
      <div className={spacing}>
        <DateTimeSeparator at={row.at} />
      </div>
    )
  }

  if (row.type === "divider") {
    return (
      <div className={spacing}>
        <UnreadDivider leaving={dividerLeaving} />
      </div>
    )
  }

  if (row.type === "typing") {
    return (
      <div className={spacing}>
        <ChatTypingBubble users={row.users} isGroup={isGroup} />
      </div>
    )
  }

  const { message, isFirstOfRun, isLastOfRun, isLastMessage } = row
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
    <>
      <ChatMessageItem
        message={message}
        isMine={isMine}
        author={showIdentity && isFirstOfRun ? message.author : undefined}
        bubbleGutter={bubbleGutter}
        belowGutter={spacer}
        isFirstOfRun={isFirstOfRun}
        isLastOfRun={isLastOfRun}
      />
      {isLastMessage && (
        <div className="flex w-full gap-2">
          {spacer}
          <div className="min-w-0 flex-1">
            <MessageStatus message={message} isGroup={isGroup} />
          </div>
        </div>
      )}
    </>
  )

  return animate ? (
    // WhatsApp-style arrival: the bubble springs up into place from its own
    // corner (mine → bottom-right, theirs → bottom-left) with a soft fade and a
    // barely-there scale. A spring (not a fixed tween) gives the gentle, natural
    // settle. Only the last row animates, so the brief scale-driven height change
    // can't disturb rows above it.
    <motion.div
      className={cn("flex flex-col gap-1", spacing)}
      style={{ transformOrigin: isMine ? "bottom right" : "bottom left" }}
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 460, damping: 34, mass: 0.9 }}
    >
      {content}
    </motion.div>
  ) : (
    <div className={cn("flex flex-col gap-1", spacing)}>{content}</div>
  )
}

/**
 * Memoized so a container re-render (scroll state, typing, sticky date) doesn't
 * re-render every visible row — only rows whose props actually changed. Row
 * objects are stable (memoized by `flattenChatRows`) and `animatedIds` is a
 * stable ref, so equality holds across scroll-driven renders.
 */
export const ChatMessageRowRenderer = memo(ChatMessageRowRendererComponent)
