import { useCoAgent } from "@copilotkit/react-core"
import { useEffect, type ReactNode } from "react"
import { z } from "zod"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { F0FormSchema } from "@/patterns/F0Form/types"
import type { F0FormDefinitionSingleSchema } from "@/patterns/F0WizardForm/types"

import { useAiChat } from "@/ai"
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

// F0Form has complex generic inference that doesn't work well with the
// dynamic F0FormSchema union type. We narrow to single-schema definition.
const DynamicF0Form = F0Form as React.FC<{
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>
  formRef: ReturnType<typeof useF0Form>["formRef"]
}>

/**
 * Renders an interactive F0Form inside the canvas panel.
 * Reads form identity from the coagent shared state (`activeForm`)
 * and looks up the schema/entry from the form registry.
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
    ref?.setValues(currentValues)
  }, [JSON.stringify(currentValues)])

  const formDefinition = useF0FormDefinition({
    name: formName || "form",
    schema: entry?.schema ?? FALLBACK_SCHEMA,
    defaultValues: currentValues,
    sections: entry?.sections,
    module: entry?.module,
    description: entry?.description,
    submitConfig: { type: "default" },
    onSubmit: async ({ data }) => {
      await ref?.submit()
      void data
      return { success: true }
    },
  })

  if (!activeForm || !entry) return null

  return <DynamicF0Form formDefinition={formDefinition} formRef={formRef} />
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
    <div className="mx-auto max-w-2xl p-6">
      <VirtualFormContent key={`canvas-form-${formName}`} />
    </div>
  )
}

FormContent.displayName = "FormContent"
