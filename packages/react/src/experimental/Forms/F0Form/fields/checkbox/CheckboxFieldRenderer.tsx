import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0Checkbox } from "@/components/F0Checkbox"

import type { CheckboxFieldDefinition } from "./types"

interface CheckboxFieldRendererProps {
  field: CheckboxFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a checkbox field
 */
export function CheckboxFieldRenderer({
  field,
  formField,
}: CheckboxFieldRendererProps) {
  return (
    <F0Checkbox
      title={field.label}
      disabled={field.disabled}
      {...formField}
      checked={Boolean(formField.value)}
      onCheckedChange={formField.onChange}
      hideLabel
    />
  )
}
