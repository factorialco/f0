import { useCallback, useEffect, useRef, useState } from "react"
import type { InlineDismissReason } from "@/components/F0InputField/types"

/**
 * What a field renderer needs to draw its inline variant. `editing` is owned by
 * this hook; the renderer only passes it down and reports back. Toggles receive
 * it too and ignore both members: they are their own editor.
 */
export type InlineEditing = {
  editing: boolean
  onDismiss: (reason: InlineDismissReason) => void
}

export type UseInlineFieldOptions = {
  /**
   * Whether the field can be activated at all. `false` leaves the value inert:
   * no activator, and `editing` never becomes true.
   * @default true
   */
  editable?: boolean
  /**
   * Whether the field currently fails validation. A dismissal while this is
   * true keeps the editor open, so the user is not left with an error they
   * cannot see the cause of.
   */
  hasError?: boolean
  /** Reads the value to snapshot when the edit starts. */
  readValue: () => unknown
  /** Puts the snapshot back, called only for an Escape. */
  restoreValue: (snapshot: unknown) => void
}

export type UseInlineFieldResult = {
  editing: boolean
  /** Absent when the field is not editable, which is what makes the row inert. */
  activate: (() => void) | undefined
  dismiss: (reason: InlineDismissReason) => void
  /** Lands on the row's activator; focus returns here one frame after an edit ends. */
  activatorRef: React.RefObject<HTMLDivElement>
}

/**
 * Owns the reading/editing mode of one inline field. The components below it
 * are presentational: they receive `editing` and report `onDismiss(reason)`,
 * and this hook decides what that means.
 *
 * ```
 * reading --activate--> editing
 * editing --dismiss(reason)--> hasError ? editing
 *                             : reason = escape ? revert -> reading
 *                             : keep draft -> reading
 * ```
 *
 * Nothing here saves. Enter, blur and popup close leave the edited value in the
 * form as dirty, and F0Form's action bar is what writes it.
 */
export function useInlineField({
  editable = true,
  hasError = false,
  readValue,
  restoreValue,
}: UseInlineFieldOptions): UseInlineFieldResult {
  const [editing, setEditing] = useState(false)
  const snapshot = useRef<unknown>(undefined)
  const activatorRef = useRef<HTMLDivElement>(null)

  // F0DatePicker resolves a dismiss reason in a microtask and F0Select in a
  // Radix capture listener, so `dismiss` can run after the render that changed
  // the error state. Read both through refs rather than a closure.
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
  }, [])

  const dismiss = useCallback((reason: InlineDismissReason) => {
    if (hasErrorRef.current) {
      return
    }
    if (reason === "escape") {
      restoreRef.current(snapshot.current)
    }
    setEditing(false)
    // Synchronously focusing the activator lets the key that ended the edit
    // finish on it: Enter would reopen the editor it just closed.
    requestAnimationFrame(() => activatorRef.current?.focus())
  }, [])

  return {
    editing: editable && editing,
    activate: editable ? activate : undefined,
    dismiss,
    activatorRef,
  }
}
