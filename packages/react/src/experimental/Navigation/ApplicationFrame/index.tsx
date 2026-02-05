import { breakpoints } from "@factorialco/f0-core"
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { Fragment, useEffect, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"

import {
  AiPromotionChat,
  AiPromotionChatProvider,
  AiPromotionChatProviderProps,
} from "@/experimental/AiPromotionChat"
import { useAiPromotionChat } from "@/experimental/AiPromotionChat/providers/AiPromotionChatStateProvider"
import { experimentalComponent } from "@/lib/experimental"

import {
  F0AiChat,
  F0AiChatProvider,
  AiChatProviderProps,
} from "../../../ai/F0AiChat"
import { useAiChat } from "../../../ai/F0AiChat/providers/AiChatStateProvider"
import { useReducedMotion } from "../../../lib/a11y"
import { useI18n } from "../../../lib/providers/i18n"
import { cn, focusRing } from "../../../lib/utils"
import { FrameProvider, SidebarState, useSidebar } from "./FrameProvider"

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
    <FrameProvider>
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
    </FrameProvider>
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
  const { open: isAiChatOpen } = useAiChat()
  const { open: isAiPromotionChatOpen } = useAiPromotionChat()
  const shouldAutoCloseSidebar = useMediaQuery(
    `(max-width: ${breakpoints.xl}px)`,
    {
      initializeWithValue: true,
    }
  )

  useEffect(() => {
    setForceFloat(isAiChatOpen)
  }, [isAiChatOpen, setForceFloat])

  useEffect(() => {
    setForceFloat(isAiPromotionChatOpen)
  }, [isAiPromotionChatOpen, setForceFloat])

  useAutoCloseSidebar(isAiChatOpen, shouldAutoCloseSidebar)

  return (
    <>
      <MotionConfig
        reducedMotion={shouldReduceMotion ? "always" : "never"}
        transition={{
          ease: [0.25, 0.1, 0.25, 1],
          duration: shouldReduceMotion ? 0 : 0.2,
        }}
      >
        <div className="grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch">
          <div className="col-[1/-1]">{banner}</div>
          <LayoutGroup id="ai-chat-group">
            <div className="relative isolate flex h-full">
              <AnimatePresence>
                {sidebarState === "unlocked" && (
                  <motion.nav
                    className={cn(
                      "fixed inset-0 z-[5] bg-f1-background-inverse",
                      {
                        hidden: !isSmallScreen,
                      }
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                    onClick={() => toggleSidebar()}
                  />
                )}
              </AnimatePresence>
              <div
                className={cn(
                  { "transition-all": !shouldReduceMotion },
                  sidebarState === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
                )}
                ref={(node) => {
                  // React types does not yet support ["inert" attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert) at the moment
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
              <motion.main
                id="content"
                layoutId="main"
                className={cn(
                  "relative flex max-w-full flex-1 overflow-auto xs:py-1",
                  ai && ai.enabled ? "xs:pr-0.5" : "xs:pr-1",
                  sidebarState === "locked" ? "pl-0" : "xs:pl-1"
                )}
                layoutDependency={[sidebarState]}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <motion.div
                  className="flex max-w-full flex-1 overflow-auto"
                  layout="position"
                >
                  {children}
                </motion.div>
              </motion.main>
              {ai && ai.enabled && (
                <div className="py-1 pr-1 pl-0 h-full flex">
                  <F0AiChat />
                </div>
              )}
              {aiPromotion && aiPromotion.enabled && <AiPromotionChat />}
            </div>
          </LayoutGroup>
        </div>
      </MotionConfig>
    </>
  )
}
