import { memo, type ReactNode, useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type F0ChatMessage, type F0ChatUser } from "../types"
import { type MentionToken, renderBodyWithMentions } from "../utils/render-body"
import { senderNameColorClass } from "../utils/sender-color"
import { ChatUserHoverCard } from "./ChatUserHoverCard"
import { ReplyQuote } from "./ReplyQuote"

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
}: {
  message: F0ChatMessage
  isMine: boolean
  /** When set (group incoming, first of a run), render the name as line one. */
  author?: F0ChatUser
  /** The viewer's id — a mention of it reads in warning/amber (Slack-style). */
  currentUserId?: string
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

  if (message.deleted) {
    return (
      <div
        className={cn(
          "w-fit max-w-full rounded-2xl px-3.5 py-2.5",
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
    <div className="min-w-0 max-w-full rounded-2xl bg-f1-background">
      <div
        className={cn(
          "flex w-fit max-w-full flex-col rounded-2xl text-f1-foreground font-normal",
          "whitespace-pre-wrap break-words",
          "border border-solid border-f1-border-secondary",
          // Mine: grey. Others: white with a subtle border (matches the design).
          isMine ? "bg-f1-background-tertiary" : "bg-transparent",
          message.status === "failed" && "opacity-60"
        )}
      >
        {message.replyTo && <ReplyQuote reply={message.replyTo} />}
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
        </div>
      </div>
    </div>
  )
}

export const ChatBubble = memo(ChatBubbleImpl)
