import { Fragment, ReactNode, useState } from "react"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import type { AvatarSize } from "@/components/avatars/internal/BaseAvatar"
import { F0Button } from "@/components/F0Button"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { ChevronRight } from "@/icons/app"
import { isExternalHref, Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { useWidgetIsWide } from "@/experimental/Widgets/Widget"
import {
  DropdownInternal,
  type DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal.tsx"

/**
 * One of a row's hover actions: a button at the row's right that acts on THAT
 * row.
 *
 * ICON-ONLY BY DEFAULT, because a row is a dense line of text and a strip of
 * labelled buttons beside it would outweigh what it is about — `label` is then
 * the accessible name and the tooltip rather than visible text.
 *
 * A row's PRIMARY action can say what it is (`showLabel`), and usually should
 * when the glyph alone would be a guess: "Clock out" is a clock, and so is
 * "Snooze". Keep it to ONE per row, leading, with the rest as glyphs — a strip
 * of labelled buttons is a toolbar, not a row.
 */
export type HomeListItemAction = {
  /** What it DOES, in words: "Clock out", "Dismiss". Never "OK" or "Go". */
  label: string
  /** Omit for a text-only button — then the label always shows. */
  icon?: IconType
  /** A destructive one — it draws as the critical button. */
  critical?: boolean
  /** Show the `label` beside the glyph instead of only in the tooltip. */
  showLabel?: boolean
} & (
  | { onClick: () => void; items?: never }
  | {
      /**
       * The action OPENS A MENU instead of doing one thing — "Remind me" over
       * Later today / Tomorrow / Next Monday. Ordinary `DropdownItem`s, so a
       * `{ type: "label", text }` heads the group and `{ type: "separator" }`
       * divides it.
       *
       * The button is the same button either way, glyph or label: what changes
       * is that pressing it opens the menu, and the strip STAYS OPEN while the
       * menu is (the pointer has to leave the row to reach it).
       */
      items: DropdownItem[]
      onClick?: never
    }
)

/**
 * THE HOVER ACTIONS, over the row's right edge.
 *
 * They are a SIBLING of the row rather than a child, because a link row is a
 * real anchor and a button cannot live inside one. That also means a click on
 * an action is never a click on the row.
 *
 * The gradient is what makes them readable over whatever they cover: it fades
 * the CARD's background in from the right, so the row's own hover tint shows
 * through on the left of the strip and the buttons sit on plain background. The
 * transparent runway (`pl-16`) is the fade itself, and it must not swallow
 * pointer events on its way — only the buttons take them, and only once the
 * strip is actually showing.
 */
const ACTIONS_CLASS = cn(
  "pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center gap-1 rounded-r-md pl-16 pr-2",
  "bg-gradient-to-l from-f1-background from-60% to-transparent",
  // Hidden but still in the DOM and still focusable, so Tab reaches them —
  // and reaching them is what reveals the strip (`group-focus-within`).
  "opacity-0 transition-opacity motion-reduce:transition-none",
  "group-hover:pointer-events-auto group-hover:opacity-100",
  "group-focus-within:pointer-events-auto group-focus-within:opacity-100"
)

/**
 * The strip HELD OPEN regardless of the pointer, while one of its buttons has a
 * menu up.
 *
 * A dropdown portals to the app's overlay layer, so reaching it means leaving
 * the row: hover goes false, the strip fades, and the trigger unmounts from
 * under its own menu. Pinning it is the same thing f0's own row-actions overlay
 * does with `dropDownOpen`.
 */
const ACTIONS_PINNED_CLASS = "pointer-events-auto opacity-100"

/**
 * The BASE row every Home list draws: a LEFT slot, a text stack and a RIGHT
 * slot. A row that goes somewhere says so by being a link — hover state and
 * all — not with a trailing chevron: a column of arrows repeating "clickable"
 * on every row is noise in a widget this dense. `showChevron` opts one in.
 *
 * The left slot is data first — `avatar` takes any of F0Avatar's types (person,
 * team, company, file, flag, emoji, icon), so a slot's params stay serializable —
 * with `left` as the node-level override for glyphs F0Avatar cannot say (a
 * module glyph, an alert).
 *
 * The text stack is three optional voices: `title` leads, `subtitle` murmurs on
 * the same line after a dot, `description` takes the second line.
 *
 * A row can also carry `actions` — what you can DO to it without leaving the
 * widget (snooze it, dismiss it). They stay out of the way until the row is
 * hovered or something inside it is focused.
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
  /** Trailing slot: a tag, a counter, people. */
  right?: ReactNode
  /**
   * What can be DONE to this row, as icon buttons over its right edge. They
   * appear on hover (and whenever anything in the row has focus, so they are
   * reachable by keyboard) behind a fade that covers whatever `right` holds.
   *
   * A row with actions HIGHLIGHTS ON HOVER even when it is inert: something
   * happens there, so it has to look like it does.
   */
  actions?: HomeListItemAction[]
  /** An accent dot on the left slot's corner — unseen/pending. */
  unread?: boolean
  /**
   * Renders the row as a REAL link — an anchor with this href (role `link`,
   * middle-click, copy address), routed through the app's `LinkProvider`.
   * The row's ONLY click behavior: only an href to ANOTHER HOST opens a new tab
   * (see `isExternalHref`) — a path, a `#fragment` and this host under any
   * scheme all stay in this tab, where the app's router takes them.
   */
  href?: string
  /** A trailing chevron. Off — the row's link affordance is the row itself. */
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
  actions,
  unread = false,
  href,
  showChevron = false,
}: HomeListItemProps) {
  const hasActions = Boolean(actions?.length)
  // The card the row landed in — the row's controls step up with it.
  const isWide = useWidgetIsWide()
  // Which action's menu is up, by label — `null` for none. Not a boolean, so
  // one menu closing can never hide a strip another one is still holding open.
  const [openMenu, setOpenMenu] = useState<string | null>(null)
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
      // `ring-inset`: the row is drawn inside a box that CLIPS (the item-churn
      // animation closes a row's height, which needs `overflow: hidden` — see
      // `HomeSlotItem`), and a ring drawn outside the row would lose its top
      // and bottom edges to that clip.
      "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring",
    // The tint follows the POINTER over the whole row, actions strip included —
    // which is the wrapper, not this element, once there are actions. Without
    // the group version the row would go dark the moment the pointer crossed
    // into the strip on its way to a button.
    hasActions
      ? "group-hover:bg-f1-background-tertiary group-focus-within:bg-f1-background-tertiary"
      : href && "hover:bg-f1-background-tertiary",
    // With a menu up the pointer is off the row entirely, but the row is still
    // the thing being acted on — so it stays lit under its own open menu.
    openMenu && "bg-f1-background-tertiary"
  )

  const row = href ? (
    <Link
      href={href}
      className={cn(className, "no-underline")}
      {...(isExternalHref(href) ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  )

  if (!hasActions) return row

  return (
    <div className="group relative">
      {row}
      <div className={cn(ACTIONS_CLASS, openMenu && ACTIONS_PINNED_CLASS)}>
        {actions?.map((action) => {
          const button = (
            <F0Button
              icon={action.icon}
              label={action.label}
              // Hidden only when there is a glyph to carry the button AND the
              // action didn't ask to be named — `F0Button` then turns the label
              // into the accessible name and the tooltip. A button with neither
              // an icon nor visible text would be an empty square.
              hideLabel={Boolean(action.icon) && !action.showLabel}
              variant={action.critical ? "critical" : "outline"}
              // Up a step with the card, like everything else the row draws — a
              // 24px button beside a 40px glyph is a control you have to aim at.
              size={isWide ? "md" : "sm"}
              onClick={action.onClick}
            />
          )

          if (!action.items)
            return <Fragment key={action.label}>{button}</Fragment>

          return (
            <DropdownInternal
              key={action.label}
              items={action.items}
              // `end`, so the menu hangs under the strip's own right edge rather
              // than off the card.
              align="end"
              // CONTROLLED, and it has to be: `DropdownInternal` only calls
              // `onOpenChange` when `open` is passed too, and the row needs the
              // answer to keep the strip up (see `ACTIONS_PINNED_CLASS`).
              open={openMenu === action.label}
              onOpenChange={(open) =>
                setOpenMenu((current) =>
                  open
                    ? action.label
                    : current === action.label
                      ? null
                      : current
                )
              }
            >
              {button}
            </DropdownInternal>
          )
        })}
      </div>
    </div>
  )
}
