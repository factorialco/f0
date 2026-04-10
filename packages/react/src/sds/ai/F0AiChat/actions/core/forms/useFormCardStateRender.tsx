import { useCoAgentStateRender } from "@copilotkit/react-core"

import type { ModuleId } from "@/components/avatars/F0AvatarModule"

import { useAiChat } from "@/ai"

import { FormCard } from "../../../canvas/entities/form/FormCard"

interface CoAgentFormState {
  activeForm?: {
    formName: string
    description?: string
    module?: ModuleId
    cardTitle?: string
    cardDescription?: string
  } | null
}

/**
 * Renders a FormCard inline in the chat stream when the coagent state
 * contains an activeForm.
 *
 * Card metadata (cardTitle, cardDescription) is read from the frontend
 * registry when available, falling back to what the backend supplies in
 * the coagent state.
 *
 * Uses `useCoAgentStateRender` so the card appears as a message in
 * the CopilotKit chat stream, driven by coagent state changes.
 */
export function useFormCardStateRender() {
  const { agent: agentName } = useAiChat()

  useCoAgentStateRender<CoAgentFormState>({
    name: agentName || "one-workflow",
    render: ({ state }) => {
      const stateForm = state?.activeForm
      if (!stateForm) return null

      // Prefer registry data (has cardTitle/cardDescription from setActiveForm)
      // but fall back to coagent state for basic form info
      const cardTitle = stateForm.cardTitle || stateForm.formName
      const cardDescription =
        stateForm.cardDescription || stateForm.description || ""

      if (!cardTitle) return null

      return (
        <div className="mt-2">
          <FormCard
            formName={stateForm.formName}
            formDescription={stateForm.description}
            module={stateForm.module}
            cardTitle={cardTitle}
            cardDescription={cardDescription}
          />
        </div>
      )
    },
  })
}
