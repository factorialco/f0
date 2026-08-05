import { ReactNode } from "react"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import type { AvatarSize } from "@/components/avatars/internal/BaseAvatar"
import { F0Icon } from "@/components/F0Icon"
import { ChevronRight } from "@/icons/app"
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
  onClick?: () => void
  /** Defaults to whether the row is clickable. */
  showChevron?: boolean
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
  onClick,
  showChevron = onClick != null,
}: HomeListItemProps) {
  const leading =
    left ?? (avatar ? <F0Avatar avatar={avatar} size={avatarSize} /> : null)

  const content = (
    <>
      {leading ? (
        <div className="relative shrink-0">
          {leading}
          {unread ? (
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold" />
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
    onClick &&
      "cursor-pointer hover:bg-f1-background-tertiary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"
  )

  return onClick ? (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  ) : (
    <div className={className}>{content}</div>
  )
}
