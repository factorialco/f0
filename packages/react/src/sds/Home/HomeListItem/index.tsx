import { ReactNode } from "react"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import type { AvatarSize } from "@/components/avatars/internal/BaseAvatar"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import {
  F0AvatarList,
  type F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"
import {
  F0AvatarModule,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Counter } from "@/ui/Counter"

type PersonAvatars = Extract<F0AvatarListProps, { type: "person" }>["avatars"]

/**
 * The BASE row every Home list draws: a LEFT slot, a text stack, a RIGHT slot,
 * and a chevron when the row goes somewhere.
 *
 * The left slot is data first — `avatar` takes any of F0Avatar's types (person,
 * team, company, file, flag, emoji, icon), so a slot's params stay serializable —
 * with `left` as the node-level override for the variants that need something
 * F0Avatar cannot say (a module glyph, an alert).
 *
 * The text stack is three optional voices: `title` leads, `subtitle` murmurs on
 * the same line after a dot, `description` takes the second line.
 */
export interface HomeListItemProps {
  /** Left slot, as data: any avatar type. */
  avatar?: AvatarVariant
  /** The data avatar's size — `left` nodes carry their own sizing. */
  avatarSize?: AvatarSize
  /** Left slot, as a node — wins over `avatar`. For the variants' own glyphs. */
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

/* ------------------------------- variants ------------------------------- */

/** A one-line row: icon or any avatar, title, an optional count. */
export interface SimpleLineListItemProps extends Pick<
  HomeListItemProps,
  "avatar" | "avatarSize" | "title" | "subtitle" | "description" | "onClick"
> {
  /** Shorthand for `avatar: { type: "icon", icon }`. */
  icon?: IconType
  count?: number
}

export function SimpleLineListItem({
  icon,
  avatar,
  count,
  ...rest
}: SimpleLineListItemProps) {
  return (
    <HomeListItem
      avatar={avatar ?? (icon ? { type: "icon", icon } : undefined)}
      right={count != null ? <Counter value={count} /> : undefined}
      {...rest}
    />
  )
}

/** A message-like row: module glyph or avatar, title, its time below, a sender. */
export interface InboxListItemProps extends Pick<
  HomeListItemProps,
  "avatar" | "avatarSize" | "title" | "unread" | "onClick"
> {
  /** The module the message belongs to — wins over `avatar`. */
  module?: ModuleId
  /** When it happened; the second line. */
  subtitle?: string
  /** Who it is from, trailing. */
  person?: { firstName: string; lastName: string; src?: string }
}

export function InboxListItem({
  module,
  avatar,
  subtitle,
  person,
  ...rest
}: InboxListItemProps) {
  return (
    <HomeListItem
      left={module ? <F0AvatarModule module={module} size="lg" /> : undefined}
      avatar={avatar}
      description={subtitle}
      right={
        person ? (
          <F0Avatar avatar={{ type: "person", ...person }} size="sm" />
        ) : undefined
      }
      {...rest}
    />
  )
}

/** A who-is-where row: an alert or any avatar, a count subtitle, faces trailing. */
export interface StatusListItemProps extends Pick<
  HomeListItemProps,
  "avatar" | "avatarSize" | "title" | "onClick"
> {
  /** Alert glyph on the left — wins over `avatar`. */
  alert?: Parameters<typeof F0AvatarAlert>[0]["type"]
  /** How many, under the title. */
  subtitle?: string
  /** The people themselves, trailing. */
  avatars?: PersonAvatars
  remainingCount?: number
}

export function StatusListItem({
  alert,
  avatar,
  subtitle,
  avatars,
  remainingCount,
  ...rest
}: StatusListItemProps) {
  return (
    <HomeListItem
      left={alert ? <F0AvatarAlert type={alert} /> : undefined}
      avatar={avatar}
      description={subtitle}
      right={
        avatars && avatars.length > 0 ? (
          <F0AvatarList
            type="person"
            size="sm"
            layout="compact"
            avatars={avatars}
            remainingCount={remainingCount}
          />
        ) : undefined
      }
      {...rest}
    />
  )
}
