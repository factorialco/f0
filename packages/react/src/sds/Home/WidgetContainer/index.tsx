import { type CSSProperties, Fragment, ReactNode } from "react"

import { cn } from "@/lib/utils"

import { SlotWidget } from "../SlotWidget"
import {
  type HomeRenderCtx,
  type HomeWidgetItem,
  type SlotRenderers,
} from "../slotRenderers"

/** Which column a container is: the growing main one, or the fixed side rail. */
export type WidgetContainerSide = "main" | "right"

const AddWidgetPlaceholder = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center gap-1 rounded-xl border border-dashed border-f1-border py-4 text-f1-foreground-secondary hover:text-f1-foreground"
  >
    <span aria-hidden>+</span> Add widget
  </button>
)

export interface WidgetContainerProps {
  /** The widgets this column shows, in order. */
  widgets?: HomeWidgetItem[]
  /** Which column this is. Only affects the gap between its widgets. */
  side?: WidgetContainerSide
  /** Freeform content above the widgets (the main column's greeting, feed, …). */
  children?: ReactNode
  /** Per-visualization renderers, MERGED OVER the kit's `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Full override of how a whole widget is drawn. Defaults to `SlotWidget`. */
  renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode
  /** Whether the Home is currently in edit mode. */
  editing?: boolean
  /**
   * Opts this container OUT of editing entirely: even in edit mode it shows no
   * remove controls and no add placeholder. For a column whose contents are
   * fixed (a curated feed, say) rather than user-arranged.
   */
  disableEdition?: boolean
  /** Called with a widget id when its remove control is clicked. */
  onRemoveWidget?: (id: string) => void
  /** Called when the add placeholder is clicked. The container knows its side. */
  onClickAddNewWidget?: () => void
  ctx?: HomeRenderCtx
  className?: string
  style?: CSSProperties
}

/**
 * WidgetContainer — one column of Home widgets, and the only thing that knows
 * how a column is edited.
 *
 * It renders its `children` (freeform content) followed by each widget through
 * `SlotWidget`. In EDIT MODE (`editing`) every widget gains a remove control and
 * the column ends in an "Add widget" placeholder — unless `disableEdition` opts
 * this column out, in which case it never shows either.
 *
 * `NewHomeLayout` uses one of these per side; nothing about the column's own
 * width or background lives here (that's the layout's job), so the same
 * component serves the main column and the rail.
 */
export function WidgetContainer({
  widgets = [],
  side = "main",
  children,
  slotRenderers,
  renderWidget,
  editing = false,
  disableEdition = false,
  onRemoveWidget,
  onClickAddNewWidget,
  ctx = {},
  className,
  style,
}: WidgetContainerProps) {
  const canEdit = editing && !disableEdition

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
    if (!canEdit) return node
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

  return (
    <div
      className={cn(
        "flex flex-col",
        // The main column's freeform content wants more air than the rail's
        // stack of cards.
        side === "main" ? "gap-6" : "gap-4",
        className
      )}
      style={style}
    >
      {children}
      {widgets.map((widget) => (
        <Fragment key={widget.id}>{render(widget)}</Fragment>
      ))}
      {canEdit && onClickAddNewWidget ? (
        <AddWidgetPlaceholder onClick={onClickAddNewWidget} />
      ) : null}
    </div>
  )
}
