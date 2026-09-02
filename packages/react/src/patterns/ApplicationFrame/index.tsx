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
import { F0Meeting } from "@/sds/meetings/F0Meeting"
import { useMeetingSurfaceOptional } from "@/sds/meetings/F0Meeting/providers/MeetingSurfaceProvider"
import { type F0MeetingProviderProps } from "@/sds/meetings/F0Meeting/types"

import { AiChatBridgeProvider, AiChatBridgePublisher } from "./AiChatBridge"
import { FrameProvider, SidebarState, useSidebar } from "./FrameProvider"
import { MeetingOneSwitch } from "./MeetingOneSwitch"

const CONTENT_TRANSITION = { duration: 0.3, ease: [0, 0, 0.1, 1] }
// Module-level so the reference is stable across renders. Motion cancels an
// in-flight animation when it sees a different `transition` and does not
// restart it, so handing it a fresh object literal each render is a way to
// strand an animation part-way.
const INSTANT_TRANSITION = { duration: 0 }

export interface ApplicationFrameProps {
  ai?: Omit<AiChatProviderProps, "children">
  aiPromotion?: Omit<AiPromotionChatProviderProps, "children">
  /**
   * Live meeting. The frame owns the one place a call can render; the host owns
   * the runtime. `runtime: null` (or omitting the prop) means no meeting.
   *
   * Unlike the chat, the surface does not live inside the frame's stacking
   * context — it portals to `document.body`, because a floating window cannot
   * work under a transformed, overflow-hidden ancestor. See `F0MeetingSurface`.
   */
  meeting?: Omit<F0MeetingProviderProps, "children">
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
  meeting,
}: ApplicationFrameProps) {
  // The call's header gets a way into the AI chat. It is composed here rather
  // than left to the host because the header renders outside the AI provider —
  // see `AiChatBridge` — so the host could not wire it even if it wanted to.
  const headerContent = (
    <>
      {meeting?.headerContent}
      <MeetingOneSwitch />
    </>
  )

  return (
    <FrameProvider>
      <AiChatBridgeProvider>
        {/* Above the AI provider: switching the call between fullscreen and a
            floating window must not re-render the chat. */}
        <F0Meeting
          {...meeting}
          runtime={meeting?.runtime ?? null}
          headerContent={headerContent}
        >
          <ApplicationFrameWithProvider
            ai={ai}
            aiPromotion={aiPromotion}
            sidebar={sidebar}
            banner={banner}
          >
            {children}
          </ApplicationFrameWithProvider>
        </F0Meeting>
      </AiChatBridgeProvider>
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
      {/* Renders nothing: reads the AI toggle from inside the provider and
          publishes it upward, where the meeting header can reach it. */}
      <AiChatBridgePublisher />
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
 *
 * The meeting surface is NOT in here: it portals to `document.body`, so it
 * competes with the other body-level portals instead. That band is
 *   z-40  Meeting (floating window / minimized pill)
 *   z-45  Meeting (fullscreen)
 * which is reserved for meetings and deliberately sits below Radix dialogs
 * (z-50) so a modal can still cover a call, and below toasts (z-[100]).
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
    chatWidth,
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
  const reservedChatWidth = resizable ? chatWidth : DEFAULT_CHAT_WIDTH
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

  // Instant while the resize handle is being dragged, eased otherwise.
  //
  // The flag flips only on drag start / drag end, which is what makes this
  // safe. Motion CANCELS an in-flight animation when `transition` changes and
  // does not restart it (the target is unchanged), stranding the canvas
  // mid-travel — verified in the browser: the canvas froze part-way across the
  // chat and stayed there. Keying off the drag never swaps the transition while
  // an animation is running: a drag holds `{ duration: 0 }` for its whole
  // duration, and a `coversChat` flip holds the eased curve for its whole
  // animation. Keying off "is `coversChat` changing" is what does not work — it
  // swaps the transition one render after starting the animation.
  const canvasInsetTransition = isResizing
    ? INSTANT_TRANSITION
    : CONTENT_TRANSITION

  const shouldAutoCloseSidebar = useMediaQuery(
    `(max-width: ${breakpoints.xl}px)`,
    { initializeWithValue: true }
  )

  const isSmallViewport = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  // The meeting reserves width the same way the chat does, but from its own
  // provider: its window lives in a portal on `document.body`, so the only way
  // it can push content instead of covering it is for the frame to make room.
  const meeting = useMeetingSurfaceOptional()
  const isMeetingPanel = meeting?.effectiveMode === "panel"
  const meetingWidth = isMeetingPanel ? (meeting?.panelWidth ?? 0) : 0

  // Publish the content region so the call's panel lands between the
  // navigation and the content instead of on top of the sidebar. The window is
  // `fixed` and lives in a portal, so it has no other way to know where
  // "inside the frame" is. Padding lives inside this box, so animating it does
  // not move the border box and this cannot feed back on itself.
  const mainAreaRef = useRef<HTMLDivElement>(null)
  const setMeetingFrameRect = meeting?.setFrameRect
  useEffect(() => {
    const element = mainAreaRef.current
    if (!element || !setMeetingFrameRect) return

    let frame = 0
    const publish = (): void => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect()
        setMeetingFrameRect({
          x: bounds.left,
          y: bounds.top,
          width: bounds.width,
          height: bounds.height,
        })
      })
    }

    publish()
    const observer = new ResizeObserver(publish)
    observer.observe(element)
    window.addEventListener("resize", publish)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", publish)
      setMeetingFrameRect(null)
    }
  }, [setMeetingFrameRect])

  // The call's side panel and the chat's compete for the same slot, and they
  // may never share it. One effect owns the whole rule, because two would fire
  // on the same state and undo each other — opening a chat would trip the
  // branch that closes it.
  //
  // Who yields is decided by WHO JUST ARRIVED, which is the user's most recent
  // explicit act. When neither just changed (a restored mode, a first render)
  // the call keeps the slot and the chat is cleared out of it.
  const { setOpen: setAiChatOpen, clearPanelContent: clearAiPanelContent } =
    useAiChat()
  const setMeetingMode = meeting?.setMode
  const wasContested = useRef({ chat: isAiChatOpen, panel: isMeetingPanel })

  useEffect(() => {
    const previous = wasContested.current
    wasContested.current = { chat: isAiChatOpen, panel: isMeetingPanel }
    if (!isMeetingPanel || !isAiChatOpen) return

    if (!previous.chat) {
      // The chat just opened: the call steps aside rather than swallowing it.
      setMeetingMode?.("floating")
      return
    }
    clearAiPanelContent()
    setAiChatOpen(false)
  }, [
    isMeetingPanel,
    isAiChatOpen,
    setMeetingMode,
    clearAiPanelContent,
    setAiChatOpen,
  ])

  // A left panel sits beside the navigation (not over it), so the chat list
  // stays usable — don't float / auto-close the sidebar in that case. Keyed on
  // the side of the *visible* content: in split mode a left-docked
  // conversation coexists with the sidebar while the right AI chat floats it.
  // The call is always on the left, so it never feeds this.
  const floatsOverSidebar = isAiChatOpen && !isActiveLeft

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
                paddingRight: isSmallViewport
                  ? 0
                  : isAiChatOpen && !isActiveLeft
                    ? reservedChatWidth
                    : 0,
                paddingLeft: isSmallViewport
                  ? 0
                  : isMeetingPanel
                    ? meetingWidth
                    : isAiChatOpen && isActiveLeft
                      ? reservedChatWidth
                      : 0,
              }}
              transition={{
                paddingRight: CONTENT_TRANSITION,
                paddingLeft: CONTENT_TRANSITION,
              }}
            >
              {/* Main content */}
              <motion.main
                id="content"
                layoutId="main"
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
                <motion.div
                  className={cn(
                    "flex max-w-full flex-1",
                    isInFullscreenTransition
                      ? "overflow-hidden"
                      : "overflow-x-hidden overflow-y-auto"
                  )}
                  layout="position"
                >
                  {children}
                </motion.div>
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
                    isSmallViewport
                      ? "fixed inset-0 z-[50]"
                      : cn(
                          "absolute bottom-0 top-0 z-[21]",
                          isPanelLeft ? "right-0" : "left-0"
                        )
                  )}
                  // Animated on the same curve as the main content's padding, so
                  // the canvas widens in step with the chat panel collapsing
                  // instead of snapping across the gap it leaves behind. Both
                  // edges are always written (motion retains the last animated
                  // value, so leaving one out would strand a stale inset when
                  // the viewport crosses the small breakpoint).
                  animate={
                    isSmallViewport
                      ? { left: 0, right: 0 }
                      : isPanelLeft
                        ? { left: reservedCanvasInset, right: 0 }
                        : { left: 0, right: reservedCanvasInset }
                  }
                  transition={canvasInsetTransition}
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
                        isSmallViewport
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
                          isSmallViewport ||
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
