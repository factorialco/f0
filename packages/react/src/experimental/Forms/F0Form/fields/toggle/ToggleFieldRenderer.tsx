import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { ToggleGroup, ToggleGroupItem } from "@/ui/toggleGroup"

import type { ToggleFieldDefinition } from "./types"

interface ToggleFieldRendererProps {
  field: ToggleFieldDefinition
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Renders a toggle group field
 */
export function ToggleFieldRenderer({
  field,
  formField,
}: ToggleFieldRendererProps) {
  return (
    <ToggleGroup
      type="single"
      variant={field.variant}
      {...formField}
      value={formField.value != null ? String(formField.value) : undefined}
      onValueChange={formField.onChange}
    >
      {field.options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          disabled={option.disabled || field.disabled}
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
