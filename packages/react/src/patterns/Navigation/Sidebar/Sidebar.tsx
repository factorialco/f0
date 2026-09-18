import { motionTokens, sidebarWidths } from "@factorialco/f0-core"
import { AnimatePresence, motion } from "motion/react"
import {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
} from "react"
import { useIntersectionObserver } from "usehooks-ts"

import { withDataTestId } from "@/lib/data-testid"
import { ScrollArea } from "@/ui/scrollarea"

import { useReducedMotion } from "../../../lib/a11y"
import { useI18n } from "../../../lib/providers/i18n"
import { cn } from "../../../lib/utils"
import { useSidebar } from "@/patterns/ApplicationFrame/FrameProvider"
import { SidebarFooter } from "./Footer"

const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      position === "top"
        ? [
            "top-0",
            "bg-gradient-to-b from-f1-background-secondary to-transparent",
            "after:top-0",
          ]
        : [
            "bottom-0",
            "bg-gradient-to-t from-f1-background-secondary to-transparent",
            "after:bottom-0",
          ]
    )}
  />
)

interface SidebarProps {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
  onFooterDropdownClick?: () => void
  /**
   * The permanent module rail (`SidebarRail`), to the left of the panel.
   *
   * Passing it changes what "collapsed" means for the whole frame: the rail is
   * docked at every viewport and never animates, and the panel is the only
   * thing that slides away. Omit it and the sidebar behaves exactly as before.
   */
  rail?: ReactNode
  /**
   * The panel's width in px. Defaults to the 240 a menu needs; a module whose
   * panel IS its content — an inbox list, a month — passes its own, and the
   * frame reserves that instead.
   */
  panelWidth?: number
}

function _Sidebar({
  header,
  body,
  footer,
  onFooterDropdownClick,
  rail,
  panelWidth = sidebarWidths.panel,
}: SidebarProps) {
  const {
    sidebarState,
    isSmallScreen,
    setRailWidth,
    setPanelWidth,
    isLayoutJumping,
  } = useSidebar()
  const shouldReduceMotion = useReducedMotion()
  // One width at every viewport: the rail is docked on a phone too, so a
  // breakpoint here would only be a second number to keep in step with the
  // token and the CSS variable.
  const railWidth = rail ? sidebarWidths.rail : 0
  // A module whose second level has no content has no second level. The panel
  // is not rendered empty and its width is not reserved: an empty 240px column
  // between the rail and the content is a promise the module does not keep.
  const hasPanel = Boolean(header || body || footer)

  // The frame receives the whole navigation as one opaque node, so it cannot
  // see whether there is a rail inside it — it is told. Everything the frame
  // lays out against the navigation (the slot it reserves, the room it
  // publishes to the side panel, the hover-to-peek thresholds) reads this.
  useEffect(() => {
    setRailWidth(railWidth)
    return () => setRailWidth(0)
  }, [railWidth, setRailWidth])

  useEffect(() => {
    setPanelWidth(hasPanel ? panelWidth : 0)
    return () => setPanelWidth(sidebarWidths.panel)
  }, [hasPanel, panelWidth, setPanelWidth])

  // A collapsed panel must not be reachable by tab or by a screen reader. The
  // frame does this for the whole slot when there is no rail; with one, the
  // rail lives in that slot and has to stay reachable, so the attribute goes
  // on the panel alone. Applied from an effect rather than an inline callback
  // ref because the panel is a motion component, which composes its ref once
  // instead of re-running the callback on every render.
  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = panelRef.current
    if (!node) return
    if (sidebarState === "hidden") {
      node.setAttribute("inert", "")
    } else {
      node.removeAttribute("inert")
    }
  }, [sidebarState, rail])

  const [topRef, isAtTop] = useIntersectionObserver({ threshold: 1 })
  const [bottomRef, isAtBottom] = useIntersectionObserver({ threshold: 1 })
  const i18n = useI18n()

  // The nav slides on the frame's own curve, in every state.
  //
  // It used to pick between three: `[0.175, 0.885, 0.32, 1.1]` for the
  // floating case — which ends at 1.1, i.e. it overshoots and springs back —
  // and two others for the rest. The bounce is what a desktop collapse played,
  // and it is exactly the thing the chat's motion vocabulary is calibrated
  // against; and the room this nav leaves behind is animated by the frame on
  // `outSwift`, so a different curve here means the slot and its occupant
  // travel apart.
  const transition = isLayoutJumping
    ? // A module change is not a movement to watch: the panel that arrives
      // belongs to a different section, it is not this one on its way
      // somewhere. It lands.
      { duration: 0 }
    : {
        x: {
          ease: motionTokens.ease.outSwift,
          duration: shouldReduceMotion ? 0 : motionTokens.duration.base,
        },
        top: { duration: shouldReduceMotion ? 0 : 0.1 },
        left: { duration: shouldReduceMotion ? 0 : 0.1 },
        default: {
          duration: shouldReduceMotion ? 0 : motionTokens.duration.base,
        },
      }

  const renderFooter = () => {
    if (!footer) return null
    if (isValidElement(footer) && onFooterDropdownClick) {
      return cloneElement(
        footer as ReactElement<React.ComponentProps<typeof SidebarFooter>>,
        {
          onDropdownClick: onFooterDropdownClick,
        }
      )
    }

    return footer
  }

  const panelContent = (
    <>
      <header className="flex-shrink-0">{header}</header>
      {body && (
        <nav className="relative flex-grow overflow-y-hidden">
          <ScrollArea className="h-full">
            <div
              ref={topRef}
              className="h-px"
              aria-hidden="true"
              key="top-ref"
            />
            <div className="w-[var(--ds-sidebar-width)]">{body}</div>
            <div
              ref={bottomRef}
              className="h-px"
              aria-hidden="true"
              key="bottom-ref"
            />
          </ScrollArea>

          <AnimatePresence>
            {!isAtTop && (
              <ScrollShadow position="top" key="shadow-scroll-top" />
            )}
            {!isAtBottom && (
              <ScrollShadow position="bottom" key="shadow-scroll-bottom" />
            )}
          </AnimatePresence>
        </nav>
      )}
      <footer className="flex-shrink-0">{renderFooter()}</footer>
    </>
  )

  // The panel's chrome. Identical in both compositions; the rail only shifts
  // where its left edge starts and how far it has to travel to clear.
  // Beside a rail the panel is docked or it is gone. It must not put on the
  // floating card's chrome on the way out either: what leaves should be the
  // panel you were using, not a card it turns into for 200ms.
  const floats = rail ? sidebarState === "unlocked" : sidebarState !== "locked"
  const panelClassName = cn(
    "absolute bottom-0 top-0 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
    !floats
      ? cn(
          // Docked, the panel has no surface of its own — it is the floor,
          // like the rail, and the content's own card edge is what separates
          // it from the content. A border on THAT side would land flush
          // against the card's edge and read as a doubled line.
          "h-full",
          // The hairline between the two levels of the navigation. It is the
          // panel's, not the rail's: it exists to separate the pair, so it
          // leaves when the panel leaves. Inside the panel's own width
          // (border-box), so the 1px does not push it off the room the frame
          // reserved.
          rail && "border-0 border-l border-solid border-f1-border-secondary"
        )
      : cn(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          isSmallScreen
            ? "h-full border-y-transparent border-l-transparent bg-f1-background/90"
            : "h-[calc(100%-16px)] bg-f1-background/60"
        )
  )
  const seam = isSmallScreen ? 0 : 8
  const panelAnimate = {
    top: !floats ? 0 : isSmallScreen ? 0 : "8px",
    borderRadius: !floats ? "0" : isSmallScreen ? "0" : "12px",
    left: !floats ? railWidth : railWidth + seam,
    // Without a rail the panel leaves by sliding out past the left edge.
    //
    // With one it CANNOT: the rail is transparent, so a panel travelling
    // behind it is a panel you watch through it. It dissolves where it stands
    // instead, and the movement you see is the content reclaiming the room —
    // which the frame's slot is animating on this same curve regardless.
    x: sidebarState === "hidden" && !rail ? -260 : 0,
    opacity: sidebarState === "hidden" ? (isSmallScreen && !rail ? 0.7 : 0) : 1,
    pointerEvents: (sidebarState === "hidden" ? "none" : "auto") as
      | "none"
      | "auto",
  }

  if (!rail) {
    return (
      <motion.aside
        initial={false}
        aria-label={i18n.navigation.sidebar.label}
        className={cn(panelClassName, "left-0 z-10")}
        animate={panelAnimate}
        style={{ "--ds-sidebar-width": `${panelWidth}px` } as CSSProperties}
        transition={transition}
      >
        {panelContent}
      </motion.aside>
    )
  }

  return (
    <aside
      aria-label={i18n.navigation.sidebar.label}
      className="absolute bottom-0 left-0 top-0 z-10 flex h-full"
    >
      {/* Above the panel in the stack, so a panel on its way out slides behind
          the rail rather than across it. The rail itself never moves. Its
          surface and its seam belong to `SidebarRail`, not to this wrapper:
          a border here would sit OUTSIDE the rail's 48px and push the panel
          a pixel off the width the frame has reserved for the pair. */}
      <div className="relative z-10 h-full">{rail}</div>
      {hasPanel && (
        <motion.div
          initial={false}
          ref={panelRef}
          className={cn(panelClassName, "z-0")}
          animate={panelAnimate}
          style={{ "--ds-sidebar-width": `${panelWidth}px` } as CSSProperties}
          transition={transition}
        >
          {panelContent}
        </motion.div>
      )}
    </aside>
  )
}

export const Sidebar = withDataTestId(_Sidebar)
