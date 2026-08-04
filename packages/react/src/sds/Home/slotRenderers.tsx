import { ReactNode } from "react"

import {
  F0AvatarList,
  F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"
import { type IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"
import {
  IndicatorsList,
  IndicatorsListProps,
} from "@/experimental/Widgets/Content/IndicatorsList"
import {
  WidgetAvatarsListItem,
  WidgetAvatarsListItemProps,
} from "@/experimental/Widgets/Content/ListItems/WidgetAvatarsListItem"
import { type CalendarEventProps } from "@/experimental/Widgets/Content/CalendarEvent"
import { CalendarEventList } from "@/experimental/Widgets/Content/CalendarEventList"
import { WidgetInboxListItemProps } from "@/experimental/Widgets/Content/ListItems/WidgetInboxListItem"
import { WidgetSimpleListItemProps } from "@/experimental/Widgets/Content/ListItems/WidgetSimpleListItem"
import { WidgetInboxList } from "@/experimental/Widgets/Content/Lists/WidgetInboxList"
import { WidgetSimpleList } from "@/experimental/Widgets/Content/Lists/WidgetSimpleList"
import { WidgetProps } from "@/experimental/Widgets/Widget"

/**
 * The Home kit's slot vocabulary and how each slot is drawn. `SlotWidget`
 * renders a widget from these; the layout (`NewHomeLayout`) stays pure
 * placement.
 */

/** Context threaded into every slot renderer so it can wire navigation. */
export interface HomeRenderCtx {
  navigate?: (to: string) => void
}

/** Draws ONE slot from its params. Keyed by `visualization` in a renderer map. */
export type SlotRenderer<P = unknown> = (
  params: P,
  ctx: HomeRenderCtx
) => ReactNode
export type SlotRenderers = Record<string, SlotRenderer>

/**
 * `simple-line-list` params: every item MUST carry an `href` — rows on Home are
 * always a door to the thing they describe, never inert text.
 */
export interface SimpleLineListParams {
  items: Array<Omit<WidgetSimpleListItemProps, "onClick"> & { href: string }>
  showAllItems?: boolean
}

/** `inbox-list` params: module-avatar rows (title + subtitle), every row an `href`. */
export interface InboxListParams {
  items: Array<Omit<WidgetInboxListItemProps, "onClick"> & { href: string }>
  showAllItems?: boolean
}

/** `event-list` params: f0 calendar-event rows (color band + date avatars). */
export interface EventListParams {
  events: CalendarEventProps[]
  showAllItems?: boolean
}

/** One slot of a widget: a visualization tag + its params (opaque to the layout). */
export interface HomeWidgetSlot {
  visualization: string
  params: unknown
}

/** A widget as handed to the layout: header + an ordered list of slots. */
export interface HomeWidgetItem {
  id: string
  header?: WidgetProps["header"]
  fullHeight?: boolean
  /**
   * The widget's catalog glyph — shown for it in the collapsed rail and in the
   * "Add widget" picker, so the strip can never drift from the catalog.
   */
  icon?: IconType
  slots: HomeWidgetSlot[]
}

/**
 * Row-based slots cancel their rows' own padding so the rows sit flush with the
 * widget's content box — every list-like slot carries this. `avatar-list` and
 * `indicators` don't: they aren't rows and have no padding to cancel.
 */
export const SLOT_ROW_BLEED = "-m-2"

/** The gap between rows of the `event-list` slot. */
export const EVENT_LIST_GAP = "gap-1"

/**
 * Built-in renderers for the standard visualizations. Each spreads the slot's
 * params straight onto the matching f0 content component, so a slot's `params`
 * shape IS that component's prop shape. Bespoke visualizations (e.g. `clock-in`,
 * `carousel`) are intentionally absent — supply them via `slotRenderers`.
 */
export const defaultSlotRenderers: SlotRenderers = {
  // Every row navigates to its item's `href` (via ctx.navigate when the app
  // provides it). `minSize: 0` so a short list doesn't reserve
  // WidgetSimpleList's 184px floor inside a multi-slot widget.
  "simple-line-list": (params, ctx) => {
    const { items, showAllItems } = params as SimpleLineListParams
    const hrefById = new Map(items.map((item) => [item.id, item.href]))
    const go = (id: string | number) => {
      const href = hrefById.get(id)
      if (!href) return
      if (ctx.navigate) ctx.navigate(href)
      else window.location.assign(href)
    }
    return (
      <div className={SLOT_ROW_BLEED}>
        <WidgetSimpleList
          minSize={0}
          showAllItems={showAllItems}
          items={items}
          onClickItem={go}
        />
      </div>
    )
  },
  // Module-avatar rows (Communications-style). Same rule: every row navigates
  // to its `href`.
  "inbox-list": (params, ctx) => {
    const { items, showAllItems } = params as InboxListParams
    const hrefById = new Map(items.map((item) => [item.id, item.href]))
    const go = (id: string | number) => {
      const href = hrefById.get(id)
      if (!href) return
      if (ctx.navigate) ctx.navigate(href)
      else window.location.assign(href)
    }
    return (
      <div className={SLOT_ROW_BLEED}>
        <WidgetInboxList
          minSize={0}
          showAllItems={showAllItems}
          items={items}
          onClickItem={go}
        />
      </div>
    )
  },
  "event-list": (params) => {
    const { events, showAllItems } = params as EventListParams
    return (
      <div className={cn(SLOT_ROW_BLEED, "flex flex-col", EVENT_LIST_GAP)}>
        <CalendarEventList events={events} showAllItems={showAllItems} />
      </div>
    )
  },
  indicators: (params) => (
    <IndicatorsList {...(params as IndicatorsListProps)} />
  ),
  "avatar-list": (params) => (
    <F0AvatarList
      size="md"
      {...(params as Omit<
        Extract<F0AvatarListProps, { type: "person" }>,
        "type"
      >)}
      type="person"
    />
  ),
  "status-rows": (params, ctx) => (
    <div className={cn(SLOT_ROW_BLEED, "flex flex-col gap-1")}>
      {(params as { rows: WidgetAvatarsListItemProps[] }).rows.map((row) => (
        <WidgetAvatarsListItem
          key={row.id}
          {...row}
          onClick={row.onClick ?? (ctx.navigate ? () => {} : undefined)}
        />
      ))}
    </div>
  ),
}
