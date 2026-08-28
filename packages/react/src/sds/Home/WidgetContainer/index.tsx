import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  DragOverlay,
  PointerSensor,
  type PointerSensorOptions,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
  type CSSProperties,
  type PointerEvent,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import {
  DropdownInternal,
  type DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { toasts } from "@/hooks/toast"
import { Delete, Ellipsis, InfoCircleLine, Plus, Sliders } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { arrivalWindowMs, useElapsed } from "../home-motion"
import {
  resolveWidgetHeader,
  widgetChrome,
  widgetTitle,
  type HomeRenderCtx,
  type HomeWidgetItem,
  type SlotRenderers,
  type WidgetParams,
} from "../slotRenderers"
import { SlotWidget } from "../SlotWidget"
import { WidgetUpdateDialog } from "../WidgetUpdateDialog"
import { takeCardGhost } from "./dragGhost"
import { lockedCeiling, noHigherThan, topPins } from "./lockedCeiling"
import { SortableWidget } from "./SortableWidget"
import {
  useWidgetVirtualizer,
  type WidgetPlacement,
  type WidgetVirtualization,
} from "./useWidgetVirtualizer"
import { verticalOnly } from "./verticalOnly"
import { WidgetMotion, type WidgetStow } from "./WidgetMotion"

export type { WidgetVirtualization } from "./useWidgetVirtualizer"

/**
 * WHAT CANNOT START A DRAG. The whole card is the drag surface — there is no
 * handle to grab — so a pointer-down that lands on something you can operate
 * must stay a click: dnd-kit's own PointerSensor has no such guard, and with
 * dragging always on (rather than only inside an edit mode) every row link, tag
 * and control in a widget would otherwise be 4px of travel away from becoming a
 * drag.
 */
const INTERACTIVE = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "label",
  "[role='button']",
  "[role='link']",
  "[role='menuitem']",
  "[role='switch']",
  "[role='checkbox']",
  "[role='tab']",
  "[contenteditable='true']",
].join(",")

class WidgetDragSensor extends PointerSensor {
  static activators = [
    {
      eventName: "onPointerDown" as const,
      handler: (
        { nativeEvent: event }: PointerEvent<Element>,
        { onActivation }: PointerSensorOptions
      ) => {
        // The base sensor's own two conditions, kept as they are — a secondary
        // pointer or any button but the left one is not a drag.
        if (!event.isPrimary || event.button !== 0) return false
        const target = event.target
        if (target instanceof Element && target.closest(INTERACTIVE))
          return false
        onActivation?.({ event })
        return true
      },
    },
  ]
}

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

/** Which column a container is: the growing main one, or the fixed side rail. */
export type WidgetContainerSide = "main" | "right"

/**
 * The gap between a column's widgets, per side — the same numbers as the `gap-6`
 * / `gap-4` classes below, which is why they are here rather than only there: a
 * VIRTUALIZED column places its cards itself, so it needs the gap as a number.
 * Keep the two in step.
 */
const GAP_PX: Record<WidgetContainerSide, number> = { main: 24, right: 16 }

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
 * VIRTUALIZED it is a real box instead, PLACED where the widget belongs in a
 * column whose other cards are not mounted (`placement`), and the box the
 * virtualizer measures this widget by. `display: contents` is not an option
 * there: a card with no box of its own cannot be positioned, and cannot be
 * measured either.
 *
 * It wraps every widget whether or not anything is being hidden or placed: a
 * wrapper that came and went with the filtering would change the tree's shape,
 * and changing shape is what unmounts a render.
 */
const WidgetSlot = ({
  hidden,
  placement,
  measureRef,
  children,
}: {
  hidden: boolean
  /** Where this widget goes in a virtualized column, if it is one. */
  placement?: WidgetPlacement
  measureRef?: (node: HTMLElement | null) => void
  children: ReactNode
}) => (
  <div
    // Only the placed box is measured — an unplaced one is `display: contents`
    // and has no size to report.
    ref={placement ? measureRef : undefined}
    // Which widget this box is, for the virtualizer to file its measurement
    // under. Its own attribute, not ours: `indexAttribute` defaults to this.
    data-index={placement?.index}
    hidden={hidden}
    style={
      placement
        ? {
            // PLACED, NOT FLOWED, because its neighbours are not there to flow
            // after: the list is one box as tall as the whole column would be,
            // and each mounted card sits at the offset its absent neighbours
            // would have pushed it to. The gap between them is the
            // virtualizer's — a flex gap does not reach a positioned child.
            position: "absolute",
            top: placement.start,
            left: 0,
            width: "100%",
          }
        : // No `display` of its own while hidden: `hidden` only means
          // `display: none` for as long as nothing else sets one.
          { display: hidden ? undefined : "contents" }
    }
  >
    {children}
  </div>
)

/**
 * The offer at the foot of a column. A GLYPH, not a sentence: it sits under a
 * stack of cards that are all content, and a labelled button competes with them
 * for the eye every time you look down the column. The label is still there, on
 * hover and to a screen reader — it is just not taking up the room.
 *
 * `w-full` because a `<button>` shrinks to fit even as a flex box: it used to be a
 * direct flex item of the column and got stretched for free, and it no longer is
 * (its arrival wrapper is in between).
 */
const AddWidgetPlaceholder = ({
  onClick,
  label,
}: {
  onClick: () => void
  label: string
}) => (
  <Tooltip label={label}>
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex w-full items-center justify-center rounded-xl border border-dashed border-f1-border py-4 text-f1-foreground-secondary hover:border-f1-border-hover hover:text-f1-foreground"
    >
      <F0Icon size="md" icon={Plus} />
    </button>
  </Tooltip>
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
  /**
   * Opts this container OUT of arranging entirely: no remove item in any
   * widget's menu, no dragging, no add placeholder. For a column whose contents
   * are fixed (a curated feed, say) rather than user-arranged.
   */
  disableEdition?: boolean
  /**
   * TAKES THE DRAG AWAY WITHOUT CHANGING THE TREE. Every widget stays the
   * sortable it already was — so nothing in the column is rebuilt — and none of
   * them can be picked up while this is set.
   *
   * `disableEdition` is the wrong tool for a column that is only TEMPORARILY not
   * arrangeable: it decides the tree's SHAPE (a draggable column is wrapped in a
   * DndContext, its cards in sortables), so toggling it remounts every widget in
   * the column. This is the same refusal with nothing moving underneath it — for
   * `NewHomeLayout`'s COLLAPSED RAIL, which is a strip of glyphs and one floating
   * card rather than a column with an order to rearrange.
   *
   * The rest of the arranging stays: a widget's own menu still removes and
   * configures it. Only the gesture that needs a column goes.
   */
  disableDrag?: boolean
  /**
   * Called with a widget id when its "Remove widget" menu item is used. Omit it
   * and no widget offers removal.
   */
  onRemoveWidget?: (id: string) => void
  /** Called when the add placeholder is clicked. The container knows its side. */
  onClickAddNewWidget?: () => void
  /**
   * Called with the column's widget ids in their new order after a drag. Omit
   * it and the column is not draggable.
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
  /**
   * KEEPS ONLY THE WIDGETS YOU CAN SEE IN THE DOM. `true` for the defaults, or an
   * object to tune them; omitted (the default), every widget is mounted.
   *
   * For a column that can hold more widgets than fit on a screen — a hundred
   * cards, each with its own data and its own chart, is a hundred fetches and a
   * DOM the browser pays for on every frame. What it costs, and why it is not the
   * default, is on `WidgetVirtualization`.
   *
   * Choose it ONCE for the life of the column: turning it on or off swaps how
   * every card is laid out, which is a jump if anyone is looking.
   */
  virtualized?: boolean | WidgetVirtualization
  /**
   * THE STOW: where this column's widgets go when the rail collapses. Each card
   * scales down onto its own glyph and fades, and grows back out of it when the
   * rail opens, so a card and its glyph read as one object rather than two
   * representations that replace each other. See `WidgetMotion`.
   *
   * `pitch` and `scale` describe the strip the widgets are going into — only
   * `NewHomeLayout` knows those, which is why they come in from outside.
   */
  stow?: Omit<WidgetStow, "stowed" | "instant"> & { stowed: boolean }
  /**
   * Tooltip and accessible name for the add placeholder, which shows no text.
   * Defaults to the provider's `t.widgets.addWidget`.
   */
  addWidgetLabel?: string
  /**
   * Called with a widget id and its NEW params when its params dialog is saved.
   * Providing it is what puts "Edit params" in the menu of every widget that
   * declares a `paramsSchema` — locked widgets included, since being mandatory
   * says nothing about being configurable.
   */
  onChangeWidgetParams?: (id: string, params: WidgetParams) => void
  /**
   * REBUILDS a widget for params the user is trying out in that dialog, before
   * they are saved — the same widget with slots that follow the new params,
   * which only the app can produce (it knows where their data comes from).
   *
   * It hands back DATA, not a rendered node, so the preview is drawn by this
   * column through the same `SlotWidget` the column itself uses: a preview and
   * the card it is previewing cannot come out differently, because they are the
   * same render.
   *
   * Without it the preview is the widget as it is with those params swapped in
   * — already live for everything the params DERIVE (its title, its info), just
   * not for its slots.
   */
  rebuildWidget?: (
    widget: HomeWidgetItem,
    params: WidgetParams
  ) => HomeWidgetItem
  /**
   * @deprecated Use `rebuildWidget`, which returns the widget as DATA and lets
   * f0 draw it — a preview rendered by the app has to reproduce `SlotWidget` by
   * hand, and drifts from the column the moment either side changes. Ignored
   * when `rebuildWidget` is given.
   */
  renderWidgetPreview?: (
    widget: HomeWidgetItem,
    params: WidgetParams
  ) => ReactNode
  /** Content width the params dialog previews a widget at. */
  paramsPreviewWidth?: number
  /**
   * The copy of the remove item in a widget's menu. Defaults to the PROVIDER's
   * (`t.widgets.removeWidget`) — override it only for a column that means
   * something more specific by removing.
   */
  removeLabel?: string
  /** The copy of the params item. Defaults to `t.widgets.editParams`. */
  editParamsLabel?: string
  ctx?: HomeRenderCtx
  className?: string
  style?: CSSProperties
}

/**
 * WidgetContainer — one column of Home widgets, and the only thing that knows
 * how a column is arranged.
 *
 * It renders its `children` (freeform content) followed by each widget through
 * `SlotWidget`, ending in an "Add widget" placeholder. THERE IS NO EDIT MODE:
 * every widget is draggable (the whole card, no handle) and carries "Remove
 * widget" in its own overflow menu, so rearranging a Home is something you just
 * do rather than something you switch into. `disableEdition` opts a column out
 * of all of it, placeholder included.
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
  disableEdition = false,
  disableDrag = false,
  onRemoveWidget,
  onClickAddNewWidget,
  onReorder,
  visibleWidgetId,
  entrance = {},
  virtualized = false,
  stow,
  addWidgetLabel,
  onChangeWidgetParams,
  rebuildWidget,
  renderWidgetPreview,
  paramsPreviewWidth,
  removeLabel,
  editParamsLabel,
  ctx = {},
  className,
  style,
}: WidgetContainerProps) {
  const t = useI18n()
  const canEdit = !disableEdition
  const isHidden = (widget: HomeWidgetItem) =>
    visibleWidgetId !== undefined && widget.id !== visibleWidgetId
  /**
   * WHETHER THERE IS AN ARRANGEMENT TO MAKE — two widgets that can actually
   * move, not merely two widgets. A column of one free card among pinned ones
   * has a single legal order, so its card is given no grab cursor and no drag:
   * offering a gesture whose every outcome is the arrangement you already have
   * is offering a refusal.
   */
  const canDrag =
    canEdit &&
    onReorder != null &&
    widgets.filter((widget) => !widget.locked).length > 1
  // The widget being dragged: its in-list card hides while a copy of it rides
  // the pointer in the DragOverlay (see below).
  const [activeId, setActiveId] = useState<string | null>(null)
  // A small activation distance so a press on a widget still reads as a press
  // rather than the start of a drag — the sensor itself already refuses to
  // start one from anything operable inside the card.
  const sensors = useSensors(
    useSensor(WidgetDragSensor, { activationConstraint: { distance: 4 } })
  )
  // Which widget's params are being edited, if any — the dialog is the column's
  // (one at a time), not one mounted per card.
  const [editingParamsId, setEditingParamsId] = useState<string | null>(null)
  const editingParams = widgets.find((w) => w.id === editingParamsId)
  // Which widget is showing its back. One at a time: two cards mid-turn in the
  // same column is a fairground, not an explanation.
  const [flippedId, setFlippedId] = useState<string | null>(null)
  const columnRef = useRef<HTMLDivElement>(null)
  /** The static copy of the dragged card that rides the pointer — {@link takeCardGhost}. */
  const ghostRef = useRef<HTMLElement | null>(null)
  /**
   * HOW FAR UP THE CARD BEING DRAGGED MAY GO, measured when the drag starts and
   * null the rest of the time — see `lockedCeiling`.
   */
  const ceilingRef = useRef<number | null>(null)
  /**
   * The dragged card goes up and down only (`verticalOnly`), and no higher than
   * the widgets pinned to the top of the column (`noHigherThan`).
   *
   * Built ONCE: dnd-kit reads this on every pointer move, and a fresh array each
   * render is a fresh dependency for it — which is why the ceiling arrives
   * through a ref instead of being baked into the modifier.
   */
  const modifiers = useMemo(
    () => [verticalOnly, noHigherThan(() => ceilingRef.current)],
    []
  )

  const takeGhost = (id: string) => {
    ghostRef.current = takeCardGhost(
      columnRef.current?.querySelector(`[data-widget-id="${id}"]`)
    )
  }

  /** Puts the copy in the overlay dnd-kit positions for us. */
  const mountGhost = (host: HTMLDivElement | null) => {
    if (host && ghostRef.current) host.replaceChildren(ghostRef.current)
  }
  /**
   * WHICH WIDGETS ARE WORTH HAVING IN THE DOM — every one of them unless this
   * column is virtualized. See `useWidgetVirtualizer`.
   */
  const virtual = useWidgetVirtualizer({
    config: virtualized === true ? {} : virtualized,
    count: widgets.length,
    gap: GAP_PX[side],
    // The card UNDER THE POINTER stays mounted for the whole gesture whatever the
    // column scrolls past: dnd-kit holds the node it is dragging, and taking that
    // out from under it mid-drag ends the drag rather than the drop.
    pinned: activeId ? [widgets.findIndex((w) => w.id === activeId)] : [],
    // A CONTAINER SHOWING ONE WIDGET IS NOT A COLUMN. `visibleWidgetId` is the
    // floating panel, a box around a single card, so there is no viewport for the
    // rest to be on screen of and nothing to place them against — the one widget
    // it shows simply flows (see `panelOnly`).
    paused: visibleWidgetId !== undefined,
  })
  /**
   * PANEL MODE, IN A VIRTUALIZED COLUMN: the widget the panel floats is the only
   * one there is to see, so it is the only one MOUNTED.
   *
   * An unvirtualized container keeps the rest mounted and merely hides them, which
   * is what makes the collapsed rail lossless — hover a glyph and the card that
   * comes out is the one that was already there, still loaded, still counting. A
   * virtualized column has given that up by definition (scroll a card away and it
   * unmounts), so keeping forty hidden cards in the DOM for a panel that shows one
   * would be the cost of the guarantee without the guarantee.
   */
  const panelOnly = virtualized !== false && visibleWidgetId !== undefined
  /**
   * The LOCKED widget a drop was aiming at, if any — the reason it is about to be
   * refused.
   *
   * Hit-tested against the DOM rather than taken from dnd-kit: a locked widget is
   * not a droppable (that is what keeps other widgets from displacing it), so
   * dnd-kit never reports it as `over`, and without this the refusal would have no
   * name to give.
   *
   * "AIMING AT IT" is the card covering more than half of it — the dragged card's
   * box straddling the locked card's midline. That is the geometry of taking a
   * slot, and unlike the two obvious tests it does not depend on where the card
   * happened to be grabbed:
   *
   * - The dragged card's own MIDDLE is unreachable for a tall widget over a card
   *   near the top of the column: it would have to hang off the top of the window.
   * - The POINTER misses the ordinary gesture. Grab a 414px card 250px down, carry
   *   it up until it visibly sits in the first slot, and the pointer is still 30px
   *   BELOW the pinned card — the grab offset went with it.
   *
   * The pointer is still worth asking about, for the opposite grab: held near its
   * bottom edge, the card can cover the locked one while hanging off the top of the
   * viewport, and then the pointer is the only thing left inside it.
   */
  const lockedTargetOf = ({ activatorEvent, delta, active }: DragEndEvent) => {
    const dragged = active.rect.current.translated
    const start = activatorEvent as Partial<
      Pick<globalThis.PointerEvent, "clientX" | "clientY">
    >
    const x = start.clientX == null ? null : start.clientX + delta.x
    const y = start.clientY == null ? null : start.clientY + delta.y
    // THE PINS AT THE TOP WERE NEVER REACHABLE: the drag was held below them
    // (`noHigherThan`), so the card cannot have covered one, and refusing the
    // drop because the POINTER strayed up into one would refuse a card that is
    // sitting in the highest slot it was allowed to reach. Only when the ceiling
    // could not be measured at all does the card get up there, and then the
    // refusal is again the only thing that explains the spring back.
    const unreachable = ceilingRef.current == null ? [] : topPins(widgets)

    return widgets.find((widget) => {
      if (!widget.locked || unreachable.includes(widget)) return false
      const box = columnRef.current
        ?.querySelector(`[data-widget-id="${widget.id}"]`)
        ?.getBoundingClientRect()
      if (!box) return false

      const midline = box.top + box.height / 2
      const covered =
        !!dragged && dragged.top <= midline && dragged.bottom >= midline
      const pointedAt =
        x != null &&
        y != null &&
        x >= box.left &&
        x <= box.right &&
        y >= box.top &&
        y <= box.bottom

      return covered || pointedAt
    })
  }
  /**
   * ONE MENU PER WIDGET, in the order it reads:
   *
   * 1. THE WIDGET'S OWN `actions` — what this particular widget does ("Mark all
   *    as read", "Export"). They come first because they are the reason a user
   *    opens the menu; the rest is chrome every widget has.
   * 2. What it is telling you (`header.info`), and what it can be configured into.
   * 3. Removing it, behind a separator, because it is the one that cannot be
   *    undone.
   *
   * A LOCKED widget can still act and still be configured — mandatory says
   * nothing about fixed — it just isn't offered removal. A widget offered nothing
   * at all gets no menu, rather than an empty one.
   */
  const menuItems = (widget: HomeWidgetItem): DropdownItem[] => {
    const items: DropdownItem[] = [...(widget.actions ?? [])]
    // What the widget is telling you, if it says. Its copy is the PROVIDER's
    // (`t.widgets.whatThisMeans`), not this column's: the question a user asks of
    // a widget is the same question in every product that ships one.
    if (resolveWidgetHeader(widget.header, widget.params)?.info)
      items.push({
        label: t.widgets.whatThisMeans,
        icon: InfoCircleLine,
        onClick: () => setFlippedId(widget.id),
      })
    if (widget.paramsSchema && onChangeWidgetParams)
      items.push({
        label: editParamsLabel ?? t.widgets.editParams,
        icon: Sliders,
        onClick: () => setEditingParamsId(widget.id),
      })
    if (canEdit && !widget.locked && onRemoveWidget) {
      // A separator only when there is something to separate it FROM — a menu
      // that opens on a rule reads as if an item failed to render.
      if (items.length > 0) items.push({ type: "separator" })
      items.push({
        label: removeLabel ?? t.widgets.removeWidget,
        icon: Delete,
        critical: true,
        onClick: () => onRemoveWidget(widget.id),
      })
    }
    return items
  }
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    // A DROP ON A LOCKED WIDGET is refused, and says so. Silence was the old
    // behaviour and it read as a bug: the card sprang back with no reason given.
    const blocking = lockedTargetOf(event)
    if (blocking) {
      toasts.open({
        variant: "warning",
        title: t.widgets.cannotMoveHere.replace(
          "{{title}}",
          widgetTitle(blocking)
        ),
      })
      return
    }
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
    drag?: { isDragging: boolean },
    /** Params to draw it with instead of its own — the params dialog's preview. */
    params: WidgetParams | undefined = widget.params
  ) => {
    const items = menuItems(widget)
    // The default render puts the menu where the frame keeps its own overflow
    // menu — the header's top-right — rather than laying a control over the card.
    if (!renderWidget)
      return (
        <SlotWidget
          {...widgetChrome(widget)}
          header={widget.header}
          params={params}
          fullHeight={widget.fullHeight}
          slots={widget.slots}
          loading={widget.loading}
          slotRenderers={slotRenderers}
          ctx={ctx}
          actions={items.length > 0 ? items : undefined}
          flipped={flippedId === widget.id}
          onFlipBack={() => setFlippedId(null)}
          isDragging={drag?.isDragging}
        />
      )
    const node = renderWidget(widget, ctx)
    if (items.length === 0) return node
    // A CUSTOM render has no header for the menu to live in, so the column puts
    // one over the card, in the same corner the frame would have drawn it.
    return (
      <div className="relative">
        {node}
        <div className="absolute right-3 top-3 z-10">
          <DropdownInternal items={items} align="end">
            <F0Button
              icon={Ellipsis}
              label="Actions"
              variant="ghost"
              size="sm"
              hideLabel
            />
          </DropdownInternal>
        </div>
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
   * The stow as it applies to ONE widget. The widget the panel is currently
   * floating is the exception: it is the only one at full size while the rail is
   * collapsed, and it must simply BE there — the panel animates its own arrival
   * out of the glyph, and a card growing inside a panel that is already growing is
   * the same gesture played twice.
   */
  const stowOf = (widget: HomeWidgetItem): WidgetStow | undefined =>
    stow && {
      ...stow,
      stowed: stow.stowed && widget.id !== visibleWidgetId,
      instant: stow.stowed,
    }

  /**
   * Wraps one widget in everything it does that isn't its content. With no
   * arrival and no stow it hands the widget back untouched — a wrapper that has
   * nothing to do must not leave a box behind, because that box is the flex item
   * the widget itself would have been.
   */
  const enter = (order: number, node: ReactNode, widget?: HomeWidgetItem) => {
    const widgetStow = widget ? stowOf(widget) : undefined
    if (!arrival && !widgetStow) return node
    return (
      <WidgetMotion
        arrival={
          arrival
            ? {
                order: (arrival.order ?? 0) + order,
                delayMs: arrival.delayMs ?? 0,
                arriving: !arrived,
              }
            : undefined
        }
        stow={widgetStow}
        fullHeight={widget?.fullHeight}
      >
        {node}
      </WidgetMotion>
    )
  }

  /**
   * ONE WIDGET, wherever the column is drawing it. Both branches below render
   * this, so becoming draggable (a second widget lands in the column) changes what
   * is AROUND the widgets and not the widgets themselves.
   */
  const slot = (
    widget: HomeWidgetItem,
    order: number,
    placement?: WidgetPlacement
  ) => (
    <WidgetSlot
      key={widget.id}
      hidden={isHidden(widget)}
      placement={placement}
      measureRef={virtual.measureRef}
    >
      {canDrag ? (
        // FROZEN, NOT UNWRAPPED (`disableDrag`): the sortable stays, and with it
        // this widget's render — a card that stopped being draggable by leaving
        // the sortable behind would be built again from nothing.
        <SortableWidget id={widget.id} disabled={widget.locked || disableDrag}>
          {/* The arrival wrapper sits INSIDE the sortable rather than around it:
              dnd-kit measures the element it holds the ref to, and a transformed
              ancestor would offset every rect it reads while a drag is in
              flight. */}
          {(state) => enter(order, render(widget, state), widget)}
        </SortableWidget>
      ) : (
        enter(order, render(widget), widget)
      )}
    </WidgetSlot>
  )

  /**
   * THE WIDGETS. Virtualized, the ones the window asks for, each placed where its
   * unmounted neighbours would have put it, in a box as tall as the whole column;
   * otherwise all of them, in flow.
   *
   * The element is THE SAME either way, down to its classes — which is what lets a
   * container stop virtualizing (the panel opening) without remounting a card.
   * Its own `gap` is inert while the cards are placed, and does the spacing while
   * they are not.
   */
  const list = (
    <div
      ref={virtual.listRef}
      className={cn("flex flex-col", side === "main" ? "gap-6" : "gap-4")}
      style={
        virtual.window
          ? {
              // THE HEIGHT OF THE COLUMN THAT WOULD BE, so the scrollbar
              // describes all the widgets rather than the three that are
              // mounted — and `relative` so the placed cards are placed from
              // this box's top rather than the column's.
              position: "relative",
              height: virtual.window.totalSize,
            }
          : undefined
      }
    >
      {virtual.window
        ? virtual.window.placements.map((placement) =>
            slot(widgets[placement.index], placement.index, placement)
          )
        : widgets.flatMap((widget, order) =>
            panelOnly && widget.id !== visibleWidgetId
              ? []
              : [slot(widget, order)]
          )}
    </div>
  )

  return (
    <div
      ref={columnRef}
      className={cn(
        // `relative` so this column is what a widget's `offsetTop` is measured
        // from: the stow maps a widget onto its glyph by that offset, and an
        // unpositioned column would hand the job to whatever ancestor happened to
        // be positioned instead (see `WidgetMotion`).
        "relative flex flex-col [&_*]:shadow-none",
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
          // The card the pointer carries goes up and down only, like the
          // shuffle underneath it, and it stops at the widgets pinned to the top
          // of the column — see `verticalOnly` and `lockedCeiling`.
          modifiers={modifiers}
          onDragStart={({ active }) => {
            // BEFORE the card is told it is being dragged: what the ghost
            // should look like — and where the pinned cards are — is what is on
            // screen right now, while nothing has moved yet.
            takeGhost(String(active.id))
            ceilingRef.current = lockedCeiling(
              widgets,
              columnRef.current,
              GAP_PX[side]
            )
            setActiveId(String(active.id))
          }}
          onDragCancel={() => {
            setActiveId(null)
            ghostRef.current = null
            ceilingRef.current = null
          }}
          onDragEnd={(event) => {
            setActiveId(null)
            ghostRef.current = null
            // The ceiling outlives the drag by one call: whether the card was
            // held below the pins is what decides whether a drop up there is
            // worth refusing out loud (`lockedTargetOf`).
            handleDragEnd(event)
            ceilingRef.current = null
          }}
        >
          {/* EVERY WIDGET'S ID, mounted or not: the order a drop commits is the
              column's own, and a sortable that only knew about the cards in view
              would reorder the slice instead of the list. dnd-kit takes the
              missing ones in its stride — it has no rect for a card that isn't
              there, so it moves the ones that are. */}
          <SortableContext
            items={widgets.map((widget) => widget.id)}
            strategy={verticalListSortingStrategy}
          >
            {list}
          </SortableContext>
          {/* ONE CURSOR FOR THE WHOLE GESTURE. The pointer is not always over
              the card it is carrying: the card stops at the pinned widgets
              (`lockedCeiling`) while the pointer keeps going, and the moment it
              leaves the card it is over whatever lies beneath — a pinned widget,
              a link inside it, the page — and the cursor becomes that thing's.
              A hand that turns into an arrow reads as the drag having ended, or
              as the pointer having lost the card; neither happened, and the drag
              is still live and still refusing to go up.

              So while a drag is in flight the pointer is over THIS: a sheet the
              size of the viewport whose only job is to own the cursor. It sits
              under the DragOverlay (z-999 there, so the card stays on top) and
              over everything else, and it takes the hover states of the cards
              beneath it out of the gesture too, which is the same argument.

              dnd-kit is unaffected: its sensor listens on the document, and the
              column's collision detection is rect-based (`closestCenter`), so
              nothing here depends on which element the pointer is over. */}
          {activeId ? (
            <div
              aria-hidden
              data-drag-cursor
              className="fixed inset-0 z-50 cursor-grabbing"
            />
          ) : null}
          {/* The card that follows the pointer is a COPY of the real one's DOM
              (`takeGhost`) in an overlay — the in-list card hides meanwhile
              (SortableWidget). On release the copy GLIDES from where it was
              dropped into its final slot (dropAnimation), which is what makes
              the drop soft: without the overlay, committing the reorder snaps
              the real card's DOM slot and transform in one frame. */}
          <DragOverlay dropAnimation={DROP_ANIMATION}>
            {activeId ? (
              // Solid backdrop: Card's own background is translucent, and the
              // copy rides over whatever the column shows beneath it.
              <div
                ref={mountGhost}
                className="h-full w-full cursor-grabbing rounded-xl bg-f1-background [&_*]:shadow-none"
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      ) : (
        list
      )}
      {/* Adding, like removing and reordering, is always on offer.
          `disableEdition` columns never offer any of it. */}
      {!disableEdition && onClickAddNewWidget
        ? enter(
            widgets.length,
            <AddWidgetPlaceholder
              onClick={onClickAddNewWidget}
              label={addWidgetLabel ?? t.widgets.addWidget}
            />
          )
        : null}
      {/* "Edit params". ONE dialog for the column, keyed by the widget it is
          editing so switching widgets starts a fresh form rather than carrying
          the last one's values into it. */}
      {editingParams?.paramsSchema && onChangeWidgetParams ? (
        <WidgetUpdateDialog
          key={editingParams.id}
          isOpen
          onClose={() => setEditingParamsId(null)}
          schema={editingParams.paramsSchema}
          params={editingParams.params}
          // The widget's own info, under the preview and rewritten as the fields
          // change — the same sentence its info side would show.
          info={editingParams.header?.info}
          previewWidth={paramsPreviewWidth}
          // The preview is the WIDGET, drawn with the params being tried out —
          // so whatever they derive (its title, its info) is what you watch
          // change. Its slots can only follow if the app rebuilds them.
          //
          // Every branch ends in this column's OWN `render`, so the preview is
          // the card: `rebuildWidget` only changes what data goes in. The
          // deprecated `renderWidgetPreview` is the one that steps outside it.
          renderPreview={(params) =>
            rebuildWidget
              ? render(rebuildWidget(editingParams, params), undefined, params)
              : renderWidgetPreview
                ? renderWidgetPreview(editingParams, params)
                : render(editingParams, undefined, params)
          }
          onSave={(params) => onChangeWidgetParams(editingParams.id, params)}
        />
      ) : null}
    </div>
  )
}
