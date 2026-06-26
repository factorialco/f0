import { Fragment, type ReactNode } from "react"
import { parse } from "twemoji-parser"

import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useReplyPreview } from "../hooks/useReplyPreview"
import { useChatUI } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatUser } from "../types"
import { senderNameColorClass } from "../utils/sender-color"
import { ChatUserHoverCard } from "./ChatUserHoverCard"

/**
 * Render a message body with its emojis swapped for twemoji SVGs (our house
 * style, matching the chat header) instead of the OS glyphs, keeping the text
 * intact. Emojis are sized in `em` so they follow the surrounding font size,
 * and are not animated — the transcript is virtualized, so an entry animation
 * would re-fire every time an emoji scrolls back into view.
 */
const renderBodyWithEmojis = (body: string): ReactNode => {
  const entities = parse(body, {
    buildUrl: (codePoints) =>
      `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`,
  })
  if (entities.length === 0) return body

  const nodes: ReactNode[] = []
  let cursor = 0
  entities.forEach((entity, i) => {
    const [start, end] = entity.indices
    if (start > cursor) nodes.push(body.slice(cursor, start))
    nodes.push(
      <img
        key={`${start}-${i}`}
        src={entity.url}
        alt={entity.text}
        draggable={false}
        className="inline-block h-4 w-4 px-px align-[-0.15em]"
      />
    )
    cursor = end
  })
  if (cursor < body.length) nodes.push(body.slice(cursor))

  return nodes
}

/** A `@name` token to highlight in a message body. Slack-style colours: a
 * mention of someone else reads in info colours; a mention of you (`isSelf`) or
 * the whole group (`isEveryone`, `@here`) reads in warning/amber. `user`, when
 * present (any person mention), opens the same profile hover card as the avatar. */
type MentionToken = {
  name: string
  isSelf: boolean
  isEveryone: boolean
  user?: F0ChatUser
}

/**
 * Render a body with its `@name` mentions as chips and everything else through
 * {@link renderBodyWithEmojis}. Slack-style: a mention of someone else is an
 * info pill (and opens their profile hover card, like the sender avatar); a
 * mention of you or `@here` is an amber/warning pill that stands out. Falls back
 * to plain emoji rendering when there are no mentions.
 */
const renderBodyWithMentions = (
  body: string,
  tokens: MentionToken[]
): ReactNode => {
  if (tokens.length === 0) return renderBodyWithEmojis(body)

  // Collect every `@name` occurrence (longest names first so "@Ana María" wins
  // over "@Ana"), then drop overlaps left-to-right.
  const ranges: { start: number; end: number; token: MentionToken }[] = []
  const byLength = [...tokens].sort((a, b) => b.name.length - a.name.length)
  for (const token of byLength) {
    const pattern = `@${token.name}`
    let from = 0
    while (true) {
      const idx = body.indexOf(pattern, from)
      if (idx === -1) break
      ranges.push({ start: idx, end: idx + pattern.length, token })
      from = idx + pattern.length
    }
  }
  ranges.sort((a, b) => a.start - b.start)

  const clean: typeof ranges = []
  let lastEnd = 0
  for (const range of ranges) {
    if (range.start < lastEnd) continue
    clean.push(range)
    lastEnd = range.end
  }
  if (clean.length === 0) return renderBodyWithEmojis(body)

  const nodes: ReactNode[] = []
  let cursor = 0
  clean.forEach((range, i) => {
    if (range.start > cursor) {
      nodes.push(
        <Fragment key={`t-${i}`}>
          {renderBodyWithEmojis(body.slice(cursor, range.start))}
        </Fragment>
      )
    }
    const { token } = range
    const chip = (
      <span
        className={cn(
          "rounded-xs px-0.5 font-medium",
          token.isSelf || token.isEveryone
            ? "bg-f1-background-warning text-f1-foreground-warning"
            : "cursor-default bg-f1-background-info text-f1-foreground-info"
        )}
      >
        {body.slice(range.start, range.end)}
      </span>
    )
    // A person mention opens their profile card on hover, mirroring the
    // sender-avatar affordance. `@here` is a broadcast — no single person.
    nodes.push(
      token.user ? (
        <ChatUserHoverCard key={`m-${i}`} user={token.user}>
          {chip}
        </ChatUserHoverCard>
      ) : (
        <Fragment key={`m-${i}`}>{chip}</Fragment>
      )
    )
    cursor = range.end
  })
  if (cursor < body.length) {
    nodes.push(
      <Fragment key="t-last">
        {renderBodyWithEmojis(body.slice(cursor))}
      </Fragment>
    )
  }
  return nodes
}

/**
 * Reply quote nested at the top of the bubble (WhatsApp-style): a compact card
 * led by the quoted sender's coloured name; the body line shows the caption and
 * carries a media icon / thumbnail when the quoted message has attachments.
 * Clicking it jumps to the quoted message.
 */
const ReplyQuote = ({
  reply,
}: {
  reply: NonNullable<F0ChatMessage["replyTo"]>
}): ReactNode => {
  const { jumpToMessage } = useChatUI()
  const { currentUserId } = useF0Chat()
  const i18n = useI18n()
  const { icon, label, thumbnailUrl } = useReplyPreview(reply)
  // WhatsApp-style: a quote of your own message reads "You" rather than your name.
  const isOwnReply = reply.author.id === currentUserId
  const senderName = isOwnReply ? i18n.chat.you : reply.author.name
  return (
    <div className="p-1 pb-0">
      <button
        type="button"
        onClick={() => jumpToMessage(reply.id)}
        className={cn(
          "flex w-full items-center overflow-hidden rounded-xl text-left",
          "bg-f1-background-tertiary transition-colors hover:bg-f1-background-secondary"
        )}
      >
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt=""
            className="ml-2.5 h-9 w-9 shrink-0 self-center rounded-sm object-cover"
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 p-2.5">
          <OneEllipsis
            className={cn(
              "text-sm font-medium",
              senderNameColorClass(reply.author)
            )}
          >
            {senderName}
          </OneEllipsis>
          <span className="flex min-w-0 items-center gap-1 text-f1-foreground-secondary">
            {icon && <F0Icon icon={icon} size="sm" color="default" />}
            <OneEllipsis className="min-w-0 text-base" lines={1}>
              {label}
            </OneEllipsis>
          </span>
        </div>
        {/* {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt=""
            className="h-12 w-12 shrink-0 self-stretch object-cover"
          />
        )} */}
      </button>
    </div>
  )
}

/** A single message bubble. In groups the sender's name is the first line
 * (hover-carded); a reply quote, when present, is nested above the body. */
export const ChatBubble = ({
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

  const mentionTokens: MentionToken[] = [
    // Every person mention carries a user for the profile hover card; a mention
    // of you is flagged so it stands out in amber.
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
  ]

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
          {renderBodyWithMentions(message.body, mentionTokens)}
        </div>
      </div>
    </div>
  )
}
