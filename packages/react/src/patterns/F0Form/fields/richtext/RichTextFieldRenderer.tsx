import { useEffect, useRef } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import {
  RichTextEditor,
  type RichTextEditorHandle,
} from "@/components/RichText/RichTextEditor"

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
  const { ref: _formRef, ...formFieldRest } = formField
  const editorRef = useRef<RichTextEditorHandle>(null)
  const lastInternalValueRef = useRef<string | null | undefined>(undefined)

  // fillForm sets a plain string while the editor's onChange produces a
  // RichTextValue object. Normalise both shapes into a content string.
  const rawValue = formField.value as RichTextValue | string | undefined
  const currentContent =
    typeof rawValue === "string" ? rawValue : (rawValue?.value ?? "")

  // Sync external value changes (e.g. from fillForm) into the TipTap editor.
  // The editor only reads initialEditorState on mount, so programmatic updates
  // via react-hook-form's setValue need to be pushed explicitly.
  useEffect(() => {
    if (currentContent !== lastInternalValueRef.current) {
      editorRef.current?.setContent(currentContent)
    }
  }, [currentContent])

  return (
    <RichTextEditor
      ref={editorRef}
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
        lastInternalValueRef.current = result.value
        formField.onChange({
          value: result.value,
          mentionIds: result.mentionIds,
        } satisfies RichTextValue)
      }}
    />
  )
}
