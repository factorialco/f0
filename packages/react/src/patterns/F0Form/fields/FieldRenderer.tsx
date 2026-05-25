import { useEffect, useRef } from "react"
import { useFormContext } from "react-hook-form"

import { F0Alert } from "@/components/F0Alert"
import { F0Link } from "@/components/F0Link"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import {
  FormControl,
  FormDescription,
  FormField as FormFieldPrimitive,
  FormItem,
  FormMessage,
} from "@/ui/form"
import { InputMessages } from "@/ui/InputField/components/InputMessages"

import type { RenderCustomFieldSelectConfig } from "../types"
import type { F0Field } from "./types"

import { generateAnchorId, useF0FormContext } from "../context"
import { renderFieldInput } from "./renderFieldInput"
import { isFieldRequired } from "./schema"
import { evaluateDisabled, evaluateRenderIf } from "./utils"

function isSelectConfig(
  result: unknown
): result is RenderCustomFieldSelectConfig {
  return (
    result != null &&
    typeof result === "object" &&
    "_type" in result &&
    (result as Record<string, unknown>)._type === "select-config"
  )
}

/**
 * Resolves the field input content, handling customFieldName dispatch for non-custom fields.
 * If the field has a customFieldName and type !== "custom", calls renderCustomField:
 * - If it returns a select config object, merges it into the field and delegates to renderFieldInput
 * - If it returns a ReactNode, renders it directly
 */
function renderFieldContent({
  field,
  formField,
  fieldState,
  isSubmitting,
  isRequired,
  values,
  isFormLoading,
  renderCustomField,
}: {
  field: F0Field
  formField: import("react-hook-form").ControllerRenderProps<
    import("react-hook-form").FieldValues
  >
  fieldState: import("./renderFieldInput").FieldState
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
  isFormLoading?: boolean
  renderCustomField?: import("../types").RenderCustomFieldFunction
}): React.ReactNode {
  // For non-custom fields with customFieldName, call renderCustomField to get config or component
  if (field.customFieldName && field.type !== "custom") {
    if (!renderCustomField) {
      throw new Error(
        `Field "${field.id}" has customFieldName "${field.customFieldName}" but no renderCustomField prop was provided to F0Form.`
      )
    }

    const result = renderCustomField({
      id: field.id,
      label: field.label,
      placeholder: field.placeholder,
      value: formField.value,
      onChange: formField.onChange,
      onBlur: formField.onBlur,
      error: undefined,
      isValidating: fieldState.isValidating,
      disabled:
        typeof field.disabled === "boolean" ? field.disabled : undefined,
      required: isRequired,
      customFieldName: field.customFieldName,
      config: undefined,
      fieldType: field.type,
    })

    // If result is a select config object, merge into the field and render as a select
    if (isSelectConfig(result)) {
      const mergedField = { ...field, ...result, type: "select" } as F0Field
      return renderFieldInput({
        field: mergedField,
        formField,
        fieldState,
        fieldStatus: field.status,
        isSubmitting,
        isRequired,
        values,
        isFormLoading,
      })
    }

    // Otherwise treat as ReactNode
    return <>{result}</>
  }

  // Default: delegate to renderFieldInput
  return renderFieldInput({
    field,
    formField,
    fieldState,
    fieldStatus: field.status,
    isSubmitting,
    isRequired,
    values,
    isFormLoading,
  })
}

interface FieldRendererProps {
  field: F0Field
  /** Section ID when field is inside a section (for anchor links) */
  sectionId?: string
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
  const {
    formName,
    isLoading: isFormLoading,
    renderCustomField,
  } = useF0FormContext()
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
  const showLabel =
    field.type !== "checkbox" &&
    field.type !== "custom" &&
    !(field.type === "cardSelect" && field.hideLabel)
  const showFormMessage = field.type !== "custom"

  // Determine if field is required based on validation schema and field type
  const isRequired =
    field.validation && isFieldRequired(field.validation, field.type)

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
            {renderFieldContent({
              field,
              formField,
              fieldState,
              isSubmitting,
              isRequired,
              values,
              isFormLoading,
              renderCustomField,
            })}
          </FormControl>
          {field.helpText && (
            <FormDescription>{field.helpText}</FormDescription>
          )}
          {"moreInfoLink" in field && field.moreInfoLink && (
            <F0Link
              href={field.moreInfoLink.href}
              target="_blank"
              variant="link"
            >
              {field.moreInfoLink.label ?? forms.moreInformation}
            </F0Link>
          )}
          {(() => {
            if (!field.alert) return null
            const alertProps =
              typeof field.alert === "function"
                ? field.alert({ fieldValue: formField.value, values })
                : field.alert
            if (!alertProps) return null
            return (
              <F0Alert {...alertProps} variant={alertProps.variant ?? "info"} />
            )
          })()}
          {showFormMessage && !fieldState.error && (
            <InputMessages status={field.status} />
          )}
          {showFormMessage && (
            <FormMessage
              fallback={
                isRequired
                  ? forms.validation.required
                  : forms.validation.invalidType
              }
            />
          )}
        </FormItem>
      )}
    />
  )
}
