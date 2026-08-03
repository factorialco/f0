import { Fragment, ReactNode } from "react"

import { Separator } from "@/ui/separator"

import {
  IndicatorsList,
  IndicatorsListProps,
} from "../../Content/IndicatorsList"
import {
  WidgetAvatarsListItem,
  WidgetAvatarsListItemProps,
} from "../../Content/ListItems/WidgetAvatarsListItem"
import {
  WidgetSimpleList,
  WidgetSimpleListProps,
} from "../../Content/Lists/WidgetSimpleList"
import { Widget, WidgetProps } from "../../Widget"

/**
 * Slot vocabulary + how each slot is drawn. Kept in its own file so the layout
 * (`index.tsx`) stays pure placement and this stays "what a slot renders".
 */

/** Context threaded into every slot/widget renderer so it can wire navigation. */
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
  list: (params) => <WidgetSimpleList {...(params as WidgetSimpleListProps)} />,
  indicators: (params) => (
    <IndicatorsList {...(params as IndicatorsListProps)} />
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

/**
 * The default widget renderer: the f0 `Widget` frame (header + count + link) with
 * its slots stacked below, a DASHED divider between consecutive slots. Consumers
 * rarely replace this — usually they only add bespoke entries to `slotRenderers`.
 */
export function defaultRenderWidget(
  widget: HomeWidgetItem,
  ctx: HomeRenderCtx,
  renderers: SlotRenderers
): ReactNode {
  return (
    <Widget header={widget.header} fullHeight={widget.fullHeight}>
      {widget.slots.map((slot, index) => {
        const renderer = renderers[slot.visualization]
        return (
          <Fragment key={index}>
            {index > 0 ? <Separator bare className="my-3" /> : null}
            {renderer ? (
              renderer(slot.params, ctx)
            ) : (
              <div className="rounded-md border border-dashed border-f1-border p-2 text-f1-foreground-secondary">
                {`No renderer for slot "${slot.visualization}"`}
              </div>
            )}
          </Fragment>
        )
      })}
    </Widget>
  )
}
