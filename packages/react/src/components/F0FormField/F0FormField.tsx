import type { ControllerRenderProps, FieldValues } from "react-hook-form"

import { useId } from "react"

import { F0Icon } from "@/components/F0Icon"
import { AlertCircle } from "@/icons/app"

import type { F0FormFieldProps } from "./types"

import { renderFieldInput } from "../F0Form/fields/FieldRenderer"
import { isFieldRequired } from "../F0Form/fields/schema"

/**
 * Standalone form field component that renders the appropriate F0Form input
 * without requiring a react-hook-form context.
 *
 * Supports all field types that F0Form supports: text, number, textarea,
 * select, checkbox, switch, date, time, datetime, daterange, richtext, and custom.
 *
 * Note: "file" fields are not supported in standalone mode because they
 * require F0Form context for initial file metadata.
 */
export function F0FormField({
  field,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  loading,
  required,
  disabled,
  hideLabel: hideLabelProp,
}: F0FormFieldProps) {
  const id = useId()

  const isRequired =
    required ?? (field.validation ? isFieldRequired(field.validation) : false)

  const showLabel =
    !hideLabelProp && field.type !== "checkbox" && field.type !== "custom"

  // Bridge standalone props to the shape that renderFieldInput expects
  const formField = {
    value,
    onChange,
    onBlur: onBlur ?? (() => {}),
    name: field.id,
    ref: () => {},
  } as ControllerRenderProps<FieldValues>

  const fieldState = {
    error: error ? { type: "custom", message: errorMessage } : undefined,
    isValidating: !!loading,
  }

  const resolvedField = disabled !== undefined ? { ...field, disabled } : field

  return (
    <div className="space-y-2" id={id}>
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
      {renderFieldInput({
        field: resolvedField,
        formField,
        fieldState,
        isSubmitting: false,
        isRequired,
        values: {},
      })}
      {field.helpText && (
        <p className="text-base text-f1-foreground-secondary">
          {field.helpText}
        </p>
      )}
      {error && errorMessage && (
        <div className="flex gap-1">
          <F0Icon icon={AlertCircle} color="critical" />
          <span className="text-base font-medium text-f1-foreground-critical">
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  )
}

F0FormField.displayName = "F0FormField"
