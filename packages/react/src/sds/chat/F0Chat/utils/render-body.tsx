import { Fragment, type ReactNode } from "react"

import { F0Link } from "@/components/F0Link"
import { cn } from "@/lib/utils"

import { ChatUserHoverCard } from "../components/ChatUserHoverCard"
import { type F0ChatLinkPreview, type F0ChatUser } from "../types"
import { sanitizeDisplayText } from "./sanitize-text"

/** URLs in a body render as clickable links (matches the mobile bubble). */
const URL_REGEX = /(https?:\/\/[^\s]+)/g

/**
 * Message bodies carry their emoji as plain text and the browser draws them
 * with the reader's own system font — no parsing, no swap, no `<img>`.
 *
 * This used to substitute a twemoji SVG per emoji. It stopped for two reasons:
 * everyone should see the emoji their machine draws everywhere else, and the
 * transcript was never consistent about it anyway (reply quotes, system rows
 * and the typing indicator have always rendered the native glyph).
 *
 * Deliberately no emoji `font-family` here: `*`, `#`, the digits and `™` are
 * emoji in Unicode too, so an emoji font over prose turns numbers and symbols
 * into pictures. Per-character fallback already picks the emoji font for the
 * codepoints that need it.
 *
 * Render a body with its URLs as clickable {@link F0Link}s (new tab).
 * `stopPropagation` keeps a link click from also triggering the message row's
 * own handlers.
 *
 * When a URL has a scraped preview with a title, the link reads as that title
 * instead of the raw URL (WhatsApp-style — "Gol de Mikel Merino…" beats a
 * three-line URL). The real destination stays discoverable via the native
 * `title` tooltip, so the friendlier text never masks where the link goes.
 *
 * Pure (no hooks): callers memoize the result per message.
 */
export const renderBodyWithLinks = (
  rawBody: string,
  previews?: F0ChatLinkPreview[]
): ReactNode => {
  // Untrusted input: strip zalgo stacks / bidi overrides before rendering.
  // Note this pass is now load-bearing for emoji: U+FE0F, the variation
  // selector that forces colour presentation, is a combining mark, so the
  // zalgo cap has to keep leaving it alone.
  const body = sanitizeDisplayText(rawBody)
  // Split on a capturing group: URLs land at the odd indices.
  const parts = body.split(URL_REGEX)
  if (parts.length === 1) return body
  const titleByUrl = new Map(
    (previews ?? [])
      .filter((preview) => preview.title)
      .map((preview) => [preview.url, preview.title])
  )
  return parts.map((part, i) => {
    if (part.length === 0) return null
    if (i % 2 === 0) {
      return <Fragment key={`text-${i}`}>{part}</Fragment>
    }
    const title = titleByUrl.get(part)
    return (
      <F0Link
        key={`link-${i}`}
        href={part}
        target="_blank"
        stopPropagation
        title={title ? part : undefined}
        // A raw URL has no spaces so it must break anywhere; a title is real
        // text and should wrap on word boundaries like the rest of the body.
        className={cn("whitespace-normal", title ? "break-words" : "break-all")}
      >
        {title ?? part}
      </F0Link>
    )
  })
}

/** A `@name` token to highlight in a message body. Slack-style colours: a
 * mention of someone else reads in info colours; a mention of you (`isSelf`) or
 * the whole group (`isEveryone`, `@here`) reads in warning/amber. `user`, when
 * present (any person mention), opens the same profile hover card as the avatar. */
export type MentionToken = {
  name: string
  isSelf: boolean
  isEveryone: boolean
  user?: F0ChatUser
}

/**
 * Render a body with its `@name` mentions as chips and everything else through
 * {@link renderBodyWithLinks}. Slack-style: a mention of someone else is an
 * info pill (and opens their profile hover card, like the sender avatar); a
 * mention of you or `@here` is an amber/warning pill that stands out. Falls back to
 * {@link renderBodyWithLinks} when there are no mentions.
 *
 * Pure (no hooks): callers memoize the result per message.
 */
export const renderBodyWithMentions = (
  rawBody: string,
  tokens: MentionToken[],
  previews?: F0ChatLinkPreview[]
): ReactNode => {
  // Sanitize BEFORE the range math so mention indices match what renders.
  const body = sanitizeDisplayText(rawBody)
  if (tokens.length === 0) return renderBodyWithLinks(body, previews)

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
  if (clean.length === 0) return renderBodyWithLinks(body, previews)

  const nodes: ReactNode[] = []
  let cursor = 0
  clean.forEach((range, i) => {
    if (range.start > cursor) {
      nodes.push(
        <Fragment key={`t-${i}`}>
          {renderBodyWithLinks(body.slice(cursor, range.start), previews)}
        </Fragment>
      )
    }
    const { token } = range
    const chip = (
      <span
        className={cn(
          "font-medium text-f1-foreground-secondary hover:text-f1-foreground"
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
        {renderBodyWithLinks(body.slice(cursor), previews)}
      </Fragment>
    )
  }
  return nodes
}
