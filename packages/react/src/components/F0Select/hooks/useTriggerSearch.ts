import { useCallback, useEffect, useRef, useState } from "react"

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
  onSearchChange: (value: string) => void
  /** Clears the query, rather than setting it to an empty one. */
  onSearchReset: () => void
  /** The first edit of the resting text: the selection it showed is gone. */
  onEditStart: () => void
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
 * are the browser's own. Only once the text is edited does it become a query.
 */
export const useTriggerSearch = ({
  enabled,
  open,
  restingText,
  onOpen,
  onSearchChange,
  onSearchReset,
  onEditStart,
  onActiveMove,
  onSelectActive,
  onBackspaceOnEmpty,
  triggerRef,
}: UseTriggerSearchOptions) => {
  const [draft, setDraft] = useState(restingText)
  const [editing, setEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Through refs: the handlers are cloned onto the input, and a new identity
  // per keystroke would remount it.
  const callbacksRef = useRef({
    onSearchChange,
    onOpen,
    onSearchReset,
    onEditStart,
    onActiveMove,
    onSelectActive,
    onBackspaceOnEmpty,
  })
  useEffect(() => {
    callbacksRef.current = {
      onSearchChange,
      onOpen,
      onSearchReset,
      onEditStart,
      onActiveMove,
      onSelectActive,
      onBackspaceOnEmpty,
    }
  }, [
    onActiveMove,
    onBackspaceOnEmpty,
    onEditStart,
    onOpen,
    onSearchChange,
    onSearchReset,
    onSelectActive,
  ])

  const restingTextRef = useRef(restingText)
  useEffect(() => {
    restingTextRef.current = restingText
  }, [restingText])

  // The field follows the selection while nobody is editing it.
  useEffect(() => {
    if (!enabled || editing) {
      return
    }
    setDraft(restingText)
  }, [editing, enabled, restingText])

  // `open` is a render behind the request, so the keys track the request.
  const requestedOpenRef = useRef(open)
  useEffect(() => {
    requestedOpenRef.current = open
  }, [open])

  const requestOpen = useCallback(() => {
    requestedOpenRef.current = true
    callbacksRef.current.onOpen()
  }, [])

  const editingRef = useRef(editing)

  const handleChange = useCallback(
    (value: string) => {
      if (!editingRef.current) {
        editingRef.current = true
        setEditing(true)
        callbacksRef.current.onEditStart()
      }
      setDraft(value)
      callbacksRef.current.onSearchChange(value)
      if (value && !requestedOpenRef.current) {
        requestOpen()
      }
    },
    [requestOpen]
  )

  /** Back to showing the selection, with no query. */
  const resetText = useCallback(() => {
    editingRef.current = false
    setEditing(false)
    setDraft(restingTextRef.current)
    callbacksRef.current.onSearchReset()
  }, [])

  const focusInput = useCallback(() => {
    inputRef.current?.focus({ preventScroll: true })
  }, [])

  /**
   * Closing drops the query, or reopening would land on a filtered list the
   * field no longer shows. Focus only comes back when it never left the
   * select: closing by clicking another field must not steal its caret.
   */
  const wasOpenRef = useRef(open)
  useEffect(() => {
    const wasOpen = wasOpenRef.current
    wasOpenRef.current = open

    if (!enabled || !wasOpen || open) {
      return
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
  }, [enabled, open, resetText, triggerRef])

  /** Keys that belong to the list. Everything else is the input's. */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) {
        return
      }

      const isArrowDown = event.key === "ArrowDown"
      const isArrowUp = event.key === "ArrowUp"
      const isEnter = event.key === "Enter"

      // Consumed when it removed a selection, so the input does not also act.
      if (event.key === "Backspace" && event.currentTarget.value === "") {
        if (callbacksRef.current.onBackspaceOnEmpty()) {
          event.preventDefault()
        }
        return
      }

      if (!isArrowDown && !isArrowUp && !isEnter) {
        return
      }

      if (!requestedOpenRef.current) {
        event.preventDefault()
        requestOpen()
        return
      }

      if (isEnter) {
        // Consumed only if it took something, so a form can still submit.
        if (callbacksRef.current.onSelectActive()) {
          event.preventDefault()
        }
        return
      }

      event.preventDefault()
      callbacksRef.current.onActiveMove(isArrowDown ? "next" : "previous")
    },
    [requestOpen]
  )

  return {
    draft,
    editing,
    inputRef,
    focusInput,
    resetText,
    handleChange,
    handleKeyDown,
  }
}
