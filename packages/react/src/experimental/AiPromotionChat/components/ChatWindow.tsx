import { type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"

import { useAutoClear } from "../hooks/useAutoClear"
import { useAiPromotionChat } from "../providers/AiPromotionChatStateProvider"

export const SidebarWindow = ({ children }: WindowProps) => {
  const {
    open,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    autoClearMinutes,
  } = useAiPromotionChat()
  useAutoClear({
    reset: () => {},
    isOpen: open,
    autoClearMinutes,
  })

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chat-window"
          aria-hidden={!open}
          className="relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden "
          initial={
            shouldPlayEntranceAnimation ? { opacity: 0, width: 0 } : false
          }
          animate={{ opacity: 1, width: 360 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            duration: 0.3,
            ease: [0, 0, 0.1, 1],
          }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          <div className="border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full">
            <motion.div
              className="relative flex h-full w-full flex-col overflow-x-hidden "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldPlayEntranceAnimation ? 0.3 : 0.05,
                ease: "easeOut",
                delay: shouldPlayEntranceAnimation ? 0.2 : 0,
              }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
