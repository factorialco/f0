import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { useAutoClear } from "../hooks/useAutoClear"
import { useAiChat } from "../providers/AiChatStateProvider"

const MIN_CHAT_WIDTH = 300
const MAX_CHAT_WIDTH = 712
const DEFAULT_CHAT_WIDTH = 360

const ResizeHandle = ({
  onResize,
  isResizing,
  setIsResizing,
}: {
  onResize: (deltaX: number) => void
  isResizing: boolean
  setIsResizing: (value: boolean) => void
}) => {
  const startXRef = useRef(0)

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      startXRef.current = e.clientX
      setIsResizing(true)
    },
    [setIsResizing]
  )

  useEffect(() => {
    if (!isResizing) return

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = startXRef.current - e.clientX
      startXRef.current = e.clientX
      onResize(deltaX)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing, onResize, setIsResizing])

  return (
    <div
      className={cn(
        "h-full w-1 mr-0.5 shrink-0 cursor-ew-resize transition-colors",
        "hover:bg-f1-background-secondary-hover",
        isResizing && "bg-f1-background-secondary-hover"
      )}
      onMouseDown={handleMouseDown}
    />
  )
}

export const SidebarWindow = ({ children }: WindowProps) => {
  const {
    open,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    autoClearMinutes,
    resizable,
    chatWidth,
    setChatWidth,
  } = useAiChat()
  const { reset } = useCopilotChatInternal()
  const [isResizing, setIsResizing] = useState(false)

  useAutoClear({
    reset,
    isOpen: open,
    autoClearMinutes,
  })

  const handleResize = useCallback(
    (deltaX: number) => {
      setChatWidth((prev) => {
        const newWidth = prev + deltaX
        return Math.max(MIN_CHAT_WIDTH, Math.min(MAX_CHAT_WIDTH, newWidth))
      })
    },
    [setChatWidth]
  )

  const currentWidth = resizable ? chatWidth : DEFAULT_CHAT_WIDTH

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chat-wrapper"
          className="relative flex h-full"
          initial={
            shouldPlayEntranceAnimation ? { opacity: 0, width: 0 } : false
          }
          animate={{
            opacity: 1,
            width: currentWidth,
          }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            duration: isResizing ? 0 : 0.3,
            ease: [0, 0, 0.1, 1],
          }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          {resizable && (
            <ResizeHandle
              onResize={handleResize}
              isResizing={isResizing}
              setIsResizing={setIsResizing}
            />
          )}
          <div
            aria-hidden={!open}
            className={cn(
              "relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
              !resizable && "max-w-[360px]"
            )}
            style={resizable ? { maxWidth: MAX_CHAT_WIDTH } : undefined}
          >
            <motion.div
              className="relative flex h-full w-full flex-col overflow-hidden"
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
