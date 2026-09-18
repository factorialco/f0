import type { DragEvent, DragEventHandler } from "react"
import { useCallback, useRef, useState } from "react"
import { useChatDrop } from "../providers/ChatUIProvider"

const isFileDrag = (e: DragEvent) => e.dataTransfer?.types?.includes("Files")

export type ChatFileDropZone = {
  /** True while a file drag is over the panel — drives the drop overlay. */
  dragging: boolean
  /** Spread onto the element that should accept the drop. */
  dropZoneProps: {
    onDragEnter: DragEventHandler
    onDragOver: DragEventHandler
    onDragLeave: DragEventHandler
    onDrop: DragEventHandler
  }
}

/**
 * Whole-panel drag & drop: the overlay covers the entire surface and a drop
 * anywhere attaches to the composer.
 *
 * Every handler stops propagation so the panel window hosting this chat cannot
 * hijack the same file drag for itself. The depth counter is what makes
 * `dragleave` trustworthy — it fires for every child the pointer crosses, so
 * counting enter/leave pairs is the only way to know the drag really left.
 */
export const useChatFileDropZone = (): ChatFileDropZone => {
  const { dropFiles } = useChatDrop()
  const dragDepth = useRef(0)
  const [dragging, setDragging] = useState(false)

  /** Claims the event for this panel, or returns false to ignore it. */
  const claim = useCallback((e: DragEvent): boolean => {
    if (!isFileDrag(e)) {
      return false
    }
    e.preventDefault()
    e.stopPropagation()
    return true
  }, [])

  const onDragEnter = useCallback<DragEventHandler>(
    (e) => {
      if (!claim(e)) {
        return
      }
      dragDepth.current++
      setDragging(true)
    },
    [claim]
  )

  const onDragOver = useCallback<DragEventHandler>(
    (e) => {
      claim(e)
    },
    [claim]
  )

  const onDragLeave = useCallback<DragEventHandler>(
    (e) => {
      if (!claim(e)) {
        return
      }
      dragDepth.current--
      if (dragDepth.current <= 0) {
        dragDepth.current = 0
        setDragging(false)
      }
    },
    [claim]
  )

  const onDrop = useCallback<DragEventHandler>(
    (e) => {
      if (!claim(e)) {
        return
      }
      dragDepth.current = 0
      setDragging(false)
      const files = Array.from(e.dataTransfer.files)
      if (files.length > 0) {
        dropFiles(files)
      }
    },
    [claim, dropFiles]
  )

  return {
    dragging,
    dropZoneProps: { onDragEnter, onDragOver, onDragLeave, onDrop },
  }
}
