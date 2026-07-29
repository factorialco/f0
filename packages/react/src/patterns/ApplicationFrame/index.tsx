import { breakpoints } from "@factorialco/f0-core"
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
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

const CONTENT_TRANSITION = { duration: 0.3, ease: [0, 0, 0.1, 1] }

export const applicationFrameSidePanelSides = ["left", "right"] as const
export type ApplicationFrameSidePanelSide =
  (typeof applicationFrameSidePanelSides)[number]

export interface ApplicationFrameSidePanelConfig {
  enabled: boolean
  /**
   * Edge hosted content docks to. Falls back to `ai.panelContentSide`, then
   * `ai.side`, then `"right"`.
   */
  side?: ApplicationFrameSidePanelSide
  /**
   * Allow the shared panel shell to be resized. Falls back to `ai.resizable`
   * when AI is configured, otherwise `false`.
   */
  resizable?: boolean
}

export interface ApplicationFrameProps {
  ai?: Omit<AiChatProviderProps, "children">
  aiPromotion?: Omit<AiPromotionChatProviderProps, "children">
  banner?: React.ReactNode
  /**
   * Generic hosted side panel. It can be enabled independently from `ai`.
   * Use `useApplicationFrameSidePanel` from a descendant to control it.
   */
  sidePanel?: ApplicationFrameSidePanelConfig
  sidebar: React.ReactNode
  children: React.ReactNode
}

function _ApplicationFrame({
  children,
  sidebar,
  banner,
  ai,
  aiPromotion,
  sidePanel,
}: ApplicationFrameProps) {
  return (
    <FrameProvider>
      <ApplicationFrameWithProvider
        ai={ai}
        aiPromotion={aiPromotion}
        sidePanel={sidePanel}
        sidebar={sidebar}
        banner={banner}
      >
        {children}
      </ApplicationFrameWithProvider>
    </FrameProvider>
  )
}

/**
 * Composes the side-panel and AI-promotion providers enabled for this frame.
 */
function ApplicationFrameWithProvider({
  children,
  sidebar,
  banner,
  ai,
  aiPromotion,
  sidePanel,
}: ApplicationFrameProps) {
  const panelContentSide = sidePanel?.enabled
    ? (sidePanel.side ?? ai?.panelContentSide)
    : ai?.panelContentSide
  const panelResizable = sidePanel?.enabled
    ? (sidePanel.resizable ?? ai?.resizable)
    : ai?.resizable

  const content = (
    <ApplicationFrameContent
      ai={ai}
      aiPromotion={aiPromotion}
      sidePanel={sidePanel}
      sidebar={sidebar}
      banner={banner}
    >
      {children}
    </ApplicationFrameContent>
  )

  const contentWithSidePanel =
    ai?.enabled || sidePanel?.enabled ? (
      <F0AiChatProvider
        {...ai}
        enabled={Boolean(ai?.enabled)}
        panelContentSide={panelContentSide}
        resizable={panelResizable}
      >
        {content}
      </F0AiChatProvider>
    ) : (
      content
    )

  if (ai?.enabled || !aiPromotion?.enabled) {
    return contentWithSidePanel
  }

  return (
    <AiPromotionChatProvider {...aiPromotion}>
      {contentWithSidePanel}
    </AiPromotionChatProvider>
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
  sidePanel,
  children,
  sidebar,
  banner,
}: ApplicationFrameProps) {
  const { sidebarState, toggleSidebar, isSmallScreen, setForceFloat } =
    useSidebar()
  const shouldReduceMotion = useReducedMotion()
  const {
    open: isPanelOpenState,
    visualizationMode,
    chatWidth,
    resizable,
    panelSide,
    panelContent,
    panelContentSide,
    restoringPanelContentId,
    canvasContent,
    canvasEntities,
    closeCanvas,
  } = useAiChat()
  const hasPanelContent = Boolean(panelContent || restoringPanelContentId)
  const isPanelOpen =
    isPanelOpenState && (Boolean(ai?.enabled) || hasPanelContent)
  const isPanelFullscreen = isPanelOpen && visualizationMode === "fullscreen"
  const isCanvasMode = visualizationMode === "canvas"
  const { open: isAiPromotionChatOpen } = useAiPromotionChat()
  const reservedChatWidth = resizable ? chatWidth : DEFAULT_CHAT_WIDTH
  const contentTransition = shouldReduceMotion
    ? { duration: 0 }
    : CONTENT_TRANSITION
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
  const activeSide = hasPanelContent ? panelContentSide : panelSide
  const isActiveLeft = activeSide === "left"

  // Track fullscreen transitions for smooth exit animation
  const prevFullscreenRef = useRef(isPanelFullscreen)
  const isEnteringFullscreen = isPanelFullscreen && !prevFullscreenRef.current
  const isExitingFullscreen = !isPanelFullscreen && prevFullscreenRef.current
  const [
    isFullscreenExitTransitionActive,
    setIsFullscreenExitTransitionActive,
  ] = useState(false)

  useEffect(() => {
    if (!isPanelFullscreen && prevFullscreenRef.current) {
      setIsFullscreenExitTransitionActive(true)
    }
    prevFullscreenRef.current = isPanelFullscreen
  }, [isPanelFullscreen])

  const isInFullscreenTransition =
    isPanelFullscreen || isFullscreenExitTransitionActive || isExitingFullscreen

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

  const isSmallViewport = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  // A left-docked panel sits beside the navigation (not over it), so the chat
  // list stays usable — don't float / auto-close the sidebar in that case.
  // Keyed on the side of the *visible* content: in split mode a left-docked
  // conversation coexists with the sidebar while the right AI chat floats it.
  const floatsOverSidebar = isPanelOpen && !isActiveLeft

  useEffect(() => {
    setForceFloat(floatsOverSidebar || isAiPromotionChatOpen)
  }, [floatsOverSidebar, isAiPromotionChatOpen, setForceFloat])

  useAutoCloseSidebar(floatsOverSidebar, shouldAutoCloseSidebar)

  return (
    <MotionConfig
      reducedMotion={shouldReduceMotion ? "always" : "never"}
      transition={{
        ease: [0.25, 0.1, 0.25, 1],
        duration: shouldReduceMotion ? 0 : 0.2,
      }}
    >
      <div className="scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]">
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
              className="relative min-w-0 flex-1"
              // Both paddings animate together, so swapping the visible side
              // (split mode) slides the main content from one edge to the
              // other — covering the outgoing window and uncovering the
              // incoming one, which stay put underneath (z-0 vs z-10).
              animate={{
                paddingRight:
                  isPanelOpen && !isSmallViewport && !isActiveLeft
                    ? reservedChatWidth
                    : 0,
                paddingLeft:
                  isPanelOpen && !isSmallViewport && isActiveLeft
                    ? reservedChatWidth
                    : 0,
              }}
              transition={{
                paddingRight: contentTransition,
                paddingLeft: contentTransition,
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
                    : "overflow-auto",
                  !isPanelOpen && !isAiPromotionChatOpen && "xs:pr-1",
                  // Left seam so the content never sticks to the viewport edge:
                  // none when the sidebar is active (it provides the gap) or when
                  // a left-docked panel is OPEN (it reserves the space); otherwise
                  // a small seam. Gated on the panel being open — not just
                  // configured left — so a closed left panel still gets the seam.
                  sidebarState === "locked"
                    ? "pl-0"
                    : isActiveLeft && isPanelOpen
                      ? "pl-0"
                      : "xs:pl-1",
                  // Consistent breakpoint with the other seams (was a bare `pr-1`).
                  isPanelOpen && isActiveLeft && "xs:pr-1"
                )}
                layoutDependency={sidebarState}
              >
                <motion.div
                  className={cn(
                    "flex max-w-full flex-1",
                    isInFullscreenTransition
                      ? "overflow-hidden"
                      : "overflow-auto"
                  )}
                  layout="position"
                >
                  {children}
                </motion.div>
              </motion.main>

              {/* Chat */}
              {/* Canvas dashboard panel */}
              {ai?.enabled && isCanvasMode && canvasContent && (
                <div
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
                  style={
                    isSmallViewport
                      ? undefined
                      : isPanelLeft
                        ? { left: reservedChatWidth }
                        : { right: reservedChatWidth }
                  }
                >
                  <F0CanvasPanel
                    content={canvasContent}
                    onClose={closeCanvas}
                    entities={canvasEntities}
                    side={panelSide}
                  />
                </div>
              )}

              {(ai?.enabled || sidePanel?.enabled) &&
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
                          (isPanelFullscreen && isActivePanel)
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
                      {ai?.enabled &&
                        panelContainer(
                          panelSide,
                          !isSplitPanel || !hasPanelContent,
                          <F0AiChat />
                        )}
                      {(!ai?.enabled || isSplitPanel) &&
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

export {
  useApplicationFrameSidePanel,
  type ApplicationFrameSidePanelReturnValue,
  type ApplicationFrameSidePanelVisualizationMode,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
