import { useCallback, useEffect, useRef } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import {
  F0RichTextEditor,
  type RichTextEditorHandle,
} from "@/components/RichText/F0RichTextEditor"

import type { ResolvedField } from "../types"
import type { F0RichTextField, RichTextValue } from "./types"

interface RichTextFieldRendererProps {
  field: ResolvedField<F0RichTextField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  loading?: boolean
}

/**
 * Renders a rich text editor field
 */
export function RichTextFieldRenderer({
  field,
  formField,
  error,
  loading,
}: RichTextFieldRendererProps) {
  const { ref: formRef, ...formFieldRest } = formField
  const editorRef = useRef<RichTextEditorHandle>(null)
  const lastInternalContentRef = useRef<string>("")

  // Compose react-hook-form's ref (used for shouldFocusError) with our own
  const composedRef = useCallback(
    (handle: RichTextEditorHandle | null) => {
      ;(
        editorRef as React.MutableRefObject<RichTextEditorHandle | null>
      ).current = handle
      // react-hook-form expects a callback ref for focus management
      if (typeof formRef === "function") {
        formRef(handle)
      }
    },
    [formRef]
  )

  // fillForm sets a plain string while the editor's onChange produces a
  // RichTextValue object. Normalise both shapes into a content string.
  const rawValue = formField.value as RichTextValue | string | undefined
  const currentContent =
    typeof rawValue === "string" ? rawValue : (rawValue?.value ?? "")

  // Sync external value changes (e.g. from fillForm) into the TipTap editor.
  // The editor only reads initialEditorState on mount, so programmatic updates
  // via react-hook-form's setValue need to be pushed explicitly.
  useEffect(() => {
    if (currentContent !== lastInternalContentRef.current) {
      editorRef.current?.setContent(currentContent)
    }
  }, [currentContent])

  return (
    <F0RichTextEditor
      ref={composedRef}
      {...formFieldRest}
      title={field.label}
      placeholder={field.placeholder ?? ""}
      maxCharacters={field.maxCharacters}
      mentionsConfig={field.mentionsConfig}
      height={field.height}
      plainHtmlMode={field.plainHtmlMode}
      disabled={field.disabled}
      error={error}
      loading={loading}
      initialEditorState={{
        content: currentContent,
      }}
      onChange={(result) => {
        lastInternalContentRef.current = result.value ?? ""
        formField.onChange({
          value: result.value,
          mentionIds: result.mentionIds,
        } satisfies RichTextValue)
      }}
    />
  )
}
