import { useCallback, useEffect, useRef, useState } from "react"
import { FieldErrors } from "react-hook-form"

import { generateAnchorId } from "./context"

const errorNavigateClassName = "f0-form-error-navigate"
const errorNavigateTimeouts = new WeakMap<
  HTMLElement,
  ReturnType<typeof setTimeout>
>()

/**
 * Finds the anchor element for a field, handling both sectioned and
 * non-sectioned forms. First tries a direct lookup without section ID,
 * then falls back to a suffix-match query for sectioned anchors
 * (e.g. `forms.formName.sectionId.fieldId`).
 */
function findFieldAnchorElement(
  formName: string,
  fieldId: string
): HTMLElement | null {
  if (typeof document === "undefined") return null

  // Try without section ID first (non-sectioned form)
  const directId = generateAnchorId(formName, undefined, fieldId)
  const direct = document.getElementById(directId)
  if (direct) return direct

  // Fallback: search for sectioned anchor (forms.formName.*.fieldId)
  const prefix = `forms.${formName}.`
  const suffix = `.${fieldId}`
  return document.querySelector<HTMLElement>(
    `[id^="${prefix}"][id$="${suffix}"]`
  )
}

const applyErrorNavigationHighlight = (element: HTMLElement) => {
  const existingTimeout = errorNavigateTimeouts.get(element)
  if (existingTimeout) {
    clearTimeout(existingTimeout)
  }

  // Remove and re-add class to restart animation
  element.classList.remove(errorNavigateClassName)
  void element.offsetWidth // Force reflow
  element.classList.add(errorNavigateClassName)

  const timeout = setTimeout(() => {
    element.classList.remove(errorNavigateClassName)
    errorNavigateTimeouts.delete(element)
  }, 600)

  errorNavigateTimeouts.set(element, timeout)
}

interface UseErrorNavigationOptions {
  /** Form name for generating anchor IDs */
  formName: string
  /** Field errors from react-hook-form */
  errors: FieldErrors
  /**
   * Called right before a field is focused (auto-focus on new errors and
   * prev/next navigation). Lets the form reveal the field first — e.g.
   * switching the visible section when only the selected section is shown.
   * When provided, the focus itself is deferred to the next macrotask so a
   * state-driven reveal can commit before the element is scrolled to.
   */
  onBeforeFocusField?: (fieldId: string) => void
}

interface UseErrorNavigationReturn {
  /** List of field IDs with errors */
  fieldErrors: string[]
  /** Whether there are any field errors */
  hasErrors: boolean
  /** Number of field errors */
  errorCount: number
  /** Current error index for navigation */
  currentErrorIndex: number
  /** Navigate to previous error */
  goToPreviousError: () => void
  /** Navigate to next error */
  goToNextError: () => void
  /** Reset error navigation state (e.g., on form reset) */
  resetErrorNavigation: () => void
}

/**
 * Returns the effective visible element for an anchor.
 * If the anchor element is hidden (e.g. a hidden span used as a routing
 * anchor in switch groups), walks up to find the nearest visible parent.
 */
function getVisibleElement(element: HTMLElement): HTMLElement {
  let current: HTMLElement | null = element
  while (current && current.offsetParent === null && current.parentElement) {
    current = current.parentElement
  }
  return current ?? element
}

/**
 * Focuses a field element found via the anchor lookup helper,
 * handling both sectioned and non-sectioned forms.
 */
function focusFieldByLookup(
  formName: string,
  fieldId: string,
  { highlight = false }: { highlight?: boolean } = {}
) {
  const element = findFieldAnchorElement(formName, fieldId)
  if (element) {
    focusElement(element, { highlight })
  }
}

/**
 * Shared logic: scrolls, focuses, and optionally highlights an element.
 */
function focusElement(
  element: HTMLElement,
  { highlight = false }: { highlight?: boolean } = {}
) {
  const visibleElement = getVisibleElement(element)
  visibleElement.scrollIntoView({ behavior: "smooth", block: "center" })
  const input = visibleElement.querySelector("input, textarea, select, button")
  if (input instanceof HTMLElement) {
    input.focus()
  }

  if (highlight) {
    applyErrorNavigationHighlight(visibleElement)
  }
}

/**
 * Custom hook for managing form error navigation and auto-focus behavior.
 *
 * Features:
 * - Tracks field errors (excluding root errors)
 * - Auto-focuses newly triggered errors
 * - Provides navigation between errors (prev/next)
 * - Wraps around when navigating past first/last error
 */
export function useErrorNavigation({
  formName,
  errors,
  onBeforeFocusField,
}: UseErrorNavigationOptions): UseErrorNavigationReturn {
  // Ref-mirror so the effect and callbacks below always see the latest
  // callback without re-subscribing.
  const onBeforeFocusFieldRef = useRef(onBeforeFocusField)
  onBeforeFocusFieldRef.current = onBeforeFocusField

  // Focuses a field, first giving the form a chance to reveal it. The reveal
  // may set React state (e.g. switch the visible section), so the focus is
  // deferred until after that update has committed.
  const focusField = useCallback(
    (fieldId: string) => {
      const reveal = onBeforeFocusFieldRef.current
      if (!reveal) {
        focusFieldByLookup(formName, fieldId, { highlight: true })
        return
      }
      reveal(fieldId)
      setTimeout(() => {
        focusFieldByLookup(formName, fieldId, { highlight: true })
      }, 0)
    },
    [formName]
  )

  // Extract field error keys (excluding root error).
  // Object.keys(errors) order is unstable — RHF may reorder keys when it
  // re-validates a single field on blur (e.g. focusing a text input blurs the
  // previous one, triggering re-validation).
  const fieldErrorKeys = Object.keys(errors).filter((key) => key !== "root")

  // In the browser, sort by DOM position so prev/next navigation stays
  // consistent with the visual form layout. In SSR / non-DOM environments,
  // fall back to the original key order to avoid accessing `document`
  // during render.
  const fieldErrors =
    typeof document === "undefined"
      ? fieldErrorKeys
      : [...fieldErrorKeys].sort((a, b) => {
          const anchorA = findFieldAnchorElement(formName, a)
          const anchorB = findFieldAnchorElement(formName, b)
          if (!anchorA || !anchorB) return 0
          const position = anchorA.compareDocumentPosition(anchorB)
          if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
          if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1
          return 0
        })
  const hasErrors = fieldErrors.length > 0
  const errorCount = fieldErrors.length

  // Track current error by field ID so navigation stays correct when the
  // error list changes (fields resolved / new fields validated).
  // Uses state so index changes propagate to consumers via re-render.
  const [currentFieldId, setCurrentFieldId] = useState<string | null>(null)

  // Derive index from the tracked field ID
  const currentErrorIndex = currentFieldId
    ? Math.max(0, fieldErrors.indexOf(currentFieldId))
    : 0

  // Keep refs mirroring latest values so callbacks avoid stale closures
  const fieldErrorsRef = useRef(fieldErrors)
  fieldErrorsRef.current = fieldErrors

  const currentFieldIdRef = useRef(currentFieldId)
  currentFieldIdRef.current = currentFieldId

  // Resolve the current index from the tracked field ID and the latest error list
  const resolveCurrentIndex = useCallback(() => {
    const id = currentFieldIdRef.current
    if (!id) return 0
    const idx = fieldErrorsRef.current.indexOf(id)
    return idx === -1 ? 0 : idx
  }, [])

  // Track previous errors to detect new ones
  const prevErrorKeysRef = useRef<string[]>([])

  // Focus on first new error when errors change
  useEffect(() => {
    const currentErrorKeys = fieldErrors
    const prevErrorKeys = prevErrorKeysRef.current

    // Find the first new error (not in previous errors)
    const newErrorKey = currentErrorKeys.find(
      (key) => !prevErrorKeys.includes(key)
    )

    if (newErrorKey) {
      // Focus the field with the new error and trigger animation
      focusField(newErrorKey)

      // Track the newly focused field
      setCurrentFieldId(newErrorKey)
    }

    prevErrorKeysRef.current = currentErrorKeys
  }, [fieldErrors, formName, focusField])

  // Navigate to a specific error by index (with wrap-around)
  const navigateToError = useCallback(
    (index: number) => {
      const errors = fieldErrorsRef.current
      if (errors.length === 0) return

      // Wrap around
      const wrappedIndex =
        ((index % errors.length) + errors.length) % errors.length

      const fieldId = errors[wrappedIndex]
      setCurrentFieldId(fieldId)

      focusField(fieldId)
    },
    [focusField]
  )

  const goToPreviousError = useCallback(() => {
    navigateToError(resolveCurrentIndex() - 1)
  }, [resolveCurrentIndex, navigateToError])

  const goToNextError = useCallback(() => {
    navigateToError(resolveCurrentIndex() + 1)
  }, [resolveCurrentIndex, navigateToError])

  const resetErrorNavigation = useCallback(() => {
    setCurrentFieldId(null)
    prevErrorKeysRef.current = []
  }, [])

  return {
    fieldErrors,
    hasErrors,
    errorCount,
    currentErrorIndex,
    goToPreviousError,
    goToNextError,
    resetErrorNavigation,
  }
}
