import { ReactNode } from "react"

import {
  F0AvatarList,
  F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"
import {
  IndicatorsList,
  IndicatorsListProps,
} from "@/experimental/Widgets/Content/IndicatorsList"
import {
  WidgetAvatarsListItem,
  WidgetAvatarsListItemProps,
} from "@/experimental/Widgets/Content/ListItems/WidgetAvatarsListItem"
import {
  WidgetSimpleList,
  WidgetSimpleListProps,
} from "@/experimental/Widgets/Content/Lists/WidgetSimpleList"
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
  slots: HomeWidgetSlot[]
}

/**
 * Built-in renderers for the standard visualizations. Each spreads the slot's
 * params straight onto the matching f0 content component, so a slot's `params`
 * shape IS that component's prop shape. Bespoke visualizations (e.g. `clock-in`,
 * `carousel`) are intentionally absent — supply them via `slotRenderers`.
 */
export const defaultSlotRenderers: SlotRenderers = {
  // `minSize: 0` so a short list doesn't reserve WidgetSimpleList's 184px
  // floor inside a multi-slot widget; a caller can still pass its own.
  list: (params) => (
    <WidgetSimpleList minSize={0} {...(params as WidgetSimpleListProps)} />
  ),
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
    <div className="flex flex-col gap-1">
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
