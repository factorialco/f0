import { useCallback, useEffect, useRef, useState } from "react"
import { FieldErrors } from "react-hook-form"

import { generateAnchorId } from "./context"

const errorNavigateClassName = "f0-form-error-navigate"
const errorNavigateTimeouts = new WeakMap<
  HTMLElement,
  ReturnType<typeof setTimeout>
>()

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
 * Focuses a field element by its anchor ID
 */
function focusFieldElement(
  anchorId: string,
  { highlight = false }: { highlight?: boolean } = {}
) {
  const element = document.getElementById(anchorId)
  if (element) {
    const visibleElement = getVisibleElement(element)
    visibleElement.scrollIntoView({ behavior: "smooth", block: "center" })
    const input = visibleElement.querySelector(
      "input, textarea, select, button"
    )
    if (input instanceof HTMLElement) {
      input.focus()
    }

    if (highlight) {
      applyErrorNavigationHighlight(visibleElement)
    }
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
}: UseErrorNavigationOptions): UseErrorNavigationReturn {
  // Extract field error keys (excluding root error), sorted by DOM position.
  // Object.keys(errors) order is unstable — RHF may reorder keys when it
  // re-validates a single field on blur (e.g. focusing a text input blurs the
  // previous one, triggering re-validation). Sorting by DOM position keeps
  // prev/next navigation consistent with the visual form layout.
  const fieldErrors = Object.keys(errors)
    .filter((key) => key !== "root")
    .sort((a, b) => {
      const anchorA = document.getElementById(
        generateAnchorId(formName, undefined, a)
      )
      const anchorB = document.getElementById(
        generateAnchorId(formName, undefined, b)
      )
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
      const anchorId = generateAnchorId(formName, undefined, newErrorKey)
      focusFieldElement(anchorId, { highlight: true })

      // Track the newly focused field
      setCurrentFieldId(newErrorKey)
    }

    prevErrorKeysRef.current = currentErrorKeys
  }, [fieldErrors, formName])

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

      const anchorId = generateAnchorId(formName, undefined, fieldId)
      focusFieldElement(anchorId, { highlight: true })
    },
    [formName]
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
