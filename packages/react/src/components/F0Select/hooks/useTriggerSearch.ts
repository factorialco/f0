import { useCallback, useEffect, useRef, useState } from "react"

/** Same wait as the popover search box, so both feel identical to type in. */
const SEARCH_DEBOUNCE_MS = 400

/**
 * How long a key that reaches into the list waits for the list to catch up.
 *
 * A keystroke flushes the pending query, but the rows are re-rendered (and for
 * a remote source, refetched) after that, so the option to focus does not
 * exist yet in the same tick. These bound the wait rather than guessing one
 * delay: give up quietly if the list never settles.
 */
const OPTION_POLL_INTERVAL_MS = 16
const OPTION_POLL_TIMEOUT_MS = 600

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
  triggerRef,
}: UseTriggerSearchOptions) => {
  const [draft, setDraft] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingValueRef = useRef<string | null>(null)
  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Read the callbacks through refs so the returned handlers stay stable: they
  // are cloned onto the input by the field chrome, and a new identity on every
  // keystroke would remount it.
  const callbacksRef = useRef({ onSearchChange, onOpen, onSearchReset })
  useEffect(() => {
    callbacksRef.current = { onSearchChange, onOpen, onSearchReset }
  }, [onOpen, onSearchChange, onSearchReset])

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

  const cancelPending = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    pendingValueRef.current = null
  }, [])

  const cancelPolling = useCallback(() => {
    if (pollTimerRef.current !== null) {
      clearTimeout(pollTimerRef.current)
      pollTimerRef.current = null
    }
  }, [])

  // A trailing timer must not fire against an unmounted component (in tests,
  // after jsdom is torn down).
  useEffect(() => {
    return () => {
      cancelPending()
      cancelPolling()
    }
  }, [cancelPending, cancelPolling])

  const emit = useCallback(
    (value: string) => {
      cancelPending()
      pendingValueRef.current = value
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        pendingValueRef.current = null
        callbacksRef.current.onSearchChange(value)
      }, SEARCH_DEBOUNCE_MS)
    },
    [cancelPending]
  )

  /** Sends the query now, so what happens next happens to the right list. */
  const flushPendingSearch = useCallback(() => {
    const pending = pendingValueRef.current
    cancelPending()
    if (pending !== null) {
      callbacksRef.current.onSearchChange(pending)
      return true
    }
    return false
  }, [cancelPending])

  const handleChange = useCallback(
    (value: string) => {
      setDraft(value)
      emit(value)
      // Typing is how you open it. Clearing is not: the clear button routes
      // through the same change handler with an empty value.
      if (value && !requestedOpenRef.current) {
        requestOpen()
      }
    },
    [emit, requestOpen]
  )

  const clearDraft = useCallback(() => {
    setDraft("")
    cancelPending()
    callbacksRef.current.onSearchReset()
  }, [cancelPending])

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
    cancelPending()
    cancelPolling()
    callbacksRef.current.onSearchReset()

    const active = document.activeElement
    const focusLeftTheSelect =
      active instanceof HTMLElement &&
      active !== document.body &&
      !triggerRef.current?.contains(active)

    if (!focusLeftTheSelect) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [cancelPending, cancelPolling, enabled, open, triggerRef])

  /**
   * The options live in a portal, so they are reachable only through the
   * `aria-controls` the select primitive puts on this field.
   */
  const getEnabledOptions = useCallback((): HTMLElement[] => {
    const contentId = inputRef.current?.getAttribute("aria-controls")
    const content = contentId ? document.getElementById(contentId) : null
    return content
      ? Array.from(
          content.querySelectorAll<HTMLElement>(
            '[role="option"]:not([aria-disabled="true"])'
          )
        )
      : []
  }, [])

  /**
   * Moves focus onto the first or last option ONCE THE LIST IS THE ONE THE
   * QUERY ASKED FOR — never onto whatever row happens to be rendered while the
   * query is still on its way, which would hand the user a different option
   * from the one they are looking at.
   */
  const focusOption = useCallback(
    (edge: "first" | "last") => {
      cancelPolling()
      const startedAt = Date.now()

      const attempt = () => {
        pollTimerRef.current = null
        const options = getEnabledOptions()
        const target =
          edge === "last" ? options[options.length - 1] : options[0]

        if (target) {
          target.focus({ preventScroll: true })
          return
        }
        if (Date.now() - startedAt >= OPTION_POLL_TIMEOUT_MS) return

        pollTimerRef.current = setTimeout(attempt, OPTION_POLL_INTERVAL_MS)
      }

      pollTimerRef.current = setTimeout(attempt, OPTION_POLL_INTERVAL_MS)
    },
    [cancelPolling, getEnabledOptions]
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) return

      const isArrowDown = event.key === "ArrowDown"
      const isArrowUp = event.key === "ArrowUp"
      const isEnter = event.key === "Enter"

      if (!isArrowDown && !isArrowUp && !isEnter) return

      // Every one of these keys reaches into the list, so the list has to be
      // the one the current text asked for first.
      flushPendingSearch()

      if (!requestedOpenRef.current) {
        event.preventDefault()
        requestOpen()
        focusOption(isArrowUp ? "last" : "first")
        return
      }

      /**
       * Enter does NOT pick an option. It makes one active, the same as the
       * arrows, and the option itself takes the next Enter.
       *
       * Selecting the first row straight from the field would commit an option
       * whose name was never announced: focus is in the input, so a screen
       * reader has read no row. Announcing it instead needs the active option
       * exposed on the field, which the list primitive cannot do yet.
       */
      event.preventDefault()
      focusOption(isArrowUp ? "last" : "first")
    },
    [flushPendingSearch, focusOption, requestOpen]
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
