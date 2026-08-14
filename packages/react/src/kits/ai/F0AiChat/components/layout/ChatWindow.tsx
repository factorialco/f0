import type { ReactNode } from "react"

import { breakpoints } from "@factorialco/f0-core"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

import type { WidgetDragStartDetail } from "@/lib/dnd/widgetDragEvents"

import { useReducedMotion } from "@/lib/a11y"
import { WIDGET_DRAG_END, WIDGET_DRAG_START } from "@/lib/dnd/widgetDragEvents"
import { cn } from "@/lib/utils"

import { DropOverlay } from "../../../F0AiChatTextArea"
import { F0AiPong } from "../../../F0AiPong"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "../../utils/constants"
import { ResizeHandle } from "./ResizeHandle"

export const SidebarWindow = ({
  children,
  visible,
  side,
  exitStyle = "shrink",
}: {
  children?: ReactNode
  /** Overrides the context `open` as the mount condition — lets the frame
   * drive per-window visibility when chat and hosted content split edges. */
  visible?: boolean
  /** Edge this window docks to. Defaults to the context `panelSide`. */
  side?: "left" | "right"
  /**
   * Exit animation. "shrink" is the regular close (width + fade). "hold"
   * keeps the window still while the main content slides over it — used for
   * the swap between the AI chat and hosted content on opposite edges, so
   * the panels feel like they were always there.
   */
  exitStyle?: "shrink" | "hold"
}) => {
  const {
    open,
    visualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    resizable,
    setChatWidth,
    resetChatWidth,
    setIsResizing,
    fileAttachments,
    isClarifying,
    fileDragOver,
    setFileDragOver,
    processDroppedFiles,
    setPendingQuote,
    activeGame,
    closeGame,
    panelSide,
  } = useAiChat()
  const isCanvasMode = visualizationMode === "canvas"
  const reducedMotion = useReducedMotion()
  // Hosts dock the whole panel left for a chat-first experience (communications);
  // the default is right. The AI chat follows the panel side too.
  const isLeft = (side ?? panelSide) === "left"
  const isVisible = visible ?? open

  // Was the panel already open on the previous committed render? A window
  // mounting while it was (a swap between the chat and hosted content on
  // opposite edges) must appear in place — the main content slides to reveal
  // it — instead of playing the entrance animation.
  const prevOpenRef = useRef(false)
  useEffect(() => {
    prevOpenRef.current = open
  })

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

  // ─── Dashboard widget drag → quote ──────────────────────────
  // A widget drag is a plain pointer gesture, not native HTML5 drag-and-drop,
  // so it fires no `dragenter` and the file handlers above never see it. The
  // grid announces the gesture on `window` instead, which lets the invitation
  // appear the moment the drag starts rather than when the cursor finally
  // arrives — the user can see where the widget can go before aiming for it.
  //
  // The ref — not the state — is what the release reads, so a release that
  // lands in the same React batch as the state update still sees the title
  // instead of a stale `null`. The state exists to drive the overlay's render.
  const dragQuoteRef = useRef<string | null>(null)
  const [dragQuote, setDragQuote] = useState<string | null>(null)

  const setDragQuoteBoth = useCallback((title: string | null) => {
    dragQuoteRef.current = title
    setDragQuote(title)
  }, [])

  useEffect(() => {
    const onStart = (e: Event) => {
      // Same freeze as the file drop: a clarifying flow owns the panel.
      if (isClarifying) return
      const detail = (e as CustomEvent<WidgetDragStartDetail>).detail
      setDragQuoteBoth(detail?.title ?? "")
    }
    const onEnd = () => setDragQuoteBoth(null)

    window.addEventListener(WIDGET_DRAG_START, onStart)
    window.addEventListener(WIDGET_DRAG_END, onEnd)
    return () => {
      window.removeEventListener(WIDGET_DRAG_START, onStart)
      window.removeEventListener(WIDGET_DRAG_END, onEnd)
    }
  }, [isClarifying, setDragQuoteBoth])

  // Releasing over the chat quotes the widget. This is a handler on the card,
  // so a release anywhere else simply never reaches it — the grid's own
  // `pointerup` clears the invitation via WIDGET_DRAG_END.
  const handlePointerUp = useCallback(() => {
    const title = dragQuoteRef.current
    if (title === null) return
    setDragQuoteBoth(null)
    if (title) setPendingQuote({ text: title })
  }, [setDragQuoteBoth, setPendingQuote])

  const fullscreen = visualizationMode === "fullscreen"
  // Stays LOCAL: it gates this handle's document mousemove listener and its
  // active style, and a split layout renders two windows — a shared gate would
  // have the idle handle grab the pointer too and apply a second delta from its
  // own stale start position.
  const [isDragging, setIsDragging] = useState(false)
  // ...but the drag is mirrored outward, because the canvas panel is laid out
  // against this window's edge and has to follow it 1:1 (see ApplicationFrame's
  // canvas inset). Cleared on unmount too, so a window torn down mid-drag
  // doesn't strand the flag.
  useEffect(() => {
    if (!isDragging) return
    setIsResizing?.(true)
    return () => setIsResizing?.(false)
  }, [isDragging, setIsResizing])
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
    if (isDragging || reducedMotion) return { duration: 0 }
    if (shouldPlayEntranceAnimation)
      return { duration: 0.3, ease: [0, 0, 0.1, 1] as const }
    return { duration: 0.3, ease: [0, 0, 0.1, 1] as const }
  }, [isDragging, reducedMotion, shouldPlayEntranceAnimation])
  const closedClipPath = isLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"

  return (
    <AnimatePresence>
      {isVisible && (
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
            !reducedMotion &&
            shouldPlayEntranceAnimation &&
            !prevOpenRef.current
              ? { opacity: 0, clipPath: closedClipPath }
              : false
          }
          animate={{
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
          }}
          exit={
            reducedMotion
              ? { opacity: 0, transition: { duration: 0 } }
              : exitStyle === "hold"
                ? // Swap: stay put while the main content slides over (300ms),
                  // then a blink of fade right before unmounting.
                  { opacity: 0, transition: { delay: 0.25, duration: 0.05 } }
                : { opacity: 0, clipPath: closedClipPath }
          }
          transition={wrapperTransition}
          style={{
            width: "100%",
            transformOrigin: isLeft ? "left center" : "right center",
          }}
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
              isResizing={isDragging}
              setIsResizing={setIsDragging}
              isCanvasMode={isCanvasMode}
              side="right"
            />
          )}
          <div
            aria-hidden={!isVisible}
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
            // Marks this card as a drop target for pointer-driven drags
            // elsewhere in the app (the dashboard grid hit-tests for it to
            // suppress its own reorder while the cursor is over the chat).
            data-ai-chat-dropzone=""
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onPointerUp={handlePointerUp}
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden">
              {children}
            </div>
            {/* `canDrop` gates only the file drop — quoting a dragged widget
                needs no upload handler, so it renders on its own. */}
            {(canDrop || dragQuote !== null) && (
              <DropOverlay
                visible={(canDrop && fileDragOver) || dragQuote !== null}
                mode={dragQuote !== null ? "discuss" : "files"}
                onFilesDropped={
                  canDrop
                    ? (files) => {
                        dragCounterRef.current = 0
                        setFileDragOver(false)
                        processDroppedFiles(files)
                      }
                    : undefined
                }
              />
            )}
            {activeGame === "pong" && <F0AiPong onClose={closeGame} />}
          </div>
          {resizable && !fullscreen && !isSmallScreen && isLeft && (
            <ResizeHandle
              onResize={handleResize}
              onReset={resetChatWidth}
              isResizing={isDragging}
              setIsResizing={setIsDragging}
              isCanvasMode={isCanvasMode}
              side="left"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
