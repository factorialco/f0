import { ControllerRenderProps, FieldError, FieldValues } from "react-hook-form"

import type { F0Field } from "./types"

import { CheckboxFieldRenderer } from "./checkbox/CheckboxFieldRenderer"
import { CustomFieldRenderer } from "./custom/CustomFieldRenderer"
import { DateFieldRenderer } from "./date/DateFieldRenderer"
import { DateTimeFieldRenderer } from "./date/DateTimeFieldRenderer"
import { TimeFieldRenderer } from "./date/TimeFieldRenderer"
import { DateRangeFieldRenderer } from "./daterange/DateRangeFieldRenderer"
import { FileFieldRenderer } from "./file/FileFieldRenderer"
import { NumberFieldRenderer } from "./number/NumberFieldRenderer"
import { RichTextFieldRenderer } from "./richtext/RichTextFieldRenderer"
import { SelectFieldRenderer } from "./select/SelectFieldRenderer"
import { SwitchFieldRenderer } from "./switch/SwitchFieldRenderer"
import { TextFieldRenderer } from "./text/TextFieldRenderer"
import { TextareaFieldRenderer } from "./textarea/TextareaFieldRenderer"
import { evaluateDateConstraint, evaluateDisabled } from "./utils"

export interface FieldState {
  error?: FieldError
  isValidating: boolean
}

export interface RenderFieldInputOptions {
  field: F0Field
  formField: ControllerRenderProps<FieldValues>
  fieldState: FieldState
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
}

/**
 * Renders the appropriate input component based on field type.
 */
export function renderFieldInput({
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
          {...errorAndLoadingProps}
        />
      )
    case "file":
      return (
        <FileFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          error={hasError}
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
