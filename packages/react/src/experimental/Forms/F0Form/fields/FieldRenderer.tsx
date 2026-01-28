import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form"

import {
  FormControl,
  FormDescription,
  FormField as FormFieldPrimitive,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form"

import type { FieldDefinition } from "./types"
import { evaluateRenderIf } from "./utils"

// Import field renderers
import { CheckboxFieldRenderer } from "./checkbox/CheckboxFieldRenderer"
import { NumberFieldRenderer } from "./number/NumberFieldRenderer"
import { SelectFieldRenderer } from "./select/SelectFieldRenderer"
import { SwitchFieldRenderer } from "./switch/SwitchFieldRenderer"
import { TextFieldRenderer } from "./text/TextFieldRenderer"
import { TextareaFieldRenderer } from "./textarea/TextareaFieldRenderer"
import { ToggleFieldRenderer } from "./toggle/ToggleFieldRenderer"

interface FieldRendererProps {
  field: FieldDefinition
}

/**
 * Renders the appropriate input component based on field type
 */
function renderFieldInput(
  field: FieldDefinition,
  formField: ControllerRenderProps<FieldValues>
): React.ReactNode {
  switch (field.type) {
    case "text":
      return <TextFieldRenderer field={field} formField={formField} />
    case "number":
      return <NumberFieldRenderer field={field} formField={formField} />
    case "textarea":
      return <TextareaFieldRenderer field={field} formField={formField} />
    case "select":
      return <SelectFieldRenderer field={field} formField={formField} />
    case "checkbox":
      return <CheckboxFieldRenderer field={field} formField={formField} />
    case "switch":
      return <SwitchFieldRenderer field={field} formField={formField} />
    case "toggle":
      return <ToggleFieldRenderer field={field} formField={formField} />
    default:
      return null
  }
}

/**
 * FieldRenderer component that renders a single form field based on its definition.
 * Handles conditional rendering via renderIf and integrates with react-hook-form.
 */
export function FieldRenderer({ field }: FieldRendererProps) {
  const form = useFormContext()
  const values = form.watch()

  // Check if field should be rendered based on renderIf condition
  if (field.renderIf && !evaluateRenderIf(field.renderIf, values)) {
    return null
  }

  // For checkbox and switch, we don't need a separate label since the component shows it
  const showLabel = field.type !== "checkbox" && field.type !== "switch"

  return (
    <FormFieldPrimitive
      control={form.control}
      name={field.id}
      render={({ field: formField }) => (
        <FormItem>
          {showLabel && <FormLabel>{field.label}</FormLabel>}
          <FormControl>{renderFieldInput(field, formField)}</FormControl>
          {field.helpText && (
            <FormDescription>{field.helpText}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
