import { useEffect, useRef } from "react"
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  useFormContext,
} from "react-hook-form"

import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import {
  FormControl,
  FormDescription,
  FormField as FormFieldPrimitive,
  FormItem,
  FormMessage,
} from "@/ui/form"

import { generateAnchorId, useF0FormContext } from "../context"
import { isFieldRequired } from "./schema"
import type { F0Field } from "./types"
import {
  evaluateDateConstraint,
  evaluateDisabled,
  evaluateRenderIf,
} from "./utils"

// Import field renderers
import { CheckboxFieldRenderer } from "./checkbox/CheckboxFieldRenderer"
import { CustomFieldRenderer } from "./custom/CustomFieldRenderer"
import { DateFieldRenderer } from "./date/DateFieldRenderer"
import { TimeFieldRenderer } from "./date/TimeFieldRenderer"
import { DateTimeFieldRenderer } from "./date/DateTimeFieldRenderer"
import { DateRangeFieldRenderer } from "./daterange/DateRangeFieldRenderer"
import { NumberFieldRenderer } from "./number/NumberFieldRenderer"
import { RichTextFieldRenderer } from "./richtext/RichTextFieldRenderer"
import { SelectFieldRenderer } from "./select/SelectFieldRenderer"
import { SwitchFieldRenderer } from "./switch/SwitchFieldRenderer"
import { TextFieldRenderer } from "./text/TextFieldRenderer"
import { TextareaFieldRenderer } from "./textarea/TextareaFieldRenderer"

interface FieldRendererProps {
  field: F0Field
  /** Section ID when field is inside a section (for anchor links) */
  sectionId?: string
}

interface FieldState {
  error?: FieldError
  isValidating: boolean
}

interface RenderFieldInputOptions {
  field: F0Field
  formField: ControllerRenderProps<FieldValues>
  fieldState: FieldState
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
}

/**
 * Renders the appropriate input component based on field type
 */
function renderFieldInput({
  field,
  formField,
  fieldState,
  isSubmitting,
  isRequired,
  values,
}: RenderFieldInputOptions): React.ReactNode {
  const hasError = !!fieldState.error
  const { isValidating } = fieldState

  // Evaluate disabled (can be boolean or function) and combine with submitting state
  const isDisabled = evaluateDisabled(field.disabled, values) || isSubmitting

  const errorAndLoadingProps = {
    error: hasError,
    loading: isValidating,
  }

  switch (field.type) {
    case "text":
      return (
        <TextFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "number":
      return (
        <NumberFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "textarea":
      return (
        <TextareaFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "select":
      return (
        <SelectFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "checkbox":
      return (
        <CheckboxFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
        />
      )
    case "switch":
      return (
        <SwitchFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
        />
      )
    case "date":
      return (
        <DateFieldRenderer
          field={{
            ...field,
            disabled: isDisabled,
            // Evaluate dynamic date constraints
            minDate: evaluateDateConstraint(field.minDate, values),
            maxDate: evaluateDateConstraint(field.maxDate, values),
          }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "time":
      return (
        <TimeFieldRenderer
          field={{
            ...field,
            disabled: isDisabled,
            // Evaluate dynamic date constraints
            minDate: evaluateDateConstraint(field.minDate, values),
            maxDate: evaluateDateConstraint(field.maxDate, values),
          }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "datetime":
      return (
        <DateTimeFieldRenderer
          field={{
            ...field,
            disabled: isDisabled,
            // Evaluate dynamic date constraints
            minDate: evaluateDateConstraint(field.minDate, values),
            maxDate: evaluateDateConstraint(field.maxDate, values),
          }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "daterange":
      return (
        <DateRangeFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
        />
      )
    case "richtext":
      return (
        <RichTextFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
        />
      )
    case "custom":
      return (
        <CustomFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          isValidating={isValidating}
          required={isRequired}
        />
      )
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
 *
 * IMPORTANT: The FormFieldPrimitive (Controller) must stay mounted even when the field
 * is hidden to preserve the field value. We achieve this by rendering the Controller
 * always but hiding the visual content when renderIf evaluates to false.
 */
export function FieldRenderer({ field, sectionId }: FieldRendererProps) {
  const form = useFormContext()
  const values = form.watch()
  const { isSubmitting } = form.formState
  const { formName } = useF0FormContext()
  const { forms } = useI18n()

  // Evaluate if field is currently disabled
  const isDisabled = evaluateDisabled(field.disabled, values)

  // Track previous disabled state to detect transitions
  const wasDisabledRef = useRef(isDisabled)

  // Reset field to default value when it becomes disabled (if resetOnDisable is true)
  useEffect(() => {
    const wasDisabled = wasDisabledRef.current
    wasDisabledRef.current = isDisabled

    // Only reset when transitioning from enabled to disabled
    if (!wasDisabled && isDisabled && field.resetOnDisable) {
      // Use setValue with the default value for immediate update
      const defaultValue = form.formState.defaultValues?.[field.id]
      form.setValue(field.id, defaultValue, { shouldValidate: false })
    }
  }, [isDisabled, field.resetOnDisable, field.id, form])

  // Check if field should be visible based on renderIf condition
  const isVisible = !field.renderIf || evaluateRenderIf(field.renderIf, values)

  // For checkbox and custom fields, label is handled internally
  const showLabel = field.type !== "checkbox" && field.type !== "custom"

  // Determine if field is required based on validation schema
  const isRequired = field.validation && isFieldRequired(field.validation)

  // Generate anchor ID for the field
  const anchorId = generateAnchorId(formName, sectionId, field.id)

  // When field is hidden based on renderIf, we still need to keep the Controller
  // mounted to preserve the field value. We render an empty hidden span.
  if (!isVisible) {
    return (
      <FormFieldPrimitive
        control={form.control}
        name={field.id}
        render={() => <span className="hidden" aria-hidden="true" />}
      />
    )
  }

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
              {isRequired && (
                <span className="ml-0.5 text-f1-foreground-critical">*</span>
              )}
            </label>
          )}
          <FormControl>
            {renderFieldInput({
              field,
              formField,
              fieldState,
              isSubmitting,
              isRequired,
              values,
            })}
          </FormControl>
          {field.helpText && (
            <FormDescription>{field.helpText}</FormDescription>
          )}
          <FormMessage
            fallback={
              isRequired
                ? forms.validation.required
                : forms.validation.invalidType
            }
          />
        </FormItem>
      )}
    />
  )
}
