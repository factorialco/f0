import { ReactNode } from "react"

import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import type { AvatarSize } from "@/components/avatars/internal/BaseAvatar"
import {
  F0AvatarList,
  F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"
import { type ModuleId } from "@/components/avatars/F0AvatarModule"
import { type IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import {
  IndicatorsList,
  IndicatorsListProps,
} from "@/experimental/Widgets/Content/IndicatorsList"
import {
  CalendarEvent,
  type CalendarEventProps,
} from "@/experimental/Widgets/Content/CalendarEvent"
import { WidgetProps } from "@/experimental/Widgets/Widget"

import {
  InboxListItem,
  type InboxListItemProps,
  SimpleLineListItem,
  type SimpleLineListItemProps,
  StatusListItem,
  type StatusListItemProps,
} from "./HomeListItem"

/**
 * The Home kit's slot vocabulary and how each slot is drawn. `SlotWidget`
 * renders a widget from these; the layout (`NewHomeLayout`) stays pure
 * placement.
 */

/** Context threaded into every slot renderer so it can wire navigation. */
export interface HomeRenderCtx {
  navigate?: (to: string) => void
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

/**
 * CONSISTENT ROWS: within one slot every row draws the SAME left treatment.
 * The slot declares its `left` kind ONCE — each row then supplies only that
 * kind's data — so a slot is a list of people, or a list of files, never a
 * mix. The right side is fixed per visualization (a counter on
 * `simple-line-list`, a sender on `inbox-list`, faces on `status-rows`), so
 * consistency there comes free.
 */
type AvatarLeftRows<Row, RowsKey extends string> = {
  [T in AvatarVariant["type"]]: {
    /** The ONE avatar type every row of this slot draws on its left. */
    left: T
    /** One size for every row's avatar. */
    avatarSize?: AvatarSize
  } & {
    [K in RowsKey]: Array<
      Row & { avatar: Omit<Extract<AvatarVariant, { type: T }>, "type"> }
    >
  }
}[AvatarVariant["type"]]

type SimpleLineRow = Omit<
  SimpleLineListItemProps,
  "onClick" | "icon" | "avatar" | "avatarSize"
> & { id: string | number; href: string }

/**
 * `simple-line-list` params: one-line rows, every one an `href` — rows on Home
 * are always a door to the thing they describe, never inert text. The slot
 * draws ONE `left` kind for all its rows: any avatar type, or none.
 */
export type SimpleLineListParams = {
  /** @deprecated the list always shows every row now. */
  showAllItems?: boolean
} & (
  | { left?: never; avatarSize?: never; items: SimpleLineRow[] }
  | AvatarLeftRows<SimpleLineRow, "items">
)

type InboxRow = Omit<
  InboxListItemProps,
  "onClick" | "module" | "avatar" | "avatarSize"
> & { id: string | number; href: string }

/**
 * `inbox-list` params: message rows, every one an `href`. The slot draws ONE
 * `left` kind for all its rows: the owning module's glyph, or any avatar type.
 */
export type InboxListParams = {
  /** @deprecated the list always shows every row now. */
  showAllItems?: boolean
} & (
  | {
      left: "module"
      avatarSize?: never
      items: Array<InboxRow & { module: ModuleId }>
    }
  | AvatarLeftRows<InboxRow, "items">
)

type StatusRow = Omit<
  StatusListItemProps,
  "onClick" | "alert" | "avatar" | "avatarSize"
> & { id: string; href?: string }

/**
 * `status-rows` params: who-is-where rows — count, trailing faces. The slot
 * draws ONE `left` kind for all its rows: an alert glyph, or any avatar type.
 */
export type StatusRowsParams =
  | {
      left: "alert"
      avatarSize?: never
      rows: Array<
        StatusRow & { alert: NonNullable<StatusListItemProps["alert"]> }
      >
    }
  | AvatarLeftRows<StatusRow, "rows">

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

/** A row's click handler: navigate to its `href`, however the app navigates. */
const go = (ctx: HomeRenderCtx, href?: string) =>
  href
    ? () => (ctx.navigate ? ctx.navigate(href) : window.location.assign(href))
    : undefined

/** The left props one row gets from its slot-level `left` declaration. */
const leftFor = (
  left: AvatarVariant["type"] | undefined,
  avatar: object | undefined,
  avatarSize: AvatarSize | undefined
) =>
  left ? { avatar: { type: left, ...avatar } as AvatarVariant, avatarSize } : {}

/** One slot of a widget: a visualization tag + its params (opaque to the layout). */
export interface HomeWidgetSlot {
  visualization: string
  params: unknown
}

/** The built-in slot vocabulary: each visualization and its params shape. */
export interface HomeSlotParamsMap {
  "simple-line-list": SimpleLineListParams
  "inbox-list": InboxListParams
  "event-list": EventListParams
  indicators: IndicatorsListProps
  "avatar-list": AvatarListParams
  "status-rows": StatusRowsParams
}

/**
 * Builds a slot with its params CHECKED against its visualization.
 * `HomeWidgetSlot`'s `params` is `unknown` (bespoke slots need it to be), so a
 * plain `{ visualization, params }` literal gets no checking — use this for
 * the built-in vocabulary and keep literals for bespoke visualizations.
 */
export const homeSlot = <V extends keyof HomeSlotParamsMap>(
  visualization: V,
  params: HomeSlotParamsMap[V]
): HomeWidgetSlot => ({ visualization, params })

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

/**
 * Built-in renderers for the standard visualizations. Each spreads the slot's
 * params straight onto the matching f0 content component, so a slot's `params`
 * shape IS that component's prop shape. Bespoke visualizations (e.g. `clock-in`,
 * `carousel`) are intentionally absent — supply them via `slotRenderers`.
 */
export const defaultSlotRenderers: SlotRenderers = {
  // Every row navigates to its item's `href` (via ctx.navigate when the app
  // provides it). The slot's `left` declaration decides every row's glyph.
  "simple-line-list": (params, ctx) => {
    const { items, left, avatarSize } = params as SimpleLineListParams
    const rows = items as Array<SimpleLineRow & { avatar?: object }>
    return (
      <div className={cn(slotRowBleed(ctx), "flex flex-col")}>
        {rows.map(({ id, href, avatar, ...item }) => (
          <SimpleLineListItem
            key={id}
            {...item}
            {...leftFor(left, avatar, avatarSize)}
            onClick={go(ctx, href)}
          />
        ))}
      </div>
    )
  },
  // Message rows (Communications-style). Same rule: every row navigates to its
  // `href`.
  "inbox-list": (params, ctx) => {
    const { items, left, avatarSize } = params as InboxListParams
    const rows = items as Array<
      InboxRow & { avatar?: object; module?: ModuleId }
    >
    return (
      <div className={cn(slotRowBleed(ctx), "flex flex-col")}>
        {rows.map(({ id, href, avatar, module, ...item }) => (
          <InboxListItem
            key={id}
            {...item}
            {...(left === "module"
              ? { module }
              : leftFor(left, avatar, avatarSize))}
            onClick={go(ctx, href)}
          />
        ))}
      </div>
    )
  },
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
  "status-rows": (params, ctx) => {
    const { rows, left, avatarSize } = params as StatusRowsParams
    const list = rows as Array<
      StatusRow & {
        avatar?: object
        alert?: NonNullable<StatusListItemProps["alert"]>
      }
    >
    return (
      <div className={cn(slotRowBleed(ctx), "flex flex-col gap-1")}>
        {list.map(({ id, href, avatar, alert, ...row }) => (
          <StatusListItem
            key={id}
            {...row}
            {...(left === "alert"
              ? { alert }
              : leftFor(left, avatar, avatarSize))}
            onClick={go(ctx, href)}
          />
        ))}
      </div>
    )
  },
}
