import { Fragment } from "react"

import { Separator } from "@/ui/separator"

import { Widget, WidgetProps } from "@/experimental/Widgets/Widget"

import {
  defaultSlotRenderers,
  defaultSlotSkeleton,
  DEFAULT_EXPECTED_ITEMS_COUNT,
  resolveSlotRenderer,
  type HomeWidgetChrome,
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
 *
 * `loading` swaps every slot's content for that visualization's SKELETON,
 * keeping the frame, the chrome and the seams — the card doesn't change shape
 * when the data lands, it fills in.
 */
export type SlotWidgetProps = HomeWidgetChrome & {
  header?: WidgetProps["header"]
  fullHeight?: boolean
  slots: HomeWidgetSlot[]
  /**
   * Draws each slot's SKELETON instead of its content. How many placeholder
   * items each one draws is the slot's own `expectedItemsCount`.
   */
  loading?: boolean
  /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Forwarded to the f0 `Widget`: its own drag handle and dragging state. */
  draggable?: boolean
  onDragStart?: () => void
  isDragging?: boolean
  ctx?: HomeRenderCtx
}

export function SlotWidget({
  header,
  fullHeight,
  action,
  summaries,
  alert,
  status,
  slots,
  loading = false,
  slotRenderers,
  draggable,
  onDragStart,
  isDragging,
  ctx = {},
}: SlotWidgetProps) {
  const renderers = slotRenderers
    ? { ...defaultSlotRenderers, ...slotRenderers }
    : defaultSlotRenderers

  return (
    <Widget
      header={header}
      fullHeight={fullHeight}
      action={action}
      summaries={summaries}
      {...(alert ? { alert } : { status })}
      draggable={draggable}
      onDragStart={onDragStart}
      isDragging={isDragging}
    >
      {/* ONE child, so the Widget frame's internal `gap-4` applies once to the
          whole slot stack instead of around every slot AND every divider. */}
      <div
        className="flex flex-col"
        {...(loading
          ? { "aria-busy": true, "aria-live": "polite" as const }
          : {})}
      >
        {slots.map((slot, index) => {
          const entry = resolveSlotRenderer(renderers[slot.visualization])
          const slotCtx = {
            ...ctx,
            isLastSlot: index === slots.length - 1,
          }
          return (
            <Fragment key={index}>
              {/* Wrapped rather than passing className: Separator spreads its
                  rest props AFTER its own classes, so a className would replace
                  them (and its 1px height) instead of adding the margin. */}
              {index > 0 ? (
                <div className="my-3">
                  <Separator bare />
                </div>
              ) : null}
              {loading ? (
                // A placeholder says nothing worth reading out — the stack
                // above already announces that the widget is busy.
                <div aria-hidden="true">
                  {/* A visualization with no skeleton of its own (a bespoke
                      renderer passed as a bare function, an unregistered one)
                      still gets a placeholder rather than the dashed notice. */}
                  {(entry?.skeleton ?? defaultSlotSkeleton)(slot.params, {
                    ...slotCtx,
                    expectedItemsCount:
                      slot.expectedItemsCount ?? DEFAULT_EXPECTED_ITEMS_COUNT,
                  })}
                </div>
              ) : entry ? (
                entry.render(slot.params, slotCtx)
              ) : (
                <div className="rounded-md border border-dashed border-f1-border p-2 text-f1-foreground-secondary">
                  {`No renderer for slot "${slot.visualization}"`}
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
    </Widget>
  )
}
