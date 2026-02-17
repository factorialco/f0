import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { useAutoClear } from "../hooks/useAutoClear"
import { useAiChat } from "../providers/AiChatStateProvider"

const MIN_CHAT_WIDTH = 300
const MAX_CHAT_WIDTH = 712
export const DEFAULT_CHAT_WIDTH = 360

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

  const handleDoubleClick = useCallback(async () => {
    setIsResizing(true)
    await onReset()
    setIsResizing(false)
  }, [onReset, setIsResizing])

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
        "flex h-full w-2 flex-shrink-0 cursor-ew-resize items-stretch justify-center transition-colors",
        "[&>div]:hover:bg-f1-background-secondary-hover",
        isResizing && "[&>div]:bg-f1-background-secondary-hover"
      )}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-1 rounded-full" />
    </div>
  )
}

export const SidebarWindow = ({ children }: WindowProps) => {
  const {
    open,
    fullscreen,
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

  // Track fullscreen direction for different enter/exit transitions
  const prevFullscreenRef = useRef(fullscreen)
  const isEnteringFullscreen = fullscreen && !prevFullscreenRef.current
  const isExitingFullscreen = !fullscreen && prevFullscreenRef.current
  useEffect(() => {
    prevFullscreenRef.current = fullscreen
  }, [fullscreen])

  const wrapperTransition = useMemo(() => {
    if (isResizing) return { duration: 0 }
    if (shouldPlayEntranceAnimation)
      return { duration: 0.3, ease: [0, 0, 0.1, 1] as const }
    // Entering fullscreen: fast, the white fills instantly
    if (isEnteringFullscreen)
      return { duration: 0.15, ease: "easeOut" as const }
    // Exiting fullscreen: smooth shrink towards the right
    if (isExitingFullscreen)
      return { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }
    // Normal open/close
    return { duration: 0.3, ease: [0, 0, 0.1, 1] as const }
  }, [
    isResizing,
    shouldPlayEntranceAnimation,
    isEnteringFullscreen,
    isExitingFullscreen,
  ])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chat-wrapper"
          className="pointer-events-auto bg-f1-transparent relative ml-auto flex h-full dark:bg-f1-background xs:rounded-xl py-1 pr-1"
          initial={
            shouldPlayEntranceAnimation ? { opacity: 0, width: 0 } : false
          }
          animate={{
            opacity: 1,
            width: fullscreen ? "100%" : currentWidth,
          }}
          exit={{ opacity: 0, width: 0 }}
          transition={wrapperTransition}
          style={{ transformOrigin: "right center" }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          {resizable && !fullscreen && (
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
              !fullscreen && !resizable && "max-w-[360px]"
            )}
            style={
              resizable && !fullscreen
                ? { maxWidth: MAX_CHAT_WIDTH }
                : undefined
            }
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
