import { Fragment } from "react"

import { Separator } from "@/ui/separator"

import { Widget, WidgetProps } from "@/experimental/Widgets/Widget"

import {
  defaultSlotRenderers,
  type HomeRenderCtx,
  type HomeWidgetSlot,
  type SlotRenderers,
} from "../slotRenderers"

/**
 * SlotWidget — one Home widget rendered from data: the f0 `Widget` frame (the
 * only allowed widget wrapper) with an ordered list of SLOTS stacked below the
 * header, a DASHED divider between consecutive slots.
 *
 * Each slot is `{ visualization, params }`; how a visualization is drawn comes
 * from the merged renderer map (`defaultSlotRenderers` + the `slotRenderers`
 * prop). Bespoke visualizations (e.g. `clock-in`) have no default and must be
 * supplied via `slotRenderers`.
 */
export interface SlotWidgetProps {
  header?: WidgetProps["header"]
  fullHeight?: boolean
  slots: HomeWidgetSlot[]
  /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  ctx?: HomeRenderCtx
}

export function SlotWidget({
  header,
  fullHeight,
  slots,
  slotRenderers,
  ctx = {},
}: SlotWidgetProps) {
  const renderers = slotRenderers
    ? { ...defaultSlotRenderers, ...slotRenderers }
    : defaultSlotRenderers

  return (
    <Widget header={header} fullHeight={fullHeight}>
      {slots.map((slot, index) => {
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
