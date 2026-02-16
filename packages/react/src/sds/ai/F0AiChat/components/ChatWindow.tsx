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
  onReset,
  isResizing,
  setIsResizing,
}: {
  onResize: (deltaX: number) => void
  onReset: () => void
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

  const handleDoubleClick = useCallback(() => {
    onReset()
  }, [onReset])

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
      onDoubleClick={handleDoubleClick}
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
    resetChatWidth,
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
              onReset={resetChatWidth}
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

export const FullscreenWindow = ({ children }: WindowProps) => {
  const {
    open,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    autoClearMinutes,
    visualizationMode,
  } = useAiChat()

  const isFullscreen = visualizationMode === "fullscreen"

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
          className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col overflow-hidden bg-f1-special-page"
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
            className={cn(
              "relative flex h-screen w-full flex-1 flex-col overflow-hidden pb-4",
              isFullscreen && "gap-4 justify-center"
            )}
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
