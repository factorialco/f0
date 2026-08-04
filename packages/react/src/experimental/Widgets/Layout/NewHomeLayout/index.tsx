import { Fragment, ReactNode } from "react"

import { TwoColumnLayout } from "@/layouts/TwoColumnLayout"

import {
  defaultRenderWidget,
  defaultSlotRenderers,
  type HomeRenderCtx,
  type HomeWidgetItem,
  type SlotRenderers,
} from "./slotRenderers"

export * from "./slotRenderers"

/**
 * NewHomeLayout — the shell for the redesigned Home.
 *
 * Composes f0's `TwoColumnLayout`: a growing main column (freeform `children` on
 * top, plus an optional stack of `leftWidgets`) and a side rail (`aside` +
 * `rightWidgets`). `responsiveStackOrder` decides which column comes first when
 * the layout collapses to one column — defaulting to `"main"` so Home reads main
 * content first on narrow viewports.
 *
 * Every widget is a `header` + an ordered list of SLOTS; each widget's slots are
 * drawn with a dashed divider between them. The layout is data-agnostic:
 * `defaultSlotRenderers` covers the standard visualizations; pass `slotRenderers`
 * to add/override any visualization (required for bespoke slots like `clock-in`),
 * or `renderWidget` to replace the whole widget shell. See `./slotRenderers`.
 */
export interface NewHomeLayoutProps {
  /** Freeform main-column content on top (greeting, clock-in hero, …). */
  children?: ReactNode
  /** Main column: widget slots stacked below `children`. */
  leftWidgets?: HomeWidgetItem[]
  /** Side rail: spec-conforming widgets. */
  rightWidgets?: HomeWidgetItem[]
  /** Freeform side-rail content (e.g. an AI chat), rendered above `rightWidgets`. */
  aside?: ReactNode
  /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Full override of how a whole widget is drawn. Defaults to `defaultRenderWidget`. */
  renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode
  /** Edit mode: show per-widget chrome (a remove control) over every widget. */
  editing?: boolean
  /** Called with a widget id when its remove control is clicked (edit mode only). */
  onRemoveWidget?: (id: string) => void
  /** Which column stacks first when collapsed to one column. Defaults to `"main"`. */
  responsiveStackOrder?: "side" | "main"
  sticky?: boolean
  ctx?: HomeRenderCtx
}

export function NewHomeLayout({
  children,
  leftWidgets = [],
  rightWidgets = [],
  aside,
  slotRenderers,
  renderWidget,
  editing = false,
  onRemoveWidget,
  responsiveStackOrder = "main",
  sticky = false,
  ctx = {},
}: NewHomeLayoutProps) {
  const renderers = slotRenderers
    ? { ...defaultSlotRenderers, ...slotRenderers }
    : defaultSlotRenderers

  const render = (widget: HomeWidgetItem) => {
    const node = renderWidget
      ? renderWidget(widget, ctx)
      : defaultRenderWidget(widget, ctx, renderers)
    if (!editing) return node
    // Edit chrome: a remove control over the widget, where its header link/arrow
    // sits in view mode (mirrors the prototype board's edit affordance).
    return (
      <div className="relative">
        {node}
        <button
          type="button"
          aria-label="Remove widget"
          onClick={() => onRemoveWidget?.(widget.id)}
          className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-solid border-f1-border bg-f1-background text-f1-foreground-secondary hover:text-f1-foreground"
        >
          ✕
        </button>
      </div>
    )
  }

  const main = (
    <div className="flex flex-col gap-4">
      {children}
      {leftWidgets.map((widget) => (
        <Fragment key={widget.id}>{render(widget)}</Fragment>
      ))}
    </div>
  )

  const hasSide = aside != null || rightWidgets.length > 0
  const side = hasSide ? (
    <div className="flex flex-col gap-4">
      {aside}
      {rightWidgets.map((widget) => (
        <Fragment key={widget.id}>{render(widget)}</Fragment>
      ))}
    </div>
  ) : null

  return (
    <TwoColumnLayout
      sideContent={side}
      responsiveStackOrder={responsiveStackOrder}
      sticky={sticky}
    >
      {main}
    </TwoColumnLayout>
  )
}
