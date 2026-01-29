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

import { generateAnchorId, useF0FormContext } from "../context"
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
  /** Section ID when field is inside a section (for anchor links) */
  sectionId?: string
}

interface FieldState {
  error?: FieldError
  isValidating: boolean
}

/**
 * Renders the appropriate input component based on field type
 */
function renderFieldInput(
  field: FieldDefinition,
  formField: ControllerRenderProps<FieldValues>,
  fieldState: FieldState
): React.ReactNode {
  const hasError = !!fieldState.error
  const { isValidating } = fieldState

  const errorAndLoadingProps = {
    error: hasError,
    loading: isValidating,
  }

  switch (field.type) {
    case "text":
      return (
        <TextFieldRenderer
          field={field}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "number":
      return (
        <NumberFieldRenderer
          field={field}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "textarea":
      return (
        <TextareaFieldRenderer
          field={field}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "select":
      return (
        <SelectFieldRenderer
          field={field}
          formField={formField}
          {...errorAndLoadingProps}
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
          {...errorAndLoadingProps}
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
export function FieldRenderer({ field, sectionId }: FieldRendererProps) {
  const form = useFormContext()
  const values = form.watch()
  const { formName } = useF0FormContext()

  // Check if field should be rendered based on renderIf condition
  if (field.renderIf && !evaluateRenderIf(field.renderIf, values)) {
    return null
  }

  // For checkbox, we show label inline with the checkbox
  const showLabel = field.type !== "checkbox"

  // Generate anchor ID for the field
  const anchorId = generateAnchorId(formName, sectionId, field.id)

  return (
    <FormFieldPrimitive
      control={form.control}
      name={field.id}
      render={({ field: formField, fieldState }) => (
        <FormItem id={anchorId} className="scroll-mt-4">
          {showLabel && (
            <label
              htmlFor={field.id}
              className="text-base font-medium leading-normal text-f1-foreground-secondary"
            >
              {field.label}
            </label>
          )}
          <FormControl>
            {renderFieldInput(field, formField, fieldState)}
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
