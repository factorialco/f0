import { useCallback, useEffect, useRef, useState } from "react"
import { getSelectContentControls } from "@/ui/Select"

type UseTriggerSearchOptions = {
  enabled: boolean
  open: boolean
  /**
   * What the field shows when nobody is editing it: the selected label for a
   * single selection, nothing for a multiple one.
   */
  restingText: string
  /** Opens the list without the select's own open debounce. */
  onOpen: () => void
  onClose: () => void
  onSearchChange: (value: string) => void
  /** Clears the query, rather than setting it to an empty one. */
  onSearchReset: () => void
  /** The user emptied the field and left: the selection goes with the text. */
  onCloseEmpty: () => void
  onActiveMove: (direction: "next" | "previous") => void
  /** Returns false when there was nothing to take. */
  onSelectActive: () => boolean
  /** Returns false when there was no selection to remove. */
  onBackspaceOnEmpty: () => boolean
  triggerRef: React.RefObject<HTMLElement | null>
}

/**
 * State for a select whose trigger is the search field.
 *
 * The selected label IS the field's text, so selecting, copying and editing it
 * are the browser's own. Editing turns the text into a query; the selection
 * itself only changes when the user picks or clears.
 */
export const useTriggerSearch = ({
  enabled,
  open,
  restingText,
  onOpen,
  onClose,
  onSearchChange,
  onSearchReset,
  onCloseEmpty,
  onActiveMove,
  onSelectActive,
  onBackspaceOnEmpty,
  triggerRef,
}: UseTriggerSearchOptions) => {
  const [draft, setDraft] = useState(restingText)
  const [editing, setEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // The field follows the selection while nobody is editing it.
  useEffect(() => {
    if (!enabled || editing) {
      return
    }
    setDraft(restingText)
  }, [editing, enabled, restingText])

  // `aria-controls` names the listbox; the popup around it also holds the
  // actions and footer.
  const popupElement = useCallback(() => {
    const id = inputRef.current?.getAttribute("aria-controls")
    const listbox = id ? document.getElementById(id) : null
    return listbox?.closest<HTMLElement>("[data-radix-select-content]") ?? null
  }, [])

  const handleChange = useCallback(
    (value: string) => {
      setEditing(true)
      setDraft(value)
      onSearchChange(value)
      if (!open) {
        onOpen()
      }
    },
    [onOpen, onSearchChange, open]
  )

  /** Back to showing the selection, with no query. */
  const resetText = useCallback(() => {
    setDraft(restingText)
    if (editing) {
      setEditing(false)
      onSearchReset()
    }
  }, [editing, onSearchReset, restingText])

  const focusInput = useCallback(() => {
    inputRef.current?.focus({ preventScroll: true })
  }, [])

  /**
   * Closing drops the query, or reopening would land on a filtered list the
   * field no longer shows. A field the user emptied stays empty: that is a
   * clear, not a query. Focus only comes back when it never left the select:
   * closing by clicking another field must not steal its caret.
   */
  const wasOpenRef = useRef(open)
  useEffect(() => {
    const wasOpen = wasOpenRef.current
    wasOpenRef.current = open

    if (!enabled || !wasOpen || open) {
      return
    }

    if (editing && draft === "") {
      onCloseEmpty()
    }
    resetText()

    const active = document.activeElement
    const focusLeftTheSelect =
      active instanceof HTMLElement &&
      active !== document.body &&
      !triggerRef.current?.contains(active)

    if (!focusLeftTheSelect) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [draft, editing, enabled, onCloseEmpty, open, resetText, triggerRef])

  /**
   * Focus leaving for somewhere that is neither the field nor the popup closes
   * the list. Nothing else would: the popup only dismisses on a pointer.
   */
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (!open) {
        return
      }
      const next = event.relatedTarget
      if (
        next instanceof Node &&
        (triggerRef.current?.contains(next) || popupElement()?.contains(next))
      ) {
        return
      }
      if (next) {
        onClose()
      }
    },
    [onClose, open, popupElement, triggerRef]
  )

  /** Keys that belong to the list. Everything else is the input's. */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented || event.nativeEvent.isComposing) {
        return
      }

      // Consumed when it removed a selection, so the input does not also act.
      if (event.key === "Backspace" && event.currentTarget.value === "") {
        if (onBackspaceOnEmpty()) {
          event.preventDefault()
        }
        return
      }

      // Tab walks into the popup's own controls; the options are reached with
      // the arrows and are not in that walk.
      if (event.key === "Tab" && !event.shiftKey && open) {
        const popup = popupElement()
        const [control] = popup ? getSelectContentControls(popup) : []
        if (control) {
          event.preventDefault()
          control.focus()
        }
        return
      }

      const isArrowDown = event.key === "ArrowDown"
      const isArrowUp = event.key === "ArrowUp"
      const isEnter = event.key === "Enter"

      if (!isArrowDown && !isArrowUp && !isEnter) {
        return
      }

      // Always consumed: a field that is browsing a list never submits a form.
      event.preventDefault()

      if (!open) {
        onOpen()
        return
      }

      if (isEnter) {
        onSelectActive()
        return
      }

      onActiveMove(isArrowDown ? "next" : "previous")
    },
    [
      onActiveMove,
      onBackspaceOnEmpty,
      onOpen,
      onSelectActive,
      open,
      popupElement,
    ]
  )

  return {
    draft,
    inputRef,
    focusInput,
    resetText,
    handleChange,
    handleBlur,
    handleKeyDown,
  }
}
