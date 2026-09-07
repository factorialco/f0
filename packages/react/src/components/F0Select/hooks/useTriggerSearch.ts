import { useCallback, useEffect, useRef, useState } from "react"

type UseTriggerSearchOptions = {
  enabled: boolean
  open: boolean
  /** Opens the list without the select's own open debounce. */
  onOpen: () => void
  onSearchChange: (value: string) => void
  /** Clears the query, rather than setting it to an empty one. */
  onSearchReset: () => void
  onActiveMove: (direction: "next" | "previous") => void
  /** Returns false when there was nothing to take. */
  onSelectActive: () => boolean
  /** Returns false when there was no selection to edit. */
  onBackspaceOnEmpty: () => boolean
  /**
   * Typing with a selection shown and no text yet. Returns the text to use —
   * the selection's label plus what was typed — or null to type as normal.
   */
  onTypeOverSelection: (typed: string) => string | null
  triggerRef: React.RefObject<HTMLElement | null>
}

/** State for a select whose trigger is the search field. */
export const useTriggerSearch = ({
  enabled,
  open,
  onOpen,
  onSearchChange,
  onSearchReset,
  onActiveMove,
  onSelectActive,
  onBackspaceOnEmpty,
  onTypeOverSelection,
  triggerRef,
}: UseTriggerSearchOptions) => {
  const [draft, setDraft] = useState("")
  const draftRef = useRef(draft)
  draftRef.current = draft
  const inputRef = useRef<HTMLInputElement>(null)

  // Through refs: the handlers are cloned onto the input, and a new identity
  // per keystroke would remount it.
  const callbacksRef = useRef({
    onSearchChange,
    onOpen,
    onSearchReset,
    onActiveMove,
    onSelectActive,
    onBackspaceOnEmpty,
    onTypeOverSelection,
  })
  useEffect(() => {
    callbacksRef.current = {
      onSearchChange,
      onOpen,
      onSearchReset,
      onActiveMove,
      onSelectActive,
      onBackspaceOnEmpty,
      onTypeOverSelection,
    }
  }, [
    onActiveMove,
    onBackspaceOnEmpty,
    onOpen,
    onSearchChange,
    onSearchReset,
    onSelectActive,
    onTypeOverSelection,
  ])

  // `open` is a render behind the request, so the keys track the request.
  const requestedOpenRef = useRef(open)
  useEffect(() => {
    requestedOpenRef.current = open
  }, [open])

  const requestOpen = useCallback(() => {
    requestedOpenRef.current = true
    callbacksRef.current.onOpen()
  }, [])

  const handleChange = useCallback(
    (value: string) => {
      /**
       * The first character typed over a selection continues its label rather
       * than replacing it: the label is what the field is showing, so "Approved"
       * plus a space is "Approved ", not a lone space.
       */
      const next =
        value && !draftRef.current
          ? (callbacksRef.current.onTypeOverSelection(value) ?? value)
          : value

      setDraft(next)
      callbacksRef.current.onSearchChange(next)
      // Clearing routes through here too, with an empty value.
      if (next && !requestedOpenRef.current) {
        requestOpen()
      }
    },
    [requestOpen]
  )

  /** Sets the text without the type-over rule: for text the field itself
   * produced, not a keystroke. */
  const setText = useCallback(
    (value: string) => {
      setDraft(value)
      callbacksRef.current.onSearchChange(value)
      if (value && !requestedOpenRef.current) {
        requestOpen()
      }
    },
    [requestOpen]
  )

  const clearDraft = useCallback(() => {
    setDraft("")
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

    setDraft("")
    callbacksRef.current.onSearchReset()

    const active = document.activeElement
    const focusLeftTheSelect =
      active instanceof HTMLElement &&
      active !== document.body &&
      !triggerRef.current?.contains(active)

    if (!focusLeftTheSelect) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [enabled, open, triggerRef])

  /** Keys that belong to the list. Everything else is the input's. */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) {
        return
      }

      const isArrowDown = event.key === "ArrowDown"
      const isArrowUp = event.key === "ArrowUp"
      const isEnter = event.key === "Enter"

      // Consumed when it edited the selection, so the input does not also
      // delete from the text just handed to it.
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
    inputRef,
    focusInput,
    clearDraft,
    setText,
    handleChange,
    handleKeyDown,
  }
}
