import { useCallback, useEffect, useRef, useState } from "react"
import type { InlineDismissReason } from "@/components/F0InputField/types"

/** Controlled edit state passed to inline field renderers. */
export type InlineEditing = {
  editing: boolean
  onDismiss: (reason: InlineDismissReason) => void
  /**
   * False when the editor opened by itself. Several rows can open at once
   * after a refused save, and the form's error navigation picks the one to
   * focus.
   */
  autoFocus: boolean
}

export type UseInlineFieldOptions = {
  /**
   * Allow activation.
   * @default true
   */
  editable?: boolean
  /** Keep the editor open while validation fails. */
  hasError?: boolean
  /**
   * Open the editor when an error appears while the row reads, so a value the
   * server refused is immediately fixable. Off for popup editors, which would
   * spring several dropdowns open at once.
   */
  openOnError?: boolean
  /** Reads the value to snapshot when the edit starts. */
  readValue: () => unknown
  /** Puts the snapshot back, called only for an Escape. */
  restoreValue: (snapshot: unknown) => void
}

export type UseInlineFieldResult = {
  editing: boolean
  /** False while the editor is open without the user having asked for it. */
  autoFocus: boolean
  /** Absent for non-editable fields. */
  activate: (() => void) | undefined
  dismiss: (reason: InlineDismissReason) => void
  /** Focus returns to the activator one frame after editing ends. */
  activatorRef: React.RefObject<HTMLDivElement>
}

/** Owns edit mode: errors keep it open, Escape restores the snapshot, other dismissals keep the draft. */
export function useInlineField({
  editable = true,
  hasError = false,
  openOnError = false,
  readValue,
  restoreValue,
}: UseInlineFieldOptions): UseInlineFieldResult {
  const [editing, setEditing] = useState(false)
  const [autoFocus, setAutoFocus] = useState(true)
  const snapshot = useRef<unknown>(undefined)
  const activatorRef = useRef<HTMLDivElement>(null)

  // Open during render, not in an effect: the form's error navigation reads
  // the row right after the error lands and must find the editor already
  // mounted.
  const [errorSeen, setErrorSeen] = useState(hasError)
  if (hasError !== errorSeen) {
    setErrorSeen(hasError)
    if (hasError && openOnError && editable && !editing) {
      snapshot.current = readValue()
      setEditing(true)
      setAutoFocus(false)
    }
  }

  // Read current values in delayed popup callbacks.
  const hasErrorRef = useRef(hasError)
  hasErrorRef.current = hasError
  const restoreRef = useRef(restoreValue)
  restoreRef.current = restoreValue
  const readRef = useRef(readValue)
  readRef.current = readValue

  useEffect(() => {
    if (!editable) {
      setEditing(false)
    }
  }, [editable])

  const activate = useCallback(() => {
    snapshot.current = readRef.current()
    setEditing(true)
    setAutoFocus(true)
  }, [])

  const dismiss = useCallback((reason: InlineDismissReason) => {
    if (hasErrorRef.current) {
      return
    }
    if (reason === "escape") {
      restoreRef.current(snapshot.current)
    }
    setEditing(false)
    // Defer focus so Enter cannot reactivate the row in the same event.
    requestAnimationFrame(() => activatorRef.current?.focus())
  }, [])

  return {
    editing: editable && editing,
    autoFocus,
    activate: editable ? activate : undefined,
    dismiss,
    activatorRef,
  }
}
