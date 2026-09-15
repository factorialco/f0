import { motion } from "motion/react"
import { type ReactNode, memo, useEffect, useState } from "react"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { cn } from "@/lib/utils"
import { useF0ChatChannelType } from "../providers/F0ChatProvider"
import { type F0ChatUser } from "../types"
import { rowEntryTransition } from "../utils/chat-motion"
import { rowItem, type ChatRow } from "../utils/grouping"
import { ChatCallMessage } from "./ChatCallMessage"
import { ChatMessageItem } from "./ChatMessageItem"
import { ChatPostRow } from "./ChatPostRow"
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
 * the old flex `gap-6`/`gap-1` can't apply — `measureElement` reads padding).
 *
 * A function of the row's CONTENT only: it used to shrink for whatever row was
 * currently first, which made a row's measured height depend on its position,
 * so paginating silently resized a row Virtuoso had already measured. The
 * transcript's top breathing room is a constant `components.Header` instead
 * (see ChatTopGap), exactly like the bottom gap. */
const topSpacing = (row: ChatRow): string => {
  if (row.type === "message") {
    return row.isFirstOfRun ? "pt-5" : "pt-0"
  }
  // The status footer hugs its message (MessageStatus brings its own pt-1).
  if (row.type === "footer") {
    return "pt-0"
  }
  // NO GAP between posts. A feed is one column of them, divided by a hairline
  // and nothing else (see `ChatPostRow`) — the gap that separates message
  // stacks would turn each post back into a floating card.
  if (row.type === "post") {
    return "pt-0"
  }
  return "pt-3"
}

/**
 * How a row is keyed for animation: what marks it fresh (`arrivalId`) and what
 * records it as already shown (`seenId`).
 *
 * A separator splits the two — it is fresh because the message it introduces is
 * (`forId`), but it is remembered under its own key. Anything else animates and
 * is remembered by the same id. `rowItem` rather than a type check: a post is
 * an appended item too, so it gates on the same rule as a message or a system
 * row.
 */
const animationKeys = (
  row: ChatRow
): { arrivalId: string; seenId: string } | null => {
  const item = rowItem(row)
  if (item) {
    return { arrivalId: item.id, seenId: item.id }
  }
  if (row.type === "separator") {
    return { arrivalId: row.forId, seenId: row.key }
  }
  return null
}

/** Its place in the arriving batch, or `null` for a row that must not animate. */
const resolveEntryOrder = (
  row: ChatRow,
  freshIds: Map<string, number>,
  animatedIds: Set<string>
): number | null => {
  const keys = animationKeys(row)
  if (!keys) {
    return null
  }
  const order = freshIds.get(keys.arrivalId)
  if (order === undefined || animatedIds.has(keys.seenId)) {
    return null
  }
  return order
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
  enterAnimation,
  animatedIds,
  freshIds,
  typingLeaving = false,
  typingEntry,
}: {
  row: ChatRow
  isGroup: boolean
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
  const spacing = topSpacing(row)

  // Decided once at mount: animate only genuinely fresh arrivals (in this
  // commit's appended tail and never shown before) — prepends, scroll-backs
  // and window swaps never enter `freshIds`. A live day change animates its
  // separator alongside its message (same batch slot, `forId`); system rows
  // are real appended items so they gate like messages. The unread divider
  // never animates (it only (re)appears on conversation entry).
  const [entryOrder] = useState(() =>
    enterAnimation ? resolveEntryOrder(row, freshIds, animatedIds) : null
  )
  const animate = entryOrder !== null
  // Mark as "seen" after commit (not during render) so render stays pure and a
  // Strict-Mode double render can't wrongly flag a fresh arrival as already shown.
  useEffect(() => {
    const seenId = animationKeys(row)?.seenId
    if (seenId) {
      animatedIds.add(seenId)
    }
  }, [row, animatedIds])

  // Card rows: FULL WIDTH, no gutter and no bubble — the card IS the row. The
  // messages' `flex flex-col gap-1` exists to stack a bubble over its meta
  // line, and neither a post nor a call has either.
  if (row.type === "post" || row.type === "call") {
    const card =
      row.type === "post" ? (
        <ChatPostRow post={row.post} last={row.isLast} />
      ) : (
        <ChatCallMessage call={row.message.call} />
      )
    return animate ? (
      <motion.div
        className={spacing}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={rowEntryTransition(entryOrder ?? 0)}
      >
        {card}
      </motion.div>
    ) : (
      <div className={spacing}>{card}</div>
    )
  }

  if (row.type === "separator" || row.type === "system") {
    return (
      <ChatCenteredRow row={row} spacing={spacing} entryOrder={entryOrder} />
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
      <div className={cn("flex w-full gap-1.5", spacing)}>
        {showFooterGutter ? (
          <span aria-hidden className="size-5 shrink-0" />
        ) : null}
        <div className="min-w-0 flex-1">
          <MessageStatus message={row.message} isGroup={isGroup} />
        </div>
      </div>
    )
  }

  return (
    <ChatMessageRow
      row={row}
      isGroup={isGroup}
      spacing={spacing}
      animate={animate}
      entryOrder={entryOrder}
    />
  )
}

/**
 * A message row: the bubble, its avatar gutter and its author line.
 *
 * Split out of the row dispatcher because it carries all of that branching on
 * its own — who is speaking, whether they are shown, and where in a run the
 * bubble sits.
 */
const ChatMessageRow = ({
  row,
  isGroup,
  spacing,
  animate,
  entryOrder,
}: {
  row: Extract<ChatRow, { type: "message" }>
  isGroup: boolean
  spacing: string
  animate: boolean
  entryOrder: number | null
}): ReactNode => {
  const { message, isFirstOfRun, isLastOfRun } = row
  const isMine = message.isMine
  const showIdentity = isGroup && !isMine

  // A CSS spacer reserves the gutter without mounting hidden avatar/image work.
  const spacer = showIdentity ? (
    <span aria-hidden className="size-5 shrink-0" />
  ) : undefined

  const bubbleGutter = showIdentity ? (
    isLastOfRun ? (
      <ChatUserHoverCard user={message.author}>
        <span className="shrink-0 cursor-default flex items-end py-0.5">
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
      hasAvatar={showIdentity}
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
      transition={rowEntryTransition(entryOrder ?? 0)}
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
/**
 * A centred, author-less row: a date separator or a system notice. Arrives
 * with the same fast opacity-only entry as a message.
 */
const ChatCenteredRow = ({
  row,
  spacing,
  entryOrder,
}: {
  row: Extract<ChatRow, { type: "separator" } | { type: "system" }>
  spacing: string
  /** Its place in the arriving batch, or `null` for a row already on screen. */
  entryOrder: number | null
}) => {
  const channelType = useF0ChatChannelType()

  const inner =
    row.type === "separator" ? (
      // On a noticeboard the separator is the ONLY clock: the posts are
      // seeded, so they don't carry one of their own (see ChatMessageMeta).
      <DateTimeSeparator
        at={row.at}
        padded
        withTime={channelType === "announcement"}
      />
    ) : (
      <ChatSystemMessage message={row.message} />
    )

  if (entryOrder === null) {
    return <div className={spacing}>{inner}</div>
  }

  return (
    <motion.div
      className={spacing}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={rowEntryTransition(entryOrder)}
    >
      {inner}
    </motion.div>
  )
}

export const ChatMessageRowRenderer = memo(ChatMessageRowRendererComponent)
