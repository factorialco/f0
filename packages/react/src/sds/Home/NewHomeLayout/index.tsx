import {
  type CSSProperties,
  forwardRef,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import { Pencil } from "@/icons/app"
import { cn } from "@/lib/utils"

import { SlotWidget } from "../SlotWidget"
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

/**
 * How far each end of the rail's own scroll is faded out. A hard `overflow` edge
 * slices a card mid-row, which reads as breakage rather than as more content
 * past the fold; the fade says "this continues".
 */
const RAIL_FADE_PX = 24
const railMask = (fade: number) =>
  `linear-gradient(to bottom, transparent 0, black ${fade}px, black calc(100% - ${fade}px), transparent 100%)`

/** Collapsed-rail geometry (mirrors the prototype's railMode). */
const COLLAPSED_RAIL_WIDTH = 40
const COLUMN_GAP_PX = 16
const PANEL_LEAVE_MS = 150

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
   * stopping at that padding.
   */
  bleed?: number
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
      ctx = {},
      className,
    },
    ref
  ) {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const [rootWidth, setRootWidth] = useState(0)
    // Hover state of the collapsed strip: which widget floats, and where.
    const [openId, setOpenId] = useState<string | null>(null)
    const [panelTop, setPanelTop] = useState(0)
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

    // Uncontrolled by default: the layout's own edit button drives it. Passing
    // `editing` hands control to the caller.
    const [editingState, setEditingState] = useState(false)
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
          slotRenderers={slotRenderers}
          ctx={ctx}
        />
      )
      return node
    }

    // EACH COLUMN SCROLLS ITSELF. The grid is bounded to the viewport minus the
    // gutter it sits in — so the page itself never scrolls and never overflows
    // that padding — and both columns take `min-h-0 overflow-y-auto` inside it.
    //
    // Only the RAIL fades at its ends: it is a stack of discrete cards, and a
    // hard edge through one reads as breakage. The main column is a reading
    // column, where a fade would dim the text you are actually reading, so it
    // clips plainly at the viewport edge like any scroll region.
    const railStyle: CSSProperties = {
      maskImage: railMask(RAIL_FADE_PX),
      WebkitMaskImage: railMask(RAIL_FADE_PX),
    }

    const hasSide =
      aside != null || rightWidgets.length > 0 || onClickAddNewWidget != null
    const collapsed =
      hasSide &&
      rightWidgets.length > 0 &&
      rootWidth > 0 &&
      rootWidth < mainWidth + COLUMN_GAP_PX + asideWidth
    const railWidth = collapsed ? COLLAPSED_RAIL_WIDTH : asideWidth

    const openWidget = collapsed
      ? rightWidgets.find((widget) => widget.id === openId)
      : undefined

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
      setOpenId(id)
    }

    return (
      <div
        ref={(node) => {
          rootRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          "relative grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch gap-4 text-f1-foreground",
          hasSide &&
            "md:[grid-template-columns:minmax(0,1fr)_var(--home-aside-w)]",
          className
        )}
        style={
          {
            "--home-aside-w": `${railWidth}px`,
            height: `calc(100svh - ${2 * bleed}px)`,
          } as CSSProperties
        }
      >
        {/* ONE full-bleed surface for the WHOLE page, under BOTH columns: the
            gradient reaches `bleed` past every edge, so it runs to the window
            instead of stopping at the page's own padding. Neither column paints
            a background of its own — the gradient shows through beneath them,
            including across the grid's gap. */}
        <div
          aria-hidden
          className="pointer-events-none absolute overflow-hidden bg-f1-special-page"
          style={{ top: -bleed, bottom: -bleed, left: -bleed, right: -bleed }}
        >
          <GradientWash period={period} />
        </div>
        {/* The edit toggle sits in its OWN grid row spanning both columns, so it
            takes real layout space instead of floating over the widgets below.
            Entering edit mode is what makes `editableWidgetContainers` take
            effect (remove controls + the add placeholder appear in the
            containers it lists). */}
        <div className="col-span-full flex justify-end">
          <F0Button
            variant="outline"
            size="md"
            hideLabel
            icon={Pencil}
            label={isEditing ? "Done editing" : "Edit Home"}
            onClick={toggleEditing}
          />
        </div>
        {/* Main column: its own scroll region, no mask — a reading column should
            not have the text you are reading dimmed at the edges.

            It BLEEDS through the page gutter: a negative vertical margin grows
            its box by the gutter at each end while an equal padding puts the
            content back on the line it was on. So the column's clip edge is the
            window's edge rather than the padding line — content scrolls off the
            screen instead of being cut short inside the page. */}
        <div
          className="relative min-h-0 overflow-y-auto"
          style={{
            marginTop: -bleed,
            marginBottom: -bleed,
            paddingTop: bleed,
            paddingBottom: bleed,
          }}
        >
          <WidgetContainer
            side="main"
            className="relative mx-auto w-full"
            style={{ maxWidth: `${mainWidth}px` }}
            widgets={leftWidgets}
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
          >
            {children}
          </WidgetContainer>
        </div>
        {hasSide ? (
          collapsed ? (
            // The collapsed strip: one avatar per widget, the widget's own
            // catalog glyph. Hover/click floats the widget over the feed.
            <aside
              className="flex min-h-0 flex-col gap-2 overflow-y-auto"
              style={railStyle}
              onMouseLeave={scheduleLeave}
              onMouseEnter={cancelLeave}
            >
              {rightWidgets.map((widget) => (
                <button
                  key={widget.id}
                  type="button"
                  aria-label={widget.header?.title ?? widget.id}
                  aria-expanded={openId === widget.id}
                  onMouseEnter={(event) =>
                    openFromAnchor(widget.id, event.currentTarget)
                  }
                  onClick={(event) =>
                    openId === widget.id
                      ? setOpenId(null)
                      : openFromAnchor(widget.id, event.currentTarget)
                  }
                  className="rounded-lg"
                >
                  {widget.icon ? (
                    <F0AvatarIcon icon={widget.icon} size="lg" />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background font-medium text-f1-foreground-secondary">
                      {(widget.header?.title ?? widget.id).charAt(0)}
                    </span>
                  )}
                </button>
              ))}
              {isEditing && canEditSide("right") && onClickAddNewWidget ? (
                <button
                  type="button"
                  aria-label="Add widget"
                  onClick={() => onClickAddNewWidget("right")}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-f1-border text-f1-foreground-secondary hover:text-f1-foreground"
                >
                  +
                </button>
              ) : null}
            </aside>
          ) : (
            <aside className="min-h-0 overflow-y-auto" style={railStyle}>
              <WidgetContainer
                side="right"
                widgets={rightWidgets}
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
                onClickAddNewWidget={
                  onClickAddNewWidget
                    ? () => onClickAddNewWidget("right")
                    : undefined
                }
              >
                {aside}
              </WidgetContainer>
            </aside>
          )
        ) : null}
        {/* The floating panel: the SAME widget render the expanded rail makes,
            at the expanded rail width, level with its avatar. */}
        {openWidget ? (
          <div className="pointer-events-none absolute inset-0">
            <div
              className="pointer-events-auto absolute rounded-xl bg-f1-background"
              style={{
                top: panelTop,
                right: COLLAPSED_RAIL_WIDTH + 8,
                width: asideWidth,
              }}
              onMouseEnter={cancelLeave}
              onMouseLeave={scheduleLeave}
            >
              {render(openWidget)}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
)
