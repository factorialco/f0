import { type CSSProperties, Fragment, ReactNode } from "react"

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import { F0Icon } from "@/components/F0Icon"
import { Cross, LockLocked } from "@/icons/app"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"

import { SlotWidget } from "../SlotWidget"
import { SortableWidget } from "./SortableWidget"
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
  /**
   * Called with the column's widget ids in their new order after a drag. Omit
   * it and the column is not draggable, even in edit mode.
   */
  onReorder?: (ids: string[]) => void
  /** Tooltip on a locked widget's lock icon. */
  lockedLabel?: string
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
  onReorder,
  lockedLabel = "This widget is mandatory in your company.",
  ctx = {},
  className,
  style,
}: WidgetContainerProps) {
  const canEdit = editing && !disableEdition
  const canDrag = canEdit && onReorder != null && widgets.length > 1
  // A small activation distance so a click on a widget's own control still
  // reads as a click rather than the start of a drag.
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  )
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return
    const ids = widgets.map((widget) => widget.id)
    const from = ids.indexOf(String(active.id))
    const to = ids.indexOf(String(over.id))
    if (from < 0 || to < 0) return
    onReorder?.(arrayMove(ids, from, to))
  }

  const render = (widget: HomeWidgetItem) => {
    const node = renderWidget ? (
      renderWidget(widget, ctx)
    ) : (
      <SlotWidget
        header={
          // In edit mode the remove control takes the arrow's place, so the
          // link is dropped rather than sitting under it.
          canEdit ? { ...widget.header, link: undefined } : widget.header
        }
        fullHeight={widget.fullHeight}
        slots={widget.slots}
        slotRenderers={slotRenderers}
        ctx={ctx}
      />
    )
    if (!canEdit) return node
    // A locked widget can't be removed. In edit mode it swaps its header arrow
    // for a lock, in that same spot, so it reads as deliberately fixed.
    if (widget.locked)
      return (
        <div className="relative">
          {renderWidget ? (
            renderWidget(widget, ctx)
          ) : (
            <SlotWidget
              header={{ ...widget.header, link: undefined }}
              fullHeight={widget.fullHeight}
              slots={widget.slots}
              slotRenderers={slotRenderers}
              ctx={ctx}
            />
          )}
          <span
            className="absolute right-4 top-4 z-10"
            aria-label={lockedLabel}
          >
            <Tooltip label={lockedLabel}>
              <F0Icon
                size="md"
                icon={LockLocked}
                className="text-f1-icon-bold"
              />
            </Tooltip>
          </span>
        </div>
      )
    return (
      <div className="relative">
        {node}
        {/* The same control the header's arrow is — a bare button around an
            `sm` F0Icon in `text-f1-icon-bold` (see `CardLink`) — sitting exactly
            where that arrow sits, so removing reads as replacing it. */}
        <button
          type="button"
          aria-label="Remove widget"
          onClick={() => onRemoveWidget?.(widget.id)}
          className="absolute right-4 top-4 z-10 cursor-pointer border-0 bg-transparent p-0"
        >
          <F0Icon size="sm" icon={Cross} className="text-f1-icon-bold" />
        </button>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col [&_*]:shadow-none",
        // The main column's freeform content wants more air than the rail's
        // stack of cards.
        side === "main" ? "gap-6" : "gap-4",
        className
      )}
      style={style}
    >
      {children}
      {canDrag ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={widgets.map((widget) => widget.id)}
            strategy={verticalListSortingStrategy}
          >
            {/* The same gap the static list uses, so entering edit mode doesn't
                reflow the column. */}
            <div
              className={cn(
                "flex flex-col",
                side === "main" ? "gap-6" : "gap-4"
              )}
            >
              {widgets.map((widget) => (
                <SortableWidget
                  key={widget.id}
                  id={widget.id}
                  disabled={widget.locked}
                >
                  {render(widget)}
                </SortableWidget>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        widgets.map((widget) => (
          <Fragment key={widget.id}>{render(widget)}</Fragment>
        ))
      )}
      {canEdit && onClickAddNewWidget ? (
        <AddWidgetPlaceholder onClick={onClickAddNewWidget} />
      ) : null}
    </div>
  )
}
