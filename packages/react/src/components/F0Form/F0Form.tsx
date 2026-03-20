import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { DefaultValues, Path, useForm } from "react-hook-form"
import { z } from "zod"

import type {
  F0FormDefinitionPerSection,
  F0FormDefinitionSingleSchema,
  F0PerSectionSchema as WizardPerSectionSchema,
  F0FormSchema as WizardFormSchema,
  InferPerSectionValues,
} from "@/components/F0WizardForm/types"

import { F0Button } from "@/components/F0Button"
import { ActionBarStatus } from "@/experimental/F0ActionBar"
import { F0TableOfContent } from "@/experimental/Navigation/F0TableOfContent"
import { TOCItem } from "@/experimental/Navigation/F0TableOfContent/types"
import { Delete, Save } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import type { F0SwitchField } from "./fields/switch/types"
import type {
  F0FormPropsWithPerSectionSchema,
  F0FormPropsWithPerSectionDefinition,
  F0FormPropsWithSingleSchema,
  F0FormPropsWithSingleSchemaDefinition,
  F0FormRef,
  F0FormSchema,
  F0FormSubmitResult,
  F0PerSectionSchema,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  SectionDefinition,
} from "./types"
import type { F0FormStateCallback } from "./useF0Form"

import { FormActionBar } from "./components/ActionBar"
import { F0FormSection } from "./components/F0FormSection"
import { RowRenderer } from "./components/RowRenderer"
import { SectionRenderer } from "./components/SectionRenderer"
import { SwitchGroupRenderer } from "./components/SwitchGroupRenderer"
import { createConditionalResolver } from "./conditionalResolver"
import { FORM_MAX_WIDTH, SECTION_MARGIN } from "./constants"
import { F0FormContext, generateAnchorId } from "./context"
import { useF0AiFormRegistry } from "./F0AiFormRegistry"
import { FieldRenderer } from "./fields/FieldRenderer"
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
 * Detects whether a value is a Zod schema (ZodObject or ZodEffects)
 * vs. a plain record of schemas (per-section mode).
 */
function isZodSchema(value: unknown): value is F0FormSchema {
  if (typeof value !== "object" || value === null) return false
  const obj = value as Record<string, unknown>
  // Zod schemas have a _def.typeName property that plain objects don't
  const def = obj._def as Record<string, unknown> | undefined
  return def?.typeName === "ZodObject" || def?.typeName === "ZodEffects"
}

// Map errorTriggerMode to react-hook-form mode
const ERROR_TRIGGER_MODE_MAP = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit",
} as const

/**
 * Per-section schema mode renderer.
 * Renders each section as an independent form with its own validation and submit.
 */
function F0FormPerSection<T extends F0PerSectionSchema>(
  props: F0FormPropsWithPerSectionSchema<T>
) {
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
    initialFiles,
    renderCustomField,
    isLoading: isFormLoading,
  } = props

  const showSectionsSidepanel = styling?.showSectionsSidepanel ?? false

  const sectionIds = useMemo(() => Object.keys(schema), [schema])

  const handleSectionClick = useCallback(
    (sectionId: string) => {
      const anchorId = generateAnchorId(name, sectionId)
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    [name]
  )

  const [activeSection, setActiveSection] = useState<string | undefined>(
    sectionIds[0]
  )

  const tocItems: TOCItem[] = useMemo(() => {
    if (!sections || !showSectionsSidepanel) return []

    return sectionIds.map((sectionId) => ({
      id: sectionId,
      label: sections[sectionId]?.title ?? sectionId,
      onClick: () => {
        setActiveSection(sectionId)
        handleSectionClick(sectionId)
      },
    }))
  }, [sections, sectionIds, showSectionsSidepanel, handleSectionClick])

  const content = (
    <div className={cn("flex w-full flex-col", FORM_MAX_WIDTH, className)}>
      {sectionIds.map((sectionId, index) => {
        const sectionSchema = schema[sectionId]
        const sectionConfig = sections?.[sectionId]
        const sectionDefaults =
          defaultValues?.[sectionId as keyof typeof defaultValues]
        const perSectionSubmitConfig =
          sectionConfig?.submitConfig ?? submitConfig

        return (
          <div
            key={sectionId}
            id={generateAnchorId(name, sectionId)}
            className={cn("scroll-mt-4", index !== 0 && SECTION_MARGIN)}
          >
            <F0FormSection
              formName={name}
              sectionId={sectionId}
              schema={sectionSchema}
              sectionConfig={sectionConfig}
              defaultValues={
                sectionDefaults as Partial<z.infer<typeof sectionSchema>>
              }
              onSubmit={(data) => onSubmit(sectionId, data)}
              submitConfig={perSectionSubmitConfig}
              errorTriggerMode={errorTriggerMode}
              initialFiles={initialFiles}
              renderCustomField={renderCustomField}
              isLoading={isFormLoading}
            />
          </div>
        )
      })}
    </div>
  )

  if (showSectionsSidepanel && tocItems.length > 0) {
    return (
      <div className="flex w-full gap-4">
        <div className="sticky top-4 h-fit shrink-0 self-start pt-3">
          <F0TableOfContent
            items={tocItems}
            activeItem={activeSection}
            scrollable={false}
          />
        </div>
        <div className="w-px bg-f1-border-secondary" />
        <div className="flex flex-1 justify-center">{content}</div>
      </div>
    )
  }

  return content
}

/**
 * F0Form - A declarative form component that generates forms from a Zod schema.
 *
 * Supports two modes:
 * 1. **Single schema**: One form with one submit button (existing behavior)
 * 2. **Per-section schema**: A record of schemas keyed by section ID, where each
 *    section has independent validation and its own submit button.
 *
 * @example Single schema
 * ```tsx
 * const schema = z.object({
 *   firstName: f0FormField(z.string().min(1), { label: "First Name", section: "personal" }),
 *   email: f0FormField(z.string().email(), { label: "Email", section: "contact" }),
 * })
 *
 * <F0Form name="user" schema={schema} onSubmit={async (data) => ({ success: true })} />
 * ```
 *
 * @example Per-section schema
 * ```tsx
 * const schema = {
 *   personal: z.object({
 *     firstName: f0FormField(z.string().min(1), { label: "First Name" }),
 *   }),
 *   contact: z.object({
 *     email: f0FormField(z.string().email(), { label: "Email" }),
 *   }),
 * }
 *
 * <F0Form
 *   name="user"
 *   schema={schema}
 *   sections={{ personal: { title: "Personal" }, contact: { title: "Contact" } }}
 *   onSubmit={async (sectionId, data) => ({ success: true })}
 * />
 * ```
 */
type AnyF0FormProps =
  | F0FormPropsWithSingleSchema<F0FormSchema>
  | F0FormPropsWithPerSectionSchema<F0PerSectionSchema>
  | F0FormPropsWithSingleSchemaDefinition<F0FormSchema>
  | F0FormPropsWithPerSectionDefinition<F0PerSectionSchema>

function hasFormDefinition(
  props: AnyF0FormProps
): props is
  | F0FormPropsWithSingleSchemaDefinition<F0FormSchema>
  | F0FormPropsWithPerSectionDefinition<F0PerSectionSchema> {
  return "formDefinition" in props && props.formDefinition != null
}

export function F0Form<TSchema extends F0FormSchema | F0PerSectionSchema>(
  props: TSchema extends F0FormSchema
    ?
        | F0FormPropsWithSingleSchema<TSchema>
        | F0FormPropsWithSingleSchemaDefinition<TSchema>
    : TSchema extends F0PerSectionSchema
      ?
          | F0FormPropsWithPerSectionSchema<TSchema>
          | F0FormPropsWithPerSectionDefinition<TSchema>
      : never
) {
  const castProps = props as unknown as AnyF0FormProps

  if (hasFormDefinition(castProps)) {
    return <F0FormFromDefinition {...castProps} />
  }

  const legacyProps = castProps as
    | F0FormPropsWithSingleSchema<F0FormSchema>
    | F0FormPropsWithPerSectionSchema<F0PerSectionSchema>

  if (!isZodSchema(legacyProps.schema)) {
    return (
      <F0FormPerSection
        {...(legacyProps as F0FormPropsWithPerSectionSchema<F0PerSectionSchema>)}
      />
    )
  }

  return (
    <F0FormSingleSchema
      {...(legacyProps as F0FormPropsWithSingleSchema<F0FormSchema>)}
    />
  )
}

/**
 * Adapts a formDefinition into the legacy props format and delegates
 * to F0FormSingleSchema or F0FormPerSection.
 */
function F0FormFromDefinition(
  props:
    | F0FormPropsWithSingleSchemaDefinition<F0FormSchema>
    | F0FormPropsWithPerSectionDefinition<F0PerSectionSchema>
) {
  const {
    formDefinition,
    className,
    styling,
    formRef,
    initialFiles,
    renderCustomField,
  } = props

  if (formDefinition.isLoading) {
    if (formDefinition._brand === "single") {
      return (
        <F0FormFromSingleDefinition
          formDefinition={
            formDefinition as F0FormDefinitionSingleSchema<WizardFormSchema>
          }
          className={className}
          styling={styling}
          formRef={formRef}
          initialFiles={initialFiles}
          renderCustomField={renderCustomField}
          isLoading
        />
      )
    }
    return (
      <F0FormFromPerSectionDefinition
        formDefinition={
          formDefinition as F0FormDefinitionPerSection<WizardPerSectionSchema>
        }
        className={className}
        styling={styling}
        formRef={formRef}
        initialFiles={initialFiles}
        renderCustomField={renderCustomField}
        isLoading
      />
    )
  }

  if (formDefinition._brand === "single") {
    return (
      <F0FormFromSingleDefinition
        formDefinition={
          formDefinition as F0FormDefinitionSingleSchema<WizardFormSchema>
        }
        className={className}
        styling={styling}
        formRef={formRef}
        initialFiles={initialFiles}
        renderCustomField={renderCustomField}
      />
    )
  }

  return (
    <F0FormFromPerSectionDefinition
      formDefinition={
        formDefinition as F0FormDefinitionPerSection<WizardPerSectionSchema>
      }
      className={className}
      styling={styling}
      formRef={formRef}
      initialFiles={initialFiles}
      renderCustomField={renderCustomField}
    />
  )
}

function F0FormFromSingleDefinition<TSchema extends F0FormSchema>({
  formDefinition,
  className,
  styling,
  formRef,
  initialFiles,
  renderCustomField,
  isLoading,
}: F0FormPropsWithSingleSchemaDefinition<TSchema> & { isLoading?: boolean }) {
  const def = formDefinition as F0FormDefinitionSingleSchema<TSchema>

  const adaptedOnSubmit = useCallback(
    (
      data: z.infer<TSchema>
    ): Promise<F0FormSubmitResult> | F0FormSubmitResult =>
      def.onSubmit({ data }),
    [def]
  )

  return (
    <F0FormSingleSchema
      name={def.name}
      schema={def.schema}
      sections={def.sections}
      defaultValues={def.defaultValues}
      onSubmit={adaptedOnSubmit}
      submitConfig={def.submitConfig}
      errorTriggerMode={def.errorTriggerMode}
      className={className}
      styling={styling}
      formRef={formRef}
      initialFiles={initialFiles}
      renderCustomField={renderCustomField}
      isLoading={isLoading}
      defaultValuesParamsSchema={def.defaultValuesParamsSchema}
      defaultValuesFn={def.defaultValuesFn}
    />
  )
}

function F0FormFromPerSectionDefinition<T extends F0PerSectionSchema>({
  formDefinition,
  className,
  styling,
  formRef,
  initialFiles,
  renderCustomField,
  isLoading,
}: F0FormPropsWithPerSectionDefinition<T> & { isLoading?: boolean }) {
  const def = formDefinition as F0FormDefinitionPerSection<T>

  const fullDataRef = useRef<Record<string, unknown>>(
    def.defaultValues ? { ...def.defaultValues } : {}
  )

  const adaptedOnSubmit = useCallback(
    (
      sectionId: string,
      data: Record<string, unknown>
    ): Promise<F0FormSubmitResult> | F0FormSubmitResult => {
      fullDataRef.current[sectionId] = data
      return (
        def.onSubmit as (arg: {
          sectionId: string
          data: Record<string, unknown>
          fullData: InferPerSectionValues<T>
        }) => Promise<F0FormSubmitResult> | F0FormSubmitResult
      )({
        sectionId,
        data,
        fullData: { ...fullDataRef.current } as InferPerSectionValues<T>,
      })
    },
    [def]
  )

  return (
    <F0FormPerSection
      name={def.name}
      schema={def.schema}
      sections={def.sections}
      defaultValues={def.defaultValues}
      onSubmit={
        adaptedOnSubmit as F0FormPropsWithPerSectionSchema<T>["onSubmit"]
      }
      submitConfig={def.submitConfig}
      errorTriggerMode={def.errorTriggerMode}
      className={className}
      styling={styling}
      formRef={formRef}
      initialFiles={initialFiles}
      renderCustomField={renderCustomField}
      isLoading={isLoading}
    />
  )
}

function F0FormSingleSchema<TSchema extends F0FormSchema>(
  props: F0FormPropsWithSingleSchema<TSchema>
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
    isLoading: isFormLoading,
    defaultValuesParamsSchema,
    defaultValuesFn,
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
  const hideActionBar =
    submitConfig?.type !== "action-bar" && !!submitConfig?.hideActionBar
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

  const actionBarIdleLabel = isActionBar
    ? (submitConfig?.actionBarLabel ?? forms.actionBar.unsavedChanges)
    : forms.actionBar.unsavedChanges

  const actionBarSavingLabel =
    submitConfig?.savingMessage ?? forms.actionBar.saving

  const centerActionBarInFrameContent =
    isActionBar && !!submitConfig?.centerActionBarInFrameContent

  const successMessageDuration = submitConfig?.successMessageDuration

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

  // When async defaultValues finish loading, reset the form with resolved values
  const wasLoadingRef = useRef(isFormLoading)
  useEffect(() => {
    if (wasLoadingRef.current && !isFormLoading && defaultValues) {
      form.reset(defaultValues as DefaultValues<TValues>)
    }
    wasLoadingRef.current = isFormLoading
  }, [isFormLoading, defaultValues, form])

  const rootError = form.formState.errors.root
  const { isDirty, isSubmitting, errors } = form.formState

  const [actionBarStatus, setActionBarStatus] =
    useState<ActionBarStatus>("idle")
  const [successMessage, setSuccessMessage] = useState<string | undefined>()
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  const resolvedActionBarLabel = (() => {
    if (hasErrors) return undefined
    if (actionBarStatus === "loading") return actionBarSavingLabel
    if (actionBarStatus === "success")
      return successMessage ?? forms.actionBar.saved
    return actionBarIdleLabel
  })()

  // Handle form submission with status flow: idle -> loading -> success -> idle
  const handleSubmit = async (data: TValues) => {
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current)
      successTimerRef.current = null
    }

    flushSync(() => {
      setActionBarStatus("loading")
    })

    const cleanedData = { ...data }
    for (const key of Object.keys(cleanedData)) {
      if ((cleanedData as Record<string, unknown>)[key] === null) {
        ;(cleanedData as Record<string, unknown>)[key] = undefined
      }
    }
    const result = await onSubmit(cleanedData)

    if (result.success) {
      form.reset(data)
      resetErrorNavigation()
      setSuccessMessage(result.message)
      setActionBarStatus("success")

      successTimerRef.current = setTimeout(() => {
        setActionBarStatus("idle")
        setSuccessMessage(undefined)
        successTimerRef.current = null
      }, successMessageDuration ?? 2000)
    } else {
      setActionBarStatus("idle")

      if (result.errors) {
        Object.entries(result.errors).forEach(([field, message]) => {
          form.setError(field as Path<TValues>, { message })
        })
      }

      if (result.rootMessage) {
        form.setError("root", { message: result.rootMessage })
      }
    }
  }

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  // Handle discard action
  const handleDiscard = () => {
    form.reset()
    resetErrorNavigation()
    setActionBarStatus("idle")
    setSuccessMessage(undefined)
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current)
      successTimerRef.current = null
    }
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
        getValues: () => form.getValues() as Record<string, unknown>,
        setValue: (fieldName, value, options) => {
          form.setValue(
            fieldName as Path<TValues>,
            value as TValues[keyof TValues],
            {
              shouldValidate: options?.shouldValidate ?? true,
              shouldDirty: options?.shouldDirty ?? true,
            }
          )
        },
        setValues: (values, options) => {
          for (const [fieldName, value] of Object.entries(values)) {
            form.setValue(
              fieldName as Path<TValues>,
              value as TValues[keyof TValues],
              {
                shouldValidate: false,
                shouldDirty: options?.shouldDirty ?? true,
              }
            )
          }
          if (options?.shouldValidate !== false) {
            void form.trigger()
          }
        },
        trigger: async (fieldName) => {
          if (fieldName) {
            return form.trigger(fieldName as Path<TValues>)
          }
          return form.trigger()
        },
        getErrors: () => {
          const result: Record<string, string> = {}
          const { errors: currentErrors } = form.formState
          for (const [key, error] of Object.entries(currentErrors)) {
            if (
              key !== "root" &&
              error &&
              typeof error === "object" &&
              "message" in error
            ) {
              result[key] = (error.message as string) ?? ""
            }
          }
          return result
        },
        getFieldNames: () => {
          return Object.keys(form.getValues() as Record<string, unknown>)
        },
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

  // Auto-register with AI form registry (when available)
  const aiFormRegistry = useF0AiFormRegistry()
  const internalFormRef = useRef<F0FormRef | null>(null)
  // Keep a stable ref that mirrors formRef or internalFormRef
  const registryFormRef = formRef ?? internalFormRef

  useEffect(() => {
    if (aiFormRegistry) {
      // Mirror internal ref if no external formRef
      if (!formRef && registryFormRef !== formRef) {
        // Build a minimal ref for registry use when no external formRef is provided
        const refMethods: F0FormRef = {
          submit: () =>
            new Promise<void>((resolve, reject) => {
              form.handleSubmit(
                async (data) => {
                  await handleSubmit(data)
                  resolve()
                },
                () => reject(new Error("Form validation failed"))
              )()
            }),
          reset: () => {
            form.reset()
            resetErrorNavigation()
          },
          isDirty: () => form.formState.isDirty,
          getValues: () => form.getValues() as Record<string, unknown>,
          setValue: (fieldName, value, options) => {
            form.setValue(
              fieldName as Path<TValues>,
              value as TValues[keyof TValues],
              {
                shouldValidate: options?.shouldValidate ?? true,
                shouldDirty: options?.shouldDirty ?? true,
              }
            )
          },
          setValues: (values, options) => {
            for (const [fn, v] of Object.entries(values)) {
              form.setValue(fn as Path<TValues>, v as TValues[keyof TValues], {
                shouldValidate: false,
                shouldDirty: options?.shouldDirty ?? true,
              })
            }
            if (options?.shouldValidate !== false) {
              void form.trigger()
            }
          },
          trigger: async (fieldName) =>
            fieldName
              ? form.trigger(fieldName as Path<TValues>)
              : form.trigger(),
          getErrors: () => {
            const result: Record<string, string> = {}
            for (const [key, error] of Object.entries(form.formState.errors)) {
              if (
                key !== "root" &&
                error &&
                typeof error === "object" &&
                "message" in error
              ) {
                result[key] = (error.message as string) ?? ""
              }
            }
            return result
          },
          getFieldNames: () =>
            Object.keys(form.getValues() as Record<string, unknown>),
          _setStateCallback: () => {},
        }
        internalFormRef.current = refMethods
      }
      aiFormRegistry.register(
        name,
        registryFormRef,
        schema,
        sections,
        defaultValuesParamsSchema,
        defaultValuesFn
      )
      return () => {
        aiFormRegistry.unregister(name)
      }
    }
  }, [
    aiFormRegistry,
    name,
    schema,
    sections,
    formRef,
    registryFormRef,
    form,
    resetErrorNavigation,
    handleSubmit,
    defaultValuesParamsSchema,
  ])

  // Group contiguous switch fields
  const groupedItems = groupContiguousSwitches(definition)

  // Context value for anchor links
  const contextValue = useMemo(
    () => ({
      formName: name,
      initialFiles: props.initialFiles,
      renderCustomField: props.renderCustomField,
      isLoading: isFormLoading,
    }),
    [name, props.initialFiles, props.renderCustomField, isFormLoading]
  )

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
              <div
                key={groupedItem.item.field.id}
                className={cn(fieldGapClass, "empty:hidden")}
              >
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
            disabled={hasErrors || isFormLoading}
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
            <div className="sticky top-4 h-fit shrink-0 self-start pt-3">
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

        {!hideActionBar && (
          <FormActionBar
            isActionBar={isActionBar}
            isDirty={isDirty}
            actionBarStatus={actionBarStatus}
            hasErrors={hasErrors}
            errorCount={errorCount}
            resolvedActionBarLabel={resolvedActionBarLabel}
            centerActionBarInFrameContent={centerActionBarInFrameContent}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
            discardableChanges={discardableChanges}
            discardLabel={discardLabel}
            discardIcon={discardIcon}
            issuesOneLabel={forms.actionBar.issues.one}
            issuesOtherLabel={forms.actionBar.issues.other}
            onSubmit={form.handleSubmit(handleSubmit)}
            onDiscard={handleDiscard}
            goToPreviousError={goToPreviousError}
            goToNextError={goToNextError}
          />
        )}
      </FormProvider>
    </F0FormContext.Provider>
  )
}
