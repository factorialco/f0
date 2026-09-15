import { ControllerRenderProps, FieldError } from "react-hook-form"
import type { InputFieldStatus } from "@/components/F0InputField/types"
import { CardSelectFieldRenderer } from "./cardSelect/CardSelectFieldRenderer"
import { CheckboxFieldRenderer } from "./checkbox/CheckboxFieldRenderer"
import { CustomFieldRenderer } from "./custom/CustomFieldRenderer"
import { DateFieldRenderer } from "./date/DateFieldRenderer"
import { DateTimeFieldRenderer } from "./date/DateTimeFieldRenderer"
import { TimeFieldRenderer } from "./date/TimeFieldRenderer"
import { DateRangeFieldRenderer } from "./daterange/DateRangeFieldRenderer"
import { DurationFieldRenderer } from "./duration/DurationFieldRenderer"
import { EntitiesListFieldRenderer } from "./entitiesList/EntitiesListFieldRenderer"
import { FileFieldRenderer } from "./file/FileFieldRenderer"
import type { InitialFile } from "./file/types"
import { NumberFieldRenderer } from "./number/NumberFieldRenderer"
import { PeriodFieldRenderer } from "./period/PeriodFieldRenderer"
import { PhoneFieldRenderer } from "./phone/PhoneFieldRenderer"
import { RichTextFieldRenderer } from "./richtext/RichTextFieldRenderer"
import { SelectFieldRenderer } from "./select/SelectFieldRenderer"
import { SwitchFieldRenderer } from "./switch/SwitchFieldRenderer"
import { TextFieldRenderer } from "./text/TextFieldRenderer"
import { TextareaFieldRenderer } from "./textarea/TextareaFieldRenderer"
import type { F0Field } from "./types"
import { evaluateDateConstraint, evaluateDisabled } from "./utils"

export interface FieldState {
  error?: FieldError
  isValidating: boolean
}

export interface RenderFieldInputOptions {
  field: F0Field
  formField: ControllerRenderProps
  fieldState: FieldState
  fieldStatus?: InputFieldStatus
  isSubmitting: boolean
  isRequired?: boolean
  values: Record<string, unknown>
  initialFiles?: InitialFile[]
  /** Whether the form is loading async defaultValues */
  isFormLoading?: boolean
  /**
   * Inline detail-row plumbing. The row swaps the editor in when someone
   * activates it, so the editor has to arrive ready to use: focused, and for
   * the types whose editor is a popup, already open. `onOpenChange` is how the
   * row learns the popup closed and the value is text again.
   *
   * Only the types an inline row supports forward these — text and number take
   * `autoFocus`; date and select take `open`/`onOpenChange`.
   */
  autoFocus?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /**
   * The editor is standing in for a detail row, so it drops the chrome the row
   * does not have: a select uses its own borderless `inline` trigger, and a
   * date reads in the numeric format the row printed, so the text does not
   * change shape the moment someone clicks it.
   */
  inline?: boolean
  /**
   * Forces the control off regardless of the field's own `disabled`. A detail
   * row uses it for a toggle nobody may change: a toggle has no read-as-text
   * state to fall back on, so read-only has to be the control itself.
   */
  disabled?: boolean
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
  autoFocus,
  open,
  onOpenChange,
  inline,
  disabled,
}: RenderFieldInputOptions): React.ReactNode {
  const hasError = !!fieldState.error
  const { isValidating } = fieldState

  // Evaluate disabled (can be boolean or function) and combine with submitting/loading state
  const isDisabled =
    evaluateDisabled(field.disabled, values) ||
    isSubmitting ||
    !!isFormLoading ||
    !!disabled

  const errorAndLoadingProps = {
    error: hasError,
    loading: !!isFormLoading,
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
          autoFocus={autoFocus}
        />
      )
    case "number":
      return (
        <NumberFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          {...errorAndLoadingProps}
          status={visualStatus}
          autoFocus={autoFocus}
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
          open={open}
          onOpenChange={onOpenChange}
          inline={inline}
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
          open={open}
          onOpenChange={onOpenChange}
          inline={inline}
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
    case "period":
      return (
        <PeriodFieldRenderer
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
    case "phone":
      return (
        <PhoneFieldRenderer
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
    case "cardSelect":
      return (
        <CardSelectFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
        />
      )
    case "entitiesList":
      return (
        <EntitiesListFieldRenderer
          field={{ ...field, disabled: isDisabled }}
          formField={formField}
          error={fieldState.error}
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
