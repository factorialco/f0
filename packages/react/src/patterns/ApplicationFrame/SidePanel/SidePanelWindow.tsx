import { motionTokens } from "@factorialco/f0-core"
import { AnimatePresence, motion } from "motion/react"
import type { HTMLAttributes, ReactNode, Ref } from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"
import { MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "./constants"
import { useSidePanel } from "./SidePanelProvider"
import { SidePanelResizeHandle } from "./SidePanelResizeHandle"

const { duration: DURATION, ease: EASE } = motionTokens

/**
 * Why the window is going away, resolved AT THE MOMENT IT GOES.
 *
 * This has to travel through `AnimatePresence`'s `custom` rather than sit in an
 * `exit` prop, and that is not a stylistic choice. `AnimatePresence` keeps the
 * element from the last render in which it was PRESENT, so any prop describing
 * the exit is captured one render before the change that causes it — an
 * `exitStyle` computed from `open` can only ever report what `open` was while
 * the window was still there, i.e. never "closing".
 *
 * The cost of that was a real defect: closing a panel in split mode picked the
 * swap's exit, which holds still at full opacity and then vanishes in a single
 * frame. Correct when the main content is sliding over the window to cover it;
 * a hard cut when nothing is.
 */
export type WindowExitCustom = {
  /**
   * "hold" — something else is covering this window on its way out (the swap).
   * "shrink" — nothing is: it has to take itself off the screen.
   */
  exitStyle: "shrink" | "hold"
  /** Collapsed toward the edge the window is docked to. */
  closedClipPath: string
  reducedMotion: boolean
}

export const resolveWindowExit = ({
  exitStyle,
  closedClipPath,
  reducedMotion,
}: WindowExitCustom) => {
  if (reducedMotion) {
    return { opacity: 0, transition: { duration: 0 } }
  }
  if (exitStyle === "hold") {
    // Stay put until the main content has finished sliding over this window,
    // then leave. The delay is DERIVED from the content's own duration rather
    // than written down beside it — it was `0.25`, calibrated against a 300ms
    // tween that has since become 220ms, which left this window uncovered and
    // visibly fading for ~80ms in the middle of every swap.
    return { opacity: 0, transition: { delay: DURATION.base, duration: 0 } }
  }
  return { opacity: 0, clipPath: closedClipPath }
}

/**
 * Named `leaving` rather than `exit` so the label cannot collide with a variant
 * of that name in the content below, which motion would propagate to.
 */
const windowVariants = { leaving: resolveWindowExit }

export type SidePanelWindowProps = {
  children?: ReactNode
  /**
   * Overrides the context `open` as the mount condition — lets the frame drive
   * per-window visibility when two views split edges.
   */
  visible?: boolean
  /** Edge this window docks to. Defaults to the context `side`. */
  side?: "left" | "right"
  /**
   * Exit animation. "shrink" is the regular close (clip + fade). "hold" keeps
   * the window still while the main content slides over it — used for the swap
   * between two views on opposite edges, so the panels feel like they were
   * always there.
   */
  exitStyle?: "shrink" | "hold"
  /**
   * Something is sitting flush against this window's INNER edge (the AI
   * canvas). Drops the seam-side border and the seam-side rounding so the two
   * share a single 1px divider instead of stacking three.
   */
  flushInnerSeam?: boolean
  /** Spread onto the card element — drag handlers, data attributes. */
  surfaceProps?: HTMLAttributes<HTMLDivElement>
  /** Forwarded to the card element (occupants use it as a drop zone). */
  surfaceRef?: Ref<HTMLDivElement>
  /** Rendered inside the card, over `children`. Overlays, easter eggs. */
  decorations?: ReactNode
}

/**
 * The panel's chrome: the card, its rounding and seams, the enter/exit
 * animation, and the resize handle.
 *
 * Knows nothing about what is inside it. Everything an occupant needs to add —
 * a drop overlay, pointer handlers, a game — arrives through `surfaceProps` /
 * `decorations`, so the shell stays the same for a chat, a conversation, or
 * whatever comes next.
 */
export const SidePanelWindow = ({
  children,
  visible,
  side,
  exitStyle = "shrink",
  flushInnerSeam = false,
  surfaceProps,
  surfaceRef,
  decorations,
}: SidePanelWindowProps) => {
  const {
    open,
    layout,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    resizable,
    width,
    effectiveWidth,
    setWidth,
    resetWidth,
    widthBounds,
    panelOverlays,
    setIsResizing,
    side: panelSide,
  } = useSidePanel()

  const isVisible = visible ?? open
  const reducedMotion = useReducedMotion()
  // Hosts dock the whole panel left for a chat-first experience
  // (communications); the default is right.
  const isLeft = (side ?? panelSide) === "left"

  // Was the panel already open on the previous committed render? A window
  // mounting while it was (a swap between two views on opposite edges) must
  // appear in place — the main content slides to reveal it — instead of
  // playing the entrance animation.
  const prevOpenRef = useRef(false)
  useEffect(() => {
    prevOpenRef.current = open
  })

  const fullscreen = layout === "fullscreen"
  // Stays LOCAL: it gates this handle's document mousemove listener and its
  // active style, and a split layout renders two windows — a shared gate would
  // have the idle handle grab the pointer too and apply a second delta from its
  // own stale start position.
  const [isDragging, setIsDragging] = useState(false)
  // ...but the drag is mirrored outward, because the canvas panel is laid out
  // against this window's edge and has to follow it 1:1 (see ApplicationFrame's
  // canvas inset). Cleared on unmount too, so a window torn down mid-drag
  // doesn't strand the flag.
  useEffect(() => {
    if (!isDragging) {
      return
    }
    setIsResizing(true)
    return () => setIsResizing(false)
  }, [isDragging, setIsResizing])

  // Bounded by what the frame can currently give, not by the absolute range —
  // otherwise the handle keeps travelling after the main content has run out
  // of room.
  const { min: minWidth, max: maxWidth } = widthBounds ?? {
    min: MIN_CHAT_WIDTH,
    max: MAX_CHAT_WIDTH,
  }

  // No seam to drag when the panel is covering the frame rather than sitting
  // beside content. Taken from the provider, which is also what the frame
  // reserves against — computing it here from a media query is how the handle
  // used to appear on a full-screen panel.
  const isCoveringFrame = panelOverlays ?? false

  // ...nor when the range has collapsed to a point. On a narrow frame the
  // content's floor pins the panel to its minimum, and a handle that cannot
  // travel is worse than no handle: it invites a drag and then refuses it.
  const canResize = maxWidth > minWidth

  // Everything except WHICH edge — the seam renders on the panel's inner edge,
  // so the two call sites differ only by `isLeft` and the side they pass.
  const showResizeSeam =
    resizable && !fullscreen && !isCoveringFrame && canResize

  // What the separator reports. `effectiveWidth` is the stored width held
  // inside what the measured frame can actually give it, which is the number
  // the panel is really at — the raw preference can sit outside the bounds.
  const reportedWidth = Math.max(
    minWidth,
    Math.min(maxWidth, effectiveWidth ?? width)
  )

  const handleResize = useCallback(
    (deltaX: number) => {
      setWidth((prev) => {
        const newWidth = prev + deltaX
        return Math.max(minWidth, Math.min(maxWidth, newWidth))
      })
    },
    [setWidth, minWidth, maxWidth]
  )

  // The window's own reveal shares the frame's clock. It used to run 300ms on
  // `[0,0,0.1,1]` while the main content's padding ran 220ms on the system
  // curve — two halves of one seam, arriving 80ms apart with the frame showing
  // through the gap between them.
  const wrapperTransition = useMemo(
    () =>
      isDragging || reducedMotion
        ? { duration: 0 }
        : { duration: DURATION.base, ease: EASE.outSwift },
    [isDragging, reducedMotion]
  )
  const closedClipPath = isLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"
  const exitCustom: WindowExitCustom = {
    exitStyle,
    closedClipPath,
    reducedMotion,
  }

  // Closing is ONE animation, whatever size the panel happens to be.
  //
  // A fullscreen panel used to leave by a different route — it shrank back to
  // its docked width first, over its own longer duration, on top of a main
  // content that had already re-expanded behind it — so the same button did
  // two visibly different things depending on where you pressed it. It leaves
  // the way a docked panel leaves now: the same clip toward the same edge, the
  // same duration, the same curve. It is simply wider.
  //
  // What makes that read cleanly rather than as a curtain is what the FRAME
  // does underneath: the layout it was covering is re-applied instantly, while
  // it is still hidden, so the wipe uncovers a settled page instead of one
  // still sliding out from under it (see `contentTransition` in
  // ApplicationFrame).
  //
  // The entrance is the same animation too — with one difference: it always
  // plays. `prevOpenRef` suppresses it for a swap between two docked windows,
  // where the incoming panel is meant to be revealed in place by the main
  // content sliding off it. A cover has nothing revealing it, so suppressing
  // its entrance just means it appears in a single frame.
  const shouldAnimateEntrance =
    !reducedMotion &&
    (fullscreen || (shouldPlayEntranceAnimation && !prevOpenRef.current))

  return (
    // `custom` is what makes the exit above readable at exit time: this
    // component re-renders when the panel closes, the frozen child does not.
    <AnimatePresence custom={exitCustom}>
      {isVisible ? (
        <motion.div
          key="chat-wrapper"
          variants={windowVariants}
          className={cn(
            // The seam is `xs:`-gated to match the card's own `xs:rounded-xl`.
            // It used to be `md:` (768), which was invisible while the panel
            // only ever split above that — now that a half-screen laptop
            // window splits at 756, the mismatch would show as rounded corners
            // pressed flat against the window edge.
            "bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background xs:py-1",
            // Right seam (against the viewport edge — no sidebar there) is owned
            // here: always wanted right-docked or filling the screen. The LEFT
            // seam depends on whether the app sidebar is present (it provides the
            // gap), which only the host frame knows, so ApplicationFrame owns it.
            fullscreen ? "xs:pr-1" : isLeft ? "mr-auto" : "ml-auto xs:pr-1"
          )}
          initial={
            shouldAnimateEntrance
              ? { opacity: 0, clipPath: closedClipPath }
              : false
          }
          animate={{
            opacity: 1,
            // Note this also CLIPS the window to its box, descendants included,
            // whatever their z-index. Nothing is meant to paint outside the
            // panel — but it is why anything that tries gets sliced off at the
            // seam rather than simply landing under the page.
            clipPath: "inset(0 0 0 0)",
          }}
          exit="leaving"
          transition={wrapperTransition}
          style={{
            width: "100%",
            transformOrigin: isLeft ? "left center" : "right center",
          }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          {/* Resize seam: inner (left) edge for a right-docked panel, inner
              (right) edge for a left-docked one — so it renders after the card. */}
          {showResizeSeam && !isLeft ? (
            <SidePanelResizeHandle
              onResize={handleResize}
              onReset={resetWidth}
              isResizing={isDragging}
              setIsResizing={setIsDragging}
              flushInnerSeam={flushInnerSeam}
              side="right"
              value={reportedWidth}
              minValue={minWidth}
              maxValue={maxWidth}
            />
          ) : null}
          <div
            ref={surfaceRef}
            aria-hidden={!isVisible}
            className={cn(
              "relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary",
              // Flush against a neighbour, the two share the ResizeHandle (1px)
              // as their only divider. Dropping the seam-side border avoids
              // stacking neighbour-border + handle + own-border = 3px.
              flushInnerSeam &&
                (isLeft ? "border-r-transparent" : "border-l-transparent"),
              flushInnerSeam
                ? isLeft
                  ? "xs:rounded-l-xl"
                  : "xs:rounded-r-xl"
                : "xs:rounded-xl"
            )}
            {...surfaceProps}
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden">
              {children}
            </div>
            {decorations}
          </div>
          {showResizeSeam && isLeft ? (
            <SidePanelResizeHandle
              onResize={handleResize}
              onReset={resetWidth}
              isResizing={isDragging}
              setIsResizing={setIsDragging}
              flushInnerSeam={flushInnerSeam}
              side="left"
              value={reportedWidth}
              minValue={minWidth}
              maxValue={maxWidth}
            />
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
