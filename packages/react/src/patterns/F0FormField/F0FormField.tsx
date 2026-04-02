import type { ControllerRenderProps, FieldValues } from "react-hook-form"

import { useId } from "react"

import { InputMessages } from "@/ui/InputField/components/InputMessages"

import type { F0FormFieldProps } from "./types"

import { renderFieldInput } from "@/patterns/F0Form/fields/renderFieldInput"
import { isFieldRequired } from "@/patterns/F0Form/fields/schema"

/**
 * Standalone form field component that renders the appropriate F0Form input
 * without requiring a react-hook-form context.
 *
 * Supports all field types that F0Form supports: text, number, textarea,
 * duration, select, checkbox, switch, date, time, datetime, daterange, richtext, custom,
 * and file.
 */
export function F0FormField({
  field,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  status,
  loading,
  required,
  disabled,
  hideLabel: hideLabelProp,
  initialFiles,
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
    error:
      error || status?.type === "error"
        ? {
            type: "custom",
            message: errorMessage ?? status?.message,
          }
        : undefined,
    isValidating: !!loading,
  }

  const resolvedStatus = error
    ? { type: "error" as const, message: errorMessage }
    : status

  const resolvedField = disabled !== undefined ? { ...field, disabled } : field
  const fileInitialFiles = field.type === "file" ? initialFiles : undefined

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
        initialFiles: fileInitialFiles,
        fieldStatus: resolvedStatus,
      })}
      {field.helpText && (
        <p className="text-base text-f1-foreground-secondary">
          {field.helpText}
        </p>
      )}
      <InputMessages status={resolvedStatus} />
    </div>
  )
}

F0FormField.displayName = "F0FormField"
