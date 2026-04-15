import { useCoAgent } from "@copilotkit/react-core"
import {
  useCallback,
  useEffect,
  useState,
  type ComponentType,
  type ReactNode,
} from "react"
import { z } from "zod"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type {
  F0FormSchema,
  F0FormPropsWithSingleSchemaDefinition,
} from "@/patterns/F0Form/types"
import type { F0FormDefinitionSingleSchema } from "@/patterns/F0WizardForm/types"

import { useAiChat } from "@/ai"
import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"
import { F0Form } from "@/patterns/F0Form/F0Form"
import { useF0Form } from "@/patterns/F0Form/useF0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"

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

// ---------- Wizard canvas content ----------

function WizardCanvasContent({
  formDefinition,
}: {
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
}) {
  const form = useF0Form()

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = useCallback(async () => {
    setSubmitting(true)
    try {
      await form.formRef.current?.submit()
    } finally {
      setSubmitting(false)
    }
  }, [form])

  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 flex-1 overflow-hidden [&>div]:h-full">
        <F0CanvasForm
          formDefinition={formDefinition}
          styling={{
            showSectionsSidepanel: true,
          }}
          formRef={form.formRef}
        />
      </div>
      <div className="flex shrink-0 items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3">
        <F0Button
          variant="default"
          onClick={() => void handleSubmit()}
          loading={submitting}
          label={formDefinition.submitConfig?.label ?? "Submit"}
        />
      </div>
    </div>
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

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = useCallback(async () => {
    setSubmitting(true)
    try {
      await formRef.current?.submit()
    } finally {
      setSubmitting(false)
    }
  }, [formRef])

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "min-h-0 flex-1",
          showSectionsSidepanel
            ? "overflow-hidden [&>div]:h-full"
            : "overflow-auto p-6 pb-6"
        )}
      >
        <F0CanvasForm
          formDefinition={formDefinition}
          formRef={formRef}
          styling={{ showSectionsSidepanel }}
        />
      </div>
      <div className="flex shrink-0 items-center justify-end gap-2 border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background px-6 py-3">
        <F0Button
          variant="default"
          onClick={() => void handleSubmit()}
          loading={submitting}
          label={formDefinition.submitConfig?.label ?? "Submit"}
        />
      </div>
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
    errorTriggerMode: entry?.errorTriggerMode,
    submitConfig: {
      type: "default",
      hideSubmitButton: true,
      hideActionBar: true,
      ...(entry?.submitConfig?.label && { label: entry.submitConfig.label }),
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
