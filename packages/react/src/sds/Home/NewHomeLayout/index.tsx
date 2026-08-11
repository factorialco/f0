import {
  Children,
  type CSSProperties,
  forwardRef,
  Fragment,
  isValidElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import { AnimatePresence, motion } from "motion/react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import Menu from "@/icons/app/Menu"
import { Check, Pencil } from "@/icons/app"
import { useSidebar } from "@/patterns/ApplicationFrame/FrameProvider"
import { SidebarIconSvg } from "@/patterns/Navigation/Sidebar/Icon"
import { Action } from "@/ui/Action"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

import {
  entranceDelay,
  entranceTransition,
  GENIE_GLYPH_ENTER_SCALE,
  GENIE_GLYPH_EXIT_SCALE,
  GENIE_GLYPH_HOVER_SCALE,
  GENIE_GLYPH_OPEN_SCALE,
  GENIE_GLYPH_TAP_SCALE,
  GENIE_ORIGIN,
  GENIE_RETRACTED_OFFSET_PX,
  GENIE_RETRACTED_SCALE,
  genieCloseTransition,
  glyphTransition,
  HomeEntrance,
  RIGHT_AREA_DELAY_MS,
  withReducedMotion,
} from "../home-motion"
import { SlotWidget } from "../SlotWidget"
import { useRailMotion } from "./useRailMotion"
import { useScrollFade } from "../useScrollFade"
import { WidgetContainer, type WidgetContainerSide } from "../WidgetContainer"
import {
  type HomeRenderCtx,
  type HomeWidgetItem,
  type SlotRenderers,
} from "../slotRenderers"

/**
 * The DaytimePage gradient wash, by period — the same stops and the same 8%
 * opacity, so Home and the daytime header read as one surface.
 */
const GRADIENTS = {
  morning:
    "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
  afternoon:
    "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
  evening:
    "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%",
} as const
export type HomePeriod = keyof typeof GRADIENTS

const GradientWash = ({
  period,
  className,
}: {
  period: HomePeriod
  className?: string
}) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
      GRADIENTS[period],
      className
    )}
  />
)

/** Collapsed-rail geometry (mirrors the prototype's railMode). */
const COLLAPSED_RAIL_WIDTH = 40

/**
 * One widget as the collapsed strip shows it: its own catalog glyph, standing in
 * for the whole card.
 *
 * It ARRIVES FROM LARGER THAN LIFE — the card that just shrank into it — and
 * leaves the other way, blooming back out into the card it becomes. While its
 * widget is floating it holds itself slightly forward, so the glyph and the panel
 * read as one object rather than a button and a popover.
 */
const CollapsedGlyph = ({
  widget,
  order,
  open,
  delayMs,
  onOpen,
  onClose,
}: {
  widget: HomeWidgetItem
  /** Place in the strip's stagger. */
  order: number
  open: boolean
  /** When this strip's first glyph starts arriving. */
  delayMs: number
  onOpen: (id: string, anchor: HTMLElement) => void
  onClose: () => void
}) => {
  const reducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      aria-label={widget.header?.title ?? widget.id}
      aria-expanded={open}
      onMouseEnter={(event) => onOpen(widget.id, event.currentTarget)}
      onClick={(event) =>
        open ? onClose() : onOpen(widget.id, event.currentTarget)
      }
      className="rounded-lg"
      initial={{
        opacity: 0,
        scale: reducedMotion ? 1 : GENIE_GLYPH_ENTER_SCALE,
      }}
      animate={{ opacity: 1, scale: open ? GENIE_GLYPH_OPEN_SCALE : 1 }}
      exit={{ opacity: 0, scale: reducedMotion ? 1 : GENIE_GLYPH_EXIT_SCALE }}
      whileHover={
        reducedMotion ? undefined : { scale: GENIE_GLYPH_HOVER_SCALE }
      }
      whileTap={reducedMotion ? undefined : { scale: GENIE_GLYPH_TAP_SCALE }}
      transition={withReducedMotion(
        { ...glyphTransition, delay: entranceDelay(order, delayMs) },
        reducedMotion
      )}
    >
      {/* Same accent dot HomeListItem uses for unread rows. */}
      <span className="relative inline-flex">
        {widget.icon ? (
          <F0AvatarIcon icon={widget.icon} size="lg" />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background font-medium text-f1-foreground-secondary">
            {(widget.header?.title ?? widget.id).charAt(0)}
          </span>
        )}
        {widget.hasUpdates ? (
          // Same dot HomeListItem draws for unread rows — the ring keeps it
          // legible over any glyph.
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" />
        ) : null}
      </span>
    </motion.button>
  )
}

/**
 * The columns scroll without showing a bar — the scroll-aware fades already
 * hint at overflowed content, so a bar is just noise on the gradient.
 */
const SCROLLBAR_HIDDEN = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
const COLUMN_GAP_PX = 16
/** Tailwind's `md` — below it the layout is one column unless the rail is collapsed. */
const TWO_COLUMN_MIN_PX = 768
const PANEL_LEAVE_MS = 150
/** How far the floating panel clears the strip it comes out of. */
const PANEL_GAP_PX = 8

export interface NewHomeLayoutProps {
  /** Freeform main-column content on top (greeting, shortcut cards, ranked feed…). */
  children?: ReactNode
  /** Main column: widget slots stacked below `children`. */
  leftWidgets?: HomeWidgetItem[]
  /** Side rail: spec-conforming widgets. */
  rightWidgets?: HomeWidgetItem[]
  /** Freeform side-rail content, rendered above `rightWidgets` (expanded rail only). */
  aside?: ReactNode
  /** Per-visualization renderers, MERGED OVER the kit's `defaultSlotRenderers`. */
  slotRenderers?: SlotRenderers
  /** Full override of how a whole widget is drawn. Defaults to `SlotWidget`. */
  renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode
  /**
   * Edit mode. Omit it and the layout owns the state itself, toggled by its own
   * edit button; pass it to drive edit mode from outside.
   */
  editing?: boolean
  /** Called when the layout's edit button is pressed. */
  onEditingChange?: (editing: boolean) => void
  /**
   * Which containers a user may actually edit. In edit mode only these show
   * remove controls and the add placeholder; the others stay put. Both by default.
   */
  editableWidgetContainers?: WidgetContainerSide[]
  /** Called with a widget id when its remove control is clicked (edit mode only). */
  onRemoveWidget?: (id: string) => void
  /** When set, renders a "+ Add widget" affordance at the bottom of each column. */
  onClickAddNewWidget?: (side: WidgetContainerSide) => void
  /** Called with a side and its widget ids in their new order after a drag. */
  onReorderWidgets?: (side: WidgetContainerSide, ids: string[]) => void
  /** The daytime gradient period for the page surface. */
  period?: HomePeriod
  /** Fixed px width of the side rail. */
  asideWidth?: number
  /** Max px width of the (centered) main-column content. */
  mainWidth?: number
  /**
   * How far the page surface reaches past this layout's box, in px — set it to
   * the page's own gutter so the gradient runs to the window's edges instead of
   * stopping at that padding. The layout's HEIGHT is not its business: that
   * comes from the box the page gives it.
   */
  bleed?: number
  /**
   * When the layout stacks (below `md` there is no rail), how many leading
   * blocks of `children` come before the pinned widgets folded in from it.
   * Defaults to 2 — a greeting and the shortcuts under it.
   */
  stackedPinsAfter?: number
  ctx?: HomeRenderCtx
  className?: string
}

/**
 * NewHomeLayout — the shell for the redesigned Home, modelled on the custom-home
 * prototype's Feed page.
 *
 * A growing MAIN column (content capped to a centered `mainWidth`) next to a
 * FIXED-width side rail, separated only by a gap — no divider. The WHOLE page
 * sits on one full-bleed DaytimePage gradient (`period`): neither column paints
 * a background, so the wash runs under both and across the gap, out to the
 * window's edges. Below `md` everything stacks into one column, main first.
 *
 * WHEN THE LAYOUT IS TOO NARROW for both columns at full width (but still two
 * columns), the rail COLLAPSES: one `lg` avatar per widget carrying that
 * widget's own catalog `icon`. Hovering (or clicking) an avatar floats the SAME
 * widget render out over the feed at the rail's expanded width — one render,
 * two states, exactly like the prototype.
 */
export const NewHomeLayout = forwardRef<HTMLDivElement, NewHomeLayoutProps>(
  function NewHomeLayout(
    {
      children,
      leftWidgets = [],
      rightWidgets = [],
      aside,
      slotRenderers,
      renderWidget,
      editing,
      onEditingChange,
      editableWidgetContainers = ["main", "right"],
      onRemoveWidget,
      onClickAddNewWidget,
      onReorderWidgets,
      period = "morning",
      asideWidth = 396,
      mainWidth = 800,
      bleed = 24,
      stackedPinsAfter = 2,
      ctx = {},
      className,
    },
    ref
  ) {
    const { sidebarState, toggleSidebar, isSmallScreen } = useSidebar()
    const reducedMotion = useReducedMotion()
    const rootRef = useRef<HTMLDivElement | null>(null)
    const [rootWidth, setRootWidth] = useState(0)
    // Hover state of the collapsed strip: which widget floats, and where.
    const [openId, setOpenId] = useState<string | null>(null)
    const [panelTop, setPanelTop] = useState(0)
    // Whether the panel should GLIDE to `panelTop` or simply be there — see
    // `openFromAnchor`.
    const [panelGlide, setPanelGlide] = useState(false)
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    // The rail collapses when the grid can't give both columns their width —
    // measured (clientWidth is a layout metric), not media-queried, because
    // what decides it is the room THIS layout has.
    useLayoutEffect(() => {
      const el = rootRef.current
      if (!el) return
      const read = () => setRootWidth(el.clientWidth)
      read()
      if (typeof ResizeObserver !== "function") return
      const observer = new ResizeObserver(read)
      observer.observe(el)
      return () => observer.disconnect()
    }, [])

    // WE HAVE A WIDTH, and once we have had one we always have one: a hidden
    // container reports `clientWidth` 0, and letting that put the layout back to
    // "unmeasured" would tear the rail down and rebuild every widget in it when
    // it came back — the one thing this layout exists to prevent. Adjusting it
    // during the render that first sees a width, rather than from an effect, keeps
    // it from lagging a paint behind the measurement.
    const [hasMeasured, setHasMeasured] = useState(false)
    if (rootWidth > 0 && !hasMeasured) setHasMeasured(true)

    // Uncontrolled by default: the layout's own edit button drives it. Passing
    // `editing` hands control to the caller.
    const [editingState, setEditingState] = useState(false)
    const [manualCollapsed, setManualCollapsed] = useState<boolean | null>(null)
    const isEditing = editing ?? editingState
    const toggleEditing = () => {
      const next = !isEditing
      if (editing === undefined) setEditingState(next)
      onEditingChange?.(next)
    }
    const canEditSide = (side: WidgetContainerSide) =>
      editableWidgetContainers.includes(side)

    const render = (widget: HomeWidgetItem) => {
      const node = renderWidget ? (
        renderWidget(widget, ctx)
      ) : (
        <SlotWidget
          header={widget.header}
          fullHeight={widget.fullHeight}
          slots={widget.slots}
          loading={widget.loading}
          slotRenderers={slotRenderers}
          ctx={ctx}
        />
      )
      return node
    }

    // EACH COLUMN SCROLLS ITSELF: the grid is bounded to the viewport minus the
    // gutter it sits in, and each column takes its own overflow inside it. Both
    // fade at an end only while content is really hidden past it (see
    // `useScrollFade`), so nothing is masked before you scroll or once you have
    // reached the end.
    const mainFade = useScrollFade()
    const railFade = useScrollFade()

    const hasSide =
      aside != null || rightWidgets.length > 0 || onClickAddNewWidget != null
    // Two reasons the rail collapses, and they don't compete: there ISN'T ROOM
    // for both columns, or you ASKED for the space. Narrowness always wins —
    // expanding by hand can't conjure room the layout doesn't have — so the
    // manual choice only decides while both would fit.
    const autoCollapsed =
      rootWidth > 0 && rootWidth < mainWidth + COLUMN_GAP_PX + asideWidth
    const collapsed =
      hasSide &&
      rightWidgets.length > 0 &&
      (autoCollapsed || (manualCollapsed ?? false))
    const railWidth = collapsed ? COLLAPSED_RAIL_WIDTH : asideWidth
    // NOTHING ON THE RIGHT UNTIL THE BOX HAS BEEN MEASURED. Which presentation the
    // rail is in — column, strip, or nothing at all — is decided entirely by the
    // width, so drawn before there is one its first state is a guess the next
    // render corrects, and motion animates corrections (see `useRailMotion`).
    // Waiting costs nothing visible: the measurement lands in a layout effect, so
    // this is one render later, not one paint later.
    const sideReady = hasSide && hasMeasured

    // STACKED (below `md`): there is no rail at all, not even the strip — the
    // window is too narrow to spend 40px on a column. The rail's widgets fold
    // into the main column instead: the PINNED ones near the top, where a
    // mandatory widget belongs, and the rest at the very bottom.
    const stacked = rootWidth > 0 && rootWidth < TWO_COLUMN_MIN_PX
    const loosePins = {
      pinned: stacked ? rightWidgets.filter((widget) => widget.locked) : [],
      rest: stacked ? rightWidgets.filter((widget) => !widget.locked) : [],
    }
    // The pins go BETWEEN blocks of `children` — after `stackedPinsAfter` of
    // them — because "just under the shortcuts" is a place inside content this
    // layout doesn't own. Splitting the children is the only way to reach it.
    const childBlocks = Children.toArray(children)
    const mainBlocks = !stacked
      ? childBlocks
      : [
          ...childBlocks.slice(0, stackedPinsAfter),
          ...loosePins.pinned.map((widget) => (
            <Fragment key={widget.id}>{render(widget)}</Fragment>
          )),
          ...childBlocks.slice(stackedPinsAfter),
        ]
    // ARRIVAL, in reading order: each block of the main column rises in one beat
    // after the one above it, and the widgets under them (the container's own
    // `entrance.order`) carry the same count on rather than restarting it — a
    // widget below the feed arrives AFTER the feed, not alongside it.
    //
    // Each block keeps the key `Children.toArray` gave it, so the wrapper is
    // identified by the block it wraps: keyed by index instead, reordering the
    // content would re-key every wrapper below the change and replay its entrance.
    const mainChildren = mainBlocks.map((block, order) => (
      <HomeEntrance
        key={isValidElement(block) && block.key != null ? block.key : order}
        order={order}
      >
        {block}
      </HomeEntrance>
    ))

    const openWidget = collapsed
      ? rightWidgets.find((widget) => widget.id === openId)
      : undefined

    // Nothing floats out of an EXPANDED rail, so the hover is dropped as soon as
    // the rail opens up: kept, it would reopen whatever was last hovered the
    // moment the layout narrowed again.
    useEffect(() => {
      if (!collapsed) setOpenId(null)
    }, [collapsed])

    // How the rail moves, and the one number the grid template reads. The genie
    // lives in there; the geometry it moves through stays here.
    const rail = useRailMotion({
      collapsed,
      open: openWidget != null,
      glide: panelGlide,
      drawn: sideReady,
      width: railWidth,
    })
    const railInPanel = rail.mode === "panel"

    /**
     * WHERE the rail body sits, in each of its presentations. `transformOrigin` is
     * the constant: the strip's corner is what every genie scale on this element is
     * taken from, whichever presentation it is in.
     */
    const railStyle: CSSProperties = railInPanel
      ? {
          transformOrigin: GENIE_ORIGIN,
          // `top` is fixed and the offset to the hovered glyph is a TRANSFORM
          // (`y`), so moving between glyphs composites instead of relaying the
          // panel out on every frame.
          top: 0,
          right: COLLAPSED_RAIL_WIDTH + PANEL_GAP_PX,
          width: asideWidth,
          // The panel grows to its widget, up to what is left below its glyph,
          // and scrolls past that.
          maxHeight: `calc(100% - ${panelTop}px)`,
          pointerEvents: openWidget ? undefined : "none",
        }
      : {
          transformOrigin: GENIE_ORIGIN,
          // Placed, not flowed: mid-collapse the strip is in this same cell, and
          // auto-placement would push one of them onto a row of its own.
          gridColumn: 2,
          gridRow: 2,
          // Mid-retract the column is already on its way down to the strip's
          // width, so the cards keep the width they had and hang off the cell's
          // left edge while they shrink into it — squeezed narrow on the way out,
          // the rail reads as crushed rather than stowed.
          ...(rail.mode === "retracting"
            ? { width: asideWidth, justifySelf: "end", pointerEvents: "none" }
            : null),
          ...railFade.style,
        }

    const cancelLeave = () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current)
      leaveTimer.current = null
    }
    const scheduleLeave = () => {
      cancelLeave()
      leaveTimer.current = setTimeout(() => setOpenId(null), PANEL_LEAVE_MS)
    }
    const openFromAnchor = (id: string, anchor: HTMLElement) => {
      cancelLeave()
      const root = rootRef.current
      if (root) {
        const top =
          anchor.getBoundingClientRect().top - root.getBoundingClientRect().top
        setPanelTop(Math.max(0, top))
      }
      // Opening from nothing, the panel APPEARS at its glyph, so it has to be
      // there before it fades in. Moving between glyphs while it is already open
      // is the opposite: there it GLIDES, and that glide is what says the panel
      // is one thing showing a different widget rather than two panels.
      setPanelGlide(openId != null)
      setOpenId(id)
    }

    return (
      <motion.div
        ref={(node) => {
          rootRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          // `isolate` so the surface layer's -z-10 stays INSIDE this layout
          // instead of escaping behind an ancestor's background.
          "relative isolate grid grid-rows-[auto_minmax(0,1fr)] items-stretch gap-4 text-f1-foreground",
          className
        )}
        style={
          {
            // The rail's column, as a motion value the grid template reads: the
            // template is a keyword list and cannot be interpolated, so the one
            // number in it is animated on its own.
            "--home-aside-w": rail.widthPx,
            // FILL THE BOX THE PAGE GIVES US, not the window. This used to be
            // `calc(100svh - 2 * bleed)`, which assumed the layout's box WAS the
            // viewport minus its own gutter — true only while nothing else is on
            // the page. Put anything above it (the frame's banner row, a page
            // header) and the layout still claimed the whole window: it overshot
            // by exactly that element's height, so the page itself scrolled and
            // the rail's bottom fell past the window's edge — the very overscroll
            // the columns' own scrolling exists to avoid.
            height: "100%",
            // The guard for a page that hands us NO definite height: `100%` then
            // resolves to auto, and without a cap the layout would grow with its
            // content and the columns would never scroll. The window (less our
            // gutter) is the most it can usefully be.
            maxHeight: `calc(100svh - ${2 * bleed}px)`,
            // The column template lives HERE rather than in a class: it is the
            // same property Tailwind's `grid-cols-*` sets, so as a utility it
            // lost the specificity contest and the rail silently fell out of its
            // column. A COLLAPSED rail is a column at any width — a 40px strip
            // always fits; an expanded one waits until there is room for both.
            // `!stacked` first: stacked renders no rail at all, so reserving its
            // column would leave an empty strip down the side.
            // The px fallback is what the column is worth before motion has
            // written the variable for the first time — an unresolvable `var()`
            // would invalidate the whole declaration and drop the rail's column
            // for that frame.
            gridTemplateColumns:
              sideReady &&
              !stacked &&
              (collapsed || rootWidth >= TWO_COLUMN_MIN_PX)
                ? `minmax(0, 1fr) var(--home-aside-w, ${railWidth}px)`
                : "minmax(0, 1fr)",
          } as CSSProperties
        }
      >
        {/* ONE full-bleed surface for the WHOLE page, under BOTH columns: the
            gradient reaches `bleed` past every edge, so it runs to the window
            instead of stopping at the page's own padding. Neither column paints
            a background of its own — the gradient shows through beneath them,
            including across the grid's gap. */}
        {/* `-z-10`: as a positioned element with auto z-index this OPAQUE layer
            painted over every non-positioned descendant — the collapsed strip's
            buttons were in place, opacity 1, and invisible under the page
            surface. A negative z-index puts the background where a background
            belongs: under everything in this (isolated) layout. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 overflow-hidden bg-f1-special-page"
          style={{ top: -bleed, bottom: -bleed, left: -bleed, right: -bleed }}
        >
          <GradientWash period={period} />
        </div>
        {/* The edit toggle sits in its OWN grid row spanning both columns, so it
            takes real layout space instead of floating over the widgets below.
            Entering edit mode is what makes `editableWidgetContainers` take
            effect (remove controls + the add placeholder appear in the
            containers it lists). */}
        {/* Chrome, not content: it arrives on the main column's first beat rather
            than waiting its turn behind it. */}
        <HomeEntrance
          order={0}
          className="col-span-full flex flex-row items-center justify-between"
        >
          {/* The main-menu trigger, on the same terms as `DaytimePage`: shown
              only when the sidebar isn't already there to be seen. */}
          {isSmallScreen || sidebarState === "hidden" ? (
            <F0Button
              variant="ghost"
              onClick={() => toggleSidebar()}
              label="Open main menu"
              icon={Menu}
              hideLabel
            />
          ) : (
            <span />
          )}
          <div className="flex flex-row items-center gap-2">
            {/* Not while the rail is collapsed: arranging widgets you cannot see
                is not an offer worth making. In edit mode the button becomes the
                primary action — a check to confirm — rather than staying the
                pencil that got you here. */}
            {collapsed ? null : (
              <F0Button
                variant={isEditing ? "default" : "ghost"}
                size="md"
                hideLabel
                icon={isEditing ? Check : Pencil}
                label={isEditing ? "Done editing" : "Edit Home"}
                onClick={toggleEditing}
              />
            )}
            {/* Collapsing the rail by hand — but only while that is a real
                choice. Once the layout is too narrow for both columns the rail
                is collapsed regardless, so a toggle there would be a control
                that does nothing. */}
            {hasSide && rightWidgets.length > 0 && !autoCollapsed ? (
              <Action
                variant="ghost"
                size="md"
                compact
                onClick={() => setManualCollapsed(!collapsed)}
                title={
                  collapsed ? "Expand widgets panel" : "Collapse widgets panel"
                }
                aria-label={
                  collapsed ? "Expand widgets panel" : "Collapse widgets panel"
                }
              >
                {/* The sidebar's own collapse glyph, so collapsing the rail and
                    collapsing the sidebar read as the same gesture. */}
                <SidebarIconSvg isExpanded={!collapsed} />
              </Action>
            ) : null}
          </div>
        </HomeEntrance>
        {/* Main column: its own scroll region, no mask — a reading column should
            not have the text you are reading dimmed at the edges.

            It BLEEDS through the page gutter: a negative vertical margin grows
            its box by the gutter at each end while an equal padding puts the
            content back on the line it was on. So the column's clip edge is the
            window's edge rather than the padding line — content scrolls off the
            screen instead of being cut short inside the page. */}
        <div
          ref={mainFade.ref}
          className={cn("relative min-h-0 overflow-y-auto", SCROLLBAR_HIDDEN)}
          style={{
            // Placed rather than flowed, because the strip and the rail body
            // BOTH want this row's second column and for a moment mid-collapse
            // both are in it. Auto-placement would push the second one onto a row
            // of its own; explicitly placed, they simply overlap — which is what
            // a handover between two presentations of the same rail should do.
            gridColumn: 1,
            gridRow: 2,
            marginTop: -bleed,
            marginBottom: -bleed,
            paddingTop: bleed,
            paddingBottom: bleed,
            ...mainFade.style,
          }}
        >
          <WidgetContainer
            side="main"
            className="relative mx-auto w-full"
            style={{ maxWidth: `${mainWidth}px` }}
            widgets={
              stacked ? [...leftWidgets, ...loosePins.rest] : leftWidgets
            }
            slotRenderers={slotRenderers}
            renderWidget={renderWidget}
            ctx={ctx}
            editing={isEditing}
            disableEdition={!canEditSide("main")}
            onReorder={
              onReorderWidgets
                ? (ids) => onReorderWidgets("main", ids)
                : undefined
            }
            onRemoveWidget={onRemoveWidget}
            onClickAddNewWidget={
              onClickAddNewWidget
                ? () => onClickAddNewWidget("main")
                : undefined
            }
            // The widgets pick the stagger up where the freeform blocks left it.
            entrance={{ order: mainChildren.length }}
          >
            {mainChildren}
          </WidgetContainer>
        </div>
        {/* AnimatePresence so the strip can LEAVE: expanding, each glyph blooms
            outward as the card it becomes grows in behind it. Without it the
            glyphs would simply be gone on the frame the rail opens, and the
            expand would read as a swap rather than as the reverse of the
            collapse. */}
        <AnimatePresence>
          {stacked || !sideReady || !collapsed ? null : (
            // The collapsed strip: one avatar per widget, the widget's own
            // catalog glyph. Hover/click floats the widget over the feed.
            // NO FADE HERE: the strip is a short column of 40px glyphs, and a
            // mask over those washes the glyphs themselves out rather than
            // hinting at content past an edge. The fade belongs to the expanded
            // rail, where the content is tall cards.
            // `-m-1 p-1`: the hasUpdates dot pokes 2px past the 40px glyphs,
            // and the scrollport would clip it — bleed the scrollport out by
            // 4px (padding puts the glyphs back) so the dot stays inside it.
            <motion.aside
              key="collapsed-strip"
              className={cn(
                // `items-start` so a glyph is 40px wide whatever the column is
                // doing: the strip lives in the rail's column, and that column
                // spends the collapse on its way DOWN from the full rail width —
                // stretched, the glyphs would start card-wide and shrink.
                "-m-1 flex min-h-0 flex-col items-start gap-2 overflow-y-auto p-1",
                SCROLLBAR_HIDDEN
              )}
              // Placed, not flowed — it shares this cell with the retracting rail
              // body for a moment (see the main column).
              style={{ gridColumn: 2, gridRow: 2 }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={withReducedMotion(
                genieCloseTransition,
                reducedMotion
              )}
              onMouseLeave={scheduleLeave}
              onMouseEnter={cancelLeave}
            >
              {rightWidgets.map((widget, order) => (
                <CollapsedGlyph
                  key={widget.id}
                  widget={widget}
                  order={order}
                  open={openId === widget.id}
                  delayMs={rail.glyphDelayMs}
                  onOpen={openFromAnchor}
                  onClose={() => setOpenId(null)}
                />
              ))}
              {/* Always offered, not only in edit mode: collapsed, the strip has
                    no edit affordance of its own, and adding a widget is the one
                    thing you would still want from it. */}
              {canEditSide("right") && onClickAddNewWidget ? (
                <motion.button
                  type="button"
                  aria-label="Add widget"
                  onClick={() => onClickAddNewWidget("right")}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-f1-border text-f1-foreground-secondary hover:text-f1-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={entranceTransition(
                    rightWidgets.length,
                    rail.glyphDelayMs,
                    reducedMotion
                  )}
                >
                  +
                </motion.button>
              ) : null}
            </motion.aside>
          )}
        </AnimatePresence>
        {/* THE RAIL BODY — one mount, whatever the rail is doing.

            Expanded it is the rail's column. Collapsed it is the FLOATING PANEL:
            the same element, taken out of the grid and put at the expanded rail
            width level with the hovered glyph, showing that one widget while the
            rest stay mounted beside it (`visibleWidgetId`).

            This used to be two trees — a container for the column and a second
            render of the open widget for the panel — and either one appearing or
            disappearing tore down every widget in it. Crossing the collapse
            threshold on a window resize, and every hover of a glyph, therefore
            built the rail's widgets again from nothing: a tile that had loaded
            went back to loading, a running clock restarted, an animation
            replayed. Presentation changes now move ONE render around instead of
            replacing it. (Stacked is the exception, and cannot be otherwise:
            below `md` the rail's widgets belong to the main column's flow,
            interleaved with content this layout doesn't own.) */}
        {stacked || !sideReady ? null : (
          <motion.aside
            ref={railFade.ref}
            // With nothing hovered there is no panel to see or to read out — but
            // its widgets stay mounted underneath, which is the whole point. It
            // waits for the retract, because `display: none` cannot be animated
            // out of: applied on the frame the rail collapses, it would delete the
            // cards instead of letting them go into the glyphs.
            hidden={railInPanel && rail.panelHidden}
            className={cn(
              "min-h-0 overflow-y-auto",
              SCROLLBAR_HIDDEN,
              // Above the feed it floats over, and opaque: the widget behind it
              // must not read through the card.
              railInPanel && "absolute z-10 rounded-xl bg-f1-background",
              // RETRACTING it is still in the grid, but it has lifted off the
              // column it is leaving: over the main column rather than beside it.
              rail.mode === "retracting" && "relative z-10"
            )}
            style={railStyle}
            // No mount animation of its own: the rail ARRIVES through its
            // widgets' stagger (`entrance` below), and a fade of the whole column
            // on top of that would be the same arrival animated twice.
            initial={false}
            animate={{
              opacity: rail.out ? 1 : 0,
              scale: rail.out ? 1 : GENIE_RETRACTED_SCALE,
              // Toward the strip while it shrinks, so it converges on the glyph
              // rather than just fading where it stood.
              x: rail.out ? 0 : GENIE_RETRACTED_OFFSET_PX,
              // Only the panel is offset from its own box; in the grid it sits
              // where the grid put it.
              y: railInPanel ? panelTop : 0,
            }}
            transition={rail.transition}
            onMouseEnter={collapsed ? cancelLeave : undefined}
            onMouseLeave={collapsed ? scheduleLeave : undefined}
          >
            <WidgetContainer
              side="right"
              widgets={rightWidgets}
              // Collapsed, this container IS the panel: one widget shown, the
              // others hidden rather than dropped.
              visibleWidgetId={collapsed ? openId : undefined}
              slotRenderers={slotRenderers}
              renderWidget={renderWidget}
              ctx={ctx}
              editing={isEditing}
              disableEdition={!canEditSide("right")}
              onReorder={
                onReorderWidgets
                  ? (ids) => onReorderWidgets("right", ids)
                  : undefined
              }
              onRemoveWidget={onRemoveWidget}
              // Not from the panel: collapsed, the strip carries the add
              // affordance, and a placeholder under a single floating widget
              // would be an offer in the wrong place.
              onClickAddNewWidget={
                onClickAddNewWidget && !collapsed
                  ? () => onClickAddNewWidget("right")
                  : undefined
              }
              // THE RIGHT AREA COMES AFTER THE MAIN ONE. Its widgets start their
              // own stagger once the main column has had its beat — the rail is
              // context, and context that lands with the content it is context for
              // reads as noise.
              entrance={{ delayMs: RIGHT_AREA_DELAY_MS }}
            >
              {/* The rail's freeform content belongs to the COLUMN, not to one
                  widget floating out of it. */}
              {collapsed ? null : aside}
            </WidgetContainer>
          </motion.aside>
        )}
      </motion.div>
    )
  }
)
