import { ControllerRenderProps, FieldError, FieldValues } from "react-hook-form"

import type { InputFieldStatus } from "@/ui/InputField/types"

import type { InitialFile } from "./file/types"
import type { F0Field } from "./types"

import { CheckboxFieldRenderer } from "./checkbox/CheckboxFieldRenderer"
import { CustomFieldRenderer } from "./custom/CustomFieldRenderer"
import { DateFieldRenderer } from "./date/DateFieldRenderer"
import { DateTimeFieldRenderer } from "./date/DateTimeFieldRenderer"
import { TimeFieldRenderer } from "./date/TimeFieldRenderer"
import { DateRangeFieldRenderer } from "./daterange/DateRangeFieldRenderer"
import { DurationFieldRenderer } from "./duration/DurationFieldRenderer"
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
  fieldStatus?: InputFieldStatus
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
  initialFiles?: InitialFile[]
  /** Whether the form is loading async defaultValues */
  isFormLoading?: boolean
}

/**
 * Renders the appropriate input component based on field type.
 */
export function renderFieldInput({
  field,
  formField,
  fieldState,
  fieldStatus,
  isSubmitting,
  isRequired,
  values,
  initialFiles,
  isFormLoading,
}: RenderFieldInputOptions): React.ReactNode {
  const hasError = !!fieldState.error
  const { isValidating } = fieldState

  // Evaluate disabled (can be boolean or function) and combine with submitting/loading state
  const isDisabled =
    evaluateDisabled(field.disabled, values) || isSubmitting || !!isFormLoading

  const errorAndLoadingProps = {
    error: hasError,
    loading: isValidating || !!isFormLoading,
  }

  const visualStatus = hasError
    ? ({ type: "error" } as const)
    : fieldStatus
      ? ({ type: fieldStatus.type } as const)
      : undefined

  switch (field.type) {
    case "text":
      return (
        <TextFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
          status={visualStatus}
        />
      )
    case "number":
      return (
        <NumberFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
          status={visualStatus}
        />
      )
    case "duration":
      return (
        <DurationFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          error={hasError}
          status={visualStatus}
        />
      )
    case "textarea":
      return (
        <TextareaFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
          status={visualStatus}
        />
      )
    case "select":
      return (
        <SelectFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
          status={visualStatus}
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
          status={visualStatus}
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
          status={visualStatus}
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
          status={visualStatus}
        />
      )
    case "daterange":
      return (
        <DateRangeFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
          status={visualStatus}
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
          statusType={visualStatus?.type}
          initialFiles={initialFiles}
        />
      )
    case "custom":
      return (
        <CustomFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          error={fieldState.error?.message}
          isValidating={isValidating}
          required={isRequired}
        />
      )
    default:
      return null
  }
}
