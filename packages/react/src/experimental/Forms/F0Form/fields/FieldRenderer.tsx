import {
  ControllerRenderProps,
  FieldError,
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
import { DateFieldRenderer } from "./date/DateFieldRenderer"
import { NumberFieldRenderer } from "./number/NumberFieldRenderer"
import { RichTextFieldRenderer } from "./richtext/RichTextFieldRenderer"
import { SelectFieldRenderer } from "./select/SelectFieldRenderer"
import { SwitchFieldRenderer } from "./switch/SwitchFieldRenderer"
import { TextFieldRenderer } from "./text/TextFieldRenderer"
import { TextareaFieldRenderer } from "./textarea/TextareaFieldRenderer"

interface FieldRendererProps {
  field: FieldDefinition
}

/**
 * Renders the appropriate input component based on field type
 */
function renderFieldInput(
  field: FieldDefinition,
  formField: ControllerRenderProps<FieldValues>,
  error?: FieldError
): React.ReactNode {
  const hasError = !!error

  switch (field.type) {
    case "text":
      return (
        <TextFieldRenderer
          field={field}
          formField={formField}
          error={hasError}
        />
      )
    case "number":
      return (
        <NumberFieldRenderer
          field={field}
          formField={formField}
          error={hasError}
        />
      )
    case "textarea":
      return (
        <TextareaFieldRenderer
          field={field}
          formField={formField}
          error={hasError}
        />
      )
    case "select":
      return (
        <SelectFieldRenderer
          field={field}
          formField={formField}
          error={hasError}
        />
      )
    case "checkbox":
      return <CheckboxFieldRenderer field={field} formField={formField} />
    case "switch":
      return <SwitchFieldRenderer field={field} formField={formField} />
    case "date":
      return (
        <DateFieldRenderer
          field={field}
          formField={formField}
          error={hasError}
        />
      )
    case "richtext":
      return <RichTextFieldRenderer field={field} formField={formField} />
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
      render={({ field: formField, fieldState }) => (
        <FormItem>
          {showLabel && (
            <label
              htmlFor={field.id}
              className="text-base font-medium leading-normal text-f1-foreground-secondary"
            >
              {field.label}
            </label>
          )}
          <FormControl>
            {renderFieldInput(field, formField, fieldState.error)}
          </FormControl>
          {field.helpText && (
            <FormDescription>{field.helpText}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
