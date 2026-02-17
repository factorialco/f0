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
} from "@/sds/ai/F0AiChat"
import { DEFAULT_CHAT_WIDTH } from "@/sds/ai/F0AiChat/constants"
import { useAiChat } from "@/sds/ai/F0AiChat/providers/AiChatStateProvider"

import { FrameProvider, SidebarState, useSidebar } from "./FrameProvider"

const CONTENT_TRANSITION = { duration: 0.3, ease: [0, 0, 0.1, 1] }

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
 *   z-5  Sidebar ()
 *   z-20  Sidebar backdrop / Chat (fullscreen)
 *   z-10  Main content
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
    chatWidth,
    resizable,
  } = useAiChat()
  const isAiChatFullscreen = visualizationMode === "fullscreen"
  const { open: isAiPromotionChatOpen } = useAiPromotionChat()
  const reservedChatWidth = resizable ? chatWidth : DEFAULT_CHAT_WIDTH

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

  useEffect(() => {
    setForceFloat(isAiChatOpen)
  }, [isAiChatOpen, setForceFloat])

  useEffect(() => {
    setForceFloat(isAiPromotionChatOpen)
  }, [isAiPromotionChatOpen, setForceFloat])

  useAutoCloseSidebar(isAiChatOpen, shouldAutoCloseSidebar)

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
              animate={{
                paddingRight: isAiChatOpen ? reservedChatWidth : 0,
              }}
              transition={{ paddingRight: CONTENT_TRANSITION }}
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
                  !isAiChatOpen && !isAiPromotionChatOpen && "xs:pr-1",
                  sidebarState === "locked" ? "pl-0" : "xs:pl-1"
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
              {ai?.enabled && (
                <motion.div
                  className={cn(
                    "pointer-events-none absolute right-0 top-0 bottom-0",
                    "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                    isInFullscreenTransition ? "z-20" : "z-0",
                    sidebarState === "hidden" && isInFullscreenTransition
                      ? "pl-1"
                      : "pl-0"
                  )}
                  animate={{
                    width: isAiChatFullscreen ? "100%" : reservedChatWidth,
                  }}
                  transition={chatContainerTransition}
                  onAnimationComplete={() => {
                    if (isFullscreenExitTransitionActive) {
                      setIsFullscreenExitTransitionActive(false)
                    }
                  }}
                >
                  <F0AiChat />
                </motion.div>
              )}
            </motion.div>

            {aiPromotion?.enabled && <AiPromotionChat />}
          </div>
        </LayoutGroup>
      </div>
    </MotionConfig>
  )
}
