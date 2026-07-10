import { type ReactNode, useEffect, useRef, useState } from "react"

import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatHighlightedId } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatUser } from "../types"
import { bubbleCornerClass, ChatBubble } from "./ChatBubble"
import { ChatMessageActions } from "./ChatMessageActions"
import { ChatMessageAttachments } from "./ChatMessageAttachments"
import { ChatMessageReactions } from "./ChatMessageReactions"
import { SendingClock } from "./ChatMessageStatusIcon"

/** One message: bubble (with any reply quote nested inside) + reactions, with a
 * hover ellipsis menu. */
export const ChatMessageItem = ({
  message,
  isMine,
  author,
  bubbleGutter,
  belowGutter,
  isFirstOfRun = true,
  isLastOfRun = true,
}: {
  message: F0ChatMessage
  isMine: boolean
  /** Group incoming, first of a run: renders the sender name inside the bubble. */
  author?: F0ChatUser
  /** Left gutter aligned to the bubble (the avatar on a run's last message, or
   * an invisible spacer otherwise) — keeps the avatar level with the bubble. */
  bubbleGutter?: ReactNode
  /** Matching invisible spacer so reactions line up under the bubble. */
  belowGutter?: ReactNode
  /** First message of a same-author run — drives the bubble's chained corners. */
  isFirstOfRun?: boolean
  /** Last message of a same-author run — drives the bubble's chained corners. */
  isLastOfRun?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const reducedMotion = useReducedMotion()
  const [actionsOpen, setActionsOpen] = useState(false)
  const { highlightedId } = useChatHighlightedId()
  const { currentUserId } = useF0Chat()
  const highlighted = highlightedId === message.id
  const hasReactions = !message.deleted && (message.reactions?.length ?? 0) > 0
  // Whether the row MOUNTED with its reactions already there (history, or a
  // reacted message scrolled back into the virtual window): render them in
  // place. Only reactions changing on an already-visible message animate.
  const hadReactionsAtMountRef = useRef(hasReactions)
  useEffect(() => {
    // After the first commit, any (re)appearance of the row is a live change.
    hadReactionsAtMountRef.current = false
  }, [])
  const hasAttachments =
    !message.deleted && (message.attachments?.length ?? 0) > 0
  // Attachment-only messages (no caption) skip the empty bubble but still show.
  // A reply quote lives inside the bubble, so a quoted message always needs one.
  const hasBubble =
    message.deleted ||
    message.body.trim().length > 0 ||
    Boolean(message.replyTo)
  const hasContent = hasBubble || hasAttachments

  return (
    <div
      data-msg-id={message.id}
      className={cn(
        "group flex flex-col",
        isMine ? "items-end" : "items-start"
      )}
    >
      {/* Attachments + bubble are one message column on the message's side, so
          a text-less (files-only) message still aligns + gets hover actions.
          items-end keeps the avatar gutter level with the bottom of it. */}
      {hasContent && (
        <div
          className={cn(
            "flex w-full gap-2",
            isMine ? "flex-row-reverse items-center" : "items-end"
          )}
        >
          {bubbleGutter}
          <div
            className={cn(
              "flex min-w-0 items-center gap-1",
              isMine ? "flex-row-reverse" : "flex-row"
            )}
          >
            {/* The jump-to highlight wraps the whole message (attachments +
                bubble), so it reads even on image-only / multi-part messages. */}
            <div
              className={cn(
                // `transition-shadow` is always on so the jump-to highlight ring
                // fades in/out instead of snapping when `highlighted` toggles.
                // `min-w-0` lets this flex item shrink below its content's
                // intrinsic width so the reply quote's single line truncates
                // instead of forcing the bubble wider than the column.
                "flex min-w-0 max-w-full flex-col gap-1 transition-shadow duration-200",
                // Match the bubble's chained corners so the highlight ring and
                // hover surface follow its exact shape (not a fixed 2xl box).
                bubbleCornerClass(isMine, isFirstOfRun, isLastOfRun),
                isMine ? "items-end" : "items-start",
                // `ring-offset-f1-background` colours the offset gap with the
                // transcript surface — without it the gap defaults to white and
                // reads as an aura in dark mode.
                highlighted &&
                  "ring-1 ring-f1-special-ring ring-offset-2 ring-offset-f1-background",
                !message.deleted &&
                  "group-hover:bg-f1-background-hover focus-within:bg-f1-background-hover",
                actionsOpen && "bg-f1-background-hover"
              )}
            >
              {hasAttachments && (
                <ChatMessageAttachments
                  message={message}
                  isMine={isMine}
                  isFirstOfRun={isFirstOfRun}
                  isLastOfRun={isLastOfRun}
                />
              )}
              {hasBubble && (
                <ChatBubble
                  message={message}
                  isMine={isMine}
                  author={author}
                  currentUserId={currentUserId}
                  // Media above the caption counts as "continuing" for corners:
                  // the bubble tucks its tail-side top so attachment + caption
                  // read as one chained stack (the nested reply quote / link
                  // preview mirror the same corner).
                  isFirstOfRun={isFirstOfRun && !hasAttachments}
                  isLastOfRun={isLastOfRun}
                />
              )}
              {/* The bubble anchors the "edited" mark to the body text. An
                  attachment-only message has no bubble, so surface it here
                  instead — otherwise an edited media message shows no mark. */}
              {!hasBubble && message.editedAt && !message.deleted && (
                <span className="px-1 text-sm text-f1-foreground-tertiary">
                  {i18n.chat.edited}
                </span>
              )}
            </div>
            {/* Sending indicator for own messages, in the slot next to the
                bubble (the row is flex-row-reverse for mine, so it reads to
                the bubble's left). Adding/removing it never shifts the bubble
                (right-anchored) nor the row height — stable measurements for
                the virtualizer. */}
            {isMine && message.status === "sending" && <SendingClock />}
            {/* Deleted tombstones have nothing to act on, and an in-flight
                (sending) message can't be acted on yet either — only the clock
                shows until it settles. The menu stays visible while open (not
                just on hover) so the ellipsis doesn't flicker. A FAILED message
                swaps the hover ellipsis for an always-visible critical alert
                (same popover, reduced to Retry / Delete). */}
            {!message.deleted && message.status !== "sending" && (
              <div
                className={cn(
                  message.status === "failed"
                    ? "opacity-100"
                    : "opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100",
                  actionsOpen && "opacity-100"
                )}
              >
                <ChatMessageActions
                  message={message}
                  isMine={isMine}
                  open={actionsOpen}
                  onOpenChange={setActionsOpen}
                />
              </div>
            )}
          </div>
        </div>
      )}
      <AnimatePresence initial={false}>
        {hasReactions && (
          // Reactions grow the row in (height + fade) when the first one lands
          // on a visible message, and collapse it back out when the last one is
          // removed — never a pop. The transcript's slide layer absorbs the
          // shift when pinned at the bottom. Pills/pickers portal their
          // popovers, so the overflow clip never cuts them.
          <motion.div
            key="reactions"
            className="flex w-full gap-2 overflow-hidden"
            initial={
              hadReactionsAtMountRef.current || reducedMotion
                ? false
                : { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {belowGutter}
            <div className="min-w-0 flex-1">
              <ChatMessageReactions message={message} isMine={isMine} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
