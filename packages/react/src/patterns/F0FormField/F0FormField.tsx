import { useId } from "react"
import type { ControllerRenderProps } from "react-hook-form"
import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { InlineFieldRow } from "@/patterns/F0Form/fields/inline/InlineFieldRow"
import { resolveInlineConfig } from "@/patterns/F0Form/fields/inline/types"
import {
  renderFieldInput,
  type RenderFieldInputOptions,
} from "@/patterns/F0Form/fields/renderFieldInput"
import { isFieldRequired } from "@/patterns/F0Form/fields/schema"
import type { F0FormFieldProps } from "./types"

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
  } as ControllerRenderProps

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

  const renderInput = (extra?: Partial<RenderFieldInputOptions>) =>
    renderFieldInput({
      field: resolvedField,
      formField,
      fieldState,
      isSubmitting: false,
      isRequired,
      values: {},
      initialFiles: fileInitialFiles,
      fieldStatus: resolvedStatus,
      ...extra,
    })

  const inline = resolveInlineConfig(field.inline)

  return (
    <div className="space-y-2" id={id}>
      {showLabel ? (
        /* No `htmlFor`: it used to be `field.id`, which matches no element in
           the DOM — the rendered input gets its own id from `F0InputField`
           (`props.id ?? useId()`), and no field renderer threads one down. A
           `for` that resolves to nothing is a worse lie than no `for` at all.
           The control is still named: `F0InputField` sets `aria-label` from the
           same `label`. Same call `FieldRenderer` already made. */
        <label className="text-base font-medium leading-normal text-f1-foreground-secondary">
          {field.label}
          {isRequired ? (
            <span className="ml-0.5 text-f1-foreground-critical">*</span>
          ) : null}
        </label>
      ) : null}
      {inline ? (
        <InlineFieldRow
          field={resolvedField}
          config={inline}
          value={value}
          hasError={!!fieldState.error}
          renderEditor={renderInput}
        />
      ) : (
        renderInput()
      )}
      {field.helpText ? (
        <p className="text-base text-f1-foreground-secondary">
          {field.helpText}
        </p>
      ) : null}
      <InputMessages status={resolvedStatus} />
    </div>
  )
}

F0FormField.displayName = "F0FormField"
