import { type CSSProperties, forwardRef, Fragment, ReactNode } from "react"

import { cn } from "@/lib/utils"

import { SlotWidget } from "../SlotWidget"
import {
  type HomeRenderCtx,
  type HomeWidgetItem,
  type SlotRenderers,
} from "../slotRenderers"

const AddWidgetBox = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center gap-1 rounded-xl border border-dashed border-f1-border py-4 text-f1-foreground-secondary hover:text-f1-foreground"
  >
    <span aria-hidden>+</span> Add widget
  </button>
)

/**
 * NewHomeLayout — the shell for the redesigned Home, modelled on the custom-home
 * prototype's Feed page.
 *
 * A growing MAIN column whose CONTENT is capped to a centered reading width
 * (`mainWidth`, 800px) next to a FIXED-width side rail (`asideWidth`, 396px),
 * separated only by a gap — no divider, no column padding of its own (the page
 * wrapper owns the gutter). Below `md` it collapses to one column with the main
 * content first.
 *
 * Widgets are rendered through `SlotWidget` (the f0 `Widget` frame + slots with
 * dashed dividers). The layout never fetches and doesn't know what a
 * `visualization` is — `slotRenderers` (merged over the kit defaults) decides
 * how each slot looks, and `renderWidget` can replace the whole widget shell.
 */
export interface NewHomeLayoutProps {
  /** Freeform main-column content on top (greeting, shortcut cards, ranked feed…). */
  children?: ReactNode
  /** Main column: widget slots stacked below `children`. */
  leftWidgets?: HomeWidgetItem[]
  /** Side rail: spec-conforming widgets. */
  rightWidgets?: HomeWidgetItem[]
  /** Freeform side-rail content, rendered above `rightWidgets`. */
  aside?: ReactNode
  /** Per-visualization renderers, MERGED OVER the kit's `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Full override of how a whole widget is drawn. Defaults to `SlotWidget`. */
  renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode
  /** Edit mode: show per-widget chrome (a remove control) over every widget. */
  editing?: boolean
  /** Called with a widget id when its remove control is clicked (edit mode only). */
  onRemoveWidget?: (id: string) => void
  /** When set, renders a "+ Add widget" affordance at the bottom of each column. */
  onClickAddNewWidget?: (side: "right" | "center") => void
  /** Fixed px width of the side rail. */
  asideWidth?: number
  /** Max px width of the (centered) main-column content. */
  mainWidth?: number
  ctx?: HomeRenderCtx
  className?: string
}

export const NewHomeLayout = forwardRef<HTMLDivElement, NewHomeLayoutProps>(
  function NewHomeLayout(
    {
      children,
      leftWidgets = [],
      rightWidgets = [],
      aside,
      slotRenderers,
      renderWidget,
      editing = false,
      onRemoveWidget,
      onClickAddNewWidget,
      asideWidth = 396,
      mainWidth = 800,
      ctx = {},
      className,
    },
    ref
  ) {
    const render = (widget: HomeWidgetItem) => {
      const node = renderWidget ? (
        renderWidget(widget, ctx)
      ) : (
        <SlotWidget
          header={widget.header}
          fullHeight={widget.fullHeight}
          slots={widget.slots}
          slotRenderers={slotRenderers}
          ctx={ctx}
        />
      )
      if (!editing) return node
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

    const hasSide =
      aside != null || rightWidgets.length > 0 || onClickAddNewWidget != null

    return (
      <div
        ref={ref}
        // One column by default (main first); at md, a growing main column + a
        // fixed-width rail, a small gap between them and NO divider.
        className={cn(
          "grid grid-cols-1 items-start gap-4 text-f1-foreground",
          hasSide &&
            "md:[grid-template-columns:minmax(0,1fr)_var(--home-aside-w)]",
          className
        )}
        style={{ "--home-aside-w": `${asideWidth}px` } as CSSProperties}
      >
        {/* Main column content is capped to a centered reading width. */}
        <div
          className="mx-auto flex w-full flex-col gap-6"
          style={{ maxWidth: `${mainWidth}px` }}
        >
          {children}
          {leftWidgets.map((widget) => (
            <Fragment key={widget.id}>{render(widget)}</Fragment>
          ))}
          {onClickAddNewWidget ? (
            <AddWidgetBox onClick={() => onClickAddNewWidget("center")} />
          ) : null}
        </div>
        {hasSide ? (
          <aside className="flex flex-col gap-4">
            {aside}
            {rightWidgets.map((widget) => (
              <Fragment key={widget.id}>{render(widget)}</Fragment>
            ))}
            {onClickAddNewWidget ? (
              <AddWidgetBox onClick={() => onClickAddNewWidget("right")} />
            ) : null}
          </aside>
        ) : null}
      </div>
    )
  }
)
