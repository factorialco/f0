import type { ReactNode } from "react"

import { motionTokens } from "@factorialco/f0-core"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { WidgetDragStartDetail } from "@/lib/dnd/widgetDragEvents"

import { useReducedMotion } from "@/lib/a11y"
import { WIDGET_DRAG_END, WIDGET_DRAG_START } from "@/lib/dnd/widgetDragEvents"
import { cn } from "@/lib/utils"

import { DropOverlay } from "../../../F0AiChatTextArea"
import { F0AiPong } from "../../../F0AiPong"
import { useAiChat } from "../../providers/AiChatStateProvider"
import { MAX_CHAT_WIDTH, MIN_CHAT_WIDTH } from "../../utils/constants"
import { ResizeHandle } from "./ResizeHandle"

const { duration: DURATION, ease: EASE } = motionTokens

/**
 * Why the window is going away, resolved AT THE MOMENT IT GOES.
 *
 * This has to travel through `AnimatePresence`'s `custom` rather than sit in an
 * `exit` prop, and that is not a stylistic choice. `AnimatePresence` keeps the
 * element from the last render in which it was PRESENT, so any prop describing
 * the exit is captured one render before the change that causes it — an
 * `exitStyle` computed from `open` can only ever report what `open` was while
 * the window was still there, i.e. never "closing".
 *
 * The cost of that was a real defect: closing a panel in split mode picked the
 * swap's exit, which holds still at full opacity and then vanishes in a single
 * frame. Correct when the main content is sliding over the window to cover it;
 * a hard cut when nothing is.
 */
export type WindowExitCustom = {
  /**
   * "hold" — something else is covering this window on its way out (the swap).
   * "shrink" — nothing is: it has to take itself off the screen.
   */
  exitStyle: "shrink" | "hold"
  /** Collapsed toward the edge the window is docked to. */
  closedClipPath: string
  reducedMotion: boolean
}

export const resolveWindowExit = ({
  exitStyle,
  closedClipPath,
  reducedMotion,
}: WindowExitCustom) => {
  if (reducedMotion) return { opacity: 0, transition: { duration: 0 } }
  if (exitStyle === "hold") {
    // Stay put until the main content has finished sliding over this window,
    // then leave. The delay is DERIVED from the content's own duration rather
    // than written down beside it — it was `0.25`, calibrated against a 300ms
    // tween that has since become 220ms, which left this window uncovered and
    // visibly fading for ~80ms in the middle of every swap.
    return { opacity: 0, transition: { delay: DURATION.base, duration: 0 } }
  }
  return { opacity: 0, clipPath: closedClipPath }
}

/**
 * Named `leaving` rather than `exit` so the label cannot collide with a variant
 * of that name in the chat content below, which motion would propagate to.
 */
const windowVariants = { leaving: resolveWindowExit }

export const SidebarWindow = ({
  children,
  visible,
  side,
  exitStyle = "shrink",
  acceptsWidgetDrop = false,
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
  /** Enables dashboard-widget quoting for the real chat/composer view only. */
  acceptsWidgetDrop?: boolean
}) => {
  const {
    open,
    visualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
    resizable,
    setChatWidth,
    resetChatWidth,
    chatWidthBounds,
    panelOverlays,
    setIsResizing,
    fileAttachments,
    isClarifying,
    fileDragOver,
    setFileDragOver,
    processDroppedFiles,
    setPendingQuote,
    focusChatInput,
    activeGame,
    closeGame,
    panelSide,
  } = useAiChat()
  const isVisible = visible ?? open
  const canAcceptWidgetDrop =
    acceptsWidgetDrop && activeGame === null && isVisible && !isClarifying
  const canAcceptWidgetDropRef = useRef(canAcceptWidgetDrop)
  canAcceptWidgetDropRef.current = canAcceptWidgetDrop
  const widgetDropZoneRef = useRef<HTMLDivElement>(null)
  const isCanvasMode = visualizationMode === "canvas"
  const reducedMotion = useReducedMotion()
  // Hosts dock the whole panel left for a chat-first experience (communications);
  // the default is right. The AI chat follows the panel side too.
  const isLeft = (side ?? panelSide) === "left"

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

  // AnimatePresence retains the last rendered DOM props during exit. Remove
  // the marker imperatively when visibility changes so a closing card cannot
  // remain discoverable as a live drop zone for the duration of the animation.
  useEffect(() => {
    if (!canAcceptWidgetDrop) {
      widgetDropZoneRef.current?.removeAttribute("data-ai-chat-dropzone")
    }
  }, [canAcceptWidgetDrop])

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
  const dragQuoteRef = useRef<WidgetDragStartDetail | null>(null)
  const [dragQuote, setDragQuote] = useState<string | null>(null)

  const setDragQuoteBoth = useCallback(
    (detail: WidgetDragStartDetail | null) => {
      dragQuoteRef.current = detail
      setDragQuote(detail?.title ?? null)
    },
    []
  )

  useEffect(() => {
    const onStart = (e: Event) => {
      if (!canAcceptWidgetDrop) return
      const detail = (e as CustomEvent<WidgetDragStartDetail>).detail
      if (
        typeof detail?.id !== "string" ||
        !detail.id ||
        typeof detail.title !== "string" ||
        !detail.title.trim()
      )
        return
      setDragQuoteBoth(detail)
    }
    const onEnd = () => setDragQuoteBoth(null)

    window.addEventListener(WIDGET_DRAG_START, onStart)
    window.addEventListener(WIDGET_DRAG_END, onEnd)
    return () => {
      window.removeEventListener(WIDGET_DRAG_START, onStart)
      window.removeEventListener(WIDGET_DRAG_END, onEnd)
    }
  }, [canAcceptWidgetDrop, setDragQuoteBoth])

  // A view change, host overlay, or clarifying flow can take ownership of the
  // shell while a pointer is still down. Retract the invitation immediately
  // so releasing over non-chat content can never create an invisible quote.
  useEffect(() => {
    if (!canAcceptWidgetDrop) setDragQuoteBoth(null)
  }, [canAcceptWidgetDrop, setDragQuoteBoth])

  // Releasing over the chat quotes the widget. This is a handler on the card,
  // so a release anywhere else simply never reaches it — the grid's own
  // `pointerup` clears the invitation via WIDGET_DRAG_END.
  const handlePointerUp = useCallback(() => {
    if (!canAcceptWidgetDropRef.current) {
      setDragQuoteBoth(null)
      return
    }
    const detail = dragQuoteRef.current
    if (detail === null) return
    setDragQuoteBoth(null)
    if (detail.onAskAi) {
      detail.onAskAi({ id: detail.id, title: detail.title })
    } else {
      const quote = { text: detail.title }
      detail.onAskAiTarget?.({ id: detail.id, title: detail.title, quote })
      setPendingQuote(quote)
      focusChatInput()
    }
  }, [canAcceptWidgetDrop, focusChatInput, setDragQuoteBoth, setPendingQuote])

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
  // Bounded by what the frame can currently give, not by the absolute range —
  // otherwise the handle keeps travelling after the main content has run out
  // of room. `chatWidthBounds` is optional on the context (see internal-types),
  // so fall back to the absolute range when no provider is mounted.
  const { min: minWidth, max: maxWidth } = chatWidthBounds ?? {
    min: MIN_CHAT_WIDTH,
    max: MAX_CHAT_WIDTH,
  }

  // No seam to drag when the panel is covering the frame rather than sitting
  // beside content. Taken from the provider, which is also what the frame
  // reserves against — computing it here from a media query is how the handle
  // used to appear on a full-screen panel.
  const isCoveringFrame = panelOverlays ?? false

  // ...nor when the range has collapsed to a point. On a narrow frame the
  // content's floor pins the panel to its minimum, and a handle that cannot
  // travel is worse than no handle: it invites a drag and then refuses it.
  const canResize = maxWidth > minWidth

  const handleResize = useCallback(
    (deltaX: number) => {
      setChatWidth((prev) => {
        const newWidth = prev + deltaX
        return Math.max(minWidth, Math.min(maxWidth, newWidth))
      })
    },
    [setChatWidth, minWidth, maxWidth]
  )

  // The window's own reveal shares the frame's clock. It used to run 300ms on
  // `[0,0,0.1,1]` while the main content's padding ran 220ms on the system
  // curve — two halves of one seam, arriving 80ms apart with the frame showing
  // through the gap between them. (Both branches of the old `useMemo` returned
  // the same object, so the `shouldPlayEntranceAnimation` test decided
  // nothing.)
  const wrapperTransition = useMemo(
    () =>
      isDragging || reducedMotion
        ? { duration: 0 }
        : { duration: DURATION.base, ease: EASE.outSwift },
    [isDragging, reducedMotion]
  )
  const closedClipPath = isLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"
  const exitCustom: WindowExitCustom = {
    exitStyle,
    closedClipPath,
    reducedMotion,
  }

  // Closing is ONE animation, whatever size the panel happens to be.
  //
  // A fullscreen panel used to leave by a different route — it shrank back to
  // its docked width first, over its own longer duration, on top of a main
  // content that had already re-expanded behind it — so the same button did
  // two visibly different things depending on where you pressed it. It leaves
  // the way a docked panel leaves now: the same clip toward the same edge, the
  // same duration, the same curve. It is simply wider.
  //
  // What makes that read cleanly rather than as a curtain is what the FRAME
  // does underneath: the layout it was covering is re-applied instantly, while
  // it is still hidden, so the wipe uncovers a settled page instead of one
  // still sliding out from under it (see `contentTransition` in
  // ApplicationFrame).
  //
  // The entrance is the same animation too — with one difference: it always
  // plays. `prevOpenRef` suppresses it for a swap between two docked windows,
  // where the incoming panel is meant to be revealed in place by the main
  // content sliding off it. A cover has nothing revealing it, so suppressing
  // its entrance just means it appears in a single frame.
  const shouldAnimateEntrance =
    !reducedMotion &&
    (fullscreen || (shouldPlayEntranceAnimation && !prevOpenRef.current))

  return (
    // `custom` is what makes the exit above readable at exit time: this
    // component re-renders when the panel closes, the frozen child does not.
    <AnimatePresence custom={exitCustom}>
      {isVisible && (
        <motion.div
          key="chat-wrapper"
          variants={windowVariants}
          className={cn(
            // The seam is `xs:`-gated to match the card's own `xs:rounded-xl`.
            // It used to be `md:` (768), which was invisible while the panel
            // only ever split above that — now that a half-screen laptop
            // window splits at 756, the mismatch would show as rounded corners
            // pressed flat against the window edge.
            "bg-f1-transparent pointer-events-auto relative flex h-full dark:bg-f1-background xs:py-1",
            // Right seam (against the viewport edge — no sidebar there) is owned
            // here: always wanted right-docked or filling the screen. The LEFT
            // seam depends on whether the app sidebar is present (it provides the
            // gap), which only the host frame knows, so ApplicationFrame owns it.
            fullscreen ? "xs:pr-1" : isLeft ? "mr-auto" : "ml-auto xs:pr-1"
          )}
          initial={
            shouldAnimateEntrance
              ? { opacity: 0, clipPath: closedClipPath }
              : false
          }
          animate={{
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
          }}
          exit="leaving"
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
          {resizable &&
            !fullscreen &&
            !isCoveringFrame &&
            canResize &&
            !isLeft && (
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
            ref={widgetDropZoneRef}
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
            data-ai-chat-dropzone={canAcceptWidgetDrop ? "" : undefined}
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
            {(canDrop || (canAcceptWidgetDrop && dragQuote !== null)) && (
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
          {resizable &&
            !fullscreen &&
            !isCoveringFrame &&
            canResize &&
            isLeft && (
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
