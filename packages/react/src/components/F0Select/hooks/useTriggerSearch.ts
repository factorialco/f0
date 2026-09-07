import { useCallback, useEffect, useRef, useState } from "react"

type UseTriggerSearchOptions = {
  /** False for every select whose trigger is not the search field. */
  enabled: boolean
  open: boolean
  /**
   * Opens the list NOW, without the select's own open debounce. That debounce
   * is there to swallow the close-then-open flicker of a toggle click, and
   * typing has no such race — it would only be 100ms of nothing happening
   * after the first character.
   */
  onOpen: () => void
  onSearchChange: (value: string) => void
  /** Clears the query, rather than setting it to an empty one. */
  onSearchReset: () => void
  /** Moves the list's active option. Focus stays in the field. */
  onActiveMove: (direction: "next" | "previous") => void
  /** Takes the active option. Returns false when there was nothing to take. */
  onSelectActive: () => boolean
  /** Backspace with nothing typed: edits the selection instead. */
  onBackspaceOnEmpty: () => boolean
  /** The field's root element, for deciding where focus came from. */
  triggerRef: React.RefObject<HTMLElement | null>
}

/**
 * The state behind a select whose TRIGGER is the search field.
 *
 * The typed text is held here rather than in the data source: the source's
 * search is debounced, and a field that only showed the debounced value would
 * drop characters as the user types. The draft is what the input renders, and
 * it is emitted to the source on the trailing edge.
 *
 * The draft is also what tells the trigger whether to show the selection: it
 * stands where the selected label would be, so the label is only drawn while
 * there is nothing typed.
 */
export const useTriggerSearch = ({
  enabled,
  open,
  onOpen,
  onSearchChange,
  onSearchReset,
  onActiveMove,
  onSelectActive,
  onBackspaceOnEmpty,
  triggerRef,
}: UseTriggerSearchOptions) => {
  const [draft, setDraft] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Read the callbacks through refs so the returned handlers stay stable: they
  // are cloned onto the input by the field chrome, and a new identity on every
  // keystroke would remount it.
  const callbacksRef = useRef({
    onSearchChange,
    onOpen,
    onSearchReset,
    onActiveMove,
    onSelectActive,
    onBackspaceOnEmpty,
  })
  useEffect(() => {
    callbacksRef.current = {
      onSearchChange,
      onOpen,
      onSearchReset,
      onActiveMove,
      onSelectActive,
      onBackspaceOnEmpty,
    }
  }, [
    onActiveMove,
    onBackspaceOnEmpty,
    onOpen,
    onSearchChange,
    onSearchReset,
    onSelectActive,
  ])

  /**
   * Whether the list is open, as far as the KEYS are concerned: `open` is a
   * render behind the request, so a key pressed right after the first
   * character would otherwise think the list is still closed and ask for it a
   * second time instead of acting.
   */
  const requestedOpenRef = useRef(open)
  useEffect(() => {
    requestedOpenRef.current = open
  }, [open])

  const requestOpen = useCallback(() => {
    requestedOpenRef.current = true
    callbacksRef.current.onOpen()
  }, [])

  /**
   * The query goes out on the keystroke, with no wait of its own.
   *
   * Static options filter in the same render, so any wait is just the list
   * lagging behind the text. A `source` still has the data layer's own
   * debounce in front of the network, which is where that belongs.
   */
  const handleChange = useCallback(
    (value: string) => {
      setDraft(value)
      callbacksRef.current.onSearchChange(value)
      // Typing is how you open it. Clearing is not: the clear button routes
      // through the same change handler with an empty value.
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
   * Closing drops the query for single AND multiple selection: the trigger
   * goes back to showing what is selected, so a query still applied to the
   * list would reopen onto a filtered list the field no longer shows.
   *
   * Focus comes back to the field, but only when it was still inside the
   * select — closing because the user clicked another field must not yank the
   * caret back out of it.
   */
  const wasOpenRef = useRef(open)
  useEffect(() => {
    const wasOpen = wasOpenRef.current
    wasOpenRef.current = open

    if (!enabled || !wasOpen || open) return

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

  /**
   * Keys that belong to the LIST, and only those. Everything else is text
   * editing and is left to the input: the caret keys, Home, End, backspace,
   * and every printable character.
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) return

      const isArrowDown = event.key === "ArrowDown"
      const isArrowUp = event.key === "ArrowUp"
      const isEnter = event.key === "Enter"

      // With nothing typed, backspace edits the selection instead: its label
      // becomes the text minus one character. Consumed when that happened, so
      // the input does not also delete from the text just handed to it.
      if (event.key === "Backspace" && event.currentTarget.value === "") {
        if (callbacksRef.current.onBackspaceOnEmpty()) event.preventDefault()
        return
      }

      if (!isArrowDown && !isArrowUp && !isEnter) return

      if (!requestedOpenRef.current) {
        event.preventDefault()
        requestOpen()
        return
      }

      if (isEnter) {
        // Consumed only if it took something, so a form can still be
        // submitted from a field whose list has nothing in it.
        if (callbacksRef.current.onSelectActive()) event.preventDefault()
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
    handleChange,
    handleKeyDown,
  }
}
