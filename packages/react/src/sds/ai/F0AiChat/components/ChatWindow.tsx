import { type WindowProps } from "@copilotkit/react-ui"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "../constants"
import { useAiChat } from "../providers/AiChatStateProvider"

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
    visualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    resizable,
    setChatWidth,
    resetChatWidth,
  } = useAiChat()
  const fullscreen = visualizationMode === "fullscreen"
  const [isResizing, setIsResizing] = useState(false)

  const handleResize = useCallback(
    (deltaX: number) => {
      setChatWidth((prev) => {
        const newWidth = prev + deltaX
        return Math.max(MIN_CHAT_WIDTH, Math.min(MAX_CHAT_WIDTH, newWidth))
      })
    },
    [setChatWidth]
  )

  const wrapperTransition = useMemo(() => {
    if (isResizing) return { duration: 0 }
    if (shouldPlayEntranceAnimation)
      return { duration: 0.3, ease: [0, 0, 0.1, 1] as const }
    return { duration: 0.3, ease: [0, 0, 0.1, 1] as const }
  }, [isResizing, shouldPlayEntranceAnimation])

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
            width: "100%",
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
            className="relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl"
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
