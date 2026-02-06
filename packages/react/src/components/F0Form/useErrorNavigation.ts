import { useCallback, useEffect, useRef, useState } from "react"
import { FieldErrors } from "react-hook-form"

import { generateAnchorId } from "./context"

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
 * Focuses a field element by its anchor ID
 */
function focusFieldElement(anchorId: string) {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" })
    const input = element.querySelector("input, textarea, select")
    if (input instanceof HTMLElement) {
      input.focus()
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
  // Extract field error keys (excluding root error)
  const fieldErrors = Object.keys(errors).filter((key) => key !== "root")
  const hasErrors = fieldErrors.length > 0
  const errorCount = fieldErrors.length

  // Track current error index for navigation
  const [currentErrorIndex, setCurrentErrorIndex] = useState(0)

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
      // Focus the field with the new error
      const anchorId = generateAnchorId(formName, undefined, newErrorKey)
      focusFieldElement(anchorId)

      // Update current error index to the new error
      const newErrorIndex = currentErrorKeys.indexOf(newErrorKey)
      if (newErrorIndex !== -1) {
        setCurrentErrorIndex(newErrorIndex)
      }
    }

    prevErrorKeysRef.current = currentErrorKeys
  }, [fieldErrors, formName])

  // Navigate to a specific error by index (with wrap-around)
  const navigateToError = useCallback(
    (index: number) => {
      if (fieldErrors.length === 0) return

      // Wrap around
      const wrappedIndex =
        ((index % fieldErrors.length) + fieldErrors.length) % fieldErrors.length
      setCurrentErrorIndex(wrappedIndex)

      const fieldId = fieldErrors[wrappedIndex]
      const anchorId = generateAnchorId(formName, undefined, fieldId)
      focusFieldElement(anchorId)
    },
    [fieldErrors, formName]
  )

  const goToPreviousError = useCallback(() => {
    navigateToError(currentErrorIndex - 1)
  }, [currentErrorIndex, navigateToError])

  const goToNextError = useCallback(() => {
    navigateToError(currentErrorIndex + 1)
  }, [currentErrorIndex, navigateToError])

  const resetErrorNavigation = useCallback(() => {
    setCurrentErrorIndex(0)
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
