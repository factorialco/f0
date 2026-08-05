import { ReactNode, useState } from "react"

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
export type SlotRenderers = Record<string, SlotRenderer>

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
   * How rows respond: `"link"` rows each carry an `href` and render as REAL
   * anchors (role `link`, routed through the app's `LinkProvider` — never an
   * onClick), `"onClick"` rows each carry a handler. Omit for inert rows.
   */
  clickBehavior?: "link" | "onClick"
  /**
   * How many rows show before the rest fold behind a "View more (n)" button at
   * the list's bottom (which turns into "View less" once expanded). Omit to
   * always show every row.
   */
  maxVisibleItems?: number
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

type ListClickData<C> = C extends "link"
  ? { href: string }
  : C extends "onClick"
    ? { onClick: () => void }
    : object

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

/** `avatar-list` params: a strip of person avatars. */
export type AvatarListParams = Omit<
  Extract<F0AvatarListProps, { type: "person" }>,
  "type"
>

/** One slot of a widget: a visualization tag + its params (opaque to the layout). */
export interface HomeWidgetSlot {
  visualization: string
  params: unknown
}

/** The built-in slot vocabulary: each visualization and its params shape. */
export interface HomeSlotParamsMap {
  "event-list": EventListParams
  indicators: IndicatorsListProps
  "avatar-list": AvatarListParams
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
  params: HomeSlotParamsMap[V]
): HomeWidgetSlot => ({ visualization, params })

/**
 * Builds a `list` slot: the schema is declared once, and the items' shape is
 * CHECKED against it — a `left: "person"` slot only takes person data, a
 * `clickBehavior: "link"` slot demands an `href` on every row.
 */
export const listSlot = <const S extends ListSchema>(
  schema: S,
  items: Array<ListItem<S>>
): HomeWidgetSlot => ({ visualization: "list", params: { schema, items } })

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

/** A widget as handed to the layout: header + an ordered list of slots. */
export type HomeWidgetItem = HomeWidgetChrome & {
  id: string
  header?: WidgetProps["header"]
  fullHeight?: boolean
  /**
   * The widget's catalog glyph — shown for it in the collapsed rail and in the
   * "Add widget" picker, so the strip can never drift from the catalog.
   */
  icon?: IconType
  /**
   * PINNED: the widget stays put. In edit mode it shows no remove control and
   * does not wiggle (nor drag, once dragging lands) — for widgets a user must
   * always have, like Clock in.
   */
  locked?: boolean
  /**
   * Something new since the user last looked (unread messages, a pending
   * request). The collapsed rail badges the widget's glyph with an accent dot.
   */
  hasUpdates?: boolean
  slots: HomeWidgetSlot[]
}

/**
 * Row-based slots cancel their rows' own padding so the rows sit flush with the
 * widget's content box — every list-like slot carries this. `avatar-list` and
 * `indicators` don't: they aren't rows and have no padding to cancel.
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
  onClick?: () => void
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
        layout="compact"
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

  const compact = rows.length > LIST_COMPACT_AFTER
  const twoLine = Boolean(schema.descriptionRequired) && !compact
  const avatarSize = twoLine ? "md" : "sm"

  return (
    <div className={cn(slotRowBleed(ctx), "flex flex-col")}>
      {rows.map(({ href, onClick, description, ...row }) => {
        const node = (
          <HomeListItem
            title={row.title}
            subtitle={row.subtitle}
            description={compact ? undefined : description}
            unread={row.unread}
            {...listLeft(schema.left, row, avatarSize)}
            right={listRight(schema.right, row)}
            href={schema.clickBehavior === "link" ? href : undefined}
            onClick={schema.clickBehavior === "onClick" ? onClick : undefined}
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
          <F0Button
            variant="ghost"
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

/**
 * Built-in renderers for the standard visualizations. `list` covers every
 * row-based slot through its schema; `event-list`, `indicators` and
 * `avatar-list` spread their params onto the matching f0 content component.
 * Bespoke visualizations (e.g. `clock-in`, `carousel`) are intentionally
 * absent — supply them via `slotRenderers`.
 */
export const defaultSlotRenderers: SlotRenderers = {
  list: (params, ctx) => <ListSlot params={params as ListParams} ctx={ctx} />,
  // The events are rendered here rather than through `CalendarEventList` for one
  // reason: that component's `showAllItems` container has no gap, and its `gap`
  // prop only reaches the overflow path — so `EVENT_LIST_GAP` has to sit on the
  // DIRECT parent of the event items, which is this container.
  "event-list": (params, ctx) => {
    const { events } = params as EventListParams
    return (
      <div className={cn(slotRowBleed(ctx), "flex flex-col", EVENT_LIST_GAP)}>
        {events.map((event) => (
          <CalendarEvent key={event.title} {...event} />
        ))}
      </div>
    )
  },
  indicators: (params) => (
    <IndicatorsList {...(params as IndicatorsListProps)} />
  ),
  "avatar-list": (params) => (
    <F0AvatarList size="md" {...(params as AvatarListParams)} type="person" />
  ),
}
