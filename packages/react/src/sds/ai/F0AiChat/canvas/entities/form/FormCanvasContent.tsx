import { useCoAgent } from "@copilotkit/react-core"
import {
  useCallback,
  useEffect,
  useMemo,
  type ComponentType,
  type ReactNode,
} from "react"
import { z, type ZodTypeAny } from "zod"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type {
  F0FormSchema,
  F0FormPropsWithSingleSchemaDefinition,
  F0SectionConfig,
} from "@/patterns/F0Form/types"
import type {
  F0FormDefinitionSingleSchema,
  F0WizardFormStep,
} from "@/patterns/F0WizardForm/types"
import type { F0WizardStep } from "@/ui/F0Wizard"

import { useAiChat } from "@/ai"
import { F0Button } from "@/components/F0Button"
import ArrowLeft from "@/icons/app/ArrowLeft"
import ArrowRight from "@/icons/app/ArrowRight"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"
import { F0Form } from "@/patterns/F0Form/F0Form"
import { getF0Config, unwrapToZodObject } from "@/patterns/F0Form/f0Schema"
import { useF0Form } from "@/patterns/F0Form/useF0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"
import { WizardProvider } from "@/ui/F0Wizard/components/WizardProvider"
import { useWizardNavigation } from "@/ui/F0Wizard/hooks/useWizardNavigation"

interface CoAgentFormState {
  activeForm?: {
    formName: string
    description?: string
    module?: ModuleId
    formValues?: Record<string, unknown>
  } | null
}

const FALLBACK_SCHEMA = z.object({}) as unknown as F0FormSchema

// Bypass F0Form's distributive conditional generic — F0Form internally
// casts to AnyF0FormProps, so this narrowed alias is safe.
const F0CanvasForm = F0Form as unknown as ComponentType<
  F0FormPropsWithSingleSchemaDefinition<F0FormSchema>
>

// ---------- helpers (ported from F0WizardForm) ----------

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

// ---------- Wizard canvas content ----------

function WizardCanvasContent({
  formDefinition,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
}) {
  const { sections, steps } = formDefinition

  const sectionIds = useMemo(
    () => deriveSectionIdsFromSingleSchema(formDefinition.schema, sections),
    [formDefinition.schema, sections]
  )

  const form = useF0Form()

  const onNextForStep = useCallback(
    (_stepIndex: number) => async () => {
      // Save current values without blocking on validation errors —
      // the AI canvas lets users navigate freely between steps.
    },
    []
  )

  const stepsConfig: F0WizardFormStep[] = useMemo(
    () =>
      steps ??
      sectionIds.map((id) => ({
        title: sections?.[id]?.title ?? id,
        sectionIds: [id],
      })),
    [steps, sectionIds, sections]
  )

  const wizardSteps: F0WizardStep[] = useMemo(
    () =>
      stepsConfig.map((stepConfig, index) => ({
        title: stepConfig.title,
        nextLabel: stepConfig.nextLabel,
        previousLabel: stepConfig.previousLabel,
        onNext: onNextForStep(index),
      })),
    [stepsConfig, onNextForStep]
  )

  const handleSubmit = useCallback(async () => {
    await form.formRef.current?.submit()
  }, [form])

  const navigation = useWizardNavigation({
    steps: wizardSteps,
    onSubmit: handleSubmit,
    allowStepSkipping: true,
  })

  const isLastStep = navigation.currentStep === wizardSteps.length - 1
  const isFirstStep = navigation.currentStep === 0

  return (
    <WizardProvider
      currentStep={navigation.currentStep}
      totalSteps={wizardSteps.length}
      loading={navigation.loading}
      goToStep={navigation.goToStep}
      goNext={navigation.goNext}
      goPrevious={navigation.goPrevious}
      steps={wizardSteps}
      allowStepSkipping={true}
    >
      <F0CanvasForm
        formDefinition={formDefinition}
        styling={{
          showSectionsSidepanel: true,
        }}
        formRef={form.formRef}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3">
        {!isFirstStep && (
          <F0Button
            variant="outline"
            onClick={navigation.goPrevious}
            disabled={navigation.loading}
            icon={ArrowLeft}
            label={
              wizardSteps[navigation.currentStep]?.previousLabel ?? "Previous"
            }
          />
        )}
        <F0Button
          variant="default"
          onClick={() => void navigation.goNext()}
          loading={navigation.loading}
          icon={isLastStep ? undefined : ArrowRight}
          label={
            isLastStep
              ? (formDefinition.submitConfig?.label ?? "Submit")
              : (wizardSteps[navigation.currentStep]?.nextLabel ?? "Next")
          }
        />
      </div>
    </WizardProvider>
  )
}

// ---------- Plain form content (no steps) ----------

function PlainFormContent({
  formDefinition,
  formRef,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
  formRef: ReturnType<typeof useF0Form>["formRef"]
}) {
  const showSectionsSidepanel = !!(
    formDefinition.sections && Object.keys(formDefinition.sections).length > 2
  )

  const formStyling = useMemo(
    () => ({
      showSectionsSidepanel,
    }),
    [showSectionsSidepanel]
  )

  return (
    <div className={!showSectionsSidepanel ? "p-6" : undefined}>
      <F0CanvasForm
        formDefinition={formDefinition}
        formRef={formRef}
        styling={formStyling}
      />
    </div>
  )
}

// ---------- Virtual form content (router) ----------

/**
 * Renders an interactive F0Form inside the canvas panel.
 * Reads form identity from the coagent shared state (`activeForm`)
 * and looks up the schema/entry from the form registry.
 *
 * When the form definition includes steps, renders a wizard-style
 * layout with WizardSteps sidebar, per-step form content, and
 * Previous/Next/Submit navigation.
 */
function VirtualFormContent() {
  const { formRef } = useF0Form()
  const { agent: agentName } = useAiChat()
  const registry = useF0AiFormRegistry()

  const { state } = useCoAgent<CoAgentFormState>({
    name: agentName || "one-workflow",
  })

  const activeForm = state?.activeForm
  const formName = activeForm?.formName ?? ""
  const entry = formName ? registry?.get(formName) : undefined
  const ref = entry?.ref.current
  const currentValues = activeForm?.formValues ?? {}

  useEffect(() => {
    ref?.setValues(currentValues, { shouldDirty: true, shouldValidate: false })
  }, [formName, JSON.stringify(currentValues)])

  const formDefinition = useF0FormDefinition({
    name: formName || "form",
    schema: entry?.schema ?? FALLBACK_SCHEMA,
    defaultValues: currentValues,
    sections: entry?.sections,
    steps: entry?.steps,
    module: entry?.module,
    description: entry?.description,
    submitConfig: {
      type: "default",
      hideSubmitButton: true,
      hideActionBar: true,
    },
    onSubmit: async ({ data }) => {
      await entry?.onSubmit?.(data as Record<string, unknown>)
      return { success: true }
    },
  })

  if (!activeForm || !entry) return null

  if (formDefinition.steps?.length) {
    return <WizardCanvasContent formDefinition={formDefinition} />
  }

  return <PlainFormContent formDefinition={formDefinition} formRef={formRef} />
}

/**
 * Canvas panel content for forms.
 * Propless — reads the active form from coagent shared state
 * and delegates to VirtualFormContent for rendering.
 */
export function FormContent(): ReactNode {
  const { agent: agentName } = useAiChat()

  const { state } = useCoAgent<CoAgentFormState>({
    name: agentName || "one-workflow",
  })

  const formName = state?.activeForm?.formName

  if (!formName) return null

  return (
    <div className="mx-auto h-full">
      <VirtualFormContent />
    </div>
  )
}

FormContent.displayName = "FormContent"
