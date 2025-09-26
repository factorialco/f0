import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "motion/react"
import { cn, focusRing } from "../../../lib/utils"

import { useReducedMotion } from "../../../lib/a11y"
import { useI18n } from "../../../lib/providers/i18n"

import { Fragment } from "react"
import { AiChat, AiChatProvider, AiChatProviderProps } from "../../AiChat"
import { FrameProvider, useSidebar } from "./FrameProvider"

interface ApplicationFrameProps {
  ai?: Omit<AiChatProviderProps, "children">
  banner?: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

export function ApplicationFrame({
  children,
  sidebar,
  banner,
  ai,
}: ApplicationFrameProps) {
  const AiProvider = ai ? AiChatProvider : Fragment
  return (
    <FrameProvider>
      <AiProvider {...ai}>
        <ApplicationFrameContent ai={ai} sidebar={sidebar} banner={banner}>
          {children}
        </ApplicationFrameContent>
      </AiProvider>
    </FrameProvider>
  )
}

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

function ApplicationFrameContent({
  ai,
  children,
  sidebar,
  banner,
}: ApplicationFrameProps) {
  const { sidebarState, toggleSidebar, isSmallScreen } = useSidebar()
  const shouldReduceMotion = useReducedMotion()

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
                    onClick={toggleSidebar}
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
                  "relative flex max-w-full flex-1 overflow-auto xs:py-1 xs:pr-1",
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
              {ai && ai.enabled && <AiChat />}
            </div>
          </LayoutGroup>
        </div>
      </MotionConfig>
    </>
  )
}
