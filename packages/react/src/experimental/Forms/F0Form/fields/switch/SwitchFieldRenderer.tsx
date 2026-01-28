import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Switch } from "../../../Fields/Switch"
import type { SwitchFieldDefinition } from "./types"

interface SwitchFieldRendererProps {
  field: SwitchFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a switch toggle field
 */
export function SwitchFieldRenderer({
  field,
  formField,
}: SwitchFieldRendererProps) {
  return (
    <Switch
      title={field.label}
      disabled={field.disabled}
      {...formField}
      checked={Boolean(formField.value)}
      onCheckedChange={formField.onChange}
      hideLabel
    />
  )
}
