import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { RichTextEditor } from "@/experimental/RichText/RichTextEditor"

import type { RichTextFieldDefinition, RichTextValue } from "./types"

interface RichTextFieldRendererProps {
  field: RichTextFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a rich text editor field
 */
export function RichTextFieldRenderer({
  field,
  formField,
}: RichTextFieldRendererProps) {
  const currentValue = formField.value as RichTextValue | undefined

  return (
    <RichTextEditor
      title={field.label}
      placeholder={field.placeholder ?? ""}
      maxCharacters={field.maxCharacters}
      mentionsConfig={field.mentionsConfig}
      height={field.height}
      plainHtmlMode={field.plainHtmlMode}
      initialEditorState={{
        content: currentValue?.value ?? "",
      }}
      onChange={(result) => {
        formField.onChange({
          value: result.value,
          mentionIds: result.mentionIds,
        } satisfies RichTextValue)
      }}
    />
  )
}
