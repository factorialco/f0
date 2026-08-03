import { type CSSProperties, forwardRef, Fragment, ReactNode } from "react"

import { cn } from "@/lib/utils"

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
 * A two-column CSS grid (following the `AsideLayout` from the custom-home
 * prototype): a growing MAIN column and a FIXED-width right `aside`. The
 * `header` sits in its own row above the MAIN column only — so the aside starts
 * level with the main column's content, not with the header. There is no number
 * to keep in sync: a header that grows can't drift the alignment.
 *
 * Every widget is expressed as a `header` + an ordered list of SLOTS; the layout
 * draws each widget's slots separated by a dashed divider. It is data-agnostic:
 * `defaultSlotRenderers` covers the standard visualizations; pass `slotRenderers`
 * to add/override any visualization (required for bespoke slots like `clock-in`),
 * or `renderWidget` to replace the whole widget shell. See `./slotRenderers`.
 */

const COLUMN_GAP = 16
const ROW_GAP = 16

export interface NewHomeLayoutProps {
  /** Sits above the MAIN column only, in row 1 — the aside clears it. */
  header?: ReactNode
  /** Main column, top: freeform, product-composed (greeting, clock-in hero, …). */
  children?: ReactNode
  /** Main column: widget slots stacked below `children`. */
  leftWidgets?: HomeWidgetItem[]
  /** Right rail widgets (fixed-width column). */
  rightWidgets?: HomeWidgetItem[]
  /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Full override of how a whole widget is drawn. Defaults to `defaultRenderWidget`. */
  renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode
  /** Fixed px width of the right column. */
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
    const render = (widget: HomeWidgetItem) =>
      renderWidget
        ? renderWidget(widget, ctx)
        : defaultRenderWidget(widget, ctx, renderers)

    const hasAside = rightWidgets.length > 0
    // Without a header there is no row 1: content sits in row 1 and the row gap
    // is dropped. Pinning content to row 2 unconditionally would leave a phantom
    // gap band at the top of the page.
    const contentRow = header ? 2 : 1

    const grid: CSSProperties = {
      display: "grid",
      // One flexible column + (optionally) one FIXED-px column — a shape F0Box's
      // equal-fraction `columns` prop can't express. `minmax(0, 1fr)` (not `1fr`)
      // so the main content can shrink instead of forcing the grid wider.
      gridTemplateColumns: hasAside
        ? `minmax(0, 1fr) ${asideWidth}px`
        : "minmax(0, 1fr)",
      columnGap: COLUMN_GAP,
      ...(header ? { rowGap: ROW_GAP } : null),
      alignItems: "start",
    }

    return (
      <div
        ref={ref}
        className={cn("text-f1-foreground", className)}
        style={grid}
      >
        {header ? (
          <div style={{ gridColumn: 1, gridRow: 1, minWidth: 0 }}>{header}</div>
        ) : null}
        <div
          style={{
            gridColumn: 1,
            gridRow: contentRow,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: ROW_GAP,
          }}
        >
          {children}
          {leftWidgets.map((widget) => (
            <Fragment key={widget.id}>{render(widget)}</Fragment>
          ))}
        </div>
        {hasAside ? (
          <aside
            style={{
              gridColumn: 2,
              gridRow: contentRow,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: ROW_GAP,
            }}
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
