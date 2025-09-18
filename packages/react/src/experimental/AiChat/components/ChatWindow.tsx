import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { createContext, useContext, useMemo, useState } from "react"
import { useAutoClear } from "../hooks/useAutoClear"
import { useAiChat } from "../providers/AiChatStateProvider"

interface ChatWindowContextType {
  reachedMaxHeight: boolean
  messageContainerScrollTop: number
  setMessageContainerScrollTop: (scrollTop: number) => void
}

const ChatWindowContext = createContext<ChatWindowContextType>({
  reachedMaxHeight: false,
  messageContainerScrollTop: 0,
  setMessageContainerScrollTop: () => {},
})

export const useChatWindowContext = () => useContext(ChatWindowContext)

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
  const [messageContainerScrollTop, setMessageContainerScrollTop] = useState(0)
  const chatWindowContext = useMemo(
    () => ({
      reachedMaxHeight: true,
      messageContainerScrollTop,
      setMessageContainerScrollTop,
    }),
    [messageContainerScrollTop]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chat-window"
          aria-hidden={!open}
          className="relative flex h-full max-w-[360px] flex-col overflow-hidden bg-f1-special-page shadow xs:rounded-xl"
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
            className="relative flex h-full w-[360px] flex-col overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldPlayEntranceAnimation ? 0.3 : 0.05,
              ease: "easeOut",
              delay: shouldPlayEntranceAnimation ? 0.2 : 0,
            }}
          >
            <ChatWindowContext.Provider value={chatWindowContext}>
              {children}
            </ChatWindowContext.Provider>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
