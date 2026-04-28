import { type WindowProps } from "@copilotkit/react-ui"
import { breakpoints } from "@factorialco/f0-core"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useMemo, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

import { cn } from "@/lib/utils"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "../../utils/constants"
import { DinoGame } from "../DinoGame"
import { PongGame } from "../PongGame"
import { DropOverlay } from "../input/ChatTextarea/DropOverlay"
import { ResizeHandle } from "./ResizeHandle"

export const SidebarWindow = ({ children }: WindowProps) => {
  const {
    open,
    visualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    resizable,
    setChatWidth,
    resetChatWidth,
    fileAttachments,
    clarifyingQuestion,
    fileDragOver,
    setFileDragOver,
    processDroppedFiles,
    activeGame,
    closeGame,
  } = useAiChat()
  const isCanvasMode = visualizationMode === "canvas"

  const dragCounterRef = useRef(0)
  const canDrop =
    fileAttachments?.onUploadFiles != null && clarifyingQuestion === null

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounterRef.current++
      if (canDrop) setFileDragOver(true)
    },
    [canDrop, setFileDragOver]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragLeave = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounterRef.current--
      if (dragCounterRef.current <= 0) {
        dragCounterRef.current = 0
        setFileDragOver(false)
      }
    },
    [setFileDragOver]
  )

  // Files are only accepted when dropped onto the DropOverlay itself.
  // The window-level drop handler exists only to reset the visibility
  // state if the user drops anywhere else inside the chat.
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounterRef.current = 0
      setFileDragOver(false)
    },
    [setFileDragOver]
  )
  const fullscreen = visualizationMode === "fullscreen"
  const [isResizing, setIsResizing] = useState(false)
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
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
          className="bg-f1-transparent pointer-events-auto relative ml-auto flex h-full dark:bg-f1-background md:py-1 md:pr-1"
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
          {resizable && !fullscreen && !isSmallScreen && (
            <ResizeHandle
              onResize={handleResize}
              onReset={resetChatWidth}
              isResizing={isResizing}
              setIsResizing={setIsResizing}
              narrow={isCanvasMode}
            />
          )}
          <div
            aria-hidden={!open}
            className={cn(
              "relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page",
              // In canvas mode the chat sits flush against the canvas with
              // only the ResizeHandle (1px) between them. Dropping the left
              // border avoids stacking canvas-border + handle + chat-border
              // = 3px of visual separation; the handle is the single seam.
              isCanvasMode ? "xs:rounded-r-xl border-l-0" : "xs:rounded-xl"
            )}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
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
            {canDrop && (
              <DropOverlay
                visible={fileDragOver}
                onFilesDropped={(files) => {
                  dragCounterRef.current = 0
                  setFileDragOver(false)
                  processDroppedFiles(files)
                }}
              />
            )}
            {activeGame === "dino" && <DinoGame onClose={closeGame} />}
            {activeGame === "pong" && <PongGame onClose={closeGame} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
