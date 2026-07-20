import type { ReactNode } from "react"

import { breakpoints } from "@factorialco/f0-core"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useMemo, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

import { cn } from "@/lib/utils"

import { DropOverlay } from "../../../F0AiChatTextArea"
import { F0AiPong } from "../../../F0AiPong"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "../../utils/constants"
import { ResizeHandle } from "./ResizeHandle"

export const SidebarWindow = ({ children }: { children?: ReactNode }) => {
  const {
    open,
    visualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    resizable,
    setChatWidth,
    resetChatWidth,
    fileAttachments,
    isClarifying,
    fileDragOver,
    setFileDragOver,
    processDroppedFiles,
    activeGame,
    closeGame,
    panelSide,
  } = useAiChat()
  const isCanvasMode = visualizationMode === "canvas"
  // Hosts dock the whole panel left for a chat-first experience (communications);
  // the default is right. The AI chat follows the panel side too.
  const isLeft = panelSide === "left"

  const dragCounterRef = useRef(0)
  const canDrop = fileAttachments?.onUploadFiles != null && !isClarifying

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
          className={cn(
            "bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background md:py-1",
            // Right seam (against the viewport edge — no sidebar there) is owned
            // here: always wanted right-docked or filling the screen. The LEFT
            // seam depends on whether the app sidebar is present (it provides the
            // gap), which only the host frame knows, so ApplicationFrame owns it.
            fullscreen ? "md:pr-1" : isLeft ? "mr-auto" : "ml-auto md:pr-1"
          )}
          initial={
            shouldPlayEntranceAnimation ? { opacity: 0, width: 0 } : false
          }
          animate={{
            opacity: 1,
            width: "100%",
          }}
          exit={{ opacity: 0, width: 0 }}
          transition={wrapperTransition}
          style={{ transformOrigin: isLeft ? "left center" : "right center" }}
          onAnimationComplete={() => {
            if (shouldPlayEntranceAnimation) {
              setShouldPlayEntranceAnimation(false)
            }
          }}
        >
          {/* Resize seam: inner (left) edge for a right-docked panel, inner
              (right) edge for a left-docked one — so it renders after the card. */}
          {resizable && !fullscreen && !isSmallScreen && !isLeft && (
            <ResizeHandle
              onResize={handleResize}
              onReset={resetChatWidth}
              isResizing={isResizing}
              setIsResizing={setIsResizing}
              isCanvasMode={isCanvasMode}
              side="right"
            />
          )}
          <div
            aria-hidden={!open}
            className={cn(
              "relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary",
              // In canvas mode the chat sits flush against the canvas with
              // only the ResizeHandle (1px) between them. Dropping the seam-side
              // border avoids stacking canvas-border + handle + chat-border
              // = 3px of visual separation; the handle is the single seam.
              isCanvasMode &&
                (isLeft ? "border-r-transparent" : "border-l-transparent"),
              isCanvasMode
                ? isLeft
                  ? "xs:rounded-l-xl"
                  : "xs:rounded-r-xl"
                : "xs:rounded-xl"
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
            {activeGame === "pong" && <F0AiPong onClose={closeGame} />}
          </div>
          {resizable && !fullscreen && !isSmallScreen && isLeft && (
            <ResizeHandle
              onResize={handleResize}
              onReset={resetChatWidth}
              isResizing={isResizing}
              setIsResizing={setIsResizing}
              isCanvasMode={isCanvasMode}
              side="left"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
