import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { DefaultValues, Path, useForm } from "react-hook-form"
import { z, ZodRawShape } from "zod"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { F0ActionBar } from "@/experimental/F0ActionBar"
import { F0TableOfContent } from "@/experimental/Navigation/F0TableOfContent"
import { TOCItem } from "@/experimental/Navigation/F0TableOfContent/types"
import { AlertCircle, ChevronDown, ChevronUp, Delete, Save } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import { RowRenderer } from "./components/RowRenderer"
import { SectionRenderer } from "./components/SectionRenderer"
import { SwitchGroupRenderer } from "./components/SwitchGroupRenderer"
import { createConditionalResolver } from "./conditionalResolver"
import { FORM_MAX_WIDTH, SECTION_MARGIN } from "./constants"
import { F0FormContext, generateAnchorId } from "./context"
import { FieldRenderer } from "./fields/FieldRenderer"
import type { F0SwitchField } from "./fields/switch/types"
import type {
  F0FormProps,
  F0FormRef,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  SectionDefinition,
} from "./types"
import type { F0FormStateCallback } from "./useF0Form"
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
 *     section: "contact"
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
    styling,
    formRef,
  } = props

  // Resolve styling configuration
  const showSectionsSidepanel = styling?.showSectionsSidepanel ?? false

  // Resolve submit type from config
  const isActionBar = submitConfig?.type === "action-bar"

  // Resolve submit button configuration with defaults
  // icon: undefined = use default, null = no icon, IconType = custom icon
  const submitLabel = submitConfig?.label ?? "Submit"
  const submitIcon =
    submitConfig?.icon === null ? undefined : (submitConfig?.icon ?? Save)

  // Extract type-specific props
  // Show submit button by default unless explicitly hidden or using action-bar
  const hideSubmitButton =
    submitConfig?.type !== "action-bar" && submitConfig?.hideSubmitButton
  const showSubmitButton = !isActionBar && !hideSubmitButton
  const discardableChanges =
    submitConfig?.type === "action-bar" && submitConfig?.discardable

  // Resolve discard button configuration with defaults
  // icon: undefined = use default, null = no icon, IconType = custom icon
  const discardConfig = isActionBar
    ? (
        submitConfig as
          | { discardConfig?: { label?: string; icon?: typeof Delete | null } }
          | undefined
      )?.discardConfig
    : undefined
  const discardLabel = discardConfig?.label ?? forms.actionBar.discard
  const discardIcon =
    discardConfig?.icon === null ? undefined : (discardConfig?.icon ?? Delete)

  const actionBarLabel = isActionBar
    ? (submitConfig?.actionBarLabel ?? forms.actionBar.unsavedChanges)
    : forms.actionBar.unsavedChanges

  const centerActionBarInFrameContent =
    isActionBar && !!submitConfig?.centerActionBarInFrameContent

  // Infer the form values type from the schema
  type TValues = z.infer<TSchema>

  // Convert schema to internal definition structure for rendering
  const definition = useSchemaDefinition(schema, sections)

  // Extract section IDs from the definition for TOC
  const sectionIds = useMemo(() => {
    return definition
      .filter((item): item is SectionDefinition => item.type === "section")
      .map((section) => section.id)
  }, [definition])

  // Track active section (the last clicked section)
  const [activeSection, setActiveSection] = useState<string | undefined>(
    sectionIds[0]
  )

  // Scroll to section when TOC item is clicked and mark it as active
  const handleSectionClick = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId)
      const anchorId = generateAnchorId(name, sectionId)
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    [name]
  )

  // Convert sections to TOCItems for the TableOfContent component
  const tocItems: TOCItem[] = useMemo(() => {
    if (!sections || !showSectionsSidepanel) return []

    return sectionIds.map((sectionId) => ({
      id: sectionId,
      label: sections[sectionId]?.title ?? sectionId,
      onClick: () => handleSectionClick(sectionId),
    }))
  }, [sections, sectionIds, showSectionsSidepanel, handleSectionClick])

  // Create custom error map for localized validation messages
  const errorMap = useMemo(() => createZodErrorMap(i18n), [i18n])

  // Map our errorTriggerMode to react-hook-form's mode
  const formMode = ERROR_TRIGGER_MODE_MAP[errorTriggerMode]

  // Create conditional resolver that skips validation for hidden fields
  const conditionalResolver = useMemo(
    () => createConditionalResolver(schema, { errorMap }),
    [schema, errorMap]
  )

  // Initialize form with react-hook-form
  const form = useForm<TValues>({
    resolver: conditionalResolver,
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

  // Store state callback from useF0Form hook
  const stateCallbackRef = useRef<F0FormStateCallback | null>(null)

  // Expose form methods via ref for external control
  useEffect(() => {
    if (formRef) {
      const refMethods: F0FormRef = {
        submit: () => {
          return new Promise<void>((resolve, reject) => {
            form.handleSubmit(
              async (data) => {
                await handleSubmit(data)
                resolve()
              },
              () => {
                // Validation failed - reject to signal the caller
                reject(new Error("Form validation failed"))
              }
            )()
          })
        },
        reset: () => {
          form.reset()
          resetErrorNavigation()
        },
        isDirty: () => form.formState.isDirty,
        _setStateCallback: (callback: F0FormStateCallback) => {
          stateCallbackRef.current = callback
        },
      }
      formRef.current = refMethods
    }

    return () => {
      if (formRef) {
        formRef.current = null
      }
    }
  }, [formRef, form, resetErrorNavigation])

  // Notify useF0Form hook of state changes
  useEffect(() => {
    if (stateCallbackRef.current) {
      stateCallbackRef.current({
        isSubmitting,
        hasErrors,
      })
    }
  }, [isSubmitting, hasErrors])

  // Group contiguous switch fields
  const groupedItems = groupContiguousSwitches(definition)

  // Context value for anchor links
  const contextValue = useMemo(() => ({ formName: name }), [name])

  // Form content component to avoid repetition
  const formContent = (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className={cn("flex flex-col", FORM_MAX_WIDTH, className)}
    >
      {/* Render definition items with switch grouping */}
      {groupedItems.map((groupedItem, index) => {
        // Apply field gap margin to non-section items (sections have their own margin)
        const fieldGapClass =
          index !== 0 && groupedItem.type !== "section" ? "mt-4" : ""

        switch (groupedItem.type) {
          case "switchGroup":
            return (
              <div key={`switch-group-${index}`} className={fieldGapClass}>
                <SwitchGroupRenderer fields={groupedItem.fields} />
              </div>
            )
          case "field":
            return (
              <div key={groupedItem.item.field.id} className={fieldGapClass}>
                <FieldRenderer field={groupedItem.item.field} />
              </div>
            )
          case "row":
            return (
              <div key={`row-${groupedItem.index}`} className={fieldGapClass}>
                <RowRenderer row={groupedItem.item} />
              </div>
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
        <p className="mt-4 text-base font-medium text-f1-foreground-critical">
          {rootError.message}
        </p>
      )}

      {/* Default submit button */}
      {!isActionBar && showSubmitButton && (
        <div className="mt-4">
          <F0Button
            type="submit"
            label={submitLabel}
            icon={submitIcon}
            loading={isSubmitting}
            disabled={hasErrors}
          />
        </div>
      )}
    </form>
  )

  return (
    <F0FormContext.Provider value={contextValue}>
      <FormProvider {...form}>
        {showSectionsSidepanel && tocItems.length > 0 ? (
          <div className="flex w-full gap-4">
            {/* Sections sidebar */}
            <div className="shrink-0 sticky top-4 h-fit self-start pt-3">
              <F0TableOfContent
                items={tocItems}
                activeItem={activeSection}
                scrollable={false}
              />
            </div>

            {/* Separator */}
            <div className="w-px bg-f1-border-secondary" />

            {/* Form content - centered in available space */}
            <div className="flex flex-1 justify-center">{formContent}</div>
          </div>
        ) : (
          formContent
        )}

        {/* Action bar submit - rendered outside form to prevent accidental form submission */}
        {isActionBar && (
          <F0ActionBar
            isOpen={isDirty}
            variant="light"
            centerInFrameContent={centerActionBarInFrameContent}
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
