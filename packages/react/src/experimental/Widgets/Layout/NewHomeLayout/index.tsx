import { type CSSProperties, forwardRef, Fragment, ReactNode } from "react"

import { cn } from "@/lib/utils"
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
 * NewHomeLayout — the shell for the redesigned Home.
 *
 * A two-column page: a growing MAIN column (freeform `children` on top, plus an
 * optional stack of `leftWidgets` below) and a fixed-width right `aside` of
 * `rightWidgets`. Everything a widget shows is expressed as an ordered list of
 * SLOTS; the layout draws each widget as its header followed by its slots,
 * separated by a dashed divider.
 *
 * The layout is data-agnostic: it never fetches and does not hardcode how a slot
 * looks. `defaultSlotRenderers` covers the standard visualizations (they are f0
 * components); a consumer passes `slotRenderers` to add or override any
 * visualization — required for bespoke slots (e.g. `clock-in`) that own their
 * own data. For a fully custom widget shell, pass `renderWidget`.
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

export interface NewHomeLayoutProps {
  /** Greeting / hero above the main column only (the aside clears it). */
  header?: ReactNode
  /** Main column, top: freeform, product-composed (greeting, clock-in hero, …). */
  children?: ReactNode
  /** Main column: widget slots stacked below `children`. */
  leftWidgets?: HomeWidgetItem[]
  /** Right rail widgets. */
  rightWidgets?: HomeWidgetItem[]
  /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Full override of how a whole widget is drawn. Defaults to `defaultRenderWidget`. */
  renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode
  /** Fixed px width of the right rail. */
  asideWidth?: number
  ctx?: HomeRenderCtx
  className?: string
}

export const NewHomeLayout = forwardRef<HTMLDivElement, NewHomeLayoutProps>(
  function NewHomeLayout(
    {
      header,
      children,
      leftWidgets = [],
      rightWidgets = [],
      slotRenderers,
      renderWidget,
      asideWidth = 320,
      ctx = {},
      className,
    },
    ref
  ) {
    const renderers = slotRenderers
      ? { ...defaultSlotRenderers, ...slotRenderers }
      : defaultSlotRenderers
    const render =
      renderWidget ??
      ((widget: HomeWidgetItem) => defaultRenderWidget(widget, ctx, renderers))

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 text-f1-foreground @3xl:flex-row @3xl:items-start",
          className
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {header}
          {children}
          {leftWidgets.map((widget) => (
            <Fragment key={widget.id}>{render(widget)}</Fragment>
          ))}
        </div>
        {rightWidgets.length > 0 ? (
          <aside
            className="flex w-full shrink-0 flex-col gap-4 @3xl:w-[var(--home-aside-w)]"
            style={{ "--home-aside-w": `${asideWidth}px` } as CSSProperties}
          >
            {rightWidgets.map((widget) => (
              <Fragment key={widget.id}>{render(widget)}</Fragment>
            ))}
          </aside>
        ) : null}
      </div>
    )
  }
)
