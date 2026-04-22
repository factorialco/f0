import { useCoAgent } from "@copilotkit/react-core"
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { z } from "zod"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { F0FormSchema, F0FormLikeComponent } from "@/patterns/F0Form/types"
import type { F0FormDefinitionSingleSchema } from "@/patterns/F0WizardForm/types"

import { useAiChat } from "@/ai"
import { F0Button } from "@/components/F0Button"
import { CheckCircleAnimated } from "@/icons/animated"
import { useFormComponent } from "@/lib/providers/f0"
import { cn } from "@/lib/utils"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"
import { F0Form } from "@/patterns/F0Form/F0Form"
import { useF0Form } from "@/patterns/F0Form/useF0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"

function useCanvasFormComponent(): F0FormLikeComponent {
  const FormComponent = useFormComponent()
  // Bypass F0Form's distributive conditional generic — F0Form internally
  // casts to AnyF0FormProps, so this narrowed alias is safe.
  return (FormComponent ?? F0Form) as F0FormLikeComponent
}

interface CoAgentFormState {
  activeForm?: {
    formName: string
    description?: string
    module?: ModuleId
    formValues?: Record<string, unknown>
  } | null
}

const FALLBACK_SCHEMA = z.object({}) as unknown as F0FormSchema

// ---------- Submit success overlay ----------

function SubmitSuccessOverlay() {
  return (
    <div
      data-testid="canvas-form-success"
      className="absolute inset-0 z-10 flex items-center justify-center bg-f1-background"
    >
      <div className="flex flex-col items-center gap-2">
        <CheckCircleAnimated
          animate="animate"
          className="h-8 w-8 text-f1-icon-positive"
        />
        <span className="text-base font-medium text-f1-foreground">Saved</span>
      </div>
    </div>
  )
}

// ---------- Wizard canvas content ----------

function WizardCanvasContent({
  formDefinition,
  formRef,
  isSubmitting,
  hasErrors,
  onSubmit,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
  formRef: ReturnType<typeof useF0Form>["formRef"]
  isSubmitting: boolean
  hasErrors: boolean
  onSubmit: () => void
}) {
  const errorTriggerMode = formDefinition.errorTriggerMode ?? "on-blur"
  const CanvasForm = useCanvasFormComponent()

  return (
    <div className="flex h-full flex-col">
      <div className="relative min-h-0 flex-1 overflow-hidden [&>div]:h-full">
        {isSubmitting && <SubmitSuccessOverlay />}
        <CanvasForm
          formDefinition={formDefinition}
          styling={{
            showSectionsSidepanel: true,
          }}
          formRef={formRef}
        />
      </div>
      {!isSubmitting && (
        <div
          data-testid="canvas-form-footer"
          className="flex shrink-0 items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3"
        >
          <F0Button
            variant="default"
            onClick={onSubmit}
            disabled={hasErrors && errorTriggerMode !== "on-submit"}
            label={formDefinition.submitConfig?.label ?? "Submit"}
          />
        </div>
      )}
    </div>
  )
}

// ---------- Plain form content (no steps) ----------

function PlainFormContent({
  formDefinition,
  formRef,
  isSubmitting,
  hasErrors,
  onSubmit,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
  formRef: ReturnType<typeof useF0Form>["formRef"]
  isSubmitting: boolean
  hasErrors: boolean
  onSubmit: () => void
}) {
  const errorTriggerMode = formDefinition.errorTriggerMode ?? "on-blur"
  const CanvasForm = useCanvasFormComponent()
  const showSectionsSidepanel = !!(
    formDefinition.sections && Object.keys(formDefinition.sections).length > 2
  )

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "relative min-h-0 flex-1",
          showSectionsSidepanel
            ? "overflow-hidden [&>div]:h-full"
            : "overflow-auto p-6 pb-6"
        )}
      >
        {isSubmitting && <SubmitSuccessOverlay />}
        <CanvasForm
          formDefinition={formDefinition}
          formRef={formRef}
          styling={{ showSectionsSidepanel }}
        />
      </div>
      {!isSubmitting && (
        <div
          data-testid="canvas-form-footer"
          className="flex shrink-0 items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3"
        >
          <F0Button
            variant="default"
            onClick={onSubmit}
            disabled={hasErrors && errorTriggerMode !== "on-submit"}
            label={formDefinition.submitConfig?.label ?? "Submit"}
          />
        </div>
      )}
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
  const { formRef, hasErrors } = useF0Form()
  const { agent: agentName, closeCanvas } = useAiChat()
  const registry = useF0AiFormRegistry()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

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

  const handleSubmit = useCallback(() => {
    formRef.current?.submit().catch(() => {
      // Validation errors are displayed by the form
    })
  }, [formRef])

  const formDefinition = useF0FormDefinition({
    name: formName || "form",
    schema: entry?.schema ?? FALLBACK_SCHEMA,
    defaultValues: currentValues,
    sections: entry?.sections,
    steps: entry?.steps,
    module: entry?.module,
    description: entry?.description,
    errorTriggerMode: entry?.errorTriggerMode,
    submitConfig: {
      type: "default",
      hideSubmitButton: true,
      hideActionBar: true,
      ...(entry?.submitConfig?.label && { label: entry.submitConfig.label }),
    },
    onSubmit: async ({ data }) => {
      setIsSubmitting(true)
      await entry?.onSubmit?.(data as Record<string, unknown>)
      closeTimerRef.current = setTimeout(() => {
        registry?.resetFillVersion(formName)
        registry?.clearActiveForm()
        closeCanvas()
      }, 1500)
      return { success: true }
    },
  })

  if (!activeForm || !entry) return null

  if (formDefinition.steps?.length) {
    return (
      <WizardCanvasContent
        formDefinition={formDefinition}
        formRef={formRef}
        isSubmitting={isSubmitting}
        hasErrors={hasErrors}
        onSubmit={handleSubmit}
      />
    )
  }

  return (
    <PlainFormContent
      formDefinition={formDefinition}
      formRef={formRef}
      isSubmitting={isSubmitting}
      hasErrors={hasErrors}
      onSubmit={handleSubmit}
    />
  )
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
