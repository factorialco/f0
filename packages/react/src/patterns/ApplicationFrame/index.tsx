import { breakpoints, motionTokens } from "@factorialco/f0-core"
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { Fragment, useEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

import {
  AiPromotionChat,
  AiPromotionChatProvider,
  AiPromotionChatProviderProps,
} from "@/experimental/AiPromotionChat"
import { useAiPromotionChat } from "@/experimental/AiPromotionChat/providers/AiPromotionChatStateProvider"
import { useReducedMotion } from "@/lib/a11y"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import {
  F0AiChat,
  F0AiChatProvider,
  AiChatProviderProps,
} from "@/kits/ai/F0AiChat"
import { HostedPanelWindow } from "@/kits/ai/F0AiChat/components/layout/HostedPanelWindow"
import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { DEFAULT_CHAT_WIDTH } from "@/kits/ai/F0AiChat/utils/constants"
import { F0CanvasPanel } from "@/kits/ai/F0CanvasPanel"

import { FrameProvider, SidebarState, useSidebar } from "./FrameProvider"
import {
  resolveLayoutTransition,
  resolvePanelTransition,
  resolvePanelWidthTarget,
} from "./layoutTransition"
import { useWindowResizing } from "./useWindowResizing"

/**
 * The room the locked sidebar takes out of the frame. Border box, so the
 * slot's own `pl-3` is inside it — matches `--ds-sidebar-width`.
 *
 * Named because two places need the same number: the slot itself, and the
 * predicted frame width published when the sidebar changes state (see
 * `useFrameWidthPublisher`).
 */
const SIDEBAR_SLOT_WIDTH = 240

/**
 * How long the fullscreen transition holds the frame in its "changing what the
 * panel is" state. Derived from the transition itself, so the flag and the
 * animation can never drift apart.
 */
const FULLSCREEN_TRANSITION_MS = motionTokens.duration.reveal * 1000

/** The panel leaving altogether — a fade, on the frame's own duration. */
const CLOSE_TRANSITION_MS = motionTokens.duration.base * 1000

export interface ApplicationFrameProps {
  ai?: Omit<AiChatProviderProps, "children">
  aiPromotion?: Omit<AiPromotionChatProviderProps, "children">
  banner?: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

function _ApplicationFrame({
  children,
  sidebar,
  banner,
  ai,
  aiPromotion,
}: ApplicationFrameProps) {
  return (
    <FrameProvider>
      <ApplicationFrameWithProvider
        ai={ai}
        aiPromotion={aiPromotion}
        sidebar={sidebar}
        banner={banner}
      >
        {children}
      </ApplicationFrameWithProvider>
    </FrameProvider>
  )
}

/**
 * Intermediate component that wraps children with the appropriate AI provider.
 */
function ApplicationFrameWithProvider({
  children,
  sidebar,
  banner,
  ai,
  aiPromotion,
}: ApplicationFrameProps) {
  const AiProvider = ai?.enabled
    ? F0AiChatProvider
    : aiPromotion?.enabled
      ? AiPromotionChatProvider
      : Fragment
  const aiProps = ai?.enabled
    ? ai
    : aiPromotion?.enabled
      ? aiPromotion
      : undefined

  return (
    <AiProvider {...aiProps}>
      <ApplicationFrameContent
        ai={ai}
        aiPromotion={aiPromotion}
        sidebar={sidebar}
        banner={banner}
      >
        {children}
      </ApplicationFrameContent>
    </AiProvider>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const ApplicationFrame = experimentalComponent(
  "ApplicationFrame",
  _ApplicationFrame
)

const SkipToContentButton = ({ contentId }: { contentId?: string }) => {
  const translations = useI18n()
  return (
    <a
      href={`#${contentId}`}
      className={focusRing(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      )}
    >
      {translations.actions.skipToContent}
    </a>
  )
}

function shouldToggleSidebar(
  isChatOpen: boolean,
  previousIsChatOpen: boolean,
  sidebarState: SidebarState
): boolean {
  const isChatOpening = !previousIsChatOpen && isChatOpen
  if (isChatOpening) {
    return sidebarState === "hidden"
  }

  const isChatClosing = previousIsChatOpen && !isChatOpen
  if (isChatClosing) {
    return sidebarState !== "hidden"
  }

  return false
}

/**
 * Custom hook to automatically close sidebar when AI chat opens on smaller screens
 */
function useAutoCloseSidebar(
  isAiChatOpen: boolean,
  shouldAutoCloseSidebar: boolean
) {
  const { sidebarState, toggleSidebar } = useSidebar()
  const previousAiChatOpenRef = useRef(isAiChatOpen)

  useEffect(() => {
    if (
      shouldAutoCloseSidebar &&
      shouldToggleSidebar(
        isAiChatOpen,
        previousAiChatOpenRef.current,
        sidebarState
      )
    ) {
      toggleSidebar({ isInvokedByUser: false })
    }

    previousAiChatOpenRef.current = isAiChatOpen
  }, [isAiChatOpen, shouldAutoCloseSidebar, sidebarState, toggleSidebar])
}

/**
 * Z-index layers (within the isolate stacking context):
 *   z-5   Sidebar
 *   z-10  Main content
 *   z-15  Canvas dashboard panel
 *   z-20  Sidebar backdrop / Chat (fullscreen)
 *   z-30  Sidebar (unlocked/floating)
 *   z-0   Chat (normal)
 */
function ApplicationFrameContent({
  ai,
  aiPromotion,
  children,
  sidebar,
  banner,
}: ApplicationFrameProps) {
  const { sidebarState, toggleSidebar, isSmallScreen, setForceFloat } =
    useSidebar()
  const shouldReduceMotion = useReducedMotion()
  const {
    open: isAiChatOpen,
    visualizationMode,
    canvasContent,
    canvasEntities,
    closeCanvas,
    effectiveChatWidth,
    chatWidthBounds,
    panelOverlays,
    setFrameWidth,
    resizable,
    panelSide,
    panelContent,
    panelContentSide,
    restoringPanelContentId,
    isResizing,
  } = useAiChat()
  const isAiChatFullscreen = visualizationMode === "fullscreen"
  const isCanvasMode = visualizationMode === "canvas"
  const { open: isAiPromotionChatOpen } = useAiPromotionChat()
  // A fixed-width panel is clamped too: 360px is just as capable of crushing
  // the content on a narrow frame as a dragged one.
  const reservedChatWidth = resizable
    ? (effectiveChatWidth ?? DEFAULT_CHAT_WIDTH)
    : Math.min(DEFAULT_CHAT_WIDTH, chatWidthBounds?.max ?? DEFAULT_CHAT_WIDTH)
  // The canvas hugs the seam with the docked chat, so it reserves the chat's
  // width on that edge. Content marked `coversChat` reserves nothing: it spans
  // the frame and covers the chat (the canvas layer sits above it), so the
  // panel keeps its state and its conversation while it is out of view. Note
  // this is unrelated to `visualizationMode: "fullscreen"`, which is the chat
  // spanning the frame with no canvas at all.
  const coversChat = canvasContent?.coversChat === true
  const reservedCanvasInset = coversChat ? 0 : reservedChatWidth
  // Hosts can dock the whole panel left for a chat-first experience (e.g.
  // communications); the default is right, so the standard layout is unchanged.
  const isPanelLeft = panelSide === "left"
  // When hosted content docks to the other edge, each content gets its own
  // window and the layout follows whichever is up. With a single side (the
  // default) `activeSide` always equals `panelSide` and nothing changes.
  // A pending reload-restore counts as content: the panel already shows its
  // skeleton on the content side, so the layout reserves that edge from the
  // first paint.
  const isSplitPanel = panelContentSide !== panelSide
  const livePanelContent = Boolean(panelContent || restoringPanelContentId)
  // The last COMMITTED answer, which is the only place the truth survives once
  // a close has landed — see `hasPanelContent` below.
  const previousPanelContentRef = useRef(livePanelContent)
  useEffect(() => {
    previousPanelContentRef.current = livePanelContent
  })

  // Track fullscreen transitions for smooth exit animation
  const prevFullscreenRef = useRef(isAiChatFullscreen)
  const isExitingFullscreen = !isAiChatFullscreen && prevFullscreenRef.current
  const [
    isFullscreenExitTransitionActive,
    setIsFullscreenExitTransitionActive,
  ] = useState(false)

  useEffect(() => {
    if (!isAiChatFullscreen && prevFullscreenRef.current) {
      setIsFullscreenExitTransitionActive(true)
    }
    prevFullscreenRef.current = isAiChatFullscreen
  }, [isAiChatFullscreen])

  // Released on a timer rather than on the container's `onAnimationComplete`.
  // The callback only fires when something actually animated, and the exit
  // below deliberately leaves the width alone when the panel is closing — so
  // waiting on it would strand this flag, and with it the `overflow-hidden`
  // it puts on the main content.
  //
  // For as long as whatever is actually playing: the panel shrinking back to a
  // sidepanel, or — when the panel is on its way out entirely — the shorter
  // fade. Holding the content's scroll locked past the end of the animation is
  // its own small jank, a scrollbar reappearing after everything has settled.
  useEffect(() => {
    if (!isFullscreenExitTransitionActive) return
    const playing = isAiChatOpen
      ? FULLSCREEN_TRANSITION_MS
      : CLOSE_TRANSITION_MS
    const timer = window.setTimeout(
      () => setIsFullscreenExitTransitionActive(false),
      shouldReduceMotion ? 0 : playing
    )
    return () => window.clearTimeout(timer)
  }, [isFullscreenExitTransitionActive, isAiChatOpen, shouldReduceMotion])

  const isInFullscreenTransition =
    isAiChatFullscreen ||
    isFullscreenExitTransitionActive ||
    isExitingFullscreen

  // Closing from fullscreen is NOT a fullscreen exit, however much it looks
  // like one from inside the provider: `open` goes false first and the mode
  // resets to "sidepanel" a commit later, so the panel would shrink from the
  // whole frame down to its docked width — on top of a main content that has
  // already re-expanded behind it — and only then disappear. Sealed here at
  // the moment the panel starts closing, so that later mode reset cannot
  // retarget the width. It leaves from where it was.
  const prevOpenRef = useRef(isAiChatOpen)
  const closingFromFullscreenRef = useRef(false)
  const leavingPanelContentRef = useRef(livePanelContent)
  if (prevOpenRef.current !== isAiChatOpen) {
    closingFromFullscreenRef.current =
      !isAiChatOpen && (isAiChatFullscreen || prevFullscreenRef.current)
    // Read from the PREVIOUS commit, not from this one: a host closes by
    // clearing its content and closing the panel in the same batch, so by the
    // time we see the close, "what was showing" has already been erased.
    leavingPanelContentRef.current = previousPanelContentRef.current
    prevOpenRef.current = isAiChatOpen
  }
  const isClosingFromFullscreen =
    !isAiChatOpen &&
    closingFromFullscreenRef.current &&
    (isAiChatFullscreen || isFullscreenExitTransitionActive)

  // Which window is on screen — held for as long as one of them is LEAVING.
  //
  // Split mode renders two windows and only ever shows one, and this is what
  // decides which. It is also what tells the frame which container is allowed
  // to fill the frame in fullscreen. Closing clears the hosted content in the
  // same commit that hides the window, so the container that is still very
  // much on screen would stop being "the active panel" and revert to its
  // docked width — the window visibly shrinking out of fullscreen, dragging a
  // full re-layout of the transcript through every frame of its own exit.
  const hasPanelContent = isClosingFromFullscreen
    ? leavingPanelContentRef.current
    : livePanelContent
  const activeSide = hasPanelContent ? panelContentSide : panelSide
  const isActiveLeft = activeSide === "left"

  // Which of the two windows is on screen, and which was on the previous
  // committed render. Tracked per window rather than for the AI chat alone: a
  // hosted conversation resizes between docked and fullscreen exactly like the
  // AI chat does, and the two are never showing at the same time.
  const isAiWindowShowing = isAiChatOpen && (!isSplitPanel || !hasPanelContent)
  const isHostedWindowShowing = isAiChatOpen && isSplitPanel && hasPanelContent
  const prevAiWindowShowingRef = useRef(isAiWindowShowing)
  const prevHostedWindowShowingRef = useRef(isHostedWindowShowing)
  useEffect(() => {
    prevAiWindowShowingRef.current = isAiWindowShowing
    prevHostedWindowShowingRef.current = isHostedWindowShowing
  })

  const shouldAutoCloseSidebar = useMediaQuery(
    `(max-width: ${breakpoints.xl}px)`,
    { initializeWithValue: true }
  )

  // A left-docked panel normally keeps the sidebar in place (see
  // `floatsOverSidebar`), but three columns do not fit on a narrow viewport.
  // Keyed on the VIEWPORT, deliberately: the measured frame below shrinks and
  // grows with the very sidebar this decides about, and the two would
  // oscillate if this read it.
  const isNarrowForLeftPanel = useMediaQuery(
    `(max-width: ${breakpoints.lg}px)`,
    { initializeWithValue: true }
  )

  // Publish the width of the region the panel and the content share, so the
  // panel can only grow as far as the room beside it allows.
  //
  // MEASURED on the row that holds the navigation and the content, and the
  // navigation's room SUBTRACTED — rather than measuring the content side
  // directly. The row's width only ever changes when the window does; the
  // content side changes on every frame of the sidebar's own animation, and
  // publishing those intermediate widths is publishing values that were never
  // a layout anybody asked for. Below `splitMinFrame` that is not a small
  // error: the panel flips to covering the frame part-way through the nav's
  // collapse and back out again.
  //
  // Subtracting the nav's DESTINATION also means the answer is right on the
  // first commit of a sidebar change, instead of a frame or two later once
  // the observer has caught up.
  const mainAreaRef = useRef<HTMLDivElement>(null)
  const sidebarSlotWidth = sidebarState === "locked" ? SIDEBAR_SLOT_WIDTH : 0
  useEffect(() => {
    const row = mainAreaRef.current?.parentElement
    if (!row || !setFrameWidth) return

    let frame = 0
    const measure = (): void => {
      const { width } = row.getBoundingClientRect()
      // A hidden container measures 0. Publishing that would read as "no
      // room" and collapse the panel, so leave the last good width standing.
      if (width <= 0) return
      setFrameWidth(width - sidebarSlotWidth)
    }
    const publish = (): void => {
      cancelAnimationFrame(frame)
      // Coalesced to one frame: a window drag fires these faster than the
      // screen repaints, and every width change re-measures every row of the
      // chat transcript.
      frame = requestAnimationFrame(measure)
    }

    // Synchronously on mount and on every sidebar change, so the panel never
    // lays itself out against the room the nav is about to give up.
    measure()
    const observer = new ResizeObserver(publish)
    observer.observe(row)
    window.addEventListener("resize", publish)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", publish)
    }
  }, [setFrameWidth, sidebarSlotWidth])

  // Fed by `window.resize` alone — see the hook for why the frame's own
  // measurement must not raise it.
  const isWindowResizing = useWindowResizing()

  // A collapsed sidebar must not be reachable by tab or by a screen reader.
  // Applied from an effect rather than an inline callback ref: the slot is a
  // motion component, which composes its ref once instead of re-running the
  // callback on every render, so a ref that reads state would keep answering
  // with the state it was mounted with.
  const sidebarSlotRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = sidebarSlotRef.current
    if (!node) return
    if (sidebarState === "hidden") {
      node.setAttribute("inert", "")
    } else {
      node.removeAttribute("inert")
    }
  }, [sidebarState])

  // The layout is following an input rather than playing a move: a handle drag
  // or a window resize. Everything laid out against the panel's edge reads this
  // so they travel together instead of each easing on its own schedule.
  const isLayoutTracking = Boolean(isResizing) || isWindowResizing
  const layoutTransition = resolveLayoutTransition(
    isLayoutTracking,
    shouldReduceMotion
  )
  // The panel's own container. Same clock as the content beside it, except for
  // the fullscreen toggle — the one movement whose distance is the whole
  // frame, and only when there is a docked column to travel FROM.
  //
  // Per window: opening the chat straight into fullscreen has no origin (the
  // panel was closed, or a conversation was up on the other edge), and
  // animating a width from 360 to the frame then invents a column that was
  // never there and sweeps it across the screen. With no origin the surface
  // simply arrives at the size it is meant to be.
  const panelContainerTransition = (
    isActivePanel: boolean,
    wasActivePanel: boolean
  ) =>
    resolvePanelTransition(
      isLayoutTracking,
      isInFullscreenTransition && isActivePanel && wasActivePanel,
      shouldReduceMotion
    )

  // Too narrow to seat a panel beside the content: it covers the frame instead
  // of splitting it. Decided in the provider, which knows both the measured
  // frame and the pointer type — the window reads the same value for its
  // resize handle, so the two can never disagree.
  const shouldOverlayPanel = panelOverlays ?? false

  // A fullscreen panel is a COVER, not a column, and what a cover hides is free
  // to be re-laid-out: nobody can see it.
  //
  // Two consequences, and the reported jank is one of each. While the cover is
  // going to STAY (opening into fullscreen), the layout under it holds still —
  // otherwise the content slides sideways under a surface that is still fading
  // in, and you watch it through the gap. And when the cover is about to GO
  // (closing, or shrinking back to a sidepanel), the layout is re-applied
  // instantly, while it is still hidden, so what the cover uncovers is already
  // settled instead of chasing it out from under the user.
  const isFullscreenCover = isAiChatOpen && isAiChatFullscreen
  const desiredPadding = {
    left:
      isAiChatOpen && !shouldOverlayPanel && isActiveLeft
        ? reservedChatWidth
        : 0,
    right:
      isAiChatOpen && !shouldOverlayPanel && !isActiveLeft
        ? reservedChatWidth
        : 0,
  }
  const heldPaddingRef = useRef(desiredPadding)
  if (!isFullscreenCover) heldPaddingRef.current = desiredPadding
  const contentPadding = isFullscreenCover
    ? heldPaddingRef.current
    : desiredPadding

  // Everything the cover hides moves without animation — an eased move nobody
  // can see is only a way to still be moving once they can.
  const contentTransition = resolveLayoutTransition(
    isLayoutTracking || isInFullscreenTransition || isClosingFromFullscreen,
    shouldReduceMotion
  )

  // A left-docked panel sits beside the navigation (not over it), so the chat
  // list stays usable — don't float / auto-close the sidebar in that case.
  // Keyed on the side of the *visible* content: in split mode a left-docked
  // conversation coexists with the sidebar while the right AI chat floats it.
  //
  // ...unless the viewport is too narrow to seat all three. Nav + panel +
  // content only coexist when there is room for them; below that the sidebar
  // is the one that yields, since it can be brought back on hover.
  const floatsOverSidebar =
    isAiChatOpen && (!isActiveLeft || isNarrowForLeftPanel)

  // One writer, not two. These were two separate effects, so the second
  // overwrote the first on every mount and on every promotion-chat change:
  // a frame that mounted with the panel already open (the `open` preference
  // survives a reload) started with the sidebar not floating, and only
  // corrected itself the next time `floatsOverSidebar` happened to change.
  useEffect(() => {
    setForceFloat(floatsOverSidebar || isAiPromotionChatOpen)
  }, [floatsOverSidebar, isAiPromotionChatOpen, setForceFloat])

  useAutoCloseSidebar(floatsOverSidebar, shouldAutoCloseSidebar)

  return (
    <MotionConfig
      reducedMotion={shouldReduceMotion ? "always" : "never"}
      // The default for anything inside that doesn't state its own. Was a
      // sixth curve; it is the system's now, so an element that says nothing
      // still moves like the rest of the frame.
      transition={{
        ease: motionTokens.ease.outSwift,
        duration: shouldReduceMotion ? 0 : motionTokens.duration.base,
      }}
    >
      <div className="scrollbar-macos grid h-screen w-full max-w-full grid-cols-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden">
        <div className="col-[1/-1]">{banner}</div>
        <LayoutGroup id="ai-chat-group">
          <div className="relative isolate flex h-full">
            {/* Sidebar backdrop */}
            <AnimatePresence>
              {sidebarState === "unlocked" && (
                <motion.nav
                  className={cn(
                    "fixed inset-0 z-20 bg-f1-background-inverse",
                    !isSmallScreen && "hidden"
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  onClick={() => toggleSidebar()}
                />
              )}
            </AnimatePresence>

            {/* Sidebar */}
            {/* The room the navigation takes, not the navigation itself (that
                is `Sidebar`'s own absolutely-positioned aside). It used to
                close on Tailwind's `transition-all` — 150ms on a different
                curve than everything else that moves when the nav does, and
                `all`, so it animated colour and z-index alongside the width.
                On the frame's clock now, which is what the main content beside
                it is on. */}
            <motion.div
              className={cn(
                "shrink-0",
                sidebarState !== "locked" ? "z-30" : "z-0",
                // Dropped when collapsed: with `box-sizing: border-box` a
                // padding would hold the slot open at 12px instead of 0.
                sidebarState === "locked" && "pl-3"
              )}
              animate={{
                width: sidebarState === "locked" ? SIDEBAR_SLOT_WIDTH : 0,
              }}
              transition={layoutTransition}
              ref={sidebarSlotRef}
            >
              <SkipToContentButton contentId="content" />
              {sidebar}
            </motion.div>

            {/* Main area */}
            <motion.div
              ref={mainAreaRef}
              className="relative min-w-0 flex-1"
              // Both paddings animate together, so swapping the visible side
              // (split mode) slides the main content from one edge to the
              // other — covering the outgoing window and uncovering the
              // incoming one, which stay put underneath (z-0 vs z-10).
              animate={{
                paddingRight: contentPadding.right,
                paddingLeft: contentPadding.left,
              }}
              // Instant while the layout is tracking an input, eased for a
              // discrete change. Without this the panel edge snapped to the
              // cursor while the content chased it through a fresh ease
              // restarted every frame — the lag you could see between the two.
              transition={{
                paddingRight: contentTransition,
                paddingLeft: contentTransition,
              }}
            >
              {/* Main content */}
              {/* Deliberately NOT layout-animated. It carried a `layoutId`
                  with no counterpart anywhere in the tree — shared-element
                  machinery with nothing to share, so in practice a plain FLIP
                  keyed on the sidebar. A FLIP over a box whose WIDTH changes
                  is a scale, and motion only corrects the scale for child
                  motion components: everything else — the whole application's
                  text — stretched horizontally for the length of every sidebar
                  toggle, on a third duration and curve.
                  Nothing is lost by removing it. The width is already moved by
                  the slot beside it and by this element's own padding, both on
                  the frame's clock; the FLIP was a second animation describing
                  the same movement, and could only fight it. */}
              <main
                id="content"
                className={cn(
                  "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                  isInFullscreenTransition
                    ? "overflow-hidden"
                    : "overflow-x-hidden overflow-y-auto",
                  !isAiChatOpen && !isAiPromotionChatOpen && "xs:pr-1",
                  // Left seam so the content never sticks to the viewport edge:
                  // none when the sidebar is active (it provides the gap) or when
                  // a left-docked panel is OPEN (it reserves the space); otherwise
                  // a small seam. Gated on the panel being open — not just
                  // configured left — so a closed left panel still gets the seam.
                  sidebarState === "locked"
                    ? "pl-0"
                    : isActiveLeft && isAiChatOpen
                      ? "pl-0"
                      : "xs:pl-1",
                  // Consistent breakpoint with the other seams (was a bare `pr-1`).
                  isAiChatOpen && isActiveLeft && "xs:pr-1"
                )}
              >
                <div
                  className={cn(
                    "flex max-w-full flex-1",
                    isInFullscreenTransition
                      ? "overflow-hidden"
                      : "overflow-x-hidden overflow-y-auto"
                  )}
                >
                  {children}
                </div>
              </main>

              {/* Chat */}
              {/* Canvas dashboard panel */}
              {ai?.enabled && isCanvasMode && canvasContent && (
                <motion.div
                  className={cn(
                    // z-[21] sits above the chat wrapper (z-20 in canvas
                    // mode) so the canvas card's seam-side shadow paints
                    // over the chat surface instead of being clipped by it.
                    "pointer-events-none flex",
                    // Canvas sits opposite the panel, hugging the seam between
                    // them: panel-right -> canvas on the left, and vice versa.
                    isPanelLeft ? "justify-start" : "justify-end",
                    shouldOverlayPanel
                      ? "fixed inset-0 z-[50]"
                      : cn(
                          "absolute bottom-0 top-0 z-[21]",
                          isPanelLeft ? "right-0" : "left-0"
                        )
                  )}
                  // The same transition as the main content's padding — now
                  // literally the same object, so the invariant this comment
                  // has always claimed cannot drift again. It did: the canvas
                  // gained the instant path for drags and the padding did not,
                  // and the two spent every drag out of step.
                  //
                  // Both edges are always written (motion retains the last
                  // animated value, so leaving one out would strand a stale
                  // inset when the viewport crosses the small breakpoint).
                  animate={
                    shouldOverlayPanel
                      ? { left: 0, right: 0 }
                      : isPanelLeft
                        ? { left: reservedCanvasInset, right: 0 }
                        : { left: 0, right: reservedCanvasInset }
                  }
                  transition={contentTransition}
                >
                  <F0CanvasPanel
                    content={canvasContent}
                    onClose={closeCanvas}
                    entities={canvasEntities}
                    side={panelSide}
                  />
                </motion.div>
              )}

              {ai?.enabled &&
                (() => {
                  // One absolutely-positioned container per docked window. A
                  // single side (the default) keeps today's lone container;
                  // split mode adds a second one on the other edge for hosted
                  // content, both sitting under the main content (z-0), which
                  // covers/uncovers them as its padding moves.
                  const panelContainer = (
                    side: "left" | "right",
                    isActivePanel: boolean,
                    wasActivePanel: boolean,
                    content: React.ReactNode
                  ) => (
                    <motion.div
                      key={`panel-${side}`}
                      className={cn(
                        "pointer-events-none",
                        "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                        shouldOverlayPanel
                          ? "fixed inset-0 z-[30]"
                          : cn(
                              "absolute top-0 bottom-0",
                              side === "left" ? "left-0" : "right-0",
                              // In canvas mode the chat wrapper must sit above
                              // the CanvasPanel (z-[15]) so the ResizeHandle's
                              // hit-area (which extends a few pixels over the
                              // canvas side of the seam) can receive hover
                              // events — otherwise the canvas captures them
                              // and the handle never lights up.
                              isInFullscreenTransition || isCanvasMode
                                ? "z-20"
                                : "z-0",
                              // Left seam for the panel — owned by the frame because
                              // it depends on the sidebar. The panel's left edge needs
                              // a gap only when it's left-docked or filling the screen;
                              // and never when the sidebar is active (locked), since
                              // the sidebar already provides the gap (same rule as the
                              // main content). md:-gated so mobile fullscreen is full-bleed.
                              sidebarState !== "locked" &&
                                (side === "left" || isInFullscreenTransition) &&
                                "md:pl-1"
                            )
                      )}
                      animate={{
                        width: resolvePanelWidthTarget({
                          coversFrame: shouldOverlayPanel,
                          isFullscreen: isAiChatFullscreen,
                          isClosingFromFullscreen,
                          isActivePanel,
                          reservedWidth: reservedChatWidth,
                        }),
                      }}
                      transition={panelContainerTransition(
                        isActivePanel,
                        wasActivePanel
                      )}
                    >
                      {content}
                    </motion.div>
                  )

                  return (
                    <>
                      {panelContainer(
                        panelSide,
                        !isSplitPanel || !hasPanelContent,
                        prevAiWindowShowingRef.current,
                        <F0AiChat />
                      )}
                      {isSplitPanel &&
                        panelContainer(
                          panelContentSide,
                          hasPanelContent,
                          prevHostedWindowShowingRef.current,
                          <HostedPanelWindow />
                        )}
                    </>
                  )
                })()}
            </motion.div>

            {aiPromotion?.enabled && <AiPromotionChat />}
          </div>
        </LayoutGroup>
      </div>
    </MotionConfig>
  )
}
