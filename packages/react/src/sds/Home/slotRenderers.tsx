import { ReactNode, useState } from "react"

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
import { type IconType } from "@/components/F0Icon"
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
import { WidgetProps } from "@/experimental/Widgets/Widget"
import { type F0FormSchema } from "@/patterns/F0Form"

import { HomeListItem } from "./HomeListItem"

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
  /** Every row carries an inline subtitle (on the title's line, after a dot). */
  subtitleRequired?: boolean
  /** Every row carries a second line — this is what makes rows two-line. */
  descriptionRequired?: boolean
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
    : L extends AvatarVariant["type"]
      ? { avatar: AvatarData<L> }
      : object

type ListRightData<R> = R extends "counter"
  ? { count: number }
  : R extends `${infer T extends F0AvatarListProps["type"]}-list`
    ? { avatars: Array<AvatarData<T>>; remainingCount?: number }
    : R extends AvatarVariant["type"]
      ? { rightAvatar: AvatarData<R> }
      : object

type ListClickData<C> = C extends "link" ? { href: string } : object

type ListTextData<S extends ListSchema> = {
  title: string
} & (S["subtitleRequired"] extends true
  ? { subtitle: string }
  : { subtitle?: never }) &
  (S["descriptionRequired"] extends true
    ? { description: string }
    : { description?: never })

/** One row of a `list` slot — its shape FOLLOWS from the slot's schema. */
export type ListItem<S extends ListSchema = ListSchema> = {
  id: string | number
  /** An accent dot on the left glyph — unseen/pending. */
  unread?: boolean
} & ListTextData<S> &
  ListLeftData<S["left"]> &
  ListRightData<S["right"]> &
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
export type HomeWidgetChrome = Pick<WidgetProps, "action" | "summaries"> &
  (
    | { alert?: WidgetProps["alert"]; status?: never }
    | { status?: WidgetProps["status"]; alert?: never }
  )

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

/** The gap between rows of the `event-list` slot. */
export const EVENT_LIST_GAP = "gap-2"

/** A row as the `list` renderer sees it — the schema already vouched for it. */
type ListRow = {
  id: string | number
  title: string
  subtitle?: string
  description?: string
  unread?: boolean
  avatar?: object
  module?: ModuleId
  alert?: AlertType
  count?: number
  rightAvatar?: object
  avatars?: AvatarData<F0AvatarListProps["type"]>[]
  remainingCount?: number
  href?: string
}

/** The left props a row gets from its schema's `left` kind. */
const listLeft = (
  left: ListLeftKind | undefined,
  row: ListRow,
  avatarSize: AvatarSize & ("sm" | "md")
) => {
  if (left === "module" && row.module)
    return { left: <F0AvatarModule module={row.module} size={avatarSize} /> }
  if (left === "alert" && row.alert)
    return { left: <F0AvatarAlert type={row.alert} size={avatarSize} /> }
  if (left && row.avatar)
    return {
      avatar: { type: left, ...row.avatar } as AvatarVariant,
      avatarSize,
    }
  return {}
}

/** The right node a row gets from its schema's `right` kind. */
const listRight = (
  right: ListRightKind | undefined,
  row: ListRow
): ReactNode => {
  if (!right) return undefined
  if (right === "counter")
    return row.count != null ? <Counter value={row.count} /> : undefined
  if (right.endsWith("-list"))
    return row.avatars && row.avatars.length > 0 ? (
      <F0AvatarList
        type={right.slice(0, -"-list".length) as F0AvatarListProps["type"]}
        size="sm"
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
      size="sm"
    />
  ) : undefined
}

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

  const max = schema.maxVisibleItems
  const overflows = max != null && allRows.length > max
  const rows = overflows && !expanded ? allRows.slice(0, max) : allRows

  const compact = Boolean(schema.compact) || rows.length > LIST_COMPACT_AFTER
  const twoLine = Boolean(schema.descriptionRequired) && !compact
  const avatarSize = twoLine ? "md" : "sm"

  return (
    <div className={cn(slotRowBleed(ctx), "flex flex-col")}>
      {rows.map(({ href, description, ...row }) => {
        const node = (
          <HomeListItem
            title={row.title}
            subtitle={row.subtitle}
            description={compact ? undefined : description}
            unread={row.unread}
            {...listLeft(schema.left, row, avatarSize)}
            right={listRight(schema.right, row)}
            href={schema.clickBehavior === "link" ? href : undefined}
          />
        )
        return compact && description ? (
          // The hidden second line surfaces on hover. The span is the
          // tooltip's trigger — HomeListItem doesn't forward trigger props.
          <Tooltip key={row.id} label={description}>
            <span className="block">{node}</span>
          </Tooltip>
        ) : (
          <div key={row.id}>{node}</div>
        )
      })}
      {overflows ? (
        <div className="mt-1 self-start">
          {/* `neutral`, the same button a widget's own call to action is (the
              frame's `action`): "View more" is something you press, and a ghost
              button under a dense list of rows reads as another row. */}
          <F0Button
            variant="neutral"
            size="sm"
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
  // Rows past `maxVisibleItems` fold behind "View more", so the loaded list
  // never shows more than that — nor should the placeholder.
  const count = Math.max(
    0,
    Math.min(ctx.expectedItemsCount, schema.maxVisibleItems ?? Infinity)
  )
  const compact = Boolean(schema.compact) || count > LIST_COMPACT_AFTER
  const twoLine = Boolean(schema.descriptionRequired) && !compact
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
                twoLine ? "size-8" : "size-6",
                schema.left === "person" ? "rounded-full" : "rounded-sm"
              )}
            />
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col">
            <SkeletonLine className={skeletonTitleWidth(index)} />
            {twoLine ? <SkeletonLine className="w-1/4" /> : null}
          </div>
          {schema.right ? (
            <Skeleton className="h-4 w-10 shrink-0 rounded-sm" />
          ) : null}
        </div>
      ))}
      {overflows ? (
        <div className="mt-1 self-start">
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
  // The events are rendered here rather than through `CalendarEventList` for one
  // reason: that component's `showAllItems` container has no gap, and its `gap`
  // prop only reaches the overflow path — so `EVENT_LIST_GAP` has to sit on the
  // DIRECT parent of the event items, which is this container.
  "event-list": {
    render: (params, ctx) => {
      const { events } = params as EventListParams
      return (
        <div className={cn(slotRowBleed(ctx), "flex flex-col", EVENT_LIST_GAP)}>
          {events.map((event) => (
            <CalendarEvent key={event.title} {...event} />
          ))}
        </div>
      )
    },
    skeleton: (_params, ctx) => <EventListSlotSkeleton ctx={ctx} />,
  },
  indicators: {
    render: (params) => <IndicatorsList {...(params as IndicatorsListProps)} />,
    skeleton: (_params, ctx) => <IndicatorsSlotSkeleton ctx={ctx} />,
  },
}
