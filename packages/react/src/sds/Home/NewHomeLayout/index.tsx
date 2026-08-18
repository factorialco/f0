import { AnimatePresence, motion } from "motion/react"
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

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import { F0Icon, type F0IconProps } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
// No `Pencil`/`Check`: there is no edit mode to toggle any more.
import { Plus } from "@/icons/app"
import Menu from "@/icons/app/Menu"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/patterns/ApplicationFrame/FrameProvider"
import { SidebarIconSvg } from "@/patterns/Navigation/Sidebar/Icon"
import { Action } from "@/ui/Action"

import {
  entranceDelay,
  entranceTransition,
  GENIE_GLYPH_ENTER_SCALE,
  GENIE_GLYPH_EXIT_SCALE,
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
import {
  widgetTitle,
  type HomeRenderCtx,
  type HomeWidgetItem,
  type RailActionTone,
  type SlotRenderers,
  type WidgetParams,
} from "../slotRenderers"
import { SlotWidget } from "../SlotWidget"
import { useScrollFade } from "../useScrollFade"
import {
  WidgetContainer,
  type WidgetContainerSide,
  type WidgetVirtualization,
} from "../WidgetContainer"
import { useRailMotion } from "./useRailMotion"

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
 * `max-w-content` in px — the reading column every F0 surface shares (the chat's
 * own composer and message list are capped by the same token). The layout needs
 * the NUMBER, not the class: the same width decides when the rail can no longer
 * have its column (`autoCollapsed`) and how wide a params preview is drawn, and
 * neither is a place a utility class can be read from. Keep it in step with
 * `maxWidth.content` in `packages/react/tailwind.config.ts`.
 */
const CONTENT_WIDTH = 712
/**
 * The gap between the strip's glyphs — `gap-2` on the strip below, and the number
 * a stowing widget needs to know where its own glyph is. Keep the two in step.
 */
const GLYPH_GAP_PX = 8

/**
 * THE GLYPH'S SECOND — how long each face of a flashing glyph is up, and how long
 * a ticking readout's separator stays lit. One period, not two half-periods: a
 * faster alternation reads as a fault rather than as a request, and a clock that
 * blinks twice a second isn't a clock.
 */
const GLYPH_FLASH_MS = 1000

/**
 * The one-second beat both the flashing icon and the ticking readout are drawn
 * on: `true` for the first half of it, `false` for the second.
 *
 * It rests on `true` whenever it isn't running, so every way of stopping — reduced
 * motion, the widget floating under the pointer, a state that stopped asking for
 * anything — leaves the glyph in the state that says the most: the action's icon,
 * the separator lit.
 */
const useFlash = (running: boolean) => {
  const reducedMotion = useReducedMotion()
  const [lit, setLit] = useState(true)

  useEffect(() => {
    if (!running || reducedMotion) {
      setLit(true)
      return
    }
    const beat = setInterval(() => setLit((was) => !was), GLYPH_FLASH_MS)
    return () => clearInterval(beat)
  }, [running, reducedMotion])

  return lit
}

/** How far a blinking reading goes down on the off beat. */
const TICK_DIM = 0.24

/**
 * A rail action's reading, BLINKING LIKE A CLOCK while it is `ticking`: the
 * figures stand still and the separators go dim for half of every second, which
 * is what says the number is counting rather than parked. The figures never
 * blink — a reading you cannot read at a glance is not a reading.
 *
 * Opacity only, and the string is never taken apart in the accessibility tree — a
 * screen reader still reads "0:42", not "0 42". `tabular-nums` so a digit rolling
 * over doesn't move the pill.
 */
const GlyphReading = ({
  text,
  ticking,
}: {
  text: string
  ticking: boolean
}) => {
  const lit = useFlash(ticking)

  return (
    <span className="whitespace-nowrap px-2 text-2xl font-semibold tabular-nums">
      {text.split(":").map((part, index) => (
        <Fragment key={index}>
          {index > 0 ? (
            <span
              className="transition-opacity duration-200"
              style={{ opacity: lit ? 1 : TICK_DIM }}
            >
              :
            </span>
          ) : null}
          {part}
        </Fragment>
      ))}
    </span>
  )
}

/**
 * WHAT A TONE PAINTS. One entry per tone, and each says the same three things:
 * the pill's fill, the button's fill, and what colour the button's icon takes.
 *
 * The pairing is the point. `neutral` is the dark slab with the accent button on
 * it — a chip that isn't saying anything in particular. Every OTHER tone colours
 * the pill and turns the button into a plain chip carrying that colour in its
 * icon, so the two halves never put two strong hues side by side. Without a
 * reading there is no pill, and `solo` is what the button wears on its own.
 *
 * THE CHIP KEEPS ITS FILL ON HOVER — `hover:` set to the SAME colour, which is
 * not redundant: `tailwind-merge` only settles classes within one variant, so a
 * plain `bg-*` never displaces the button variant's `hover:bg-*`, and the chip
 * was repainting itself with the page's hover tint the moment you pointed at it.
 * Over a bold pill that reads as the button going see-through rather than
 * lighting up. What the chip does instead is take a BORDER — the glyphs no longer
 * scale under the pointer (see `glyphMotion`), so the ring is the feedback: a
 * hairline on the plain chips, and the inverse one on the solid buttons, which is
 * the only border that shows on a bold fill.
 *
 * Literal class strings, one per tone: Tailwind reads source text, so a class
 * built from a variable never reaches the stylesheet.
 */
const RAIL_ACTION_TONES = {
  neutral: {
    pill: "bg-f1-background-inverse text-f1-foreground-inverse",
    button:
      "bg-f1-background-accent-bold hover:bg-f1-background-accent-bold-hover hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    icon: "inverse",
    solo: "bg-f1-background-accent-bold hover:bg-f1-background-accent-bold-hover hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    soloIcon: "inverse",
  },
  accent: {
    pill: "bg-f1-background-accent-bold text-f1-foreground-inverse",
    button:
      "bg-f1-background hover:bg-f1-background hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary",
    icon: "accent",
    solo: "bg-f1-background-accent-bold hover:bg-f1-background-accent-bold-hover hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    soloIcon: "inverse",
  },
  critical: {
    pill: "bg-f1-background-critical-bold text-f1-foreground-inverse",
    button:
      "bg-f1-background hover:bg-f1-background hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary",
    icon: "critical",
    solo: "bg-f1-background-critical-bold hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    soloIcon: "inverse",
  },
  warning: {
    pill: "bg-f1-background-warning-bold text-f1-foreground-inverse",
    button:
      "bg-f1-background hover:bg-f1-background hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary",
    icon: "warning",
    solo: "bg-f1-background-warning-bold hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    soloIcon: "inverse",
  },
  // The amber `--promote-50`, which is also the colour a clock-in tile pulses on
  // a break: a rail action that mirrors a widget's own status should be able to
  // mirror its colour exactly, not approximate it with `warning`.
  promote: {
    pill: "bg-f1-background-promote-bold text-f1-foreground-inverse",
    button:
      "bg-f1-background hover:bg-f1-background hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary",
    icon: "promote",
    solo: "bg-f1-background-promote-bold hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    soloIcon: "inverse",
  },
  positive: {
    pill: "bg-f1-background-positive-bold text-f1-foreground-inverse",
    button:
      "bg-f1-background hover:bg-f1-background hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary",
    icon: "positive",
    solo: "bg-f1-background-positive-bold hover:ring-1 hover:ring-inset hover:ring-f1-border-inverse",
    soloIcon: "inverse",
  },
} as const satisfies Record<
  RailActionTone,
  {
    pill: string
    button: string
    icon: F0IconProps["color"]
    solo: string
    soloIcon: F0IconProps["color"]
  }
>

/**
 * One widget as the collapsed strip shows it: its own catalog glyph, standing in
 * for the whole card — or, when the widget carries a `railAction`, that action's
 * button wearing the same 40px.
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
  const action = widget.railAction
  // The flash pauses while the widget is FLOATING, because the panel is open for
  // exactly one reason — the pointer (or the focus ring) is on the glyph — and a
  // face that changed under the pointer would make the click a coin toss about
  // which icon was pressed.
  const actionFace = useFlash(!!action?.flashing && !open)
  /**
   * THE PILL IS FOR THE STOWED WIDGET. Floating, the card is out with the same
   * reading in full context, so the pill goes and leaves the button it was built
   * around — which also takes the overhang out of the panel's way.
   *
   * THE BUTTON ITSELF DOES NOT CHANGE while that happens. Its colours come from
   * whether the action HAS a reading, not from whether the pill is drawn right
   * now (`action.text`, not this) — a control that repaints under the pointer is
   * one you cannot aim at, and hover is exactly when you are aiming.
   */
  const text = action?.text && !open ? action.text : undefined
  /** What the state's colour paints — the pill, the button, and its icon. */
  const tone = RAIL_ACTION_TONES[action?.tone ?? "neutral"]

  /**
   * The genie, identical whichever face the glyph wears.
   *
   * EVERY SCALE HERE IS TRANSIENT — arriving, leaving, the press — and none of
   * them is HELD. A held fractional scale is rasterized once and then stretched:
   * the glyph's icon and a pill's figures go soft, and they stay soft for as long
   * as you keep the pointer there, which is exactly when they are being read. The
   * hover and open states say what they have to say with the panel they open, the
   * tooltip, and the button's own hover border.
   */
  const glyphMotion = {
    initial: {
      opacity: 0,
      scale: reducedMotion ? 1 : GENIE_GLYPH_ENTER_SCALE,
    },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: reducedMotion ? 1 : GENIE_GLYPH_EXIT_SCALE },
    whileTap: reducedMotion ? undefined : { scale: GENIE_GLYPH_TAP_SCALE },
    transition: withReducedMotion(
      { ...glyphTransition, delay: entranceDelay(order, delayMs) },
      reducedMotion
    ),
  }

  /* Same accent dot HomeListItem draws for unread rows — the ring keeps it
     legible over any glyph, action button included. */
  const updatesDot = widget.hasUpdates ? (
    <span className="pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" />
  ) : null

  if (action) {
    // The action's button IS the glyph — one control, so nothing is nested in
    // anything and the strip's geometry is untouched (`size-10` + `compact`
    // hold the button to the 40px every other glyph is).
    //
    // Which means the panel can't be a click any more: hover opens it as ever,
    // and FOCUS opens it too, so reaching the glyph by keyboard still gets you
    // to the widget's own controls — they are the next thing in the tab order.
    //
    // With a `text` the whole thing becomes a PILL: the reading, then the same
    // button at the end of it. The pill keeps the strip's 40px HEIGHT — the one
    // dimension the strip's rhythm and the cards' stow are built on — and takes
    // the width it needs off the left, out over the feed.
    return (
      <Tooltip label={action.label}>
        <motion.div
          className={cn(
            // `pointer-events-auto` against the strip's `none`: a pill is wider
            // than the rail's column, and the box holding it must not become a
            // 100px dead margin down the side of the feed.
            "pointer-events-auto relative shrink-0",
            // The pill is the GLYPH'S OWN geometry, grown sideways: the 40px
            // height every glyph has, the button unchanged inside it, and
            // `rounded-lg` — one step up from the button's `rounded-md`, which is
            // what the radius scale says a container holding an `lg` control
            // takes. Nothing here is a shape the strip doesn't already use.
            text
              ? cn(
                  "-mr-1 flex flex-row items-center gap-1 rounded-lg p-1",
                  tone.pill
                )
              : "rounded-lg"
          )}
          onMouseEnter={(event) => onOpen(widget.id, event.currentTarget)}
          onFocus={(event) => onOpen(widget.id, event.currentTarget)}
          {...glyphMotion}
        >
          {text ? (
            <GlyphReading text={text} ticking={!!action.ticking} />
          ) : null}
          <Action
            type="button"
            // `ghost` and then painted: the tone decides this button's fill and
            // its icon TOGETHER with the pill's, and a variant would bring a
            // second opinion about both.
            variant="ghost"
            // THE SAME BUTTON either way — 40px at the strip's own radius,
            // whether it is standing alone as the glyph or sitting at the end of
            // a pill. A reading beside it doesn't make it a different control.
            size="lg"
            compact
            // FLAT, like every other glyph in the strip. A button's elevation
            // chrome — the drop shadow and the `::after` top highlight — is for a
            // control raised off a page; here it reads as a border, and the
            // highlight's own radius is a step tighter than an `lg` button's, so
            // it cuts a visible arc across each corner. The strip is tiles.
            className={cn(
              "size-10 shadow-none after:hidden hover:shadow-none active:shadow-none",
              action.text ? tone.button : tone.solo
            )}
            // "Resume" on its own doesn't say which glyph this is; the tooltip
            // can lean on the strip for that, an accessible name can't.
            aria-label={`${action.label}, ${widgetTitle(widget)}`}
            onClick={() => action.onClick()}
          >
            <F0Icon
              size="md"
              // `color` rather than a text class: it marks the svg
              // `data-has-color`, which is what stops the button variant's own
              // icon rules from painting over the tone.
              color={action.text ? tone.icon : tone.soloIcon}
              // No widget icon means no second face to flash to — the action's
              // is the only one there is.
              icon={actionFace || !widget.icon ? action.icon : widget.icon}
            />
          </Action>
          {updatesDot}
        </motion.div>
      </Tooltip>
    )
  }

  return (
    <motion.button
      type="button"
      // `widgetTitle`, not the header's own: a configurable widget's title can be
      // a function of its params, and an aria-label needs the text.
      aria-label={widgetTitle(widget)}
      aria-expanded={open}
      onMouseEnter={(event) => onOpen(widget.id, event.currentTarget)}
      onClick={(event) =>
        open ? onClose() : onOpen(widget.id, event.currentTarget)
      }
      // See the strip: it takes no pointer events, so each glyph takes its own.
      className="pointer-events-auto rounded-lg"
      {...glyphMotion}
    >
      <span className="relative inline-flex">
        {widget.icon ? (
          <F0AvatarIcon icon={widget.icon} size="lg" />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background font-medium text-f1-foreground-secondary">
            {widgetTitle(widget).charAt(0)}
          </span>
        )}
        {updatesDot}
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
// The add control's name comes from the PROVIDER (`t.widgets.addWidget`) — it is
// the same offer in the strip's glyph here and in the column's placeholder
// (`WidgetContainer`), and neither shows it: it is a tooltip and an accessible
// name.

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
   * Which containers a user may arrange. Only these offer "Remove widget",
   * dragging and the add placeholder; the others stay put. Both by default.
   */
  editableWidgetContainers?: WidgetContainerSide[]
  /**
   * Which containers keep ONLY THE WIDGETS YOU CAN SEE in the DOM. None by
   * default: for a Home of a dozen widgets, mounting them all is what keeps a
   * card's data, clock and animation alive across everything this layout does to
   * it, and virtualizing would trade that away for nothing.
   *
   * Name a side once its widgets can outnumber a screen — a hundred cards is a
   * hundred fetches and a hundred charts, and all but the three in view are work
   * nobody asked for. Below `virtualization.threshold` widgets (12 by default) the
   * column still renders them all, so naming a side here is a CEILING rather than
   * a switch. What it costs is on `WidgetVirtualization`; in short, a widget that
   * scrolls out is unmounted and comes back new, and only the cards in view get
   * out of a dragged one's way.
   *
   * STACKED (below `md`) the rail's widgets belong to the main column, so "main"
   * is what virtualizes them there.
   */
  virtualizedWidgetContainers?: WidgetContainerSide[]
  /**
   * Tuning for the above — the height a card is guessed at before it is measured,
   * how many are kept past each edge, and the count it starts at. The scroll
   * region is this layout's own, per side, and is not yours to set.
   */
  virtualization?: Omit<WidgetVirtualization, "scrollElement">
  /**
   * Called with a widget id when its "Remove widget" menu item is used — the
   * three-dots menu in the widget's own header.
   */
  onRemoveWidget?: (id: string) => void
  /**
   * Called with a widget id and its new params when its "Edit params" dialog is
   * saved. Providing it is what offers that item, in the same menu, for every
   * widget that declares a `paramsSchema`. PERSIST what it hands you and pass it
   * back as the widget's `params` — rebuilding the widget's slots for the new
   * params is the app's own job, since only it knows where their data comes from.
   */
  onChangeWidgetParams?: (id: string, params: WidgetParams) => void
  /**
   * REBUILDS a widget for params being tried out in that dialog, before they are
   * saved — the same widget with slots that follow the new params, which only
   * the app can produce. It hands back DATA, and f0 draws it through the same
   * `SlotWidget` the column uses, so the preview cannot drift from the card.
   *
   * Without it the preview is the widget with those params swapped in — already
   * live for everything they derive (title, info), just not for its slots.
   */
  rebuildWidget?: (
    widget: HomeWidgetItem,
    params: WidgetParams
  ) => HomeWidgetItem
  /**
   * @deprecated Use `rebuildWidget`. A preview the app renders has to reproduce
   * `SlotWidget` by hand and drifts from the column the moment either side
   * changes. Ignored when `rebuildWidget` is given.
   */
  renderWidgetPreview?: (
    widget: HomeWidgetItem,
    params: WidgetParams
  ) => ReactNode
  /** When set, renders a "+ Add widget" affordance at the bottom of each column. */
  onClickAddNewWidget?: (side: WidgetContainerSide) => void
  /** Called with a side and its widget ids in their new order after a drag. */
  onReorderWidgets?: (side: WidgetContainerSide, ids: string[]) => void
  /** The daytime gradient period for the page surface. */
  period?: HomePeriod
  /** Fixed px width of the side rail. */
  asideWidth?: number
  /**
   * Max px width of the (centered) main-column content. Defaults to
   * `max-w-content` (712px), so a composer or a message list in the main column
   * lines up with the same reading column the chat uses.
   */
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
      editableWidgetContainers = ["main", "right"],
      virtualizedWidgetContainers = [],
      virtualization,
      onRemoveWidget,
      onChangeWidgetParams,
      rebuildWidget,
      renderWidgetPreview,
      onClickAddNewWidget,
      onReorderWidgets,
      period = "morning",
      asideWidth = 396,
      mainWidth = CONTENT_WIDTH,
      bleed = 24,
      stackedPinsAfter = 2,
      ctx = {},
      className,
    },
    ref
  ) {
    const t = useI18n()
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

    const [manualCollapsed, setManualCollapsed] = useState<boolean | null>(null)
    const canEditSide = (side: WidgetContainerSide) =>
      editableWidgetContainers.includes(side)

    const render = (widget: HomeWidgetItem) => {
      const node = renderWidget ? (
        renderWidget(widget, ctx)
      ) : (
        <SlotWidget
          header={widget.header}
          params={widget.params}
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
    // The COLLAPSED strip is a third scroll region — a tall enough one, once the
    // rail holds more widgets than a screen of 40px glyphs.
    const stripFade = useScrollFade()

    /**
     * WHAT A COLUMN IS ON SCREEN OF, for the sides that virtualize: its own
     * scroll region, which is the box the fades are already watching. Handed over
     * rather than left to be walked for, because this layout knows the answer —
     * and the rail's is not the ancestor a walk would find while the rail is a
     * floating panel.
     */
    const virtualizationFor = (
      side: WidgetContainerSide
    ): WidgetVirtualization | false =>
      virtualizedWidgetContainers.includes(side)
        ? {
            ...virtualization,
            scrollElement:
              side === "main" ? mainFade.element : railFade.element,
          }
        : false

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
     * The widget the panel is showing — or the one it is still putting back.
     *
     * The panel takes `GENIE_CLOSE_MS` to go into its glyph, and dropping its
     * widget on the frame the hover ends leaves an EMPTY card to do that
     * animation: the content vanishes at once and a bare rounded box shrinks away
     * after it. So the widget stays the panel's until the panel has actually gone
     * (`panelHidden`), which is also what keeps it from snapping to its stowed
     * size halfway through the fade.
     */
    const closingId = useRef<string | null>(null)
    if (openId) closingId.current = openId
    const panelWidgetId =
      openId ?? (rail.panelHidden ? null : closingId.current)

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
          // THE CARDS ARE NEVER SIZED BY THE GESTURE. Their column spends the
          // collapse somewhere between the strip's width and the rail's, and a
          // rail that took that width would re-lay-out every card on every frame:
          // the headings and the list rows would re-wrap their way through the
          // whole animation, which is the one thing that makes a transition look
          // broken rather than fast.
          //
          // So the rail is pinned to the width it ENDS at and anchored to the
          // cell's right edge, which does not move. The cards are laid out once,
          // at their final width, and everything you see them do after that is a
          // transform.
          width: asideWidth,
          justifySelf: "end",
          // IT BLEEDS THROUGH THE GUTTER, exactly as the main column does: the
          // negative margin grows its box by the gutter at each end while an equal
          // padding puts the content back on the line it was on. Two things come
          // out of that, and the second is why it is here.
          //
          // Its clip edge becomes the window's edge, so cards scroll off the
          // screen instead of stopping short inside the page. And its scroll fade
          // — which is drawn from the BORDER BOX — lands in the gutter rather than
          // over the first card, putting it on the same line as the main column's.
          // Without it the two columns faded at different heights, and the rail
          // dimmed content that was not going anywhere.
          //
          // Only in the column. The floating panel is positioned from `top`, and a
          // margin there would take it off its glyph.
          marginTop: -bleed,
          marginBottom: -bleed,
          paddingTop: bleed,
          paddingBottom: bleed,
          ...(rail.mode === "retracting" ? { pointerEvents: "none" } : null),
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
        {/* The page's own controls sit in their OWN grid row spanning both
            columns, so they take real layout space instead of floating over the
            widgets below. There is NO EDIT TOGGLE: a widget is removed from its
            own three-dots menu and moved by dragging it, at any time, so there
            is no mode to switch into (`editableWidgetContainers` decides which
            columns offer that at all).

            Chrome, not content: it arrives on the main column's first beat
            rather than waiting its turn behind it. */}
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
          className={cn(
            // `isolate` — A STACKING CONTEXT OF ITS OWN, and the reason the
            // floating panel is not buried by the feed. Without it the column is
            // `relative` at `z-index: auto`, which is no context at all: every
            // z-index INSIDE it competes at the layout's level, and the content a
            // Home puts here brings its own (the Ask-AI composer is `z-20`, and
            // whatever a card does next is not this layout's to know). Isolated,
            // the whole column is one layer that the panel's `z-10` clears, no
            // matter what its contents bid.
            "relative isolate min-h-0 overflow-y-auto",
            SCROLLBAR_HIDDEN
          )}
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
            // `mainWidth` rather than the `max-w-content` utility, at the same
            // 712px by default: the cap is a prop, and a class cannot take one.
            style={{ maxWidth: `${mainWidth}px` }}
            widgets={
              stacked ? [...leftWidgets, ...loosePins.rest] : leftWidgets
            }
            slotRenderers={slotRenderers}
            renderWidget={renderWidget}
            ctx={ctx}
            virtualized={virtualizationFor("main")}
            disableEdition={!canEditSide("main")}
            onReorder={
              onReorderWidgets
                ? (ids) => onReorderWidgets("main", ids)
                : undefined
            }
            onRemoveWidget={onRemoveWidget}
            onChangeWidgetParams={onChangeWidgetParams}
            rebuildWidget={rebuildWidget}
            renderWidgetPreview={renderWidgetPreview}
            paramsPreviewWidth={mainWidth}
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
            // IT FADES AT AN OVERFLOWING END, like both columns: a strip of
            // enough widgets scrolls, and cut off at the edge with nothing to
            // say so, the glyph you can half-see reads as the last one. The
            // fade is scroll-aware (`useScrollFade`), so a strip that fits —
            // which is most of them — is not masked at all, and the washing-out
            // a static mask over 40px glyphs would be never happens.
            // `-m-1 p-1`: the hasUpdates dot pokes 2px past the 40px glyphs,
            // and the scrollport would clip it — bleed the scrollport out by
            // 4px (padding puts the glyphs back) so the dot stays inside it.
            // The bleed is where the fade starts, too, so it opens on the gap
            // above the first glyph rather than on the glyph itself.
            <motion.aside
              key="collapsed-strip"
              ref={stripFade.ref}
              className={cn(
                // `items-end` so a glyph is its own 40px whatever the column is
                // doing: the strip lives in the rail's column, and that column
                // spends the collapse on its way DOWN from the full rail width —
                // stretched, the glyphs would start card-wide and shrink. END
                // rather than start because a `railAction` with a reading is a PILL
                // wider than the column: the box grows to it and hangs out over
                // the feed to the LEFT (`justifySelf: end` below), and the 40px
                // glyphs have to stay on the rail's edge while it does.
                //
                // Which is also why the box itself takes NO pointer events: at a
                // pill's width it would otherwise be a dead margin down the side
                // of the feed, eating clicks meant for the cards under it. Each
                // glyph turns them back on for its own 40px (`pointer-events-auto`).
                "-m-1 flex min-h-0 flex-col items-end gap-2 overflow-y-auto p-1",
                // ABOVE THE PANEL (`z-10`): a glyph is what the floating card
                // came out of, so it stays in front of it — and a pill overhangs
                // far enough to be half-covered otherwise.
                "pointer-events-none z-20",
                SCROLLBAR_HIDDEN
              )}
              style={{
                // Placed, not flowed — it shares this cell with the retracting
                // rail body for a moment (see the main column).
                gridColumn: 2,
                gridRow: 2,
                // Pinned for the same reason the rail body is: stretched to a cell
                // that is mid-flight between the rail's width and the strip's, the
                // glyphs would ride that width and slide the best part of 400px
                // sideways over the gesture. Sized to their own content against
                // the cell's right edge, they arrive where they stay — which is
                // what lets the cards look like they are going INTO them.
                width: "fit-content",
                justifySelf: "end",
                ...stripFade.style,
              }}
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
                // The same control the column's placeholder is — a dashed box
                // around one glyph, named only on hover — at the strip's size.
                <Tooltip label={t.widgets.addWidget}>
                  <motion.button
                    type="button"
                    aria-label={t.widgets.addWidget}
                    onClick={() => onClickAddNewWidget("right")}
                    className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-f1-border text-f1-foreground-secondary hover:border-f1-border-hover hover:text-f1-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={entranceTransition(
                      rightWidgets.length,
                      rail.glyphDelayMs,
                      reducedMotion
                    )}
                  >
                    <F0Icon size="md" icon={Plus} />
                  </motion.button>
                </Tooltip>
              ) : null}
            </motion.aside>
          )}
        </AnimatePresence>{" "}
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
              opacity: rail.bodyOut ? 1 : 0,
              scale: rail.bodyOut ? 1 : GENIE_RETRACTED_SCALE,
              // Toward the strip while it shrinks, so it converges on the glyph
              // rather than just fading where it stood.
              x: rail.bodyOut ? 0 : GENIE_RETRACTED_OFFSET_PX,
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
              // Only ONCE THE STRIP HAS THEM. This used to key off `collapsed`,
              // which hid every card on the very frame the collapse began — so the
              // cards were `display: none` before they had moved a pixel, and the
              // retract animated an empty box while they simply blinked out. The
              // panel's one-widget filter belongs to the panel; while the rail is
              // still retracting the column is still a column, and its cards have a
              // journey to make (`stow`).
              visibleWidgetId={railInPanel ? panelWidgetId : undefined}
              // The strip they are going into: glyphs a fixed pitch apart, and how
              // small a card has to get to be one of them.
              stow={{
                stowed: collapsed,
                pitch: COLLAPSED_RAIL_WIDTH + GLYPH_GAP_PX,
                scale: COLLAPSED_RAIL_WIDTH / asideWidth,
              }}
              slotRenderers={slotRenderers}
              renderWidget={renderWidget}
              ctx={ctx}
              // The rail virtualizes only while it is a COLUMN — as a floating
              // panel it is one card in a box of its own, and the container reads
              // that off `visibleWidgetId` by itself, mounting only the card the
              // panel shows. The setting stays put through the change: it decides
              // how the widgets are drawn, and a prop that came and went would be
              // one more thing moving mid-gesture.
              virtualized={virtualizationFor("right")}
              // NOT gated on `collapsed`: whether the column is arrangeable
              // decides its tree's SHAPE (a draggable column is wrapped in a
              // DndContext), and a shape that changed when the rail collapsed
              // would rebuild every widget in it — the one thing this rail
              // exists to avoid.
              disableEdition={!canEditSide("right")}
              onReorder={
                onReorderWidgets
                  ? (ids) => onReorderWidgets("right", ids)
                  : undefined
              }
              onRemoveWidget={onRemoveWidget}
              onChangeWidgetParams={onChangeWidgetParams}
              rebuildWidget={rebuildWidget}
              renderWidgetPreview={renderWidgetPreview}
              paramsPreviewWidth={asideWidth}
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
