import { ReactNode } from "react"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import type { AvatarSize } from "@/components/avatars/internal/BaseAvatar"
import { F0Icon } from "@/components/F0Icon"
import { ChevronRight } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"

/**
 * The BASE row every Home list draws: a LEFT slot, a text stack, a RIGHT slot,
 * and a chevron when the row goes somewhere.
 *
 * The left slot is data first — `avatar` takes any of F0Avatar's types (person,
 * team, company, file, flag, emoji, icon), so a slot's params stay serializable —
 * with `left` as the node-level override for glyphs F0Avatar cannot say (a
 * module glyph, an alert).
 *
 * The text stack is three optional voices: `title` leads, `subtitle` murmurs on
 * the same line after a dot, `description` takes the second line.
 *
 * The `list` slot builds these rows from its schema (see `slotRenderers`) —
 * that's where the row's shape and sizing rules live.
 */
export interface HomeListItemProps {
  /** Left slot, as data: any avatar type. */
  avatar?: AvatarVariant
  /** The data avatar's size — `left` nodes carry their own sizing. */
  avatarSize?: AvatarSize
  /** Left slot, as a node — wins over `avatar`. For glyphs F0Avatar can't say. */
  left?: ReactNode
  title: string
  /** Muted, on the title's line, dot-separated. */
  subtitle?: string
  /** The second line. */
  description?: string
  /** Trailing slot, before the chevron: a tag, a counter, people. */
  right?: ReactNode
  /** An accent dot on the left slot's corner — unseen/pending. */
  unread?: boolean
  /**
   * Renders the row as a REAL link — an anchor with this href (role `link`,
   * middle-click, copy address), routed through the app's `LinkProvider`.
   * The row's ONLY click behavior: relative and `#` hrefs open in the same
   * tab, hrefs to other domains open in a new one.
   */
  href?: string
  /** Defaults to whether the row is clickable. */
  showChevron?: boolean
}

/**
 * Whether an href leaves the current domain — those rows open in a new tab.
 * Relative paths and `#` fragments resolve against the current origin, so
 * they stay in this one.
 */
const isExternal = (href: string) => {
  if (typeof window === "undefined") return false
  try {
    return (
      new URL(href, window.location.origin).origin !== window.location.origin
    )
  } catch {
    return false
  }
}

export function HomeListItem({
  avatar,
  avatarSize = "lg",
  left,
  title,
  subtitle,
  description,
  right,
  unread = false,
  href,
  showChevron = href != null,
}: HomeListItemProps) {
  const leading =
    left ?? (avatar ? <F0Avatar avatar={avatar} size={avatarSize} /> : null)

  const content = (
    <>
      {leading ? (
        <div className="relative shrink-0">
          {leading}
          {unread ? (
            // The ring guarantees contrast against any glyph under the dot
            // (e.g. the Communities module's red).
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" />
          ) : null}
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-baseline gap-1">
          <span className="truncate font-medium text-f1-foreground">
            {title}
          </span>
          {subtitle ? (
            <span className="truncate text-f1-foreground-secondary">
              · {subtitle}
            </span>
          ) : null}
        </div>
        {description ? (
          <div className="truncate text-f1-foreground-secondary">
            {description}
          </div>
        ) : null}
      </div>
      {right}
      {showChevron ? (
        <F0Icon icon={ChevronRight} size="sm" color="secondary" />
      ) : null}
    </>
  )

  const className = cn(
    "flex w-full items-center gap-3 rounded-md p-2 text-left",
    href &&
      "cursor-pointer hover:bg-f1-background-tertiary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"
  )

  return href ? (
    <Link
      href={href}
      className={cn(className, "no-underline")}
      {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  )
}
