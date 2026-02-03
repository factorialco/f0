import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo } from "react"
import { DefaultValues, Path, useForm } from "react-hook-form"
import { z, ZodRawShape } from "zod"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { F0ActionBar } from "@/experimental/F0ActionBar"
import { AlertCircle, ChevronDown, ChevronUp, Delete, Save } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import { RowRenderer } from "./components/RowRenderer"
import { SectionRenderer } from "./components/SectionRenderer"
import { SwitchGroupRenderer } from "./components/SwitchGroupRenderer"
import { FIELD_GAP, SECTION_MARGIN } from "./constants"
import { F0FormContext } from "./context"
import { FieldRenderer } from "./fields/FieldRenderer"
import type { F0SwitchField } from "./fields/switch/types"
import type {
  F0FormProps,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  SectionDefinition,
} from "./types"
import { useErrorNavigation } from "./useErrorNavigation"
import { useSchemaDefinition } from "./useSchemaDefinition"
import { createZodErrorMap } from "./zodErrorMap"

type GroupedItem =
  | { type: "field"; item: FieldItem }
  | { type: "row"; item: RowDefinition; index: number }
  | { type: "section"; item: SectionDefinition }
  | { type: "switchGroup"; fields: F0SwitchField[] }

/**
 * Groups contiguous switch fields together for rendering in a bordered container
 */
function groupContiguousSwitches(
  definition: FormDefinitionItem[]
): GroupedItem[] {
  const result: GroupedItem[] = []
  let currentSwitchGroup: F0SwitchField[] = []

  const flushSwitchGroup = () => {
    if (currentSwitchGroup.length > 0) {
      result.push({ type: "switchGroup", fields: [...currentSwitchGroup] })
      currentSwitchGroup = []
    }
  }

  definition.forEach((item, index) => {
    if (item.type === "field" && item.field.type === "switch") {
      currentSwitchGroup.push(item.field as F0SwitchField)
    } else {
      flushSwitchGroup()
      if (item.type === "field") {
        result.push({ type: "field", item })
      } else if (item.type === "row") {
        result.push({ type: "row", item, index })
      } else if (item.type === "section") {
        result.push({ type: "section", item })
      }
    }
  })

  flushSwitchGroup()
  return result
}

/**
 * F0Form - A declarative form component that generates forms from a Zod schema.
 *
 * Features:
 * - Schema-based form definition with embedded field metadata
 * - Automatic Zod schema validation
 * - Conditional rendering support (renderIf)
 * - Integration with react-hook-form
 * - Section and row grouping support
 *
 * @example
 * ```tsx
 * import { z } from "zod"
 * import { f0FormField, F0Form } from "@factorialco/factorial-one/experimental"
 *
 * const formSchema = z.object({
 *   firstName: f0FormField(z.string().min(1), {
 *     label: "First Name",
 *     section: "personal",
 *     placeholder: "Enter first name"
 *   }),
 *   lastName: f0FormField(z.string().min(1), {
 *     label: "Last Name",
 *     section: "personal",
 *     row: "name-row" // Group with firstName horizontally
 *   }),
 *   email: f0FormField(z.string().email(), {
 *     label: "Email",
 *     section: "contact",
 *     inputType: "email"
 *   })
 * })
 *
 * <F0Form
 *   name="user-profile"
 *   schema={formSchema}
 *   sections={{
 *     personal: { title: "Personal Information", order: 1 },
 *     contact: { title: "Contact Details", order: 2 }
 *   }}
 *   defaultValues={{ firstName: "", lastName: "", email: "" }}
 *   onSubmit={async (data) => {
 *     console.log(data)
 *     return { success: true }
 *   }}
 * />
 * ```
 */
// Map errorTriggerMode to react-hook-form mode
const ERROR_TRIGGER_MODE_MAP = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit",
} as const

export function F0Form<TSchema extends z.ZodObject<ZodRawShape>>(
  props: F0FormProps<TSchema>
) {
  const i18n = useI18n()
  const { forms } = i18n

  const {
    name,
    schema,
    sections,
    defaultValues,
    onSubmit,
    submitConfig,
    className,
    errorTriggerMode = "on-blur",
  } = props

  // Resolve submit button configuration with defaults
  // icon: undefined = use default, null = no icon, IconType = custom icon
  const submitLabel = submitConfig?.label ?? "Submit"
  const submitIcon =
    submitConfig?.icon === null ? undefined : (submitConfig?.icon ?? Save)

  // Extract submit type specific props
  const submitType = props.submitType ?? "default"
  const showSubmitButton =
    submitType === "default"
      ? ((props as { showSubmitButton?: boolean }).showSubmitButton ?? true)
      : false
  const discardableChanges =
    submitType === "action-bar"
      ? ((props as { discardableChanges?: boolean }).discardableChanges ??
        false)
      : false

  // Resolve discard button configuration with defaults
  // icon: undefined = use default, null = no icon, IconType = custom icon
  const discardConfig =
    submitType === "action-bar"
      ? (
          props as {
            discardConfig?: { label?: string; icon?: typeof Delete | null }
          }
        ).discardConfig
      : undefined
  const discardLabel = discardConfig?.label ?? forms.actionBar.discard
  const discardIcon =
    discardConfig?.icon === null ? undefined : (discardConfig?.icon ?? Delete)

  const actionBarLabel =
    submitType === "action-bar"
      ? ((props as { actionBarLabel?: string }).actionBarLabel ??
        forms.actionBar.unsavedChanges)
      : forms.actionBar.unsavedChanges

  // Infer the form values type from the schema
  type TValues = z.infer<TSchema>

  // Convert schema to internal definition structure for rendering
  const definition = useSchemaDefinition(schema, sections)

  // Create custom error map for localized validation messages
  const errorMap = useMemo(() => createZodErrorMap(i18n), [i18n])

  // Map our errorTriggerMode to react-hook-form's mode
  const formMode = ERROR_TRIGGER_MODE_MAP[errorTriggerMode]

  // Initialize form with react-hook-form
  const form = useForm<TValues>({
    resolver: zodResolver(schema, { errorMap }),
    mode: formMode,
    defaultValues: defaultValues as DefaultValues<TValues>,
  })

  const rootError = form.formState.errors.root
  const { isDirty, isSubmitting, errors } = form.formState

  // Error navigation and auto-focus
  const {
    hasErrors,
    errorCount,
    goToPreviousError,
    goToNextError,
    resetErrorNavigation,
  } = useErrorNavigation({
    formName: name,
    errors,
  })

  // Handle form submission
  const handleSubmit = async (data: TValues) => {
    const result = await onSubmit(data)

    if (!result.success) {
      // Set field-specific errors
      if (result.errors) {
        Object.entries(result.errors).forEach(([field, message]) => {
          form.setError(field as Path<TValues>, { message })
        })
      }

      // Set root error if provided
      if (result.rootMessage) {
        form.setError("root", { message: result.rootMessage })
      }
    }
  }

  // Handle discard action
  const handleDiscard = () => {
    form.reset()
    resetErrorNavigation()
  }

  // Group contiguous switch fields
  const groupedItems = groupContiguousSwitches(definition)

  // Context value for anchor links
  const contextValue = useMemo(() => ({ formName: name }), [name])

  return (
    <F0FormContext.Provider value={contextValue}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={cn(`flex flex-col ${FIELD_GAP} max-w-[600px]`, className)}
        >
          {/* Render definition items with switch grouping */}
          {groupedItems.map((groupedItem, index) => {
            switch (groupedItem.type) {
              case "switchGroup":
                return (
                  <SwitchGroupRenderer
                    key={`switch-group-${index}`}
                    fields={groupedItem.fields}
                  />
                )
              case "field":
                return (
                  <FieldRenderer
                    key={groupedItem.item.field.id}
                    field={groupedItem.item.field}
                  />
                )
              case "row":
                return (
                  <RowRenderer
                    key={`row-${groupedItem.index}`}
                    row={groupedItem.item}
                  />
                )
              case "section":
                return (
                  <div
                    key={groupedItem.item.id}
                    className={index !== 0 ? SECTION_MARGIN : ""}
                  >
                    <SectionRenderer section={groupedItem.item} />
                  </div>
                )
              default:
                return null
            }
          })}

          {/* Root error message */}
          {rootError && (
            <p className="text-base font-medium text-f1-foreground-critical">
              {rootError.message}
            </p>
          )}

          {/* Default submit button */}
          {submitType === "default" && showSubmitButton && (
            <F0Button
              type="submit"
              label={submitLabel}
              icon={submitIcon}
              loading={isSubmitting}
              disabled={hasErrors}
            />
          )}
        </form>

        {/* Action bar submit - rendered outside form to prevent accidental form submission */}
        {submitType === "action-bar" && (
          <F0ActionBar
            isOpen={isDirty}
            variant="light"
            label={!hasErrors ? actionBarLabel : undefined}
            leftContent={
              hasErrors ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    <F0Icon icon={AlertCircle} size="md" color="critical" />
                    <span className="font-medium text-f1-foreground-critical">
                      {errorCount === 1
                        ? forms.actionBar.issues.one.replace(
                            "{{count}}",
                            String(errorCount)
                          )
                        : forms.actionBar.issues.other.replace(
                            "{{count}}",
                            String(errorCount)
                          )}
                    </span>
                  </div>
                  {errorCount > 1 && (
                    <div className="flex items-center gap-2">
                      <F0Button
                        icon={ChevronUp}
                        onClick={goToPreviousError}
                        variant="outline"
                        label="Go to previous error"
                        hideLabel
                      />
                      <F0Button
                        icon={ChevronDown}
                        onClick={goToNextError}
                        variant="outline"
                        label="Go to next error"
                        hideLabel
                      />
                    </div>
                  )}
                </div>
              ) : undefined
            }
            primaryActions={[
              {
                label: submitLabel,
                icon: submitIcon,
                onClick: form.handleSubmit(handleSubmit),
                disabled: hasErrors,
              },
            ]}
            secondaryActions={
              discardableChanges
                ? [
                    {
                      label: discardLabel,
                      icon: discardIcon,
                      onClick: handleDiscard,
                    },
                  ]
                : []
            }
          />
        )}
      </FormProvider>
    </F0FormContext.Provider>
  )
}
