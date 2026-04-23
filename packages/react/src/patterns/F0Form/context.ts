import { createContext, useContext } from "react"

import type { InitialFile, UseFileUpload } from "./fields/file/types"
import type { RenderCustomFieldFunction } from "./types"

interface F0FormContextValue {
  /** Form name used for anchor links */
  formName: string
  /** Shared pool of pre-existing file metadata for file fields */
  initialFiles?: InitialFile[]
  /** Whether async initialFiles are still being resolved */
  isLoadingInitialFiles?: boolean
  /** Callback that renders custom fields identified by customFieldName */
  renderCustomField?: RenderCustomFieldFunction
  /** Whether async defaultValues are still being resolved */
  isLoading?: boolean
  /** Default upload hook shared across all file fields */
  useUpload?: UseFileUpload
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

export function useOptionalF0FormContext() {
  return useContext(F0FormContext)
}

// ---------------------------------------------------------------------------
// AI Fill Glow context — tracks which field IDs were recently filled by the
// AI co-creation flow so FieldRenderer can show the animated border glow.
// Provided by F0FormSingleSchema; NOT re-provided by F0FormSection so it
// propagates through section boundaries naturally.
// ---------------------------------------------------------------------------

export interface F0FormAiGlowContextValue {
  glowingFields: ReadonlySet<string>
  /** Clear the glow for a specific field (called when the user edits it) */
  clearFieldGlow: (fieldId: string) => void
}

export const F0FormAiGlowContext = createContext<F0FormAiGlowContextValue>({
  glowingFields: new Set(),
  clearFieldGlow: () => {},
})

export function useF0FormAiGlowContext() {
  return useContext(F0FormAiGlowContext)
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
