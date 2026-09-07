import { useCallback, useEffect, useRef, useState } from "react"

/** Same wait as the popover search box, so both feel identical to type in. */
const SEARCH_DEBOUNCE_MS = 400

type UseTriggerSearchOptions = {
  /** False for every select whose trigger is not the search field. */
  enabled: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  onSearchChange: (value: string) => void
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
  onOpenChange,
  onSearchChange,
}: UseTriggerSearchOptions) => {
  const [draft, setDraft] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Read through refs so the returned handlers stay stable across renders:
  // they are cloned onto the input by F0InputField, and a new identity every
  // keystroke would remount it.
  const onSearchChangeRef = useRef(onSearchChange)
  onSearchChangeRef.current = onSearchChange
  const onOpenChangeRef = useRef(onOpenChange)
  onOpenChangeRef.current = onOpenChange
  const openRef = useRef(open)
  openRef.current = open

  const cancelPending = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  // A trailing timer must not fire against an unmounted component (in tests,
  // after jsdom is torn down).
  useEffect(() => cancelPending, [cancelPending])

  const emit = useCallback(
    (value: string) => {
      cancelPending()
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        onSearchChangeRef.current(value)
      }, SEARCH_DEBOUNCE_MS)
    },
    [cancelPending]
  )

  const handleChange = useCallback(
    (value: string) => {
      setDraft(value)
      emit(value)
      // Typing is how you open it. Clearing is not: the clear button routes
      // through the same change handler with an empty value.
      if (value && !openRef.current) {
        onOpenChangeRef.current(true)
      }
    },
    [emit]
  )

  const clearDraft = useCallback(() => {
    setDraft("")
    cancelPending()
    onSearchChangeRef.current("")
  }, [cancelPending])

  const focusInput = useCallback(() => {
    inputRef.current?.focus({ preventScroll: true })
  }, [])

  /**
   * Closing drops the query for single AND multiple selection: the trigger
   * goes back to showing what is selected, so a query still applied to the
   * list would reopen onto a filtered list the field no longer shows.
   *
   * Focus comes back to the field, the way it does for the inline variant —
   * the field is the only thing left to interact with once the list is gone.
   */
  const wasOpenRef = useRef(open)
  useEffect(() => {
    const wasOpen = wasOpenRef.current
    wasOpenRef.current = open

    if (!enabled || !wasOpen || open) return

    setDraft("")
    cancelPending()
    onSearchChangeRef.current("")
    inputRef.current?.focus({ preventScroll: true })
  }, [cancelPending, enabled, open])

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

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.defaultPrevented) return

      const isArrowDown = event.key === "ArrowDown"
      const isArrowUp = event.key === "ArrowUp"

      if (isArrowDown || isArrowUp) {
        event.preventDefault()
        if (!openRef.current) {
          onOpenChangeRef.current(true)
          return
        }
        const options = getEnabledOptions()
        const next = isArrowUp ? options[options.length - 1] : options[0]
        next?.focus({ preventScroll: true })
        return
      }

      if (event.key === "Enter") {
        // Never let the surrounding form submit off a field the user is
        // browsing a list with.
        event.preventDefault()
        if (!openRef.current) {
          onOpenChangeRef.current(true)
          return
        }
        // Enter commits the obvious candidate — the first option left after
        // the query — through the option itself, so it selects, closes and
        // emits exactly as a click on that row would.
        getEnabledOptions()[0]?.click()
      }
    },
    [getEnabledOptions]
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
