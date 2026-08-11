import { type CSSProperties, ReactNode, useState } from "react"

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  DragOverlay,
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

import { arrivalWindowMs, HomeEntrance, useElapsed } from "../home-motion"
import { SlotWidget } from "../SlotWidget"
import { SortableWidget } from "./SortableWidget"
import {
  type HomeRenderCtx,
  type HomeWidgetChrome,
  type HomeWidgetItem,
  type SlotRenderers,
} from "../slotRenderers"

/**
 * The interaction the header arrow has (copied from `CardLink`), so a control
 * standing in its place feels identical on hover and focus.
 */
const CARD_LINK_CLASS = cn(
  "group inline-flex aspect-square h-6 items-center justify-center gap-1",
  "rounded-sm border border-solid border-transparent bg-transparent",
  "whitespace-nowrap px-0 text-base font-medium text-f1-foreground",
  "cursor-pointer transition-colors hover:bg-f1-background-secondary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1"
)

/**
 * The drop settle, matching SurveyFormBuilder's: that builder reorders with
 * motion's `Reorder` (`layout="position"`, no explicit transition), so its
 * release uses motion's `defaultLayoutTransition` — literally
 * `{ duration: 0.45, ease: [0.4, 0, 0.1, 1] }`. The overlay clone glides from
 * wherever it was released into its slot with those exact values.
 */
const DROP_ANIMATION = {
  duration: 450,
  easing: "cubic-bezier(0.4, 0, 0.1, 1)",
}

/** The `Widget` chrome an item carries, ready to spread onto `SlotWidget`. */
const widgetChrome = (widget: HomeWidgetItem) =>
  ("alert" in widget && widget.alert !== undefined
    ? {
        action: widget.action,
        summaries: widget.summaries,
        alert: widget.alert,
      }
    : {
        action: widget.action,
        summaries: widget.summaries,
        status: "status" in widget ? widget.status : undefined,
      }) as HomeWidgetChrome

/** Which column a container is: the growing main one, or the fixed side rail. */
export type WidgetContainerSide = "main" | "right"

/**
 * One widget's place in the column, and the only thing that decides whether it
 * is SHOWN — never whether it exists.
 *
 * Shown, `display: contents` leaves no box behind, so the widget is the flex
 * item it would have been without this wrapper: the column's gap, its own
 * `fullHeight` and every child selector land on the card exactly as before.
 * Hidden, plain `hidden` takes it out of sight AND out of the a11y tree — while
 * its render stays MOUNTED.
 *
 * It wraps every widget whether or not anything is being hidden: a wrapper that
 * came and went with the filtering would change the tree's shape, and changing
 * shape is what unmounts a render.
 */
const WidgetSlot = ({
  hidden,
  children,
}: {
  hidden: boolean
  children: ReactNode
}) => (
  // No `display` of its own while hidden: `hidden` only means `display: none`
  // for as long as nothing else sets one.
  <div hidden={hidden} style={{ display: hidden ? undefined : "contents" }}>
    {children}
  </div>
)

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
  /**
   * Shows ONE of the column's widgets and hides the rest — hides, not drops:
   * every widget stays mounted, so what it had loaded, timed or animated
   * survives. `undefined` (the default) shows them all; `null` shows none.
   *
   * For a container that is sometimes a whole column and sometimes a single
   * floating widget — `NewHomeLayout`'s collapsed rail, which hovers one widget
   * out over the feed from this same container rather than mounting a copy.
   */
  visibleWidgetId?: string | null
  /**
   * How this column's widgets ARRIVE: each one fades and rises into place, in
   * order, one beat after the last (`home-motion`).
   *
   * `order` is where the first widget sits in the page's SHARED stagger, so a
   * column that has freeform content above it can hand over the rhythm instead
   * of restarting it; `delayMs` holds the whole column back (what makes the side
   * rail land after the main column). `false` mounts the widgets outright, with
   * no wrapper of any kind around them.
   */
  entrance?: false | { order?: number; delayMs?: number }
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
 * `SlotWidget`, ending in an "Add widget" placeholder — adding is ALWAYS on
 * offer. EDIT MODE (`editing`) is for arranging what's already there: every
 * widget gains a remove control and becomes draggable. `disableEdition` opts
 * a column out of all of it, placeholder included.
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
  visibleWidgetId,
  entrance = {},
  lockedLabel = "This widget is mandatory in your company.",
  ctx = {},
  className,
  style,
}: WidgetContainerProps) {
  const canEdit = editing && !disableEdition
  const isHidden = (widget: HomeWidgetItem) =>
    visibleWidgetId !== undefined && widget.id !== visibleWidgetId
  const canDrag = canEdit && onReorder != null && widgets.length > 1
  // The widget being dragged: its in-list card hides while a clone rides the
  // pointer in the DragOverlay (see below).
  const [activeId, setActiveId] = useState<string | null>(null)
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
    // A locked widget is PINNED to its index. `disabled` stops it being picked
    // up, but a plain arrayMove would still slide it along when another widget
    // crosses it — so the moved order is replayed into the free slots only, and
    // every pinned widget is put back exactly where it was.
    const pinned = new Map(
      widgets.flatMap((widget, index) =>
        widget.locked ? [[index, widget.id]] : []
      )
    )
    if (pinned.size === 0) {
      onReorder?.(arrayMove(ids, from, to))
      return
    }
    // Dropping onto a pinned widget has no meaning: it can't give up its place.
    if ([...pinned.values()].includes(String(over.id))) return
    const moved = arrayMove(ids, from, to).filter(
      (id) => !pinned.has(ids.indexOf(id))
    )
    const next = ids.map((_, index) => pinned.get(index) ?? moved.shift()!)
    onReorder?.(next)
  }

  const render = (
    widget: HomeWidgetItem,
    drag?: { draggable: boolean; isDragging: boolean }
  ) => {
    const node = renderWidget ? (
      renderWidget(widget, ctx)
    ) : (
      <SlotWidget
        {...widgetChrome(widget)}
        header={
          // In edit mode the remove control takes the arrow's place, so the
          // link is dropped rather than sitting under it.
          canEdit ? { ...widget.header, link: undefined } : widget.header
        }
        fullHeight={widget.fullHeight}
        slots={widget.slots}
        loading={widget.loading}
        slotRenderers={slotRenderers}
        ctx={ctx}
        draggable={drag?.draggable}
        isDragging={drag?.isDragging}
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
              {...widgetChrome(widget)}
              header={{ ...widget.header, link: undefined }}
              fullHeight={widget.fullHeight}
              slots={widget.slots}
              loading={widget.loading}
              slotRenderers={slotRenderers}
              ctx={ctx}
            />
          )}
          <span
            className="absolute right-4 top-4 z-10"
            // `img` because a bare span may not carry aria-label
            // (axe: aria-prohibited-attr) — this names the lock glyph.
            role="img"
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
          className={cn("absolute right-4 top-4 z-10", CARD_LINK_CLASS)}
        >
          <F0Icon size="sm" icon={Cross} className="text-f1-icon-bold" />
        </button>
      </div>
    )
  }

  const arrival = entrance === false ? null : entrance
  /**
   * The arrival is a ONE-SHOT: once the page has landed, a card that mounts is
   * not arriving, it is just there. Edit mode is why this matters — the sortable
   * branch is a different tree, so toggling the pencil remounts every card, and
   * without this the whole column would fade back in each time.
   */
  const arrived = useElapsed(arrivalWindowMs(arrival?.delayMs))

  /**
   * Wraps one block in its arrival. With `entrance` off it hands the block back
   * untouched — an entrance that is not happening must not leave a box behind,
   * because that box is the flex item the widget itself would have been.
   */
  const enter = (order: number, node: ReactNode, fullHeight?: boolean) =>
    arrival ? (
      <HomeEntrance
        order={(arrival.order ?? 0) + order}
        delayMs={arrival.delayMs}
        arriving={!arrived}
        fullHeight={fullHeight}
      >
        {node}
      </HomeEntrance>
    ) : (
      node
    )

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
          onDragStart={({ active }) => setActiveId(String(active.id))}
          onDragCancel={() => setActiveId(null)}
          onDragEnd={(event) => {
            setActiveId(null)
            handleDragEnd(event)
          }}
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
              {widgets.map((widget, order) => (
                <WidgetSlot key={widget.id} hidden={isHidden(widget)}>
                  <SortableWidget id={widget.id} disabled={widget.locked}>
                    {/* The arrival wrapper sits INSIDE the sortable rather than
                        around it: dnd-kit measures the element it holds the ref
                        to, and a transformed ancestor would offset every rect it
                        reads while a drag is in flight. */}
                    {(state) =>
                      enter(order, render(widget, state), widget.fullHeight)
                    }
                  </SortableWidget>
                </WidgetSlot>
              ))}
            </div>
          </SortableContext>
          {/* The card that follows the pointer is a CLONE in an overlay — the
              in-list card hides meanwhile (SortableWidget). On release the
              clone GLIDES from where it was dropped into its final slot
              (dropAnimation), which is what makes the drop soft: without the
              overlay, committing the reorder snaps the real card's DOM slot
              and transform in one frame. */}
          <DragOverlay dropAnimation={DROP_ANIMATION}>
            {(() => {
              const active = widgets.find((widget) => widget.id === activeId)
              return active ? (
                // Solid backdrop: Card's own background is translucent, and the
                // clone rides over whatever the column shows beneath it.
                <div className="cursor-grabbing rounded-xl bg-f1-background [&_*]:shadow-none">
                  {render(active, { draggable: true, isDragging: true })}
                </div>
              ) : null
            })()}
          </DragOverlay>
        </DndContext>
      ) : (
        widgets.map((widget, order) => (
          <WidgetSlot key={widget.id} hidden={isHidden(widget)}>
            {enter(order, render(widget), widget.fullHeight)}
          </WidgetSlot>
        ))
      )}
      {/* NOT edit-gated: adding is always on offer — edit mode is for
          arranging and removing what's already there. `disableEdition`
          columns still never offer it. */}
      {!disableEdition && onClickAddNewWidget
        ? enter(
            widgets.length,
            <AddWidgetPlaceholder onClick={onClickAddNewWidget} />
          )
        : null}
    </div>
  )
}
