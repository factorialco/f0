import { type CSSProperties, ReactNode, useState } from "react"

import { type z } from "zod"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import {
  F0AvatarList,
  F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"
import {
  F0AvatarModule,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule"
import type { AvatarSize } from "@/components/avatars/internal/BaseAvatar"
import { F0Button } from "@/components/F0Button"
import { type F0ButtonProps } from "@/components/F0Button"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import { Counter } from "@/ui/Counter"
import { Skeleton } from "@/ui/skeleton"
import {
  CalendarEvent,
  type CalendarEventProps,
} from "@/experimental/Widgets/Content/CalendarEvent"
import {
  IndicatorsList,
  IndicatorsListProps,
} from "@/experimental/Widgets/Content/IndicatorsList"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import {
  useWidgetIsWideOrUnset,
  WidgetProps,
} from "@/experimental/Widgets/Widget"
import { type F0FormSchema } from "@/patterns/F0Form"

import {
  descriptionText,
  HomeListItem,
  type DescriptionPart,
  type HomeListItemAction,
} from "./HomeListItem"
import { HomeSlotItem, HomeSlotItems, useIsBulkChange } from "./home-motion"

/**
 * The item-churn animation, re-exported so a BESPOKE renderer draws its items
 * the way the built-in ones do: wrap the items in `HomeSlotItems` and each one
 * in a `HomeSlotItem` keyed by its stable id. An item added or removed then
 * fades while its height closes, so the card resizes continuously instead of
 * jumping.
 *
 * `useIsBulkChange` is the other half of it: feed its answer to each item's
 * `animated` so a render that REPLACES the list — "View more" revealing thirty
 * rows, a filter clearing — draws the new list at once instead of animating
 * every row of it.
 */
export { HomeSlotItem, HomeSlotItems, useIsBulkChange }

/**
 * The Home kit's slot vocabulary and how each slot is drawn. `SlotWidget`
 * renders a widget from these; the layout (`NewHomeLayout`) stays pure
 * placement.
 */

/** Context threaded into every slot renderer. */
export interface HomeRenderCtx {
  /**
   * Whether this slot is the LAST one in its widget. `SlotWidget` sets it per
   * slot; row-based slots use it to keep their bottom bleed (see
   * { slotRowBleed}).
   */
  isLastSlot?: boolean
  /**
   * Whether the widget draws a FOOTER under its slots (the frame's `action`).
   * The last slot's bottom bleed is spent differently either way: with a footer
   * it is what the footer's own `mt-2` buys back; without one, the slot's
   * bottom IS the card's bottom edge — which is what a "View more" button
   * sitting there needs to know (see {@link listMoreButtonClass}).
   */
  hasFooter?: boolean
  /**
   * WHAT THE CARD IS SHOWING, when its header carries a `headerSelect`: the
   * option the reader is on. A slot renderer that owns its own data reads this
   * to fetch for it — the switcher is in the header, the fetching is here, and
   * neither needs the host to hold the value.
   */
  selection?: string
}

/** Draws ONE slot from its params. Keyed by `visualization` in a renderer map. */
export type SlotRenderer<P = unknown> = (
  params: P,
  ctx: HomeRenderCtx
) => ReactNode

/**
 * The ctx a SKELETON is drawn with: the render ctx plus how many placeholder
 * items to draw — the slot's `expectedItemsCount`, already defaulted.
 */
export type HomeSkeletonCtx = HomeRenderCtx & { expectedItemsCount: number }

/**
 * Draws the slot's PLACEHOLDER, before its data lands. It gets the same params
 * the renderer will get — a loading slot still carries its static config (a
 * `list`'s schema, say), just no items — so the placeholder can be shaped like
 * what is coming.
 */
export type SlotSkeletonRenderer<P = unknown> = (
  params: P,
  ctx: HomeSkeletonCtx
) => ReactNode

/**
 * How a visualization is drawn: the render function on its own, or that
 * function PAIRED with the skeleton to draw while the slot loads.
 */
export type SlotRendererEntry<P = unknown> =
  | SlotRenderer<P>
  | { render: SlotRenderer<P>; skeleton?: SlotSkeletonRenderer<P> }

export type SlotRenderers = Record<string, SlotRendererEntry>

/** A renderer entry in its full form — a bare function is just its `render`. */
export const resolveSlotRenderer = (
  entry: SlotRendererEntry | undefined
): { render: SlotRenderer; skeleton?: SlotSkeletonRenderer } | undefined =>
  entry == null
    ? undefined
    : typeof entry === "function"
      ? { render: entry }
      : entry

/* ------------------------------ list schema ------------------------------ */

type AlertType = Parameters<typeof F0AvatarAlert>[0]["type"]
type AvatarData<T extends AvatarVariant["type"]> = Omit<
  Extract<AvatarVariant, { type: T }>,
  "type"
>

/** What every row of a `list` slot draws on its LEFT. */
export type ListLeftKind = AvatarVariant["type"] | "module" | "alert"

/**
 * The tint a row's ICON glyph can carry. f0's NAMED palette — the same hues
 * `ui/Avatar` colours initials with — deliberately, rather than the semantic
 * families (`critical`, `warning`, `positive`): a colour here says which KIND
 * of thing the row is, so a feed can give every category its own without any of
 * them reading as an alert. For "this is urgent", the left kind is `alert`.
 */
export const listIconColors = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel",
] as const

export type ListIconPaletteColor = (typeof listIconColors)[number]

/**
 * A row's glyph tint: one of {@link listIconColors}, or a HEX of your own.
 *
 * Prefer a palette name. Those eleven hues were picked to sit beside each other
 * in one column and to hold up in both themes, which is the whole job here — a
 * feed's glyphs are read as a SET, and a colour chosen per row without seeing
 * the others is how a card ends up with two greens that mean different things.
 *
 * The hex is for the case the palette genuinely cannot serve: a colour that is
 * already data — a calendar's own colour, a module's brand, a category a user
 * picked themselves. It is treated exactly like a palette hue (a tenth of it as
 * the tile, the hue itself as the icon), so a bespoke colour and a named one
 * still draw the same glyph. `#RGB` and `#RRGGBB` both parse; anything else
 * falls back to the plain, untinted glyph rather than drawing nothing.
 */
export type ListIconColor = ListIconPaletteColor | `#${string}`

/**
 * The tinted glyph, one literal class string per colour: Tailwind reads source
 * text, so a class built from a variable never reaches the stylesheet.
 *
 * The tile is the hue at a TENTH of its strength and the icon is the hue
 * itself, which is what keeps a row of them legible side by side — the icons
 * carry the colour, the tiles only suggest it. Dark mode needs the tile
 * stronger to register against the card at all, hence the second value.
 */
const LIST_ICON_TINT: Record<ListIconPaletteColor, string> = {
  viridian:
    "bg-[hsl(theme(colors.viridian.50)_/_0.1)] text-[hsl(theme(colors.viridian.50))] dark:bg-[hsl(theme(colors.viridian.50)_/_0.24)]",
  malibu:
    "bg-[hsl(theme(colors.malibu.50)_/_0.1)] text-[hsl(theme(colors.malibu.50))] dark:bg-[hsl(theme(colors.malibu.50)_/_0.24)]",
  yellow:
    "bg-[hsl(theme(colors.yellow.50)_/_0.1)] text-[hsl(theme(colors.yellow.50))] dark:bg-[hsl(theme(colors.yellow.50)_/_0.24)]",
  purple:
    "bg-[hsl(theme(colors.purple.50)_/_0.1)] text-[hsl(theme(colors.purple.50))] dark:bg-[hsl(theme(colors.purple.50)_/_0.24)]",
  lilac:
    "bg-[hsl(theme(colors.lilac.50)_/_0.1)] text-[hsl(theme(colors.lilac.50))] dark:bg-[hsl(theme(colors.lilac.50)_/_0.24)]",
  barbie:
    "bg-[hsl(theme(colors.barbie.50)_/_0.1)] text-[hsl(theme(colors.barbie.50))] dark:bg-[hsl(theme(colors.barbie.50)_/_0.24)]",
  smoke:
    "bg-[hsl(theme(colors.smoke.50)_/_0.1)] text-[hsl(theme(colors.smoke.50))] dark:bg-[hsl(theme(colors.smoke.50)_/_0.24)]",
  army: "bg-[hsl(theme(colors.army.50)_/_0.1)] text-[hsl(theme(colors.army.50))] dark:bg-[hsl(theme(colors.army.50)_/_0.24)]",
  flubber:
    "bg-[hsl(theme(colors.flubber.50)_/_0.1)] text-[hsl(theme(colors.flubber.50))] dark:bg-[hsl(theme(colors.flubber.50)_/_0.24)]",
  indigo:
    "bg-[hsl(theme(colors.indigo.50)_/_0.1)] text-[hsl(theme(colors.indigo.50))] dark:bg-[hsl(theme(colors.indigo.50)_/_0.24)]",
  camel:
    "bg-[hsl(theme(colors.camel.50)_/_0.1)] text-[hsl(theme(colors.camel.50))] dark:bg-[hsl(theme(colors.camel.50)_/_0.24)]",
}

/**
 * A hex as the `r g b` channels those `rgb(… / …)` classes take — `#4F46E5` →
 * `"79 70 229"`. `#RGB` expands the way CSS expands it; anything else is
 * `undefined`, which is what makes an unusable colour fall back to the plain
 * glyph instead of painting the tile black.
 */
const hexChannels = (hex: string): string | undefined => {
  const digits = hex.slice(1)
  const full =
    digits.length === 3
      ? digits
          .split("")
          .map((digit) => digit + digit)
          .join("")
      : digits
  if (!/^[0-9a-f]{6}$/i.test(full)) return undefined
  const value = parseInt(full, 16)
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`
}

/**
 * The custom-hex tint. The COLOUR comes in as a CSS variable and the classes
 * stay literal, which is what keeps the two theme steps working: an inline
 * style cannot carry a `dark:` variant, and a Tailwind class cannot carry a
 * value that is only known at runtime. The variable is the seam between them.
 */
const LIST_ICON_TINT_CUSTOM = cn(
  "bg-[rgb(var(--list-icon-tint)_/_0.1)] text-[rgb(var(--list-icon-tint))]",
  "dark:bg-[rgb(var(--list-icon-tint)_/_0.24)]"
)

/** How a glyph paints itself: a palette class, or the variable + its classes. */
const listIconTint = (
  color: ListIconColor
): { className: string; style?: CSSProperties } | undefined => {
  if (!color.startsWith("#"))
    return { className: LIST_ICON_TINT[color as ListIconPaletteColor] }

  const channels = hexChannels(color)
  return channels
    ? {
        className: LIST_ICON_TINT_CUSTOM,
        style: { "--list-icon-tint": channels } as CSSProperties,
      }
    : undefined
}

/** Every glyph size a `list` row draws at — see {@link listGlyphSize}. */
type ListGlyphSize = "sm" | "md" | "lg"

/** The same box `F0AvatarIcon` draws, so a tinted row lines up with a plain one. */
const LIST_ICON_SIZE = {
  sm: "size-6 rounded-sm",
  md: "size-8 rounded",
  lg: "size-10 rounded-md",
} satisfies Record<ListGlyphSize, string>

/**
 * A `list` row's icon glyph WITH A TINT — the Home kit's own, because
 * `F0AvatarIcon` is deliberately neutral (a white tile with a border) and
 * colouring it is a Home decision, not a design-system one. Without a `color`
 * a row draws the plain `F0AvatarIcon` instead; this is the same box either way.
 */
const ListIconGlyph = ({
  icon,
  tint,
  size,
}: {
  icon: IconType
  tint: NonNullable<ReturnType<typeof listIconTint>>
  size: ListGlyphSize
}) => (
  <div
    className={cn(
      "flex aspect-square items-center justify-center",
      LIST_ICON_SIZE[size],
      tint.className
    )}
    style={tint.style}
  >
    {/* No `color`: F0Icon defaults to `currentColor`, which the tile's own
        `text-` class has already set to the hue. */}
    <F0Icon icon={icon} size={size} />
  </div>
)

/**
 * What every row draws on its RIGHT: a counter, one avatar (e.g. the sender),
 * or a compact strip of avatars with an optional `remainingCount`.
 */
export type ListRightKind =
  | "counter"
  | AvatarVariant["type"]
  | `${F0AvatarListProps["type"]}-list`

/**
 * A `list` slot's SCHEMA: declared once for the whole slot, it decides what
 * every row looks like — the rows are CONSISTENT by construction, and the item
 * type follows from it (see {@link ListItem}). Sizing is prescriptive, not
 * configurable: two text lines (a required `description`) draw an `md` glyph,
 * one line draws `sm`.
 */
export interface ListSchema {
  /** The one left treatment every row draws. Omit for plain text rows. */
  left?: ListLeftKind
  /** The one right treatment every row draws. Omit for none. */
  right?: ListRightKind
  /**
   * The `right` treatment is ALLOWED but not demanded: rows that carry its data
   * draw it and the rest trail nothing — a feed where only some items came from
   * a person. Without this every row must supply it, which is what keeps an
   * ordinary list even.
   */
  rightOptional?: boolean
  /** Every row carries an inline subtitle (on the title's line, after a dot). */
  subtitleRequired?: boolean
  /**
   * An inline subtitle is ALLOWED but not demanded: some rows carry one and
   * others don't — a list where only the late items say how late they are.
   * Unlike a second line this changes no geometry (the subtitle shares the
   * title's line), so such a list draws exactly like an even one.
   *
   * `subtitleRequired` wins when both are set: demanding it already allows it.
   */
  subtitleOptional?: boolean
  /** Every row carries a second line — this is what makes rows two-line. */
  descriptionRequired?: boolean
  /**
   * A second line is ALLOWED but not demanded: some rows carry a `description`
   * and others don't — a feed where only a few items have a due date or a
   * sender. The list is still a two-line list (the glyphs stay `md`, so the
   * column of them lines up); the rows without one are simply shorter.
   *
   * `descriptionRequired` wins when both are set: demanding it already allows it.
   *
   * Such a list does NOT auto-compact past {@link LIST_COMPACT_AFTER} rows —
   * see {@link listCompacts}. `compact: true` still forces it.
   */
  descriptionOptional?: boolean
  /**
   * `"link"` rows each carry an `href` and render as REAL anchors (role
   * `link`, routed through the app's `LinkProvider`) — never an onClick;
   * that's the only click behavior rows have. Omit for inert rows.
   * Same-tab for paths, `#` fragments and this host under any scheme;
   * `target="_blank"` only for ANOTHER host (see `isExternalHref`).
   */
  clickBehavior?: "link"
  /**
   * How many rows show before the rest fold behind a "View more (n)" button at
   * the list's bottom (which turns into "View less" once expanded). Omit to
   * always show every row.
   */
  maxVisibleItems?: number
  /**
   * Forces the COMPACT presentation at any count: every row's `description`
   * folds into a tooltip on the row and the glyphs draw `sm`. Without it,
   * lists compact on their own past `LIST_COMPACT_AFTER` visible rows.
   */
  compact?: boolean
}

type ListLeftData<L> = L extends "module"
  ? { module: ModuleId }
  : L extends "alert"
    ? { alert: AlertType }
    : // The icon glyph takes a `color` no other left kind does — the rest carry
      // their own identity (a face, a flag, a module's brand), an icon does not.
      L extends "icon"
      ? { avatar: AvatarData<"icon"> & { color?: ListIconColor } }
      : L extends AvatarVariant["type"]
        ? { avatar: AvatarData<L> }
        : object

/** The row data a schema field demands, or merely allows under `rightOptional`. */
type Demanded<T, Optional> = Optional extends true ? Partial<T> : T

type ListRightData<R, Optional> = R extends "counter"
  ? Demanded<{ count: number }, Optional>
  : R extends `${infer T extends F0AvatarListProps["type"]}-list`
    ? Demanded<{ avatars: Array<AvatarData<T>> }, Optional> & {
        remainingCount?: number
      }
    : R extends AvatarVariant["type"]
      ? Demanded<{ rightAvatar: AvatarData<R> }, Optional>
      : object

type ListClickData<C> = C extends "link" ? { href: string } : object

/**
 * What a row may say ABOUT its subtitle — offered by every schema that declares
 * a subtitle at all, required by none of them.
 */
type SubtitleTone = {
  /**
   * Draws THIS row's subtitle critical instead of muted — the row is overdue,
   * rejected, over budget.
   *
   * Per ROW rather than per schema, like `unread` and `actions`: what has gone
   * wrong is a state of the row's own data, so one list holds rows that say so
   * beside rows that have nothing to report. The title reads the same either
   * way — the subtitle is what carries the news.
   */
  subtitleCritical?: boolean
}

/**
 * A row's SECOND LINE, in either of the two forms it may take.
 *
 * One string with `descriptionCritical` colours the whole line; a list of
 * {@link DescriptionPart}s colours each fact on it separately. The two are
 * mutually exclusive on purpose — parts already carry their own `critical`, so
 * a row that passes both is saying the same thing twice and meaning different
 * things by it.
 *
 * Whichever form, the tone is per ROW rather than per schema, for the same
 * reason `subtitleCritical` is: what has gone wrong is a state of the row's
 * own data, so one list holds rows that say so beside rows that have nothing
 * to report.
 *
 * Both forms go untinted in a COMPACT list, where the second line has folded
 * into the row's tooltip and there is nothing left to colour — see
 * {@link listCompacts}.
 */
type DescribedRow =
  | { description: string; descriptionCritical?: boolean }
  | { description: DescriptionPart[]; descriptionCritical?: never }

type ListTextData<S extends ListSchema> = {
  title: string
} & (S["subtitleRequired"] extends true
  ? { subtitle: string } & SubtitleTone
  : S["subtitleOptional"] extends true
    ? { subtitle?: string } & SubtitleTone
    : { subtitle?: never; subtitleCritical?: never }) &
  (S["descriptionRequired"] extends true
    ? DescribedRow
    : S["descriptionOptional"] extends true
      ? DescribedRow | { description?: undefined; descriptionCritical?: never }
      : { description?: never; descriptionCritical?: never })

/**
 * One HOVER ACTION on a `list` row: an icon button over the row's right edge
 * that acts on that row alone — "Clock out", "Dismiss". Per ROW rather than per
 * schema, because unlike everything else about a row what you can do to it is
 * genuinely its own: a feed mixes items you can dismiss with items you can't.
 */
export type ListRowAction = HomeListItemAction

/** One row of a `list` slot — its shape FOLLOWS from the slot's schema. */
export type ListItem<S extends ListSchema = ListSchema> = {
  id: string | number
  /** An accent dot on the left glyph — unseen/pending. */
  unread?: boolean
  /**
   * What can be DONE to this row, revealed on hover (and on focus, so they are
   * reachable by keyboard) behind a fade over whatever the row trails. Keep it
   * to two: the strip covers the row's right-hand side while it shows.
   */
  actions?: ListRowAction[]
} & ListTextData<S> &
  ListLeftData<S["left"]> &
  ListRightData<S["right"], S["rightOptional"]> &
  ListClickData<S["clickBehavior"]>

/** `list` params: the schema, then items shaped by it. Build with {@link listSlot}. */
export interface ListParams<S extends ListSchema = ListSchema> {
  schema: S
  items: Array<ListItem<S>>
}

/**
 * Past this many rows a list auto-compacts: every row's second line folds into
 * a tooltip on the row, and the glyphs drop to `sm`.
 */
export const LIST_COMPACT_AFTER = 6

/**
 * Whether a list draws itself compact: asked for, or long enough to have earned
 * it.
 *
 * Auto-compacting tames a long column of UNIFORMLY two-line rows — that is the
 * wall it was written for. A list whose second line is OPTIONAL is not that
 * column (most of its rows are already one line, and folding the few that
 * aren't would hide the only thing distinguishing them), so it compacts only
 * when the schema asks it to.
 */
const listCompacts = (schema: ListSchema, visibleRows: number): boolean =>
  Boolean(schema.compact) ||
  (!schema.descriptionOptional && visibleRows > LIST_COMPACT_AFTER)

/** `event-list` params: f0 calendar-event rows (color band + date avatars). */
export interface EventListParams {
  events: CalendarEventProps[]
  showAllItems?: boolean
}

/** One slot of a widget: a visualization tag + its params (opaque to the layout). */
export interface HomeWidgetSlot {
  visualization: string
  params: unknown
  /**
   * How many items this slot expects to hold — the number of PLACEHOLDER items
   * its skeleton draws while the widget is `loading`, so the loading card is
   * about as tall as the one that replaces it. Defaults to
   * {@link DEFAULT_EXPECTED_ITEMS_COUNT}.
   */
  expectedItemsCount?: number
}

/** What a slot carries beyond its params. Taken by both slot builders. */
export type SlotOptions = Pick<HomeWidgetSlot, "expectedItemsCount">

/** The built-in slot vocabulary: each visualization and its params shape. */
export interface HomeSlotParamsMap {
  "event-list": EventListParams
  indicators: IndicatorsListProps
}

/**
 * Builds a slot with its params CHECKED against its visualization.
 * `HomeWidgetSlot`'s `params` is `unknown` (bespoke slots need it to be), so a
 * plain `{ visualization, params }` literal gets no checking — use this for
 * the built-in vocabulary (and {@link listSlot} for `list` slots), keeping
 * literals for bespoke visualizations.
 */
export const homeSlot = <V extends keyof HomeSlotParamsMap>(
  visualization: V,
  params: HomeSlotParamsMap[V],
  options?: SlotOptions
): HomeWidgetSlot => ({ visualization, params, ...options })

/**
 * Builds a `list` slot: the schema is declared once, and the items' shape is
 * CHECKED against it — a `left: "person"` slot only takes person data, a
 * `clickBehavior: "link"` slot demands an `href` on every row.
 */
export const listSlot = <const S extends ListSchema>(
  schema: S,
  items: Array<ListItem<S>>,
  options?: SlotOptions
): HomeWidgetSlot => ({
  visualization: "list",
  params: { schema, items },
  ...options,
})

/**
 * The `Widget` chrome a Home widget may carry beyond its header, passed straight
 * through to the frame.
 *
 * `alert` and `status` are EXCLUSIVE — `Widget` throws when given both — so the
 * type says so rather than leaving it to blow up at runtime.
 */
export type HomeWidgetChrome = Pick<
  WidgetProps,
  "action" | "summaries" | "headerControls"
> & {
  /**
   * THE CARD'S OWN BUTTONS, in the header's top-right — as DATA, so a host that
   * builds its widgets as data ("Write post", pointing at a route) can put one
   * there without handing over a React node.
   *
   * `F0ButtonProps`, the same shape `action` takes, so a button can carry an
   * `href` and be a real link. Drawn `ghost`/`sm` unless they say otherwise:
   * this row is the TITLE's, and a filled button beside a title reads as the
   * card's subject rather than as something you press.
   *
   * Keep it to one or two. What the card can do that needs no button belongs in
   * `actions`, the overflow menu.
   */
  headerActions?: F0ButtonProps[]
  /**
   * WHAT THE CARD IS SHOWING, as a select in the same row — a scope switcher, as
   * data. See {@link WidgetHeaderSelect}: `SlotWidget` keeps the choice and
   * hands it to the slots as `ctx.selection`, so a widget declared as data can
   * still be switched without its host holding the value.
   */
  headerSelect?: WidgetHeaderSelect
} & (
    | { alert?: WidgetProps["alert"]; status?: never }
    | { status?: WidgetProps["status"]; alert?: never }
  )

/**
 * A SELECT IN THE WIDGET'S HEADER: which of several things the card is showing.
 *
 * The value lives in `SlotWidget`, not in the host — that is the point of it.
 * A host that builds its widgets as plain data has nowhere to keep a live
 * choice: params persist (and turn a switcher into a saved setting), and page
 * state means the page knowing about one particular widget. So the card keeps
 * it, hands it down to its slots (`ctx.selection`), and tells the host through
 * `onChange` if it wants to know.
 *
 * It is therefore a SESSION choice: the card starts at `value` every time it
 * mounts. A choice that should outlive the visit is a param, not this.
 */
export interface WidgetHeaderSelect {
  /** What the reader can switch between. The first one is the default. */
  options: Array<{ value: string; label: string; icon?: IconType }>
  /** Which one the card starts on. Defaults to the first option. */
  value?: string
  /** The trigger names the selection, so this is what says what KIND it is. */
  tooltip?: string
  /** Told when the reader picks another one. The card switches either way. */
  onChange?: (value: string) => void
}

/* ---------------------------- configurable widgets ---------------------------- */

/**
 * What a user has CONFIGURED about a widget — the values of the fields its
 * `paramsSchema` declares, keyed by field name. Dates arrive as `Date`s, a
 * multi-select as an array: whatever the schema's zod types say.
 */
export type WidgetParams = Record<string, unknown>

/**
 * A widget's params SCHEMA: an F0Form schema, so the fields are declared once —
 * in zod, with their f0 field config — and F0Form draws and validates them.
 *
 * That buys the whole vocabulary rather than a bespoke one: `z.string()`,
 * `z.number()`, `z.date()` (`fieldType: "datetime"` for a time as well),
 * `z.enum()`, and a select fed by a DATASOURCE (`source` + `mapOptions`, with
 * `multiple` for many) — `z.array()` for the multi-select's value. A field is
 * REQUIRED unless its zod type is `.optional()`, so "the user must set this"
 * needs nothing new either.
 *
 * ```tsx
 * paramsSchema: z.object({
 *   since: f0FormField(z.date(), { label: "Since" }),
 *   team: f0FormField(z.array(z.string()), {
 *     label: "Teams",
 *     source: teamsDataSource,
 *     mapOptions: (team) => ({ value: team.id, label: team.name }),
 *     multiple: true,
 *   }),
 * })
 * ```
 */
export type WidgetParamsSchema = F0FormSchema

/**
 * A widget property that may be COMPUTED FROM ITS PARAMS instead of fixed — the
 * title that says which team it is showing, the info that explains the period
 * you picked. It gets the params the widget has now (`{}` when it has none), so
 * the same function serves a widget before and after it is configured.
 */
export type FromWidgetParams<T> = T | ((params: WidgetParams) => T)

/**
 * A params-driven value, TYPED against the widget's own schema — how to write a
 * `title` or an `info` that reads its params without casting at every access:
 *
 * ```tsx
 * title: fromParams(HOURS_PARAMS, (p) => `Hours · ${p.period ?? "this week"}`)
 * ```
 *
 * The params arrive `Partial`, and that is not a formality: a widget exists
 * before it is configured (the moment it is added, or while its dialog is open
 * on an incomplete form), so every field has to be treated as possibly unset.
 * The schema argument is there only to carry the type.
 */
export const fromParams =
  <S extends WidgetParamsSchema, T>(
    _schema: S,
    compute: (params: Partial<z.infer<S>>) => T
  ) =>
  (params: WidgetParams): T =>
    compute(params as Partial<z.infer<S>>)

/**
 * A Home widget's header. The frame's, except that the two things a user reads
 * to know WHAT they are looking at may follow the params they set.
 */
export type HomeWidgetHeader = Omit<
  NonNullable<WidgetProps["header"]>,
  "title" | "info"
> & {
  title?: FromWidgetParams<string>
  /**
   * The `i` beside the title: hovering it explains the widget. Takes the params
   * too, so it can say what the numbers actually cover.
   */
  info?: FromWidgetParams<string>
}

/** Resolves a header's params-driven parts against the params in hand. */
export const resolveWidgetHeader = (
  header: HomeWidgetHeader | undefined,
  params: WidgetParams = {}
): WidgetProps["header"] => {
  if (!header) return undefined
  const { title, info, ...rest } = header
  const from = <T,>(value: FromWidgetParams<T> | undefined) =>
    typeof value === "function"
      ? (value as (params: WidgetParams) => T)(params)
      : value
  return { ...rest, title: from(title), info: from(info) }
}

/**
 * A widget's title as TEXT — resolved against its own params, and falling back
 * to its id so there is always something to name it by (an aria-label on the
 * collapsed rail's glyph, a row in the catalog).
 */
export const widgetTitle = (widget: {
  id: string
  header?: HomeWidgetHeader
  params?: WidgetParams
}): string =>
  resolveWidgetHeader(widget.header, widget.params)?.title ?? widget.id

/**
 * Whether every REQUIRED param of a schema is set — what "this widget can't be
 * shown until you configure it" comes down to. Use it to send a freshly added
 * widget straight into its params dialog.
 */
export const widgetParamsAreComplete = (
  schema: WidgetParamsSchema | undefined,
  params: WidgetParams | undefined
): boolean => (schema ? schema.safeParse(params ?? {}).success : true)

/**
 * The colours a rail action's chip can take, by what the state MEANS rather than
 * by hue: the same five a tag or a banner picks from, so a red pill in the rail
 * is red for the same reason a red tag is.
 */
export const railActionTones = [
  "neutral",
  "accent",
  "critical",
  "warning",
  "promote",
  "positive",
] as const

export type RailActionTone = (typeof railActionTones)[number]

/**
 * A DIRECT ACTION on a widget's collapsed glyph: the one thing the widget can be
 * told to do without being opened — resume a paused timer, clock out, join the
 * call that starts now.
 *
 * The glyph BECOMES the button, because 40px is one control's worth of room. So
 * the widget is still one hover away (hovering or focusing the glyph floats it
 * over the feed, as any glyph does) and the CLICK is the action's rather than the
 * panel's.
 *
 * Only the COLLAPSED rail draws it. Expanded, the card's own footer button
 * (`action`) is where a widget's call to action belongs, and stacked (below `md`)
 * there is no glyph to put it on.
 */
export type HomeWidgetRailAction = {
  /** The action's own glyph — `Play` to resume, `Pause` for a running timer. */
  icon: IconType
  /**
   * What it does, in the imperative ("Resume"): the glyph's tooltip, and half of
   * its accessible name — the widget's title is the other half, since "Resume"
   * alone says nothing about which of the strip's glyphs it is.
   */
  label: string
  onClick: () => void
  /**
   * WHAT COLOUR THE STATE IS. One tone paints the whole chip — the pill behind
   * the reading and the button at the end of it — because they are one object,
   * and two colours picked separately is how you end up with a red button on an
   * amber pill.
   *
   * - `"neutral"` (the default) — the dark slab, with the accent button on it.
   *   Nothing about the state is remarkable; it is simply running.
   * - `"accent"`, `"critical"`, `"warning"`, `"promote"`, `"positive"` — the pill
   *   takes that colour and the button becomes a plain chip carrying it in its
   *   icon, so the two never fight over the same hue.
   *
   * Without a `text` there is no pill, and the tone paints the button itself.
   *
   * PICK THE ONE THE WIDGET ALREADY USES. A rail action stands in for a state the
   * card is also showing, and the semantic tones are the same values that state
   * is drawn with elsewhere — a clock-in tile pulses `--positive-50` while it
   * runs and `--promote-50` on a break, which is exactly `"positive"` and
   * `"promote"` here. Two names for one state is how a glyph ends up a different
   * green from the card it came out of.
   */
  tone?: RailActionTone
  /**
   * A READING to put beside the button — a clock's running total or the break
   * you are on today, but any short string the state can be summed up in. The
   * glyph grows into a dark PILL to hold it, overflowing its 40px column
   * leftwards, and the whole strip right-aligns behind it.
   *
   * It is only drawn while the widget is STOWED. Hovering floats the card, which
   * says the same thing in full context, so the pill gives its width back and
   * leaves the button — the one part of it you can act on.
   *
   * Keep it SHORT — "7:12", "0:20", "3 left". This is a glyph, not a status bar,
   * and anything that has to be read twice does not belong on one.
   */
  text?: string
  /**
   * The reading is COUNTING: the separators in `text` blink once a second, the
   * way a clock does, so a stowed timer is visibly running rather than merely
   * displayed. Reduced motion holds them lit, and a `text` with nothing to
   * separate simply stands still.
   */
  ticking?: boolean
  /**
   * THE STATE IS ASKING TO BE ACTED ON — a timer left on a break, a shift you
   * never clocked out of. The glyph alternates once a second between the
   * widget's own icon and the action's, so the strip can say which module wants
   * something AND what it wants without growing a second control.
   *
   * It settles on the action's icon while the widget is floating, so what you
   * click is never the face that happened to be up. Reduced motion is honoured:
   * the glyph simply stays the button.
   */
  flashing?: boolean
}

/** A widget as handed to the layout: header + an ordered list of slots. */
export type HomeWidgetItem = HomeWidgetChrome & {
  id: string
  header?: HomeWidgetHeader
  /**
   * THIS WIDGET'S OWN menu items — "Mark all as read", "Export as CSV", whatever
   * it can do that no other widget can. They go in the widget's three-dots menu,
   * FIRST: the column adds what every widget carries (what its info means, its
   * params, removing it) after them, and removing it sits behind a separator.
   *
   * Ordinary `DropdownItem`s, so they take an `icon`, a `description`, `critical`
   * for a destructive one, `disabled`, or a `type: "separator"` of your own to
   * group them. A `locked` widget still shows them.
   */
  actions?: WidgetProps["actions"]
  /**
   * The widget is CONFIGURABLE: these are the params the user may set, as an
   * F0Form schema. Declaring it — together with the layout's
   * `onChangeWidgetParams` — is what puts "Edit params" in the widget's menu.
   */
  paramsSchema?: WidgetParamsSchema
  /**
   * The params it is configured with right now. They drive whatever the widget
   * derives from them (its `title`, its `info`) and are the dialog's starting
   * point; rebuilding the SLOTS for new params is the app's own job, since only
   * it knows where their data comes from.
   */
  params?: WidgetParams
  fullHeight?: boolean
  /**
   * The widget's catalog glyph — shown for it in the collapsed rail and in the
   * "Add widget" picker, so the strip can never drift from the catalog.
   */
  icon?: IconType
  /**
   * The one thing the widget can do FROM THE COLLAPSED RAIL, drawn on its glyph
   * instead of the catalog `icon`. See `HomeWidgetRailAction`.
   */
  railAction?: HomeWidgetRailAction
  /**
   * PINNED: the widget stays put. It offers no "Remove widget" in its menu, it
   * cannot be dragged, and no other widget can displace it — for widgets a user
   * must always have, like Clock in.
   */
  locked?: boolean
  /**
   * Something new since the user last looked (unread messages, a pending
   * request). The collapsed rail badges the widget's glyph with an accent dot.
   */
  hasUpdates?: boolean
  slots: HomeWidgetSlot[]
  /**
   * The widget is waiting on its data: every slot draws its skeleton instead of
   * its content (see `SlotWidget`'s `loading`).
   */
  loading?: boolean
}

/**
 * The `Widget` chrome an item carries, ready to spread onto `SlotWidget`.
 *
 * `alert` and `status` are mutually exclusive on the frame, and which one an
 * item means is decided by whether it declares an `alert` at all — so the two
 * are never handed over together.
 *
 * Public because drawing a `HomeWidgetItem` yourself is public (`SlotWidget`),
 * and this is the one part of that spread with a rule in it.
 */
export const widgetChrome = (widget: HomeWidgetItem): HomeWidgetChrome => {
  // EVERY chrome field, or the ones left out are dropped on the way to the card
  // — which is how a widget can declare a header control and see nothing drawn.
  const chrome = {
    action: widget.action,
    summaries: widget.summaries,
    headerControls: widget.headerControls,
    headerActions: widget.headerActions,
    headerSelect: widget.headerSelect,
  }

  return (
    "alert" in widget && widget.alert !== undefined
      ? { ...chrome, alert: widget.alert }
      : {
          ...chrome,
          status: "status" in widget ? widget.status : undefined,
        }
  ) as HomeWidgetChrome
}

/**
 * Row-based slots cancel their rows' own padding so the rows sit flush with the
 * widget's content box — every list-like slot carries this. `indicators`
 * doesn't: it isn't rows and has no padding to cancel.
 */
export const SLOT_ROW_BLEED = "-m-2"

/**
 * The bleed a row-based slot applies to itself: `SLOT_ROW_BLEED` with its
 * VERTICAL halves put back — `mt-0` always (the widget header already spaces
 * the first slot, and a divider spaces the rest), and `mb-0` unless this is the
 * widget's last slot, where the bleed should reach the card's bottom edge.
 */
export const slotRowBleed = (ctx: HomeRenderCtx) =>
  cn(SLOT_ROW_BLEED, "mt-0", !ctx.isLastSlot && "mb-0")

/**
 * WHERE "View more" SITS. Not where the rows above it start: a row-based slot
 * bleeds 8px past the card's content box (`SLOT_ROW_BLEED`), and a button left
 * in that bleed hangs its whole filled rectangle 8px to the left of the
 * widget's TITLE — visible as a rectangle that overhangs the card's text.
 *
 * It sits exactly where the frame's own footer button sits instead, because it
 * is the same button one slot higher (`SlotWidget`'s footer class): 8px back to
 * the content box, then 2px out again — the nudge that makes a filled or
 * bordered box read as aligned with the text above it rather than measuring
 * 2px shy of it.
 */
export const LIST_MORE_BUTTON_CLASS = "ml-1.5 mt-1 self-start"

/**
 * The same edge on the OTHER axis, for when the button is the last thing on the
 * card. The bleed a row-based slot keeps at its bottom is there so ROWS reach
 * the card's bottom edge; the button is not a row, so left in that bleed it
 * ends up 8px from the card's border while measuring 14px from its left — the
 * corner reads as cropped. `mb-1.5` gives it the left edge's exact treatment
 * (bleed cancelled, 2px nudge kept), so the gap below it equals the gap beside.
 *
 * Only when there is nothing after it: with a footer under the slots the bleed
 * is already what the footer's own `mt-2` buys back, and padding here would
 * push that footer 6px further down instead.
 */
export const listMoreButtonClass = (ctx: HomeRenderCtx) =>
  cn(LIST_MORE_BUTTON_CLASS, ctx.isLastSlot && !ctx.hasFooter && "mb-1.5")

/** The gap between rows of the `event-list` slot. */
export const EVENT_LIST_GAP = "gap-2"

/** A row as the `list` renderer sees it — the schema already vouched for it. */
type ListRow = {
  id: string | number
  title: string
  subtitle?: string
  subtitleCritical?: boolean
  description?: string | DescriptionPart[]
  descriptionCritical?: boolean
  unread?: boolean
  avatar?: object & { icon?: IconType; color?: ListIconColor }
  module?: ModuleId
  alert?: AlertType
  count?: number
  rightAvatar?: object
  avatars?: AvatarData<F0AvatarListProps["type"]>[]
  remainingCount?: number
  href?: string
  actions?: ListRowAction[]
}

/** The left props a row gets from its schema's `left` kind. */
const listLeft = (
  left: ListLeftKind | undefined,
  row: ListRow,
  avatarSize: AvatarSize & ListGlyphSize
) => {
  if (left === "module" && row.module)
    return { left: <F0AvatarModule module={row.module} size={avatarSize} /> }
  if (left === "alert" && row.alert)
    return { left: <F0AvatarAlert type={row.alert} size={avatarSize} /> }
  // A TINTED icon is the Home kit's own glyph, so it goes in as a node. An icon
  // row without a `color` — or with one that cannot be parsed — falls through to
  // the plain `F0AvatarIcon` below.
  if (left === "icon" && row.avatar?.icon && row.avatar.color) {
    const tint = listIconTint(row.avatar.color)
    if (tint)
      return {
        left: (
          <ListIconGlyph icon={row.avatar.icon} tint={tint} size={avatarSize} />
        ),
      }
  }
  if (left && row.avatar)
    return {
      avatar: { type: left, ...row.avatar } as AvatarVariant,
      avatarSize,
    }
  return {}
}

/**
 * The right node a row gets from its schema's `right` kind. The faces are sized
 * from the same step as the left glyph but one down: they are WHO a row is
 * about, which is secondary to what it is, and a strip of them matching the
 * leading glyph turns the row into two competing anchors.
 */
const listRight = (
  right: ListRightKind | undefined,
  row: ListRow,
  avatarSize: "sm" | "md"
): ReactNode => {
  if (!right) return undefined
  if (right === "counter")
    return row.count != null ? <Counter value={row.count} /> : undefined
  if (right.endsWith("-list"))
    return row.avatars && row.avatars.length > 0 ? (
      <F0AvatarList
        type={right.slice(0, -"-list".length) as F0AvatarListProps["type"]}
        size={avatarSize}
        // Explicit, because it is the prop that actually produces the compact
        // strip this slot documents. The deprecated `layout="compact"` that
        // used to sit here was inert, so the strip was really sized by the
        // rail's width — which in a narrow rail collapsed it to a bare `+N`.
        max={3}
        avatars={row.avatars as never}
        remainingCount={row.remainingCount}
      />
    ) : undefined
  return row.rightAvatar ? (
    <F0Avatar
      avatar={{ type: right, ...row.rightAvatar } as AvatarVariant}
      size={avatarSize}
    />
  ) : undefined
}

/**
 * How big a row's LEADING glyph draws. Prescriptive, from two things the row
 * cannot argue with:
 *
 * - its own SHAPE — two-line rows carry a bigger glyph than one-line ones, so
 *   the glyph is about as tall as the text beside it either way;
 * - the CARD's width — in the Home's 396px rail a 40px tile beside a truncated
 *   title is the loudest thing in the widget, and in the main column the same
 *   row at rail size reads as a list that forgot to grow. Past the frame's wide
 *   threshold every step moves up one (see `useWidgetIsWide`).
 *
 * Compact rows are one-line by definition, so they take the one-line step.
 */
const listGlyphSize = (twoLine: boolean, isWide: boolean): ListGlyphSize =>
  isWide ? (twoLine ? "lg" : "md") : twoLine ? "md" : "sm"

/**
 * The `list` slot's body. A component rather than a plain render function
 * because "View more" is state: whether the rows past `maxVisibleItems` show.
 *
 * Sizing is prescriptive: two-line rows (required description) draw md glyphs,
 * one-line rows sm. Past LIST_COMPACT_AFTER VISIBLE rows the list
 * auto-compacts — the second line folds into a tooltip and the rows become
 * one-line (so sm).
 */
function ListSlot({ params, ctx }: { params: ListParams; ctx: HomeRenderCtx }) {
  const { schema, items } = params
  const allRows = items as ListRow[]
  const [expanded, setExpanded] = useState(false)
  // ASKED, not measured: the slot is built before the frame renders but drawn
  // inside it, so the card it landed in is the one thing it can only learn from
  // context.
  // `undefined` = no card at all (a list drawn frameless, e.g. in a dialog):
  // that has a wide card's room, so it must not take the narrow card compromise.
  const isWide = useWidgetIsWideOrUnset() !== false

  const max = schema.maxVisibleItems
  const overflows = max != null && allRows.length > max
  const rows = overflows && !expanded ? allRows.slice(0, max) : allRows
  // "View more" can reveal thirty rows at once, and thirty of them animating in
  // is a shove rather than a change — past a few, the list is simply new.
  const isBulkChange = useIsBulkChange(rows.length)

  const compact = listCompacts(schema, rows.length)
  // A list that ALLOWS a second line is a two-line list even where a given row
  // has none: the glyphs keep the two-line step so the column of them lines up
  // down the card.
  const twoLine =
    (Boolean(schema.descriptionRequired) ||
      Boolean(schema.descriptionOptional)) &&
    !compact
  const avatarSize = listGlyphSize(twoLine, isWide)
  const rightAvatarSize = isWide ? "md" : "sm"

  return (
    <div className={cn(slotRowBleed(ctx), "flex flex-col")}>
      {/* Keyed by the row's OWN id, so a row that goes away is the one that
          animates out and the rest close the gap. */}
      <HomeSlotItems>
        {rows.map(({ href, description, ...row }) => {
          // A compact row hides its second line and offers it on hover
          // instead — as PLAIN TEXT, all `Tooltip`'s `label` can carry, so a
          // segmented description arrives dot-joined and untinted. Computed
          // rather than checking `description` for truthiness: an empty parts
          // list is a row with nothing to say, and `[]` is truthy.
          const tooltip = compact ? descriptionText(description) : ""
          const node = (
            <HomeListItem
              title={row.title}
              subtitle={row.subtitle}
              subtitleCritical={row.subtitleCritical}
              description={compact ? undefined : description}
              descriptionCritical={row.descriptionCritical}
              unread={row.unread}
              {...listLeft(schema.left, row, avatarSize)}
              right={listRight(schema.right, row, rightAvatarSize)}
              actions={row.actions}
              href={schema.clickBehavior === "link" ? href : undefined}
            />
          )
          return (
            <HomeSlotItem key={row.id} animated={!isBulkChange}>
              {tooltip ? (
                // The hidden second line surfaces on hover. The span is the
                // tooltip's trigger — HomeListItem doesn't forward trigger props.
                <Tooltip label={tooltip}>
                  <span className="block">{node}</span>
                </Tooltip>
              ) : (
                node
              )}
            </HomeSlotItem>
          )
        })}
      </HomeSlotItems>
      {overflows ? (
        <div className={listMoreButtonClass(ctx)}>
          {/* `neutral`, the same button a widget's own call to action is (the
              frame's `action`): "View more" is something you press, and a ghost
              button under a dense list of rows reads as another row. Past the
              width threshold it takes the SAME step every card-sized control
              takes (`WIDE_WIDGET_PX`) — `md`, and `outline` rather than
              `neutral`, exactly like the frame's footer button — so a wide
              card doesn't grow its rows and its footer around a button still
              drawn at rail size. */}
          <F0Button
            variant={isWide ? "outline" : "neutral"}
            size={isWide ? "md" : "sm"}
            label={
              expanded ? "View less" : `View more (${allRows.length - max})`
            }
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      ) : null}
    </div>
  )
}

/**
 * The `event-list` slot's body. A component rather than a plain render function
 * for the same reason `ListSlot` is one: the churn animation asks whether this
 * render is a bulk replacement, and that is a hook.
 *
 * The events are drawn here rather than through `CalendarEventList` because the
 * churn needs its own wrapper AROUND each event (`HomeSlotItem`), and that
 * component owns the space between its items — there is nowhere to put one.
 * `EVENT_LIST_GAP` therefore sits on this container, the direct parent of the
 * event items, and matches that component's own 8px default.
 */
function EventListSlot({
  params,
  ctx,
}: {
  params: EventListParams
  ctx: HomeRenderCtx
}) {
  const { events } = params
  const isBulkChange = useIsBulkChange(events.length)

  return (
    <div className={cn(slotRowBleed(ctx), "flex flex-col", EVENT_LIST_GAP)}>
      {/* The same churn the `list` rows get — an event dropping off the widget
          should read as one leaving, not as a redraw. */}
      <HomeSlotItems>
        {events.map((event) => (
          <HomeSlotItem key={event.title} animated={!isBulkChange}>
            <CalendarEvent {...event} />
          </HomeSlotItem>
        ))}
      </HomeSlotItems>
    </div>
  )
}

/* ------------------------------- skeletons ------------------------------- */

/**
 * How many placeholder items a slot draws when it doesn't say (its
 * `expectedItemsCount`). Three: enough to read as a list, short enough that a
 * widget which turns out to hold one item barely jumps.
 */
export const DEFAULT_EXPECTED_ITEMS_COUNT = 3

/**
 * Marks ONE placeholder item, whatever the visualization draws as an item — a
 * list row, an event, an indicator. `expectedItemsCount` of these appear.
 */
export const SLOT_SKELETON_ITEM_TESTID = "slot-skeleton-item"

/**
 * Cycled title widths: a column of identical bars reads as a pattern rather
 * than as items, so the placeholder titles vary the way real ones do.
 */
const SKELETON_TITLE_WIDTHS = ["w-1/2", "w-2/3", "w-2/5", "w-3/5"]

/** A placeholder glyph's box per step — the rounding is the schema's business. */
const SKELETON_GLYPH_SIZE = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
} satisfies Record<ListGlyphSize, string>

const skeletonTitleWidth = (index: number) =>
  SKELETON_TITLE_WIDTHS[index % SKELETON_TITLE_WIDTHS.length]

/**
 * One line of placeholder text: a thin bar centred in the 20px LINE BOX a real
 * line of text occupies. Lines, not bars, are what make a placeholder row as
 * tall as the row that replaces it — so the card fills in without jumping.
 */
const SkeletonLine = ({ className }: { className?: string }) => (
  <div className="flex h-5 items-center">
    <Skeleton className={cn("h-3", className)} />
  </div>
)

/**
 * The `list` slot's placeholder, drawn from the SCHEMA alone — which is static
 * config, so it is known before the items land. It follows the same rules the
 * real list follows: a left glyph only where the schema declares one (round for
 * a person, square for everything else), a trailing block only where it
 * declares a right, and the same prescriptive sizing — two-line rows draw `md`
 * glyphs, one-line rows `sm`.
 */
const ListSlotSkeleton = ({
  params,
  ctx,
}: {
  params: Partial<ListParams>
  ctx: HomeSkeletonCtx
}) => {
  const schema = params.schema ?? {}
  // `undefined` = no card at all (a list drawn frameless, e.g. in a dialog):
  // that has a wide card's room, so it must not take the narrow card compromise.
  const isWide = useWidgetIsWideOrUnset() !== false
  // Rows past `maxVisibleItems` fold behind "View more", so the loaded list
  // never shows more than that — nor should the placeholder.
  const count = Math.max(
    0,
    Math.min(ctx.expectedItemsCount, schema.maxVisibleItems ?? Infinity)
  )
  const compact = listCompacts(schema, count)
  // Same rule the real list follows, so the glyphs are the size they will be.
  const twoLine =
    (Boolean(schema.descriptionRequired) ||
      Boolean(schema.descriptionOptional)) &&
    !compact
  // The SECOND LINE, though, is only drawn where every row is going to have
  // one: with `descriptionOptional` some rows won't, and a placeholder that
  // promises a line each would leave the card taller than what replaces it.
  const twoLinePlaceholder = Boolean(schema.descriptionRequired) && !compact
  // More items than the list will show means the loaded list carries the "View
  // more" button at its bottom — so the placeholder leaves room for it.
  const overflows = ctx.expectedItemsCount > count

  return (
    <div className={cn(slotRowBleed(ctx), "flex flex-col")}>
      {Array.from({ length: count }, (_, index) => (
        // The row's own geometry (see `HomeListItem`): p-2, gap-3, centered.
        <div
          key={index}
          data-testid={SLOT_SKELETON_ITEM_TESTID}
          className="flex w-full items-center gap-3 p-2"
        >
          {schema.left ? (
            <Skeleton
              className={cn(
                "shrink-0",
                // The size the real glyph will be — same rule, same card.
                SKELETON_GLYPH_SIZE[listGlyphSize(twoLine, isWide)],
                schema.left === "person" ? "rounded-full" : "rounded-sm"
              )}
            />
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col">
            <SkeletonLine className={skeletonTitleWidth(index)} />
            {twoLinePlaceholder ? <SkeletonLine className="w-1/4" /> : null}
          </div>
          {schema.right ? (
            <Skeleton className="h-4 w-10 shrink-0 rounded-sm" />
          ) : null}
        </div>
      ))}
      {overflows ? (
        <div className={listMoreButtonClass(ctx)}>
          {/* An `sm` neutral button — what "View more (n)" will be. */}
          <Skeleton className="h-6 w-24 rounded-sm" />
        </div>
      ) : null}
    </div>
  )
}

/** The `event-list` placeholder: the colour band, two lines, the date avatar. */
const EventListSlotSkeleton = ({ ctx }: { ctx: HomeSkeletonCtx }) => (
  <div className={cn(slotRowBleed(ctx), "flex flex-col", EVENT_LIST_GAP)}>
    {Array.from({ length: ctx.expectedItemsCount }, (_, index) => (
      <div
        key={index}
        data-testid={SLOT_SKELETON_ITEM_TESTID}
        className="flex flex-row items-stretch gap-2.5 rounded-sm p-2"
      >
        <Skeleton className="min-h-10 w-1 shrink-0 rounded-2xs" />
        <div className="flex flex-1 flex-col justify-center">
          <SkeletonLine className={skeletonTitleWidth(index)} />
          <SkeletonLine className="w-1/3" />
        </div>
        {/* `F0AvatarDate` is a fixed 40px square. */}
        <Skeleton className="size-10 shrink-0 rounded-md" />
      </div>
    ))}
  </div>
)

/** The `indicators` placeholder: a big number over its label, per indicator. */
const IndicatorsSlotSkeleton = ({ ctx }: { ctx: HomeSkeletonCtx }) => (
  <div className="grid auto-cols-fr grid-flow-col items-end gap-x-3">
    {Array.from({ length: ctx.expectedItemsCount }, (_, index) => (
      <div
        key={index}
        data-testid={SLOT_SKELETON_ITEM_TESTID}
        className="flex flex-col gap-1"
      >
        {/* The big number's own line box, then the label's. */}
        <div className="flex h-8 items-center">
          <Skeleton className="h-6 w-10" />
        </div>
        <SkeletonLine className="w-3/4" />
      </div>
    ))}
  </div>
)

/**
 * What a slot draws while loading when its visualization brings no skeleton of
 * its own — an unregistered one, or a bespoke renderer passed as a bare
 * function. Deliberately shapeless: one bar per expected item.
 */
export const defaultSlotSkeleton: SlotSkeletonRenderer = (_params, ctx) => (
  <div className="flex flex-col gap-2">
    {Array.from({ length: ctx.expectedItemsCount }, (_, index) => (
      <div key={index} data-testid={SLOT_SKELETON_ITEM_TESTID}>
        <Skeleton className={cn("h-6", skeletonTitleWidth(index))} />
      </div>
    ))}
  </div>
)

/**
 * Built-in renderers for the standard visualizations. `list` covers every
 * row-based slot through its schema; `event-list` and `indicators` spread
 * their params onto the matching f0 content component. Bespoke visualizations
 * (e.g. `clock-in`, `carousel`) are intentionally absent — supply them via
 * `slotRenderers`.
 *
 * Each ships its own `skeleton` beside its `render`, so a widget's loading
 * state is drawn by the same thing that draws its content.
 */
export const defaultSlotRenderers: SlotRenderers = {
  list: {
    render: (params, ctx) => (
      <ListSlot params={params as ListParams} ctx={ctx} />
    ),
    skeleton: (params, ctx) => (
      // Partial: a loading `list` carries its schema but not yet its items.
      <ListSlotSkeleton
        params={(params ?? {}) as Partial<ListParams>}
        ctx={ctx}
      />
    ),
  },
  // The events are rendered here rather than through `CalendarEventList`
  // because each one is wrapped for the CHURN (see `EventListSlot`), which asks
  // for a per-item wrapper that component has no way to put in.
  "event-list": {
    render: (params, ctx) => (
      <EventListSlot params={params as EventListParams} ctx={ctx} />
    ),
    skeleton: (_params, ctx) => <EventListSlotSkeleton ctx={ctx} />,
  },
  indicators: {
    render: (params) => <IndicatorsList {...(params as IndicatorsListProps)} />,
    skeleton: (_params, ctx) => <IndicatorsSlotSkeleton ctx={ctx} />,
  },
}
