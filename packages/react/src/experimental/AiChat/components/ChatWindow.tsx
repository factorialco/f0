import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useAutoClear } from "../hooks/useAutoClear"
import { useAiChat } from "../providers/AiChatStateProvider"

export const SidebarWindow = ({ children }: WindowProps) => {
  const {
    open,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    autoClearMinutes,
  } = useAiChat()
  const { reset } = useCopilotChatInternal()
  useAutoClear({
    reset,
    isOpen: open,
    autoClearMinutes,
  })

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chat-window"
          aria-hidden={!open}
          className="relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl"
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
          <motion.div
            className="relative flex h-full w-[360px] flex-col overflow-hidden"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const FullscreenWindow = ({ children }: WindowProps) => {
  const {
    open,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    autoClearMinutes,
  } = useAiChat()
  const { reset } = useCopilotChatInternal()

  useAutoClear({
    reset,
    isOpen: open,
    autoClearMinutes,
  })

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="fullscreen-chat-window"
          aria-hidden={!open}
          className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col overflow-hidden bg-f1-special-page"
          initial={shouldPlayEntranceAnimation ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
          <motion.div
            className="relative flex flex-1 h-screen w-full flex-col justify-center overflow-hidden"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
