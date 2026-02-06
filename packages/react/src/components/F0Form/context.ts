import { createContext, useContext } from "react"

interface F0FormContextValue {
  /** Form name used for anchor links */
  formName: string
}

export const F0FormContext = createContext<F0FormContextValue | null>(null)

/**
 * Hook to access the F0Form context
 */
export function useF0FormContext() {
  const context = useContext(F0FormContext)
  if (!context) {
    throw new Error("useF0FormContext must be used within a F0Form")
  }
  return context
}

/**
 * Generates an anchor ID for a form element
 * Format: forms.[formName].[sectionId].[fieldId]
 */
export function generateAnchorId(
  formName: string,
  sectionId?: string,
  fieldId?: string
): string {
  const parts = ["forms", formName]

  if (sectionId) {
    parts.push(sectionId)
  }

  if (fieldId) {
    parts.push(fieldId)
  }

  return parts.join(".")
}
