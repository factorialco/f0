import { useCallback, useEffect, useRef, useState } from "react"
import type { F0Field } from "../types"

/**
 * Types whose editor is a popup. Their exit is the popup closing, not a blur:
 * the calendar and the dropdown portal outside the row, so focus leaving the
 * row is what opening them looks like.
 */
const POPUP_FIELD_TYPES: ReadonlySet<string> = new Set(["date", "select"])

/** What the editor needs to mount ready to use, threaded through `renderFieldInput`. */
export type InlineEditorOptions = {
  autoFocus: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type UseInlineFieldResult = {
  isReading: boolean
  startEditing: () => void
  stopEditing: () => void
  editorOptions: InlineEditorOptions
  /** Handlers for the box around a popup-less editor, whose exit is a blur. */
  editorContainerProps: {
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  }
  /** Set on the read value so returning from the editor lands focus back on it. */
  setReadValue: (node: HTMLElement | null) => void
}

/**
 * Reading is where a detail row lives: editing is a detour that lasts until the
 * value is committed or the editor dismissed, and then the row is text again.
 *
 * Shared by `FieldRenderer` and `F0FormField`, which render the same row from
 * two unrelated places — `F0Form` never touches `F0FormField` — so the rule for
 * when a row is being read has to live in one function or it drifts.
 */
export function useInlineField(field: F0Field): UseInlineFieldResult {
  const [isReading, setIsReading] = useState(true)
  const readValue = useRef<HTMLElement | null>(null)
  const setReadValue = useCallback((node: HTMLElement | null) => {
    readValue.current = node
  }, [])
  // Only an edit the reader started earns the focus back; a row that mounts
  // reading, or one returning after an external change, should not steal it.
  const returningFromEdit = useRef(false)

  const startEditing = useCallback(() => {
    returningFromEdit.current = true
    setIsReading(false)
  }, [])

  const stopEditing = useCallback(() => setIsReading(true), [])

  // A frame late, not synchronously: the key that ends the edit is still in
  // flight, and focusing a button mid-gesture hands it the rest of that gesture
  // — Enter would commit the value and reopen the editor on its way out.
  useEffect(() => {
    if (!isReading || !returningFromEdit.current) {
      return
    }
    returningFromEdit.current = false
    const frame = requestAnimationFrame(() => readValue.current?.focus())
    return () => cancelAnimationFrame(frame)
  }, [isReading])

  const usesPopup = POPUP_FIELD_TYPES.has(field.type)

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        stopEditing()
      }
    },
    [stopEditing]
  )

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        stopEditing()
      }
    },
    [stopEditing]
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape" || event.key === "Enter") {
        stopEditing()
      }
    },
    [stopEditing]
  )

  return {
    isReading,
    startEditing,
    stopEditing,
    editorOptions: {
      autoFocus: true,
      open: usesPopup ? true : undefined,
      onOpenChange: usesPopup ? handleOpenChange : undefined,
    },
    editorContainerProps: usesPopup
      ? {}
      : { onBlur: handleBlur, onKeyDown: handleKeyDown },
    setReadValue,
  }
}
