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
 *
 * Note: Switch fields rendered individually (not in a group) use this renderer.
 * Contiguous switch fields are grouped by parent components (F0Form, SectionRenderer).
 */
export function FieldRenderer({ field }: FieldRendererProps) {
  const form = useFormContext()
  const values = form.watch()

  // Check if field should be rendered based on renderIf condition
  if (field.renderIf && !evaluateRenderIf(field.renderIf, values)) {
    return null
  }

  // For checkbox, we show label inline with the checkbox
  const showLabel = field.type !== "checkbox"

  return (
    <FormFieldPrimitive
      control={form.control}
      name={field.id}
      render={({ field: formField }) => (
        <FormItem>
          {showLabel && (
            <label
              htmlFor={field.id}
              className="text-base font-medium leading-normal text-f1-foreground-secondary"
            >
              {field.label}
            </label>
          )}
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
