import { useChatContext, type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { createContext, useContext, useMemo, useState } from "react"
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
  const { open } = useChatContext()
  const { shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation } =
    useAiChat()
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
          aria-hidden={!open}
          className="relative flex h-full w-[360px] flex-col overflow-hidden bg-f1-special-page shadow xs:rounded-xl"
          initial={shouldPlayEntranceAnimation ? { opacity: 0, x: 100 } : false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          <ChatWindowContext.Provider value={chatWindowContext}>
            {children}
          </ChatWindowContext.Provider>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
