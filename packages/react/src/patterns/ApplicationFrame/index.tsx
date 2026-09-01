import { breakpoints } from "@factorialco/f0-core"
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { Fragment, useEffect, useMemo, useRef, useState } from "react"
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
import { LAYOUT_SETTLE_MS, resolveLayoutTransition } from "./layoutTransition"

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
  const hasPanelContent = Boolean(panelContent || restoringPanelContentId)
  const activeSide = hasPanelContent ? panelContentSide : panelSide
  const isActiveLeft = activeSide === "left"

  // Track fullscreen transitions for smooth exit animation
  const prevFullscreenRef = useRef(isAiChatFullscreen)
  const isEnteringFullscreen = isAiChatFullscreen && !prevFullscreenRef.current
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

  const isInFullscreenTransition =
    isAiChatFullscreen ||
    isFullscreenExitTransitionActive ||
    isExitingFullscreen

  const chatContainerTransition = useMemo(() => {
    if (isEnteringFullscreen)
      return { duration: 0.15, ease: "easeOut" as const }
    if (isExitingFullscreen)
      return { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
    return { duration: 0 }
  }, [isEnteringFullscreen, isExitingFullscreen])

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
  // panel can only grow as far as the room beside it allows. Only the frame
  // knows this: it is the viewport minus whatever the navigation is taking.
  //
  // Read off `getBoundingClientRect()` — the BORDER box — and not a
  // ResizeObserver's `contentRect`. The reservation is this element's padding,
  // so the content box is the thing being computed from the width; feeding it
  // back in would make the panel chase its own tail.
  const mainAreaRef = useRef<HTMLDivElement>(null)
  // True while the frame's own width is moving — i.e. the user is dragging the
  // window edge. Distinct from the handle drag: the panel's width changes the
  // frame's PADDING, not its border box, so this never fires for a handle drag
  // and the two signals stay orthogonal.
  const [isWindowResizing, setIsWindowResizing] = useState(false)
  useEffect(() => {
    const element = mainAreaRef.current
    if (!element || !setFrameWidth) return

    let frame = 0
    let lastWidth = 0
    let settleTimer = 0
    const publish = (): void => {
      cancelAnimationFrame(frame)
      // Coalesced to one frame: a window drag fires these faster than the
      // screen repaints, and every width change re-measures every row of the
      // chat transcript.
      frame = requestAnimationFrame(() => {
        const { width } = element.getBoundingClientRect()
        // A hidden container measures 0. Publishing that would read as "no
        // room" and collapse the panel, so leave the last good width standing.
        if (width <= 0) return

        // Only a CHANGE counts as a resize. The first measurement and the
        // observer's own initial tick are not a gesture, and flagging them
        // would suppress the opening animation on first paint.
        if (lastWidth !== 0 && width !== lastWidth) {
          setIsWindowResizing(true)
          window.clearTimeout(settleTimer)
          settleTimer = window.setTimeout(
            () => setIsWindowResizing(false),
            LAYOUT_SETTLE_MS
          )
        }
        lastWidth = width
        setFrameWidth(width)
      })
    }

    publish()
    const observer = new ResizeObserver(publish)
    observer.observe(element)
    window.addEventListener("resize", publish)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(settleTimer)
      observer.disconnect()
      window.removeEventListener("resize", publish)
    }
  }, [setFrameWidth])

  // The layout is following an input rather than playing a move: a handle drag
  // or a window resize. Everything laid out against the panel's edge reads this
  // so they travel together instead of each easing on its own schedule.
  const isLayoutTracking = Boolean(isResizing) || isWindowResizing
  const layoutTransition = resolveLayoutTransition(isLayoutTracking)

  // Too narrow to seat a panel beside the content: it covers the frame instead
  // of splitting it. Decided in the provider, which knows both the measured
  // frame and the pointer type — the window reads the same value for its
  // resize handle, so the two can never disagree.
  const shouldOverlayPanel = panelOverlays ?? false

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

  useEffect(() => {
    setForceFloat(floatsOverSidebar)
  }, [floatsOverSidebar, setForceFloat])

  useEffect(() => {
    setForceFloat(isAiPromotionChatOpen)
  }, [isAiPromotionChatOpen, setForceFloat])

  useAutoCloseSidebar(floatsOverSidebar, shouldAutoCloseSidebar)

  return (
    <MotionConfig
      reducedMotion={shouldReduceMotion ? "always" : "never"}
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: shouldReduceMotion ? 0 : 0.2,
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
            <div
              className={cn(
                sidebarState !== "locked" ? "z-30" : "z-0",
                !shouldReduceMotion && "transition-all",
                sidebarState === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              )}
              ref={(node) => {
                if (sidebarState === "hidden") {
                  node?.setAttribute("inert", "")
                } else {
                  node?.removeAttribute("inert")
                }
              }}
            >
              <SkipToContentButton contentId="content" />
              {sidebar}
            </div>

            {/* Main area */}
            <motion.div
              ref={mainAreaRef}
              className="relative min-w-0 flex-1"
              // Both paddings animate together, so swapping the visible side
              // (split mode) slides the main content from one edge to the
              // other — covering the outgoing window and uncovering the
              // incoming one, which stay put underneath (z-0 vs z-10).
              animate={{
                paddingRight:
                  isAiChatOpen && !shouldOverlayPanel && !isActiveLeft
                    ? reservedChatWidth
                    : 0,
                paddingLeft:
                  isAiChatOpen && !shouldOverlayPanel && isActiveLeft
                    ? reservedChatWidth
                    : 0,
              }}
              // Instant while the layout is tracking an input, eased for a
              // discrete change. Without this the panel edge snapped to the
              // cursor while the content chased it through a fresh ease
              // restarted every frame — the lag you could see between the two.
              transition={{
                paddingRight: layoutTransition,
                paddingLeft: layoutTransition,
              }}
            >
              {/* Main content */}
              {/* `layout`, not `layoutId`: nothing else in the tree carries
                  that id, and a `layoutId` with no counterpart is
                  shared-element machinery with nothing to share. Kept as a
                  plain layout animation, still narrowed by `layoutDependency`
                  to the sidebar change it was added for. */}
              <motion.main
                id="content"
                layout
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
                layoutDependency={sidebarState}
              >
                {/* Deliberately NOT layout-animated. It used to carry
                    `layout="position"` with no `layoutDependency`, so it
                    re-measured on every render — every frame of a drag, since
                    the width lives in context — and ran a FLIP over the whole
                    application content on a different duration and curve than
                    the padding beneath it. Two animations describing one
                    movement, which by construction cannot stay in step. The
                    padding already moves this; the FLIP only fought it. */}
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
              </motion.main>

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
                  transition={layoutTransition}
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
                        width:
                          shouldOverlayPanel ||
                          (isAiChatFullscreen && isActivePanel)
                            ? "100%"
                            : reservedChatWidth,
                      }}
                      transition={chatContainerTransition}
                      onAnimationComplete={() => {
                        if (isFullscreenExitTransitionActive && isActivePanel) {
                          setIsFullscreenExitTransitionActive(false)
                        }
                      }}
                    >
                      {content}
                    </motion.div>
                  )

                  return (
                    <>
                      {panelContainer(
                        panelSide,
                        !isSplitPanel || !hasPanelContent,
                        <F0AiChat />
                      )}
                      {isSplitPanel &&
                        panelContainer(
                          panelContentSide,
                          hasPanelContent,
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
