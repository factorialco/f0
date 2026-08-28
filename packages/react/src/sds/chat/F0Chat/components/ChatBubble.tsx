import { motion } from "motion/react"
import { memo, type ReactNode, useMemo, useRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import { type F0ChatMessage, type F0ChatUser } from "../types"
import { type MentionToken, renderBodyWithMentions } from "../utils/render-body"
import {
  messageSurfaceColorClass,
  senderNameColorClass,
} from "../utils/sender-color"
import { ChatLinkPreview } from "./ChatLinkPreview"
import { ChatMessageMeta, ChatMessageMetaLabel } from "./ChatMessageMeta"
import { ChatUserHoverCard } from "./ChatUserHoverCard"
import { ReplyQuote } from "./ReplyQuote"

type BubbleCornerLayer = "inner" | "outer"

interface BubbleCornerOptions {
  isMine: boolean
  isFirstOfRun: boolean
  isLastOfRun: boolean
  layer?: BubbleCornerLayer
}

const bubbleCornerClasses = {
  inner: {
    base: "rounded-2xl",
    left: ["rounded-tl-sm", "rounded-bl-sm"],
    right: ["rounded-tr-sm", "rounded-br-sm"],
    // Pulled in to 4px, so the run ends on a point aimed at its own side.
    endLeft: "rounded-bl-2xs",
    endRight: "rounded-br-2xs",
  },
  outer: {
    // The interaction surface wraps the bubble with 2px of padding. Adding
    // those 2px to both inner radii (20px/8px) keeps the curves concentric.
    base: "rounded-[22px]",
    left: ["rounded-tl-[10px]", "rounded-bl-[10px]"],
    right: ["rounded-tr-[10px]", "rounded-br-[10px]"],
    // The one corner that doesn't take the +2px: at 4px the offset is below
    // what the eye resolves, and matching the inner radius keeps the point
    // itself sharp rather than letting the hover surface round it off.
    endLeft: "rounded-bl-2xs",
    endRight: "rounded-br-2xs",
  },
} as const

/**
 * Border-radius classes for a chat bubble given its position in a same-author
 * run.
 *
 * On the tail side the top corner tucks in while the run continues above, and
 * the bottom corner takes one of three shapes: tucked while another bubble
 * follows, and **squared** on the last one — the corner points down at the
 * sender's own side, which is how Telegram and Messages mark where a stack
 * ends. Only one bubble per run carries it.
 *
 * Exported so the highlight ring / hover surface in `ChatMessageItem`, and the
 * media cards in `ChatMessageAttachments`, follow the exact same shape.
 */
export const bubbleCornerClass = ({
  isMine,
  isFirstOfRun,
  isLastOfRun,
  layer = "inner",
}: BubbleCornerOptions): string => {
  const profile = bubbleCornerClasses[layer]
  const [topTailCorner, bottomTailCorner] = profile[isMine ? "right" : "left"]
  const endCorner = isMine ? profile.endRight : profile.endLeft

  return cn(
    // The radius transitions because extending a run flips the previous
    // bubble's tail corner (square → sm) — animated, not a dry class swap.
    profile.base,
    "transition-[border-radius] duration-150 motion-reduce:transition-none",
    !isFirstOfRun && topTailCorner,
    isLastOfRun ? endCorner : bottomTailCorner
  )
}

/** A single message bubble. In groups the sender's name is the first line
 * (hover-carded); a reply quote, when present, is nested above the body.
 *
 * Memoized: the transcript is virtualized and rows re-render on scroll, so the
 * mention/emoji parsing below is kept out of the hot path — it only re-runs
 * when the message content (or the viewer) actually changes. */
const ChatBubbleImpl = ({
  message,
  isMine,
  author,
  currentUserId,
  isFirstOfRun = true,
  isLastOfRun = true,
}: {
  message: F0ChatMessage
  isMine: boolean
  /** When set (group incoming, first of a run), render the name as line one. */
  author?: F0ChatUser
  /** The viewer's id — a mention of it reads in warning/amber (Slack-style). */
  currentUserId?: string
  /** First message of a same-author run. When false, the bubble tucks in its
   * tail-side top corner so the run reads as one chained, stacked group. */
  isFirstOfRun?: boolean
  /** Last message of a same-author run. When false, the bubble tucks in its
   * tail-side bottom corner so the run reads as one chained, stacked group. */
  isLastOfRun?: boolean
}): ReactNode => {
  const i18n = useI18n()
  const { reducedMotion } = useChatRenderConfig()
  // Whether the message was ALREADY deleted when this row mounted (history, or
  // a tombstone scrolled back into the window): render it in place. Only a
  // live delete fades the tombstone in.
  const wasDeletedAtMountRef = useRef(message.deleted)

  const mentionTokens = useMemo<MentionToken[]>(
    () => [
      // Every person mention carries a user for the profile hover card; a
      // mention of you is flagged so it stands out in amber.
      ...(message.mentions ?? []).map(
        (m): MentionToken => ({
          name: m.name,
          isSelf: currentUserId != null && m.id === currentUserId,
          isEveryone: false,
          user: {
            id: m.id,
            name: m.name,
            avatar: m.avatar,
            subtitle: m.subtitle,
            profileHref: m.profileHref,
          },
        })
      ),
      ...(message.mentionedEveryone
        ? [{ name: i18n.chat.mentionEveryone, isSelf: false, isEveryone: true }]
        : []),
    ],
    [
      message.mentions,
      message.mentionedEveryone,
      currentUserId,
      i18n.chat.mentionEveryone,
    ]
  )

  // Parse the body (twemoji + mention chips) once per content change — not on
  // every scroll-driven re-render. Link previews feed it so an inline URL
  // reads as its scraped page title instead of the raw address.
  const renderedBody = useMemo(
    () =>
      renderBodyWithMentions(
        // Trailing newlines survive sanitisation and `whitespace-pre-wrap`
        // renders every one of them, which would strand the floated time at the
        // top of a tall, empty bubble.
        message.body.trimEnd(),
        mentionTokens,
        message.linkPreviews
      ),
    [message.body, mentionTokens, message.linkPreviews]
  )

  const corners = bubbleCornerClass({
    isMine,
    isFirstOfRun,
    isLastOfRun,
  })

  if (message.deleted) {
    // The branch switch remounts this root, so `initial` applies on a live
    // delete — the tombstone fades in instead of hard-swapping the body.
    return (
      <motion.div
        initial={
          wasDeletedAtMountRef.current || reducedMotion ? false : { opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className={cn(
          corners,
          "relative w-fit max-w-full px-3.5 py-2.5",
          "text-sm italic text-f1-foreground",
          messageSurfaceColorClass(message.author, isMine)
        )}
      >
        {i18n.chat.deletedMessage}
        <ChatMessageMeta message={message} placement="bubble" />
      </motion.div>
    )
  }

  return (
    <div className={cn("min-w-0 max-w-full bg-f1-background", corners)}>
      <div
        className={cn(
          corners,
          "flex w-fit max-w-full flex-col text-f1-foreground font-normal",
          "whitespace-pre-wrap break-words",
          // Incoming bubbles share the author's hue at a quiet tint, while the
          // current user's bubble remains clearly neutral.
          messageSurfaceColorClass(message.author, isMine)
        )}
      >
        {message.replyTo && (
          <ReplyQuote
            reply={message.replyTo}
            isMine={isMine}
            isFirstOfRun={isFirstOfRun}
          />
        )}
        {message.linkPreviews && message.linkPreviews.length > 0 && (
          <ChatLinkPreview
            previews={message.linkPreviews}
            isMine={isMine}
            // Below a reply quote the card no longer touches the bubble's top —
            // keep it fully rounded there.
            isFirstOfRun={message.replyTo ? true : isFirstOfRun}
          />
        )}
        <div className="relative px-3.5 py-2.5">
          {author && (
            <ChatUserHoverCard user={author}>
              {/* WhatsApp-style: tint the sender name to match their avatar colour. */}
              <span
                className={cn(
                  "mb-0.5 block w-fit cursor-default text-sm font-medium",
                  senderNameColorClass(author)
                )}
              >
                {author.name}
              </span>
            </ChatUserHoverCard>
          )}
          {renderedBody}
          {/* Trails the body so the time reads as the end of the message. */}
          <ChatMessageMeta message={message} placement="bubble" />
          <ChatMessageMetaLabel message={message} />
        </div>
      </div>
    </div>
  )
}

export const ChatBubble = memo(ChatBubbleImpl)
