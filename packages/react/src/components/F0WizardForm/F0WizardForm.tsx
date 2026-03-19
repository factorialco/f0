import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { z, ZodRawShape, ZodTypeAny } from "zod"

import type {
  F0FormSubmitResult,
  F0PerSectionSectionConfig,
  F0PerSectionSubmitConfig,
  F0SectionConfig,
} from "@/components/F0Form/types"
import type { F0WizardStep } from "@/ui/F0Wizard/types"

import { F0FormSection } from "@/components/F0Form/components/F0FormSection"
import { F0FormSkeleton } from "@/components/F0Form/components/F0FormSkeleton"
import { F0Form } from "@/components/F0Form/F0Form"
import { getF0Config, unwrapToZodObject } from "@/components/F0Form/f0Schema"
import { useF0Form } from "@/components/F0Form/useF0Form"
import { F0ActionBar, type ActionBarStatus } from "@/experimental/F0ActionBar"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { F0Wizard } from "@/ui/F0Wizard/F0Wizard"

import type {
  F0FormDefinitionPerSection,
  F0FormDefinitionSingleSchema,
  F0FormSchema,
  F0PerSectionSchema,
  F0WizardFormPerSectionProps,
  F0WizardFormSingleSchemaProps,
  F0WizardFormStep,
  InferPerSectionValues,
} from "./types"

// =============================================================================
// Helpers
// =============================================================================

function areAllFieldsDisabled(schema: F0FormSchema): boolean {
  const objectSchema = unwrapToZodObject(schema)
  const shape = objectSchema.shape as Record<string, ZodTypeAny>
  const entries = Object.entries(shape)

  if (entries.length === 0) return false

  return entries.every(([, fieldSchema]) => {
    const config = getF0Config(fieldSchema)
    return config?.disabled === true
  })
}

function deriveSectionIdsFromSingleSchema(
  schema: F0FormSchema,
  sections?: Record<string, F0SectionConfig>
): string[] {
  if (sections) return Object.keys(sections)

  const objectSchema = unwrapToZodObject(schema)
  const shape = objectSchema.shape as Record<string, ZodTypeAny>
  const sectionSet = new Set<string>()

  for (const fieldSchema of Object.values(shape)) {
    const config = getF0Config(fieldSchema)
    if (config?.section) {
      sectionSet.add(config.section)
    }
  }

  return Array.from(sectionSet)
}

function buildSectionSubSchema<T extends ZodRawShape>(
  schema: z.ZodObject<T>,
  sectionIds: string[]
): z.ZodObject<Record<string, ZodTypeAny>> {
  const shape = schema.shape as Record<string, ZodTypeAny>
  const subShape: Record<string, ZodTypeAny> = {}

  for (const [key, fieldSchema] of Object.entries(shape)) {
    const config = getF0Config(fieldSchema)
    if (config?.section && sectionIds.includes(config.section)) {
      subShape[key] = fieldSchema
    }
  }

  return z.object(subShape)
}

function isStepFilled(
  schema: F0FormSchema,
  data: Record<string, unknown> | undefined,
  customIsCompleted?: (arg: { data: Record<string, unknown> }) => boolean
): boolean {
  const values = data ?? {}
  if (customIsCompleted) return customIsCompleted({ data: values })
  const objectSchema = unwrapToZodObject(schema)
  const shape = objectSchema.shape as Record<string, ZodTypeAny>
  return Object.entries(shape).every(([key, fieldSchema]) => {
    if (fieldSchema.isOptional()) return true
    const value = values[key]
    return value !== undefined && value !== null && value !== ""
  })
}

const SUCCESS_TIMER_MS = 3000

function useWizardActionBar() {
  const { forms } = useI18n()
  const [actionBarStatus, setActionBarStatus] =
    useState<ActionBarStatus>("idle")
  const [successMessage, setSuccessMessage] = useState<string | undefined>()
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current)
    }
  }, [])

  const showSuccess = useCallback((message?: string) => {
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current)
      successTimerRef.current = null
    }
    setSuccessMessage(message)
    setActionBarStatus("success")
    successTimerRef.current = setTimeout(() => {
      setActionBarStatus("idle")
      setSuccessMessage(undefined)
      successTimerRef.current = null
    }, SUCCESS_TIMER_MS)
  }, [])

  const label =
    actionBarStatus === "success"
      ? (successMessage ?? forms.actionBar.saved)
      : undefined

  const ActionBar = useMemo(
    () => (
      <F0ActionBar
        isOpen={actionBarStatus === "success"}
        variant="light"
        status={actionBarStatus}
        label={label}
      />
    ),
    [actionBarStatus, label]
  )

  return { showSuccess, ActionBar }
}

// =============================================================================
// Step derivation
// =============================================================================

function deriveWizardSteps(
  sectionIds: string[],
  sections:
    | Record<string, F0SectionConfig | F0PerSectionSectionConfig>
    | undefined,
  customSteps: F0WizardFormStep[] | undefined,
  isStepAllDisabled: (sectionIds: string[]) => boolean,
  onNextForStep: (stepIndex: number) => () => Promise<void>,
  hasErrorsForStep?: (stepIndex: number) => boolean,
  isStepDataFilled?: (stepIndex: number) => boolean
): F0WizardStep[] {
  const stepsConfig: F0WizardFormStep[] =
    customSteps ??
    sectionIds.map((id) => ({
      title: sections?.[id]?.title ?? id,
      sectionIds: [id],
    }))

  return stepsConfig.map((stepConfig, index) => {
    const allDisabled = isStepAllDisabled(stepConfig.sectionIds)
    const dataFilled = isStepDataFilled?.(index) ?? false

    return {
      title: stepConfig.title,
      nextLabel: stepConfig.nextLabel,
      previousLabel: stepConfig.previousLabel,
      isCompleted: allDisabled || dataFilled ? () => true : undefined,
      hasErrors: hasErrorsForStep ? () => hasErrorsForStep(index) : undefined,
      onNext: onNextForStep(index),
    }
  })
}

function getSectionIdsForStep(
  stepIndex: number,
  sectionIds: string[],
  customSteps?: F0WizardFormStep[]
): string[] {
  if (customSteps) {
    return customSteps[stepIndex]?.sectionIds ?? []
  }
  const id = sectionIds[stepIndex]
  return id ? [id] : []
}

// =============================================================================
// F0WizardForm — Per-section schema mode
// =============================================================================

function F0WizardFormPerSection<T extends F0PerSectionSchema>({
  formDefinition,
  steps: customSteps,
  isOpen,
  onClose,
  title,
  width,
  defaultStepIndex,
  nextLabel,
  previousLabel,
  onStepChanged,
  allowStepSkipping,
  autoCloseOnLastStepSubmit,
  linkAfterLastStepSubmit,
  autoSkipCompletedSteps = false,
  renderCustomField,
}: F0WizardFormPerSectionProps<T>) {
  const {
    name,
    schema,
    sections,
    defaultValues,
    onSubmit,
    submitConfig,
    errorTriggerMode = "on-blur",
  } = formDefinition as F0FormDefinitionPerSection<T>

  const submitLabel = submitConfig?.label

  const sectionIds = useMemo(() => Object.keys(schema), [schema])

  const effectiveSteps = useMemo(() => {
    if (!customSteps) return undefined

    const hasMultiSectionStep = customSteps.some(
      (step) => step.sectionIds.length > 1
    )

    if (hasMultiSectionStep) {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          "[F0WizardForm] Per-section schema mode does not support grouping " +
            "multiple sections into a single step. Each section requires its " +
            "own independent form and submit. Steps with multiple sectionIds " +
            "will be automatically split into separate steps."
        )
      }

      return customSteps.flatMap((step) =>
        step.sectionIds.map((id) => ({
          title: sections?.[id]?.title ?? step.title,
          sectionIds: [id],
          nextLabel: step.nextLabel,
          previousLabel: step.previousLabel,
        }))
      )
    }

    return customSteps
  }, [customSteps, sections])

  const fullDataRef = useRef<Record<string, unknown>>({})
  const currentStepRef = useRef(defaultStepIndex ?? 0)

  const sectionForms = useMemo(
    () =>
      Object.fromEntries(sectionIds.map((id) => [id, null])) as Record<
        string,
        ReturnType<typeof useF0Form> | null
      >,
    [sectionIds]
  )

  const [sectionErrorState, setSectionErrorState] = useState<
    Record<string, boolean>
  >({})

  const sectionErrorStateRef = useRef(sectionErrorState)
  sectionErrorStateRef.current = sectionErrorState

  const isStepAllDisabled = useCallback(
    (ids: string[]) =>
      ids.every((id) => {
        const sectionSchema = schema[id]
        return sectionSchema ? areAllFieldsDisabled(sectionSchema) : false
      }),
    [schema]
  )

  const onNextForStep = useCallback(
    (stepIndex: number) => async () => {
      const ids = getSectionIdsForStep(stepIndex, sectionIds, effectiveSteps)
      for (const sectionId of ids) {
        const sectionForm = sectionForms[sectionId]
        if (sectionForm) {
          await sectionForm.submit()
        }
      }
    },
    [sectionIds, effectiveSteps, sectionForms]
  )

  const hasErrorsForStep = useCallback(
    (stepIndex: number): boolean => {
      const ids = getSectionIdsForStep(stepIndex, sectionIds, effectiveSteps)
      return ids.some((id) => sectionErrorStateRef.current[id] === true)
    },
    [sectionIds, effectiveSteps]
  )

  const stepsConfig: F0WizardFormStep[] = useMemo(
    () =>
      effectiveSteps ??
      sectionIds.map((id) => ({
        title: sections?.[id]?.title ?? id,
        sectionIds: [id],
      })),
    [effectiveSteps, sectionIds, sections]
  )

  const isStepDataFilled = useCallback(
    (stepIndex: number): boolean => {
      if (!autoSkipCompletedSteps) return false
      const stepConfig = stepsConfig[stepIndex]
      if (!stepConfig) return false
      return stepConfig.sectionIds.every((id) => {
        const sectionSchema = schema[id]
        if (!sectionSchema) return false
        const data = (defaultValues?.[id as keyof typeof defaultValues] ??
          fullDataRef.current[id]) as Record<string, unknown> | undefined
        return isStepFilled(sectionSchema, data, stepConfig.isCompleted)
      })
    },
    [autoSkipCompletedSteps, stepsConfig, schema, defaultValues]
  )

  const computedDefaultStepIndex = useMemo(() => {
    if (defaultStepIndex !== undefined) return defaultStepIndex
    if (!autoSkipCompletedSteps) return undefined
    const firstIncomplete = stepsConfig.findIndex(
      (_, i) => !isStepDataFilled(i)
    )
    if (firstIncomplete === -1) return stepsConfig.length - 1
    return firstIncomplete
  }, [defaultStepIndex, autoSkipCompletedSteps, stepsConfig, isStepDataFilled])

  const wizardSteps = useMemo(
    () =>
      deriveWizardSteps(
        sectionIds,
        sections,
        effectiveSteps,
        isStepAllDisabled,
        onNextForStep,
        hasErrorsForStep,
        autoSkipCompletedSteps ? isStepDataFilled : undefined
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      sectionIds,
      sections,
      effectiveSteps,
      isStepAllDisabled,
      onNextForStep,
      hasErrorsForStep,
      sectionErrorState,
      autoSkipCompletedSteps,
      isStepDataFilled,
    ]
  )

  const lastSubmitResultRef = useRef<F0FormSubmitResult | null>(null)
  const { showSuccess, ActionBar } = useWizardActionBar()

  const handleSectionSubmit = useCallback(
    (sectionId: string) =>
      async (data: Record<string, unknown>): Promise<F0FormSubmitResult> => {
        fullDataRef.current[sectionId] = data
        const result = await onSubmit({
          sectionId,
          data,
          fullData: { ...fullDataRef.current } as InferPerSectionValues<T>,
        } as Parameters<typeof onSubmit>[0])
        lastSubmitResultRef.current = result
        if (result.success && result.message) {
          showSuccess(result.message)
        }
        return result
      },
    [onSubmit, showSuccess]
  )

  const handleLastStepCompleted = useCallback(() => {
    const result = lastSubmitResultRef.current
    if (!result?.success) return

    if (linkAfterLastStepSubmit) {
      const url = linkAfterLastStepSubmit({
        fullData: { ...fullDataRef.current } as InferPerSectionValues<T>,
      })
      window.location.href = url
      return
    }

    if (autoCloseOnLastStepSubmit) {
      onClose?.()
    }
  }, [autoCloseOnLastStepSubmit, linkAfterLastStepSubmit, onClose])

  const snapshotCurrentStepValues = useCallback(() => {
    const prevSectionIds = getSectionIdsForStep(
      currentStepRef.current,
      sectionIds,
      effectiveSteps
    )
    for (const id of prevSectionIds) {
      const form = sectionForms[id]
      if (form) {
        fullDataRef.current[id] = form.getValues()
      }
    }
  }, [sectionIds, effectiveSteps, sectionForms])

  const handleStepChanged = useCallback(
    (stepIndex: number) => {
      snapshotCurrentStepValues()
      currentStepRef.current = stepIndex
      onStepChanged?.(stepIndex)
    },
    [snapshotCurrentStepValues, onStepChanged]
  )

  return (
    <F0Wizard
      steps={wizardSteps}
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width={width}
      defaultStepIndex={computedDefaultStepIndex}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      submitLabel={submitLabel}
      onSubmit={handleLastStepCompleted}
      onStepChanged={handleStepChanged}
      allowStepSkipping={allowStepSkipping}
    >
      {({ currentStep }) => {
        if (formDefinition.isLoading) {
          return (
            <div className="flex flex-col gap-6 pb-5">
              {Object.entries(schema).map(([sectionId, sectionSchema]) => (
                <F0FormSkeleton key={sectionId} schema={sectionSchema} />
              ))}
            </div>
          )
        }

        const currentSectionIds = getSectionIdsForStep(
          currentStep,
          sectionIds,
          effectiveSteps
        )

        return (
          <>
            <div className="flex flex-col gap-6 pb-5">
              {currentSectionIds.map((sectionId) => {
                const sectionSchema = schema[sectionId]
                if (!sectionSchema) return null

                const sectionConfig = sections?.[sectionId]
                const submittedData = fullDataRef.current[sectionId] as
                  | Partial<z.infer<typeof sectionSchema>>
                  | undefined
                const originalDefaults = defaultValues?.[
                  sectionId as keyof typeof defaultValues
                ] as Partial<z.infer<typeof sectionSchema>> | undefined
                const sectionDefaults = submittedData ?? originalDefaults

                return (
                  <PerSectionFormWrapper
                    key={sectionId}
                    sectionId={sectionId}
                    formName={name}
                    schema={sectionSchema}
                    sectionConfig={sectionConfig}
                    defaultValues={sectionDefaults}
                    onSubmit={handleSectionSubmit(sectionId)}
                    submitConfig={submitConfig}
                    errorTriggerMode={errorTriggerMode}
                    sectionForms={sectionForms}
                    onErrorStateChange={(hasErrors) => {
                      setSectionErrorState((prev) => {
                        if (prev[sectionId] === hasErrors) return prev
                        return { ...prev, [sectionId]: hasErrors }
                      })
                    }}
                    renderCustomField={renderCustomField}
                  />
                )
              })}
            </div>
            {ActionBar}
          </>
        )
      }}
    </F0Wizard>
  )
}

/**
 * Wrapper that creates a useF0Form instance per section and wires it
 * to F0FormSection via formRef, reporting error state changes upward.
 */
function PerSectionFormWrapper<TSchema extends F0FormSchema>({
  sectionId,
  formName,
  schema,
  sectionConfig,
  defaultValues,
  onSubmit,
  submitConfig,
  errorTriggerMode,
  sectionForms,
  onErrorStateChange,
  renderCustomField,
}: {
  sectionId: string
  formName: string
  schema: TSchema
  sectionConfig?: F0PerSectionSectionConfig
  defaultValues?: Partial<z.infer<TSchema>>
  onSubmit: (data: z.infer<TSchema>) => Promise<F0FormSubmitResult>
  submitConfig?: F0PerSectionSubmitConfig
  errorTriggerMode: "on-blur" | "on-change" | "on-submit"
  sectionForms: Record<string, ReturnType<typeof useF0Form> | null>
  onErrorStateChange: (hasErrors: boolean) => void
  renderCustomField?: import("@/components/F0Form/types").RenderCustomFieldFunction
}) {
  const form = useF0Form()

  useEffect(() => {
    sectionForms[sectionId] = form
    return () => {
      sectionForms[sectionId] = null
    }
  }, [sectionForms, sectionId, form])

  const onErrorStateChangeRef = useRef(onErrorStateChange)
  onErrorStateChangeRef.current = onErrorStateChange

  useEffect(() => {
    onErrorStateChangeRef.current(form.hasErrors)
  }, [form.hasErrors])

  return (
    <F0FormSection
      formName={formName}
      sectionId={sectionId}
      schema={schema}
      sectionConfig={sectionConfig}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      submitConfig={{
        ...submitConfig,
        hideSubmitButton: true,
      }}
      errorTriggerMode={errorTriggerMode}
      formRef={form.formRef}
      renderCustomField={renderCustomField}
    />
  )
}

// =============================================================================
// F0WizardForm — Single schema mode
// =============================================================================

function F0WizardFormSingleSchema<TSchema extends F0FormSchema>({
  formDefinition,
  steps: customSteps,
  isOpen,
  onClose,
  title,
  width,
  defaultStepIndex,
  nextLabel,
  previousLabel,
  onStepChanged,
  allowStepSkipping,
  autoCloseOnLastStepSubmit,
  linkAfterLastStepSubmit,
  autoSkipCompletedSteps = false,
  renderCustomField,
}: F0WizardFormSingleSchemaProps<TSchema>) {
  const {
    name,
    schema,
    sections,
    defaultValues,
    onSubmit,
    submitConfig,
    errorTriggerMode = "on-blur",
  } = formDefinition as F0FormDefinitionSingleSchema<TSchema>

  const submitLabel = submitConfig?.label

  const objectSchema = useMemo(() => unwrapToZodObject(schema), [schema])

  const sectionIds = useMemo(
    () => deriveSectionIdsFromSingleSchema(schema, sections),
    [schema, sections]
  )

  const isStepAllDisabled = useCallback(
    (ids: string[]) => {
      const subSchema = buildSectionSubSchema(objectSchema, ids)
      return areAllFieldsDisabled(subSchema)
    },
    [objectSchema]
  )

  const form = useF0Form()
  const enteredValuesRef = useRef<Record<string, unknown>>(
    defaultValues ? { ...defaultValues } : {}
  )
  const currentStepRef = useRef(defaultStepIndex ?? 0)

  const onNextForStep = useCallback(
    (_stepIndex: number) => async () => {
      await form.submit()
    },
    [form]
  )

  const hasErrorsForStep = useCallback(
    (_stepIndex: number): boolean => {
      return form.hasErrors
    },
    [form.hasErrors]
  )

  const stepsConfig: F0WizardFormStep[] = useMemo(
    () =>
      customSteps ??
      sectionIds.map((id) => ({
        title: sections?.[id]?.title ?? id,
        sectionIds: [id],
      })),
    [customSteps, sectionIds, sections]
  )

  const isStepDataFilled = useCallback(
    (stepIndex: number): boolean => {
      if (!autoSkipCompletedSteps) return false
      const stepConfig = stepsConfig[stepIndex]
      if (!stepConfig) return false
      const subSchema = buildSectionSubSchema(
        objectSchema,
        stepConfig.sectionIds
      )
      const data = defaultValues as Record<string, unknown> | undefined
      return isStepFilled(subSchema, data, stepConfig.isCompleted)
    },
    [autoSkipCompletedSteps, stepsConfig, objectSchema, defaultValues]
  )

  const computedDefaultStepIndex = useMemo(() => {
    if (defaultStepIndex !== undefined) return defaultStepIndex
    if (!autoSkipCompletedSteps) return undefined
    const firstIncomplete = stepsConfig.findIndex(
      (_, i) => !isStepDataFilled(i)
    )
    if (firstIncomplete === -1) return stepsConfig.length - 1
    return firstIncomplete
  }, [defaultStepIndex, autoSkipCompletedSteps, stepsConfig, isStepDataFilled])

  const wizardSteps = useMemo(
    () =>
      deriveWizardSteps(
        sectionIds,
        sections,
        customSteps,
        isStepAllDisabled,
        onNextForStep,
        hasErrorsForStep,
        autoSkipCompletedSteps ? isStepDataFilled : undefined
      ),
    [
      sectionIds,
      sections,
      customSteps,
      isStepAllDisabled,
      onNextForStep,
      hasErrorsForStep,
      autoSkipCompletedSteps,
      isStepDataFilled,
    ]
  )

  const lastSubmitResultRef = useRef<F0FormSubmitResult | null>(null)
  const lastSubmitDataRef = useRef<z.infer<TSchema> | null>(null)
  const { showSuccess, ActionBar } = useWizardActionBar()

  const handleFormSubmit = useCallback(
    async (data: z.infer<TSchema>): Promise<F0FormSubmitResult> => {
      Object.assign(enteredValuesRef.current, data)
      const fullData = { ...enteredValuesRef.current } as z.infer<TSchema>
      lastSubmitDataRef.current = fullData
      const result = await onSubmit({ data: fullData })
      lastSubmitResultRef.current = result
      return result
    },
    [onSubmit]
  )

  const handleLastStepCompleted = useCallback(() => {
    const result = lastSubmitResultRef.current
    if (!result?.success) return

    showSuccess(result.message)

    if (linkAfterLastStepSubmit) {
      const url = linkAfterLastStepSubmit({
        fullData: lastSubmitDataRef.current as z.infer<TSchema>,
      })
      window.location.href = url
      return
    }

    if (autoCloseOnLastStepSubmit) {
      onClose?.()
    }
  }, [autoCloseOnLastStepSubmit, linkAfterLastStepSubmit, onClose, showSuccess])

  const handleStepChanged = useCallback(
    (stepIndex: number) => {
      const currentValues = form.getValues()
      Object.assign(enteredValuesRef.current, currentValues)
      currentStepRef.current = stepIndex
      onStepChanged?.(stepIndex)
    },
    [form, onStepChanged]
  )

  return (
    <F0Wizard
      steps={wizardSteps}
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width={width}
      defaultStepIndex={computedDefaultStepIndex}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      submitLabel={submitLabel}
      onSubmit={handleLastStepCompleted}
      onStepChanged={handleStepChanged}
      allowStepSkipping={allowStepSkipping}
    >
      {({ currentStep }) => {
        if (formDefinition.isLoading) {
          return (
            <div className="pb-5">
              <F0FormSkeleton schema={schema} sections={sections} />
            </div>
          )
        }

        const currentSectionIds = getSectionIdsForStep(
          currentStep,
          sectionIds,
          customSteps
        )

        const stepSchema = buildSectionSubSchema(
          objectSchema,
          currentSectionIds
        )
        const stepSections = currentSectionIds.reduce<
          Record<string, F0SectionConfig>
        >((acc, id) => {
          if (sections?.[id]) acc[id] = sections[id]
          return acc
        }, {})

        return (
          <>
            <div className="pb-5">
              <F0Form
                key={currentStep}
                name={`${name}-step-${currentStep}`}
                schema={stepSchema}
                sections={stepSections}
                defaultValues={
                  enteredValuesRef.current as
                    | Partial<z.infer<typeof stepSchema>>
                    | undefined
                }
                onSubmit={
                  handleFormSubmit as (
                    data: z.infer<typeof stepSchema>
                  ) => Promise<F0FormSubmitResult>
                }
                submitConfig={{ hideSubmitButton: true, hideActionBar: true }}
                errorTriggerMode={errorTriggerMode}
                formRef={form.formRef}
                renderCustomField={renderCustomField}
              />
            </div>
            {ActionBar}
          </>
        )
      }}
    </F0Wizard>
  )
}

// =============================================================================
// F0WizardForm — Public component (detects mode from definition._brand)
// =============================================================================

type F0WizardFormProps<T extends F0FormSchema | F0PerSectionSchema> =
  T extends F0FormSchema
    ? F0WizardFormSingleSchemaProps<T>
    : T extends F0PerSectionSchema
      ? F0WizardFormPerSectionProps<T>
      : never

export function F0WizardForm<T extends F0FormSchema | F0PerSectionSchema>(
  props: F0WizardFormProps<T>
) {
  if (props.formDefinition._brand === "per-section") {
    return (
      <F0WizardFormPerSection
        {...(props as unknown as F0WizardFormPerSectionProps<F0PerSectionSchema>)}
      />
    )
  }

  return (
    <F0WizardFormSingleSchema
      {...(props as unknown as F0WizardFormSingleSchemaProps<F0FormSchema>)}
    />
  )
}

F0WizardForm.displayName = "F0WizardForm"
