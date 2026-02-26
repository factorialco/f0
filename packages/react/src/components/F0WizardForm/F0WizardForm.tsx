import { useCallback, useMemo, useRef, useState } from "react"
import { z, ZodRawShape, ZodTypeAny } from "zod"

import type {
  F0FormSubmitResult,
  F0PerSectionSectionConfig,
  F0PerSectionSubmitConfig,
  F0SectionConfig,
} from "@/components/F0Form/types"
import type { F0WizardStep } from "@/components/F0Wizard/types"

import { F0FormSection } from "@/components/F0Form/components/F0FormSection"
import { F0Form } from "@/components/F0Form/F0Form"
import { getF0Config, unwrapToZodObject } from "@/components/F0Form/f0Schema"
import { useF0Form } from "@/components/F0Form/useF0Form"
import { F0Wizard } from "@/components/F0Wizard/F0Wizard"

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
  hasErrorsForStep?: (stepIndex: number) => boolean
): F0WizardStep[] {
  const stepsConfig: F0WizardFormStep[] =
    customSteps ??
    sectionIds.map((id) => ({
      title: sections?.[id]?.title ?? id,
      sectionIds: [id],
    }))

  return stepsConfig.map((stepConfig, index) => ({
    title: stepConfig.title,
    nextLabel: stepConfig.nextLabel,
    previousLabel: stepConfig.previousLabel,
    isCompleted: isStepAllDisabled(stepConfig.sectionIds)
      ? () => true
      : undefined,
    hasErrors: hasErrorsForStep ? () => hasErrorsForStep(index) : undefined,
    onNext: onNextForStep(index),
  }))
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
  submitLabel,
  onStepChanged,
  allowStepSkipping,
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

  const sectionIds = useMemo(() => Object.keys(schema), [schema])

  const fullDataRef = useRef<Record<string, unknown>>({})

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
      const ids = getSectionIdsForStep(stepIndex, sectionIds, customSteps)
      for (const sectionId of ids) {
        const sectionForm = sectionForms[sectionId]
        if (sectionForm) {
          await sectionForm.submit()
        }
      }
    },
    [sectionIds, customSteps, sectionForms]
  )

  const hasErrorsForStep = useCallback(
    (stepIndex: number): boolean => {
      const ids = getSectionIdsForStep(stepIndex, sectionIds, customSteps)
      return ids.some((id) => sectionErrorStateRef.current[id] === true)
    },
    [sectionIds, customSteps]
  )

  const wizardSteps = useMemo(
    () =>
      deriveWizardSteps(
        sectionIds,
        sections,
        customSteps,
        isStepAllDisabled,
        onNextForStep,
        hasErrorsForStep
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      sectionIds,
      sections,
      customSteps,
      isStepAllDisabled,
      onNextForStep,
      hasErrorsForStep,
      sectionErrorState,
    ]
  )

  const handleSectionSubmit = useCallback(
    (sectionId: string) =>
      async (data: Record<string, unknown>): Promise<F0FormSubmitResult> => {
        fullDataRef.current[sectionId] = data
        const result = await onSubmit({
          sectionId,
          data,
          fullData: { ...fullDataRef.current } as InferPerSectionValues<T>,
        } as Parameters<typeof onSubmit>[0])
        return result
      },
    [onSubmit]
  )

  return (
    <F0Wizard
      steps={wizardSteps}
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width={width}
      defaultStepIndex={defaultStepIndex}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      submitLabel={submitLabel}
      onStepChanged={onStepChanged}
      allowStepSkipping={allowStepSkipping}
    >
      {({ currentStep }) => {
        const currentSectionIds = getSectionIdsForStep(
          currentStep,
          sectionIds,
          customSteps
        )

        return (
          <div className="flex flex-col gap-6">
            {currentSectionIds.map((sectionId) => {
              const sectionSchema = schema[sectionId]
              if (!sectionSchema) return null

              const sectionConfig = sections?.[sectionId]
              const sectionDefaults = defaultValues?.[
                sectionId as keyof typeof defaultValues
              ] as Partial<z.infer<typeof sectionSchema>> | undefined

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
                />
              )
            })}
          </div>
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
}) {
  const form = useF0Form()

  sectionForms[sectionId] = form

  const prevHasErrors = useRef(form.hasErrors)
  if (prevHasErrors.current !== form.hasErrors) {
    prevHasErrors.current = form.hasErrors
    onErrorStateChange(form.hasErrors)
  }

  return (
    <F0FormSection
      formName={formName}
      sectionId={sectionId}
      schema={schema}
      sectionConfig={sectionConfig}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      submitConfig={
        {
          ...submitConfig,
          hideSubmitButton: true,
        } as F0PerSectionSubmitConfig & { hideSubmitButton: boolean }
      }
      errorTriggerMode={errorTriggerMode}
      formRef={form.formRef}
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
  submitLabel,
  onStepChanged,
  allowStepSkipping,
}: F0WizardFormSingleSchemaProps<TSchema>) {
  const {
    name,
    schema,
    sections,
    defaultValues,
    onSubmit,
    errorTriggerMode = "on-blur",
  } = formDefinition as F0FormDefinitionSingleSchema<TSchema>

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

  const wizardSteps = useMemo(
    () =>
      deriveWizardSteps(
        sectionIds,
        sections,
        customSteps,
        isStepAllDisabled,
        onNextForStep,
        hasErrorsForStep
      ),
    [
      sectionIds,
      sections,
      customSteps,
      isStepAllDisabled,
      onNextForStep,
      hasErrorsForStep,
    ]
  )

  const handleFinalSubmit = useCallback(async () => {
    await form.submit()
  }, [form])

  const handleFormSubmit = useCallback(
    async (data: z.infer<TSchema>): Promise<F0FormSubmitResult> => {
      return await onSubmit({ data })
    },
    [onSubmit]
  )

  return (
    <F0Wizard
      steps={wizardSteps}
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width={width}
      defaultStepIndex={defaultStepIndex}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      submitLabel={submitLabel}
      onSubmit={handleFinalSubmit}
      onStepChanged={onStepChanged}
      allowStepSkipping={allowStepSkipping}
    >
      {({ currentStep }) => {
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
          <div className="pb-5">
            <F0Form
              name={`${name}-step-${currentStep}`}
              schema={stepSchema}
              sections={stepSections}
              defaultValues={
                defaultValues as Partial<z.infer<typeof stepSchema>> | undefined
              }
              onSubmit={
                handleFormSubmit as (
                  data: z.infer<typeof stepSchema>
                ) => Promise<F0FormSubmitResult>
              }
              submitConfig={{ hideSubmitButton: true }}
              errorTriggerMode={errorTriggerMode}
              formRef={form.formRef}
            />
          </div>
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
