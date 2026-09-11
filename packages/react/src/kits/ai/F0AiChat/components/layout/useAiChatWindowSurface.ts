import type { HTMLAttributes, ReactNode, RefObject } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import type { WidgetDragStartDetail } from "@/lib/dnd/widgetDragEvents"
import { WIDGET_DRAG_END, WIDGET_DRAG_START } from "@/lib/dnd/widgetDragEvents"
import { useAiChat } from "../../providers/AiChatStateProvider"

export type AiChatWindowSurface = {
  surfaceRef: RefObject<HTMLDivElement>
  surfaceProps: HTMLAttributes<HTMLDivElement>
  decorations: {
    canDrop: boolean
    canAcceptWidgetDrop: boolean
    dragQuote: string | null
    onFilesDropped: ((files: File[]) => void) | undefined
  }
}

/**
 * Everything the AI chat adds to the panel's card: file drops, the
 * dashboard-widget drag-to-quote gesture, and the drop zone marker.
 *
 * Lives here rather than in `SidePanelWindow` because none of it is true of a
 * panel in general — a conversation hosted in the same shell accepts no files
 * and quotes no widgets.
 */
export const useAiChatWindowSurface = ({
  isVisible,
  acceptsWidgetDrop,
}: {
  isVisible: boolean
  acceptsWidgetDrop: boolean
}): AiChatWindowSurface => {
  const {
    fileAttachments,
    isClarifying,
    setFileDragOver,
    processDroppedFiles,
    setPendingQuote,
    focusChatInput,
    activeGame,
  } = useAiChat()

  const canAcceptWidgetDrop =
    acceptsWidgetDrop && activeGame === null && isVisible && !isClarifying
  const canAcceptWidgetDropRef = useRef(canAcceptWidgetDrop)
  canAcceptWidgetDropRef.current = canAcceptWidgetDrop
  const surfaceRef = useRef<HTMLDivElement>(null)

  const dragCounterRef = useRef(0)
  const canDrop = fileAttachments?.onUploadFiles != null && !isClarifying

  // AnimatePresence retains the last rendered DOM props during exit. Remove
  // the marker imperatively when visibility changes so a closing card cannot
  // remain discoverable as a live drop zone for the duration of the animation.
  useEffect(() => {
    if (!canAcceptWidgetDrop) {
      surfaceRef.current?.removeAttribute("data-ai-chat-dropzone")
    }
  }, [canAcceptWidgetDrop])

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      dragCounterRef.current++
      if (canDrop) {
        setFileDragOver(true)
      }
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
      if (!canAcceptWidgetDrop) {
        return
      }
      const detail = (e as CustomEvent<WidgetDragStartDetail>).detail
      if (
        typeof detail?.id !== "string" ||
        !detail.id ||
        typeof detail.title !== "string" ||
        !detail.title.trim()
      ) {
        return
      }
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
    if (!canAcceptWidgetDrop) {
      setDragQuoteBoth(null)
    }
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
    if (detail === null) {
      return
    }
    setDragQuoteBoth(null)
    if (detail.onAskAi) {
      detail.onAskAi({ id: detail.id, title: detail.title })
    } else {
      const quote = { text: detail.title }
      detail.onAskAiTarget?.({ id: detail.id, title: detail.title, quote })
      setPendingQuote(quote)
      focusChatInput()
    }
  }, [focusChatInput, setDragQuoteBoth, setPendingQuote])

  return {
    surfaceRef,
    surfaceProps: {
      // Marks this card as a drop target for pointer-driven drags elsewhere in
      // the app (the dashboard grid hit-tests for it to suppress its own
      // reorder while the cursor is over the chat).
      "data-ai-chat-dropzone": canAcceptWidgetDrop ? "" : undefined,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      onPointerUp: handlePointerUp,
    } as HTMLAttributes<HTMLDivElement>,
    decorations: {
      canDrop,
      canAcceptWidgetDrop,
      dragQuote,
      onFilesDropped: canDrop
        ? (files: File[]) => {
            dragCounterRef.current = 0
            setFileDragOver(false)
            processDroppedFiles(files)
          }
        : undefined,
    },
  }
}

export type { ReactNode }
