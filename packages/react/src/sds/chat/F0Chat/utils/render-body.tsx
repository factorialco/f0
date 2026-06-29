import { Fragment, type ReactNode } from "react"
import { parse } from "twemoji-parser"

import { cn } from "@/lib/utils"

import { type F0ChatUser } from "../types"
import { ChatUserHoverCard } from "../components/ChatUserHoverCard"

/** Twemoji SVG source — shared with the bubble, reactions and the composer. */
const buildUrl = (codePoints: string) =>
  `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`

/**
 * Render a message body with its emojis swapped for twemoji SVGs (our house
 * style, matching the chat header) instead of the OS glyphs, keeping the text
 * intact. Emojis are sized in `em` so they follow the surrounding font size,
 * and are not animated — the transcript is virtualized, so an entry animation
 * would re-fire every time an emoji scrolls back into view.
 *
 * Pure (no hooks): callers memoize the result per message so this doesn't
 * re-run on unrelated re-renders.
 */
export const renderBodyWithEmojis = (body: string): ReactNode => {
  const entities = parse(body, { buildUrl })
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
export type MentionToken = {
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
 *
 * Pure (no hooks): callers memoize the result per message.
 */
export const renderBodyWithMentions = (
  body: string,
  tokens: MentionToken[]
): ReactNode => {
  if (tokens.length === 0) return renderBodyWithEmojis(body)

  // Collect every `@name` occurrence (longest names first so "@Noor Rahimi" wins
  // over "@Noor"), then drop overlaps left-to-right.
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
 * Render a text string with twemoji SVGs for the composer's highlight overlay,
 * which sits over a (transparent) `<textarea>`. Unlike {@link renderBodyWithEmojis}
 * the layout must stay char-for-char aligned with the native textarea so the
 * caret, selection and mention chips don't drift: each emoji keeps a hidden
 * native glyph (which reserves the exact OS advance width) with the twemoji
 * image absolutely positioned over it. Falls back to the native glyph when
 * twemoji has no asset for the sequence.
 */
export const renderTextWithEmojis = (text: string): ReactNode => {
  const entities = parse(text, { buildUrl })
  if (entities.length === 0) return text

  const nodes: ReactNode[] = []
  let cursor = 0
  entities.forEach((entity, i) => {
    const [start, end] = entity.indices
    if (start > cursor) nodes.push(text.slice(cursor, start))
    nodes.push(
      <span
        key={`${start}-${i}`}
        className="relative inline-block align-baseline"
      >
        {/* Hidden native glyph reserves the exact width the textarea lays out. */}
        <span className="invisible">{entity.text}</span>
        <img
          src={entity.url}
          alt={entity.text}
          draggable={false}
          className="absolute inset-0 h-full w-full"
        />
      </span>
    )
    cursor = end
  })
  if (cursor < text.length) nodes.push(text.slice(cursor))

  return nodes
}
