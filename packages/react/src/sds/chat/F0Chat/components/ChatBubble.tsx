import { memo, type ReactNode, useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatMessage, type F0ChatUser } from "../types"
import { type MentionToken, renderBodyWithMentions } from "../utils/render-body"
import { senderNameColorClass } from "../utils/sender-color"
import { ChatUserHoverCard } from "./ChatUserHoverCard"
import { ReplyQuote } from "./ReplyQuote"

/**
 * Border-radius classes for a chat bubble given its position in a same-author
 * run: on the tail side, a corner tucks in only when it abuts another bubble
 * from the same author (top when continuing a run, bottom when another follows).
 * Exported so the highlight ring / hover surface in `ChatMessageItem` can follow
 * the exact same shape as the bubble it wraps.
 */
export const bubbleCornerClass = (
  isMine: boolean,
  isFirstOfRun: boolean,
  isLastOfRun: boolean
): string =>
  cn(
    "rounded-2xl",
    !isFirstOfRun && (isMine ? "rounded-tr-sm" : "rounded-tl-sm"),
    !isLastOfRun && (isMine ? "rounded-br-sm" : "rounded-bl-sm")
  )

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
  // every scroll-driven re-render.
  const renderedBody = useMemo(
    () => renderBodyWithMentions(message.body, mentionTokens),
    [message.body, mentionTokens]
  )

  const corners = bubbleCornerClass(isMine, isFirstOfRun, isLastOfRun)

  if (message.deleted) {
    return (
      <div
        className={cn(
          corners,
          "w-fit max-w-full px-3.5 py-2.5",
          "text-sm italic text-f1-foreground",
          "border border-solid border-f1-border-secondary",
          isMine ? "bg-f1-background-tertiary" : "bg-f1-background"
        )}
      >
        {i18n.chat.deletedMessage}
      </div>
    )
  }

  return (
    <div className={cn("min-w-0 max-w-full bg-f1-background", corners)}>
      <div
        className={cn(
          corners,
          "flex w-fit max-w-full flex-col l text-f1-foreground font-normal",
          "whitespace-pre-wrap break-words",
          "border border-solid border-f1-border-secondary",
          // Mine: grey. Others: white with a subtle border (matches the design).
          isMine ? "bg-f1-background-tertiary" : "bg-transparent",
          message.status === "failed" && "opacity-60"
        )}
      >
        {message.replyTo && (
          <ReplyQuote
            reply={message.replyTo}
            isMine={isMine}
            isFirstOfRun={isFirstOfRun}
          />
        )}
        <div className="px-3.5 py-2.5">
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
          {message.editedAt && (
            // WhatsApp-style "edited" marker; sits at the end of the body (the
            // bubble shows no timestamp, so there's no time to pair it with).
            <span className="ml-1 align-baseline text-sm text-f1-foreground-tertiary">
              {i18n.chat.edited}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export const ChatBubble = memo(ChatBubbleImpl)
